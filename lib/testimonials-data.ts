export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  company: string
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "Alex built our entire member system in three weeks. We went from paper lists and chaos to a slick digital system that just works. Our door team actually thanks me now.",
    author: "Marcus Schmidt",
    role: "Owner",
    company: "Berghain-style Club, Berlin",
  },
  {
    id: "2",
    quote:
      "The QR menu system paid for itself in the first month. Orders are faster, customers order more, and we finally have data on what actually sells. Game changer.",
    author: "Sofia Martínez",
    role: "Manager",
    company: "Cocktail Bar, Barcelona",
  },
  {
    id: "3",
    quote:
      "Finally, a developer who actually understands how cannabis clubs work in Spain. The platform handles everything: members, inventory, compliance. It's perfect.",
    author: "João Costa",
    role: "President",
    company: "Private Cannabis Club, Barcelona",
  },
  {
    id: "4",
    quote:
      "We stopped losing money on Airbnb fees. Alex built us a beautiful site with direct booking, and it's bringing in 60% more direct reservations. Worth every cent.",
    author: "Maria Santos",
    role: "Property Manager",
    company: "Lisbon Airbnb Portfolio",
  },
  {
    id: "5",
    quote:
      "I was drowning in staff scheduling spreadsheets. Now it takes me 20 minutes a week, shifts are covered, and everyone gets automatic reminders. Life-changing.",
    author: "Tom Anderson",
    role: "Operations Manager",
    company: "Restaurant Group, London",
  },
  {
    id: "6",
    quote:
      "Alex doesn't just code, he actually gets what we're trying to do as a creative studio. The site is gorgeous, and the CRM keeps us organized. Can't recommend enough.",
    author: "Nina Bergmann",
    role: "Creative Director",
    company: "Design Studio, Berlin",
  },
]

