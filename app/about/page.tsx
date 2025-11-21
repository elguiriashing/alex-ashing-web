"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Code2, Zap, Users, Heart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SectionContainer } from "@/components/section-container"
import { FadeIn } from "@/components/fade-in"

const timeline = [
  {
    year: "2018",
    title: "Started Freelancing",
    description:
      "Left agency life to work directly with businesses that needed real solutions, not pitches.",
  },
  {
    year: "2020",
    title: "Focused on Nightlife & Hospitality",
    description:
      "Found my niche building for bars, clubs, and restaurants. Finally, work that felt meaningful.",
  },
  {
    year: "2022",
    title: "Expanded to Cannabis Clubs",
    description:
      "Built compliant member platforms for Spain's cannabis club scene. Compliance + good UX is rare.",
  },
  {
    year: "2024",
    title: "50+ Projects Launched",
    description:
      "From Berlin to Barcelona, London to Lisbon. Every project taught me something new.",
  },
]

const values = [
  {
    Icon: Code2,
    title: "Clean, Modern Tech",
    description:
      "No legacy systems. No WordPress. Just fast, reliable, maintainable code that works.",
  },
  {
    Icon: Zap,
    title: "Fast Delivery",
    description:
      "Most projects go live in 2-4 weeks. No endless delays or scope creep.",
  },
  {
    Icon: Users,
    title: "Direct Communication",
    description:
      "You work with me, not a project manager. I answer your messages within hours, not days.",
  },
  {
    Icon: Heart,
    title: "Industry Knowledge",
    description:
      "I've spent years building for nightlife and hospitality. I understand your world.",
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <SectionContainer className="pt-24 pb-16 md:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Hey, I'm Alex
              </h1>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  I'm a full-stack developer who builds custom tech for bars, clubs, 
                  restaurants, private clubs, and creative businesses.
                </p>
                <p>
                  I got into this because I was tired of watching great businesses struggle 
                  with terrible software. You deserve tech that actually works for you, not 
                  against you.
                </p>
                <p>
                  I don't do agencies, templates, or cookie-cutter solutions. Just custom-built 
                  systems that fit exactly what you need. One developer, full accountability.
                </p>
              </div>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Let's Work Together
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted">
              <Image
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80"
                alt="Alex Ashing"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </SectionContainer>

      {/* Values */}
      <SectionContainer className="bg-muted/50">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How I Work</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My principles for every project.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <FadeIn key={value.title} delay={index * 0.1}>
              <div className="p-6 rounded-xl bg-card border text-center h-full">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <value.Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </SectionContainer>

      {/* Timeline */}
      <SectionContainer>
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">My Journey</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              How I ended up building tech for nightlife and hospitality.
            </p>
          </div>
        </FadeIn>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <FadeIn key={item.year} delay={index * 0.1}>
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-sm">
                      {item.year.slice(-2)}
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-px h-full bg-border mt-2" />
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="text-sm text-muted-foreground mb-1">
                      {item.year}
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* Tech Stack */}
      <SectionContainer className="bg-muted/50">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Tech I Use</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Modern, proven tools. No experiments on your project.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            "Next.js",
            "React",
            "TypeScript",
            "Node.js",
            "PostgreSQL",
            "Stripe",
            "Tailwind CSS",
            "Cloudflare",
          ].map((tech, index) => (
            <FadeIn key={tech} delay={index * 0.05}>
              <div className="p-4 rounded-lg bg-card border text-center font-medium">
                {tech}
              </div>
            </FadeIn>
          ))}
        </div>
      </SectionContainer>

      {/* CTA */}
      <SectionContainer>
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Let's Build Something Great
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you need a simple website or a full platform, I'm here to help. 
              Book a free call and let's talk.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </FadeIn>
      </SectionContainer>
    </>
  )
}

