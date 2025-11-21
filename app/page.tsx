import { CTASection } from "@/components/cta-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { PlansCatalog } from "@/components/plans-catalog"
import { mentalPlans, plans } from "./constants/plans"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <PlansCatalog plans={plans} />
      <CTASection plans={mentalPlans} />
      <FAQSection />
      <Footer />
    </main>
  )
}
