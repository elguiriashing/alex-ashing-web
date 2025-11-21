import type { Metadata } from "next"
import { inter } from "@/lib/fonts"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import { JsonLd } from "@/components/json-ld"
import { getPersonJsonLd, getLocalBusinessJsonLd, getWebsiteJsonLd } from "@/lib/json-ld"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Alex Ashing | Custom Tech for Bars, Clubs, Restaurants & Creative Businesses",
    template: "%s | Alex Ashing",
  },
  description:
    "Full-stack developer specializing in custom websites, member apps, booking systems, and SaaS platforms for nightlife venues, bars, restaurants, private clubs, and creative businesses across Europe.",
  keywords: [
    "custom web development",
    "nightclub software",
    "bar management system",
    "restaurant booking system",
    "member management app",
    "cannabis club software",
    "private club platform",
    "QR menu system",
    "staff scheduling app",
    "inventory management",
    "Berlin developer",
    "Barcelona tech",
  ],
  authors: [{ name: "Alex Ashing" }],
  creator: "Alex Ashing",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alexashing.com",
    title: "Alex Ashing | Custom Tech for Bars, Clubs & Creative Businesses",
    description:
      "Full-stack developer building custom tech solutions for nightlife, hospitality, and creative businesses.",
    siteName: "Alex Ashing",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Ashing | Custom Tech Solutions",
    description:
      "Full-stack developer for bars, clubs, restaurants, and creative businesses.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <JsonLd data={getPersonJsonLd()} />
        <JsonLd data={getLocalBusinessJsonLd()} />
        <JsonLd data={getWebsiteJsonLd()} />
      </head>
      <body className={inter.variable}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 pt-16">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

