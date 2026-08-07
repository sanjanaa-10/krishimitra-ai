import { Sprout } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-ink text-white/70 py-12 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-lg bg-primary flex items-center justify-center">
            <Sprout className="h-4 w-4 text-white" />
          </div>
          <span className="text-white font-semibold text-sm">KrishiMitra AI</span>
        </div>
        <p className="text-xs text-white/40">
          © 2026 KrishiMitra AI. Built to help farmers sell smarter.
        </p>
      </div>
    </footer>
  )
}