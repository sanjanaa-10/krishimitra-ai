import {
  GitCompare,
  Calculator,
  CloudSun,
  LineChart,
  History,
  FileDown,
} from "lucide-react"

const features = [
  { icon: GitCompare, title: "Market Comparison", desc: "See every nearby market's price side by side, ranked by net profit.", accent: false },
  { icon: Calculator, title: "Profit Calculator", desc: "Factor in transport and commission to see what you'll actually take home.", accent: true },
  { icon: CloudSun, title: "Weather Insights", desc: "Know if weather risk should push you to sell sooner rather than wait.", accent: false },
  { icon: LineChart, title: "Price Trends", desc: "Track how prices have moved over the past weeks for your crop.", accent: true },
  { icon: History, title: "Farmer History", desc: "Keep a record of past sales to spot your own best-performing markets.", accent: false },
  { icon: FileDown, title: "PDF Reports", desc: "Download a clean report to share or keep for your own records.", accent: true },
]

export function Features() {
  return (
    <section id="features" className="bg-white py-24 px-6 border-y border-black/5">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold tracking-wide uppercase">
            Features
          </span>
          <h2 className="text-ink text-3xl md:text-4xl font-semibold tracking-tight mt-3">
            Everything you need to decide with confidence
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className={`rounded-xl bg-bg p-6 border-l-4 ${
                f.accent ? "border-l-accent" : "border-l-primary"
              }`}
            >
              <div
                className={`h-11 w-11 rounded-xl flex items-center justify-center mb-4 ${
                  f.accent ? "bg-accent-light" : "bg-primary-light"
                }`}
              >
                <f.icon
                  className={`h-5 w-5 ${f.accent ? "text-accent" : "text-primary"}`}
                  strokeWidth={1.75}
                />
              </div>
              <h3 className="text-ink font-medium mb-1.5">{f.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}