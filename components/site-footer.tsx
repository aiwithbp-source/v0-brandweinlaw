import Link from "next/link"

const footerLinks = {
  "Practice Areas": [
    { label: "Estate Planning", href: "#practice-areas" },
    { label: "Trust Administration", href: "#practice-areas" },
    { label: "Probate & Settlement", href: "#practice-areas" },
    { label: "Tax Planning & CPA", href: "#practice-areas" },
    { label: "Asset Protection", href: "#practice-areas" },
    { label: "Charitable Giving", href: "#practice-areas" },
  ],
  "The Firm": [
    { label: "Our Attorneys", href: "#attorneys" },
    { label: "Latest Updates", href: "#updates" },
    { label: "Contact Us", href: "#contact" },
  ],
}

export function SiteFooter() {
  return (
    <footer className="bg-primary">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold tracking-wide text-primary-foreground">
                Hartwell & Prescott
              </span>
              <span className="mt-1 text-xs tracking-[0.25em] text-accent uppercase">
                Attorneys at Law & CPA
              </span>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-primary-foreground/60">
              For nearly four decades, Hartwell & Prescott has provided
              distinguished estate planning, trust, and CPA services to
              families and individuals throughout the New York metropolitan area.
            </p>
            <div className="mt-6 text-sm text-primary-foreground/60">
              <p>420 Park Avenue, Suite 1800</p>
              <p>New York, NY 10022</p>
              <p className="mt-2">(212) 555-0140</p>
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
            {new Date().getFullYear()} Hartwell & Prescott LLP. All rights
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
              Terms of Service
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
