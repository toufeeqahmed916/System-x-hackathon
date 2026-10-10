// ---------------------------------------------------------------------------
// EVENT CONFIG: all the content you edit lives in this one file.
// ---------------------------------------------------------------------------

export const EVENT = {
  name: "System X Hackathon 1.0",
  organizer: "Computer Systems",
  tagline: "Create. Collaborate. Conquer.",
  durationHours: 6,
  teamSize: "2-4",
  dateLabel: "1 October 2026", // confirm this is the correct event date
  venue: "Science & Technology Park, MUET Jamshoro",

  socials: {
    instagram: "https://www.instagram.com/systemxhackathon?igsi=MWhldGprYzJ5aGR3cA==",
    linkedin: "https://www.linkedin.com/company/systemxhackathon/",
  },

  prizes: {
    first: "Rs. 10,000",
    second: "Rs. 6,000",
    third: "Rs. 4,000",
  },
};

// ---------------------------------------------------------------------------
// WINNERS: keep the order 1st, 2nd, 3rd.
// photoPosition controls which part of a wide photo stays visible when it is
// cropped to fit the card (CSS object-position, e.g. "50% 30%").
// ---------------------------------------------------------------------------
export const WINNERS = [
  {
    place: "1st Place",
    prize: EVENT.prizes.first,
    teamName: "Claude's Plan",
    members: ["Umer Qureshi", "Musab Khan", "Oun Jaffri", "Hunain Shaikh"],
    photo: "/winners/1st.jpg",
    photoPosition: "50% 40%",
    demoUrl: "https://bedgrid-six.vercel.app/",
  },
  {
    place: "2nd Place",
    prize: EVENT.prizes.second,
    teamName: "Code Crusaders",
    members: ["Syed Sayeel Abbas", "Ahmed Memon", "Rasool Bux", "Haroon Zulifqar"],
    photo: "/winners/2nd.jpg",
    photoPosition: "50% 35%",
    demoUrl: "https://smart-campus-network-monitoring.netlify.app/",
  },
  {
    place: "3rd Place",
    prize: EVENT.prizes.third,
    teamName: "Lahooti X",
    members: ["Amjad", "Naveed", "Muhammad Azan"],
    photo: "/winners/3rd.jpg", // renamed from 3rd.JPG (lowercase is safer on Netlify)
    photoPosition: "50% 40%",
    demoUrl: "https://queueflow10.vercel.app/",
  },
];

// ---------------------------------------------------------------------------
// TESTIMONIALS: typed reviews, one entry per team. REPLACE the placeholder
// text and team names below with the real ones before you deploy.
// ---------------------------------------------------------------------------
export const TESTIMONIALS = [
  { team: "Claude's Plan", text: "Type the review exactly as the team wrote it." },
  { team: "Yaqeen", text: "Type the review exactly as the team wrote it." },
  { team: "Team name", text: "Type the review exactly as the team wrote it." },
];

// ---------------------------------------------------------------------------
// STICKY_NOTES: anonymous note photos. One path per file in public/sticky-notes/
// ---------------------------------------------------------------------------
export const STICKY_NOTES = [
  "/sticky-notes/note-1.jpg",
  "/sticky-notes/note-2.jpg",
  "/sticky-notes/note-3.jpg",
  "/sticky-notes/note-4.jpg",
  "/sticky-notes/note-5.jpg",
  "/sticky-notes/note-6.jpg",
];

// ---------------------------------------------------------------------------
// GALLERY: photos and videos in the order they hang on the rope.
// caption is optional. For videos you can add poster: "/gallery/clip-1.jpg"
// (a still image shown before the video loads, saves mobile data).
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
