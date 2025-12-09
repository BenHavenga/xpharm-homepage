# Vercel Monorepo Setup - Correct Configuration

## The Problem

When Root Directory is set to `apps/main`, Vercel can't find Next.js after we install from the monorepo root.

## The Solution

Set Root Directory to the **monorepo root** and configure each project to build only its specific app.

---

## Configuration for Each Vercel Project

### Main App (xpharm.ie)

**Project Settings → General → Build & Development Settings:**

1. **Framework Preset:** `Next.js`
2. **Root Directory:** `` (leave empty / monorepo root)
3. **Build Command:** (Override)
   ```bash
   pnpm install && pnpm build:main
   ```
4. **Output Directory:** (Override)
   ```
   apps/main/.next
   ```
5. **Install Command:** (use default or override to)
   ```bash
   pnpm install
   ```

### Brandkit App (brandkit.xpharm.ie)

**Project Settings → General → Build & Development Settings:**

1. **Framework Preset:** `Next.js`
2. **Root Directory:** `` (leave empty / monorepo root)
3. **Build Command:** (Override)
   ```bash
   pnpm install && pnpm build:brandkit
   ```
4. **Output Directory:** (Override)
   ```
   apps/brandkit/.next
   ```
5. **Install Command:** (use default)

### Intranet App (intranet.xpharm.ie)

**Project Settings → General → Build & Development Settings:**

1. **Framework Preset:** `Next.js`
2. **Root Directory:** `` (leave empty / monorepo root)
3. **Build Command:** (Override)
   ```bash
   pnpm install && pnpm build:intranet
   ```
4. **Output Directory:** (Override)
   ```
   apps/intranet/.next
   ```
5. **Install Command:** (use default)

---

## Alternative: Using pnpm Filter (Recommended)

If the above doesn't work, try this more explicit approach:

### Build Command:

```bash
pnpm install --frozen-lockfile && pnpm --filter @xpharm/main build
```

### Output Directory:

```
apps/main/.next
```

(Replace `@xpharm/main` with `@xpharm/brandkit` or `@xpharm/intranet` for other apps)

---

## How to Apply

1. Go to Vercel Dashboard → Your Project → **Settings** → **General**
2. **Build & Development Settings** section
3. Click **Edit** on Root Directory → Clear it (leave empty for monorepo root)
4. Click **Override** on Build Command → Enter the command above
5. Click **Override** on Output Directory → Enter `apps/main/.next`
6. **Save** changes
7. Go to **Deployments** → Redeploy

---

## Why This Works

- Root Directory at monorepo root means Vercel can find all dependencies
- `pnpm install` runs where `pnpm-lock.yaml` lives
- Build commands use workspace scripts from root `package.json`
- Output Directory tells Vercel where to find the built app
- No more registry errors or missing Next.js issues
