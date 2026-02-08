import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-law.jpg"
          alt="Distinguished law firm office with mahogany bookshelves and leather-bound volumes"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      {/* Content */}
      <div className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-28 text-center">
        <div className="mx-auto max-w-4xl">
          {/* Decorative line */}
          <div className="mx-auto mb-8 h-px w-24 bg-accent" />

          <p className="mb-4 text-sm font-medium tracking-[0.3em] text-accent uppercase">
            Established 1987
          </p>

          <h1 className="mb-6 font-serif text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-7xl text-balance">
            Protecting Your Legacy
            <br />
            <span className="text-accent">For Generations</span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-primary-foreground/80 text-pretty">
            Hartwell & Prescott provides distinguished estate planning, trust
            administration, and CPA services. We craft comprehensive strategies
            to preserve and protect what matters most to you and your family.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#contact"
              className="flex items-center gap-2 rounded-sm bg-accent px-8 py-3.5 text-sm font-semibold tracking-wide text-accent-foreground transition-colors hover:bg-accent/90"
            >
              Schedule a Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#practice-areas"
              className="rounded-sm border border-primary-foreground/30 px-8 py-3.5 text-sm font-semibold tracking-wide text-primary-foreground transition-colors hover:border-accent hover:text-accent"
            >
              Our Practice Areas
            </Link>
          </div>

          {/* Stats bar */}
          <div className="mx-auto mt-20 grid max-w-3xl grid-cols-1 gap-8 border-t border-primary-foreground/15 pt-10 sm:grid-cols-3">
            <div>
              <p className="font-serif text-3xl font-bold text-accent">38+</p>
              <p className="mt-1 text-sm text-primary-foreground/60">Years of Experience</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-bold text-accent">$2.4B</p>
              <p className="mt-1 text-sm text-primary-foreground/60">In Assets Protected</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-bold text-accent">1,200+</p>
              <p className="mt-1 text-sm text-primary-foreground/60">Families Served</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
