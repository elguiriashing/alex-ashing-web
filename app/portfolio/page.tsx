"use client"

import { useState } from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SectionContainer } from "@/components/section-container"
import { ProjectCard } from "@/components/project-card"
import { FadeIn } from "@/components/fade-in"
import { projects, categories } from "@/lib/projects-data"
import { cn } from "@/lib/utils"

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory)

  return (
    <>
      {/* Hero */}
      <SectionContainer className="pt-24 pb-16 md:pt-32">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Portfolio
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-xl text-muted-foreground">
              Real projects for real businesses across Europe. From Berlin techno 
              clubs to Barcelona restaurants.
            </p>
          </FadeIn>
        </div>
      </SectionContainer>

      {/* Filter */}
      <SectionContainer className="pt-0 pb-8">
        <FadeIn>
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "primary" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={cn(
                  "transition-all",
                  selectedCategory === category.id && "shadow-lg"
                )}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </FadeIn>
      </SectionContainer>

      {/* Projects Grid */}
      <SectionContainer className="pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              slug={project.slug}
              title={project.title}
              description={project.description}
              clientType={project.clientType}
              outcome={project.outcome}
              image={project.image}
              tags={project.tags}
              index={index}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No projects found in this category yet.
            </p>
          </div>
        )}
      </SectionContainer>

      {/* CTA */}
      <SectionContainer className="bg-muted/50">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Want Your Project Here?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's build something great together. Book a free call to discuss your project.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </FadeIn>
      </SectionContainer>
    </>
  )
}

