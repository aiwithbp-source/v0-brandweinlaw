import { FileText, Shield, Calculator, Building2, Briefcase } from "lucide-react"

const practices = [
  {
    icon: FileText,
    title: "Estate Planning",
    description:
      "Comprehensive estate plans including wills, powers of attorney, healthcare directives, and succession planning tailored to protect your family and your legacy.",
  },
  {
    icon: Shield,
    title: "Estate Administration",
    description:
      "Guiding families through probate and estate settlement with efficiency and compassion, including trust administration and fiduciary accounting.",
  },
  {
    icon: Calculator,
    title: "Tax Law",
    description:
      "Strategic tax planning integrated with estate strategies. IRS controversy resolution, estate tax returns, gift tax filings, and full CPA services from a former IRS Revenue Agent.",
  },
  {
    icon: Building2,
    title: "Real Estate",
    description:
      "Commercial and residential real estate transactions, including purchase and sale agreements, title review, closings, and real estate investment structuring.",
  },
  {
    icon: Briefcase,
    title: "Corporate Law",
    description:
      "Business formation, succession planning for business owners, commercial transactions, partnership agreements, and corporate governance matters.",
  },
]

export function PracticeAreas() {
  return (
    <section id="practice-areas" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium tracking-[0.25em] text-accent uppercase">
            Our Expertise
          </p>
          <h2 className="mb-4 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance">
            Practice Areas
          </h2>
          <div className="mx-auto mb-6 h-px w-16 bg-accent" />
          <p className="text-base leading-relaxed text-muted-foreground text-pretty">
            With deep knowledge spanning law and accounting, we deliver integrated
            solutions that protect your estate, your business, and your family.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {practices.map((practice) => (
            <div
              key={practice.title}
              className="group rounded-sm border border-border bg-card p-8 transition-all hover:border-accent/40 hover:shadow-lg"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-sm bg-primary text-primary-foreground">
                <practice.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-3 font-serif text-xl font-semibold text-foreground">
                {practice.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {practice.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
