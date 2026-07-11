import { motion } from "motion/react";
import { Star, ArrowDown, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Image with elegant dark vignette overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-[8000ms] scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=2000')`,
          filter: "brightness(0.32) contrast(1.05)"
        }}
      />
      
      {/* Absolute Gold Vignette */}
      <div className="absolute inset-0 z-5 bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-black/80" />

      {/* Decorative Gold Light Beam */}
      <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[80%] h-[60%] rounded-full bg-gradient-radial from-gold-500/10 via-transparent to-transparent blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6 flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-400/25 bg-charcoal-950/80 backdrop-blur-sm shadow-xl shadow-black/50"
        >
          <div className="flex items-center gap-0.5 text-gold-400">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span className="text-xs font-semibold font-mono tracking-wider">4.6</span>
          </div>
          <span className="w-1 h-1 rounded-full bg-gold-400/40" />
          <span className="text-[10px] uppercase tracking-widest text-charcoal-300 font-mono">
            374 Verified Reviews
          </span>
          <span className="w-1 h-1 rounded-full bg-gold-400/40 sm:block hidden" />
          <div className="items-center gap-1 text-gold-400 sm:flex hidden">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span className="text-[9px] uppercase tracking-widest font-mono">Elite Salon</span>
          </div>
        </motion.div>

        {/* Fiora Main Logo Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative"
        >
          {/* Subtle gold backglow */}
          <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-gold-600/10 to-gold-400/10 blur-xl opacity-75" />
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl tracking-[0.2em] font-light text-white leading-none relative">
            FIORA
          </h1>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 font-serif text-lg md:text-2xl text-gold-200/80 tracking-[0.4em] uppercase font-light"
        >
          Beauty. Style. Confidence.
        </motion.p>

        {/* Line divider */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "80px" }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent my-8"
        />

        {/* Small Intro Details */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="text-xs md:text-sm text-charcoal-300 font-sans tracking-widest uppercase max-w-md mb-10 leading-relaxed font-light"
        >
          Kakkanad's premier unisex family destination for elite hair, skin, nail, and bridal artistry.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md"
        >
          <a
            href="#booking-section"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-black font-bold text-xs uppercase tracking-[0.2em] shadow-lg shadow-gold-500/10 hover:shadow-gold-500/30 hover:scale-[1.03] transition-all duration-300 text-center cursor-pointer"
          >
            Book Appointment
          </a>
          <a
            href="https://wa.me/916282325094?text=Hello%20Fiora%20Family%20Beauty%20Salon!%20I'd%20like%20to%20book%20a%20premium%20styling%20appointment."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-gold-400/40 text-gold-300 font-bold text-xs uppercase tracking-[0.2em] hover:bg-gold-500/10 hover:border-gold-400 hover:shadow-[0_0_15px_rgba(197,160,89,0.2)] hover:text-white hover:scale-[1.03] transition-all duration-300 text-center cursor-pointer"
          >
            WhatsApp Us
          </a>
        </motion.div>
      </div>

      {/* Elegant Scroll Down Arrow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-gold-400 font-mono">
          Scroll
        </span>
        <ArrowDown className="w-4 h-4 text-gold-400 animate-bounce" />
      </motion.div>
    </section>
  );
}
