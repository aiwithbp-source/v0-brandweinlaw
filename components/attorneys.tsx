import Image from "next/image"

const attorneys = [
  {
    name: "Richard E. Brandwein",
    title: "Partner, Attorney & CPA",
    image: "/images/attorney-hartwell.jpg",
    education: [
      "Roosevelt University, Graduated 1962",
      "John Marshall Law School, Graduated 1966",
      "Illinois Attorney",
      "Certified Public Accountant",
    ],
    professional: [
      "Member, Chicago Bar Association",
      "Member, American Bar Association",
      "Admitted, U.S. Tax Court",
      "Partner, Brandwein & Brandwein",
    ],
    bio: "Internal Revenue Agent (Income/Estate Tax) from 1962 to 1966. Since 1967, in private practice concentrated in estate planning, succession planning for business owners, IRS controversies, probate matters, commercial transactions and real estate transactions.",
  },
  {
    name: "Michael W. Brandwein",
    title: "Partner, Attorney",
    image: "/images/attorney-prescott.jpg",
    education: [
      "University of Iowa, 1992, B.S. in Business",
      "Chicago-Kent School of Law, Graduated 1996",
    ],
    professional: [
      "Member, Chicago Bar Association",
      "Member, American Bar Association",
      "Partner, Brandwein & Brandwein",
    ],
    bio: "In private practice concentrated in estate planning, succession planning for business owners, IRS controversies, probate matters, commercial transactions and real estate transactions.",
  },
]

export function Attorneys() {
  return (
    <section id="attorneys" className="bg-primary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium tracking-[0.25em] text-accent uppercase">
            Our Partners
          </p>
          <h2 className="mb-4 font-serif text-3xl font-bold text-primary-foreground md:text-4xl lg:text-5xl text-balance">
            Meet Our Attorneys
          </h2>
          <div className="mx-auto mb-6 h-px w-16 bg-accent" />
          <p className="text-base leading-relaxed text-primary-foreground/70 text-pretty">
            We strive to maintain the trust we build with each client by combining
            our experience, expertise, and innovative solutions to achieve results
            that exceed client expectations.
          </p>
        </div>

        {/* Attorney cards */}
        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2">
          {attorneys.map((attorney) => (
            <div
              key={attorney.name}
              className="overflow-hidden rounded-sm border border-primary-foreground/10 bg-primary-foreground/5"
            >
              <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div className="relative h-72 w-full shrink-0 md:h-auto md:w-56">
                  <Image
                    src={attorney.image || "/placeholder.svg"}
                    alt={`Portrait of ${attorney.name}`}
                    fill
                    className="object-cover object-top"
                  />
                </div>

                {/* Info */}
                <div className="flex flex-col p-6 lg:p-8">
                  <h3 className="font-serif text-xl font-bold text-primary-foreground">
                    {attorney.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-accent">
                    {attorney.title}
                  </p>

                  <div className="mt-4">
                    <p className="mb-1.5 text-xs font-semibold tracking-wide text-primary-foreground/50 uppercase">
                      Education
                    </p>
                    <ul className="flex flex-col gap-1">
                      {attorney.education.map((item) => (
                        <li
                          key={item}
                          className="text-xs text-primary-foreground/60"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-3">
                    <p className="mb-1.5 text-xs font-semibold tracking-wide text-primary-foreground/50 uppercase">
                      Professional
                    </p>
                    <ul className="flex flex-col gap-1">
                      {attorney.professional.map((item) => (
                        <li
                          key={item}
                          className="text-xs text-primary-foreground/60"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
                    {attorney.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
