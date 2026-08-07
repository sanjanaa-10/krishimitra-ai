import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  { q: "Is KrishiMitra AI free to use?", a: "Yes, the core market comparison and recommendation features are free for all farmers." },
  { q: "Which crops are currently supported?", a: "Tomato, onion, potato, rice, wheat, and maize — with more crops being added." },
  { q: "How accurate is the price data?", a: "We pull from historical mandi price records and update recommendations regularly to reflect current conditions." },
  { q: "Do I need internet access to use this?", a: "Yes, an internet connection is needed to fetch live prices and generate recommendations." },
]

export function Faq() {
  return (
    <section id="faq" className="bg-bg py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-accent text-sm font-semibold tracking-wide uppercase">
            FAQ
          </span>
          <h2 className="text-ink text-3xl md:text-4xl font-semibold tracking-tight mt-3">
            Common questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="bg-white rounded-2xl border border-black/5 px-2">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-black/5">
              <AccordionTrigger className="text-ink text-[15px] font-medium px-4">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted px-4">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}