import project1 from "../assets/images/project-1.png";
import project2 from "../assets/images/project-2.png";
import project3 from "../assets/images/project-3.png";
import project4 from "../assets/images/project-4.png";
import project5 from "../assets/images/project-5.png";
import project6 from "../assets/images/project-6.png";
import { RiReactjsLine } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { SiRedux } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";

export const HERO_CONTENT = `I am a passionate full-stack web developer with a knack for crafting innovative, robust, and scalable web applications. Specializing in single-page applications, I have honed my skills in front-end technologies like React, Next.js, and Angular, as well as back-end technologies such as Node.js and MongoDB. I thrive on bringing ideas to life, with a strong focus on polished user experiences, accessibility, and performance. Known for being a team player, problem solver, and hard worker, I take pride in writing well-structured code and constantly learning new skills to deliver exceptional results.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES_CONTENT = [
  {
    year: "2022 - 2024",
    role: "Full Stack Developer",
    company: "Q-lab",
    description: `Developed custom content management systems (CMS) and websites 
to meet specific client needs and requirements, resulting in a 60% 
increase in client satisfaction.
Implemented responsive front-end interfaces using React, HTML5, CSS, 
SASS, TypeScript, and Redux, ensuring seamless user experiences across 
various devices, which improved user engagement by 70%. Worked with 
backend technologies including Node.js, Express, and MongoDB to support 
various client projects, enhancing system efficiency by 10%.
Collaborated with cross-functional teams, including designers and product 
managers, to gather project requirements and deliver solutions within set 
timelines.`,
    technologies: ["Javascript", "React.js", "Sass", "Node.js", "mongoDB"],
  },
  {
    year: "2010-2011",
    role: "Computers Laboratory",
    company: "",
    description: `Provided computer maintenance and repair services.`,
    technologies: [],
  },
];

export const Education_CONTENT = [
  {
    year: "2021",
    role: " Diploma/Certification Full stack developer",
    company: "Coding Academy",
    description: `Completed an intensive 640-hour coding bootcamp`,
  },
  {
    year: "2014-2016",
    role: "Diploma Electronics and Computers",
    company: "Hispin College",
    description: `Graduated with honors Practical Engineering`,
  },
  {
    year: "2014-2016",
    role: "Diploma Electronics and Computers",
    company: "Hispin College",
    description: `Graduated with honors Practical Engineering`,
  },
];

export const PROJECTS = [
  {
    title: "Live Chat App",
    image: project6,
    description:
      "A fully functional live chat application featuring user authentication with login and signup pages. Users can explore a list of conversations, select one, and engage in real-time messaging. With seamless navigation, online status updates, and live chat functionality powered by Socket.io, enjoy a smooth and interactive chat experience.",
    technologies: [
      "HTML",
      "CSS",
      "React",
      "Sass",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
    ],
    link: "https://live-chat-4ydd.onrender.com",
  },
  {
    title: "Pizza Carve Website",
    image: project1,
    description:
      "A fully functional pizza shop website featuring an interactive menu. Customers can explore our mouthwatering pizza selection. With seamless navigation and real-time updates, enjoy a hassle-free pizza experience at Pizza Carve!",
    technologies: ["HTML", "CSS", "React", "Sass", "Aos"],
    link: "https://pizzacarve.onrender.com/",
  },
  {
    title: "Jurassic Jungle Web App",
    image: project2,
    description:
      "Jurassic Jungle is an educational platform dedicated to all things dinosaurs. Dive into a rich collection of data on prehistoric creatures, read fascinating articles, and explore the world of dinosaurs like never before. Users can sign up, become members, contribute by writing their own articles, and even add new dinosaurs to the database. With a comprehensive admin panel, site management is streamlined for administrators, ensuring a dynamic and evolving learning environment. Step into Jurassic Jungle and unleash your inner paleontologist!",
    technologies: [
      "HTML",
      "CSS",
      "React",
      "Sass",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    link: "https://jurassicjungle.onrender.com",
  },
  {
    title: "Covid-19 Tracker App",
    image: project3,
    description:
      "A fully functional app providing real-time COVID-19 status updates for countries worldwide. Features include interactive data visualization and responsive design, built with React.js and disease.sh API ",
    technologies: ["HTML", "CSS", "React", "Sass", "React material UI"],
    link: "https://avishaietach.github.io/Covid-19-Tracker/",
  },
  {
    title: "MemeGen",
    image: project4,
    description:
      "A fully functional meme generator with features like customizable templates, text overlay, and easy downloading options. Create and download your own memes effortlessly with a user-friendly interface.",
    technologies: ["HTML", "CSS", "Javascript"],
    link: "https://avishaietach.github.io/sprinit2/",
  },
  {
    title: "Minesweeper",
    image: project5,
    description:
      "A fully functional Minesweeper game with features including customizable difficulty levels, a responsive game board, and intuitive controls. Test your logic and problem-solving skills with an engaging and classic puzzle experience.",
    technologies: ["HTML", "CSS", "Javascript"],
    link: "https://avishaietach.github.io/Sprint1/",
  },
];

export const CONTACT = {
  linkedin: "https://linkedin.com/in/avishaietach",
  phoneNo: "052-7321-341",
  email: "etach89@gmail.com",
};

export const technologies = [
  {
    icon: FaHtml5,
    color: "text-orange-600",
    duration: 2.5,
  },
  {
    icon: FaCss3Alt,
    color: "text-sky-700",
    duration: 3,
  },
  {
    icon: FaJsSquare,
    color: "text-yellow-400",
    duration: 5,
  },
  {
    icon: BiLogoTypescript,
    color: "text-sky-600",
    duration: 2,
  },
  {
    icon: RiReactjsLine,
    color: "text-cyan-400",
    duration: 6,
  },
  {
    icon: SiRedux,
    color: "text-purple-800",
    duration: 4,
  },
  {
    icon: FaSass,
    color: "text-pink-500",
    duration: 6,
  },
  {
    icon: FaNodeJs,
    color: "text-lime-600",
    duration: 2.5,
  },
  {
    icon: SiMongodb,
    color: "text-lime-600",
    duration: 3,
  },
];
