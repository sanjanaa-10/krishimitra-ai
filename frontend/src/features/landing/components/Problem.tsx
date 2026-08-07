import { X, TrendingDown } from "lucide-react"

const problems = [
  "Selling at the nearest mandi, even when a better price is 20 km away",
  "No way to know if today's price will rise tomorrow — so farmers guess",
  "Transport and commission costs eating into profit, unaccounted for",
]

export function Problem() {
  return (
    <section className="bg-bg py-24 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
        <div>
          <span className="text-accent text-sm font-semibold tracking-wide uppercase">
            The problem
          </span>
          <h2 className="text-ink text-3xl md:text-4xl font-semibold tracking-tight mt-3 leading-tight">
            Farmers lose money before they even reach the market.
          </h2>
          <p className="text-muted mt-5 leading-relaxed">
            Selling decisions are still made on habit and guesswork — not
            data. That gap costs real money, every single harvest.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-black/5 shadow-sm p-2">
          {problems.map((p, i) => (
            <div
              key={p}
              className={`flex items-start gap-4 p-5 ${
                i !== problems.length - 1 ? "border-b border-black/5" : ""
              }`}
            >
              <div className="h-8 w-8 rounded-lg bg-red-50 flex items-center justify-center shrink-0 mt-0.5">
                <X className="h-4 w-4 text-red-500" strokeWidth={2} />
              </div>
              <p className="text-ink text-[15px] leading-relaxed pt-1">{p}</p>
            </div>
          ))}
          <div className="flex items-center gap-3 p-5 bg-accent-light rounded-xl mt-1">
            <TrendingDown className="h-5 w-5 text-accent shrink-0" />
            <p className="text-sm text-ink">
              <span className="font-mono font-bold">Up to 15%</span> of potential
              profit is lost this way, per harvest cycle.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}