import Reveal from "./Reveal";
import { WINNERS } from "../config/event";

function WinnerCard({ winner, featured }) {
  return (
    <div
      className={`flex flex-col gap-4 p-5 md:p-6 border-[3px] h-full ${
        featured ? "bg-black border-lime md:-translate-y-4" : "bg-surface border-lime/50"
      }`}
      style={{
        boxShadow: featured ? "8px 8px 0 0 #C6FF00" : "6px 6px 0 0 rgba(198,255,0,0.4)",
      }}
    >
      <div className="aspect-[4/3] w-full overflow-hidden border-[3px] border-lime/40 bg-black">
        <img
          src={winner.photo}
          alt={`${winner.teamName} receiving ${winner.place}`}
          className="w-full h-full object-cover"
        />
      </div>

      <div>
        <div className="flex items-center gap-2">
          {featured && <span className="text-xl">🏆</span>}
          <span
            className={`font-mono text-xs tracking-widest uppercase ${
              featured ? "text-lime" : "text-white/60"
            }`}
          >
            {winner.place}
          </span>
        </div>
        <h3 className="font-display font-bold text-xl md:text-2xl uppercase mt-1">
          {winner.teamName}
        </h3>
        <p className="font-mono font-bold text-lime text-sm mt-1">{winner.prize}</p>
      </div>

      <ul className="font-mono text-xs md:text-sm text-white/70 space-y-1">
        {winner.members.map((name) => (
          <li key={name}>— {name}</li>
        ))}
      </ul>

      {winner.demoUrl && (
        <a
          href={winner.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary !px-4 !py-2 !text-xs mt-auto self-start"
        >
          View Live Demo →
        </a>
      )}
    </div>
  );
}

export default function Winners() {
  const [first, second, third] = WINNERS;

  return (
    <section id="winners" className="border-b-[3px] border-lime">
      <div className="px-mobile-margin md:px-desktop-margin py-16 md:py-24 max-w-7xl mx-auto">
        <Reveal>
          <span className="eyebrow">// the winners</span>
          <h2 className="section-title mt-3 mb-10 md:mb-14">Top 3 Teams</h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <Reveal delay={0.05} className="order-2 md:order-1">
            <WinnerCard winner={second} />
          </Reveal>
          <Reveal delay={0.15} className="order-1 md:order-2">
            <WinnerCard winner={first} featured />
          </Reveal>
          <Reveal delay={0.1} className="order-3">
            <WinnerCard winner={third} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}