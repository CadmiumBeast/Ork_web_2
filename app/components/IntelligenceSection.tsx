const rotatingCards = [
  {
    icon: "👥",
    heading: "High value lapsing",
    status: "183 customers at risk",
    money: "$9.4k to $14.2k",
    categoricalMoney: "recoverable this month",
    paragraphs:
      "Customers who used to buy often and have gone quiet for over their regular time. Perfect for a sharp, respectful winback instead of another broad blast.",
    cta: "Run this winback",
  },
  {
    icon: "⚡",
    heading: "Ready to buy now",
    status: "276 likely buyers",
    money: "$8.1k to $11.7k",
    categoricalMoney: "within 30 days",
    paragraphs:
      "People who browsed in a very similar pattern to those who bought but had strange cut offs. Ideal for a focused SKU lead nudge that feels timely, not spammy.",
    cta: "Run this nudge",
  },
  {
    icon: "👁️",
    heading: "Overlooked buyers",
    status: "7,000 likely buyers",
    money: "$55.5k to $90.8k",
    categoricalMoney: "potential revenue",
    paragraphs:
      "Overlooked customers that aren’t in your chosen segment but have several attributes that relates to the overall campaign and content.",
    cta: "Run this segment",
  },
  {
    icon: "🔕",
    heading: "Over-messaged VIPs",
    status: "94 VIPs on the edge",
    money: "Protect $3.2k",
    categoricalMoney: "in monthly margin",
    paragraphs:
      "Top spenders who have seen too many emails and ads this week. Orkestrate cools them off so they do not unsubscribe.",
    cta: "Apply this guardrail",
  },
  {
    icon: "🛍️",
    heading: "Next best product",
    status: "211 cross sell candidates",
    money: "$6.5k to $9.8k",
    categoricalMoney: "incremental revenue",
    paragraphs:
      "Customers who bought Product A and showed interest in Product B but never finished. Clean, relevant cross sell that feels like a helpful suggestion.",
    cta: "Launch this cross sell",
  },
];

const marqueeCards = [...rotatingCards, ...rotatingCards];

export default function IntelligenceSection() {
  return (
    <section
      id="intelligence-section"
      className="relative z-10 bg-white px-[10%] py-14 text-left"
    >
      <div className="mx-auto w-2/3">
        <h2 className="text-left text-2xl font-extrabold leading-tight text-zinc-900 md:text-5xl">
          Intelligence to
          <br />
          Drive your revenue 24/7
        </h2>
        <p className="mt-6 max-w-3xl text-left text-lg leading-relaxed text-zinc-600/70 md:text-xl">
          Orkestrate reads your orders, site behaviour and campaign data to surface
          where you are leaking revenue and where you can safely push harder.
        </p>

        
      </div>

      <div className="mx-auto mt-8 w-[calc(80%_-_20px)]">
        <div className="overflow-hidden">
          <div className="marquee-track -mx-2 flex gap-0">
            {marqueeCards.map((card, index) => (
              <article
                key={`${card.heading}-${index}`}
                className="w-[300px] shrink-0 px-2 sm:w-[340px]"
              >
                <div className="intel-card-inner group flex h-full flex-col rounded-2xl border border-zinc-200/60 bg-white p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-zinc-300/80 hover:shadow-[0_16px_40px_rgba(15,23,42,0.10)]">
                  <div className="mb-6 flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-100 bg-zinc-50 text-lg shadow-sm">
                        {card.icon}
                      </div>
                      <div>
                        <h3 className="text-[15px] font-semibold leading-snug tracking-tight text-zinc-900">
                          {card.heading}
                        </h3>
                        <div className="mt-1 inline-flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          <span className="text-xs font-medium tracking-wide text-zinc-400">
                            {card.status}
                          </span>
                        </div>
                      </div>
                    </div>

                    <span className="mt-0.5 select-none text-base text-zinc-300 transition-colors duration-200 group-hover:text-zinc-500">
                      ↗
                    </span>
                  </div>

                  <div className="mb-5 rounded-xl border border-zinc-100/80 bg-zinc-50 px-4 py-4">
                    <p className="text-[26px] font-bold leading-none tracking-tight text-zinc-900">
                      {card.money}
                    </p>
                    <p className="mt-1.5 text-xs font-medium uppercase tracking-widest text-zinc-400">
                      {card.categoricalMoney}
                    </p>
                  </div>

                  <p className="mb-6 flex-1 text-[13px] leading-relaxed text-zinc-500">
                    {card.paragraphs}
                  </p>

                  <button className="cta-btn flex w-full items-center justify-between rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-2.5 text-sm font-semibold text-zinc-700 transition-all duration-200 hover:border-zinc-900 hover:bg-zinc-900 hover:text-white">
                    <span>{card.cta}</span>
                    <span className="text-xs">→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
        <div className="mx-auto mt-8 w-fit text-center">
          <button
            type="button"
            className="rounded-[11px] bg-gradient-to-r from-[#E0422D] via-[#EB5825] to-[#C63804] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-95"
          >
            Connect and try our intelligence layer FOR FREE
          </button>
          <p className="mt-3 text-sm text-zinc-500 md:text-base">
            All numbers update from your live data once you connect.
          </p>
        </div>
    </section>
  );
}