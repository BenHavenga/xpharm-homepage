# Vercel + Supabase Migration - Setup Guide

This guide will help you complete the migration from Firebase to Vercel + Supabase.

## Current Status

✅ **Code changes completed:**

- Supabase SDK installed
- Supabase client configured (`lib/supabase.ts`, `lib/supabase/server.ts`, `lib/supabase/middleware.ts`)
- Middleware set up for session management
- Contact form updated to use Supabase
- GitHub Actions updated (Lighthouse CI only, no Firebase deployment)
- Firebase configuration files removed
- Package.json scripts cleaned up

⚠️ **Manual steps required:**
You need to complete these steps to finish the migration.

---

## Step 1: Set Up Supabase Project (15 mins)

### 1.1 Create Supabase Account

1. Go to https://supabase.com/dashboard
2. Sign up with your GitHub account
3. Click "New Project"

### 1.2 Configure Project

- **Organization**: Create new → "XPharm"
- **Name**: `xpharm-production`
- **Database Password**: Generate a strong password (save it securely!)
- **Region**: West EU (Ireland) - closest to Ireland
- **Pricing Plan**: Free

Wait 2-3 minutes for the database to provision.

### 1.3 Set Up Database Schema

1. In Supabase Dashboard → SQL Editor
2. Click "New Query"
3. Open the file `supabase-schema.sql` in this project
4. Copy the entire contents
5. Paste into Supabase SQL Editor
6. Click "Run" to execute

This will create:

- `contact_submissions` table
- Row-Level Security policies
- Indexes for performance
- Automatic timestamp triggers

### 1.4 Get API Keys

1. Go to Supabase Dashboard → Project Settings → API
2. You'll see:
   - **Project URL**: `https://xxxxx.supabase.co`
   - **anon public** key: `eyJhbGci...`

3. Copy these values - you'll need them in the next steps

### 1.5 Verify Database Setup

In Supabase Dashboard → Table Editor:

- You should see `contact_submissions` table
- Click on it to verify the schema

---

## Step 2: Set Up Vercel Project (10 mins)

### 2.1 Create Vercel Account

1. Go to https://vercel.com/signup
2. Sign up with GitHub (same account as your xpharm repo)
3. Allow Vercel to access your repositories

### 2.2 Import Project

1. Click "Add New..." → "Project"
2. Select `BenHavenga/xpharm` repository
3. Configure:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (default)
   - **Build Command**: `pnpm build`
   - **Output Directory**: `.next`
   - **Install Command**: `pnpm install`

### 2.3 Add Environment Variables

Before deploying, add these environment variables in Vercel:

Click "Environment Variables" and add:

```bash
# Required for NEXT_PUBLIC_GA_MEASUREMENT_ID=G-RM2T2B7VXX

# Supabase (use the values from Step 1.4)
NEXT_PUBLIC_SUPABASE_URL=https://hklgchswmfrbapmfdisw.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhrbGdjaHN3bWZyYmFwbWZkaXN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUwNDQzODcsImV4cCI6MjA4MDYyMDM4N30.QLfCWXhj6lUa1wVP9RyxDr2xgSG4yJiTCgoK68n5Wbc

# Site URL
SITE_URL=https://xpharm.ie
```

Make sure to select **All Environments** (Production, Preview, Development) for each variable.

### 2.4 Deploy

1. Click "Deploy"
2. Wait 2-3 minutes for the build
3. You'll get a preview URL: `xpharm.vercel.app`
4. Visit it to verify the deployment works

---

## Step 3: Configure Custom Domains in Vercel (10 mins)

### 3.1 Add Domains

In Vercel Dashboard → Settings → Domains, add:

```
xpharm.ie (production)
www.xpharm.ie (redirect to xpharm.ie)
dev.xpharm.ie (development branch)
brankit.xpharm.ie (brandkit branch)
```

For each domain:

