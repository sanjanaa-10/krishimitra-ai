import { TrendingUp, MapPin, CloudSun, ArrowUpRight } from "lucide-react"

export function DashboardPreview() {
  return (
    <section className="bg-bg py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-accent text-sm font-semibold tracking-wide uppercase">
            See it in action
          </span>
          <h2 className="text-ink text-3xl md:text-4xl font-semibold tracking-tight mt-3">
            Your dashboard, built for one decision
          </h2>
        </div>

        <div className="bg-white rounded-2xl border border-black/5 shadow-[0_30px_70px_-24px_rgba(46,125,50,0.25)] p-6 md:p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="rounded-xl bg-bg p-4 border-l-4 border-l-primary">
              <div className="text-xs text-muted mb-1">Today's Price</div>
              <div className="font-mono text-xl font-bold text-ink">₹2,120</div>
            </div>
            <div className="rounded-xl bg-bg p-4 border-l-4 border-l-primary">
              <div className="text-xs text-muted mb-1">Best Market</div>
              <div className="text-lg font-semibold text-ink">Chintamani</div>
            </div>
            <div className="rounded-xl bg-bg p-4 border-l-4 border-l-accent">
              <div className="text-xs text-muted mb-1">Expected Profit</div>
              <div className="font-mono text-xl font-bold text-accent">+₹18,000</div>
            </div>
            <div className="rounded-xl bg-bg p-4 border-l-4 border-l-primary">
              <div className="text-xs text-muted mb-1">Weather Risk</div>
              <div className="text-lg font-semibold text-primary flex items-center gap-1">
                <CloudSun className="h-4 w-4" /> Low
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-primary text-white p-6 flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 text-sm text-white/70 mb-1">
                <TrendingUp className="h-4 w-4" />
                AI Recommendation
              </div>
              <div className="text-2xl font-semibold">Sell Now at Chintamani Mandi</div>
              <div className="text-sm text-white/70 mt-1 flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5" /> 18 km away · 94% confidence
              </div>
            </div>
            <ArrowUpRight className="h-8 w-8 text-white/40" />
          </div>
        </div>
      </div>
    </section>
  )
}