import Link from "next/link"

const footerLinks = {
  "Practice Areas": [
    { label: "Estate Planning", href: "#practice-areas" },
    { label: "Estate Administration", href: "#practice-areas" },
    { label: "Tax Law", href: "#practice-areas" },
    { label: "Real Estate", href: "#practice-areas" },
    { label: "Corporate Law", href: "#practice-areas" },
  ],
  "The Firm": [
    { label: "Our Attorneys", href: "#attorneys" },
    { label: "Latest Updates", href: "#updates" },
    { label: "Contact Us", href: "#contact" },
  ],
  "Resources": [
    { label: "IRS", href: "https://www.irs.gov" },
    { label: "Illinois Tax", href: "https://tax.illinois.gov" },
  ],
}

export function SiteFooter() {
  return (
    <footer className="bg-primary">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold tracking-wide text-primary-foreground">
                Brandwein & Brandwein
              </span>
              <span className="mt-1 text-xs tracking-[0.25em] text-accent uppercase">
                Attorneys at Law
              </span>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-primary-foreground/60">
              The Lawyers of Brandwein & Brandwein have represented both individuals
              and businesses in a variety of complex and novel legal issues. We
              develop customized legal plans consistent with our clients{"'"} goals
              and objectives.
            </p>
            <div className="mt-6 text-sm text-primary-foreground/60">
              <p>1707 Shermer Rd, Suite 126</p>
              <p>Northbrook, IL 60062</p>
              <p className="mt-2">
                Phone:{" "}
                <a href="tel:8475099200" className="text-accent hover:underline">
                  (847) 509-9200
                </a>
              </p>
              <p>Fax: (847) 509-9207</p>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="mb-4 text-xs font-semibold tracking-[0.2em] text-accent uppercase">
                {heading}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-8 md:flex-row">
          <p className="text-xs text-primary-foreground/40">
            {new Date().getFullYear()} Brandwein & Brandwein. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="#"
              className="text-xs text-primary-foreground/40 transition-colors hover:text-primary-foreground/70"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-xs text-primary-foreground/40 transition-colors hover:text-primary-foreground/70"
            >
              Disclaimer
            </Link>
          </div>
        </div>

        {/* Legal disclaimer */}
        <p className="mt-6 text-center text-[10px] leading-relaxed text-primary-foreground/30">
          Attorney Advertising. Prior results do not guarantee a similar
          outcome. This website is for informational purposes only and does not
          constitute legal advice. An attorney-client relationship is not formed
          by visiting this site or sending us an inquiry.
        </p>
      </div>
    </footer>
  )
}
