"use client";

import { useEffect, useState } from "react";

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

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
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
    <nav className="bg-background/95 border-border fixed top-[88px] left-0 right-0 z-40 border-b backdrop-blur-sm md:top-[96px]">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="flex items-center gap-6 overflow-x-auto py-3">
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
      </div>
    </nav>
  );
}

