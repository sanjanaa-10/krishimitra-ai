import { Sprout, ClipboardList, MapPinned, Sparkles } from "lucide-react"

const steps = [
  { icon: Sprout, title: "Select your crop", desc: "Tomato, onion, potato, rice, wheat, or maize." },
  { icon: ClipboardList, title: "Enter quantity", desc: "How much you're bringing to market, in quintals or kg." },
  { icon: MapPinned, title: "Choose your district", desc: "We find every market within reach of you." },
  { icon: Sparkles, title: "Get your recommendation", desc: "Best market, expected profit, and sell-now-or-wait." },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-24 px-6 border-y border-black/5">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold tracking-wide uppercase">
            How it works
          </span>
          <h2 className="text-ink text-3xl md:text-4xl font-semibold tracking-tight mt-3">
            Four steps to a better selling decision
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={step.title} className="relative">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-mono text-accent font-semibold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="h-px flex-1 bg-black/10" />
              </div>
              <div className="h-11 w-11 rounded-xl bg-primary-light flex items-center justify-center mb-4">
                <step.icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
              </div>
              <h3 className="text-ink font-medium mb-1.5">{step.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}