# Customization Guide

Complete guide to personalizing this portfolio site for your needs.

## 🎨 Quick Customization Checklist

### 1. Personal Branding

**Update your name everywhere:**

- `components/navbar.tsx` - Line 32
- `components/footer.tsx` - Line 30
- `app/layout.tsx` - All metadata
- `lib/json-ld.ts` - All structured data

**Find and replace:** Search for "Alex Ashing" across all files.

---

### 2. Color Scheme

Edit `app/globals.css`:

```css
:root {
  --primary: 262 83% 58%; /* Purple - change this! */
  /* HSL format: Hue Saturation Lightness */
}
```

**Popular color options:**
- Electric Blue: `210 100% 56%`
- Emerald Green: `142 71% 45%`
- Vibrant Orange: `25 95% 53%`
- Hot Pink: `330 81% 60%`

Use [this tool](https://www.tints.dev/) to convert any color to HSL.

---

### 3. Content Updates

#### Services (`lib/services-data.ts`)

Add, remove, or modify services:

```typescript
{
  id: "10", // Unique ID
  title: "Your Service Name",
  slug: "your-service-name", // URL-friendly
  description: "Brief description for cards",
  icon: YourIcon, // Import from lucide-react
  longDescription: "Full description for service page",
  features: ["Feature 1", "Feature 2"],
  useCases: ["Use case 1", "Use case 2"],
}
```

**Icons available:** Browse [Lucide Icons](https://lucide.dev)

#### Projects (`lib/projects-data.ts`)

Add your real projects:

```typescript
{
  id: "1",
  title: "Project Name",
  description: "Brief description",
  clientType: "Industry/Business Type",
  outcome: "Results achieved",
  image: "https://images.unsplash.com/...", // Or /images/project.jpg
  tags: ["Next.js", "TypeScript", "etc"],
  category: "clubs", // For filtering
}
```

**Image recommendations:**
- Size: 800x600px minimum
- Format: WebP or JPEG
- Use Unsplash for placeholders
- Store final images in `public/images/`

#### Testimonials (`lib/testimonials-data.ts`)

Add real client testimonials:

```typescript
{
  id: "1",
  quote: "The actual testimonial text",
  author: "Client Name",
  role: "Their Role",
  company: "Company/Business Name",
}
```

---

### 4. Contact Information

#### Email Setup

1. **Get Resend API Key:**
   - Go to [resend.com](https://resend.com)
   - Sign up and verify your domain
   - Create an API key
   - Add to `.env.local`

2. **Update email addresses in `.env.local`:**
```env
CONTACT_EMAIL_TO=your-actual-email@yourdomain.com
CONTACT_EMAIL_FROM=contact@yourdomain.com
```

#### Calendly Integration

Update link in `app/contact/page.tsx` (around line 187):

```tsx
<a href="https://calendly.com/YOUR_ACTUAL_USERNAME">
```

Or remove the Calendly button entirely if you don't use it.

---

### 5. Social Media Links

Update in `components/footer.tsx` (lines 17-21):

```typescript
const socialLinks = [
  { name: "GitHub", icon: Github, href: "https://github.com/yourusername" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/yourusername" },
  { name: "Email", icon: Mail, href: "/contact" },
]
```

Also update in `lib/json-ld.ts` for SEO:

```typescript
sameAs: [
  "https://github.com/yourusername",
  "https://linkedin.com/in/yourusername",
  "https://twitter.com/yourusername",
]
```

---

### 6. About Page

**Add your photo:**

In `app/about/page.tsx` (around line 82):

```tsx
<Image
  src="/images/your-photo.jpg" // Add image to public/images/
  alt="Your Name"
  fill
  className="object-cover"
/>
```

**Update your story:**

Edit the text in `app/about/page.tsx` to tell your actual story.

**Update timeline:**

Edit the `timeline` array to reflect your journey.

**Update tech stack:**

Edit the tech array to list technologies you actually use.

---

### 7. SEO Configuration

#### Metadata

Update `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: {
    default: "Your Name | Your Tagline",
    template: "%s | Your Name",
  },
  description: "Your actual description",
  keywords: ["your", "keywords", "here"],
  // ...
}
```

#### Site URL

Update everywhere:

- `.env.local`: `NEXT_PUBLIC_SITE_URL`
- `app/sitemap.ts`: `baseUrl`
- `app/robots.ts`: `baseUrl`

#### JSON-LD Structured Data

Update `lib/json-ld.ts` with your actual information.

---

### 8. Navigation Menu

Update in `components/navbar.tsx` (lines 15-21):

```typescript
const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  // Add more pages here
]
```

---

### 9. Footer Content

Edit `components/footer.tsx`:

- Update company description
- Modify footer links
- Update copyright text

---

### 10. Home Page

#### "Who I Help" Section

Edit the `whoIHelp` array in `app/page.tsx`:

```typescript
const whoIHelp = [
  {
    title: "Your Target Audience",
    description: "Services you offer them",
  },
  // Add or remove items
]
```

#### Benefits/Features

Edit the `benefits` array in `app/page.tsx` to match your value proposition.

---

## 🎯 Advanced Customization

### Adding a Blog

1. Create `app/blog/page.tsx`
2. Create `app/blog/[slug]/page.tsx` for posts
3. Add blog data file in `lib/blog-data.ts`
4. Add "Blog" to navigation

### Adding a Newsletter

1. Choose provider (ConvertKit, Mailchimp, etc.)
2. Create sign-up form component
3. Add to footer or home page

### Adding Analytics

**Google Analytics:**

Add to `app/layout.tsx`:

```tsx
import Script from 'next/script'

// In the component:
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
```

**Plausible Analytics (Privacy-friendly):**

```tsx
<Script
  defer
  data-domain="yourdomain.com"
  src="https://plausible.io/js/script.js"
/>
```

### Changing Fonts

Update `lib/fonts.ts`:

```typescript
import { YourFont } from 'next/font/google'

export const yourFont = YourFont({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})
```

Browse fonts at [Google Fonts](https://fonts.google.com)

---

## 🎨 Design Tweaks

### Adjusting Spacing

Global spacing is controlled by Tailwind classes:

- `py-16`: Vertical padding (sections)
- `gap-6`: Gap between grid items
- `mb-4`: Margin bottom

### Border Radius

Update in `tailwind.config.ts`:

```typescript
--radius: 0.75rem; // Change this value
```

### Shadows

Adjust in `tailwind.config.ts` or use Tailwind classes:
- `shadow-sm`
- `shadow-lg`
- `shadow-xl`

### Animations

Modify animation speed in `components/fade-in.tsx`:

```typescript
transition={{ duration: 0.6, delay, ease: "easeOut" }}
//                       ^^^ Change this
```

---

## 📱 Mobile Optimization

Most responsive breakpoints are already configured:

- `md:` - Tablets (768px+)
- `lg:` - Laptops (1024px+)
- `xl:` - Desktops (1280px+)

Test on real devices and adjust as needed.

---

## ✅ Final Polish Checklist

Before launching:

- [ ] All "Alex Ashing" replaced with your name
- [ ] All placeholder content replaced
- [ ] All images optimized and loading
- [ ] Contact form tested
- [ ] Dark mode tested
- [ ] All links work
- [ ] Mobile view looks good
- [ ] Fast page loads (test with Lighthouse)
- [ ] No console errors
- [ ] SEO metadata complete
- [ ] Favicons added (use [realfavicongenerator.net](https://realfavicongenerator.net))

---

## 🆘 Need Help?

- **Component documentation:** Check the component files directly
- **Tailwind classes:** https://tailwindcss.com/docs
- **TypeScript help:** Hover over components in VS Code
- **Design inspiration:** https://dribbble.com, https://land-book.com

---

**Happy customizing! 🎨**

