# ⚡ Quick Start Guide

Get your portfolio site running in 5 minutes!

## 1️⃣ Install Dependencies (1 minute)

```bash
npm install
```

## 2️⃣ Create Environment File (30 seconds)

Create `.env.local` file:

```env
RESEND_API_KEY=re_test_key
CONTACT_EMAIL_TO=your-email@example.com
CONTACT_EMAIL_FROM=onboarding@resend.dev
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

**Note:** You can use these test values for now. Get a real Resend API key from https://resend.com when ready.

## 3️⃣ Start Development Server (10 seconds)

```bash
npm run dev
```

Visit: **http://localhost:3000** 🎉

---

## ✅ It's Working! Now What?

### Immediate Tasks:

1. **Replace "Alex Ashing" with your name:**
   - Use Find & Replace (Ctrl/Cmd + Shift + F)
   - Search: "Alex Ashing"
   - Replace: "Your Name"

2. **Update Services:**
   - Open: `lib/services-data.ts`
   - Edit or remove services you don't offer
   - Add new ones if needed

3. **Add Your Projects:**
   - Open: `lib/projects-data.ts`
   - Replace placeholder projects with your real work
   - Update images (use Unsplash URLs for now)

4. **Update Testimonials:**
   - Open: `lib/testimonials-data.ts`
   - Add real client testimonials

5. **Change Colors (Optional):**
   - Open: `app/globals.css`
   - Line 5: Change `--primary` HSL values

### Test Everything:

- ✅ Click through all pages
- ✅ Test dark/light mode toggle
- ✅ Fill out contact form
- ✅ Check mobile view (resize browser)

---

## 🚀 Ready to Deploy?

### Push to GitHub:

```bash
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/yourusername/your-repo.git
git push -u origin main
```

### Deploy to Cloudflare Pages:

1. Go to https://dash.cloudflare.com/
2. Click "Pages" → "Create a project"
3. Connect your GitHub repo
4. Build command: `npm run build`
5. Build output: `out`
6. Add environment variables (same as `.env.local`)
7. Click "Save and Deploy"

**Full deployment guide:** See `DEPLOYMENT.md`

---

## 📚 Documentation

- **SETUP.md** - Detailed setup instructions
- **CUSTOMIZATION.md** - Complete customization guide
- **DEPLOYMENT.md** - Full deployment guide
- **README.md** - Complete project documentation

---

## 🆘 Having Issues?

### Build fails?
```bash
npm cache clean --force
rm -rf node_modules
npm install
```

### Contact form not working locally?
- Check `.env.local` file exists
- Restart dev server: Ctrl+C then `npm run dev`

### TypeScript errors?
- Make sure you're using Node 18+
- Run: `npm install` again

---

## 🎯 Customization Priority

Do these in order:

1. ✅ Your name everywhere
2. ✅ Services (what you actually offer)
3. ✅ Projects (your real work)
4. ✅ About page (your story)
5. ✅ Contact info (email, Calendly, social)
6. ✅ Colors (optional)
7. ✅ SEO metadata
8. ✅ Add your photo

---

**That's it! You're ready to go! 🎉**

For detailed guides, check the other documentation files.

