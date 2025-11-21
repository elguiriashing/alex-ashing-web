export interface Project {
  id: string
  title: string
  slug: string
  description: string
  clientType: string
  outcome: string
  image: string
  tags: string[]
  category: string
  demoUrl?: string
  features?: string[]
  challenge?: string
  solution?: string
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "member-portal-berlin",
    title: "Member Portal & Access System",
    description: "Full-stack member management platform with QR code entry and event booking.",
    clientType: "Berlin Techno Club",
    outcome: "Reduced entry time by 80%, eliminated paper lists entirely",
    image: "https://images.unsplash.com/photo-1571609252680-ba05c1a61f75?w=800&q=80",
    tags: ["Next.js", "PostgreSQL", "QR Codes", "Stripe"],
    category: "clubs",
    challenge: "The club was losing members due to long entry queues and chaotic paper guestlists. Door staff couldn't verify memberships quickly, leading to frustration and security issues.",
    solution: "Built a complete member management platform with QR code check-ins, real-time member verification, event booking, and payment processing. Members get instant QR codes, staff can scan and verify in under 2 seconds.",
    features: [
      "QR code member cards with instant generation",
      "Real-time door check-in system",
      "Event booking and ticketing",
      "Membership tier management",
      "Payment processing with Stripe",
      "Admin dashboard with analytics",
      "Offline mode for door staff"
    ],
  },
  {
    id: "2",
    slug: "digital-menu-barcelona",
    title: "Digital Menu & Ordering System",
    description: "QR-based menu with instant ordering, kitchen display, and payment processing.",
    clientType: "Barcelona Cocktail Bar",
    outcome: "40% increase in orders, 25% boost in average ticket size",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80",
    tags: ["React", "Node.js", "Stripe", "Real-time"],
    category: "restaurants",
    challenge: "High-end cocktail bar was losing revenue because guests had to wait for staff to take orders. Limited staff meant slow service during peak hours.",
    solution: "Created a beautiful digital menu accessible via QR code. Guests browse drinks, add to cart, and pay instantly. Orders go straight to the bar in real-time. No app needed.",
    features: [
      "Scannable QR codes at each table",
      "Beautiful menu with photos and descriptions",
      "Cart and checkout flow",
      "Payment processing",
      "Real-time kitchen/bar display",
      "Admin menu management",
      "Order analytics and popular items",
      "Multi-language support (EN, ES, CA)"
    ],
  },
  {
    id: "3",
    slug: "cannabis-club-saas",
    title: "Cannabis Club Management SaaS",
    description: "Complete club operations platform: members, inventory, compliance, billing.",
    clientType: "Barcelona Cannabis Club",
    outcome: "Automated compliance reporting, saved 15 hours/week",
    image: "https://images.unsplash.com/photo-1585421514738-01798e348b17?w=800&q=80",
    tags: ["Next.js", "Stripe", "PDF Generation", "PostgreSQL"],
    category: "clubs",
    challenge: "Spanish cannabis clubs need strict compliance tracking (member registry, inventory logs, purchase limits). Manual Excel tracking was error-prone and time-consuming.",
    solution: "Built a complete SaaS platform for cannabis club operations. Automated member management, inventory tracking, purchase limits, compliance reporting, and billing. One-click PDF exports for inspections.",
    features: [
      "Member registration with ID verification",
      "Purchase tracking and limits",
      "Inventory management with strain tracking",
      "Automated compliance reports",
      "PDF generation for authorities",
      "Monthly billing and subscriptions",
      "Member portal access",
      "Admin dashboard with analytics"
    ],
  },
  {
    id: "4",
    slug: "event-ticketing-london",
    title: "Event Booking & Ticketing Platform",
    description: "Custom booking system with tiered tickets, guestlist, and door management.",
    clientType: "London Warehouse Events",
    outcome: "Sold 5,000+ tickets, zero technical issues on event night",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    tags: ["Next.js", "Stripe", "Email", "Analytics"],
    category: "nightlife",
    challenge: "Large warehouse events needed professional ticketing without Eventbrite fees. Required guestlist management, VIP tiers, and door check-in.",
    solution: "Built custom event platform with tiered ticketing, guestlist management, QR tickets, door scanning app, and real-time capacity tracking. Processed 5000+ tickets flawlessly.",
    features: [
      "Multi-tier ticket types (GA, VIP, etc.)",
      "Guestlist management",
      "QR code tickets",
      "Door scanning mobile app",
      "Real-time capacity tracking",
      "Refund management",
      "Email confirmations",
      "Analytics dashboard"
    ],
  },
  {
    id: "5",
    slug: "airbnb-lisbon",
    title: "Airbnb Property Showcase Site",
    description: "Beautiful multi-property website with booking calendar and guest resources.",
    clientType: "Lisbon Airbnb Host",
    outcome: "Direct bookings up 60%, reduced Airbnb fees by €12k/year",
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80",
    tags: ["Next.js", "Calendly", "SEO", "Analytics"],
    category: "airbnb",
    challenge: "Host was paying 15-20% fees to Airbnb. Wanted to drive direct bookings but needed professional website with availability calendar.",
    solution: "Created stunning property showcase website with integrated Calendly booking, guest guides, local recommendations, and SEO optimization. Now ranks #1 for 'Lisbon vacation rentals'.",
    features: [
      "Beautiful property galleries",
      "Integrated booking calendar",
      "Guest information portal",
      "Local recommendations guide",
      "Automated email responses",
      "SEO optimized content",
      "Mobile-first design",
      "Multi-language support"
    ],
  },
  {
    id: "6",
    slug: "staff-scheduling-app",
    title: "Staff Rota & Scheduling App",
    description: "Automated rota builder with shift swaps, time tracking, and payroll export.",
    clientType: "Multi-Venue Restaurant Group",
    outcome: "Cut scheduling time from 4 hours to 20 minutes per week",
    image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&q=80",
    tags: ["React", "Node.js", "PostgreSQL", "Excel Export"],
    category: "restaurants",
    challenge: "Managing 60+ staff across 3 venues was a nightmare. WhatsApp chaos, last-minute cancellations, manual payroll calculations.",
    solution: "Built staff scheduling platform with drag-drop rota builder, shift swap requests, automatic notifications, time tracking, and payroll export. Works across all devices.",
    features: [
      "Drag-and-drop rota builder",
      "Shift swap requests and approvals",
      "Automated shift reminders",
      "Time clock with GPS verification",
      "Payroll hours export",
      "Staff availability tracking",
      "Mobile app for staff",
      "Multi-venue support"
    ],
  },
  {
    id: "7",
    slug: "creative-studio-berlin",
    title: "Creative Studio Portfolio & CRM",
    description: "Stunning portfolio site with integrated client management and project tracking.",
    clientType: "Berlin Design Studio",
    outcome: "2x increase in quality leads, streamlined client workflow",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    tags: ["Next.js", "CMS", "Animations", "Forms"],
    category: "creative",
    challenge: "Design studio had outdated portfolio. Losing clients to studios with better web presence. Also needed better project management.",
    solution: "Created stunning animated portfolio with case studies, testimonials, and integrated CRM for managing client projects and communications.",
    features: [
      "Animated portfolio showcases",
      "Case study templates",
      "Client testimonials",
      "Contact and inquiry forms",
      "Project management dashboard",
      "Client communication portal",
      "Invoice generation",
      "File sharing system"
    ],
  },
  {
    id: "8",
    slug: "inventory-pos-integration",
    title: "Inventory & POS Integration",
    description: "Real-time inventory sync between POS system and stock management dashboard.",
    clientType: "Amsterdam Coffee Shop",
    outcome: "Eliminated stockouts, reduced waste by 30%",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
    tags: ["API Integration", "Webhooks", "Real-time", "Analytics"],
    category: "retail",
    challenge: "Coffee shop had separate POS and inventory systems. Manual updates led to stockouts and over-ordering. Wasting money on expired products.",
    solution: "Integrated POS with inventory management via API. Real-time stock updates, automated reorder alerts, waste tracking, and supplier management.",
    features: [
      "POS system integration",
      "Real-time stock level updates",
      "Low stock alerts",
      "Automated reorder points",
      "Supplier management",
      "Waste and spoilage tracking",
      "Cost analysis dashboard",
      "Mobile inventory app"
    ],
  },
]

export const categories = [
  { id: "all", label: "All Projects" },
  { id: "clubs", label: "Clubs & Nightlife" },
  { id: "restaurants", label: "Restaurants & Bars" },
  { id: "airbnb", label: "Airbnb & Hospitality" },
  { id: "creative", label: "Creative & Studios" },
  { id: "retail", label: "Retail & Coffee" },
  { id: "nightlife", label: "Events & Venues" },
]

