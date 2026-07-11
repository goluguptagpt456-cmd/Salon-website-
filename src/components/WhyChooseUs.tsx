import { motion } from "motion/react";
import { USPS } from "../data";
import { Sparkles, Star, CalendarRange, Award } from "lucide-react";

export default function WhyChooseUs() {
  const iconMap = [
    Award, // Unisex
    Star, // Rated
    CalendarRange, // Booking
    Sparkles // Premium
  ];

  return (
    <section id="why-fiora" className="py-24 md:py-32 bg-charcoal-950 relative border-t border-charcoal-900 overflow-hidden">
      <div className="absolute top-1/4 left-[10%] w-[400px] h-[400px] rounded-full bg-gold-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-2xl mx-auto mb-16 md:mb-24"
        >
          <span className="text-[11px] font-mono tracking-[0.4em] uppercase text-gold-400 block mb-3">
            Why Fiora?
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-white tracking-wide">
            Uncompromising Excellence
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "64px" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="h-0.5 bg-gold-400 mx-auto my-6" 
          />
          <p className="text-charcoal-400 text-xs md:text-sm tracking-widest uppercase leading-relaxed font-light">
            We operate by custom appointment slots to offer undivided dedication, world-class products, and precise execution.
          </p>
        </motion.div>

        {/* USP Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {USPS.map((usp, idx) => {
            const Icon = iconMap[idx];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.15 }}
                className="p-6 rounded-2xl border border-white/5 bg-[#151515]/40 hover:bg-[#151515]/80 hover:border-gold-500/40 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(197,160,89,0.15)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Gold Line Icon */}
                  <div className="w-12 h-12 rounded-xl border border-gold-400/20 bg-charcoal-900/60 flex items-center justify-center mb-6 text-gold-400">
                    <Icon className="w-5 h-5 text-gold-400" />
                  </div>
                  
                  <h3 className="font-serif text-lg text-white font-medium mb-3">
                    {usp.title}
                  </h3>
                  
                  <p className="text-xs text-charcoal-300 leading-relaxed">
                    {usp.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-charcoal-900/40 mt-6 flex justify-between items-center text-[10px] font-mono tracking-wider text-gold-400">
                  <span>STRICT ACCREDITATION</span>
                  <span>0{idx+1}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
