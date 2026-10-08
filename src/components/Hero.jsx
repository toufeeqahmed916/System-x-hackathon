import { useEffect, useRef } from "react";
import { gsap } from "../lib/gsap";
import { EVENT } from "../config/event";

export default function Hero() {
  const headlineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headlineRef.current.children,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, stagger: 0.12, ease: "power4.out", delay: 0.15 }
      );
    }, headlineRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="top" className="relative border-b-[3px] border-lime overflow-hidden">
      <div className="relative px-mobile-margin md:px-desktop-margin pt-14 md:pt-20 pb-0 max-w-7xl mx-auto">
        <div className="inline-flex items-center gap-2 border-[2px] border-lime bg-black px-3 py-1.5">
          <span className="w-2 h-2 rounded-full bg-lime animate-pulse" />
          <span className="font-mono text-[11px] md:text-xs tracking-[0.2em] text-lime uppercase">
  Event Concluded
</span>
        </div>

        <div ref={headlineRef} className="mt-6 md:mt-8">
          <h1 className="font-display font-bold uppercase leading-[0.92] tracking-tight text-[15vw] md:text-[7vw] lg:text-[6.5rem]">
            <div className="overflow-hidden">{EVENT.organizer} presents</div>
          </h1>
          <h1 className="font-display font-bold uppercase leading-[0.85] tracking-tighter text-[19vw] md:text-[9vw] lg:text-[8.5rem] text-lime">
            <div className="overflow-hidden">Hackathon 1.0</div>
          </h1>
        </div>

        <p className="mt-6 font-mono text-sm md:text-base tracking-[0.15em] uppercase text-white/70 max-w-md">
          {EVENT.tagline}
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#about" className="btn-secondary">
            What is this?
          </a>
        </div>

        <div className="mt-10 grid grid-cols-3 max-w-md gap-0 border-t-[3px] border-l-[3px] border-lime/40">
          {[
            [EVENT.durationHours, "Hours"],
            [EVENT.teamSize, "Members"],
            ["1", "Challenge"],
          ].map(([num, label]) => (
            <div
              key={label}
              className="border-r-[3px] border-b-[3px] border-lime/40 px-3 py-3 md:px-4 md:py-4 text-center"
            >
              <div className="font-display font-bold text-2xl md:text-3xl text-lime">{num}</div>
              <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/60">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee strip */}
      <div className="relative border-t-[3px] border-lime bg-lime overflow-hidden py-3 mt-16 md:mt-24">
        <div className="flex whitespace-nowrap animate-marquee">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center shrink-0">
              {Array.from({ length: 6 }).map((__, j) => (
                <span
                  key={j}
                  className="font-mono font-bold text-black text-sm md:text-base uppercase tracking-widest mx-6"
                >
                  Hackathon 1.0 — Completed  ★  Thank You For Building  ★  See You Next Time  ★
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
