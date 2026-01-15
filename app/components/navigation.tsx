"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

interface NavItem {
  href: string;
  label: string;
}

const navItems: NavItem[] = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/#contact",
    label: "Contact",
  },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuAnimation, setMobileMenuAnimation] = useState<"entering" | "exiting" | null>(
    null
  );
  const pathname = usePathname();

  const toggleMobileMenu = (shouldOpen: boolean) => {
    if (shouldOpen) {
      setMobileMenuAnimation("entering");
      setIsOpen(true);
    } else {
      setMobileMenuAnimation("exiting");
      setTimeout(() => {
        setIsOpen(false);
        setMobileMenuAnimation(null);
      }, 300); // Match animation duration
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [isOpen]);

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpen(false);
    const contactForm = document.getElementById("contact");
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Mobile Navigation */}
      <div className="nav-mobile lg:hidden">
        <header className="fixed top-0 right-0 left-0 z-[100] bg-white">
          <div className="flex h-16 items-center justify-between border-b px-4">
            <Link href="/" className="flex items-center gap-2 font-serif text-2xl font-bold">
              <Image
                src="/images/Logo1.webp"
                alt="xpharm Logo"
                width={24}
                height={24}
                className="object-contain"
              />
            </Link>
            <Button
              variant="ghost"
              size="sm"
              className="aspect-square h-10 w-10"
              onClick={() => toggleMobileMenu(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </header>

        {isOpen && (
          <div
            className={`fixed inset-0 top-16 z-[90] bg-white ${
              mobileMenuAnimation === "entering"
                ? "animate-in slide-in-from-top duration-300"
                : mobileMenuAnimation === "exiting"
                  ? "animate-out slide-out-to-top duration-300"
                  : ""
            }`}
          >
            <nav className="divide-border flex h-[calc(100vh-4rem)] flex-col divide-y">
              {navItems.map((item) => (
                <div key={item.href} className="px-6 py-4">
                  <Link
                    href={item.href}
                    className="text-foreground hover:text-primary block text-2xl font-medium"
                    onClick={(e) => {
                      if (item.href.startsWith("/#")) {
                        handleContactClick(e);
                      } else {
                        toggleMobileMenu(false);
                      }
                    }}
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
            </nav>
          </div>
        )}
        <div className="h-16" />
      </div>

      {/* Desktop Navigation */}
      <nav
        className={`nav-desktop fixed top-0 right-0 left-0 z-50 hidden transition-all duration-500 ease-in-out lg:block ${
          isScrolled
            ? "mx-4 mt-4 scale-[0.98] rounded-full border border-gray-800 bg-gray-900/95 shadow-lg backdrop-blur-sm hover:scale-100 sm:mx-6 lg:mx-8"
            : "bg-transparent"
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link
              href="/"
              className={`flex items-center gap-2 px-2 py-1 font-serif text-3xl font-bold transition-all duration-500 ease-in-out ${
                isScrolled ? "scale-95 text-2xl text-white" : ""
              }`}
            >
              <Image
                src={isScrolled ? "/images/Logo1-Dark.webp" : "/images/Logo1.webp"}
                alt="xpharm Logo"
                width={150}
                height={32}
                className="object-contain"
              />
            </Link>

            <div className="flex">
              <div className="relative flex items-center space-x-8">
                {navItems.map((item) => (
                  <div key={item.href} className="flex flex-col items-center">
                    <Link
                      href={item.href}
                      className={`nav-item flex cursor-pointer items-center text-sm transition-colors ${
                        pathname === item.href
                          ? isScrolled
                            ? "text-white"
                            : "text-primary"
                          : isScrolled
                            ? "text-white/80 hover:text-white"
                            : "text-muted-foreground hover:text-primary"
                      }`}
                      onClick={(e) => {
                        if (item.href.startsWith("/#")) {
                          e.preventDefault();
                          document
                            .getElementById("contact")
                            ?.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                    >
                      {item.label}
                    </Link>
                  </div>
                ))}
              </div>

              <div
                className={`ml-4 flex items-center space-x-4 border-l pl-4 ${
                  isScrolled ? "border-white/20" : "border-border"
                }`}
              >
                <Button
                  asChild
                  className={`morph-button ${
                    isScrolled
                      ? "bg-white text-black hover:bg-white/90"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                  data-scrolled={isScrolled}
                >
                  <Link
                    href="/#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <style jsx global>{`
        @media (max-width: 1023px) {
          .nav-desktop {
            display: none;
          }
        }
        @media (min-width: 1024px) {
          .nav-mobile {
            display: none;
          }
        }
        @keyframes dropdownEnter {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .nav-item {
          position: relative;
        }
        .nav-item::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 2px;
          bottom: -4px;
          left: 0;
          background-color: currentColor;
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.3s ease-in-out;
        }
        .nav-item:hover::after,
        .nav-item.active::after {
          transform: scaleX(1);
          transform-origin: left;
        }
      `}</style>
    </>
  );
}
