# 🚀 XPharm Internal Tools & Infrastructure Strategy

**Philosophy**: Build your internal infrastructure like a tech company. Pharma consultancies don't think this way—that's your competitive advantage.

---

## 🎯 **Strategic Goals**

1. **Knowledge Capture** - Your dad's 20+ years of pharma expertise needs to be documented, searchable, and accessible
2. **Operational Excellence** - Run lean with automation and smart workflows
3. **Client Wow Factor** - Show clients you're different (organized, tech-forward, transparent)
4. **Scalability** - Build systems now that work when you're 10x bigger
5. **Security & Compliance** - Pharma is regulated—your internal tools should reflect that

---

## 🌐 **Subdomain Architecture**

### **Already Implemented**
- ✅ `xpharm.ie` - Public-facing website
- ✅ `xpharm-dev.web.app` - Dev environment
- ✅ `brankit.xpharm.ie` - Internal branding/style guide

### **High-Impact Additions**

---

## 📝 **Content & Knowledge Management**

### **1. `content.xpharm.ie` - Content Engine** ⭐⭐⭐⭐⭐
**Why**: Your best long-term SEO and lead generation strategy

**Features**:
- **AI-Powered Content Briefs**
  - Input: "serialization compliance EU vs US"
  - Output: SEO-optimized outline, keyword research, competitor analysis
- **Editorial Calendar** with Airtable/Notion integration
- **Draft Management**
  - Your dad writes in plain language
  - You review + optimize for SEO
  - Auto-publish to main site
- **Client Case Study Builder**
  - Template-based (keeps anonymized)
  - PDF export for proposals
  - Auto-publish approved ones
- **Internal Knowledge Base Search**
  - "What did we do for X client's serialization issue?"
  - Searchable by: problem type, solution, client industry, regulation

**Tech Stack**:
- Next.js app with MDX for content
- Tiptap or Lexical for rich text editing
- Auth: NextAuth.js (Google SSO)
- Database: Supabase or Firebase
- AI: OpenAI API for content suggestions
- Search: Algolia or Typesense

**ROI**: Directly generates leads via SEO. Every blog post = inbound traffic.

---

### **2. `kb.xpharm.ie` (Knowledge Base) - Internal Wiki** ⭐⭐⭐⭐⭐
**Why**: Capture your dad's 20 years of expertise before it's locked in his head

**Content Structure**:
```
/regulations
  /fda
    - inspection-prep-checklist.md
    - common-483-findings.md
  /ema
    - gdp-requirements.md
/processes
  /serialization
    - system-selection-guide.md
    - implementation-roadmap.md
  /cmc
    - cdmo-qualification-process.md
    - tech-transfer-checklist.md
/clients
  /templates
    - sop-template-quality.md
    - gap-assessment-template.md
  /case-studies (anonymized)
/vendors
  - approved-cdmo-list.md
  - serialization-vendors-comparison.md
```

**Features**:
- **Markdown-based** (easy to write, version-controlled via Git)
- **Full-text search** across all docs
- **Version history** (Git-backed)
- **Internal linking** (like Wikipedia)
- **Tag system** (GMP, GDP, FDA, EMA, Serialization, etc.)
- **Export to PDF** for client deliverables
- **Access Levels**:
  - Internal only
  - Client-shareable (for SOPs/templates)
  - Public (becomes blog content)

**Tech Stack**:
- Docusaurus, GitBook, or custom Next.js + MDX
- Search: Algolia DocSearch (free for open-source/docs)
- Auth: Basic auth or SSO
- Hosting: Vercel/Firebase

**ROI**:
- Onboard future hires in days, not months
- Reuse SOPs/templates across clients (faster delivery)
- Turn internal docs into blog posts (SEO++)

---

## 🎫 **Project & Client Management**

### **3. `projects.xpharm.ie` - Client Project Hub** ⭐⭐⭐⭐⭐
**Why**: Clients see you're organized. You see what's on fire.

**Features**:
- **Client Portal**
  - Each client gets unique login
  - See their project status, deliverables, invoices
  - Upload files (CMC docs, inspection reports)
  - Message thread with your team
