"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  slug: string
  title: string
  description: string
  clientType: string
  outcome: string
  image: string
  tags: string[]
  index?: number
}

export function ProjectCard({
  slug,
  title,
  description,
  clientType,
  outcome,
  image,
  tags,
  index = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/portfolio/${slug}`}>
        <Card className="h-full overflow-hidden group cursor-pointer hover:shadow-2xl transition-shadow">
        <div className="relative h-48 w-full overflow-hidden bg-muted">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          <ExternalLink className="absolute top-4 right-4 h-5 w-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <CardHeader>
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-muted-foreground uppercase tracking-wider">
              {clientType}
            </span>
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm mb-4">
            <span className="font-semibold text-primary">Result:</span> {outcome}
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
      </Link>
    </motion.div>
  )
}
