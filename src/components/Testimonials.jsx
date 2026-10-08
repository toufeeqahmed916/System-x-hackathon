import { useCallback, useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import { TESTIMONIALS } from "../config/event";

export default function Testimonials() {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);
const [paused, setPaused] = useState(false);
  

  // Find which card is closest to the center of the track.
  const updateActive = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const center = track.scrollLeft + track.clientWidth / 2;
    let closest = 0;
    let min = Infinity;
    [...track.children].forEach((child, i) => {
      const childCenter = child.offsetLeft + child.offsetWidth / 2;
      const distance = Math.abs(center - childCenter);
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

  const goTo = (index) => {
    const track = trackRef.current;
    const child = track?.children[index];
    if (!child) return;
    track.scrollTo({
      left: child.offsetLeft - (track.clientWidth - child.offsetWidth) / 2,
      behavior: "smooth",
    });
  };

  const total = TESTIMONIALS.length;
    // Move to the next review every 3 seconds. Pauses while someone is
  // hovering or touching the carousel, and loops back to the first review.
  useEffect(() => {
    if (paused || total < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setTimeout(() => goTo((active + 1) % total), 2000);
    return () => clearTimeout(id);
  }, [active, paused, total]);

  return (
    <section id="reviews" className="border-b-[3px] border-lime bg-surface">
      <div className="py-16 md:py-24">
        <div className="px-mobile-margin md:px-desktop-margin max-w-7xl mx-auto">
          <Reveal>
            <span className="eyebrow">// team reviews</span>
            <h2 className="section-title mt-3 mb-10 md:mb-14">What teams said</h2>
          </Reveal>
        </div>

        <div
  ref={trackRef}
  onMouseEnter={() => setPaused(true)}
  onMouseLeave={() => setPaused(false)}
  onTouchStart={() => setPaused(true)}
  onTouchEnd={() => setPaused(false)}
  className="relative flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar px-[9%] sm:px-[calc(50%-210px)] py-4"
>
          {TESTIMONIALS.map((item, i) => {
            const isActive = i === active;
            return (
              <figure
                key={`${item.team}-${i}`}
                onClick={() => goTo(i)}
                className={`snap-center shrink-0 w-[82%] sm:w-[420px] flex flex-col bg-black border-[3px] cursor-pointer transition-all duration-300 ${
                  isActive
  ? "border-lime scale-100 opacity-100 blur-0"
  : "border-lime/30 scale-90 opacity-60 blur-[3px]"
                }`}
                style={{ boxShadow: isActive ? "6px 6px 0 0 #C6FF00" : "none" }}
              >
                <div className="p-5 md:p-7 flex-1">
                  <span className="font-display font-bold text-5xl leading-none text-lime">
                    &ldquo;
                  </span>
                  <blockquote className="font-body text-base md:text-lg leading-relaxed text-white/85 mt-2">
                    {item.text}
                  </blockquote>
                </div>
                <figcaption className="border-t-[3px] border-lime/60 p-4 md:p-5">
                  <p className="font-display font-bold uppercase text-sm md:text-base">
                    {item.team}
                  </p>
                </figcaption>
              </figure>
            );
          })}
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            onClick={() => goTo(Math.max(active - 1, 0))}
            disabled={active === 0}
            aria-label="Previous review"
            className="btn-secondary !px-4 !py-2 !text-lg disabled:opacity-30 disabled:pointer-events-none"
          >
            ←
          </button>
          <span className="font-mono text-xs tracking-widest text-white/60">
            {String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <button
            onClick={() => goTo(Math.min(active + 1, total - 1))}
            disabled={active === total - 1}
            aria-label="Next review"
            className="btn-secondary !px-4 !py-2 !text-lg disabled:opacity-30 disabled:pointer-events-none"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}