import { CTASection } from "@/components/cta-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { PlansCatalog } from "@/components/plans-catalog"
import { mentalSurprisePlans, surprisePlans } from "../constants/surpreenda-plans"
import { Hero } from "./components/hero"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <PlansCatalog plans={surprisePlans} />
      <CTASection plans={mentalSurprisePlans} />
      <FAQSection />
      <Footer />
    </main>
  )
}
