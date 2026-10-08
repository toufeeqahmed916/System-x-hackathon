import Reveal from "./Reveal";
import { STICKY_NOTES } from "../config/event";

const TILTS = ["-rotate-2", "rotate-1", "rotate-2", "-rotate-1"];

// Repeat the list until a row has enough notes to fill a wide screen.
function fill(list, min = 10) {
  if (list.length === 0) return [];
  const reps = Math.ceil(min / list.length);
  return Array.from({ length: reps }).flatMap(() => list);
}

function MarqueeRow({ notes, toRight, duration }) {
  const base = fill(notes);
  const items = [...base, ...base]; // two copies so the loop is seamless

  return (
    <div className="overflow-hidden py-4">
      <div
        className={`flex w-max ${
          toRight ? "animate-marquee-reverse" : "animate-marquee"
        } hover:[animation-play-state:paused] motion-reduce:animate-none`}
        style={{ animationDuration: duration }}
      >
        {items.map((src, i) => (
          <div
            key={i}
            className={`shrink-0 mr-5 md:mr-8 bg-black border-[3px] border-lime/60 p-2 ${
              TILTS[(i % base.length) % TILTS.length]
            }`}
            style={{ boxShadow: "5px 5px 0 0 rgba(198,255,0,0.4)" }}
          >
            <img
              src={src}
              alt="Anonymous note from a participant"
              className="h-44 md:h-60 w-auto object-contain"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function StickyNotes() {
  if (STICKY_NOTES.length === 0) return null;

  const top = STICKY_NOTES.filter((_, i) => i % 2 === 0);
  const bottom = STICKY_NOTES.filter((_, i) => i % 2 === 1);

  return (
    <section id="notes" className="border-b-[3px] border-lime overflow-hidden">
      <div className="py-16 md:py-24">
        <div className="px-mobile-margin md:px-desktop-margin max-w-7xl mx-auto">
          <Reveal>
            <span className="eyebrow">// no names</span>
            <h2 className="section-title mt-3 mb-10 md:mb-14">Anonymous notes</h2>
          </Reveal>
        </div>

        <div className="flex flex-col gap-4 md:gap-6">
          <MarqueeRow notes={top} toRight duration="60s" />
          {bottom.length > 0 && <MarqueeRow notes={bottom} duration="70s" />}
        </div>
      </div>
    </section>
  );
}