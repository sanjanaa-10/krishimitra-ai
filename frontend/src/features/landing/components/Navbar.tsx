import { Button } from "@/components/ui/button"
import { Sprout } from "lucide-react"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-bg/80 backdrop-blur-md border-b border-black/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <Sprout className="h-4.5 w-4.5 text-white" strokeWidth={2} />
          </div>
          <span className="text-ink font-semibold text-[15px] tracking-tight">
            KrishiMitra AI
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-muted">
          <a href="#how-it-works" className="hover:text-ink transition-colors">How it works</a>
          <a href="#features" className="hover:text-ink transition-colors">Features</a>
          <a href="#faq" className="hover:text-ink transition-colors">FAQ</a>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" className="text-ink hover:bg-black/5 text-sm">
            Log in
          </Button>
          <Button className="bg-primary hover:bg-primary-dark text-white rounded-full text-sm px-5">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  )
}