"use client"

import Link from "next/link"
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react"
import * as Icons from "lucide-react"

import { Button } from "@/components/ui/button"
import { SectionContainer } from "@/components/section-container"
import { ServiceCard } from "@/components/service-card"
import { TestimonialCard } from "@/components/testimonial-card"
import { FadeIn } from "@/components/fade-in"
import { services } from "@/lib/services-data"
import { testimonials } from "@/lib/testimonials-data"

const whoIHelp = [
  {
    title: "Bars & Nightclubs",
    description: "Guestlist apps, QR menus, member systems, event ticketing",
  },
  {
    title: "Restaurants & Cafes",
    description: "Digital ordering, table booking, staff scheduling, inventory",
  },
  {
    title: "Private & Social Clubs",
    description: "Full member platforms, access control, billing, events",
  },
  {
    title: "Cannabis Clubs",
    description: "Compliant member management, inventory tracking, reporting",
  },
  {
    title: "Airbnb Hosts",
    description: "Property showcase sites, booking systems, guest resources",
  },
  {
    title: "Creative Studios",
    description: "Portfolio sites, client management, project tracking",
  },
]

const benefits = [
  "No technical knowledge needed – I handle everything",
  "Fast delivery – most projects live in 2-4 weeks",
  "One point of contact – you work directly with me",
  "Modern, reliable tech – no legacy systems or WordPress",
  "Ongoing support – I'm here when you need changes",
  "Fair pricing – no hidden costs or agency markup",
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <SectionContainer className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="mx-auto max-w-4xl text-center">
          <FadeIn>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" />
              Custom tech that actually works for you
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Your bar, club, or restaurant runs on{" "}
              <span className="gradient-text">
                custom tech
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mb-8 text-xl text-muted-foreground sm:text-2xl">
              I build beautiful websites, member apps, booking systems, and custom SaaS 
              that save time and make money. One developer, full accountability.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Book a free 15-min call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">View Services</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </SectionContainer>

      {/* Who I Help Section */}
      <SectionContainer className="bg-muted/50">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Who I Help</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I specialize in nightlife, hospitality, and creative businesses that need 
              reliable tech without the enterprise complexity.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whoIHelp.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.1}>
              <div className="p-6 rounded-xl bg-card border hover:shadow-lg transition-all">
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </SectionContainer>

      {/* Services Preview */}
      <SectionContainer>
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What I Build</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From simple websites to full SaaS platforms. Everything custom-built 
              to fit exactly what you need.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.slice(0, 6).map((service, index) => {
            const IconComponent = Icons[service.icon as keyof typeof Icons] as any
            return (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={IconComponent}
                slug={service.slug}
                index={index}
              />
            )
          })}
        </div>

        <FadeIn>
          <div className="text-center">
            <Button size="lg" variant="outline" asChild>
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </FadeIn>
      </SectionContainer>

      {/* Why Work With Me */}
      <SectionContainer className="bg-muted/50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div>
              <h2 className="text-3xl font-bold mb-6">
                One Developer. Full Accountability.
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                No account managers, no miscommunication, no surprise fees. You work 
                directly with me from the first call to launch and beyond. I actually 
                understand your industry because I've been building for it for years.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-bold text-primary mb-4">2-4</div>
                <div className="text-xl font-semibold mb-2">weeks</div>
                <div className="text-muted-foreground">
                  Average time to launch
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </SectionContainer>

      {/* Testimonials */}
      <SectionContainer>
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real feedback from real business owners across Europe.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              company={testimonial.company}
              index={index}
            />
          ))}
        </div>
      </SectionContainer>

      {/* CTA Section */}
      <SectionContainer className="bg-gradient-to-br from-primary/10 to-primary/5">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to build something great?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Book a free 15-minute call. No pressure, no sales pitch. Let's talk 
              about what you need and see if I can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Book a Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/portfolio">View Portfolio</Link>
              </Button>
            </div>
          </div>
        </FadeIn>
      </SectionContainer>
    </>
  )
}

