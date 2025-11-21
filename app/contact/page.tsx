"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Mail, MessageSquare, Clock, CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { SectionContainer } from "@/components/section-container"
import { FadeIn } from "@/components/fade-in"
import { useToast } from "@/components/ui/use-toast"

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  businessType: z.string().min(1, "Please select a business type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactFormData = z.infer<typeof contactFormSchema>

const businessTypes = [
  "Bar / Nightclub",
  "Restaurant / Cafe",
  "Private Club",
  "Cannabis Club",
  "Airbnb / Hospitality",
  "Creative Studio",
  "Other",
]

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const { toast } = useToast()

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const businessType = watch("businessType")

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)

    try {
      // TODO: Replace with your form service (Formspree, Web3Forms, etc.)
      // For now, just show success message
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setIsSuccess(true)
      reset()
      toast({
        title: "Message sent!",
        description: "I'll get back to you within 24 hours.",
      })
      
      // Log form data to console for now
      console.log("Form data:", data)
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: "Please try again or email me directly.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <SectionContainer className="pt-24 pb-16 md:pt-32">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <CheckCircle2 className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Message Sent!</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Thanks for reaching out. I'll get back to you within 24 hours, usually much sooner.
            </p>
            <Button
              size="lg"
              onClick={() => {
                setIsSuccess(false)
                reset()
              }}
            >
              Send Another Message
            </Button>
          </FadeIn>
        </div>
      </SectionContainer>
    )
  }

  return (
    <>
      {/* Hero */}
      <SectionContainer className="pt-24 pb-16 md:pt-32">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Let's Talk
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="text-xl text-muted-foreground">
              Book a free 15-minute call or send me a message. No pressure, no sales pitch. 
              Let's see if I can help.
            </p>
          </FadeIn>
        </div>
      </SectionContainer>

      {/* Contact Methods */}
      <SectionContainer className="pt-0 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            {
              icon: Mail,
              title: "Email Response",
              description: "Usually within 24 hours",
            },
            {
              icon: MessageSquare,
              title: "Direct Communication",
              description: "No account managers",
            },
            {
              icon: Clock,
              title: "Free Consultation",
              description: "15-minute discovery call",
            },
          ].map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.1}>
              <div className="p-6 rounded-xl bg-card border text-center">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </SectionContainer>

      {/* Contact Form */}
      <SectionContainer className="pt-0">
        <div className="max-w-2xl mx-auto">
          <FadeIn>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  {...register("name")}
                />
                {errors.name && (
                  <p className="text-sm text-destructive">{errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="businessType">Business Type *</Label>
                <Select
                  value={businessType}
                  onValueChange={(value) => setValue("businessType", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your business type" />
                  </SelectTrigger>
                  <SelectContent>
                    {businessTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.businessType && (
                  <p className="text-sm text-destructive">
                    {errors.businessType.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={6}
                  {...register("message")}
                />
                {errors.message && (
                  <p className="text-sm text-destructive">{errors.message.message}</p>
                )}
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-12 text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Prefer to schedule a call directly?
              </p>
              <Button variant="outline" asChild>
                <a
                  href="https://calendly.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a 15-min Call
                </a>
              </Button>
            </div>
          </FadeIn>
        </div>
      </SectionContainer>
    </>
  )
}

