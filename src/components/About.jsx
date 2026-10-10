import Reveal from "./Reveal";
import Section from "./Section";
import { EVENT } from "../config/event";

const FACTS = [
  ["Date", `${EVENT.dateLabel} & 5th October`],
  ["Venue", EVENT.venue],
  ["Format", `${EVENT.durationHours} hours, one challenge`],
  ["Teams", `${EVENT.teamSize} members, AI tools allowed`],
  ["Judging", "Top 5 presented live, top 3 awarded"],
];

const PERKS = [
  ["Refreshments", "/images/img1.png"],
  ["Gifts and goodies", "/images/img2.png"],
  ["Team cards", "/images/img3.png"],
  ["Challenge booklet", "/images/img4.png"],
  ["Certificates", "/images/img5.png"],
];

export default function About() {
  return (
    <Section id="about" label="About" title="What was System X Hackathon 1.0?" tone="alt">
      <div className="grid gap-10 md:grid-cols-2 md:gap-16">
        <Reveal>
          <p className="text-lg leading-relaxed text-white/80">
            {EVENT.name} was a {EVENT.durationHours}-hour build sprint hosted by {EVENT.organizer}{" "}
            at MUET Jamshoro. Teams of {EVENT.teamSize} received one challenge, worked against the
            clock with AI tools allowed, and were judged on what they built. Five teams presented
            to the panel and three took the prizes.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <dl className="border-t border-white/15">
            {FACTS.map(([term, value]) => (
              <div
                key={term}
                className="grid grid-cols-[6rem_1fr] gap-4 border-b border-white/15 py-4"
              >
                <dt className="font-mono text-xs uppercase tracking-widest text-white/60">{term}</dt>
                <dd className="text-white">{value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      <Reveal className="mt-12 md:mt-16">
        <h3 className="font-display text-xl font-bold uppercase tracking-tight md:text-2xl">
          Every participant received
        </h3>
        <ul className="mt-5 flex flex-wrap gap-3">
          {PERKS.map(([label, icon]) => (
            <li key={label} className="flex items-center gap-3 border border-white/15 bg-background px-4 py-3">
              <img src={icon} alt="" width="32" height="32" loading="lazy" className="h-8 w-8 object-contain" />
              <span className="font-mono text-xs uppercase tracking-wide text-white/90 md:text-sm">{label}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
