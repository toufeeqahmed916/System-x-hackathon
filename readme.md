# System X Hackathon 1.0

[![Live](https://img.shields.io/badge/Live-Website-brightgreen)](https://systemhackathon.netlify.app/)
![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-38B2AC?logo=tailwindcss&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-000000?logo=threedotjs&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?logo=netlify&logoColor=white)

The official website for **System X Hackathon 1.0**, organized by the Department of Computer Systems Engineering, MUET.

A central platform for participants to find event details, prizes, judges, registration, FAQs and guidelines. Neo-brutalist, lime-on-black design with scroll animations and an interactive 3D hero.

🔗 **Live Website:** [systemhackathon.netlify.app](https://systemhackathon.netlify.app/)

## Features

- Mouse-reactive 3D "1.0" hero built with React Three Fiber
- Live countdown to the event
- Scroll-triggered animations on every section (GSAP + ScrollTrigger)
- Sections: About, Prizes, Perks, How It Works, Judges, Registration, FAQ
- Auto-generated registration QR code from the form link
- Config-driven content: change event details from one file
- Fully responsive (desktop + mobile)

## Tech Stack

| Area | Tools |
|---|---|
| Framework | React 19, Vite |
| Styling | Tailwind CSS 3 |
| Animation | GSAP, ScrollTrigger |
| 3D | Three.js, React Three Fiber, Drei |
| QR | qrcode.react |
| Linting | oxlint |
| Hosting | Netlify |

## Run Locally

Node.js 18+ chahiye.

```bash
git clone https://github.com/toufeeqahmed916/System-x-hackathon.git
cd System-x-hackathon
npm install
npm run dev
```

Other commands:

```bash
npm run build     # production build -> dist/
npm run preview   # preview the build
npm run lint      # oxlint
```

## Editing Event Details

Date, venue, prizes, form link aur socials sab `src/config/event.js` mein hain. Baqi code change karne ki zaroorat nahi.

```js
export const EVENT = {
  eventDateISO: "2026-11-14T09:00:00+05:00",
  venue: "...",
  registrationFormUrl: "https://forms.gle/...",
  prizes: { revealed: true, first: "...", second: "...", third: "..." },
};
```

## Project Structure

```
src/
├── components/     one file per section (Hero, About, Prizes, Judges, FAQ...)
├── config/event.js editable event details
├── lib/gsap.js     GSAP + ScrollTrigger setup
└── index.css       Tailwind + shared utility classes
public/images/      event and judge images
```

## Deployment

Static build hai. Netlify par repo connect karo: build command `npm run build`, publish directory `dist`. Har push par auto deploy hota hai.

## Event

**System X Hackathon 1.0**
Department of Computer Systems Engineering
Mehran University of Engineering & Technology (MUET)

## Author

Designed and developed by **Toufeeq Shaikh**
[GitHub](https://github.com/toufeeqahmed916) · [LinkedIn](https://www.linkedin.com/in/toufeeq-shaikh-880019321)