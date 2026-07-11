import { motion } from "motion/react";
import { Award, Compass, Heart } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-charcoal-950 relative overflow-hidden">
      {/* Decorative background light gradient */}
      <div className="absolute top-1/2 left-[10%] w-[400px] h-[400px] rounded-full bg-gold-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Column 1: Elegant Editorial Headings */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 space-y-6"
          >
            <span className="text-[11px] font-mono tracking-[0.4em] uppercase text-gold-400 block">
              Our Philosophy
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-white tracking-wide leading-tight">
              Crafting Bespoke <br />
              <span className="text-gold-300 italic">Beauty & Style</span> <br />
              Since 2018
            </h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "64px" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="h-0.5 bg-gold-400" 
            />
            
            {/* Minimal Stat cards */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl border border-charcoal-900 bg-charcoal-950/40">
                <p className="font-serif text-3xl text-gold-300 font-bold">4.6★</p>
                <p className="text-[10px] uppercase tracking-widest text-charcoal-400 font-mono mt-1">
                  Google Rated
                </p>
              </div>
              <div className="p-4 rounded-xl border border-charcoal-900 bg-charcoal-950/40">
                <p className="font-serif text-3xl text-gold-300 font-bold">370+</p>
                <p className="text-[10px] uppercase tracking-widest text-charcoal-400 font-mono mt-1">
                  Happy Clients
                </p>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Editorial text narrative */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-7 space-y-8"
          >
            <p className="font-serif text-xl md:text-2xl text-charcoal-200 leading-relaxed font-light italic">
              "Fiora Family Beauty Salon is a premier, family-run unisex sanctuary in the heart of Kakkanad, Kochi."
            </p>
            
            <p className="text-charcoal-300 font-sans leading-relaxed text-sm md:text-base">
              Founded on the pillars of customized care and elite craftsmanship, we have established ourselves as the region's landmark destination for those who seek high-end hair design, flawless bridal artistry, restorative skincare, and advanced permanent makeup.
            </p>

            <p className="text-charcoal-400 font-sans leading-relaxed text-sm">
              Located conveniently along the Infopark Expressway, Rajagiri Valley, we design custom style journeys in a modern, tranquil environment. We believe that true luxury lies in detail, and our elite artists are committed to accentuating your unique essence with absolute precision.
            </p>

            {/* Core Values / Features bar */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-charcoal-900">
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-gold-400 shrink-0" />
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-white font-bold font-sans">
                    Elite Artists
                  </h4>
                  <p className="text-[11px] text-charcoal-400 mt-1">
                    Certified stylists with global brand training.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Compass className="w-5 h-5 text-gold-400 shrink-0" />
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-white font-bold font-sans">
                    Premium Brands
                  </h4>
                  <p className="text-[11px] text-charcoal-400 mt-1">
                    Using only verified high-end organic products.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Heart className="w-5 h-5 text-gold-400 shrink-0" />
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-white font-bold font-sans">
                    Unisex Care
                  </h4>
                  <p className="text-[11px] text-charcoal-400 mt-1">
                    Exclusive, private booths for personal comfort.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
