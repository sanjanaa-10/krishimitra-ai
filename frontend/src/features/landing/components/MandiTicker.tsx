const rates = [
  { crop: "Tomato", market: "Chintamani", price: "₹2,120", unit: "/qtl", up: true },
  { crop: "Onion", market: "Kolar", price: "₹1,650", unit: "/qtl", up: false },
  { crop: "Potato", market: "Malur", price: "₹1,340", unit: "/qtl", up: true },
  { crop: "Rice", market: "Bangarpet", price: "₹3,210", unit: "/qtl", up: true },
  { crop: "Wheat", market: "Chikkaballapur", price: "₹2,480", unit: "/qtl", up: false },
  { crop: "Maize", market: "Kolar", price: "₹1,980", unit: "/qtl", up: true },
]

export function MandiTicker() {
  const loop = [...rates, ...rates]
  return (
    <div className="bg-ink text-white/90 overflow-hidden border-b border-white/10">
      <div className="flex items-center gap-8 py-2.5 animate-[ticker_32s_linear_infinite] w-max">
        {loop.map((r, i) => (
          <div key={i} className="flex items-center gap-2 text-xs whitespace-nowrap px-2">
            <span className="text-white/50 font-medium">{r.crop}</span>
            <span className="text-white/30">·</span>
            <span className="text-white/50">{r.market}</span>
            <span className="font-mono font-semibold text-white">
              {r.price}
              <span className="text-white/40 font-normal">{r.unit}</span>
            </span>
            <span className={r.up ? "text-primary" : "text-accent"}>
              {r.up ? "▲" : "▼"}
            </span>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}