# Master Gardner, LLC — Website

Marketing site for Master Gardner, LLC (Ada, Michigan). Built with Next.js 14 (App Router) + Tailwind CSS. Deploys to Vercel out of the box.

## Pages

- `/` — Home
- `/services` — Full service list (lawn care, landscaping, irrigation, construction, restoration, snow, salting, maintenance)
- `/gallery` — Project gallery (placeholder tiles, drop in real photos when ready)
- `/reviews` — Customer testimonials
- `/service-area` — Cities covered across Kent & Ottawa County
- `/about` — Company story + values
- `/referral` — Customer referral program
- `/contact` — Quote request form + FAQ

## Local development

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Adding photos

Drop image files into `public/images/` and replace any `<ImagePlaceholder />` component with a Next.js `<Image>`:

```tsx
import Image from 'next/image';

<Image
  src="/images/your-photo.jpg"
  alt="Description"
  width={1200}
  height={900}
  className="rounded-2xl object-cover"
/>
```

Place names referenced in placeholder labels (e.g. "Hero photo", "Landscape installation") describe what should replace them.

## Editing content

All text lives in either the page files (`app/<route>/page.tsx`) or `lib/content.ts`:

- **Services list / descriptions:** `lib/content.ts` → `SERVICES`
- **Testimonials:** `lib/content.ts` → `TESTIMONIALS`
- **Service area cities:** `lib/content.ts` → `SERVICE_AREAS`
- **Value props:** `lib/content.ts` → `VALUE_PROPS`
- **Phone, email, address:** search-and-replace in `components/NavBar.tsx`, `components/Footer.tsx`, `app/contact/page.tsx`

## Deploying

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/<you>/<repo>.git
git push -u origin main
```

### 2. Deploy on Vercel

1. Go to <https://vercel.com/new>
2. Import the GitHub repo
3. Framework preset: **Next.js** (auto-detected)
4. No environment variables needed
5. Click **Deploy**

That's it. Vercel auto-redeploys on every push to `main`.

### 3. Custom domain

In the Vercel project → **Settings → Domains**, add `mastergardnerllc.com` (and `www.mastergardnerllc.com`). Vercel will give you DNS records to set at your registrar.

## Contact form

The form on `/contact` is currently client-side only — it shows a success state but doesn't actually send anywhere. To wire it up, edit `components/ContactForm.tsx` and POST to a backend endpoint (Resend, Formspree, your own API route, etc.).