- **Internal Kanban Board**
  - Projects by stage: Lead → Scoping → Active → Complete
  - Tasks per project with assignee + due date
- **Time Tracking** (for billing)
- **Document Library**
  - Client uploads files
  - You share deliverables (SOPs, reports, gap assessments)
  - Version control (see history)
- **Invoice Generation**
  - Auto-generate based on hours logged
  - Send via email
  - Track payment status

**Tech Stack**:
- **Option A**: Build custom (Next.js + Supabase + Stripe)
- **Option B**: White-label existing tool
  - [Plane](https://plane.so/) - Open-source Jira alternative (self-hosted)
  - [Linear](https://linear.app/) - Beautiful, fast, not self-hosted
  - [Basecamp](https://basecamp.com/) - Simple, client-friendly

**Client Wow Factor**:
Pharma consultants usually email Word docs back and forth. You have a client portal? Instant differentiation.

**ROI**:
- Faster invoicing = faster cash flow
- Clients see progress = fewer "where are we?" emails
- Professionalism = referrals

---

### **4. `tasks.xpharm.ie` - Internal Task Management** ⭐⭐⭐⭐
**Why**: You need Jira, but simpler

**Features**:
- **Project-based tasks**
  - Every client engagement = a project
  - Tasks have: assignee, due date, priority, tags
- **Templates for common engagements**
  - "FDA Inspection Prep" → auto-creates 20 tasks
  - "Serialization Implementation" → auto-creates roadmap
- **Time estimates vs. actuals** (learn what takes longest)
- **Sprint planning** (weekly/monthly goals)
- **Integrations**:
  - Slack notifications when tasks assigned
  - Calendar sync (Google Calendar)

**Tech Stack**:
- **Plane** (open-source, self-hosted, Jira-like)
- **Linear** (best UI, but SaaS)
- **Plausible** (privacy-focused analytics for task completion rates)

**ROI**: You ship faster. Less "what should I work on today?"

---

## 🔐 **Security & File Management**

### **5. `vault.xpharm.ie` - Secure File Storage** ⭐⭐⭐⭐⭐
**Why**: Pharma = confidential docs. Email attachments = bad.

**Features**:
- **End-to-end encrypted file storage**
- **Client-specific folders**
  - Only that client can see their files
- **Granular permissions**
  - You control who sees what
- **Audit log**
  - Who accessed what file, when
  - Required for compliance (GxP environments)
- **File versioning**
  - Keep old versions of SOPs, batch records
- **Expiring links**
  - Share a doc that auto-deletes after 7 days
- **Two-factor authentication (2FA)** required

**Tech Stack**:
- **Option A**: Self-hosted Nextcloud (open-source, full control)
- **Option B**: Supabase Storage (encrypted, built-in auth)
- **Option C**: Tresorit, Sync.com (zero-knowledge encryption SaaS)

**Pharma-Specific Value**:
- Clients trust you more (you take security seriously)
- Compliance: audit trails required for regulated docs
- VPN integration: only accessible on your network

**ROI**:
- Prevents data leaks
- Clients pay more for consultants they trust with sensitive data

---

### **6. VPN + Private Network (`vpn.xpharm.ie`)** ⭐⭐⭐⭐
**Why**: Secure access to internal tools from anywhere

**Architecture**:
```
Internet → VPN → Private Network
                  ├── vault.xpharm.ie (file storage)
                  ├── kb.xpharm.ie (internal wiki)
                  ├── nas.xpharm.local (shared drive)
                  └── db.xpharm.local (databases)
```

**Features**:
- **WireGuard VPN** (modern, fast, secure)
- **Split tunneling** (only internal traffic goes through VPN)
- **Device whitelisting** (only your laptops/phones can connect)
- **NAS integration**:
  - Synology or TrueNAS for shared storage
  - Auto-backup client files
  - Version control for all docs
  - Accessible via VPN at `nas.xpharm.local`

**Setup**:
1. **Cloud VPN Server**:
   - DigitalOcean Droplet ($12/month)
   - Install WireGuard
   - Configure firewall rules
2. **NAS** (if physical):
   - Synology DS224+ (~$300)
   - Connect to VPN as a client
   - Access from anywhere
3. **Clients**:
   - You + Dad install WireGuard app
   - Connect with config file
   - Access all internal tools securely

**ROI**:
- Work from anywhere (coffee shop, client site, home)
- No relying on Google Drive/Dropbox (you own your data)
- Cheaper than paying for multiple SaaS subscriptions

---

## 🤖 **Automation & AI Tools**

### **7. `ai.xpharm.ie` - Internal AI Assistant** ⭐⭐⭐⭐
**Why**: Automate repetitive pharma consulting tasks

**Use Cases**:

**A. Document Generation**
- Input: Client name, engagement type (e.g., "FDA inspection prep")
- Output: Pre-filled SOP template, gap assessment, checklist
- Tech: OpenAI API + your templates

**B. Regulatory Q&A Bot**
- "What's the difference between 21 CFR Part 11 and Annex 11?"
- Trained on FDA/EMA guidance documents
- Gives answers + cites sources
- Tech: OpenAI + vector database (Pinecone, Weaviate)

**C. Client Email Drafts**
- Input: "Client asked about serialization timelines"
- Output: Professional email draft citing regulations
- Tech: GPT-4 fine-tuned on your writing style

**D. Competitive Intelligence**
- Scrape competitors' websites for blog posts
- Auto-summarize: "Here's what your competitors wrote this week"
- Suggest content gaps: "You should write about X"

**Tech Stack**:
- Next.js app with API routes
- OpenAI API (GPT-4)
- Vector DB for RAG (Retrieval-Augmented Generation)
- Auth: Internal only (SSO)

**ROI**:
- 2-3 hours/week saved on repetitive tasks
- Better client communication (AI helps draft responses)
- Competitive intelligence on autopilot

---

### **8. `crm.xpharm.ie` - Lightweight CRM** ⭐⭐⭐⭐
**Why**: Track leads, proposals, and client relationships

**Features**:
- **Lead Pipeline**:
  - Cold Lead → Contacted → Proposal Sent → Negotiation → Won/Lost
- **Contact Management**:
  - Name, company, role, email, LinkedIn
  - Notes: "Met at DIA conference, interested in serialization"
- **Proposal Tracking**:
  - Which proposals are out there?
  - Follow-up reminders
  - Win rate analytics
- **Email Integration**:
  - Auto-log emails with clients (Gmail API)
- **Deal Value Tracking**:
  - Forecast: "We have $150k in proposals out"

**Tech Stack**:
- **Option A**: Build custom (Next.js + Supabase)
- **Option B**: Use Attio, Folk, or Airtable (simple CRMs)
- **Option C**: Self-hosted Odoo (open-source ERP/CRM)

**ROI**:
- Never lose a lead
- See what's working (which lead sources convert?)
- Forecast revenue

---

## 📊 **Analytics & Reporting**

### **9. `dash.xpharm.ie` - Executive Dashboard** ⭐⭐⭐
**Why**: See business health at a glance

**Metrics**:
- **Revenue**:
  - MRR (Monthly Recurring Revenue)
  - Project pipeline value
  - Burn rate (if you're funded)
- **Operations**:
  - Active projects
  - Utilization rate (billable hours / total hours)
  - Average project value
- **Marketing**:
  - Website traffic (from Google Analytics)
  - Blog post performance
  - Lead sources (LinkedIn, referrals, SEO)
- **Client Health**:
  - NPS score (if you survey clients)
  - Repeat clients vs. new
  - Average engagement length

**Tech Stack**:
- Retool, Airplane, or custom Next.js dashboard
- Data sources: CRM, project management, Google Analytics, Stripe
- Charts: Recharts, Chart.js

**ROI**: Make data-driven decisions. "Should we hire?" → Check utilization rate.

---

## 🎨 **Marketing & Sales Tools**

### **10. `proposals.xpharm.ie` - Proposal Generator** ⭐⭐⭐⭐
**Why**: Faster proposals = more clients

**Features**:
- **Template Library**:
  - Pre-built for: CMC, QA, Serialization, Supply Chain
- **Auto-fill client info**:
  - Pulls from CRM
- **Scope Builder**:
  - Drag-and-drop modules
  - "Phase 1: Gap Assessment ($15k, 2 weeks)"
  - "Phase 2: SOP Development ($25k, 4 weeks)"
- **Pricing Calculator**:
  - Input: hours, hourly rate, expenses
  - Output: Total with breakdown
- **E-signature Integration**:
  - Client signs online (DocuSign, PandaDoc)
- **Track Open Rate**:
  - Did they open the PDF?

**Tech Stack**:
- Next.js + React-PDF for generation
- Stripe for payments (if you want deposits)
- DocuSign API or HelloSign

**ROI**:
- Proposals in 30 mins instead of 3 hours
- Higher close rate (clients sign faster)

---

### **11. `case-studies.xpharm.ie` - Case Study Library** ⭐⭐⭐
**Why**: Sales tool + content marketing

**Features**:
- **Public-Facing** (SEO-optimized case studies)
- **Password-Protected** (for sensitive ones)
- **Format**:
  - Challenge / Solution / Results
  - Before/After metrics (if allowed)
  - Client testimonial (anonymized or not)
- **PDF Export** for proposals
- **Filterable**:
  - By industry (biotech, pharma)
  - By service (CMC, QA, serialization)
  - By challenge type

**Tech Stack**:
- Next.js + MDX (easy to write, SEO-friendly)
- CMS: Sanity, Contentful (if non-technical people add cases)

**ROI**:
- Close deals faster (proof you've done this before)
- SEO value (case studies rank well)

---

## 🧑‍💼 **HR & Operations**

### **12. `handbook.xpharm.ie` - Employee Handbook** ⭐⭐⭐
**Why**: Onboard future hires in hours, not weeks

**Content**:
- **Company Values & Mission**
- **How We Work**:
  - Communication (Slack, email, video calls)
  - Meeting cadence (weekly 1:1s, monthly planning)
  - Decision-making framework
- **Processes**:
  - How to onboard a new client
  - How to write an SOP
  - How to conduct a gap assessment
- **Tools Guide**:
  - How to access vault.xpharm.ie
  - How to log hours
  - How to submit expenses
- **Compliance Training**:
  - GxP basics
  - Data privacy (GDPR, HIPAA if relevant)

**Tech Stack**:
- GitBook, Docusaurus, or Notion (public)
- Auth: Internal only

**ROI**:
- Hire #3, #4, #5 without chaos
- Consistency in how you deliver

---

## 🔧 **DevOps & Infrastructure**

### **13. `status.xpharm.ie` - Status Page** ⭐⭐
**Why**: Transparency builds trust

**Features**:
- **System Health**:
  - xpharm.ie (website) - ✅ Operational
  - vault.xpharm.ie (file storage) - ✅ Operational
  - projects.xpharm.ie (client portal) - 🟡 Degraded
- **Incident History**:
  - "2025-12-01: vault.xpharm.ie was down for 15 mins (DNS issue)"
- **Scheduled Maintenance**:
  - "We're upgrading servers on Sunday at 2am UTC"

**Tech Stack**:
- **Option A**: Statuspage.io (Atlassian, paid)
- **Option B**: Uptime Kuma (open-source, self-hosted)
- **Option C**: Custom Next.js app

**ROI**: Clients trust you're professional.

---

### **14. `docs.xpharm.ie` - Developer Documentation** ⭐⭐
**Why**: For when you hire developer #2

**Content**:
- **Architecture Overview**:
  - Subdomain map
  - Tech stack per app
  - Database schemas
- **API Documentation**:
  - Internal APIs (if you build integrations)
- **Deployment Guides**:
  - How to deploy to Firebase
  - How to set up a new subdomain
- **Runbooks**:
  - "Server is down, now what?"
  - "How to restore from backup"

**Tech Stack**:
- Docusaurus, Mintlify, or GitBook
- GitHub-backed (version-controlled)

**ROI**: Hire engineers faster, less tribal knowledge.

---

## 💡 **Wild Ideas (Lower Priority, High Cool Factor)**

### **15. `lab.xpharm.ie` - R&D / Experiments** ⭐⭐
**Why**: Test new services before offering to clients

**Examples**:
- **Serialization ROI Calculator**:
  - Input: units/year, markets, system cost
  - Output: Payback period
  - Public-facing, generates leads
- **GMP Readiness Assessment Quiz**:
  - 20 questions → score + recommendations
  - Captures email for lead gen
- **Regulatory Timeline Estimator**:
  - "FDA approval for new drug" → timeline + milestones

**Tech Stack**: Next.js apps, each under lab.xpharm.ie/tool-name

**ROI**: Lead magnets. People use the tool → contact you.

---

### **16. `events.xpharm.ie` - Webinar Platform** ⭐⭐
**Why**: Thought leadership = inbound leads

**Features**:
- **Live Webinars**:
  - "How to Prepare for Your First FDA Inspection"
  - Q&A with your dad
- **On-Demand Library**:
  - Recorded webinars
  - Gated (email required to watch)
- **Registration**:
  - Eventbrite integration or custom form

**Tech Stack**:
- Zoom + custom landing page (Next.js)
- Email: Resend for reminders
- CRM integration: auto-add attendees to lead list

**ROI**:
- Position your dad as industry expert
- Build email list for future marketing

---

### **17. `api.xpharm.ie` - Public API (Future)** ⭐
**Why**: Partner integrations

**Examples**:
- **Serialization Vendor API**:
  - Other companies query: "Which vendor supports market X?"
- **Regulatory Data API**:
  - Developers pay to access your curated regulatory data

**Tech Stack**: REST or GraphQL API (Node.js, Next.js API routes)

**ROI**: New revenue stream (API subscriptions).

---

## 🗺️ **Implementation Roadmap**

### **Phase 1: Foundation (Month 1-2)** - Critical for Operations
1. ✅ `xpharm.ie` - Public site (done)
2. ✅ `brankit.xpharm.ie` - Branding guide (done)
3. 🔨 `kb.xpharm.ie` - Internal knowledge base (START HERE)
4. 🔨 `vault.xpharm.ie` - Secure file storage
5. 🔨 VPN setup (access internal tools securely)

**Why**: Capture your dad's knowledge NOW before you forget. Secure client files.

---

### **Phase 2: Client Delight (Month 3-4)** - Differentiation
6. 🔨 `projects.xpharm.ie` - Client portal
7. 🔨 `proposals.xpharm.ie` - Faster proposals
8. 🔨 `content.xpharm.ie` - Blog publishing workflow

**Why**: Clients see you're different. You close deals faster.

---

### **Phase 3: Scale (Month 5-6)** - Prepare for Growth
9. 🔨 `tasks.xpharm.ie` - Internal task management
10. 🔨 `crm.xpharm.ie` - Lead tracking
11. 🔨 `dash.xpharm.ie` - Business metrics
12. 🔨 `handbook.xpharm.ie` - Onboarding docs

**Why**: You're ready to hire employee #3, #4, #5 without chaos.

---

### **Phase 4: Innovation (Month 7+)** - Competitive Moat
13. 🔨 `ai.xpharm.ie` - Internal AI tools
14. 🔨 `lab.xpharm.ie` - Lead gen calculators
15. 🔨 `events.xpharm.ie` - Webinar platform
16. 🔨 `case-studies.xpharm.ie` - Public case studies

**Why**: Now you're not just a consultancy—you're a pharma tech company.

---

## 🏗️ **Technical Architecture**

### **Recommended Tech Stack (Unified)**

**Frontend**:
- Next.js 16 (App Router) for all web apps
- Tailwind CSS + shadcn/ui (consistent design)
- TypeScript (type safety across all apps)

**Backend**:
- Supabase (PostgreSQL + Auth + Storage + Realtime)
  - One database for all apps
  - Row-level security (RLS) for multi-tenancy
- Next.js API routes (serverless functions)

**Auth**:
- NextAuth.js with Google SSO
- Role-based access: Admin (you), Manager (dad), Client

**File Storage**:
- Supabase Storage (encrypted, S3-compatible)
- Or: Self-hosted Nextcloud (if you want full control)

**Search**:
- Algolia (for kb.xpharm.ie, content.xpharm.ie)
- Or: Typesense (open-source, self-hosted)

**AI**:
- OpenAI API (GPT-4) for content generation, Q&A
- Pinecone or Weaviate (vector DB for RAG)

**Hosting**:
- Vercel (all Next.js apps) or Firebase
- DigitalOcean (VPN server, NAS, self-hosted tools)

**Monitoring**:
- Sentry (errors)
- Plausible or PostHog (analytics, privacy-focused)
- Uptime Kuma (status page)

**Monorepo**:
- Turborepo (manage all apps in one repo)
- Shared components, utilities, types across apps

---

## 💰 **Cost Breakdown (Annual)**

| Tool/Service | Cost | Notes |
|--------------|------|-------|
| **Domain (xpharm.ie)** | $15/year | Already own |
| **Firebase Hosting** | $0-50/month | Pay as you grow |
| **Supabase Pro** | $25/month | Unlimited projects |
| **Vercel Pro** | $20/month | If using instead of Firebase |
| **DigitalOcean Droplet** | $12/month | VPN + self-hosted tools |
| **NAS (Synology DS224+)** | $300 one-time | Physical device |
| **Hard Drives (2x 4TB)** | $200 one-time | For NAS |
| **OpenAI API** | $50-200/month | Depends on usage |
| **Algolia** | $0-100/month | Free tier generous |
| **Domain SSL Certs** | $0 | Let's Encrypt (free) |
| **Email (Resend)** | $0-20/month | Free tier: 3k emails/month |
| **Linear (tasks)** | $8/user/month | Or use free Plane |
| **DocuSign** | $10/month | Or use free HelloSign |

**Total**: ~$100-300/month ($1,200-3,600/year)

**ROI**: One extra client/year pays for all of this 10x over.

---

## 🎯 **Quick Wins (Start This Week)**

### **1. Set Up Knowledge Base (`kb.xpharm.ie`)** - 4 hours
- Install Docusaurus or use Notion (make it public at kb.xpharm.ie)
- Have your dad brain-dump 10 key topics:
  - FDA inspection prep checklist
  - Common 483 findings
  - Serialization vendor comparison
  - CDMO qualification process
  - Typical CMC timelines
- Use this internally for 1 month
- Turn best docs into blog posts for SEO

**Outcome**: Knowledge is captured. You can reference it in proposals.

---

### **2. Set Up VPN + Shared Drive** - 2 hours
- Spin up DigitalOcean Droplet ($12/month)
- Install WireGuard (1-click install)
- Configure 2 clients (your laptop, dad's laptop)
- Set up Google Drive alternative:
  - Option A: Synology NAS at home (connect to VPN)
  - Option B: Nextcloud on DigitalOcean ($5/month droplet)
- Test: Access files from coffee shop via VPN

**Outcome**: All client files secure, accessible anywhere.

---

### **3. Client Portal MVP (`projects.xpharm.ie`)** - 8 hours
- Use Plane (open-source, self-hosted) or Linear
- Create first project: "FDA Inspection Prep - Client X"
- Tasks: Gap assessment, SOP review, mock inspection, final report
- Give client read-only access
- They see progress in real-time

**Outcome**: Client thinks you're incredibly organized. Referrals++.

---

### **4. Content Workflow (`content.xpharm.ie`)** - 4 hours
- Create simple Next.js app with:
  - List of blog post ideas (Airtable or Notion embed)
  - Status: Idea → Outline → Draft → Review → Published
  - Auto-publish to main site (via Markdown files in Git)
- Week 1: Write "5 Common Mistakes in Serialization Implementation"
- Week 2: Publish on xpharm.ie/blog, share on LinkedIn

**Outcome**: SEO starts working. Inbound leads in 3-6 months.

---

## 🚨 **Biggest Mistakes to Avoid**

1. **Over-engineering too early**:
   - Don't build custom CRM if Airtable works for 2 years
   - Use SaaS until you have 10+ clients, then self-host

2. **Not capturing knowledge**:
   - Your dad's experience is your moat
   - If it's only in his head, you can't scale

3. **Ignoring security**:
   - Pharma clients will ask: "Where's our data stored?"
   - "Google Drive" = amateur
   - "Encrypted vault on our private VPN" = pro

4. **Building what YOU think is cool vs. what clients value**:
   - Clients care about: responsiveness, deliverables, results
   - Internal tools should make you faster at those things

5. **Not integrating tools**:
   - If CRM, tasks, and proposals don't talk to each other, you'll have duplicate data
   - Use Zapier or build API integrations

---

## 🎁 **Bonus: Client-Facing Tools as Lead Magnets**

### **ROI Calculator (`lab.xpharm.ie/serialization-roi`)**
- Public tool: "Calculate serialization implementation cost"
- Captures email to show results
- Auto-sends PDF + books discovery call

### **Compliance Readiness Quiz (`lab.xpharm.ie/gmp-quiz`)**
- 15 questions: "How GMP-ready is your facility?"
- Score + personalized recommendations
- "Book a free 30-min consultation"

### **Regulatory Timeline Estimator (`lab.xpharm.ie/timeline`)**
- "FDA approval for new biologic" → 18-24 months
- Shows milestones + common delays
- Lead gen tool

**Tech**: Next.js + Resend (email) + Supabase (store leads)

**ROI**: Each tool generates 5-10 leads/month. Close 1 = pays for everything.

---

## 📈 **Success Metrics (6 Months)**

| Metric | Target | How to Track |
|--------|--------|--------------|
| **Knowledge Base Articles** | 50+ docs | kb.xpharm.ie |
| **Blog Posts Published** | 12 (2/month) | content.xpharm.ie |
| **Organic Traffic** | 500 visits/month | Google Analytics |
| **Leads from SEO** | 5/month | CRM |
| **Client Portal Active Users** | 3 clients | projects.xpharm.ie |
| **Proposal Turnaround Time** | <24 hours | Manual tracking |
| **Repeat Clients** | 2+ engagements | CRM |

---

## 🛠️ **Action Plan (Next 30 Days)**

### **Week 1: Knowledge Capture**
- [ ] Set up kb.xpharm.ie (Docusaurus or Notion)
- [ ] Dad writes 5 core documents (FDA, serialization, CMC, QA, supply chain)
- [ ] You organize + format + publish internally

### **Week 2: Security & Access**
- [ ] Set up VPN (WireGuard on DigitalOcean)
- [ ] Configure vault.xpharm.ie (Nextcloud or Supabase Storage)
- [ ] Migrate client files from email/Google Drive → vault

### **Week 3: Client Experience**
- [ ] Set up projects.xpharm.ie (Plane or Linear)
- [ ] Create first client project with tasks
- [ ] Give client access (send them login)

### **Week 4: Content Engine**
- [ ] Set up content.xpharm.ie (editorial calendar)
- [ ] Plan 10 blog post topics
- [ ] Write + publish first blog post on main site
- [ ] Share on LinkedIn

**Result**: In 30 days, you have:
- Knowledge documented
- Client files secure
- First client on portal (they're impressed)
- SEO starting to work

---

## 🎯 **Final Thoughts**

You're not just starting a consultancy—you're building **infrastructure-as-competitive-advantage**.

Most pharma consultancies:
- Store files in email attachments
- Write proposals from scratch each time
- Have knowledge locked in consultants' heads
- Use Excel for project management

You:
- Have encrypted vault with audit logs
- Generate proposals in 30 minutes
- Have searchable knowledge base
- Have client portal that updates in real-time

**That's how you win.**

Your dad brings 20 years of pharma expertise. You bring tech. Together, you're building something pharma has never seen: **a consultancy that operates like a software company.**

Build the tools now. Win clients faster. Scale without chaos.

---

**Questions?** Let me know which subdomain to build first. I'd start with:
1. **kb.xpharm.ie** (capture knowledge)
2. **vault.xpharm.ie + VPN** (secure files)
3. **projects.xpharm.ie** (impress first client)

Then we automate everything else.
