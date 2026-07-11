export interface Service {
  name: string;
  category: "Hair" | "Skin" | "Nail" | "Makeup";
  description: string;
  duration?: string;
}

export interface Booking {
  id?: string;
  name: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  notes?: string;
  createdAt?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  date: string;
}

export interface ChatMessage {
  id: string;
  role: "user" | "model";
  content: string;
  timestamp: Date;
  sources?: { title: string; uri: string }[];
}

export interface GeneratedImage {
  imageUrl: string;
  prompt: string;
  timestamp: string;
  size: "1K" | "2K" | "4K";
  aspectRatio: string;
}
