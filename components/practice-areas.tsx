import { FileText, Shield, Building2, Calculator, Scale, BookOpen } from "lucide-react"

const practices = [
  {
    icon: FileText,
    title: "Estate Planning",
    description:
      "Comprehensive estate plans including wills, powers of attorney, and healthcare directives tailored to your unique situation and goals.",
  },
  {
    icon: Shield,
    title: "Trust Administration",
    description:
      "Expert trust creation and administration including revocable living trusts, irrevocable trusts, and special needs trusts.",
  },
  {
    icon: Building2,
    title: "Probate & Estate Settlement",
    description:
      "Guiding families through the probate process with efficiency and compassion, minimizing delays and disputes.",
  },
  {
    icon: Calculator,
    title: "Tax Planning & CPA Services",
    description:
      "Strategic tax planning integrated with estate strategies. Full CPA services including estate tax returns, gift tax filings, and fiduciary accounting.",
  },
  {
    icon: Scale,
    title: "Asset Protection",
    description:
      "Structuring your assets to shield them from creditors, lawsuits, and future uncertainties while preserving family wealth.",
  },
  {
    icon: BookOpen,
    title: "Charitable Giving",
    description:
      "Designing charitable trusts, foundations, and donor-advised funds that maximize your philanthropic impact and tax benefits.",
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
            solutions that protect your estate from every angle.
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
