import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import { z } from "zod"

// Note: For static export, this API route won't work in production on Cloudflare Pages
// You'll need to use Cloudflare Workers or a third-party form service like Formspree
// This is included for local development and as a reference

const resend = new Resend(process.env.RESEND_API_KEY)

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  businessType: z.string(),
  message: z.string().min(10),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, businessType, message } = contactSchema.parse(body)

    // Send email using Resend
    await resend.emails.send({
      from: process.env.CONTACT_EMAIL_FROM || "onboarding@resend.dev",
      to: process.env.CONTACT_EMAIL_TO || "your-email@example.com",
      subject: `New Contact Form: ${businessType} - ${name}`,
      text: `
Name: ${name}
Email: ${email}
Business Type: ${businessType}

Message:
${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Business Type:</strong> ${businessType}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    )
  }
}

