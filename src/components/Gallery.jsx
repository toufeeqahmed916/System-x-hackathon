import { useCallback, useEffect, useRef, useState } from "react";
import Section from "./Section";
import { GALLERY } from "../config/event";

const TILTS = ["-3deg", "2deg", "-1.5deg", "3deg", "-2deg", "1deg"];
const SPEED = 40; // pixels per second, moving right to left
const FOLLOW = 0.6; // how strongly cards tilt along the rope (0 = hang straight)

// Sizes for phone vs desktop. `sag` is how far the rope dips in the middle.
function getLayout(width) {
  const desktop = width >= 768;
  const cardW = desktop ? 240 : 192;
  const gap = desktop ? 40 : 24;
  const sag = desktop ? 80 : 36;
  const top = 40; // space above the rope for the pins
  const cardH = Math.round(cardW * 1.25 + 54);
  return { cardW, pitch: cardW + gap, sag, top, height: top + sag + cardH + 56 };
}

function GalleryCard({ item, tilt, onOpen }) {
  const videoRef = useRef(null);
  const isVideo = item.type === "video";

  const playPreview = () => {
    if (isVideo) videoRef.current?.play().catch(() => {});
  };
  const stopPreview = () => {
    const video = videoRef.current;
    if (isVideo && video) {
      video.pause();
      video.currentTime = 0.1;
    }
  };

  return (
    <button
      type="button"
      onClick={onOpen}
      onMouseEnter={playPreview}
      onMouseLeave={stopPreview}
      onFocus={playPreview}
      onBlur={stopPreview}
      className="hang-card relative block w-full bg-black border-[3px] border-lime/60 p-2 text-left cursor-pointer"
      style={{ "--tilt": tilt }}
      aria-label={item.caption ? `Open ${item.caption}` : "Open gallery item"}
    >
      {/* pin */}
      <span
        aria-hidden
        className="absolute -top-4 left-1/2 -translate-x-1/2 w-3.5 h-8 bg-lime border-2 border-black z-10"
      >
        <span className="absolute left-0 right-0 top-1/2 h-[2px] bg-black" />
      </span>

      <div className="relative aspect-[4/5] bg-surface overflow-hidden">
        {isVideo ? (
          <>
            <video
              ref={videoRef}
              src={`${item.src}#t=0.1`}
              poster={item.poster}
              className="w-full h-full object-cover"
              muted
              loop
              playsInline
              preload={item.poster ? "none" : "metadata"}
            />
            <span className="absolute top-2 left-2 bg-lime text-black font-mono font-bold text-[10px] px-1.5 py-0.5 border-2 border-black">
              VIDEO
            </span>
          </>
        ) : (
          <img
            src={item.src}
            alt={item.caption || "Hackathon photo"}
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
            draggable={false}
          />
        )}
      </div>

      <p className="h-8 pt-2 px-1 font-mono text-xs uppercase tracking-wide text-white/70 truncate">
        {item.caption || ""}
      </p>
    </button>
  );
}

