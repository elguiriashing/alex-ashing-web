# Deployment Guide

## Quick Start: Deploy to Cloudflare Pages

### Option 1: GitHub Integration (Recommended)

1. **Push your code to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/your-repo.git
git push -u origin main
```

2. **Connect to Cloudflare Pages:**
   - Go to [Cloudflare Pages Dashboard](https://dash.cloudflare.com/)
   - Click "Create a project"
   - Connect your GitHub account
   - Select your repository
   - Configure build settings:
     - **Build command:** `npm run build`
     - **Build output directory:** `out`
     - **Root directory:** `/` (leave empty)
   - Add environment variables:
     - `RESEND_API_KEY`
     - `CONTACT_EMAIL_TO`
     - `CONTACT_EMAIL_FROM`
     - `NEXT_PUBLIC_SITE_URL`

3. **Deploy:**
   - Click "Save and Deploy"
   - Wait for build to complete
   - Your site is live!

**Future updates:** Just push to main branch and Cloudflare will auto-deploy.

---

### Option 2: Wrangler CLI (Direct Upload)

1. **Install Wrangler:**
```bash
npm install -g wrangler
```

2. **Login to Cloudflare:**
```bash
wrangler login
```

3. **Build your site:**
```bash
npm run build
```

4. **Deploy:**
```bash
wrangler pages deploy out --project-name=your-project-name
```

---

## Important Notes

### Contact Form in Production

The contact form API route won't work with static export. You have **3 options**:

#### Option A: Use Cloudflare Workers (Best for this stack)

1. Create a Cloudflare Worker for the contact form
2. Update `app/contact/page.tsx` to point to your Worker URL
3. Move the API logic from `app/api/contact/route.ts` to your Worker

#### Option B: Use Formspree (Easiest)

1. Sign up at [Formspree.io](https://formspree.io)
2. Create a new form and get your endpoint
3. Update the form in `app/contact/page.tsx`:

```tsx
const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data),
})
```

#### Option C: Use Web3Forms (Also Easy)

1. Get API key from [Web3Forms.com](https://web3forms.com)
2. Add `access_key` to your form data
3. Submit to their endpoint

---

## Custom Domain Setup

1. **In Cloudflare Pages:**
   - Go to your project
   - Click "Custom domains"
   - Click "Set up a custom domain"
   - Enter your domain
   - Follow DNS instructions

2. **Update Environment Variables:**
   - Update `NEXT_PUBLIC_SITE_URL` to your custom domain
   - Update `CONTACT_EMAIL_FROM` to use your domain

3. **SSL Certificate:**
   - Cloudflare provides free SSL automatically
   - Your site will be HTTPS by default

---

## Pre-Deployment Checklist

- [ ] Update all placeholder text with your info
- [ ] Replace "Alex Ashing" with your name
- [ ] Add your actual projects to `lib/projects-data.ts`
- [ ] Add your real testimonials to `lib/testimonials-data.ts`
- [ ] Update social media links in footer
- [ ] Add your photo to About page
- [ ] Update Calendly link (or remove if not using)
- [ ] Set up Resend account and verify domain
- [ ] Test contact form locally
- [ ] Choose contact form solution for production
- [ ] Update `NEXT_PUBLIC_SITE_URL` in env variables
- [ ] Test dark/light mode
- [ ] Test mobile responsiveness
- [ ] Run `npm run build` locally to check for errors
- [ ] Update README with your specific info

---

## GitHub Push Commands

When you make updates and want to deploy:

```bash
# Stage all changes
git add .

# Commit with a descriptive message
git commit -m "Update portfolio with new project"

# Push to GitHub (triggers auto-deploy if connected)
git push origin main
```

---

## Troubleshooting

### Build fails on Cloudflare

**Check:**
- Node version (should be 18+)
- All environment variables are set
- No TypeScript errors locally

### Images not loading

**Solution:** Make sure all image URLs are absolute or from the `public/` folder.

### Dark mode not working

**Solution:** Check that JavaScript is enabled and localStorage is not blocked.

### Contact form not working

**Solution:** Implement one of the production contact form options above.

---

## Performance Tips

1. **Optimize Images:**
   - Use WebP format when possible
   - Compress images before adding
   - Use appropriate sizes

2. **Minimize JavaScript:**
   - Already optimized with Next.js
   - Use dynamic imports if adding heavy libraries

3. **Enable Cloudflare Features:**
   - Auto Minify (CSS, JS, HTML)
   - Brotli compression
   - HTTP/2

---

## Need Help?

- Next.js Docs: https://nextjs.org/docs
- Cloudflare Pages Docs: https://developers.cloudflare.com/pages
- Tailwind CSS Docs: https://tailwindcss.com/docs
- ShadCN UI: https://ui.shadcn.com

---

**You're all set! 🚀**

