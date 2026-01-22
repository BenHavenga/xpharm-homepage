import { Inter, Playfair_Display } from "next/font/google";
import Image from "next/image";
import { SectionNav } from "./components/section-nav";
import { ContactForm } from "./components/contact-form";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

// ============================================================
// METADATA EXPORT - This tells Google what to show in search results
// ============================================================
export const metadata: Metadata = {
  // This is the page title that appears in the browser tab and Google search
  title: "XPharm | Fractional & Interim Operations Leadership for Life Sciences",
  
  // This is the description that appears under your link in Google search results
  description: "Executive operations leadership for life sciences. Fractional and interim COO services for biotech, pharma, and investors during critical transitions.",
  
  // Keywords help Google understand what your site is about
  keywords: [
    "fractional COO pharma",
    "interim operations leader",
    "life sciences operations",
    "pharmaceutical supply chain",
    "biotech operations",
    "interim COO pharma",
    "fractional operations executive",
    "pharma operations consulting",
  ],
  
  // These help with social media sharing
  openGraph: {
    title: "XPharm | Fractional & Interim Operations Leadership for Life Sciences",
    description: "Fractional executive operations leadership for life sciences companies navigating complex transitions and execution risk.",
    url: "https://xpharm.ie",
    siteName: "XPharm",
    locale: "en_IE",
    type: "website",
    images: [
      {
        url: "https://xpharm.ie/images/Logo1.png",
        width: 1200,
        height: 630,
        alt: "XPharm Logo",
      },
    ],
  },
  
  // Twitter card metadata
  twitter: {
    card: "summary_large_image",
    title: "XPharm | Fractional & Interim Operations Leadership for Life Sciences",
    description: "Executive operations leadership for life sciences companies navigating complex transitions and execution risk.",
    images: ["https://xpharm.ie/images/Logo1.png"],
  },
  
  // Tell Google this content is in English
  alternates: {
    canonical: "https://xpharm.ie",
  },
  
  // Other meta tags
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function HomePage() {
  return (
    <div className={`flex min-h-screen flex-col ${inter.className}`}>
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-background px-6 py-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <meta name="google-site-verification" content="8dNyYFME2A_uppo8kUapXeaLTCWzkfaYMvNoKQ4tw0Y" />
          <Image
            src="/images/Logo1.png"
            alt="XPharm logo"
            width={140}
            height={48}
            className="h-10 w-auto md:h-12"
          />
        </div>
      </header>

      <SectionNav />

      <main className="flex-1">
        {/* Hero Section */}
        <section 
          className="relative px-6 py-16 md:px-12 lg:px-20 lg:py-24 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/background image.png')",
          }}
        >
          <div className="absolute inset-0 bg-background/80"></div>
          <div className="relative mx-auto max-w-4xl text-center">
            <h1
              className={`text-primary mb-4 text-4xl font-bold text-balance md:text-5xl lg:text-6xl ${playfair.className}`}
            >
              Fractional & Interim Operations Leadership for Life Sciences
            </h1>
            <p className="text-muted-foreground mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-pretty md:text-xl">
              Driving operational and value‑creation milestones at critical inflection points
            </p>
          </div>
        </section>

        {/* What We Do Section */}
        <section id="what-we-do" className="border-border border-t bg-muted/30 px-6 py-16 md:px-12 lg:px-20 lg:py-24">
          <div className="mx-auto max-w-4xl">
            <h2
              className={`text-primary mb-6 text-3xl font-bold md:text-4xl lg:text-5xl ${playfair.className}`}
            >
              What We Do
            </h2>
            <div className="text-muted-foreground space-y-4 text-base leading-relaxed md:text-lg">
              <p>
                XPharm provides fractional and interim operations leadership to life sciences companies navigating complex transitions and execution risk. We work directly with boards, investors, and executive leadership teams when operational delivery is critical to enterprise value.
              </p>
              <p>
                Our engagements are designed for situations where experience, authority, and speed matter more than advisory analysis.
              </p>
            </div>
          </div>
        </section>

        {/* When to Engage XPharm Section */}
        <section id="when-to-engage" className="border-border border-t px-6 py-16 md:px-12 lg:px-20 lg:py-24">
          <div className="mx-auto max-w-4xl">
            <h2
              className={`text-primary mb-6 text-3xl font-bold md:text-4xl lg:text-5xl ${playfair.className}`}
            >
              When to Engage XPharm
            </h2>
            <p className="text-muted-foreground mb-8 text-base leading-relaxed md:text-lg">
              Clients typically engage XPharm when operational complexity, time pressure, or risk exposure exceeds internal capacity. Common engagement triggers include:
            </p>
            <ul className="text-muted-foreground space-y-4 text-base leading-relaxed md:text-lg">
              <li className="flex gap-3">
                <span className="text-accent mt-1 shrink-0">•</span>
                <span>Scaling global supply chains to support clinical progression or commercial readiness</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1 shrink-0">•</span>
                <span>Operational instability following acquisition, divestment, or organisational restructuring</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1 shrink-0">•</span>
                <span>Supplier risk, cost escalation, or failure of critical third‑party partners</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1 shrink-0">•</span>
                <span>Trade, logistics, or regulatory exposure across multi‑jurisdictional operations</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1 shrink-0">•</span>
                <span>Pre‑transaction or confirmatory operational due diligence</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1 shrink-0">•</span>
                <span>Interim leadership gaps at COO or senior operations level</span>
              </li>
            </ul>
          </div>
        </section>

        {/* How We Engage Section */}
        <section id="how-we-engage" className="border-border border-t bg-muted/30 px-6 py-16 md:px-12 lg:px-20 lg:py-24">
          <div className="mx-auto max-w-4xl">
            <h2
              className={`text-primary mb-6 text-3xl font-bold md:text-4xl lg:text-5xl ${playfair.className}`}
            >
              How We Engage
            </h2>
            <p className="text-muted-foreground mb-8 text-base leading-relaxed md:text-lg">
              XPharm operates exclusively in leadership roles, not as a traditional consultancy.
            </p>
            <p className="text-primary mb-6 font-semibold md:text-lg">
              Engagement models include:
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="text-primary mb-2 text-xl font-semibold">
                  Fractional COO / Operations Leader
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed md:text-lg">
                  Ongoing executive leadership (typically 1–2 days per week) focused on stabilisation, scale‑up, and delivery of defined milestones.
                </p>
              </div>
              <div>
                <h3 className="text-primary mb-2 text-xl font-semibold">
                  Interim COO / SVP Operations
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed md:text-lg">
                  Full‑time, fixed‑term executive mandates where immediate authority and accountability are required.
                </p>
              </div>
              <div>
                <h3 className="text-primary mb-2 text-xl font-semibold">
                  Board & Investor Operational Support
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed md:text-lg">
                  Targeted engagement during transactions, restructurings, or periods of heightened execution risk.
                </p>
              </div>
            </div>
            <p className="text-muted-foreground mt-8 text-base leading-relaxed md:text-lg">
              XPharm does not provide project management, staff augmentation, or functional consulting services.
            </p>
          </div>
        </section>

        {/* Areas of Operational Accountability Section */}
        <section id="areas" className="border-border border-t px-6 py-16 md:px-12 lg:px-20 lg:py-24">
          <div className="mx-auto max-w-4xl">
            <h2
              className={`text-primary mb-6 text-3xl font-bold md:text-4xl lg:text-5xl ${playfair.className}`}
            >
              Areas of Operational Accountability
            </h2>
            <p className="text-muted-foreground mb-8 text-base leading-relaxed md:text-lg">
              XPharm typically assumes direct accountability across the following areas:
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="text-primary mb-2 text-xl font-semibold">
                  Global Supply Chain & Manufacturing
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed md:text-lg">
                  Design, stabilisation, and scale‑up of multi‑site, multi‑vendor supply chains supporting clinical and commercial programmes.
                </p>
              </div>
              <div>
                <h3 className="text-primary mb-2 text-xl font-semibold">
                  Supplier Selection, Escalation & Commercial Negotiation
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed md:text-lg">
                  Critical supplier selection, executive‑level escalation, and negotiation under time, cost, or performance pressure.
                </p>
              </div>
              <div>
                <h3 className="text-primary mb-2 text-xl font-semibold">
                  Trade Compliance & Cross‑Border Operations
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed md:text-lg">
                  Establishment and governance of compliant global trade, logistics, and import/export frameworks.
                </p>
              </div>
              <div>
                <h3 className="text-primary mb-2 text-xl font-semibold">
                  Global Operations Build‑Out
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed md:text-lg">
                  Design of operating models, organisational structures, and governance to support international expansion.
                </p>
              </div>
              <div>
                <h3 className="text-primary mb-2 text-xl font-semibold">
                  M&A Integration, Separation & Carve‑Outs
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed md:text-lg">
                  Operational integration, divestment planning, and execution following acquisitions or portfolio restructuring.
                </p>
              </div>
              <div>
                <h3 className="text-primary mb-2 text-xl font-semibold">
                  Operational Due Diligence
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed md:text-lg">
                  Assessment of operational risk, scalability, and execution readiness in pre‑ and post‑transaction contexts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Who We Work With Section */}
        <section id="who-we-work-with" className="border-border border-t bg-muted/30 px-6 py-16 md:px-12 lg:px-20 lg:py-24">
          <div className="mx-auto max-w-4xl">
            <h2
              className={`text-primary mb-6 text-3xl font-bold md:text-4xl lg:text-5xl ${playfair.className}`}
            >
              Who We Work With
            </h2>
            <ul className="text-muted-foreground mb-8 space-y-4 text-base leading-relaxed md:text-lg">
              <li className="flex gap-3">
                <span className="text-accent mt-1 shrink-0">•</span>
                <span>Private equity and venture capital investors</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1 shrink-0">•</span>
                <span>Biotech companies from clinical stage through commercial scale‑up</span>
              </li>
              <li className="flex gap-3">
                <span className="text-accent mt-1 shrink-0">•</span>
                <span>Pharmaceutical companies managing complex global operations</span>
              </li>
            </ul>
            <p className="text-muted-foreground text-base leading-relaxed md:text-lg">
              Engagements are limited to a small number of clients at any one time to ensure focus and delivery.
            </p>
          </div>
        </section>

        {/* When XPharm Is Not the Right Fit Section */}
        <section id="not-right-fit" className="border-border border-t px-6 py-16 md:px-12 lg:px-20 lg:py-24">
          <div className="mx-auto max-w-4xl">
            <h2
              className={`text-primary mb-6 text-3xl font-bold md:text-4xl lg:text-5xl ${playfair.className}`}
            >
              When XPharm Is Not the Right Fit
            </h2>
            <p className="text-muted-foreground mb-8 text-base leading-relaxed md:text-lg">
              XPharm is deliberately selective. We are not the right partner in the following situations:
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="text-primary mb-2 text-xl font-semibold">
                  You are looking for advisory recommendations rather than execution.
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed md:text-lg">
                  XPharm does not produce strategy decks or diagnostic reports without ownership of delivery.
                </p>
              </div>
              <div>
                <h3 className="text-primary mb-2 text-xl font-semibold">
                  You need functional specialists rather than senior leadership.
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed md:text-lg">
                  We do not act as clinical, regulatory, quality, or CMC subject‑matter experts, nor do we replace functional teams.
                </p>
              </div>
              <div>
                <h3 className="text-primary mb-2 text-xl font-semibold">
                  You are seeking long‑term organisational headcount.
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed md:text-lg">
                  XPharm is designed for time‑bound mandates. If the priority is a permanent executive hire, we may support the transition but are not a substitute for it.
                </p>
              </div>
              <div>
                <h3 className="text-primary mb-2 text-xl font-semibold">
                  The primary objective is cost reduction rather than risk management or value creation.
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed md:text-lg">
                  Our work is focused on preventing failure, delay, and mis‑execution at critical moments.
                </p>
              </div>
              <div>
                <h3 className="text-primary mb-2 text-xl font-semibold">
                  The organisation is not ready to delegate authority.
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed md:text-lg">
                  Successful engagements require executive‑level decision rights and accountability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About XPharm Section */}
        <section id="about" className="border-border border-t bg-muted/30 px-6 py-16 md:px-12 lg:px-20 lg:py-24">
          <div className="mx-auto max-w-4xl">
            <h2
              className={`text-primary mb-6 text-3xl font-bold md:text-4xl lg:text-5xl ${playfair.className}`}
            >
              About XPharm
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed md:text-lg">
              XPharm was established to address a gap between advisory insight and executive accountability in life sciences operations. We bring hands‑on leadership experience across supply chain, global operations, and transaction‑driven change, stepping in when outcomes—not recommendations—are required.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="border-border border-t px-6 py-16 md:px-12 lg:px-20 lg:py-24">
          <div className="mx-auto max-w-4xl">
            <h2
              className={`text-primary mb-6 text-3xl font-bold md:text-4xl lg:text-5xl ${playfair.className}`}
            >
              Contact
            </h2>
            <p className="text-muted-foreground mb-6 text-base leading-relaxed md:text-lg">
              For confidential discussion regarding fractional or interim engagement:
            </p>
            <ContactForm />
            <p className="text-muted-foreground mt-6 text-base md:text-lg">
              <span className="text-primary font-medium">Location:</span> Ireland | Global Mandates
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-border border-t px-6 py-8 md:px-12 lg:px-20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/images/Logo2.png"
              alt="XPharm logo"
              width={32}
              height={32}
              className="h-8 w-auto"
            />
            <span className="text-muted-foreground text-sm">
              © 2025 XPharm. All rights reserved.
            </span>
          </div>
          <a
            href="https://www.linkedin.com/company/xpharm/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Visit XPharm on LinkedIn"
          >
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
}
