import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { PracticeAreas } from "@/components/practice-areas"
import { Attorneys } from "@/components/attorneys"
import { TrustBanner } from "@/components/trust-banner"
import { EstateUpdates } from "@/components/estate-updates"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main>
      <Navigation />
      <Hero />
      <PracticeAreas />
      <TrustBanner />
      <Attorneys />
      <EstateUpdates />
      <ContactSection />
      <SiteFooter />
    </main>
  )
}
