# Calendly Integration Guide

## ✅ What's Already Done

I've integrated Calendly throughout your site:

### Files Created:
1. **`lib/config.ts`** - Central configuration file for Calendly URL and other settings
2. **`components/calendly-button.tsx`** - Reusable Calendly button component

### Files Updated:
1. **`app/page.tsx`** - Home page now uses Calendly buttons
2. **`app/contact/page.tsx`** - Contact page uses Calendly button

---

## 🔧 Setup Instructions

### Step 1: Get Your Calendly URL

1. Go to your Calendly dashboard: https://calendly.com/event_types/user/me
2. Click on your event type (e.g., "15 Minute Meeting")
3. Click "Copy Link" or find your scheduling URL

Your Calendly URL will look like one of these:
```
https://calendly.com/alexashing/15min
https://calendly.com/alex-ashing/consultation
https://calendly.com/your-username
```

### Step 2: Update the Config File

Open `lib/config.ts` and replace the placeholder URL with your actual Calendly link:

**Before:**
```typescript
calendly: {
  url: "https://calendly.com/your-username/15min",
},
```

**After:**
```typescript
calendly: {
  url: "https://calendly.com/alexashing/15min", // ← Your actual link
},
```

### Step 3: Test It!

1. Save the file
2. Restart your dev server: `npm run dev`
3. Click any "Book a Call" button on your site
4. It should open your Calendly scheduling page in a new tab

---

## 🎨 Where Calendly Buttons Appear

✅ **Home Page Hero** - "Book a free 15-min call" button
✅ **Home Page CTA** - "Book a Call" button (bottom of page)
✅ **Contact Page** - "Book a 15-min Call" button

All buttons automatically use your Calendly URL from `lib/config.ts`.

---

## 🚀 Advanced: Embed Calendly Widget

If you want to embed Calendly directly on your contact page (instead of opening in a new tab), here's how:

### 1. Install Calendly React Package

```bash
npm install react-calendly
```

### 2. Create Calendly Embed Component

Create `components/calendly-embed.tsx`:

```typescript
"use client"

import { InlineWidget } from "react-calendly"
import { siteConfig } from "@/lib/config"

export function CalendlyEmbed() {
  return (
    <div className="rounded-xl overflow-hidden border shadow-lg">
      <InlineWidget
        url={siteConfig.calendly.url}
        styles={{
          height: "700px",
          minWidth: "320px",
        }}
      />
    </div>
  )
}
```

### 3. Add to Contact Page

In `app/contact/page.tsx`, add the embed:

```typescript
import { CalendlyEmbed } from "@/components/calendly-embed"

// Add this section before the contact form:
<SectionContainer>
  <FadeIn>
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Schedule a Call
      </h2>
      <CalendlyEmbed />
    </div>
  </FadeIn>
</SectionContainer>
```

---

## 🎯 Customization Options

### Change Button Text

```typescript
<CalendlyButton size="lg">
  Schedule a Free Consultation
</CalendlyButton>
```

### Change Button Style

```typescript
<CalendlyButton 
  size="lg" 
  variant="outline"  // or "ghost", "link"
>
  Book a Call
</CalendlyButton>
```

### Different Icon

Edit `components/calendly-button.tsx`:

```typescript
import { Calendar, Clock, Phone } from "lucide-react"

// Change the icon:
<Clock className="ml-2 h-5 w-5" />
```

---

## 📊 Calendly Settings to Configure

In your Calendly dashboard, make sure to set:

### Event Details
- **Event name**: "15-Minute Consultation" or "Free Discovery Call"
- **Duration**: 15 or 30 minutes
- **Location**: Zoom, Google Meet, or Phone
- **Description**: Brief overview of what you'll discuss

### Availability
- Set your working hours
- Configure buffer times between meetings
- Set minimum notice period (e.g., 4 hours)

### Invitee Questions
Suggested questions to ask:
1. **Name** (required)
2. **Email** (required)
3. **Business Type** (dropdown: Bar, Restaurant, Club, etc.)
4. **What do you want to discuss?** (textarea)
5. **Website or Project Details** (optional)

