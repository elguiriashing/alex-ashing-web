import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react"
import * as Icons from "lucide-react"

import { Button } from "@/components/ui/button"
import { SectionContainer } from "@/components/section-container"
import { FadeIn } from "@/components/fade-in"
import { services } from "@/lib/services-data"

interface ServicePageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = params
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    notFound()
  }

  const Icon = Icons[service.icon as keyof typeof Icons] as any

  return (
    <>
      {/* Hero */}
      <SectionContainer className="pt-24 pb-16 md:pt-32">
        <div className="mb-6">
          <Button variant="ghost" asChild>
            <Link href="/services">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div>
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10">
                <Icon className="h-8 w-8 text-primary" />
              </div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
                {service.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {service.longDescription}
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 p-8 lg:p-12">
              <h3 className="text-2xl font-bold mb-6">What's Included</h3>
              <ul className="space-y-4">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </SectionContainer>

      {/* Use Cases */}
      <SectionContainer className="bg-muted/50">
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Perfect For
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-card border"
                >
                  <p className="font-medium">{useCase}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </SectionContainer>

      {/* CTA */}
      <SectionContainer>
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss your project and see how this solution can work for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Book a Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/portfolio">View Examples</Link>
              </Button>
            </div>
          </div>
        </FadeIn>
      </SectionContainer>
    </>
  )
}

