import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";


export const HERO = {
  name: "REVANTH URADI,",
  role: "FULLSTACK DEVELOPER",
  description:
    " Enthusiastic full-stack developer, I have hands-on experience in building and deploying several projects across both front-end and back-end technologies. Your passion for coding and problem-solving drives your ability to deliver complete, functional solutions.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "PENNYTRACKER",
    description: "financial tracking web application",
    githubLink: "https://github.com/revanthuradi/pennyTracker",
  },
  {
    id: 2,
    name: "WEATHERNOW",
    description: "real time weather application",
    githubLink: "https://github.com/revanthuradi/weatherNow",
  },

  {
    id: 3,
    name: "CHATGLIDE",
    description: "real time ChatApp",
    githubLink: "https://github.com/revanthuradi/CHAT-GLIDE",
  },
]

export const ABOUT = [
  "I'am a skilled full-stack developer specializing in the MERN stack (MongoDB, Express, React, Node.js), with a deep understanding of both front-end and back-end development. I excel at building dynamic, scalable applications using React for creating responsive UIs, TailwindCSS for efficient and modern styling, and Redux for state management in complex applications. On the back end,I'am proficient in Node.js and Express for building robust APIs, with MongoDB as your preferred database, ensuring seamless data handling.",
  "Additionally, I have experience with SQL databases, which expands your flexibility in handling relational data when needed. I have a strong ability to manage and integrate various tools and frameworks, making you highly adaptable in different project environments. With your keen eye for detail and problem-solving skills, I bring a well-rounded approach to delivering quality software solutions."
]

export const SKILLS = ["HTML", 'CSS', 'JAVASCRIPT', 'AJAX', 'JQUERY', 'REACTJS', 'TAILWINDCSS', 'REDUX', 'NODEJS', 'EXPRESSJS', 'MONGODB', 'MONGOOSE', 'FRAMERMOTION', 'JWT', 'POSTMAN']


export const SOCIAL_MEDIA_LINKS = [
  {
    name: "GITHUB",
    href: "https://github.com/revanthuradi",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    name: "LINKED IN",
    href: "www.linkedin.com/in/revanthuradi",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
  {
    name: "INSTAGRAM",
    href: "https://www.instagram.com/revanthuradi/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    name: "TWITTER",
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },

];
