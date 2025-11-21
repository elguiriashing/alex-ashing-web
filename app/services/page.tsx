"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import * as Icons from "lucide-react"

import { Button } from "@/components/ui/button"
import { SectionContainer } from "@/components/section-container"
import { ServiceCard } from "@/components/service-card"
import { FadeIn } from "@/components/fade-in"
import { services } from "@/lib/services-data"

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <SectionContainer className="pt-24 pb-16 md:pt-32">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Custom Tech Solutions
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-xl text-muted-foreground">
              From simple websites to complete SaaS platforms. Everything built custom, 
              no templates, no compromises.
            </p>
          </FadeIn>
        </div>
      </SectionContainer>

      {/* Services Grid */}
      <SectionContainer className="pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
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
      </SectionContainer>

      {/* How It Works */}
      <SectionContainer className="bg-muted/50">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple, transparent process from idea to launch.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[
            {
              step: "01",
              title: "Discovery Call",
              description:
                "Free 15-min chat. We discuss your needs, goals, and rough timeline.",
            },
            {
              step: "02",
              title: "Proposal & Quote",
              description:
                "I send a clear proposal with scope, timeline, and fixed price within 48 hours.",
            },
            {
              step: "03",
              title: "Build & Updates",
              description:
                "I build your project and send regular updates. You give feedback as we go.",
            },
            {
              step: "04",
              title: "Launch & Support",
              description:
                "We launch together. I stick around for fixes and future updates.",
            },
          ].map((item, index) => (
            <FadeIn key={item.step} delay={index * 0.1}>
              <div className="text-center">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">
                  {item.step}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
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
              Let's Talk About Your Project
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              No commitment, no pressure. Just a quick chat to see if I can help.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Book a Free Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </FadeIn>
      </SectionContainer>
    </>
  )
}