### Notifications
- Enable email confirmations
- Enable SMS reminders (reduces no-shows)
- Set reminder timing (24h, 1h before)

---

## 🔗 Other Places to Add Calendly

You can add the `<CalendlyButton />` anywhere:

### Services Pages
In `app/services/[slug]/page.tsx`:

```typescript
import { CalendlyButton } from "@/components/calendly-button"

// In the CTA section:
<CalendlyButton size="lg">
  Book a Call
</CalendlyButton>
```

### Portfolio Pages  
In `app/portfolio/[slug]/page.tsx`:

```typescript
<CalendlyButton size="lg">
  Discuss Your Project
</CalendlyButton>
```

### Navigation
In `components/navbar.tsx` (for a CTA in the nav):

```typescript
<CalendlyButton size="sm" variant="outline">
  Book Call
</CalendlyButton>
```

---

## 🎨 Styling Tips

### Match Your Brand Colors

The button automatically uses your site's primary color (neon electric blue). To customize further, edit `components/calendly-button.tsx`:

```typescript
<Button 
  size={size} 
  variant={variant}
  onClick={handleClick}
  className={cn(
    "group hover:shadow-neon-blue transition-all",
    className
  )}
>
```

---

## 🔒 Privacy & GDPR Compliance

Make sure to:
1. Add Calendly to your Privacy Policy
2. Mention that scheduling data is processed by Calendly
3. Link to Calendly's privacy policy: https://calendly.com/privacy

Add to your footer or privacy page:
```
"Scheduling powered by Calendly. See their privacy policy."
```

---

## 🐛 Troubleshooting

### Button Opens Wrong URL
- Check `lib/config.ts` - make sure the URL is correct
- Verify there are no typos
- Make sure the URL starts with `https://calendly.com/`

### Button Doesn't Open Anything
- Check browser console for errors
- Make sure pop-up blocker isn't blocking the new tab
- Try `Ctrl + Click` to force open in new tab

### Event Type Not Found
- Make sure your Calendly event type is active
- Check that the URL matches exactly
- Try using your main Calendly URL without event type

---

## 📞 Calendly Pro Tips

### 1. Multiple Event Types
If you have different meeting lengths, update `lib/config.ts`:

```typescript
calendly: {
  // Main URL (15 min)
  url: "https://calendly.com/alexashing/15min",
  
  // Optional: Other meeting types
  consultation: "https://calendly.com/alexashing/30min",
  projectDiscovery: "https://calendly.com/alexashing/60min",
}
```

Then use in components:
```typescript
import { siteConfig } from "@/lib/config"

<Button onClick={() => window.open(siteConfig.calendly.consultation)}>
  Book 30-min Consultation
</Button>
```

### 2. Routing Forms
Use Calendly's routing forms to:
- Qualify leads
- Direct people to different event types
- Collect information before scheduling

### 3. Calendar Integrations
Connect to:
- Google Calendar
- Outlook Calendar
- iCloud Calendar

This prevents double-bookings and keeps everything synced.

### 4. Team Scheduling
If you work with a team, set up:
- Round robin scheduling
- Collective availability
- Team member preferences

---

## ✅ Checklist

Before going live:

- [ ] Updated `lib/config.ts` with your Calendly URL
- [ ] Tested "Book a Call" button on home page
- [ ] Tested "Book a Call" button on contact page
- [ ] Set up your Calendly event type details
- [ ] Configured your availability in Calendly
- [ ] Added invitee questions in Calendly
- [ ] Enabled email/SMS notifications
- [ ] Connected your calendar (Google/Outlook)
- [ ] Set buffer times between meetings
- [ ] Updated privacy policy (if needed)

---

## 🎉 You're All Set!

Once you update the URL in `lib/config.ts`, your Calendly integration is complete! All "Book a Call" buttons throughout your site will automatically use your scheduling link.

Need help? Check the [Calendly Help Center](https://help.calendly.com/) or reach out to their support.

