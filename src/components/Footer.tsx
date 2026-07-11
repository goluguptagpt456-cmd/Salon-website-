import { Scissors, Instagram, Facebook, Mail, ExternalLink } from "lucide-react";
import { motion } from "motion/react";

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="bg-[#050505] border-t border-charcoal-900 py-16 md:py-24 relative overflow-hidden"
    >
      {/* Decorative subtle gold gradient accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[100px] rounded-full bg-gold-600/5 blur-[50px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Logo & Tagline column (4 Cols) */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full border border-gold-400/30 flex items-center justify-center bg-charcoal-950">
                <Scissors className="w-4.5 h-4.5 text-gold-400" />
              </div>
              <div>
                <span className="font-serif text-lg tracking-widest text-white uppercase font-bold">
                  FIORA
                </span>
                <span className="text-[8px] font-mono tracking-[0.25em] text-gold-400 uppercase block -mt-1">
                  Family Beauty Salon
                </span>
              </div>
            </div>
            
            <p className="text-xs text-charcoal-400 font-serif leading-relaxed italic pt-2">
              "Beauty. Style. Confidence."
            </p>

            <p className="text-[11px] text-charcoal-500 leading-relaxed font-sans pt-2">
              Kakkanad's premier unisex sanctuary for refined styling, elite skin treatments, and breathtaking bridal lookouts.
            </p>
          </div>

          {/* Quick Links column (2 Cols) */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-gold-400 font-bold">
              Navigation
            </h4>
            <div className="flex flex-col gap-2.5 text-xs">
              <a href="#about" className="text-charcoal-400 hover:text-white transition-colors">
                Our Story
              </a>
              <a href="#services" className="text-charcoal-400 hover:text-white transition-colors">
                Services Menu
              </a>
              <a href="#gallery" className="text-charcoal-400 hover:text-white transition-colors">
                Spaces Gallery
              </a>
            </div>
          </div>

          {/* Working Hours column (3 Cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-gold-400 font-bold">
              Salon Schedule
            </h4>
            <div className="text-xs space-y-2 text-charcoal-300">
              <div className="flex justify-between font-mono">
                <span>DAILY</span>
                <span>8:30 AM – 10:00 PM</span>
              </div>
              <div className="h-px bg-charcoal-900/60 my-2" />
              <p className="text-[10px] text-charcoal-400 leading-relaxed">
                Advance booking required. Emergency appointments or specific hours can be arranged post-consultation.
              </p>
            </div>
          </div>

          {/* Social / Connect column (3 Cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.3em] text-gold-400 font-bold">
              Connect With Us
            </h4>
            <div className="text-xs space-y-2 text-charcoal-300 font-mono">
              <p className="text-white font-bold">062823 25094</p>
              <p className="text-charcoal-400 font-sans text-[11px] leading-relaxed">
                Infopark Expy, Rajagiri Valley, Kakkanad, Kochi, Kerala 682039
              </p>
            </div>

            {/* Social channels icons list */}
            <div className="flex gap-3 pt-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-charcoal-900 bg-charcoal-950 flex items-center justify-center text-charcoal-400 hover:text-gold-400 hover:border-gold-400/20 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-charcoal-900 bg-charcoal-950 flex items-center justify-center text-charcoal-400 hover:text-gold-400 hover:border-gold-400/20 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="mailto:contact@fiorasalon.com"
                className="w-8 h-8 rounded-full border border-charcoal-900 bg-charcoal-950 flex items-center justify-center text-charcoal-400 hover:text-gold-400 hover:border-gold-400/20 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Copyright separator bar */}
        <div className="mt-16 md:mt-24 pt-8 border-t border-charcoal-900/60 max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-mono uppercase tracking-widest text-charcoal-500">
            &copy; {new Date().getFullYear()} Fiora Family Beauty Salon. All rights reserved.
          </p>
          <div className="flex gap-4 text-[10px] font-mono uppercase tracking-widest text-charcoal-500">
            <a href="#about" className="hover:text-gold-400">Privacy Policy</a>
            <span className="text-charcoal-800">|</span>
            <a href="#booking-section" className="hover:text-gold-400">Terms of Service</a>
          </div>
        </div>

      </div>
    </motion.footer>
  );
}