function Lightbox({ items, index, onClose, onChange }) {
  const item = items[index];
  const total = items.length;
  const closeRef = useRef(null);
  const touchStartX = useRef(null);

  // Move focus into the viewer, and give it back to the card when it closes.
  useEffect(() => {
    const previouslyFocused = document.activeElement;
    closeRef.current?.focus();
    return () => previouslyFocused?.focus?.();
  }, []);

  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(dx) < 50) return;
    onChange(dx < 0 ? (index + 1) % total : (index - 1 + total) % total);
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onChange((index + 1) % total);
      if (e.key === "ArrowLeft") onChange((index - 1 + total) % total);
    };
    window.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [index, total, onClose, onChange]);

  return (
    <div
      className="fixed inset-0 z-[1000] bg-black/95 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
      onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
      onTouchEnd={onTouchEnd}
      role="dialog"
      aria-modal="true"
      aria-label="Gallery viewer"
    >
      <div
        className="w-full max-w-5xl flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {item.type === "video" ? (
          <video
            key={item.src}
            src={item.src}
            controls
            autoPlay
            playsInline
            className="max-h-[72vh] max-w-full border-[3px] border-lime bg-black"
          />
        ) : (
          <img
            key={item.src}
            src={item.src}
            alt={item.caption || "Hackathon photo"}
            className="max-h-[72vh] max-w-full object-contain border-[3px] border-lime"
          />
        )}

        {item.caption && (
          <p className="mt-4 font-mono text-xs md:text-sm uppercase tracking-widest text-white/70">
            {item.caption}
          </p>
        )}

        <div className="mt-5 flex items-center gap-3 md:gap-4">
          <button
            onClick={() => onChange((index - 1 + total) % total)}
            aria-label="Previous"
            className="btn-secondary !px-4 !py-2 !text-lg"
          >
            ←
          </button>
          <span className="font-mono text-xs tracking-widest text-white/60">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <button
            onClick={() => onChange((index + 1) % total)}
            aria-label="Next"
            className="btn-secondary !px-4 !py-2 !text-lg"
          >
            →
          </button>
          <button ref={closeRef} onClick={onClose} className="btn-primary !px-5 !py-2 !text-sm ml-2">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [open, setOpen] = useState(null);
  const [width, setWidth] = useState(0);
  const containerRef = useRef(null);
  const itemRefs = useRef([]);
  const offsetRef = useRef(0);
  const pausedRef = useRef(false);
  const visibleRef = useRef(true);
  const dragRef = useRef({ active: false, lastX: 0, moved: 0 });
  const close = useCallback(() => setOpen(null), []);

  const layout = getLayout(width || 1200);
  const { pitch, cardW, sag, top } = layout;

  // Repeat the photos until the rope is long enough to never show a gap.
  const need = Math.ceil((width || 1200) / layout.pitch) + 3;
  const reps = Math.max(1, Math.ceil(need / Math.max(GALLERY.length, 1)));
  const cards = Array.from({ length: reps }).flatMap(() =>
    GALLERY.map((item, idx) => ({ item, idx }))
  );

  // Measure the rope width.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const measure = () => setWidth(el.clientWidth);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Remember whether the gallery is on screen so the loop can idle when it is not.
  useEffect(() => {
    const el = containerRef.current;
    if (!el || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(([entry]) => {
      visibleRef.current = entry.isIntersecting;
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Move the cards along the curved rope, every frame.
  useEffect(() => {
    if (!width || cards.length === 0) return;
    const n = cards.length;
    const total = n * pitch;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf;
    let last = performance.now();

    const place = () => {
      for (let i = 0; i < n; i++) {
        const el = itemRefs.current[i];
        if (!el) continue;
        const x = ((((i * pitch - offsetRef.current) % total) + total) % total) - pitch;
        const u = (x + cardW / 2) / width; // 0 at left edge, 1 at right edge
        const y = top + 4 * sag * u * (1 - u);
        const slope = Math.atan((4 * sag * (1 - 2 * u)) / width) * (180 / Math.PI);
        const rotation = slope * FOLLOW;
        el.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${rotation}deg)`;
        el.style.setProperty("--slope", `${rotation}deg`);
        el.style.opacity = "1";
      }
    };

    const tick = (now) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      if (!visibleRef.current) {
        raf = requestAnimationFrame(tick);
        return;
      }
      if (!pausedRef.current && !dragRef.current.active && !reduceMotion) {
        offsetRef.current += SPEED * dt;
      }
      place();
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [width, cards.length, pitch, cardW, sag, top]);

  // Drag the rope by hand (touch or mouse).
  const onPointerDown = (e) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    const drag = dragRef.current;
    drag.active = true;
    drag.lastX = e.clientX;
    drag.moved = 0;

    const onMove = (ev) => {
      const dx = ev.clientX - drag.lastX;
      drag.lastX = ev.clientX;
      drag.moved += Math.abs(dx);
      offsetRef.current -= dx;
    };
    const onUp = () => {
      drag.active = false;
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
  };

  if (GALLERY.length === 0) return null;

  return (
    <>
      <Section
        id="gallery"
        label="On the day"
        title="Gallery"
        align="center"
        bleed
      >
        <p className="-mt-6 mb-10 px-5 text-center font-mono text-xs text-white/60 md:-mt-8 md:mb-14 md:text-sm">
          Drag the rope to move it. Click or tap a card to open it full screen.
        </p>

        <div
          ref={containerRef}
          className="relative w-full touch-pan-y select-none overflow-hidden"
          style={{ height: layout.height }}
          onPointerEnter={(e) => {
            if (e.pointerType === "mouse") pausedRef.current = true;
          }}
          onPointerLeave={(e) => {
            if (e.pointerType === "mouse") pausedRef.current = false;
          }}
          onPointerDown={onPointerDown}
        >
          {/* curved rope */}
          {width > 0 && (
            <svg
              className="absolute inset-0 pointer-events-none"
              width={width}
              height={layout.height}
              aria-hidden
            >
              <path
                d={`M0,${layout.top} Q${width / 2},${layout.top + 2 * layout.sag} ${width},${layout.top}`}
                fill="none"
                stroke="rgba(255,255,255,0.5)"
                strokeWidth="3"
              />
            </svg>
          )}

          {width > 0 &&
            cards.map(({ item, idx }, i) => (
              <div
                key={i}
                ref={(el) => {
                  itemRefs.current[i] = el;
                }}
                className="absolute left-0 top-0 opacity-0 hover:z-20"
                style={{ width: layout.cardW, transformOrigin: "50% 0" }}
              >
                <GalleryCard
                  item={item}
                  tilt={TILTS[(i % GALLERY.length) % TILTS.length]}
                  onOpen={() => {
                    if (dragRef.current.moved > 6) return; // it was a drag, not a click
                    setOpen(idx);
                  }}
                />
              </div>
            ))}
        </div>
      </Section>

      {open !== null && (
        <Lightbox items={GALLERY} index={open} onClose={close} onChange={setOpen} />
      )}
    </>
  );
}