"use client"

import { Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/config"

interface CalendlyButtonProps {
  size?: "default" | "sm" | "lg" | "icon"
  variant?: "default" | "outline" | "ghost" | "link"
  className?: string
  children?: React.ReactNode
}

export function CalendlyButton({ 
  size = "lg", 
  variant = "default",
  className,
  children = "Book a Call"
}: CalendlyButtonProps) {
  const handleClick = () => {
    // Open Calendly in a new tab
    window.open(siteConfig.calendly.url, "_blank", "noopener,noreferrer")
  }

  return (
    <Button 
      size={size} 
      variant={variant}
      onClick={handleClick}
      className={className}
    >
      {children}
      <Calendar className="ml-2 h-5 w-5" />
    </Button>
  )
}

