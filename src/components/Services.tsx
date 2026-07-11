import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SERVICES } from "../data";
import { Scissors, Sparkles, Smile, HandHeart, Calendar } from "lucide-react";

export default function Services() {
  const [activeCategory, setActiveCategory] = useState<"Hair" | "Skin" | "Nail" | "Makeup">("Hair");

  const categories = [
    { name: "Hair", icon: Scissors, desc: "Bespoke cuts, coloring, extensions, & wave artistry" },
    { name: "Skin", icon: Sparkles, desc: "Clinical Hydrafacials, acne therapy, & gentle threading" },
    { name: "Nail", icon: HandHeart, desc: "Restorative hot stone pedicures & deep tissue therapy" },
    { name: "Makeup", icon: Smile, desc: "Elite bridal makeovers & permanent micro-pigmentation" }
  ] as const;

  const filteredServices = SERVICES.filter(service => service.category === activeCategory);

  return (
    <section id="services" className="py-24 md:py-32 bg-charcoal-950 relative border-t border-charcoal-900">
      {/* Absolute background gold ambient light */}
      <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] rounded-full bg-gold-600/5 blur-[150px] pointer-events-none" />

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
            The Service Menu
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-white tracking-wide">
            Elite Artistry & Care
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "64px" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="h-0.5 bg-gold-400 mx-auto my-6" 
          />
          <p className="text-charcoal-400 text-xs md:text-sm tracking-widest uppercase leading-relaxed font-light">
            Indulge in our curated treatments. Prices are customized post-consultation to ensure a bespoke approach for your style goals.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16"
        >
          {categories.map((cat) => {
            const IconComponent = cat.icon;
            const isActive = activeCategory === cat.name;
            return (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`relative p-5 rounded-2xl flex flex-col items-center justify-center text-center gap-3 transition-all duration-300 border ${
                  isActive
                    ? "border-gold-400 bg-charcoal-900/40 shadow-xl shadow-gold-500/5"
                    : "border-charcoal-900 bg-charcoal-950/20 hover:border-gold-400/30"
                }`}
              >
                {/* Active indicator bar */}
                {isActive && (
                  <motion.div
                    layoutId="active-tab"
                    className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-500 to-gold-300 rounded-t-2xl"
                  />
                )}
                <IconComponent className={`w-6 h-6 transition-colors duration-300 ${isActive ? "text-gold-400" : "text-charcoal-400"}`} />
                <div>
                  <h3 className={`text-xs uppercase tracking-widest font-bold transition-colors duration-300 ${isActive ? "text-white" : "text-charcoal-300"}`}>
                    {cat.name}
                  </h3>
                  <p className="text-[9px] text-charcoal-500 mt-1 font-mono tracking-wider hidden sm:block line-clamp-1">
                    {cat.desc}
                  </p>
                </div>
              </button>
            );
          })}
        </motion.div>

        {/* Active Category Description */}
        <div className="max-w-4xl mx-auto mb-10 text-center">
          <motion.p
            key={activeCategory}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs uppercase font-mono tracking-widest text-gold-400/80"
          >
            {categories.find(c => c.name === activeCategory)?.desc}
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, idx) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 15, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.1 }}
                className="group relative p-6 rounded-2xl border border-white/5 bg-[#151515]/40 hover:bg-[#151515]/80 hover:border-gold-500/40 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(197,160,89,0.15)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category icon small line badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[9px] font-mono tracking-widest uppercase text-gold-500 bg-gold-500/5 px-2.5 py-1 rounded-full border border-gold-500/10">
                      {service.category}
                    </span>
                    {service.duration && (
                      <span className="text-[10px] font-mono text-charcoal-400 flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-gold-400/60" />
                        {service.duration}
                      </span>
                    )}
                  </div>

                  <h4 className="font-serif text-lg text-white group-hover:text-gold-300 transition-colors duration-300">
                    {service.name}
                  </h4>
                  
                  <p className="text-xs text-charcoal-300 mt-2.5 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-charcoal-950 mt-6 flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-wider text-charcoal-500 uppercase">
                    Bespoke Assessment
                  </span>
                  <a
                    href="#booking-section"
                    className="text-[10px] font-mono tracking-widest uppercase text-gold-400 hover:text-white transition-colors flex items-center gap-1 group-hover:gap-1.5 duration-300"
                  >
                    Select service &rarr;
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Callout */}
        <div className="mt-16 text-center">
          <p className="text-xs text-charcoal-400 tracking-widest uppercase">
            Need style advice or can't decide? Try our{" "}
            <a href="#ai-suite" className="text-gold-400 hover:underline hover:text-gold-300 font-semibold transition-colors">
              Virtual AI Style Suite &rarr;
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
