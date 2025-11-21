# Setup Instructions

Quick start guide to get your portfolio site running locally.

## Step 1: Install Dependencies

```bash
npm install
```

This will install all required packages including:
- Next.js 15
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- And all other dependencies

---

## Step 2: Set Up Environment Variables

Create a `.env.local` file in the root directory:

```bash
# Copy the example file
cp .env.local.example .env.local
```

Then edit `.env.local` with your actual values:

```env
RESEND_API_KEY=re_your_actual_api_key
CONTACT_EMAIL_TO=your-email@example.com
CONTACT_EMAIL_FROM=noreply@yourdomain.com
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Getting a Resend API Key:

1. Go to https://resend.com
2. Sign up for a free account
3. Verify your email
4. Go to API Keys section
5. Click "Create API Key"
6. Copy the key and paste it in `.env.local`

**Note:** For testing, you can use Resend's test domain. For production, you'll need to verify your own domain.

---

## Step 3: Run Development Server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

You should see your portfolio site running!

---

## Step 4: Customize Your Content

Follow these guides in order:

1. **CUSTOMIZATION.md** - Complete guide to personalizing all content
2. **DEPLOYMENT.md** - How to deploy to production

### Quick customization steps:

1. **Update your name:**
   - Search for "Alex Ashing" and replace with your name
   
2. **Update services:**
   - Edit `lib/services-data.ts`
   
3. **Update projects:**
   - Edit `lib/projects-data.ts`
   
4. **Update testimonials:**
   - Edit `lib/testimonials-data.ts`
   
5. **Update colors:**
   - Edit `app/globals.css`

---

## Step 5: Test Contact Form

1. Make sure your `.env.local` is configured
2. Go to http://localhost:3000/contact
3. Fill out and submit the form
4. Check your email inbox

**Important:** The contact form API route only works in development. For production on Cloudflare Pages, see DEPLOYMENT.md for alternatives.

---

## Step 6: Build for Production

Test your production build locally:

```bash
npm run build
```

This creates an optimized static export in the `out/` folder.

If there are any errors, fix them before deploying.

---

## Common Setup Issues

### Issue: `npm install` fails

**Solution:**
```bash
# Clear cache and try again
npm cache clean --force
npm install
```

### Issue: Port 3000 already in use

**Solution:**
```bash
# Use a different port
npm run dev -- -p 3001
```

### Issue: Environment variables not loading

**Solution:**
- Make sure file is named `.env.local` (not `.env.local.txt`)
- Restart the dev server after creating/editing `.env.local`
- Check that there are no spaces around the `=` sign

### Issue: TypeScript errors

**Solution:**
- Make sure you're using Node 18+
- Run `npm install` again
- Check that all imports are correct

---

## Next Steps

1. ✅ Install dependencies
2. ✅ Set up environment variables
3. ✅ Run dev server
4. 📝 Customize content (see CUSTOMIZATION.md)
5. 🚀 Deploy to production (see DEPLOYMENT.md)

---

## File Structure Overview

```
├── app/                    # Next.js app directory
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── about/              # About page
│   ├── contact/            # Contact page
│   ├── portfolio/          # Portfolio page
│   └── services/           # Services pages
├── components/             # React components
│   ├── ui/                 # UI components (buttons, cards, etc.)
│   └── ...                 # Custom components
├── lib/                    # Utilities and data
│   ├── services-data.ts    # Services content
│   ├── projects-data.ts    # Portfolio projects
│   └── testimonials-data.ts # Client testimonials
├── public/                 # Static files
├── .env.local              # Environment variables (create this)
└── package.json            # Dependencies
```

---

## Helpful Commands

```bash
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm run start            # Start production server

# Deployment
npm run pages:build      # Build for Cloudflare Pages
npm run deploy           # Deploy to Cloudflare (requires setup)

# Code quality
npm run lint             # Run linter
```

---

## VS Code Extensions (Recommended)

- **ES7+ React/Redux/React-Native snippets**
- **Tailwind CSS IntelliSense**
- **TypeScript and JavaScript Language Features**
- **Prettier - Code formatter**

---

## Resources

- **README.md** - Complete project documentation
- **CUSTOMIZATION.md** - How to customize everything
- **DEPLOYMENT.md** - How to deploy to production
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

**You're all set to start customizing! 🎉**

Questions? Check the other documentation files or the code comments.

