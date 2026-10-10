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
  { type: "image", src: "/gallery/1.jpg" },
{ type: "image", src: "/gallery/2.jpg" },
{ type: "image", src: "/gallery/3.jpg" },
{ type: "image", src: "/gallery/4.jpg" },
{ type: "image", src: "/gallery/5.jpg" },
{ type: "image", src: "/gallery/6.jpg" },
{ type: "image", src: "/gallery/7.jpg" },
{ type: "image", src: "/gallery/8.jpg" },
{ type: "image", src: "/gallery/9.jpg" },
{ type: "image", src: "/gallery/10.jpg" },
{ type: "image", src: "/gallery/11.jpg" },
{ type: "image", src: "/gallery/12.jpg" },
{ type: "image", src: "/gallery/13.jpg" },
{ type: "image", src: "/gallery/14.jpg" },
{ type: "image", src: "/gallery/15.jpg" },
{ type: "image", src: "/gallery/16.jpg" },
{ type: "image", src: "/gallery/17.jpg" },
{ type: "image", src: "/gallery/18.jpg" },
{ type: "image", src: "/gallery/19.jpg" },
{ type: "image", src: "/gallery/20.jpg" },
{ type: "image", src: "/gallery/21.jpg" },
{ type: "image", src: "/gallery/22.jpg" },
{ type: "image", src: "/gallery/23.jpg" },
{ type: "image", src: "/gallery/24.jpg" },
{ type: "image", src: "/gallery/25.jpg" },
{ type: "image", src: "/gallery/26.jpg" },
{ type: "image", src: "/gallery/27.jpg" },
{ type: "image", src: "/gallery/28.jpg" },
{ type: "image", src: "/gallery/29.jpg" },
{ type: "image", src: "/gallery/30.jpg" },
{ type: "image", src: "/gallery/31.jpg" },
{ type: "image", src: "/gallery/32.jpg" },
{ type: "image", src: "/gallery/33.jpg" },
{ type: "image", src: "/gallery/34.jpg" },
{ type: "image", src: "/gallery/35.jpg" },
{ type: "image", src: "/gallery/36.jpg" },
{ type: "image", src: "/gallery/37.jpg" },
{ type: "image", src: "/gallery/38.jpg" },
{ type: "image", src: "/gallery/39.jpg" },
{ type: "image", src: "/gallery/40.jpg" },
{ type: "image", src: "/gallery/41.jpg" },
{ type: "image", src: "/gallery/42.jpg" },
{ type: "image", src: "/gallery/43.jpg" },
{ type: "image", src: "/gallery/44.jpg" },
{ type: "image", src: "/gallery/45.jpg" },
{ type: "image", src: "/gallery/46.jpg" },
];
