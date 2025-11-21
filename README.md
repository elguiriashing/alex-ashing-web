# Alex Ashing Portfolio Website

A production-ready, client-facing portfolio website for a full-stack developer specializing in custom tech solutions for bars, social clubs, cannabis clubs, nightlife venues, restaurants, small businesses, Airbnb hosts, and creatives.

## 🎯 Overview

This is a complete Next.js 15 portfolio site built with modern best practices and designed for businesses in the nightlife, hospitality, and creative industries. The site features:

- Beautiful, modern design with Stripe-inspired aesthetics
- Full dark/light mode support
- Complete service showcase with dynamic routes
- Portfolio with filterable projects
- Contact form with email integration
- SEO-optimized with metadata and JSON-LD
- Mobile-first responsive design
- Smooth animations and transitions
- Ready to deploy to Cloudflare Pages

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS + ShadCN UI
- **Forms:** React Hook Form + Zod validation
- **Email:** Resend API
- **Icons:** Lucide React
- **Animations:** Framer Motion
- **Deployment:** Cloudflare Pages (static export)

## 📁 Project Structure

```
├── app/
│   ├── about/              # About page
│   ├── api/
│   │   └── contact/        # Contact form API route
│   ├── contact/            # Contact page with form
│   ├── portfolio/          # Portfolio page with filtering
│   ├── services/           # Services listing and dynamic routes
│   │   └── [slug]/         # Individual service pages
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   ├── not-found.tsx       # 404 page
│   ├── robots.ts           # Robots.txt generation
│   ├── sitemap.ts          # Sitemap generation
│   └── globals.css         # Global styles
├── components/
│   ├── ui/                 # ShadCN UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   ├── label.tsx
│   │   ├── select.tsx
│   │   ├── badge.tsx
│   │   ├── toast.tsx
│   │   ├── toaster.tsx
│   │   └── use-toast.ts
│   ├── fade-in.tsx         # Animation wrapper
│   ├── footer.tsx          # Site footer
│   ├── json-ld.tsx         # JSON-LD component
│   ├── navbar.tsx          # Navigation bar
│   ├── project-card.tsx    # Portfolio project card
│   ├── section-container.tsx
│   ├── service-card.tsx    # Service card component
│   ├── testimonial-card.tsx
│   ├── theme-provider.tsx  # Dark mode provider
│   └── theme-toggle.tsx    # Dark mode toggle
├── lib/
│   ├── fonts.ts            # Font configuration
│   ├── json-ld.ts          # SEO structured data
│   ├── projects-data.ts    # Portfolio projects data
│   ├── services-data.ts    # Services data
│   ├── testimonials-data.ts
│   └── utils.ts            # Utility functions
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone or navigate to the project:**

```bash
cd path/to/Alexashing.com
```

2. **Install dependencies:**

```bash
npm install
```

3. **Set up environment variables:**

Create a `.env.local` file in the root directory:

```env
# Resend API Key for contact form
RESEND_API_KEY=your_resend_api_key_here

# Email configuration
CONTACT_EMAIL_TO=your-email@example.com
CONTACT_EMAIL_FROM=noreply@yourdomain.com

# Site URL
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

