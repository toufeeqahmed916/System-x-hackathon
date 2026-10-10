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
        {items.map((src, i) => {
          const isCopy = i >= base.length; // the second copy is decoration only
          return (
            <div
              key={i}
              aria-hidden={isCopy || undefined}
              className={`mr-5 shrink-0 border-2 border-white/20 bg-black p-2 md:mr-8 ${
                TILTS[(i % base.length) % TILTS.length]
              }`}
            >
              <img
                src={src}
                alt={isCopy ? "" : "Anonymous note from a participant"}
                loading="lazy"
                decoding="async"
                draggable={false}
                className="h-44 w-auto object-contain md:h-60"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function StickyNotes() {
  if (STICKY_NOTES.length === 0) return null;

  const top = STICKY_NOTES.filter((_, i) => i % 2 === 0);
  const bottom = STICKY_NOTES.filter((_, i) => i % 2 === 1);

  return (
    <div className="mt-16 md:mt-24">
      <div className="container-x mb-6">
        <h3 className="font-display text-2xl font-bold uppercase tracking-tight md:text-3xl">
          Anonymous notes
        </h3>
        <p className="mt-2 text-white/70">Unsigned notes from participants.</p>
      </div>

      <div className="flex flex-col gap-2 md:gap-4">
        <MarqueeRow notes={top} toRight duration="70s" />
        {bottom.length > 0 && <MarqueeRow notes={bottom} duration="80s" />}
      </div>
    </div>
  );
}
