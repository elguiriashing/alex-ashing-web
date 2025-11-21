"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  company: string
  index?: number
}

export function TestimonialCard({
  quote,
  author,
  role,
  company,
  index = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full">
        <CardContent className="pt-6">
          <Quote className="h-8 w-8 text-primary/20 mb-4" />
          <p className="text-muted-foreground mb-6 italic">&quot;{quote}&quot;</p>
          <div>
            <p className="font-semibold">{author}</p>
            <p className="text-sm text-muted-foreground">
              {role} at {company}
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

