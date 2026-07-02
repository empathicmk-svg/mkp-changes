"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import AuthorGlow from "@/app/components/AuthorGlow";

const navLinks = [
  { label: "Services", href: "/services#offerings" },
  { label: "Work", href: "/#offerings" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href.split("#")[0]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-graphite bg-void/[0.92] backdrop-blur-[12px]">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 lg:px-10">
          <div className="flex items-center gap-3">
            <AuthorGlow size={40} ring={2} className="hidden sm:inline-block" />
            <Link href="/" className="font-display text-2xl tracking-[0.02em] text-white" style={{ lineHeight: 1 }}>
              MK PARRISH
            </Link>
          </div>

          <nav className="hidden items-center gap-5 md:flex lg:gap-7" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link whitespace-nowrap font-body text-[0.62rem] font-medium uppercase tracking-[0.12em] transition-colors hover:text-pearl ${
                  isActive(link.href) ? "active text-pearl" : "text-ash"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/book"
            className="btn-primary hidden px-5 py-2.5 font-body text-[0.7rem] font-bold uppercase tracking-[0.2em] text-void md:inline-flex"
          >
            Book a Call
          </Link>
        </div>
      </header>

      <nav className="mobile-bottom-nav" aria-label="Mobile navigation">
        <Link href="/" className={`mobile-bottom-nav-item${pathname === "/" ? " active" : ""}`}>Home</Link>
        <Link href="/services#offerings" className={`mobile-bottom-nav-item${isActive("/services") ? " active" : ""}`}>Services</Link>
        <Link href="/#offerings" className="mobile-bottom-nav-item">Work</Link>
        <Link href="/contact" className={`mobile-bottom-nav-item${isActive("/contact") ? " active" : ""}`}>Contact</Link>
        <Link href="/book" className="mobile-bottom-nav-book">Book</Link>
      </nav>
    </>
  );
}
