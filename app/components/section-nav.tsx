"use client";

import { useEffect, useState } from "react";

// ============================================================
// SECTION NAVIGATION WITH HAMBURGER MENU
// ============================================================
// This component shows:
// - Desktop: Horizontal navigation bar (like before)
// - Mobile: Hamburger menu icon that opens a slide-out menu
// ============================================================

const sections = [
  { id: "what-we-do", label: "What We Do" },
  { id: "when-to-engage", label: "When to Engage" },
  { id: "how-we-engage", label: "How We Engage" },
  { id: "areas", label: "Areas of Accountability" },
  { id: "who-we-work-with", label: "Who We Work With" },
  { id: "not-right-fit", label: "Not the Right Fit" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export function SectionNav() {
  const [activeSection, setActiveSection] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  // New state for mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 200);

      // Find the current section based on scroll position
      const current = sections
        .map((section) => {
          const element = document.getElementById(section.id);
          if (element) {
            const rect = element.getBoundingClientRect();
            return {
              id: section.id,
              top: rect.top + window.scrollY,
              bottom: rect.bottom + window.scrollY,
            };
          }
          return null;
        })
        .filter((item) => item !== null)
        .find((item) => {
          if (item) {
            return scrollY >= item.top - 100 && scrollY < item.bottom - 100;
          }
          return false;
        });

      if (current) {
        setActiveSection(current.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when user scrolls
  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    
    // Close mobile menu when a link is clicked
    setIsMobileMenuOpen(false);
    
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 160; // Account for header + nav bar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Navigation Bar */}
      <nav className="bg-background/95 border-border fixed top-[88px] left-0 right-0 z-40 border-b backdrop-blur-sm md:top-[96px]">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
          {/* Desktop Navigation - Hidden on mobile (< 768px) */}
          <div className="hidden md:flex items-center gap-6 overflow-x-auto py-3">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={(e) => handleClick(e, section.id)}
                className={`whitespace-nowrap text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === section.id
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {section.label}
              </a>
            ))}
          </div>

          {/* Mobile Hamburger Button - Shown only on mobile */}
          <div className="flex md:hidden items-center justify-between py-3">
            <span className="text-sm font-medium text-muted-foreground">
              Menu
            </span>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-primary hover:text-primary/80 transition-colors p-2"
              aria-label="Toggle menu"
            >
              {/* Hamburger Icon */}
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  // X icon when menu is open
                  <>
                    <path d="M6 18L18 6M6 6l12 12" />
                  </>
                ) : (
                  // Hamburger icon when menu is closed
                  <>
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Only shown when menu is open */}
      {isMobileMenuOpen && (
        <>
          {/* Dark overlay behind the menu */}
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Slide-out menu */}
          <div className="fixed top-[88px] right-0 bottom-0 w-64 bg-background border-l border-border z-50 md:hidden overflow-y-auto shadow-xl">
            <div className="py-4">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => handleClick(e, section.id)}
                  className={`block px-6 py-3 text-sm font-medium transition-colors hover:bg-muted ${
                    activeSection === section.id
                      ? "text-primary bg-muted/50"
                      : "text-muted-foreground"
                  }`}
                >
                  {section.label}
                </a>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}
