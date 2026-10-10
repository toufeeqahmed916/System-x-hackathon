import { useEffect, useRef, useState } from "react";

/**
 * Fades its children in once, the first time they scroll into view.
 * Plain IntersectionObserver + CSS, no animation library needed.
 */
export default function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  // Browsers without IntersectionObserver just show everything immediately.
  const [shown, setShown] = useState(
    () => typeof window !== "undefined" && !("IntersectionObserver" in window)
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${shown ? "is-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}
