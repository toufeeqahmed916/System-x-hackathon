import Reveal from "./Reveal";
import Section from "./Section";
import { WINNERS } from "../config/event";

function Photo({ winner, className = "" }) {
  return (
    <div className={`relative overflow-hidden bg-surface ${className}`}>
      <img
        src={winner.photo}
        alt={`${winner.teamName} receiving ${winner.place} at System X Hackathon 1.0`}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: winner.photoPosition || "50% 50%" }}
      />
    </div>
  );
}

function Details({ winner, featured }) {
  return (
    <div className="flex flex-1 flex-col gap-4 p-5 md:p-7">
      <div>
        <p
          className={`inline-block px-2 py-1 font-mono text-xs font-bold uppercase tracking-widest ${
            featured ? "bg-lime text-black" : "border border-white/30 text-white/80"
          }`}
        >
          {winner.place}
        </p>
        <h3
          className={`mt-3 font-display font-bold uppercase leading-none tracking-tight ${
            featured ? "text-3xl md:text-4xl" : "text-2xl"
          }`}
        >
          {winner.teamName}
        </h3>
        <p className="mt-2 font-mono text-sm font-bold text-lime">{winner.prize}</p>
      </div>

      <ul className="flex flex-wrap gap-x-5 gap-y-1 font-mono text-sm text-white/75">
        {winner.members.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>

      {winner.demoUrl && (
        <a
          href={winner.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open the ${winner.teamName} live demo (opens in a new tab)`}
          className="btn-secondary mt-auto !min-h-[40px] self-start !px-4 !py-2 !text-sm"
        >
          Live demo ↗
        </a>
      )}
    </div>
  );
}

export default function Winners() {
  const [first, ...others] = WINNERS;

  return (
    <Section id="winners" label="Results" title="Top 3 teams">
      <div className="grid gap-6 md:gap-8">
        <Reveal>
          <article
            className="grid border-2 border-lime bg-black md:grid-cols-5"
            style={{ boxShadow: "8px 8px 0 0 #C6FF00" }}
          >
            <Photo winner={first} className="aspect-[16/10] md:col-span-3 md:aspect-auto md:min-h-[380px]" />
            <div className="flex md:col-span-2">
              <Details winner={first} featured />
            </div>
          </article>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {others.map((winner, i) => (
            <Reveal key={winner.teamName} delay={i * 0.08}>
              <article className="flex h-full flex-col border-2 border-white/15 bg-surface transition-colors hover:border-lime">
                <Photo winner={winner} className="aspect-[16/10]" />
                <Details winner={winner} />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
