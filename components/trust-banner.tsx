import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Hartwell & Prescott structured our family trust with extraordinary care. Their integrated approach to law and tax saved us significantly and gave us complete peace of mind.",
    author: "Margaret L. Whitfield",
    role: "Client since 2004",
  },
  {
    quote:
      "When my husband passed, James and William handled the entire estate settlement with professionalism and genuine compassion. I cannot imagine going through that process without them.",
    author: "Catherine R. Sterling",
    role: "Client since 2011",
  },
]

export function TrustBanner() {
  return (
    <section className="bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium tracking-[0.25em] text-accent uppercase">
            Client Testimonials
          </p>
          <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            Trusted by Families Across New York
          </h2>
          <div className="mx-auto mb-6 h-px w-16 bg-accent" />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {testimonials.map((t) => (
            <blockquote
              key={t.author}
              className="rounded-sm border border-border bg-background p-8"
            >
              <Quote className="mb-4 h-6 w-6 text-accent/40" />
              <p className="mb-6 text-base leading-relaxed text-foreground italic">
                {`"${t.quote}"`}
              </p>
              <footer>
                <cite className="not-italic">
                  <span className="block font-serif text-sm font-semibold text-foreground">
                    {t.author}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {t.role}
                  </span>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>

        {/* Memberships bar */}
        <div className="mt-16 flex flex-col items-center gap-6 border-t border-border pt-10 text-center">
          <p className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
            Professional Affiliations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm text-muted-foreground">
            <span>American College of Trust & Estate Counsel</span>
            <span className="hidden text-border md:inline">|</span>
            <span>New York State Bar Association</span>
            <span className="hidden text-border md:inline">|</span>
            <span>AICPA</span>
            <span className="hidden text-border md:inline">|</span>
            <span>National Academy of Elder Law Attorneys</span>
          </div>
        </div>
      </div>
    </section>
  )
}
