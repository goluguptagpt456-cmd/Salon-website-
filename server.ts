import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

// Body parser
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// In-memory or file-based bookings database
const BOOKINGS_FILE = path.join(process.cwd(), "bookings.json");

function readBookings() {
  try {
    if (fs.existsSync(BOOKINGS_FILE)) {
      const data = fs.readFileSync(BOOKINGS_FILE, "utf-8");
      return JSON.parse(data);
    }
  } catch (error) {
    console.error("Error reading bookings file:", error);
  }
  return [];
}

function writeBooking(booking: any) {
  try {
    const bookings = readBookings();
    bookings.push({
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      ...booking
    });
    fs.writeFileSync(BOOKINGS_FILE, JSON.stringify(bookings, null, 2), "utf-8");
    return bookings;
  } catch (error) {
    console.error("Error writing booking file:", error);
  }
  return [];
}

// Initialize GoogleGenAI
let ai: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI {
  if (!ai) {
    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      console.warn("GEMINI_API_KEY is not defined in environment variables.");
    }
    ai = new GoogleGenAI({
      apiKey: key || "",
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return ai;
}

// --- API ROUTES ---

// 1. Submit a booking appointment
app.post("/api/bookings", (req, res) => {
  const { name, phone, service, date, time, notes } = req.body;

  if (!name || !phone || !service || !time) {
    return res.status(400).json({ error: "Missing required booking details." });
  }

  const booking = { name, phone, service, date: date || new Date().toISOString().split('T')[0], time, notes };
  const allBookings = writeBooking(booking);
  
  return res.status(200).json({ 
    success: true, 
    message: "Appointment successfully requested!", 
    booking,
    allBookings 
  });
});

// 2. Retrieve all active bookings
app.get("/api/bookings", (req, res) => {
  const bookings = readBookings();
  res.json({ bookings });
});

// 3. Gemini AI Style Consultant (with Google Search Grounding)
app.post("/api/gemini/consult", async (req, res) => {
  const { messages, userQuery } = req.body;
  
  if (!userQuery && (!messages || messages.length === 0)) {
    return res.status(400).json({ error: "No message or prompt provided." });
  }

  try {
    const client = getGeminiClient();
    
    // Construct search-enabled style consultation prompt
    const systemInstruction = `You are the premium virtual AI beauty and style consultant for "Fiora Family Beauty Salon" in Kakkanad, Kochi.
Fiora is an elite, high-end family unisex salon located at Infopark Expy, Rajagiri Valley, Kakkanad, Kochi, Kerala.
Our services include: Haircut, Blowouts, Balayage, Box Braids, Hair Extensions, Hair Threading, Braids, Perms, Bridal Services, Eyelash Extensions, Permanent Makeup, Microblading, Makeup Services, Facials, Acne Treatment, Eyebrow Threading, Body/Brazilian Waxing, Laser Hair Removal, Spa Services, Massage.
We have a 4.6★ rating from over 370 reviews.

Instructions:
1. Provide personalized style recommendations, skin treatments, or beauty routines.
2. Use Google Search grounding to find the latest luxury trends, celebrity styles, and appropriate techniques.
3. Keep your tone extremely sophisticated, polite, and elite. Emphasize personalized luxury.
4. Encourage booking a custom consultation at our Kochi salon for professional assessment.
5. Provide helpful and practical advice, avoiding generic suggestions.`;

    // Construct conversation payload
    let promptContent = userQuery;
    if (messages && messages.length > 0) {
      // Re-create simple message log for context if needed, or send the latest query
      const conversationHistory = messages.map((m: any) => `${m.role === "user" ? "User" : "Consultant"}: ${m.content}`).join("\n");
      promptContent = `${conversationHistory}\nUser: ${userQuery}\nConsultant:`;
    }

    const response = await client.models.generateContent({
      model: "gemini-3.5-flash",
      contents: promptContent,
      config: {
        systemInstruction,
        tools: [{ googleSearch: {} }],
      },
    });

    const text = response.text || "I apologize, I am unable to generate a recommendation at this moment.";
    
    // Extract grounding URLs if present
    const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
    const sources = groundingChunks.map((chunk: any) => ({
      title: chunk.web?.title || "Search Reference",
      uri: chunk.web?.uri || ""
    })).filter((src: any) => src.uri !== "");

    return res.json({
      text,
      sources
    });
  } catch (error: any) {
    console.error("Gemini Consult Error:", error);
    return res.status(500).json({ 
      error: "Failed to process consultation request.",
      details: error.message 
    });
  }
});

// 4. Gemini High-Quality Style Visualizer (Image Generation)
app.post("/api/gemini/generate-image", async (req, res) => {
  const { prompt, size, aspectRatio } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required for style visualization." });
  }

  // Map image size parameters
  const mappedSize = size === "4K" ? "4K" : size === "2K" ? "2K" : "1K";
  // Aspect ratio mapping
  const mappedAspectRatio = aspectRatio || "1:1";

  try {
    const client = getGeminiClient();
    
    // We append quality modifiers to the prompt to make sure it looks elite and realistic
    const enhancedPrompt = `${prompt}, ultra-premium high-end beauty salon style shot, editorial photography, elegant lighting, professional styling, highly detailed, realistic texture`;

    console.log(`Generating style visualization with model 'gemini-3-pro-image' for size: ${mappedSize}, aspect: ${mappedAspectRatio}`);
    
    const response = await client.models.generateContent({
      model: "gemini-3-pro-image",
      contents: {
        parts: [{ text: enhancedPrompt }]
      },
      config: {
        imageConfig: {
          aspectRatio: mappedAspectRatio,
          imageSize: mappedSize
        }
      }
    });

    let base64Image = null;
    let textResponse = "";

    const candidates = response.candidates;
    if (candidates && candidates.length > 0 && candidates[0].content?.parts) {
      for (const part of candidates[0].content.parts) {
        if (part.inlineData) {
          base64Image = part.inlineData.data;
        } else if (part.text) {
          textResponse += part.text;
        }
      }
    }

    if (base64Image) {
      return res.json({
        success: true,
        imageUrl: `data:image/png;base64,${base64Image}`,
        prompt,
        enhancedPrompt
      });
    } else {
      console.warn("No inline image data found in candidate parts. Trying fallback text/error.");
      return res.status(500).json({
        error: "No style image was generated by the model.",
        textResponse
      });
    }

  } catch (error: any) {
    console.error("Gemini Image Generation Error:", error);

    // If gemini-3-pro-image isn't available or fails, attempt a fallback with gemini-3.1-flash-image
    try {
      console.log("Attempting fallback image generation with 'gemini-3.1-flash-image'...");
      const client = getGeminiClient();
      const enhancedPrompt = `${prompt}, premium luxury beauty style shot, professional editorial photography, high resolution`;
      const responseFallback = await client.models.generateContent({
        model: "gemini-3.1-flash-image",
        contents: {
          parts: [{ text: enhancedPrompt }]
        },
        config: {
          imageConfig: {
            aspectRatio: mappedAspectRatio,
            imageSize: mappedSize === "4K" ? "4K" : mappedSize === "2K" ? "2K" : "1K"
          }
        }
      });

      let base64Image = null;
      if (responseFallback.candidates?.[0]?.content?.parts) {
        for (const part of responseFallback.candidates[0].content.parts) {
          if (part.inlineData) {
            base64Image = part.inlineData.data;
          }
        }
      }

      if (base64Image) {
        return res.json({
          success: true,
          imageUrl: `data:image/png;base64,${base64Image}`,
          prompt,
          fallbackUsed: true
        });
      }
    } catch (fallbackError: any) {
      console.error("Fallback Image Generation Error:", fallbackError);
    }

    return res.status(500).json({ 
      error: "Style visualizer is temporarily unavailable. Please make sure your API key is correctly configured.",
      details: error.message 
    });
  }
});

// --- VITE MIDDLEWARE SETUP ---
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Fiora Salon Full-Stack Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
