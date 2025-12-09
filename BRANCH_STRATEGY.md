# Branch Strategy: XPharm Website

## Overview

The XPharm repository uses a multi-branch strategy to manage different deployment environments and feature states.

---

## Branch Structure

### `main` - Production (xpharm.ie)
**Purpose**: Public-facing placeholder page
**Deployment**: https://xpharm.ie

**What's Live:**
- ✅ Placeholder "Coming Soon" page
- ✅ Logo and branding
- ✅ Contact form (Web3Forms)
- ✅ Route restrictions (only homepage accessible via proxy)
- ✅ Supabase infrastructure (configured but contact form uses Web3Forms)
- ✅ Navigation with LinkedIn link
- ✅ SEO optimization (Organization schema, sitemap)
- ✅ Professional, confidence-inspiring messaging

**Route Restrictions:**
The proxy.ts file restricts access to:
- ✅ `/` - Homepage (allowed)
- ✅ `/_next/*` - Next.js assets (allowed)
- ✅ `/images/*` - Images (allowed)
- ✅ `/favicon*`, `/icon*`, `/apple-icon.png` - Icons (allowed)
- ✅ `/robots.txt`, `/sitemap.xml` - SEO files (allowed)
- ❌ All other routes redirect to homepage

**Technology Stack:**
- Next.js 16.0.3 (Static Export)
- Supabase SDK (configured, ready for use)
- Web3Forms (contact form)
- Vercel Analytics
- Google Analytics

**When to Update:**
Only when ready to change the public-facing placeholder or go live with the full site.

---

### `dev` - Development (dev.xpharm.ie)
**Purpose**: Full website preview and testing
**Deployment**: https://dev.xpharm.ie

**What's Live:**
- ✅ Complete XPharm website
- ✅ All pages accessible
  - Homepage with hero, services, why choose us, case studies
  - About page
  - Services pages (CMC, Quality, Supply Chain, etc.)
  - Contact page
- ✅ Contact form (Supabase database)
- ✅ Full navigation
- ✅ All features enabled
- ✅ Supabase integration (database, auth ready)

**Route Restrictions:**
No restrictions - all routes accessible.

**Technology Stack:**
- Next.js 16.0.3
- Supabase (database + auth configured)
- Vercel Analytics
- Google Analytics
- Full UI component library

**When to Update:**
Continuously - this is the development branch for testing new features before production.

---

### `brandkit` - Brand Guidelines (brankit.xpharm.ie)
**Purpose**: Internal branding documentation
**Deployment**: https://brankit.xpharm.ie

**What's Live:**
- ✅ XPharm brand guidelines
- ✅ Logo usage rules
- ✅ Color palette
- ✅ Typography guidelines
- ✅ Voice and tone
- ✅ Noindex/nofollow (not searchable)

**Route Restrictions:**
None - internal documentation site.

**When to Update:**
When brand guidelines change.

---

## Deployment Flow

```
┌─────────────────────────────────────────────────┐
│                  GitHub Push                    │
└──────────────┬──────────────────────────────────┘
               │
       ┌───────┼───────┐
       │       │       │
       ▼       ▼       ▼
    ┌─────┐ ┌─────┐ ┌─────────┐
    │main │ │ dev │ │brandkit │
    └──┬──┘ └──┬──┘ └────┬────┘
       │       │          │
       │       │          │
       ▼       ▼          ▼
  ┌────────┐ ┌────────┐ ┌────────┐
  │Vercel  │ │Vercel  │ │Vercel  │
  │Deploy  │ │Deploy  │ │Deploy  │
  └───┬────┘ └───┬────┘ └───┬────┘
      │          │            │
      ▼          ▼            ▼
  xpharm.ie  dev.xpharm.ie  brankit.xpharm.ie
```

**Automatic Deployments:**
- Push to `main` → Deploys to `xpharm.ie`
- Push to `dev` → Deploys to `dev.xpharm.ie`
- Push to `brandkit` → Deploys to `brankit.xpharm.ie`

---

## Migration Status

### Infrastructure

