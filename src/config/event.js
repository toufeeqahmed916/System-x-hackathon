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

// ---------------------------------------------------------------------------
// WINNERS — fill in real team names, members, photo filenames and demo links.
// Keep the order: 1st, 2nd, 3rd.
// ---------------------------------------------------------------------------
export const WINNERS = [
  {
    place: "1st Place",
    prize: EVENT.prizes.first,
    teamName: "Claude's Plan",
    members: ["Umer Qureshi", "Musab Khan", "Oun Jaffri", "Hunain Shaikh"],
    photo: "/winners/1st.jpg",
    demoUrl: "https://bedgrid-six.vercel.app/",
  },
  {
    place: "2nd Place",
    prize: EVENT.prizes.second,
    teamName: "Code Crusaders",
    members: ["Syed Sayeel Abbas", "Ahmed Memon", "Rasool Bux", "Haroon Zulifqar"],
    photo: "/winners/2nd.jpg",
    demoUrl: "https://smart-campus-network-monitoring.netlify.app/",
  },
  {
    place: "3rd Place",
    prize: EVENT.prizes.third,
    teamName: "Lahooti X",
    members: ["Amjad", "Naveed", "Muhammad Azan"],
    photo: "/winners/3rd.JPG",
    demoUrl: "https://queueflow10.vercel.app/",
  },
];

// ---------------------------------------------------------------------------
// TESTIMONIALS: typed reviews, one entry per team. Write the real text here.
// ---------------------------------------------------------------------------
export const TESTIMONIALS = [
  { team: "Claudes PLan", text: "Type the review exactly as the team wrote it." },
  { team: "Yaqeen", text: "Type the review exactly as the team wrote it." },
  { team: "bakri", text: "Type the review exactly as the team wrote it." },
  { team: "bakri", text: "Type the review exactly as the team wrote it." },
  { team: "bakri", text: "Type the review exactly as the team wrote it." },
  { team: "bakri", text: "Type the review exactly as the team wrote it." },
  { team: "bakri", text: "Type the review exactly as the team wrote it." },
  { team: "bakri", text: "Type the review exactly as the team wrote it." },
  { team: "bakri", text: "Type the review exactly as the team wrote it." },
];

// ---------------------------------------------------------------------------
// STICKY_NOTES: anonymous note photos, no names. Just the file paths.
// ---------------------------------------------------------------------------
export const STICKY_NOTES = [
  "/sticky-notes/note-1.jpg",
  "/sticky-notes/note-2.jpg",
  "/sticky-notes/note-3.jpg",
  "/sticky-notes/note-4.jpg",
  "/sticky-notes/note-5.jpg",
  "/sticky-notes/note-6.jpg",
  "/sticky-notes/note-6.jpg",
  "/sticky-notes/note-6.jpg",
  "/sticky-notes/note-6.jpg",
  "/sticky-notes/note-6.jpg",
  "/sticky-notes/note-6.jpg",
  "/sticky-notes/note-6.jpg",
  "/sticky-notes/note-6.jpg",
];

// ---------------------------------------------------------------------------
// GALLERY: photos and videos in the order they hang on the rope.
// `caption` is optional (small text under the card).
// ---------------------------------------------------------------------------
export const GALLERY = [
  { type: "image", src: "/gallery/photo-1.jpg", caption: "Opening" },
  { type: "image", src: "/gallery/photo-2.jpg", caption: "Team check-in" },
  { type: "video", src: "/gallery/clip-1.mp4", caption: "Build time" },
  { type: "image", src: "/gallery/photo-3.jpg" },
  { type: "image", src: "/gallery/photo-4.jpg" },
  { type: "video", src: "/gallery/clip-2.mp4" },
  { type: "image", src: "/gallery/photo-5.jpg" },
  { type: "image", src: "/gallery/photo-6.jpg" },
];