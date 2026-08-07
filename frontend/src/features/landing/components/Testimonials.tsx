const testimonials = [
  { name: "Ramesh Gowda", location: "Kolar District", crop: "Tomato Farmer", quote: "I used to sell at the same mandi every week out of habit. This showed me I was leaving money on the table." },
  { name: "Lakshmi Devi", location: "Chikkaballapur", crop: "Onion Farmer", quote: "The wait-or-sell call saved me during a price dip last season. Simple, and it just works." },
  { name: "Suresh Reddy", location: "Bangarpet", crop: "Rice Farmer", quote: "Finally something that accounts for transport cost, not just the sticker price at the market." },
]

export function Testimonials() {
  return (
    <section className="bg-white py-24 px-6 border-y border-black/5">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-accent text-sm font-semibold tracking-wide uppercase">
            Farmers say
          </span>
          <h2 className="text-ink text-3xl md:text-4xl font-semibold tracking-tight mt-3">
            Trusted by growers across Karnataka
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-xl bg-bg p-6 border-l-4 border-l-primary">
              <p className="text-ink text-[15px] leading-relaxed mb-5">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-primary-light flex items-center justify-center text-primary font-semibold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-medium text-ink">{t.name}</div>
                  <div className="text-xs text-muted">{t.crop} · {t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}