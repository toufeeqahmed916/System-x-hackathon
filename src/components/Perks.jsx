import Reveal from "./Reveal";

const PERKS = [
  { icon: <img src="/images/img1.png" />, label: "Refreshments" },
  { icon: <img src="/images/img2.png" />, label: "Gifts & Goodies" },
  { icon: <img src="/images/img3.png" />, label: "Team Cards" },
  { icon: <img src="/images/img4.png" />, label: "Challenge Booklet" },
  { icon: <img src="/images/img5.png" />, label: "Certificates" },
];

export default function Perks() {
  return (
    <section className="border-b-[3px] border-lime">
      <div className="px-mobile-margin md:px-desktop-margin py-16 md:py-24 max-w-7xl mx-auto">
        <Reveal>
          <span className="eyebrow">// perks &amp; gear</span>
          <h2 className="section-title mt-3 mb-10 md:mb-14">What you get</h2>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-5">
          {PERKS.map((perk, i) => (
            <Reveal key={perk.label} delay={i * 0.06} className={i === 4 ? "col-span-2 md:col-span-1" : ""}>
              <div className="h-full border-[3px] border-lime/60 hover:border-lime bg-surface p-5 md:p-6 flex flex-col items-center justify-center gap-3 text-center transition-colors brutal-shadow hover:!shadow-[6px_6px_0_0_#C6FF00]">
                <span className="text-3xl md:text-4xl" aria-hidden>
                  {perk.icon}
                </span>
                <span className="font-mono text-xs md:text-sm uppercase tracking-wide text-white/90">
                  {perk.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
