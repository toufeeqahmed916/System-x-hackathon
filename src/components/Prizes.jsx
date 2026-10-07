import Reveal from "./Reveal";
import { EVENT } from "../config/event";

function PrizeCard({ place, amount, revealed, featured, order }) {
  return (
    <div
      className={`flex flex-col items-center gap-4 p-6 md:p-8 border-[3px] ${
        featured ? "bg-black border-lime md:-translate-y-4" : "bg-surface border-lime/50"
      } ${order}`}
      style={{ boxShadow: featured ? "8px 8px 0 0 #C6FF00" : "6px 6px 0 0 rgba(198,255,0,0.4)" }}
    >
      {featured && <span className="text-4xl">🏆</span>}
      <span
        className={`font-display font-bold uppercase ${
          featured ? "text-2xl md:text-3xl text-lime" : "text-xl md:text-2xl text-white/80"
        }`}
      >
        {place}
      </span>
      <div className="w-full bg-black border-2 border-dashed border-lime/50 p-4 relative overflow-hidden text-center">
        {revealed ? (
          <span className={`font-mono font-bold ${featured ? "text-2xl text-lime" : "text-lg text-white"}`}>
            {amount}
          </span>
        ) : (
          <>
            <span
              className="font-mono uppercase tracking-widest select-none text-white/40"
              style={{ filter: "blur(5px)" }}
              aria-hidden
            >
              Rs. ██,███
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-lime text-black font-mono font-bold text-[11px] md:text-xs px-2.5 py-1 border-2 border-black -rotate-6">
                Reveal Soon
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function Prizes() {
  const { prizes } = EVENT;
  return (
    <section id="prizes" className="border-b-[3px] border-lime">
      <div className="px-mobile-margin md:px-desktop-margin py-16 md:py-24 max-w-7xl mx-auto">
        <Reveal>
          <span className="eyebrow">// bounties</span>
          <h2 className="section-title mt-3 mb-10 md:mb-14">Prizes</h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <Reveal delay={0.05} className="order-2 md:order-1">
            <PrizeCard place="2nd Place" amount={prizes.second} revealed={prizes.revealed} />
          </Reveal>
          <Reveal delay={0.15} className="order-1 md:order-2">
            <PrizeCard place="1st Place" amount={prizes.first} revealed={prizes.revealed} featured />
          </Reveal>
          <Reveal delay={0.1} className="order-3">
            <PrizeCard place="3rd Place" amount={prizes.third} revealed={prizes.revealed} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
