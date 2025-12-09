import { Inter, Playfair_Display } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

export default function HomePage() {
  return (
    <div className={`flex min-h-screen flex-col ${inter.className}`}>
      {/* Header */}
      <header className="w-full px-6 py-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <Image
            src="/images/Logo1.png"
            alt="XPharm logo"
            width={140}
            height={48}
            className="h-10 w-auto md:h-12"
          />
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex flex-1 items-center justify-center px-6 py-12 md:px-12 lg:px-20">
        <div className="mx-auto max-w-4xl text-center">
          {/* Coming Soon Badge */}
          <div className="bg-accent/30 text-primary mb-8 inline-flex items-center gap-2 rounded-full px-4 py-2">
            <span className="relative flex h-2 w-2">
              <span className="bg-accent absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
              <span className="bg-accent relative inline-flex h-2 w-2 rounded-full"></span>
            </span>
            <span className="text-sm font-medium">Website Coming Soon</span>
          </div>

          {/* Logo Display */}
          <div className="mb-8 flex justify-center">
            <Image
              src="/images/Logo2.png"
              alt="XPharm logo"
              width={160}
              height={160}
              className="h-28 w-auto md:h-36"
            />
          </div>

          {/* Main Heading */}
          <h1
            className={`text-primary mb-6 text-4xl font-bold text-balance md:text-5xl lg:text-6xl ${playfair.className}`}
          >
            Pharmaceutical Consultancy
          </h1>
          <h2
            className={`text-primary mb-6 text-2xl font-semibold text-balance md:text-3xl lg:text-4xl ${playfair.className}`}
          >
            Solving challenges you didn&apos;t even know you had.
          </h2>

          {/* Subheading */}
          <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-pretty md:text-xl">
            Our new website is currently under development.
          </p>
        </div>
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
