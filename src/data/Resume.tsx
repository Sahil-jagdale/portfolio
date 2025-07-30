import { Github, Linkedin, X, Resume, Email } from "@/icons/Icons";

export const DATA = {
  name: "Sahil",
  initials: "S",
  url: "",
  location: "Pune, Maharashtra, India",
  locationLink: "",
  description: "Full Stack Developer",
  summary: "",
  avatarUrl: "/image.png",

  skills: [
    {
      category: "Languages",
      items: ["Javascript/Typescript", "C++", "MySQL", "HTML", "CSS", "C"],
    },
    {
      category: "Frontend",
      items: ["React.js", "Next.js", "TailwindCSS"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "JWT", "Web Sockets", "Next.js"],
    },
    {
      category: "Database",
      items: ["Postgres", "MySQL", "MongoDB"],
    },
    {
      category: "Tools",
      items: ["Git", "Github", "Linux"],
    },
    {
      category: "Relevant Coursework",
      items: ["Data Structures", "Algorithms", "OOPS"],
    },
  ],

  navbar: [],
  contact: {
    email: "sahiljagdale1073@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Sahil-jagdale",
        icon: Github,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sahil-jagdale-5407b2310/",
        icon: Linkedin,
      },
      X: {
        name: "X",
        url: "https://x.com/SahilJagda9604",
        icon: X,
      },
      Email: {
        name: "Send Email",
        url: "mailto:sahiljagdale1073@gmail.com",
        icon: Email,
      },
      Resume: {
        name: "Resume",
        url: "https://drive.google.com/file/d/1Dgmyp58ZXymoTLrXOZxPtSuQc_Mt7jL3/view?usp=sharing",
        icon: Resume,
      },
    },
  },

  work: [
    {
      company: "Anokhasa pvt",
      href: "",
      location: "Hybrid",
      title: "Full Stack Developer Intern",
      logoUrl: "",
      start: "Nov 2024",
      end: "Jan 2025",
      description: "",
    },
  ],
  education: [
    {
      school: "D.Y.Patil College of Engineering, Akurdi",
      href: "https://www.dypcoeakurdi.ac.in/",
      degree: " Bachelor of Engineering.",
      start: "2022",
      end: "2026",
    },
    {
      school: "Mount Valley Junior College",
      href: "",
      degree: "High School",
      start: "2020",
      end: "2022",
    },
    {
      school: "Rising Star English School",
      href: "",
      degree: "School",
      start: "2014",
      end: "2020",
    },
  ],
  projects: [
    {
      title: "Explore mate",
      href: "https://explore-mate-three.vercel.app",
      status: 'Completed',
      description:
        "Led the development of a user-friendly travel planning web application enabling flight price comparison, and personalized recommendations for dining, activities, and accommodations.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Micro services"
      ],
    },
    {
      title: "Code Reviewer Tool",
      href: "https://code-reviewer-sigma.vercel.app/",
      status: 'comeleted',
      description:
        "Developed an AI-integrated code review tool using the Google Gemini API and React.js. Built real-time feedback interface for users to review syntax, logic, and coding standards",
      technologies: [
        "Gemini API",
        "Node.js",
        "React.js",
        "Express.js",
        "Vercel",
      ],
    },
    {
      title: "RealEstate App",
      href: "https://github.com/Sahil-jagdale/Real-estate-fullstack-project",
      status: 'progress',
      description:
        "Designed and built a full-stack real estate platform featuring user authentication, property listing, and messaging",
      technologies: ["Websockets", "Javascript", "Node.js", "React"],
    },
    {
      title: "Personal Portfolio",
      href: "https://nishas-portfolio.vercel.app/",
      status: 'comeleted',
      description:
        "Developed a fully responsive personal portfolio using Next.js and Tailwind CSS. Designed to be mobile-friendly, the portfolio showcases projects, skills, and contact sections with clean UI and smooth user experience.",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Client & Server Components",
        "SEO Optimization",
      ],
    },
  ],
} as const;
