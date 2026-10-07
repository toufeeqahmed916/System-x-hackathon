// ---------------------------------------------------------------------------
// EVENT CONFIG — edit this file when the date, venue, form link, or prizes
// are confirmed. Nothing else in the codebase needs to change.
// ---------------------------------------------------------------------------

export const EVENT = {
  name: "System X Hackathon 1.0",
  organizer: "Computer Systems",
  tagline: "Create. Collaborate. Conquer.",
  durationHours: 6,
  teamSize: "2 - 4",
  registrationFee: "Rs. 2,000 / team",

  // Set this to the confirmed ISO date-time once announced, e.g. "2026-11-14T09:00:00+05:00".
  // While this is null, the countdown shows a "TBA" state instead of counting down.
  eventDateISO: "2020-01-01T00:00:00+05:00",

  venue: "Science & Technology Park, Muet Jamshoro",

  // Swap in the real Google Form link + generate a QR that points to it.
  registrationFormUrl: "https://forms.gle/zut2vbALbq6bfTp86",

  socials: {
    instagram: "https://www.instagram.com/systemxhackathon?igsi=MWhldGprYzJ5aGR3cA==",
    linkedin: "https://www.linkedin.com/company/systemxhackathon/",
  },

  // Prize amounts stay blurred/pixelated with a "Reveal Soon" tag until you're ready.
  // Flip `revealed` to true (or set individual amounts) when you want to unblur them.
  prizes: {
    revealed: true,
    first: "Rs. 10,000",
    second: "Rs. 6,000",
    third: "Rs. 4,000",
  },
};
