import { IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin, IconBrandYoutube } from "@tabler/icons-react";

const Info={
    name: "Jose D. Pérez",
    stack: ["Software Enginner", "Backend Developer", "Mobile Developer", "Competitive Programmer", "Freelancer", "Open Source Contributor"],
    bio: "Estudiante de Ing. de Software. Soy una persona responsable, organizada, comunicativa, proactiva y con disposición para el trabajo en equipo Mi objetivo es pertenecer a una empresa para contribuir en el logro de las metas, asimismo pueda desarrollar y fortalecer mis conocimientos como profesional TI"
}

const ProjectInfo=[
    {
        title: "Hotel Booking Web",
        desc: "Sistema web software para gestión de reservas de habitaciones, creado con springboot del lado del servidor y la vista con angular, mysql como base de datos y utilizamos el estándar JWT para la autenticación y seguridad.",
        image: "hotelbooking.png",
        live: true,
        technologies: ["Angular", "Springboot", "MySql", "JWT"],
        link: "",
        github: "https://github.com/JoseDPerez11/frontendhotelbooking"
    },
    {
        title: "Portal Examen",
        desc: "Sistema web para la gestión de toma de examenes educativos, creado con springboot del lado del servidor y la vista con angular, mysql como base de datos y utilizamos el estándar JWT para la autenticación y seguridad.",
        image: "portalexamen.png",
        live: false,
        technologies: ["Angular", "Springboot", "MySql", "JWT"],
        link: "",
        github: "https://github.com/JoseDPerez11/sistema-examenes-frontend"
    },
    {
        title: "App Notas",
        desc: "Aplicación móvil para apunte de notas con la funcionalidad de categorizar dependiendo del tema, utilizando una arquitectura MVVM creado con kotlin y respaldo de distintos servicios que ofrece firebase.",
        image: "appnotes.png",
        live: false,
        technologies: ["Kotlin", "Firebase"],
        link: "",
        github: "https://github.com/JoseDPerez11/AppNotes"
    },
    {
        title: "LupiApp",
        desc: "Aplicación móvil para realizar pedidos de productos variados, tiene autenticación, creación de usuario, listado de productos, carrito de compra y detalle de los pedidos, todas las peticiones son respondidas por el servidor creado con sprinboot, que cuenta con encriptación de datos",
        image: "lupiapp.jpg",
        live: false,
        technologies: ["Angular", "Springboot", "MySql", "JWT", "Kotlin", "Firebase"],
        link: "",
        github: "https://github.com/JoseDPerez11/LupiApp"
    },

]

const SkillInfo = [
    {
        title: "Frontend",
        skills: ["HTML", "CSS", "JavaScript", "React JS", "Angular", "Material UI"]
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
        skills: ["Git", "Github", "VS Code", "Postman", "MongoDB Compass", "Spring Tool Suite", "JWT", "OAuth2"]
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
        role: "Universidad Tecnológica del Perú",
        company: "utp",
        date: "Ago 2023 - Presente",
        desc: "Ingenieria de Software",
        skills: ["Springboot", "React JS", "Angular", "Node JS", "MySQL", "MongoDB", "Microservices"]
    },
    {
        role: "IDAT",
        company: "idat",
        date: "Abr 2021 - Abr 2023",
        desc: "Desarrollo de Sistemas de Información",
        skills: ["Springboot", "React JS", "Angular", "Node JS", "MySQL", "MongoDB", "Microservices"]
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