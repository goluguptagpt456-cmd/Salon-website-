import { Star, Quote, Shield } from "lucide-react";

const COMPREHENSIVE_TESTIMONIALS = [
  {
    id: "t1",
    name: "Anjali Menon",
    role: "Bride",
    location: "Kochi",
    content: "Fiora's bridal makeover was a dream come true for my wedding day. Meticulous execution, premium organic products, and lovely atmosphere.",
    rating: 5,
    initial: "A"
  },
  {
    id: "t2",
    name: "Dr. Rohit Joseph",
    role: "Regular Guest",
    location: "Kakkanad",
    content: "The first truly elite unisex family salon in Rajagiri Valley. Their hair treatments and beard styling are top-class. Extremely hygienic.",
    rating: 5,
    initial: "R"
  },
  {
    id: "t3",
    name: "Meera Nair",
    role: "Tech Lead",
    location: "Infopark",
    content: "Fiora is my go-to spot for acne treatments and lash extensions. The staff is so knowledgeable and explains every product.",
    rating: 4.5,
    initial: "M"
  },
  {
    id: "t4",
    name: "Siddharth Verma",
    role: "Entrepreneur",
    location: "Kakkanad",
    content: "Very impressive attention to detail for haircuts and skin detan. Highly recommend their bespoke slots for uninterrupted styling.",
    rating: 5,
    initial: "S"
  },
  {
    id: "t5",
    name: "Riya Elsa",
    role: "Fashion Designer",
    location: "Kochi",
    content: "Stunning nail art and hair balayage. Fiora's stylists are creative genius. The premium setup makes you feel like royalty.",
    rating: 5,
    initial: "R"
  },
  {
    id: "t6",
    name: "Arun Kurian",
    role: "Director",
    location: "Edappally",
    content: "A flawless, peaceful environment with global-standard sterilization. Perfect place for a relaxed weekend grooming session.",
    rating: 5,
    initial: "A"
  }
];

export default function Testimonials() {
  // To create a truly infinite seamless scroll, we repeat the array of cards
  // so there are plenty of elements, and we duplicate the whole list inside the scrolling block.
  const doubledTestimonials = [...COMPREHENSIVE_TESTIMONIALS, ...COMPREHENSIVE_TESTIMONIALS];

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-charcoal-950 relative border-t border-charcoal-900 overflow-hidden">
      {/* Background ambient gold glows */}
      <div className="absolute top-1/2 left-[5%] w-[400px] h-[400px] rounded-full bg-gold-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-[5%] w-[400px] h-[400px] rounded-full bg-gold-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="text-[11px] font-mono tracking-[0.4em] uppercase text-gold-400 block mb-3">
            Testimonials
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-white tracking-wide">
            Trusted By Elite Clients
          </h2>
          <div className="w-16 h-0.5 bg-gold-400 mx-auto my-6" />
          <p className="text-charcoal-400 text-xs md:text-sm tracking-widest uppercase leading-relaxed font-light">
            Read real, unedited feedback from our valued guests who experience high-end beauty at Fiora.
          </p>
        </div>
      </div>

      {/* Infinite Horizontal Marquee Container */}
      <div className="relative w-full overflow-hidden py-4 select-none">
        
        {/* Left & Right Feathered Edge Fade Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-charcoal-950 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-charcoal-950 to-transparent z-20 pointer-events-none" />

        {/* Scrolling marquee block */}
        <div className="animate-marquee flex gap-6 px-4">
          {doubledTestimonials.map((t, idx) => (
            <div
              key={`${t.id}-${idx}`}
              className="w-[310px] md:w-[350px] shrink-0 p-6 md:p-8 rounded-2xl border border-white/5 bg-[#151515]/50 hover:bg-[#151515]/90 hover:border-gold-500/40 transition-all duration-300 relative flex flex-col justify-between shadow-xl"
            >
              <Quote className="w-8 h-8 text-gold-400/10 absolute top-6 right-6" />

              <div>
                {/* Star rating & Avatar */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-full border border-gold-400/35 bg-charcoal-950 flex items-center justify-center text-xs font-mono font-bold text-gold-400 shadow-md">
                    {t.initial}
                  </div>
                  <div>
                    <div className="flex gap-0.5 text-gold-400">
                      {Array.from({ length: Math.floor(t.rating) }).map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-current" />
                      ))}
                      {t.rating % 1 !== 0 && (
                        <div className="relative">
                          <Star className="w-3 h-3 text-charcoal-800" />
                          <div className="absolute inset-0 overflow-hidden w-1/2 text-gold-400">
                            <Star className="w-3 h-3 fill-current" />
                          </div>
                        </div>
                      )}
                    </div>
                    <span className="text-[9px] font-mono tracking-wider text-charcoal-400 uppercase">
                      {t.role}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <p className="text-charcoal-200 text-xs md:text-sm italic leading-relaxed mb-6 font-light">
                  "{t.content}"
                </p>
              </div>

              {/* Verified Badge & Info */}
              <div className="flex justify-between items-center pt-4 border-t border-charcoal-900/40">
                <div>
                  <h4 className="font-serif text-sm text-white font-medium">
                    {t.name}
                  </h4>
                  <p className="text-[9px] font-mono uppercase tracking-widest text-charcoal-400 mt-0.5">
                    {t.location}, Kochi
                  </p>
                </div>
                <div className="flex items-center gap-1 bg-gold-400/5 border border-gold-400/10 px-2 py-0.5 rounded text-[8px] font-mono text-gold-400">
                  <Shield className="w-2.5 h-2.5" />
                  VERIFIED
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
