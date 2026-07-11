import { useState, ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SERVICES } from "../data";
import { Booking } from "../types";
import { 
  Phone, 
  MessageSquare, 
  MapPin, 
  Clock, 
  Calendar, 
  User, 
  AlertCircle, 
  CheckCircle2, 
  Scissors,
  Loader2
} from "lucide-react";

interface BookingContactProps {
  onBookingSuccess: (booking: Booking) => void;
}

export default function BookingContact({ onBookingSuccess }: BookingContactProps) {
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    notes: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [submittedBooking, setSubmittedBooking] = useState<Booking | null>(null);

  const timeSlots = [
    "08:30 AM", "09:30 AM", "10:30 AM", "11:30 AM", 
    "12:30 PM", "01:30 PM", "02:30 PM", "03:30 PM", 
    "04:30 PM", "05:30 PM", "06:30 PM", "07:30 PM", "08:30 PM"
  ];

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.service || !formData.time) {
      setErrorMessage("Please fill out all required fields marked with *");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmittedBooking(data.booking);
        onBookingSuccess(data.booking);
        // Clear form
        setFormData({
          name: "",
          phone: "",
          service: "",
          date: "",
          time: "",
          notes: ""
        });
      } else {
        throw new Error(data.error || "Failed to book appointment. Please try again.");
      }
    } catch (err: any) {
      setErrorMessage(err.message || "Something went wrong. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Pre-filled WhatsApp link
  const generateWhatsAppLink = () => {
    const baseText = "Hello Fiora Family Beauty Salon! I'd like to book a premium styling appointment.";
    const encodedText = encodeURIComponent(baseText);
    return `https://wa.me/916282325094?text=${encodedText}`;
  };

  return (
    <section id="booking-section" className="py-24 md:py-32 bg-charcoal-950 relative border-t border-charcoal-900">
      <div className="absolute top-1/4 right-[5%] w-[450px] h-[450px] rounded-full bg-gold-600/5 blur-[120px] pointer-events-none" />

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
            Bespoke Reservation
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-white tracking-wide">
            Book Your Style Session
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "64px" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="h-0.5 bg-gold-400 mx-auto my-6" 
          />
          <p className="text-charcoal-400 text-xs md:text-sm tracking-widest uppercase leading-relaxed font-light">
            Fill out our secure reservation form or contact us directly via Call or WhatsApp.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
          
          {/* Column 1: Interactive Booking Form (7 Cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 bg-charcoal-900/40 border border-charcoal-900 rounded-3xl p-6 md:p-8 shadow-xl"
          >
            <AnimatePresence mode="wait">
              {!submittedBooking ? (
                <motion.form
                  key="booking-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="flex items-center gap-2 text-gold-400 mb-2">
                    <Calendar className="w-5 h-5" />
                    <h3 className="font-serif text-lg text-white">Appointment Details</h3>
                  </div>

                  {errorMessage && (
                    <div className="p-4 bg-gold-500/5 border border-gold-400/20 text-gold-400 text-xs rounded-xl flex items-start gap-2.5 font-mono">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono uppercase tracking-widest text-charcoal-400 block">
                        Full Name <span className="text-gold-400">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-charcoal-600 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your Name"
                          className="w-full bg-charcoal-950 border border-charcoal-800 rounded-xl pl-10 pr-4 py-3.5 text-xs text-white placeholder-charcoal-600 focus:outline-none focus:border-gold-500/40 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono uppercase tracking-widest text-charcoal-400 block">
                        Phone Number <span className="text-gold-400">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-charcoal-600 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Contact Number"
                          className="w-full bg-charcoal-950 border border-charcoal-800 rounded-xl pl-10 pr-4 py-3.5 text-xs text-white placeholder-charcoal-600 focus:outline-none focus:border-gold-500/40 transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Service Selector */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-charcoal-400 block">
                      Desired Service <span className="text-gold-400">*</span>
                    </label>
                    <div className="relative">
                      <Scissors className="w-4 h-4 text-charcoal-600 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <select
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full bg-charcoal-950 border border-charcoal-800 rounded-xl pl-10 pr-4 py-3.5 text-xs text-white focus:outline-none focus:border-gold-500/40 transition-colors appearance-none cursor-pointer"
                      >
                        <option value="" disabled className="text-charcoal-600">
                          Select a Service
                        </option>
                        {SERVICES.map((s) => (
                          <option key={s.name} value={s.name} className="bg-charcoal-950 text-white text-xs">
                            {s.category} — {s.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Preferred Date */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono uppercase tracking-widest text-charcoal-400 block">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        min={new Date().toISOString().split("T")[0]}
                        className="w-full bg-charcoal-950 border border-charcoal-800 rounded-xl px-4 py-3.5 text-xs text-white focus:outline-none focus:border-gold-500/40 transition-colors"
                      />
                    </div>

                    {/* Preferred Time Slot */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono uppercase tracking-widest text-charcoal-400 block">
                        Preferred Time <span className="text-gold-400">*</span>
                      </label>
                      <select
                        name="time"
                        required
                        value={formData.time}
                        onChange={handleInputChange}
                        className="w-full bg-charcoal-950 border border-charcoal-800 rounded-xl px-4 py-3.5 text-xs text-white focus:outline-none focus:border-gold-500/40 transition-colors appearance-none cursor-pointer"
                      >
                        <option value="" disabled className="text-charcoal-600">
                          Select time slot
                        </option>
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot} className="bg-charcoal-950 text-white text-xs">
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-charcoal-400 block">
                      Special Requests / Notes (Optional)
                    </label>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      placeholder="List any hair texture specifications, skin sensitivities, or specific stylist requests..."
                      rows={3}
                      className="w-full bg-charcoal-950 border border-charcoal-800 rounded-xl p-4 text-xs text-white placeholder-charcoal-600 focus:outline-none focus:border-gold-500/40 transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 text-black font-bold text-xs uppercase tracking-[0.25em] shadow-lg shadow-gold-500/10 hover:shadow-gold-500/25 hover:scale-[1.01] transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Verifying Schedule...
                      </>
                    ) : (
                      "Confirm Booking Request"
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="booking-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8 space-y-6"
                >
                  <div className="w-16 h-16 rounded-full bg-gold-400/10 border border-gold-400/25 flex items-center justify-center mx-auto text-gold-400">
                    <CheckCircle2 className="w-8 h-8 text-gold-400 animate-bounce" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-white">Booking Confirmed!</h3>
                    <p className="text-xs font-mono text-gold-400 uppercase mt-1 tracking-widest">
                      Reservation ID: #FIO-{Date.now().toString().slice(-5)}
                    </p>
                  </div>
                  
                  <div className="max-w-md mx-auto p-5 rounded-2xl border border-charcoal-800 bg-charcoal-950/60 text-left space-y-3.5">
                    <div className="flex justify-between border-b border-charcoal-900 pb-2 text-xs">
                      <span className="text-charcoal-400 font-mono">CLIENT</span>
                      <span className="text-white font-medium">{submittedBooking.name}</span>
                    </div>
                    <div className="flex justify-between border-b border-charcoal-900 pb-2 text-xs">
                      <span className="text-charcoal-400 font-mono">SERVICE</span>
                      <span className="text-gold-300 font-serif font-bold">{submittedBooking.service}</span>
                    </div>
                    <div className="flex justify-between border-b border-charcoal-900 pb-2 text-xs">
                      <span className="text-charcoal-400 font-mono">DATE / TIME</span>
                      <span className="text-white font-mono">{submittedBooking.date} at {submittedBooking.time}</span>
                    </div>
                    {submittedBooking.notes && (
                      <div className="text-[11px] text-charcoal-400 pt-1 font-mono leading-relaxed">
                        <strong>NOTES:</strong> {submittedBooking.notes}
                      </div>
                    )}
                  </div>

                  <p className="text-xs text-charcoal-300 max-w-sm mx-auto leading-relaxed">
                    We have successfully saved your appointment. Our hospitality coordinator will call your phone number <strong>{submittedBooking.phone}</strong> shortly to align final details.
                  </p>

                  <div className="flex gap-3 justify-center max-w-xs mx-auto">
                    <button
                      onClick={() => setSubmittedBooking(null)}
                      className="flex-1 py-3 text-xs uppercase tracking-widest font-mono border border-charcoal-800 rounded-xl text-charcoal-300 hover:text-white hover:border-charcoal-600 transition-all cursor-pointer"
                    >
                      Book Another
                    </button>
                    <a
                      href={generateWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 bg-gold-400 text-black text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-gold-300 transition-colors text-center"
                    >
                      WhatsApp Sync
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Column 2: Contact Info & Google Maps Embed (5 Cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-5 space-y-8"
          >
            
            {/* Quick Contact buttons cards */}
            <div className="p-6 bg-charcoal-900/20 border border-charcoal-900 rounded-3xl space-y-6">
              <h3 className="font-serif text-lg text-white">Direct Channels</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {/* Call Button */}
                <a
                  href="tel:06282325094"
                  className="p-4 rounded-2xl border border-charcoal-900 bg-charcoal-950/60 flex flex-col items-center justify-center text-center gap-2 group hover:border-gold-500/30 transition-all duration-300"
                >
                  <Phone className="w-5 h-5 text-gold-400 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-[10px] font-mono tracking-widest uppercase text-charcoal-400">
                    Call Salon
                  </span>
                  <span className="text-[11px] text-white font-bold font-mono">
                    062823 25094
                  </span>
                </a>

                {/* WhatsApp Button */}
                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl border border-charcoal-900 bg-charcoal-950/60 flex flex-col items-center justify-center text-center gap-2 group hover:border-gold-500/30 transition-all duration-300"
                >
                  <MessageSquare className="w-5 h-5 text-gold-400 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-[10px] font-mono tracking-widest uppercase text-charcoal-400">
                    WhatsApp Preferred
                  </span>
                  <span className="text-[11px] text-white font-bold font-mono">
                    Book Chat
                  </span>
                </a>
              </div>

              {/* Working Hours & Map location details */}
              <div className="space-y-4 pt-4 border-t border-charcoal-900/60 text-xs">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4.5 h-4.5 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-white uppercase tracking-widest text-[10px] font-mono">
                      Location
                    </h4>
                    <p className="text-charcoal-300 mt-1 leading-relaxed">
                      Infopark Expy, Rajagiri Valley, Kakkanad, Kochi, Kerala 682039
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4.5 h-4.5 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-white uppercase tracking-widest text-[10px] font-mono">
                      Working Hours
                    </h4>
                    <p className="text-charcoal-300 mt-1 font-mono">
                      Open Daily: 8:30 AM – 10:00 PM
                    </p>
                    <p className="text-[10px] text-gold-400 mt-0.5">
                      * Advance booking highly recommended.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Iframe Embed */}
            <div className="rounded-3xl border border-charcoal-900 overflow-hidden shadow-xl shadow-black/40 bg-charcoal-900 h-64 relative">
              <iframe
                title="Fiora Salon Map Location"
                src="https://maps.google.com/maps?q=Fiora%20Family%20Beauty%20Salon,%20Infopark%20Expy,%20Rajagiri%20Valley,%20Kakkanad,%20Kochi,%20Kerala%20682039&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
