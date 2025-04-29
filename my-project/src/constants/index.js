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
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Smart Queue Reduction System",
    image: project1,
    description:
      "A facial recognition-based queue management system that reduces waiting times and ensures secure authentication.",
    technologies: ["Python", "OpenCV", "Flask", "SQLite", "React"],
  },
  {
    title: "Presence",
    image: project2,
    description:
      "An AI-based attendance system that uses facial recognition to automate and secure attendance tracking.",
    technologies: ["Python", "Flask", "OpenCV", "React", "SQLite"],
  },
  {
    title: "VeriScan",
    image: project3,
    description:
      "An ID verification system that extracts Aadhaar numbers from uploaded images using OCR for secure authentication.",
    technologies: ["Python", "Flask", "React", "SQLite", "Tesseract OCR"],
  },
  {
    title: "Smart Traffic Light System",
    image: project4,
    description:
      "An AI-powered traffic management system that dynamically adjusts signals based on vehicle density.",
    technologies: ["Python", "OpenCV", "Flask", "React", "MongoDB"],
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
