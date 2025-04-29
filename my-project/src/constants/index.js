import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I'm a Computer Science student who loves turning ideas into working systems. Whether it's building tools that make things easier, automating what feels slow, or just figuring out how things work under the hood—I'm always up for the challenge. I care about writing clean, thoughtful code and creating things that are actually useful and enjoying the process of getting better every day.`;

export const ABOUT_TEXT = `I am a dedicated and curious developer with a strong interest in building reliable, thoughtful, and practical systems. While currently pursuing my degree in Computer Science, I’ve spent the past few years designing and developing full-stack applications that solve real problems — from smart traffic systems to facial recognition-based queue management tools.

I’ve worked with technologies like Python, Flask, SQLite, React, and OpenCV, and I’m always expanding my toolkit as I explore areas like AI, backend development, and embedded systems. My journey into tech started with a simple interest in how systems work, and it’s grown into a drive to create things that are both technically solid and genuinely useful.

I enjoy working on collaborative projects, leading initiatives like the MLSA community at MIET, and constantly learning from every challenge. Outside of coding, you’ll find me experimenting with new tech, thinking about system design, or simplifying complex ideas into working solutions.`;

export const EXPERIENCES = [
  {
    year: "Oct 2023 - Apr 2025 ",
    role: "Head Of Operations",
    company: "MLSA MIET",
    description: `Leading operational strategies, streamlining processes, and overseeing successful implementation of initiatives to enhance the college community's tech-driven projects.`,
    technologies: ["React", "Postgres", "Python"],
  },
  {
    year: "Dec 2024 - June 2025",
    role: "Software Engineer",
    company: "IoTTrafic",
    description: `Designed and developed a smart traffic management system leveraging real-time vehicle detection and automated signal control to reduce congestion.`,
    technologies: ["Python", "OpenCV", "JavaScript", "Flask"],
  },
  // {
  //   year: "2021 - 2022",
  //   role: "Full Stack Developer",
  //   company: "Facebook",
  //   description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  //   technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  // },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];

export const PROJECTS = [
  {
    title: "Smart Queue Reduction System",
    image: project1,
    description:
      "Developed a facial recognition-based queue management system with liveness detection and encrypted local authentication to streamline secure access.",
    technologies: ["Python", "OpenCV", "Flask", "SQLite", "Fernet"],
    githubUrl: "https://github.com/Yaggggy/FaceTap",
  },
  {
    title: "Presence",
    image: project2,
    description:
      "A lightweight and secure employee attendance system that uses real-time geolocation to validate on-site check-ins. Designed for workplaces where physical presence matters, the app ensures users can only mark attendance from authorized locations.",
    technologies: ["Python", "React", "JavaScript", "Next.Js", "MongoDB"],
    githubUrl: "https://github.com/Yaggggy/presence",
  },
  {
    title: "Kissan Buddy",
    image: project3,
    description:
      "Developed an AI-powered platform for farmers that provides crop and fertilizer recommendations, pest detection via CNN, weather forecasting, and multilingual support using integrated Python and R-based models.",
    technologies: ["Python", "Kreas", "scit-learn", "Pandas"],
    githubUrl: "https://github.com/Yaggggy/kissan_buddy",
  },
  {
    title: "Pakki Registry",
    image: project4,
    description:
      "Designed a secure and transparent land registry system leveraging blockchain-like data integrity and document verification for tamper-proof property records.",
    technologies: ["Python", "Solidity", "Flask", "Ethereum", "MongoDB"],
    githubUrl: "https://github.com/Yaggggy/Pakki_Registry",
  },
  // {
  //   title: "AI-Powered Speed Reading App",
  //   image: project5,
  //   description:
  //     "A web application that extracts text from book images and displays words at a user-controlled speed for faster reading.",
  //   technologies: ["Python", "Flask", "React", "OCR", "SQLite"],
  // },
];

export const CONTACT = {
  address: "Meerut, Uttar Pradesh, India",
  phoneNo: "+91   9520664190 ",
  email: "yagyanshsinghdeshwal@gmail.com",
};
