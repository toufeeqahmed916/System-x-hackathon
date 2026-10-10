import { useCallback, useEffect, useRef, useState } from "react";
import Section from "./Section";
import StickyNotes from "./StickyNotes";
import { TESTIMONIALS } from "../config/event";

// How long a review stays centered before the carousel moves on:
// longer reviews get more reading time (4s to 9s).
const readTime = (text) => Math.min(9000, 4000 + text.length * 35);

export default function Testimonials() {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = TESTIMONIALS.length;

  // Find which card is closest to the center of the track.
  const updateActive = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const center = track.scrollLeft + track.clientWidth / 2;
    let closest = 0;
    let min = Infinity;
    [...track.children].forEach((child, i) => {
      const distance = Math.abs(center - (child.offsetLeft + child.offsetWidth / 2));
      if (distance < min) {
        min = distance;
        closest = i;
      }
    });
    setActive(closest);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.addEventListener("scroll", updateActive, { passive: true });
    updateActive();
    return () => track.removeEventListener("scroll", updateActive);
  }, [updateActive]);

  const goTo = useCallback((index, smooth = true) => {
    const track = trackRef.current;
    const child = track?.children[index];
    if (!child) return;
    track.scrollTo({
      left: child.offsetLeft - (track.clientWidth - child.offsetWidth) / 2,
      behavior: smooth ? "smooth" : "auto",
    });
  }, []);

  // Auto-advance. Pauses on hover, touch and keyboard focus, and never runs
  // for people who asked their device to reduce motion.
  useEffect(() => {
    if (paused || total < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const next = (active + 1) % total;
    const id = setTimeout(() => goTo(next, next !== 0), readTime(TESTIMONIALS[active].text));
    return () => clearTimeout(id);
  }, [active, paused, total, goTo]);

  return (
    <Section id="reviews" label="Reactions" title="What people said" tone="alt" bleed>
      <div
        role="region"
        aria-roledescription="carousel"
        aria-label="Team reviews"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <div
          ref={trackRef}
          tabIndex={0}
          className="no-scrollbar relative flex snap-x snap-mandatory gap-4 overflow-x-auto px-[9%] py-4 sm:px-[calc(50%-210px)] md:gap-6"
        >
          {TESTIMONIALS.map((item, i) => {
            const isActive = i === active;
            return (
              <figure
                key={i}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${total}`}
                onClick={() => goTo(i)}
                className={`flex w-[82%] shrink-0 cursor-pointer snap-center flex-col border-2 bg-black transition-all duration-300 sm:w-[420px] ${
                  isActive
                    ? "scale-100 border-lime opacity-100"
                    : "scale-90 border-white/20 opacity-60 md:blur-[3px]"
                }`}
                style={{ boxShadow: isActive ? "6px 6px 0 0 #C6FF00" : "none" }}
              >
                <blockquote className="flex-1 p-5 md:p-7">
                  <span aria-hidden="true" className="block font-display text-5xl font-bold leading-none text-lime">
                    &ldquo;
                  </span>
                  <p className="mt-2 text-base leading-relaxed text-white/85 md:text-lg">{item.text}</p>
                </blockquote>
                <figcaption className="border-t-2 border-white/15 p-4 md:p-5">
                  <p className="font-display text-sm font-bold uppercase md:text-base">{item.team}</p>
                </figcaption>
              </figure>
            );
          })}
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => goTo(Math.max(active - 1, 0))}
            disabled={active === 0}
            aria-label="Previous review"
            className="btn-secondary !px-4 !py-2 !text-lg disabled:pointer-events-none disabled:opacity-30"
          >
            ←
          </button>
          <span className="font-mono text-xs tracking-widest text-white/70" aria-live="off">
            {String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <button
            type="button"
            onClick={() => goTo(Math.min(active + 1, total - 1))}
            disabled={active === total - 1}
            aria-label="Next review"
            className="btn-secondary !px-4 !py-2 !text-lg disabled:pointer-events-none disabled:opacity-30"
          >
            →
          </button>
        </div>
      </div>

      <StickyNotes />
    </Section>
  );
}