| Component | Status | Notes |
|-----------|--------|-------|
| **Hosting** | ✅ Vercel | All branches auto-deploy |
| **Database** | ✅ Supabase | Configured on all branches |
| **Contact Form** | ⚠️ Mixed | main: Web3Forms, dev: Supabase |
| **DNS** | ⏳ Pending | Need to configure Cloudflare |
| **SSL** | ✅ Automatic | Vercel handles certificates |
| **Analytics** | ✅ Active | Google Analytics + Vercel |

### Files Added (All Branches)

- `lib/supabase.ts` - Supabase client
- `lib/supabase/server.ts` - Server-side client
- `lib/supabase/middleware.ts` - Session management
- `proxy.ts` - Route restrictions + session handling
- `supabase-schema.sql` - Database schema
- Migration documentation files

### Files Removed (All Branches)

- `firebase.json`
- `.firebaserc`
- `.github/workflows/firebase-deploy.yml` (replaced with `lighthouse-ci.yml`)
- Firebase deploy scripts from `package.json`

---

## Working with Branches

### To Update Main (Placeholder)

```bash
git checkout main
# Make changes to placeholder page
git add .
git commit -m "feat: update placeholder page"
git push origin main
```

### To Update Dev (Full Site)

```bash
git checkout dev
# Make changes to full website
git add .
git commit -m "feat: add new feature"
git push origin dev
```

### To Merge Dev → Main (Go Live)

**WARNING**: This will replace the placeholder with the full site!

```bash
git checkout main
git merge dev
# Resolve any conflicts
# Update proxy.ts to remove route restrictions if needed
git push origin main
```

### To Sync Main Infrastructure to Dev

If main has infrastructure updates (like Supabase config) that dev needs:

```bash
git checkout dev
git merge main
# Resolve conflicts, keeping dev's full pages
git push origin dev
```

---

## Proxy Configuration

### Main Branch Proxy

```typescript
// proxy.ts on main
const allowedPaths = [
  "/",           // Homepage only
  "/_next",      // Next.js assets
  "/images",     // Images
  "/favicon",    // Icons
  "/robots.txt", // SEO
  "/sitemap.xml" // SEO
]

// All other paths redirect to "/"
```

### Dev Branch Proxy

```typescript
// proxy.ts on dev
// No route restrictions
// Only handles Supabase session management
```

---

## Environment Variables

### Required for All Branches

```bash
# Vercel Dashboard → Settings → Environment Variables
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-RM2T2B7VXX
NEXT_PUBLIC_SUPABASE_URL=https://hklgchswmfrbapmfdisw.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGci...
SITE_URL=https://xpharm.ie
```

### Branch-Specific URLs

- main: `SITE_URL=https://xpharm.ie`
- dev: `SITE_URL=https://dev.xpharm.ie`
- brandkit: `SITE_URL=https://brankit.xpharm.ie`

Vercel handles this automatically based on the deployment branch.

---

## Testing Strategy

### Before Merging to Main

1. **Test on Dev First**
   ```bash
   git checkout dev
   git pull origin dev
   pnpm dev
   # Test locally
   ```

2. **Push to Dev**
   ```bash
   git push origin dev
   # Verify at https://dev.xpharm.ie
   ```

3. **Run Lighthouse**
   ```bash
   pnpm perf
   # Ensure scores are good
   ```

4. **Merge to Main**
   ```bash
   git checkout main
   git merge dev
   git push origin main
   # Verify at https://xpharm.ie
   ```

---

## Quick Reference

| Branch | URL | Purpose | Contact Form | Routes |
|--------|-----|---------|--------------|--------|
| `main` | xpharm.ie | Placeholder | Web3Forms | Restricted |
| `dev` | dev.xpharm.ie | Full Site | Supabase | Open |
| `brandkit` | brankit.xpharm.ie | Branding | N/A | Open |

---

## Next Steps

1. ✅ Main branch: Placeholder ready
2. ✅ Dev branch: Full site ready
3. ⏳ Configure Cloudflare DNS
4. ⏳ Set up Vercel domains
5. ⏳ Test Supabase contact form on dev
6. ⏳ When ready, merge dev to main to go live

---

**Last Updated**: 2025-12-06
**Migration Status**: Infrastructure complete, DNS pending
