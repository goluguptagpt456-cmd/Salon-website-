import { motion, AnimatePresence } from "motion/react";
import { Booking } from "../types";
import { X, Calendar, Clock, Scissors, Phone, Trash2, Smile } from "lucide-react";

interface MyBookingsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  bookings: Booking[];
}

export default function MyBookingsDrawer({ isOpen, onClose, bookings }: MyBookingsDrawerProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black backdrop-blur-sm"
          />

          {/* Slider Drawer panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 150 }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full sm:w-[450px] bg-charcoal-950 border-l border-gold-500/20 shadow-2xl p-6 overflow-y-auto flex flex-col justify-between"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-charcoal-900 mb-6">
                <div>
                  <h3 className="font-serif text-xl text-white">Your Reservations</h3>
                  <p className="text-[10px] font-mono uppercase tracking-widest text-gold-400 mt-1">
                    Fiora Family Beauty Salon
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="w-10 h-10 rounded-full border border-charcoal-800 text-charcoal-400 hover:text-gold-400 hover:border-gold-400/20 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Bookings List container */}
              <div className="space-y-4">
                {bookings.length === 0 ? (
                  <div className="text-center py-16 space-y-4 border border-dashed border-charcoal-900 rounded-2xl p-6">
                    <Calendar className="w-8 h-8 text-charcoal-800 mx-auto" />
                    <p className="font-serif text-sm text-white">No Active Bookings</p>
                    <p className="text-xs text-charcoal-400 leading-relaxed">
                      You haven't requested any style sessions yet. Head to our booking scheduler to secure your spot.
                    </p>
                    <a
                      href="#booking-section"
                      onClick={onClose}
                      className="inline-block px-5 py-2.5 rounded-lg bg-gold-500 text-black font-semibold text-xs uppercase tracking-widest hover:bg-gold-400 transition-colors"
                    >
                      Book Session
                    </a>
                  </div>
                ) : (
                  bookings.map((booking, idx) => (
                    <div
                      key={booking.id || idx}
                      className="p-5 rounded-2xl border border-charcoal-900 bg-charcoal-900/30 flex flex-col justify-between space-y-3 relative group overflow-hidden"
                    >
                      {/* Left vertical gold strip decoration */}
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-gold-500 to-gold-400" />

                      <div className="flex justify-between items-start">
                        <div>
                          <span className="text-[9px] font-mono text-gold-400 bg-gold-400/5 px-2 py-0.5 rounded border border-gold-400/10 uppercase tracking-widest">
                            CONFIRMED #FIO-{booking.id?.slice(-5) || idx + 100}
                          </span>
                          <h4 className="font-serif text-base text-white mt-2 font-medium">
                            {booking.service}
                          </h4>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 pt-3 border-t border-charcoal-900 text-xs font-mono text-charcoal-300">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-gold-400/75" />
                          <span>{booking.date}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-gold-400/75" />
                          <span>{booking.time}</span>
                        </div>
                      </div>

                      <div className="pt-2 text-xs font-sans text-charcoal-300 space-y-1 bg-black/10 p-3 rounded-lg border border-charcoal-950">
                        <p className="text-[10px] font-mono text-charcoal-500 uppercase tracking-widest">
                          Contact Info
                        </p>
                        <p className="font-semibold text-white">{booking.name}</p>
                        <p className="flex items-center gap-1 text-[11px]">
                          <Phone className="w-3 h-3 text-gold-400/60" />
                          {booking.phone}
                        </p>
                        {booking.notes && (
                          <p className="text-[11px] text-charcoal-400 pt-1 border-t border-charcoal-900 mt-1 leading-relaxed italic">
                            "{booking.notes}"
                          </p>
                        )}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Sticky footer */}
            {bookings.length > 0 && (
              <div className="pt-6 border-t border-charcoal-900 mt-8 text-center">
                <p className="text-[11px] text-charcoal-400 font-mono leading-relaxed">
                  Have questions about your schedule? <br />
                  Call us directly at <span className="text-gold-400 font-bold">062823 25094</span>.
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
