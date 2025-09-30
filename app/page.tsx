import { ComparisonSection } from "@/components/comparison-section"
import { FeaturesSection } from "@/components/features-section"
import { FiltersSection } from "@/components/filters-section"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { PlansCatalog } from "@/components/plans-catalog"
import { StatsSection } from "@/components/stats-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <FiltersSection />
      <PlansCatalog />
      <ComparisonSection />
      <NewsletterSignup />
    </main>
  )
}
