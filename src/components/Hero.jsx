import { EVENT } from "../config/event";

const TICKER = [
  "Hackathon 1.0 completed",
  EVENT.dateLabel,
  `${EVENT.durationHours} hours`,
  `Teams of ${EVENT.teamSize}`,
  "One challenge",
  "MUET Jamshoro",
];

export default function Hero() {
  return (
    <section id="top" className="border-b border-white/10 bg-background">
      <div className="container-x pb-14 pt-12 md:pb-20 md:pt-20">
        <p className="inline-flex animate-fade-up items-center gap-2 border border-lime/60 px-3 py-1.5 font-mono text-xs uppercase tracking-[0.18em] text-lime">
          <span className="h-2 w-2 bg-lime" aria-hidden="true" />
          Event concluded
        </p>

        <p
          className="mt-8 animate-fade-up font-mono text-sm uppercase tracking-[0.18em] text-white/70 md:text-base"
          style={{ animationDelay: "80ms" }}
        >
          {EVENT.organizer} presents
        </p>

        <h1
          className="mt-3 animate-fade-up font-display font-bold uppercase leading-[0.88] tracking-tighter text-lime text-[clamp(2.5rem,16vw,4.5rem)] md:text-[clamp(4.5rem,13vw,7.5rem)] lg:text-[clamp(5rem,10vw,8.5rem)]"
          style={{ animationDelay: "140ms" }}
        >
          <span className="sr-only">System X </span>
          <span className="block lg:inline">Hackathon</span>{" "}
          <span className="block lg:inline">1.0</span>
        </h1>

        <p
          className="mt-6 max-w-xl animate-fade-up text-base leading-relaxed text-white/80 md:text-lg"
          style={{ animationDelay: "200ms" }}
        >
          A {EVENT.durationHours}-hour build sprint for teams of {EVENT.teamSize}, held on{" "}
          {EVENT.dateLabel} at {EVENT.venue}. Three teams took the prizes. Their projects and the
          photos from the day are below.
        </p>

        <div
          className="mt-8 flex animate-fade-up flex-wrap gap-4"
          style={{ animationDelay: "260ms" }}
        >
          <a href="#winners" className="btn-primary">
            See the winners
          </a>
          <a href="#gallery" className="btn-secondary">
            Open the gallery
          </a>
        </div>

        <div
          className="mt-12 grid max-w-md animate-fade-up grid-cols-3 border border-white/15"
          style={{ animationDelay: "320ms" }}
        >
          {[
            [EVENT.durationHours, "Hours"],
            [EVENT.teamSize, "Members"],
            ["1", "Challenge"],
          ].map(([value, label], i) => (
            <div key={label} className={`px-3 py-4 text-center ${i > 0 ? "border-l border-white/15" : ""}`}>
              <div className="font-display text-2xl font-bold text-lime md:text-3xl">{value}</div>
              <div className="mt-1 font-mono text-xs uppercase tracking-widest text-white/60">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* decorative ticker, hidden from screen readers because it repeats the facts above */}
      <div className="overflow-hidden border-t border-black bg-lime text-black" aria-hidden="true">
        <div className="flex w-max animate-marquee motion-reduce:animate-none">
          {[0, 1].map((copy) => (
            <ul key={copy} className="flex shrink-0 items-center">
              {[...TICKER, ...TICKER].map((text, i) => (
                <li key={i} className="flex items-center py-3 font-mono text-xs font-bold uppercase tracking-widest md:text-sm">
                  <span>{text}</span>
                  <span className="mx-6 h-1.5 w-1.5 bg-black" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