**Getting a Resend API Key:**
1. Sign up at [resend.com](https://resend.com)
2. Verify your domain or use their test domain
3. Generate an API key from the dashboard
4. Add it to your `.env.local` file

4. **Run the development server:**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📝 Customization Guide

### 1. Update Personal Information

**In `components/navbar.tsx` and `components/footer.tsx`:**
- Change "Alex Ashing" to your name

**In `app/layout.tsx`:**
- Update metadata titles and descriptions
- Update Open Graph tags

**In `lib/json-ld.ts`:**
- Update person information
- Add your social media URLs
- Update business information

### 2. Add Services

Edit `lib/services-data.ts` to add or modify services. Each service includes:
- Title and description
- Icon (from Lucide React)
- Features list
- Use cases

### 3. Add Projects

Edit `lib/projects-data.ts` to add portfolio projects:
- Project details
- Client type
- Outcome/results
- Technologies used
- Category for filtering

### 4. Update Testimonials

Edit `lib/testimonials-data.ts` to add client testimonials.

### 5. Customize Colors

Edit `app/globals.css` to change the color scheme:
- `--primary`: Main brand color (default: purple)
- `--background`: Background color
- `--foreground`: Text color
- Dark mode variants included

### 6. Update Social Links

In `components/footer.tsx`, update the social links:
```typescript
const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/yourusername" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/yourusername" },
  // ...
]
```

### 7. Add Your Photo

Replace the placeholder image in `app/about/page.tsx`:
```typescript
<Image
  src="your-image-url-or-path"
  alt="Your Name"
  // ...
/>
```

### 8. Update Calendly Link

In `app/contact/page.tsx`, replace the Calendly URL:
```typescript
<a href="https://calendly.com/your-actual-username">
```

## 📧 Contact Form Setup

The contact form uses Resend for email delivery. For production on Cloudflare Pages:

### Option 1: Use Cloudflare Workers (Recommended)

Convert the API route to a Cloudflare Worker:

1. Create a Worker in your Cloudflare dashboard
2. Deploy the contact form handler as a Worker
3. Update the form to call your Worker endpoint

### Option 2: Use a Third-Party Form Service

Alternative services that work with static sites:
- [Formspree](https://formspree.io)
- [Web3Forms](https://web3forms.com)
- [Getform](https://getform.io)

Simply replace the form action with the service endpoint.

## 🎨 Component Library Usage

### Button Component

```tsx
import { Button } from "@/components/ui/button"

<Button variant="primary">Click me</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button size="lg">Large Button</Button>
```

### Card Component

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    Content here
  </CardContent>
</Card>
```

### Animation Wrapper

```tsx
import { FadeIn } from "@/components/fade-in"

<FadeIn delay={0.2}>
  <YourContent />
</FadeIn>
```

## 🌐 Deployment

### Deploy to Cloudflare Pages

1. **Install Wrangler CLI:**

```bash
npm install -g wrangler
```

2. **Build the site:**

```bash
npm run build
```

3. **Deploy:**

```bash
npm run pages:build
wrangler pages deploy .vercel/output/static --project-name=your-project-name
```

### Or use the Cloudflare Dashboard:

1. Push your code to GitHub
2. Connect your repository in Cloudflare Pages
3. Set build command: `npm run build`
4. Set build output directory: `out`
5. Add environment variables in Cloudflare dashboard

### Environment Variables in Production

Add these in your Cloudflare Pages settings:
- `RESEND_API_KEY`
- `CONTACT_EMAIL_TO`
- `CONTACT_EMAIL_FROM`
- `NEXT_PUBLIC_SITE_URL`

## 📱 Adding New Pages

1. Create a new folder in `app/`:

```bash
mkdir app/your-page
```

2. Add a `page.tsx` file:

```tsx
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Your Page Title",
  description: "Your page description",
}

export default function YourPage() {
  return <div>Your content</div>
}
```

3. Add the page to navigation in `components/navbar.tsx`

## 🎯 Adding New Services

1. Open `lib/services-data.ts`
2. Add a new service object:

```typescript
{
  id: "10",
  title: "Your Service",
  slug: "your-service",
  description: "Short description",
  icon: YourIcon, // Import from lucide-react
  longDescription: "Detailed description...",
  features: ["Feature 1", "Feature 2"],
  useCases: ["Use case 1", "Use case 2"],
}
```

3. The service page will be automatically generated at `/services/your-service`

## 🔍 SEO Optimization

The site includes:
- ✅ Proper metadata on all pages
- ✅ Open Graph tags for social sharing
- ✅ JSON-LD structured data (Person, LocalBusiness, Website)
- ✅ Sitemap generation
- ✅ Robots.txt configuration
- ✅ Semantic HTML
- ✅ Alt tags on images
- ✅ Mobile-friendly design

## 🐛 Common Issues & Solutions

### Issue: Animations not working

**Solution:** Make sure components using Framer Motion are client components:
```tsx
"use client"
```

### Issue: Dark mode not persisting

**Solution:** The theme is stored in localStorage. Check browser privacy settings.

### Issue: Contact form not working in production

**Solution:** For static exports on Cloudflare Pages, use Cloudflare Workers or a third-party form service (see Contact Form Setup above).

### Issue: Images not loading

**Solution:** For static export, all images must use `unoptimized: true` in `next.config.js` (already configured).

## 📊 Performance

Target metrics:
- Lighthouse Performance: 95+
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

## 🔄 Git Workflow

**To push updates to GitHub:**

```bash
# Stage your changes
git add .

# Commit with a message
git commit -m "Your commit message"

# Push to main branch
git push origin main
```

**To deploy to Cloudflare (if set up with GitHub integration):**

Just push to your main branch and Cloudflare will automatically rebuild and deploy.

## 📞 Support

For questions or issues with this template:
- Check the component files for usage examples
- Review the data files in `lib/` for content structure
- All components are documented with TypeScript types

## 📄 License

This is a custom-built portfolio site. Feel free to use as a template for your own projects.

---

**Built with ❤️ using Next.js 15, TypeScript, Tailwind CSS, and ShadCN UI**
