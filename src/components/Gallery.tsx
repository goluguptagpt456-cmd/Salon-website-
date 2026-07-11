import { useState, useEffect } from "react";
import { motion, AnimatePresence, PanInfo } from "motion/react";
import { GALLERY_IMAGES } from "../data";
import { Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide logic
  useEffect(() => {
    if (isPaused || selectedImage) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [currentIndex, isPaused, selectedImage]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  };

  const handleCardClick = (index: number, diff: number) => {
    if (diff === 0) {
      setSelectedImage(GALLERY_IMAGES[index].url);
    } else {
      setCurrentIndex(index);
    }
  };

  const handleDragEnd = (e: any, info: PanInfo) => {
    if (info.offset.x < -50) handleNext();
    if (info.offset.x > 50) handlePrev();
  };

  return (
    <section id="gallery" className="py-24 md:py-32 bg-charcoal-950 relative border-t border-charcoal-900 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold-600/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <span className="text-[11px] font-mono tracking-[0.4em] uppercase text-gold-400 block mb-3">
            Work Proofs
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-white tracking-wide">
            Our Signature Work
          </h2>
          <div className="w-16 h-0.5 bg-gold-400 mx-auto my-6" />
          <p className="text-charcoal-400 text-xs md:text-sm tracking-widest uppercase leading-relaxed font-light">
            A glimpse of the artistry, precision, and finishing our clients walk out with — real work, real results.
          </p>
        </div>

        {/* Coverflow Gallery */}
        <div 
          className="relative w-full max-w-5xl mx-auto h-[400px] md:h-[500px] flex items-center justify-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          style={{ perspective: "1200px" }}
        >
          {GALLERY_IMAGES.map((img, index) => {
            const length = GALLERY_IMAGES.length;
            let diff = index - currentIndex;
            if (diff > length / 2) diff -= length;
            if (diff < -length / 2) diff += length;

            const isCenter = diff === 0;
            const isHidden = Math.abs(diff) > 2;

            return (
              <motion.div
                key={index}
                className={`absolute w-[260px] sm:w-[320px] md:w-[400px] lg:w-[480px] h-[320px] md:h-[400px] lg:h-[480px] rounded-2xl overflow-hidden cursor-pointer ${
                  isCenter ? "shadow-2xl shadow-gold-500/20 border-2 border-gold-500/60 z-30 gold-border-glow" : "border border-white/5 bg-charcoal-900 z-10"
                }`}
                style={{
                  transformStyle: "preserve-3d",
                  pointerEvents: isHidden ? "none" : "auto"
                }}
                animate={{
                  x: diff === 0 ? "0%" : diff === -1 ? "-60%" : diff === 1 ? "60%" : diff === -2 ? "-110%" : diff === 2 ? "110%" : diff < 0 ? "-150%" : "150%",
                  scale: diff === 0 ? 1 : Math.abs(diff) === 1 ? 0.8 : 0.65,
                  rotateY: diff === 0 ? 0 : diff === -1 ? 25 : diff === 1 ? -25 : diff === -2 ? 40 : diff === 2 ? -40 : diff < 0 ? 60 : -60,
                  opacity: diff === 0 ? 1 : Math.abs(diff) === 1 ? 0.6 : Math.abs(diff) === 2 ? 0.2 : 0,
                  zIndex: 30 - Math.abs(diff),
                  filter: diff === 0 ? "blur(0px)" : Math.abs(diff) === 1 ? "blur(4px)" : "blur(8px)"
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                onClick={() => handleCardClick(index, diff)}
                drag={isCenter ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={isCenter ? handleDragEnd : undefined}
              >
                {/* Image */}
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />

                {/* Ambient Shadow Overlays */}
                <div className={`absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-transparent transition-opacity duration-500 ${isCenter ? 'opacity-80' : 'opacity-0'}`} />

                {/* Title & Category info */}
                <AnimatePresence>
                  {isCenter && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ delay: 0.2 }}
                      className="absolute bottom-6 left-6 right-6 flex justify-between items-end"
                    >
                      <div>
                        <span className="text-[9px] font-mono tracking-widest uppercase text-gold-400 block">
                          {img.category} Studio
                        </span>
                        <h4 className="font-serif text-lg md:text-xl text-white mt-1">
                          {img.title}
                        </h4>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-black/60 border border-gold-400/20 text-gold-400 flex items-center justify-center hover:bg-gold-400/20 transition-colors duration-300">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
          
          {/* Desktop Navigation Arrows */}
          <button 
            onClick={(e) => { e.stopPropagation(); handlePrev(); }} 
            className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-charcoal-950/60 border border-charcoal-800 text-gold-400 flex items-center justify-center hover:bg-charcoal-900 hover:border-gold-400/50 transition-all z-40 hidden md:flex backdrop-blur-md"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={(e) => { e.stopPropagation(); handleNext(); }} 
            className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-charcoal-950/60 border border-charcoal-800 text-gold-400 flex items-center justify-center hover:bg-charcoal-900 hover:border-gold-400/50 transition-all z-40 hidden md:flex backdrop-blur-md"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8 md:mt-12">
          {GALLERY_IMAGES.map((_, idx) => (
            <button 
              key={idx} 
              onClick={() => setCurrentIndex(idx)} 
              className={`h-1.5 rounded-full transition-all duration-500 ${
                currentIndex === idx ? "bg-gold-400 w-8" : "bg-charcoal-800 hover:bg-charcoal-600 w-2"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>

      {/* Fullscreen Image Zoom Portal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-charcoal-900 border border-charcoal-800 text-gold-400 hover:text-white flex items-center justify-center cursor-pointer shadow-lg"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              src={selectedImage}
              alt="Salon Gallery Preview"
              className="max-w-full max-h-full object-contain rounded-xl border border-gold-400/10 shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
