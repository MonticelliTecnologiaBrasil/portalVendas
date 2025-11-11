import { CTASection } from "@/components/cta-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { PlansCatalog } from "@/components/plans-catalog"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      {/* <StatsSection /> */}
      {/* <FeaturesSection /> */}
      {/* <FiltersSection /> */}
      <PlansCatalog />
      <CTASection />
      {/* <ComparisonSection /> */}
      {/* <NewsletterSignup /> */}
      <FAQSection />
      <Footer />
    </main>
  )
}
