# Vercel Monorepo Setup Guide

This monorepo requires specific Vercel project settings for each app.

## Problem

Vercel needs to install dependencies from the monorepo root (where `pnpm-lock.yaml` exists), not from individual app directories.

## Solution: Vercel Dashboard Configuration

For **each Vercel project** (xpharm-main, xpharm-brandkit, xpharm-intranet), configure these settings:

### Main App (xpharm.ie)

**Project Settings → General → Build & Development Settings:**

1. **Framework Preset:** `Next.js`
2. **Root Directory:** `apps/main`
3. **Build Command:** (Override)
   ```bash
   cd ../.. && pnpm install && pnpm build:main
   ```
4. **Output Directory:** `.next` (default)
5. **Install Command:** (Override - leave empty or set to)
   ```bash
   # Leave empty - we handle install in Build Command
   ```

### Brandkit App (brandkit.xpharm.ie)

**Project Settings → General → Build & Development Settings:**

1. **Framework Preset:** `Next.js`
2. **Root Directory:** `apps/brandkit`
3. **Build Command:** (Override)
   ```bash
   cd ../.. && pnpm install && pnpm build:brandkit
   ```
4. **Output Directory:** `.next` (default)
5. **Install Command:** (Override - leave empty)

### Intranet App (intranet.xpharm.ie)

**Project Settings → General → Build & Development Settings:**

1. **Framework Preset:** `Next.js`
2. **Root Directory:** `apps/intranet`
3. **Build Command:** (Override)
   ```bash
   cd ../.. && pnpm install && pnpm build:intranet
   ```
4. **Output Directory:** `.next` (default)
5. **Install Command:** (Override - leave empty)

## How to Apply These Settings

1. Go to your Vercel Dashboard
2. Select the project (e.g., xpharm-main)
3. Go to **Settings** → **General**
4. Scroll to **Build & Development Settings**
5. Click **Override** for each setting that needs customization
6. Enter the values above
7. Click **Save**
8. Redeploy to test

## Why This Works

- **Root Directory** tells Vercel where the app code lives
- **Build Command override** with `cd ../..` moves to monorepo root before installing
- This ensures `pnpm install` runs where `pnpm-lock.yaml` exists
- Fixes the `ERR_INVALID_THIS` registry errors
- Each app builds independently with correct dependency resolution

## Environment Variables

Make sure each project has the required environment variables:

### Main App

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- (any other main-specific vars)

### Brandkit App

- (if any needed)

### Intranet App

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
