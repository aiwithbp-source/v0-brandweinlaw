import Image from "next/image"

const attorneys = [
  {
    name: "James R. Hartwell, Esq.",
    title: "Managing Partner & CPA",
    image: "/images/attorney-hartwell.jpg",
    credentials: ["J.D., Columbia Law School", "CPA, New York State", "LL.M. in Taxation, NYU"],
    bio: "With over 35 years of experience, James brings a rare combination of legal and accounting expertise to estate planning. He has structured trusts and estate plans protecting more than $2 billion in family assets. James is a Fellow of the American College of Trust and Estate Counsel (ACTEC).",
  },
  {
    name: "William T. Prescott, Esq.",
    title: "Senior Partner",
    image: "/images/attorney-prescott.jpg",
    credentials: ["J.D., Georgetown Law", "LL.M. in Estate Planning, University of Miami", "Board Certified, Estate Planning & Probate"],
    bio: "William is recognized as one of the foremost authorities on trust litigation and complex estate administration. He regularly advises high-net-worth families on multi-generational wealth transfer strategies and has been named to the Best Lawyers in America list for 12 consecutive years.",
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
            Two distinguished professionals whose combined expertise in law and
            accounting delivers unparalleled estate planning counsel.
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

                  <ul className="mt-4 flex flex-col gap-1">
                    {attorney.credentials.map((cred) => (
                      <li
                        key={cred}
                        className="text-xs text-primary-foreground/60"
                      >
                        {cred}
                      </li>
                    ))}
                  </ul>

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
