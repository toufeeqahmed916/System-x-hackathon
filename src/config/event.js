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
  {
    team: "Void 4",
    text: "The overall experience was amazing. Loved the food and environment, but the music system was not good enough :(\nI learned how to use a new AI tool in just one weekend and met amazing people. Also, the event did not start on time because of registration delays.\nEverything was good, loved the menu and management was on the point, but the event started too late, did not even get complete time."
  },
  {
    team: "The Loop Ladies",
    text: "It was a good experience here.\nWe learn so many things here that was new to our experience as a student in this university.\nVery good experience to be here in this hackathon.\nGood management for this hackathon.\nIt was really tough, I learned a lot of things, will improve next time even more. At least I’m satisfied for what I did. Completed: Backend + Frontend + Demo + GitHub + Doc. Yeah!"
  },
  {
    team: "SMDN Devs",
    text: "Time was too crunched for a complex project.\nThere should be an option for multiple links, not just one, because we made a mobile app and had the web and app versions both. Please edit that.\nIt was organised super professionally overall. Every volunteer was very helpful and accommodating. The design, set-up & everything was really great too."
  },
  {
    team: "Webvengers",
    text: "Scope of the project is too large for the time given."
  },
  {
    team: "404 Founders",
    text: "This hackathon really provides the experience beyond our daily routine, it made us explore various AI models and other resources.\nGood, learn new things and pushed to new level of understanding.\nHey, this event is good for a student to learn something new, do teamwork and especially to come out of typical daily routine. Although it is itself stressful but it’s fun to be here.\nIt was an amazing experience as a beginner, we learnt a lot of things. Although it was fun, also we made team, communicate, found out about our hidden talents."
  },
  {
    team: "Phantom X",
    text: "Has been a wonderful experience at Systems X Hackathon 1.0. Lovely vibes, lovely people and continuous growth."
  },
  {
    team: "The N3RDS",
    text: "It was amazing, got to learn a lot, especially how to work under pressure. Enjoy xoxo. Expecting these type of events in future."
  },
  {
    team: "2 Bit Coder",
    text: "The hackathon was well organized, and the mentors and organizers were very supportive throughout. It was a great learning experience in teamwork and building a working prototype under time pressure, and we would love to participate again."
  },
  {
    team: "Shield",
    text: "Management: Good organization, supportive mentors, especially “[name unclear]”.\nTeam: Cooperative, hardworking and maintaining good coordination throughout the hackathon. We will wish to win and donate prize to [unclear]."
  },
  {
    team: "Avengers",
    text: "Sandwich had very little amount of chicken.\nJuice was simple copy of Slice & not cold."
  },
  {
    team: "Invincible Forge",
    text: "The overall management is quite good. Being CSE undergraduates, this hackathon has given the opportunity to transform our ideas creatively and effectively into practical implementation by using AI tools. We would appreciate more opportunities like this in the future."
  },
  {
    team: "Shadow Fox",
    text: "Excited to join event, and very happy to see a professional environment. Things provided by you and happy from core team members’ cooperation and teachers also operate very well. Very excellent."
  },
  {
    team: "Anonymous",
    text: "Overall it was good but I think you need to change refreshment items, like it was “chicken cake”, overbaked chocolate chip muffin with one drop of chocolate. You should also provide water bottles."
  },
  {
    team: "The Warriors",
    text: "Overall, the experience was great and we really enjoyed being part of the hackathon. The event provided a good opportunity to learn, collaborate, and work on an innovative project under time constraints. The organization and overall environment were encouraging and motivating. Overall, it was a valuable and enjoyable experience, and we appreciate the efforts and hard work put into organizing the event."
  },
  {
    team: "Anonymous",
    text: "Aisey events hote rahein. Asankhey daadho mazo aahyo.\nThe event didn’t teach us anything to be honest! It felt like I was just instructing the AI to fulfill my task.\nThe problem statements were too basic. They could have been better.\nThe volunteering team didn’t let us take that much pictures.\nWe weren’t even allowed to use the picture frame.\nI feel like the management could have been more better.\nWill be expecting System X Hackathon 2.0 to be more better."
  },
  {
    team: "Tech Titans",
    text: "It was a new experience for us. We got to learn how to solve problem in real time."
  },
  {
    team: "Dual Spark",
    text: "To the management team: Our experience was quite good and the only thing that could be improved is time management. We were told that we would have 6 hrs to complete the project, but because of late start, we did not get the full time. Other than this, the experience was good and I really appreciate the effort of the management team. Thank you!"
  },
  {
    team: "She Codes",
    text: "Well-organized hackathon by the 24CS batch! Everything was managed with great discipline and coordination. The arrangements, event flow and refreshment were all really good. Great efforts by organizers! :)\nExcellent teamwork, creativity, and dedication by all team members. Great job. The arrangements, event and refreshment were all good. Great job 24CS!\nWell-organized event, great management, and a positive environment. Such competitions really help us see our progress and improve ourselves."
  },
  {
    team: "Bug Busters",
    text: "Overall it was a great experience, management was well organized and highly engaging. Supportive mentors. Peaceful environment. Team building. Time management. Eagerly waiting for the next one... With best regards."
  },
  {
    team: "Anonymous",
    text: "It is our first hackathon experience which is a combo of excitement + confusion + learning. We are happy to join you, and we want more amazing and exciting hackathons like that."
  },
  {
    team: "Nexora",
    text: "Excellent hosting by our seniors. The hackathon was very well organized, engaging, and full of learning. Appreciate their hard work & guidance."
  },
  {
    team: "Anonymous",
    text: "So the feedback: it was good I guess, I enjoyed working in a chill environment, although it got a little too chill but it was good and I will say improve the guidance system."
  },
  {
    team: "F.A.R.Z",
    text: "Firstly, the setup in the STP was great and commendable. We were provided with the extension boards so we could charge our laptops easily.\nAs we’re from 26-Batch, it was really a new experience for us, and being a part of this Hackathon, hats off to the management, especially seniors who were able to pull this off in such a short time. Secondly, thanks again for providing us with the refreshments! XD\nRemarks: Dadha mazo ayo :)"
  },
  {
    team: "Byte Force",
    text: "Honestly, it was a really great experience. We learned a lot, enjoyed the whole process, and got to experience what a real hackathon feels like. Everything was really well organized, and we really appreciate the effort by 24CS in organizing the event. The refreshments were amazing too. Had a great time overall!"
  },
  {
    team: "ITP",
    text: "The Hackathon was a great experience and provided an excellent opportunity to learn, collaborate, and build something innovative within a limited time. The overall organization and environment were encouraging and the event helped us think creatively and work effectively as a team. It was an engaging and rewarding experience."
  },
  {
    team: "The Innovators",
    text: "The hackathon was really well organized and the organizers did a great job creating such a creative and engaging environment for students. We truly appreciate the effort they put into making this event. Overall, it was a great and enjoyable experience. However, the refreshment could have been a little better and more satisfying. Other than that, everything was well-managed and we really enjoyed the event."
  },
  {
    team: "Tayab OG",
    text: "The Hackathon was great & the goodies were excellent. The overall environment was enjoyable & engaging. However, the problem statement could have been better & more refined."
  },
  {
    team: "CTRL+4",
    text: "Overall great experience. Helpful and cooperative volunteers. Good environment."
  },
  {
    team: "Poesis Nexus",
    text: "Best Hackathon event ever. Really enjoyed the experience of problem solving, task management and learning capabilities. The environment is much comfortable providing ease to build the system easily. Appreciable especially to organizers. Hats off! Keep organizing such amazing hackathon :)"
  },
  {
    team: "Anonymous",
    text: "I’m very glad for participating in Hackathon 1.0 and want to advise new future batches after us to must participate at least once in this event. And special thank you to our seniors for this great event and some of the best memory of our uni life."
  },
  {
    team: "Debugging Warriors",
    text: "I participated in Hackathon 1.0 with my team of 4. We built a complete prototype in limited time. The energy, the collaboration and learning was unmatch. Best event for developers and A.I enthusiasts.\nParticipating in Hackathon 1.0 was truly inspiring and well-organized. It give us a great platform to showcase our skills and work as a team. Looking forward for next edition.\nHackathon 1.0 was an amazing learning experience for our team. The organization, mentorship and energy were excellent throughout. We really enjoyed building and collaborating under pressure."
  },
  {
    team: "Innovexa",
    text: "Attending first time hackathon is one of our good experience. I also enjoyed working with my team and sharing ideas with one another. Overall, it was great learning experience that increased my knowledge as well as practical skills. Thank you."
  },
  {
    team: "Alpha Squad",
    text: "The Hackathon was a great opportunity to learn, practice coding and work on a real world project. It help us to improve our problem solving and team work skills while giving us a chance to apply programming concepts in a practical way.\nNote: In this Hackathon juice is too hot, kindly work on it and next time give us cold one :)"
  },
  {
    team: "Webflix",
    text: "Everything was so good except refreshment. Professionalism = 100% (well organized).\nStickers are missing from our stationary.\nOverall good environment & got some good experience that how to solve a particular problem."
  },
  {
    team: "Claude's Plan",
    text: "It was the nice experience I got. Organizing team is very good and friendly and environment is also very good. Hats off to Toufeeq and all other fellow members.\nBhai maza aagiya. Agli baar raat main rukhna.\nAbsolute cinema.\nMind blowing."
  },
  {
    team: "LahootiX",
    text: "Had an amazing experience, was fun, challenging & learned a lot. The management was best. Anything we needed was provided. The volunteers were always roaming & seeing if anybody need help. Really enjoyed!"
  },
  {
    team: "Rizz Bee",
    text: "First thing the event is organized very well, there was no any type of issues and the main thing is that we have learned many things, we got motivation to do work and to improve our skills.\nIt was a good initiative by 24CS, we finally got a chance to do something practically other than just theoretical work. There should be more of these events so students can have a glimpse of how the professional work life would feel like."
  },
  {
    team: "Anonymous",
    text: "9. Songs are good, feels like coding at some cafe.\n10. Thanks for extending the time.\n11. Are you guys going to give us second box of food?"
  },
  {
    team: "Dark Mode",
    text: "The environment and setup is fabulous! Though there are some tech issues :( Overall, good experience. Keep it up & good luck for next time! :)"
  },
  {
    team: "Genius Minds",
    text: "Amazing experience, cooperative management. Cool & cozy environment. More than our expectation. Want to see more competitive environments like this. Never experienced such environment where we compete top coders of the university."
  },
  {
    team: "Team Alpha",
    text: "Arrangement was really too good. We would combinely suggest and recommend that refreshment must be good and there is burger instead of that bread. Internet connection was poor. AC was not that much chill. There must be an arrangement in which members can sit in front and only one bench 4 members. (Thank you)"
  },
  {
    team: "B.A.K.R.I",
    text: "1. Pen does not work.\n2. The problem statement is just way too big to be done in this short interval of time.\n3. Food was really nice.\n4. You guys should have given more swags, one pen wasn’t enough.\n5. It’s way too hot here, AC temp is 28°C. Please make it 16°C at least.\n6. Instead of giving problem statement on paper, you guys should have made a GitHub repo, so students would have learnt about GitHub and would have been a more advanced hackathon.\n7. BTW amazing experience and you guys did amazing job, 10/10 organization. One of our teammates says 5/10.\n8. Hackathon time should have been 9:00 to 5:00. It started late, then it is also ending very soon."
  },
  {
    team: "Anonymous",
    text: "1. Juice garam tha.\n2. Network issue: data campus mein nahi chal raha.\n3. Sitting management STP mein sahi nahi.\n4. Environment bohot acha hai.\n5. Sab students ka sath kam krna acha laga.\n6. Khana der se mila :(\n7. Mentors missing hai?"
  }
];

// ---------------------------------------------------------------------------
// STICKY_NOTES: anonymous note photos. One path per file in public/sticky-notes/
// ---------------------------------------------------------------------------
export const STICKY_NOTES = [
  "/sticky-notes/1.jpg",
"/sticky-notes/2.jpg",
"/sticky-notes/3.jpg",
"/sticky-notes/4.jpg",
"/sticky-notes/5.jpg",
"/sticky-notes/6.jpg",
"/sticky-notes/7.jpg",
"/sticky-notes/8.jpg",
"/sticky-notes/9.jpg",
"/sticky-notes/10.jpg",
"/sticky-notes/11.jpg",
"/sticky-notes/12.jpg",
"/sticky-notes/13.jpg",
"/sticky-notes/14.jpg",
"/sticky-notes/15.jpg",
"/sticky-notes/16.jpg",
"/sticky-notes/17.jpg",
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
