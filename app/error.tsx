"use client";

import { Inter, Playfair_Display } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className={`min-h-screen flex flex-col ${inter.className}`}>
      {/* Header */}
      <header className="w-full py-6 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <Link href="/">
            <Image
              src="/images/Logo1.png"
              alt="XPharm logo"
              width={140}
              height={48}
              className="h-10 md:h-12 w-auto"
            />
          </Link>
        </div>
      </header>

      {/* Error Content */}
      <main className="flex-1 flex items-center justify-center px-6 md:px-12 lg:px-20 py-12">
        <div className="max-w-2xl mx-auto text-center">
          {/* Logo Display */}
          <div className="flex justify-center mb-8">
            <Image
              src="/images/Logo2.png"
              alt="XPharm logo"
              width={120}
              height={120}
              className="h-20 md:h-24 w-auto opacity-50"
            />
          </div>

          {/* Error Heading */}
          <h1
            className={`text-4xl md:text-5xl font-bold text-primary mb-4 ${playfair.className}`}
          >
            Something went wrong
          </h1>

          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
            We encountered an unexpected error. Please try again.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={reset}
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-md font-medium transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              Try Again
            </button>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground px-6 py-3 rounded-md font-medium transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 md:px-12 lg:px-20 border-t border-border">
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          <div className="flex items-center gap-3">
            <Image
              src="/images/Logo2.png"
              alt="XPharm logo"
              width={32}
              height={32}
              className="h-8 w-auto"
            />
            <span className="text-sm text-muted-foreground">
              © 2025 XPharm. All rights reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
