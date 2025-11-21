export function getPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Alex Ashing",
    jobTitle: "Full-Stack Developer",
    description:
      "Full-stack developer specializing in custom tech solutions for bars, clubs, restaurants, and creative businesses",
    url: "https://alexashing.com",
    sameAs: [
      // Add your social media URLs here
      "https://github.com/yourusername",
      "https://linkedin.com/in/yourusername",
    ],
    knowsAbout: [
      "Web Development",
      "SaaS Development",
      "Nightlife Software",
      "Restaurant Technology",
      "Member Management Systems",
      "Booking Systems",
    ],
  }
}

export function getLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Alex Ashing - Custom Tech Solutions",
    description:
      "Custom websites, member apps, and SaaS platforms for bars, clubs, restaurants, and creative businesses",
    url: "https://alexashing.com",
    priceRange: "$$",
    areaServed: ["Europe", "Berlin", "Barcelona", "London", "Lisbon"],
    serviceType: [
      "Web Development",
      "Mobile App Development",
      "SaaS Development",
      "Custom Software Development",
    ],
  }
}

export function getWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Alex Ashing",
    description:
      "Custom tech solutions for bars, clubs, restaurants, and creative businesses",
    url: "https://alexashing.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://alexashing.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }
}

