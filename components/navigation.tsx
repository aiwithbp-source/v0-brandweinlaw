"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Practice Areas", href: "#practice-areas" },
  { label: "Our Attorneys", href: "#attorneys" },
  { label: "Updates", href: "#updates" },
  { label: "Contact", href: "#contact" },
]

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm">
      {/* Top bar */}
      <div className="border-b border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
          <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
            <Phone className="h-3.5 w-3.5" />
            <a href="tel:8475099200" className="hover:text-accent transition-colors">
              (847) 509-9200
            </a>
          </div>
          <span className="hidden text-sm text-primary-foreground/70 sm:block">
            Northbrook, Illinois
          </span>
        </div>
      </div>

      {/* Main nav */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="#home" className="flex flex-col">
          <span className="font-serif text-xl font-bold tracking-wide text-primary-foreground lg:text-2xl">
            Brandwein & Brandwein
          </span>
          <span className="text-xs tracking-[0.25em] text-accent uppercase">
            Attorneys at Law
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium tracking-wide text-primary-foreground/80 transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#contact"
          className="hidden rounded-sm bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90 lg:block"
        >
          Contact Us Today
        </Link>

        {/* Mobile toggle */}
        <button
          type="button"
          className="text-primary-foreground lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-primary-foreground/10 bg-primary lg:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-3 text-sm font-medium tracking-wide text-primary-foreground/80 transition-colors hover:text-accent"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="#contact"
                className="block rounded-sm bg-accent px-5 py-2.5 text-center text-sm font-semibold text-accent-foreground"
                onClick={() => setMobileOpen(false)}
              >
                Contact Us Today
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
