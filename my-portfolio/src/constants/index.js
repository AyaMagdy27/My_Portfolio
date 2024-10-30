import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";

export const PERSONAL_INFO = {
  email: "ayamagdy2025@gmail.com",
  phone: "+201555117246",
  whatsapp: "201555117246",
  linkedin: "aya-magdy-15811b271",
  github: "AyaMagdy27",
};

export const OBJECTIVE = `Dynamic and dedicated Frontend Developer with over two years of hands-on experience 
in building visually engaging and user-centric web applications. Equipped with a strong foundation in mathematics 
and extensive expertise in modern frontend technologies, I am eager to contribute to innovative projects by crafting 
efficient, scalable, and high-performance digital solutions.`;

export const ABOUT_TXT = `I am a highly motivated and detail-oriented Frontend Developer with a passion for creating
dynamic and visually appealing web applications. I have a strong foundation in mathematics and a keen eye for design,
which allows me to develop user-friendly interfaces that deliver an exceptional user experience. I am proficient in
modern frontend technologies such as ReactJS, Angular, and TypeScript, and I am committed to staying up-to-date with
the latest industry trends and best practices. I am excited about the opportunity to leverage my skills and expertise
to contribute to innovative projects and help drive digital transformation.`;

export const SKILLS = {
  expertise: [
    "Responsive design",
    "Mobile-first development",
    "UI/UX design",
    "Cross-browser compatibility",
    "Object-oriented programming (OOP)",
  ],
  tools: ["Figma", "Google Workspace", "Netlify", "GitHub", "Visual Studio Code" , "Bash"],
};
export const PROJECTS = [
  {
    title: "Lady E-commerce Website",
    image: project1,
    description: `Developed a dynamic e-commerce platform using ReactJS, incorporating product listings, 
    a user-friendly shopping interface, and secure payment gateways.`,
    technologies: ["HTML", "CSS3", "JavaScript", "Bootstrap"],
    url: "https://your-lady-ecommerce-website.netlify.app" // Add the actual URL here
  },
  {
    title: "HealthCare Clinical Website",
    image: project2,
    description: `Built a responsive website for a healthcare clinic, integrating features such as appointment 
    scheduling and healthcare services while ensuring a clean UI and easy accessibility.`,
    technologies: ["HTML", "CSS3", "JavaScript", "Bootstrap"],
    url: "https://your-healthcare-clinical-website.netlify.app" // Add the actual URL here
  },
  {
    title: "Timeless Watch E-commerce Website",
    image: project3,
    description: `Created a luxury e-commerce website for a watch brand, focusing on elegant design and optimized 
    performance across desktop and mobile platforms.`,
    technologies: ["HTML5", "CSS3", "JavaScript", "TypeScript", "Angular CLI"],
    url: "https://your-timeless-watch-ecommerce-website.netlify.app" // Add the actual URL here
  },
];


export const EDUCATION = [
  "Ongoing Diploma in Software Engineering, Cairo University, Cairo, Egypt",
  "Bachelor of Education in Mathematics, Helwan University, Cairo, Egypt",
];

export const CERTIFICATIONS = [
  { title: "Software Engineer", institution: "ALX", date: "ReactJs" },
  { title: "Frontend Developer", institution: "MCIT", date: "Angular" },
  { title: "AI Career Essentials", institution: "ALX", date: "" },
];
