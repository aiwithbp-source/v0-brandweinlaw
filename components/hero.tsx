import Link from "next/link"
import { ArrowRight, Scale, BookOpen, Landmark } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Styled background with subtle icons */}
      <div className="absolute inset-0 bg-primary">
        {/* Decorative watermark icons */}
        <Scale
          className="absolute -top-10 -right-10 h-96 w-96 text-primary-foreground/[0.03] rotate-12"
          strokeWidth={0.5}
          aria-hidden="true"
        />
        <BookOpen
          className="absolute bottom-20 -left-16 h-80 w-80 text-primary-foreground/[0.03] -rotate-12"
          strokeWidth={0.5}
          aria-hidden="true"
        />
        <Landmark
          className="absolute top-1/3 left-1/2 h-64 w-64 -translate-x-1/2 text-primary-foreground/[0.02]"
          strokeWidth={0.5}
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-28 text-center">
        <div className="mx-auto max-w-4xl">
          {/* Decorative line */}
          <div className="mx-auto mb-8 h-px w-24 bg-accent" />

          <p className="mb-4 text-sm font-medium tracking-[0.3em] text-accent uppercase">
            Northbrook, Illinois
          </p>

          <h1 className="mb-6 font-serif text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-7xl text-balance">
            Brandwein & Brandwein
            <br />
            <span className="text-accent">Attorneys at Law</span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-primary-foreground/80 text-pretty">
            The Lawyers of Brandwein & Brandwein have represented both individuals
            and businesses in a variety of complex and novel legal issues. We
            develop customized legal plans for our clients consistent with their
            goals and objectives. Our goal is to always provide excellent service
            at a reasonable cost.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#contact"
              className="flex items-center gap-2 rounded-sm bg-accent px-8 py-3.5 text-sm font-semibold tracking-wide text-accent-foreground transition-colors hover:bg-accent/90"
            >
              Contact Us Today
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
              <p className="font-serif text-3xl font-bold text-accent">60+</p>
              <p className="mt-1 text-sm text-primary-foreground/60">Years Combined Experience</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-bold text-accent">CPA</p>
              <p className="mt-1 text-sm text-primary-foreground/60">Certified Public Accountant</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-bold text-accent">IRS</p>
              <p className="mt-1 text-sm text-primary-foreground/60">Former Revenue Agent</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
