import { useEffect, useRef } from "react";
import { gsap } from "../lib/gsap";

// A small lime dot that trails the mouse with easing. Desktop only —
// skipped on touch devices where there's no real cursor to follow.
export default function CursorFollow() {
  const dotRef = useRef(null);

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer || !dotRef.current) return;

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    gsap.set(dotRef.current, { xPercent: -50, yPercent: -50 });

    const quickX = gsap.quickTo(dotRef.current, "x", { duration: 0.5, ease: "power3.out" });
    const quickY = gsap.quickTo(dotRef.current, "y", { duration: 0.5, ease: "power3.out" });

    const onMove = (e) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      quickX(pos.x);
      quickY(pos.y);
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={dotRef}
      aria-hidden
      className="hidden md:block fixed top-0 left-0 w-3 h-3 rounded-full bg-lime pointer-events-none z-[999] mix-blend-difference"
    />
  );
}
