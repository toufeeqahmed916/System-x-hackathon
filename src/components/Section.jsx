import Reveal from "./Reveal";

/**
 * Shared wrapper for every content section: spacing, divider line,
 * heading and background tone, so all sections stay consistent.
 *
 * tone:  "base" | "alt"  (alternating backgrounds)
 * align: "left" | "center" (heading alignment)
 * bleed: children render edge to edge (used by the gallery and carousels)
 */
export default function Section({
  id,
  label,
  title,
  tone = "base",
  align = "left",
  bleed = false,
  children,
}) {
  const headingId = id ? `${id}-heading` : undefined;
  const heading = title && (
    <Reveal className={`mb-10 md:mb-14 ${align === "center" ? "text-center" : ""}`}>
      {label && <p className="eyebrow">{label}</p>}
      <h2 id={headingId} className="section-title mt-3">
        {title}
      </h2>
    </Reveal>
  );

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`border-b border-white/10 ${tone === "alt" ? "bg-surface" : "bg-background"}`}
    >
      {bleed ? (
        <>
          <div className="container-x pt-16 md:pt-24">{heading}</div>
          <div className="pb-16 md:pb-24">{children}</div>
        </>
      ) : (
        <div className="container-x py-16 md:py-24">
          {heading}
          {children}
        </div>
      )}
    </section>
  );
}
