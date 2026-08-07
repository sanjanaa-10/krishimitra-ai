import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

const markets = [
  { name: "Kolar Mandi", price: "1,840", best: false },
  { name: "Chintamani Mandi", price: "2,120", best: true },
  { name: "Bangarpet Mandi", price: "1,760", best: false },
]

const stats = [
  { value: "12+", label: "markets compared" },
  { value: "₹1,200", label: "avg. saved per quintal" },
  { value: "6", label: "crops supported" },
]

export function Hero() {
  return (
    <section
      className="relative bg-bg pt-16 pb-24 px-6 overflow-hidden"
      style={{
        backgroundImage:
          "repeating-linear-gradient(to bottom, transparent, transparent 27px, rgba(46,125,50,0.06) 28px)",
      }}
    >
      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-14 items-center">
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-primary-light text-primary-dark text-sm font-medium px-4 py-1.5 rounded-full mb-7 border border-primary/10"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              AI Decision Support for Farmers
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-ink text-6xl md:text-7xl font-semibold tracking-tight leading-[1.02]"
            >
              Sell where the{" "}
              <span className="relative inline-block">
                money is
                <svg
                  className="absolute left-0 -bottom-1 w-full"
                  height="10"
                  viewBox="0 0 200 10"
                  preserveAspectRatio="none"
                >
                  <path d="M0,7 Q50,2 100,6 T200,5" stroke="#F59E0B" strokeWidth="5" fill="none" strokeLinecap="round" />
                </svg>
              </span>
              , not just the nearest mandi.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted text-lg mt-7 max-w-lg leading-relaxed"
            >
              KrishiMitra AI compares nearby markets, transport costs, weather,
              and price history — then tells you the one decision that
              matters: sell now, or wait.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-3 mt-9"
            >
              <Button
                size="lg"
                className="bg-primary hover:bg-primary-dark text-white rounded-full px-6 shadow-lg shadow-primary/25"
                onClick={() =>
                  document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Analyze My Crop <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-6 border-black/10 text-ink hover:bg-black/5"
                onClick={() =>
                  document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                See How It Works
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-8 mt-12 pt-8 border-t border-black/10"
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-mono text-2xl font-bold text-accent">{s.value}</div>
                  <div className="text-xs text-muted mt-0.5">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24, rotate: -2 }}
            animate={{ opacity: 1, y: 0, rotate: -2 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/10 rounded-2xl rotate-3 translate-x-3 translate-y-3" />

            <div className="relative bg-white rounded-2xl border border-black/5 shadow-[0_30px_70px_-24px_rgba(46,125,50,0.35)] p-6">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2 text-sm text-muted">
                  <MapPin className="h-4 w-4 text-primary" />
                  Tomato · 500 kg
                </div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-primary-dark bg-primary-light px-2.5 py-1 rounded-full">
                  <TrendingUp className="h-3 w-3" />
                  SELL NOW
                </div>
              </div>

              <div className="space-y-2.5">
                {markets.map((m) => (
                  <div
                    key={m.name}
                    className={`rounded-lg p-3.5 flex items-center justify-between ${
                      m.best ? "bg-primary text-white" : "bg-bg"
                    }`}
                  >
                    <span className={`text-sm font-medium ${m.best ? "text-white" : "text-ink"}`}>
                      {m.name}
                    </span>
                    <span className={`font-mono text-lg font-bold ${m.best ? "text-white" : "text-ink"}`}>
                      ₹{m.price}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-black/5 flex items-center justify-between">
                <span className="text-xs text-muted">Expected profit vs. nearest market</span>
                <span className="font-mono text-sm font-bold text-primary">+₹18,000</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}