export interface Service {
  id: string
  title: string
  slug: string
  description: string
  icon: string
  longDescription: string
  features: string[]
  useCases: string[]
}

export const services: Service[] = [
  {
    id: "1",
    title: "Custom Websites & Booking Systems",
    slug: "custom-websites",
    description:
      "Beautiful, fast websites with integrated booking and payment systems tailored to your business.",
    icon: "Globe",
    longDescription:
      "Your venue deserves a website that actually works for you. I build modern, mobile-optimized sites with integrated booking systems, payment processing, and content management that you can update yourself. No WordPress bloat, just clean, fast, and reliable tech.",
    features: [
      "Mobile-first responsive design",
      "Integrated booking & reservations",
      "Payment processing (Stripe, etc.)",
      "Easy content management",
      "SEO optimization",
      "Analytics & tracking",
    ],
    useCases: [
      "Nightclub event bookings",
      "Restaurant table reservations",
      "Airbnb property showcase",
      "Creative portfolio sites",
    ],
  },
  {
    id: "2",
    title: "Membership & Guestlist Apps",
    slug: "membership-apps",
    description:
      "Streamline member management, guestlist check-ins, and access control with custom mobile apps.",
    icon: "Users",
    longDescription:
      "Tired of messy spreadsheets and lost guestlists? I build custom apps that handle member sign-ups, guestlist management, QR code check-ins, and attendance tracking. Works offline, syncs when you're back online.",
    features: [
      "Digital guestlist management",
      "QR code check-ins",
      "Member profiles & history",
      "Offline-first functionality",
      "Real-time updates",
      "Analytics dashboard",
    ],
    useCases: [
      "Private club memberships",
      "Event guestlist management",
      "VIP access control",
      "Community member portals",
    ],
  },
  {
    id: "3",
    title: "Private Club SaaS Platforms",
    slug: "club-saas",
    description:
      "Full-featured platforms for managing memberships, events, payments, and communication.",
    icon: "Lock",
    longDescription:
      "Run your entire club operation from one platform. Member management, event scheduling, payment processing, email campaigns, and detailed analytics. Everything you need to run a modern private club or social space.",
    features: [
      "Member management system",
      "Event creation & ticketing",
      "Recurring billing & payments",
      "Email & SMS campaigns",
      "Member directory",
      "Detailed reporting",
    ],
    useCases: [
      "Private social clubs",
      "Cannabis clubs",
      "Coworking spaces",
      "Creative collectives",
    ],
  },
  {
    id: "4",
    title: "QR Menus & Digital Ordering",
    slug: "qr-menus",
    description:
      "Interactive digital menus with ordering and payment, no app required for your guests.",
    icon: "QrCode",
    longDescription:
      "Ditch the printed menus and clunky POS tablets. Guests scan a QR code, browse your menu, order, and pay from their phone. You get real-time orders in the kitchen and analytics on what sells.",
    features: [
      "Scannable QR code menus",
      "Online ordering & payment",
      "Real-time kitchen display",
      "Menu management dashboard",
      "Multi-language support",
      "Sales analytics",
    ],
    useCases: [
      "Restaurant table ordering",
      "Bar cocktail menus",
      "Food truck ordering",
      "Event catering",
    ],
  },
  {
    id: "5",
    title: "Staff Rota & Scheduling Tools",
    slug: "staff-scheduling",
    description:
      "Automated staff scheduling, shift management, and time tracking built for hospitality.",
    icon: "Calendar",
    longDescription:
      "Stop chasing staff on WhatsApp. Build rotas, send automatic reminders, let staff swap shifts, track hours, and export payroll data. Works on any device.",
    features: [
      "Drag & drop rota builder",
      "Shift swap requests",
      "Automated reminders",
      "Time clock & tracking",
      "Payroll export",
      "Mobile staff app",
    ],
    useCases: [
      "Bar & restaurant staffing",
      "Event crew management",
      "Security shift planning",
      "Multi-venue coordination",
    ],
  },
  {
    id: "6",
    title: "Inventory & Stock Management",
    slug: "inventory-management",
    description:
      "Track stock levels, automate reordering, and reduce waste with smart inventory tools.",
    icon: "Package",
    longDescription:
      "Know exactly what you have, what you need, and what's costing you money. Barcode scanning, low-stock alerts, supplier management, and waste tracking.",
    features: [
      "Barcode scanning",
      "Low stock alerts",
      "Supplier management",
      "Waste tracking",
      "Cost analysis",
      "Automated reorder points",
    ],
    useCases: [
      "Bar inventory tracking",
      "Restaurant stock control",
      "Cafe supply management",
      "Cannabis inventory compliance",
    ],
  },
  {
    id: "7",
    title: "Loyalty & Rewards Programs",
    slug: "loyalty-programs",
    description:
      "Build customer loyalty with points, rewards, and exclusive perks that actually work.",
    icon: "Gift",
    longDescription:
      "Reward your regulars and turn first-timers into loyalists. Points for purchases, member perks, referral bonuses, and automated campaigns to bring people back.",
    features: [
      "Points & rewards system",
      "Digital loyalty cards",
      "Referral programs",
      "Exclusive member perks",
      "Automated campaigns",
      "Customer insights",
    ],
    useCases: [
      "Bar regular rewards",
      "Restaurant loyalty programs",
      "Retail customer perks",
      "Event series passes",
    ],
  },
  {
    id: "8",
    title: "Payment & Access Control",
    slug: "payment-access",
    description:
      "Seamless payment processing and NFC/QR access control for events and venues.",
    icon: "CreditCard",
    longDescription:
      "Take payments anywhere, control access with NFC wristbands or QR codes, and get paid faster. Integrates with Stripe, cash tracking, and venue access systems.",
    features: [
      "Mobile payment processing",
      "NFC wristband integration",
      "QR code access control",
      "Cash & card tracking",
      "Split payments",
      "Real-time reporting",
    ],
    useCases: [
      "Festival ticketing & access",
      "Venue entry management",
      "Bar tab systems",
      "Event cashless payments",
    ],
  },
  {
    id: "9",
    title: "API Integrations & Automations",
    slug: "api-integrations",
    description:
      "Connect your existing tools and automate workflows to save time and reduce errors.",
    icon: "Workflow",
    longDescription:
      "Your tools should talk to each other. I connect your booking system to your accounting software, sync your POS with inventory, automate social posts, and build custom workflows that just work.",
    features: [
      "Third-party API integration",
      "Automated workflows",
      "Data synchronization",
      "Custom reporting",
      "Zapier/Make.com connections",
      "Webhook automation",
    ],
    useCases: [
      "Accounting software sync",
      "CRM integration",
      "Social media automation",
      "Multi-platform booking sync",
    ],
  },
]