1. Click "Add"
2. Vercel will show DNS configuration
3. Note the DNS records needed (you'll add these in Cloudflare)

### 3.2 Configure Git Branches

In Vercel Dashboard → Settings → Git:

- **Production Branch**: `main` → deploys to `xpharm.ie`
- **Development Branch**: Add `dev` → deploys to `dev.xpharm.ie`

For `brankit.xpharm.ie`:

1. Settings → Domains → `brankit.xpharm.ie` → Edit
2. Git Branch: `brandkit`

---

## Step 4: Set Up Cloudflare DNS (15 mins)

### 4.1 Add Domain to Cloudflare

1. Go to https://dash.cloudflare.com/
2. Click "Add a site"
3. Enter: `xpharm.ie`
4. Select "Free" plan
5. Cloudflare will scan existing DNS records

### 4.2 Update Nameservers

1. Cloudflare will show you 2 nameservers (e.g., `ava.ns.cloudflare.com`, `bob.ns.cloudflare.com`)
2. Go to your domain registrar (where you bought xpharm.ie)
3. Update nameservers to Cloudflare's nameservers
4. Wait 5-60 minutes for propagation

### 4.3 Add DNS Records

In Cloudflare DNS settings, add:

```
Type: CNAME
Name: @
Target: cname.vercel-dns.com
Proxy: ✅ Proxied (orange cloud)

Type: CNAME
Name: www
Target: cname.vercel-dns.com
Proxy: ✅ Proxied

Type: CNAME
Name: dev
Target: cname.vercel-dns.com
Proxy: ✅ Proxied

Type: CNAME
Name: brankit
Target: cname.vercel-dns.com
Proxy: ✅ Proxied

Type: CNAME
Name: *
Target: cname.vercel-dns.com
Proxy: ✅ Proxied
```

**Note**: Orange cloud = CDN + DDoS protection (free!)

### 4.4 Verify DNS

After DNS propagates (5-60 mins):

1. Visit https://dnschecker.org/
2. Enter `xpharm.ie`
3. Should see Vercel's IP addresses globally

---

## Step 5: Update GitHub Secrets (5 mins)

### 5.1 Add Supabase Secrets to GitHub

1. Go to GitHub repository → Settings → Secrets and variables → Actions
2. Add these repository secrets:

```
NEXT_PUBLIC_SUPABASE_URL = https://hklgchswmfrbapmfdisw.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhrbGdjaHN3bWZyYmFwbWZkaXN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUwNDQzODcsImV4cCI6MjA4MDYyMDM4N30.QLfCWXhj6lUa1wVP9RyxDr2xgSG4yJiTCgoK68n5Wbc
```

### 5.2 Remove Old Secrets (Optional)

You can now remove these deprecated secrets:

- `FIREBASE_SERVICE_ACCOUNT_XPHARM_3858D`
- `RESEND_API_KEY`
- `RESEND_FROM_EMAIL`
- `RESEND_TO_EMAIL`

---

## Step 6: Test Everything (10 mins)

### 6.1 Test Local Development

```bash
# Install dependencies (if not already)
pnpm install

# Run dev server
pnpm dev

# Visit http://localhost:3000
# Fill out contact form
# Check Supabase Dashboard → Table Editor → contact_submissions
```

### 6.2 Test Deployments

1. **Preview URL**: Visit `https://xpharm.vercel.app`
2. **Production**: Visit `https://xpharm.ie` (after DNS propagates)
3. **Dev**: Visit `https://dev.xpharm.ie`
4. **Brankit**: Visit `https://brankit.xpharm.ie`

### 6.3 Test Contact Form

1. Fill out the contact form on the live site
2. Go to Supabase Dashboard → Table Editor → `contact_submissions`
3. You should see the new submission

### 6.4 Test SSL

All domains should automatically have HTTPS:

- ✅ https://xpharm.ie
- ✅ https://dev.xpharm.ie
- ✅ https://brankit.xpharm.ie

### 6.5 Test Performance

```bash
pnpm perf
```

Should see excellent Lighthouse scores (Vercel's Edge Network is fast!).

---

## Step 7: Commit and Push Changes

### 7.1 Commit the Migration

```bash
# Check what changed
git status

# Add all changes
git add .

# Commit
git commit -m "feat: migrate from Firebase to Vercel + Supabase

- Remove Firebase configuration files
- Add Supabase SDK and configuration
- Update contact form to use Supabase database
- Update GitHub Actions to Lighthouse CI only
- Remove Firebase deploy scripts from package.json
- Add Supabase schema SQL file
- Add middleware for Supabase session management

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"

# Push to dev branch first
git push origin dev
```

### 7.2 Verify Deployment

1. Vercel will auto-deploy to `dev.xpharm.ie`
2. Check deployment in Vercel dashboard
3. Test the dev site

### 7.3 Merge to Main (when ready)

```bash
# Switch to main
git checkout main

# Merge dev
git merge dev

# Push to production
git push origin main
```

Vercel will auto-deploy to `xpharm.ie`.

---

## Troubleshooting

### Issue: Build fails in Vercel

**Solution**: Check environment variables are set correctly in Vercel Dashboard → Settings → Environment Variables

### Issue: Contact form doesn't work

**Solution**:

1. Check Supabase URL and keys are correct
2. Verify `contact_submissions` table exists
3. Check browser console for errors
4. Verify RLS policies allow anonymous inserts

### Issue: DNS not working

**Solution**:

1. Wait 5-60 minutes for propagation
2. Check nameservers at your domain registrar
3. Verify DNS records in Cloudflare
4. Use https://dnschecker.org/ to verify

### Issue: "Table does not exist" error

**Solution**: Run the `supabase-schema.sql` in Supabase Dashboard → SQL Editor

---

## What You Get

### Vercel

- ✅ Automatic deployments from GitHub
- ✅ Multiple environments (prod, dev, brandkit)
- ✅ Edge network (faster than Firebase)
- ✅ Unlimited bandwidth (free tier)
- ✅ Serverless functions
- ✅ Automatic SSL for all domains

### Supabase

- ✅ PostgreSQL database (500MB free)
- ✅ Authentication system (ready to use)
- ✅ File storage (1GB free)
- ✅ Row-level security
- ✅ Real-time subscriptions
- ✅ Auto-generated REST API

### Cloudflare

- ✅ Free DNS management
- ✅ DDoS protection
- ✅ CDN (orange cloud)
- ✅ DNSSEC

### Cost

**€0/month** (everything on free tier)

---

## Next Steps

Once the migration is complete, you can build:

1. **Client Portal** (`projects.xpharm.ie`)
   - Login system using Supabase Auth
   - Project management
   - File uploads

2. **Knowledge Base** (`kb.xpharm.ie`)
   - Internal wiki
   - Full-text search
   - Categories and tags

3. **File Vault** (`vault.xpharm.ie`)
   - Secure file uploads
   - Client-specific folders
   - Row-level security

4. **CRM** (`crm.xpharm.ie`)
   - Client management
   - Deal tracking
   - Contact management

All of this on the **free tier**!

---

## Support

If you run into issues:

1. Check the Troubleshooting section above
2. Check Vercel docs: https://vercel.com/docs
3. Check Supabase docs: https://supabase.com/docs
4. Check Cloudflare docs: https://developers.cloudflare.com/

---

**Migration prepared by**: Claude Code
**Date**: 2025-12-06
