import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import BookingContact from "./components/BookingContact";
import Footer from "./components/Footer";
import MyBookingsDrawer from "./components/MyBookingsDrawer";
import { Booking } from "./types";

export default function App() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [isBookingsOpen, setIsBookingsOpen] = useState(false);

  // Fetch booked appointments from the server on load
  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch("/api/bookings");
        if (response.ok) {
          const data = await response.json();
          setBookings(data.bookings || []);
        }
      } catch (error) {
        console.error("Failed to load active bookings from database:", error);
      }
    };
    fetchBookings();
  }, []);

  // Update bookings state when a new reservation is successfully created
  const handleNewBooking = (newBooking: Booking) => {
    setBookings((prev) => [
      {
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
        ...newBooking,
      },
      ...prev,
    ]);
  };

  return (
    <div className="bg-charcoal-950 text-charcoal-200 min-h-screen relative font-sans selection:bg-gold-500/30 selection:text-white">
      {/* 1. Header / Navbar Navigation */}
      <Navbar
        onOpenBookings={() => setIsBookingsOpen(true)}
        bookingsCount={bookings.length}
      />

      {/* 2. Hero Section */}
      <Hero />

      {/* 3. About Section */}
      <About />

      {/* 4. Curated Services Section */}
      <Services />

      {/* 5. Spaces Gallery Section */}
      <Gallery />

      {/* 6. Why Choose Fiora Section */}
      <WhyChooseUs />

      {/* 7. Verified Testimonials Section */}
      <Testimonials />

      {/* 8. Booking Scheduler & Interactive Map Contact Section */}
      <BookingContact onBookingSuccess={handleNewBooking} />

      {/* 9. Footer Section */}
      <Footer />

      {/* 10. Sliding Panel: My Reservations Drawer */}
      <MyBookingsDrawer
        isOpen={isBookingsOpen}
        onClose={() => setIsBookingsOpen(false)}
        bookings={bookings}
      />
    </div>
  );
}
