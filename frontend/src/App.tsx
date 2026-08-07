import { Navbar } from "@/features/landing/components/Navbar"
import { MandiTicker } from "@/features/landing/components/MandiTicker"
import { Hero } from "@/features/landing/components/Hero"
import { Problem } from "@/features/landing/components/Problem"
import { HowItWorks } from "@/features/landing/components/HowItWorks"
import { Features } from "@/features/landing/components/Features"
import { DashboardPreview } from "@/features/landing/components/DashboardPreview"
import { Testimonials } from "@/features/landing/components/Testimonials"
import { Faq } from "@/features/landing/components/Faq"
import { Footer } from "@/features/landing/components/Footer"

function App() {
  return (
    <div className="bg-bg min-h-screen">
      <Navbar />
      <MandiTicker />
      <Hero />
      <Problem />
      <HowItWorks />
      <Features />
      <DashboardPreview />
      <Testimonials />
      <Faq />
      <Footer />
    </div>
  )
}

export default App