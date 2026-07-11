import { Service, Testimonial } from "./types";

export const SERVICES: Service[] = [
  // --- HAIR ---
  {
    name: "Balayage Artistry",
    category: "Hair",
    description: "Hand-painted, bespoke sun-kissed coloring tailored to your natural hair flow and skin undertone.",
    duration: "180 - 240 mins"
  },
  {
    name: "Couture Haircut & Styling",
    category: "Hair",
    description: "Precision-crafted cuts designed by master stylists to frame your face and suit your lifestyle.",
    duration: "60 mins"
  },
  {
    name: "Elite Hair Extensions",
    category: "Hair",
    description: "Premium, ethically sourced 100% human hair extensions for unmatched volume, length, and flow.",
    duration: "120 - 180 mins"
  },
  {
    name: "Signature Blowout",
    category: "Hair",
    description: "Sculpted volume and flawless shine using custom hair elixirs and precision blowout techniques.",
    duration: "45 mins"
  },
  {
    name: "Sculpted Braids & Braiding",
    category: "Hair",
    description: "Artistic, high-fashion braids styled for elegant events or custom creative expression.",
    duration: "45 - 90 mins"
  },
  {
    name: "Bespoke Box Braids",
    category: "Hair",
    description: "Meticulous protective styling, sectioned perfectly for durability, bounce, and visual symmetry.",
    duration: "180 - 300 mins"
  },
  {
    name: "Premium Perms",
    category: "Hair",
    description: "Dynamic wave and curl engineering using advanced, damage-mitigating structural serums.",
    duration: "120 mins"
  },

  // --- SKIN ---
  {
    name: "Advanced Hydrafacial",
    category: "Skin",
    description: "Patented multi-step skin resurfacing treatment utilizing vortex technology to extract, hydrate, and nourish.",
    duration: "75 mins"
  },
  {
    name: "Clinical Acne Treatment",
    category: "Skin",
    description: "Targeted cellular purification and blue-light therapy to calm active inflammation and promote healing.",
    duration: "90 mins"
  },
  {
    name: "Precision Laser Hair Removal",
    category: "Skin",
    description: "Medical-grade targeted laser therapy for permanent, smooth reduction of unwanted hair.",
    duration: "30 - 90 mins"
  },
  {
    name: "Organic Waxing & Brazilian",
    category: "Skin",
    description: "Gentle, temperature-regulated premium beeswax formulations designed for highly sensitive skin areas.",
    duration: "30 - 60 mins"
  },
  {
    name: "Eyebrow & Facial Threading",
    category: "Skin",
    description: "High-precision organic cotton thread styling to map and contour your facial symmetry perfectly.",
    duration: "15 - 30 mins"
  },
  {
    name: "Delicate Hair Threading",
    category: "Skin",
    description: "Gentle removal of peach fuzz and delicate facial hair, creating an immaculate canvas for makeup.",
    duration: "20 mins"
  },

  // --- NAIL & SPA ---
  {
    name: "Luxury Pedicure & Manicure",
    category: "Nail",
    description: "Restorative hot stone therapies, organic scrub exfoliation, and meticulously polished nail care.",
    duration: "75 mins"
  },
  {
    name: "Aromatherapy Massage",
    category: "Nail",
    description: "Somatic stress-release massage utilizing cold-pressed botanical essences to align body and mind.",
    duration: "60 - 90 mins"
  },
  {
    name: "Deep Tissue Spa Services",
    category: "Nail",
    description: "A comprehensive structural massage designed to release deep-seated muscle tension and fatigue.",
    duration: "60 mins"
  },

  // --- MAKEUP ---
  {
    name: "Bridal Makeup & Styling",
    category: "Makeup",
    description: "Elite South Indian and modern global bridal makeovers, designed for breathtaking high-definition photography.",
    duration: "180 mins"
  },
  {
    name: "Microblading Artistry",
    category: "Makeup",
    description: "Semi-permanent fine-line hair strokes manually sketched to design full, highly natural brows.",
    duration: "120 mins"
  },
  {
    name: "Elite Permanent Makeup",
    category: "Makeup",
    description: "Precision lip blushing and permanent eyeliner contouring using organic hypo-allergenic micro-pigments.",
    duration: "150 mins"
  },
  {
    name: "Signature Lash Extensions",
    category: "Makeup",
    description: "Bespoke, lightweight eyelash extensions ranging from subtle classic lengths to rich, dramatic volumes.",
    duration: "90 mins"
  },
  {
    name: "Evening & Event Makeup",
    category: "Makeup",
    description: "Sculpted makeup and dynamic contours designed to capture the glowing night lights of Kochi.",
    duration: "75 mins"
  }
];

export const GALLERY_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1200",
    title: "Luxury Styling Suite",
    category: "Interior"
  },
  {
    url: "https://images.unsplash.com/photo-1605497746444-ac9dbd50a950?auto=format&fit=crop&q=80&w=800",
    title: "Precision Hair Designing",
    category: "Hair"
  },
  {
    url: "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800",
    title: "Radiant Skin Facial Studio",
    category: "Skin"
  },
  {
    url: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=800",
    title: "Elite Bridal Makeup Artistry",
    category: "Makeup"
  },
  {
    url: "https://images.unsplash.com/photo-1632345031435-8797b2d58045?auto=format&fit=crop&q=80&w=800",
    title: "Bespoke Nail Artistry Room",
    category: "Nail"
  },
  {
    url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800",
    title: "Elite Gold Signage & Interior",
    category: "Interior"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Anjali Menon",
    role: "Kochi",
    content: "Fiora's bridal makeover was a dream come true for my wedding day. Meticulous execution, premium organic products, and an absolutely lovely atmosphere. The balayage I got last week is also incredible!",
    rating: 5,
    date: "July 2026"
  },
  {
    id: "t2",
    name: "Dr. Rohit Joseph",
    role: "Kakkanad",
    content: "The first truly elite unisex family salon in Rajagiri Valley area. Their hair extensions and beard contouring styling are top-class. Extremely hygienic, tranquil, and professional team.",
    rating: 5,
    date: "June 2026"
  },
  {
    id: "t3",
    name: "Meera Nair",
    role: "Infopark",
    content: "Fiora is my go-to spot for acne treatments and lash extensions. The staff are so knowledgeable, explaining every product used. It feels like entering a 5-star spa in Kochi.",
    rating: 4.5,
    date: "May 2026"
  }
];

export const USPS = [
  {
    title: "Unisex & Family-Friendly",
    desc: "A spacious, welcoming sanctuary tailored for ladies, gentlemen, and children, offering specialized premium care."
  },
  {
    title: "4.6★ Rated by 370+ Clients",
    desc: "A highly trusted Kakkanad beauty landmark, backed by over 370 glowing organic reviews for our top-tier services."
  },
  {
    title: "Advance Booking Required",
    desc: "To guarantee dedicated care, a tranquil experience, and absolute focus, we schedule appointments by advance booking only."
  },
  {
    title: "Elite Curated Service Suite",
    desc: "Over 20 premium specialized services across Hair, Skin, Nails, and Makeup using elite global beauty brands."
  }
];
