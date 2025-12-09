# XPharm Monorepo

A monorepo containing multiple Next.js applications for XPharm, each deployed independently to Vercel with custom subdomains.

## 📁 Structure

```
xpharm/
├── apps/
│   ├── main/          → xpharm.ie (main placeholder site)
│   ├── brandkit/      → brandkit.xpharm.ie (brand assets)
│   └── intranet/      → intranet.xpharm.ie (internal tools)
├── packages/
│   └── shared-ui/     → Shared components (optional)
└── pnpm-workspace.yaml
```

## 🚀 Quick Start

### Install dependencies:
```bash
pnpm install
```

### Development:
```bash
# Run all apps simultaneously
pnpm dev

# Run individual apps
pnpm dev:main       # http://localhost:3000
pnpm dev:brandkit   # http://localhost:3001
pnpm dev:intranet   # http://localhost:3002
```

### Build:
```bash
# Build all apps
pnpm build

# Build individual apps
pnpm build:main
pnpm build:brandkit
pnpm build:intranet
```

## 📦 Apps

### Main Site (xpharm.ie)
- Public-facing placeholder website
- Contact form with Supabase integration
- Full analytics and SEO setup
- Port: 3000

### Brand Kit (brandkit.xpharm.ie)
- Brand guidelines and assets
- Logos, colors, typography
- Public-facing but focused on brand resources
- Port: 3001

### Intranet (intranet.xpharm.ie)
- Internal tools and resources
- Team directory
- Authentication ready (Supabase)
- Port: 3002

## 🔧 Vercel Deployment

Each app deploys to its own Vercel project. See [MONOREPO_DEPLOYMENT.md](./MONOREPO_DEPLOYMENT.md) for detailed instructions.

### Vercel Root Directory Settings:

**For Main Site (xpharm.ie):**
- Root Directory: `apps/main`

**For Brandkit (brandkit.xpharm.ie):**
- Root Directory: `apps/brandkit`

**For Intranet (intranet.xpharm.ie):**
- Root Directory: `apps/intranet`

That's it! Vercel will auto-detect Next.js and use the correct build commands.

## 🌐 DNS Configuration

Add CNAME records in your DNS provider:

```
xpharm.ie           → cname.vercel-dns.com
www.xpharm.ie       → cname.vercel-dns.com
brandkit.xpharm.ie  → cname.vercel-dns.com
intranet.xpharm.ie  → cname.vercel-dns.com
```

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Package Manager**: pnpm (workspaces)
- **Database**: Supabase (main & intranet)
- **Deployment**: Vercel (3 separate projects)

## 📚 Documentation

- [MONOREPO_DEPLOYMENT.md](./MONOREPO_DEPLOYMENT.md) - Complete deployment guide
- [VERCEL_SUPABASE_SETUP_GUIDE.md](./VERCEL_SUPABASE_SETUP_GUIDE.md) - Vercel + Supabase setup
