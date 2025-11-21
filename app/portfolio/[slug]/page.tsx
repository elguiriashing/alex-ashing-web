import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft, CheckCircle2, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SectionContainer } from "@/components/section-container"
import { FadeIn } from "@/components/fade-in"
import { projects } from "@/lib/projects-data"

type ProjectPageProps = {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectPage(props: ProjectPageProps) {
  const params = await props.params
  const { slug } = params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <>
      {/* Hero */}
      <SectionContainer className="pt-24 pb-16 md:pt-32">
        <div className="mb-6">
          <Button variant="ghost" asChild>
            <Link href="/portfolio">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portfolio
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <FadeIn>
            <div>
              <div className="mb-4">
                <span className="text-sm text-muted-foreground uppercase tracking-wider">
                  {project.clientType}
                </span>
              </div>
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="p-6 rounded-xl bg-primary/10 border border-primary/20">
                <h3 className="font-semibold mb-2 text-primary">Result</h3>
                <p className="text-lg">{project.outcome}</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </SectionContainer>

      {/* Challenge & Solution */}
      {(project.challenge || project.solution) && (
        <SectionContainer className="bg-muted/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {project.challenge && (
              <FadeIn>
                <div>
                  <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
              </FadeIn>
            )}
            {project.solution && (
              <FadeIn delay={0.1}>
                <div>
                  <h2 className="text-2xl font-bold mb-4">The Solution</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </FadeIn>
            )}
          </div>
        </SectionContainer>
      )}

      {/* Features */}
      {project.features && project.features.length > 0 && (
        <SectionContainer>
          <FadeIn>
            <h2 className="text-3xl font-bold mb-8 text-center">Key Features</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {project.features.map((feature, index) => (
              <FadeIn key={index} delay={index * 0.05}>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-card border">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{feature}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </SectionContainer>
      )}

      {/* Demo CTA */}
      <SectionContainer className="bg-gradient-to-br from-primary/10 to-primary/5">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Want Something Similar?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              I can build a custom solution tailored to your business needs. Let's talk about your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get in Touch
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/portfolio">
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  View More Projects
                </Link>
              </Button>
            </div>
          </div>
        </FadeIn>
      </SectionContainer>
    </>
  )
}

