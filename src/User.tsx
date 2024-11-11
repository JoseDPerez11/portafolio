import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin, IconBrandYoutube } from "@tabler/icons-react";

const Info={
    name: "Jose D. Pérez",
    stack: ["Software Enginner", "Backend Developer", "Mobile Developer", "Competitive Programmer", "Freelancer", "Open Source Contributor"],
    bio: "Estudiante de Ing. de Software. Soy una persona responsable, organizada, comunicativa, proactiva y con disposición para el trabajo en equipo Mi objetivo es pertenecer a una empresa para contribuir en el logro de las metas, asimismo pueda desarrollar y fortalecer mis conocimientos como profesional TI"
}

const ProjectInfo=[
    {
        title: "Hotel Booking Web",
        desc: "Ekart is a modern, fully responsive e-commerce platform built using React, TailwindCSS, Heroicons, and HeadlessUI, offering a seamless shopping experience across all devices. It features secure user authentication with login, registration, and logout functionalities. Users can add items to a wishlist or remove them, search for specific products, and add them to a shopping cart for purchase. The checkout process includes form validation for address and payment information, ensuring accuracy and security. After purchase, users can view their order history in the Orders section. Ekart combines robust functionality with a sleek, intuitive design, making online shopping effortless and enjoyable.",
        image: "Ekart.png",
        live: true,
        technologies: ["Angular", "Springboot", "MySql", "JWT"],
        link: "",
        github: "https://github.com/JoseDPerez11/frontendhotelbooking"
    },
    {
        title: "Portal Examen",
        desc: "Facebook Clone is a full-stack web application that replicates the core features of Facebook, including user authentication, posting, and commenting. The front end is built with React, TailwinCSS, Tabler-Icons, Mantine and Firebase, while the back end uses Firebase for user authentication and data storage. Users can create an account, log in, post updates, and comment on posts. The app features real-time updates, so users can see new comments as they are posted. Facebook Clone provides a seamless user experience with a clean, modern design and intuitive functionality.",
        image: "Facebook.png",
        live: false,
        technologies: ["Angular", "Springboot", "MySql", "JWT"],
        link: "",
        github: "https://github.com/JoseDPerez11/sistema-examenes-frontend"
    },
    {
        title: "App Notas",
        desc: "Spotify Clone is a full-stack web application that replicates the core features of Spotify, including user authentication, music playback, and playlist creation. The front end is built with React, TailwindCSS, Heroicons, and Firebase, while the back end uses Firebase for user authentication and data storage. Users can create an account, log in, search for songs, and create playlists. The app features real-time updates, so users can see new songs as they are added. Spotify Clone provides a seamless user experience with a clean, modern design and intuitive functionality.",
        image: "Spotify.png",
        live: false,
        technologies: ["Kotlin", "Firebase"],
        link: "",
        github: "https://github.com/JoseDPerez11/AppNotes"
    },
    {
        title: "LupiApp",
        desc: "Travel Tracker is a full-stack web application that allows users to track their travel experiences and share them with others. The front end is built with React, Bootstrap, while the back end uses Node.js, Express, and PostgresSQL. Users can create an account, log in, add new trips, and view their past trips on a map. The app features a clean, modern design with interactive maps and a user-friendly interface. Travel Tracker combines functionality with style, making it easy and enjoyable to record and share travel memories.",
        image: "Travel.png",
        live: false,
        technologies: ["Angular", "Springboot", "MySql", "JWT", "Kotlin", "Firebase"],
        link: "",
        github: "https://github.com/JoseDPerez11/LupiApp"
    },

]

const SkillInfo = [
    {
        title: "Frontend",
        skills: ["HTML", "CSS", "JavaScript", "React JS", "Angular", "Material UI", "Bootstrap"]
    },
    {
        title: "Backend",
        skills: ["Springboot", "Node JS", "MySQL", "MongoDB", "Firebase"]
    },
    {
        title: "Languages",
        skills: ["Kotlin", "C++", "Java", "JavaScript", "TypeScript"]
    },
    {
        title: "Tools",
        skills: ["Git", "Github", "VS Code", "Postman", "MongoDB Compass", "Spring Tool Suite"]
    }
]

const socialLinks = [
    { link: "https://github.com/JoseDPerez11", icon: IconBrandGithub },
    { link: "https://www.linkedin.com/in/josepeca47609b212", icon: IconBrandLinkedin },
    { link: "https://www.instagram.com/jdaniel_perez11", icon: IconBrandInstagram }, 
    { link: "https://www.youtube.com/@ProgramaElMundoJP", icon: IconBrandYoutube }
];

const ExperienceInfo = [
    {
        role: "Specialist Programmer",
        company: "Infosys",
        date: "Oct 2023 - Present",
        desc: "I led software development with Spring Boot, React, and Angular, creating scalable microservices and interfaces. I optimized performance by integrating frontend and backend, and enhanced security with RESTful APIs. Collaborating in agile teams, I fostered innovation and efficiency for top-quality solutions.",
        skills: ["Springboot", "React JS", "Angular", "Node JS", "MySQL", "MongoDB", "Microservices"]
    },
    {
        role: "System Engineer",
        company: "Infosys",
        date: "Nov 2022 - Sep 2023",
        desc: " I leveraged my skills in Java, Selenium, automation testing, and MySQL to design and implement automated testing frameworks, ensuring robust software validation. I optimized database performance and reliability, and collaborated with cross-functional teams to enhance system operations and ensure seamless integration.",
        skills: ["Java", "MySQL", "Hibernate", "Selenium", "Jenkins", "JIRA", "Automation Testing"]
    }
]

const Slugs = [
    "typescript",
    "spring",
    "javascript",
    "java",
    "react",
    "angular",
    "android",
    "html5",
    "css3",
    "springboot",
    "mongodb",
    "selenium",
    "mysql",
    "amazonaws",
    "firebase",
    "testinglibrary",
    "docker",
    "git",
    "jira",
    "github",
    "visualstudiocode",
    "androidstudio"
]

export {Info, ProjectInfo, SkillInfo, ExperienceInfo, socialLinks, Slugs};