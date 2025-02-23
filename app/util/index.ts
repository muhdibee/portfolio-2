export function capitalizeFirstLetter(word: string) {
    if (!word) return word;
    return word.charAt(0).toUpperCase() + word.slice(1);
};


export const aboutMeDetail: string = "I’m a full-stack software engineer passionate about building scalable and efficient web applications.  I work with modern front-end frameworks like React and Next.js and back-end technologies like Node.js, Express.js and Nest.js. to build robust APIs and services. I’m adaptable to different tech stacks. I thrive in collaborative environments, whether on-site or remote. When I’m not coding, I enjoy exploring new tech trends, problem-solving, or spending time outdoors. Feel free to check out my work!";

export const getInTouchText = `I’d love to hear about what you’re working on and how I could help. I’m currently 
  looking for a new role and am open to a wide range of opportunities. My preference 
  would be to find a position in a company in London. But I’m also happy to hear about 
  opportunities that don’t fit that description. I’m a hard-working and positive person 
  who will always approach each task with a sense of purpose and attention to detail. 
  Please do feel free to check out my online profiles below and get in touch using the form.`

export const heroSummary: string = " Hey, I’m Muhammad Ibrahim and I love building awesome software";

import image from "../../public/images/manage/image-portfolio-manage@2x.jpg";
import manage from "../../public/images/manage/image-portfolio-manage@2x.jpg";
import bookmark from "../../public/images/bookmark/image-portfolio-bookmark@2x.jpg";
import fylo from "../../public/images/fylo/image-portfolio-fylo@2x.jpg";
import insure from "../../public/images/insure/image-portfolio-insure@2x.jpg";



export const portfolios = [
    {
        "id": 1,
        name: 'Countris',
        shortDescription: `This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.`,
        background: `This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.`,
        staticPreviews: [image],
        link: '/portfolio/countris',
        liveLink: 'https://countries-summary.vercel.app/',
        skills: ["Interaction Design", "Front End Development"],
        technologies: ["HTML", "CSS", "JS"]
    },
    {
        "id": 2,
        name: 'IP address tracker',
        shortDescription: `This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.`,
        background: `This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.`,
        staticPreviews: [insure],
        link: '/portfolio/ip-address-tracker',
        liveLink: 'https://countries-summary.vercel.app/',
        skills: ["Interaction Design", "Front End Development"],
        technologies: ["HTML", "CSS", "JS"]
    },
    {
        "id": 3,
        name: 'Manage',
        shortDescription: `This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.`,
        background: `This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.`,
        staticPreviews: [manage],
        link: '/portfolio/manage',
        liveLink: 'https://countries-summary.vercel.app/',
        skills: ["Interaction Design", "Front End Development"],
        technologies: ["HTML", "CSS", "JS"]
    },
    {
        "id": 4,
        name: 'Bookmark',
        shortDescription: `This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.`,
        background: `This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.`,
        staticPreviews: [bookmark],
        link: '/portfolio/bookmark',
        liveLink: 'https://countries-summary.vercel.app/',
        skills: ["Interaction Design", "Front End Development"],
        technologies: ["HTML", "CSS", "JS"]
    },
    {
        "id": 5,
        name: 'Fylo',
        shortDescription: `This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.`,
        background: `This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.`,
        staticPreviews: [fylo],
        link: '/portfolio/fylo',
        liveLink: 'https://countries-summary.vercel.app/',
        skills: ["Interaction Design", "Front End Development"],
        technologies: ["HTML", "CSS", "JS", "React"]
    },
    {
        "id": 6,
        name: 'Insure',
        shortDescription: `This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.`,
        background: `This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.`,
        staticPreviews: [insure],
        link: '/portfolio/insure',
        liveLink: 'https://countries-summary.vercel.app/',
        skills: ["Interaction Design", "Front End Development"],
        technologies: ["HTML", "CSS", "JS"]
    },
    {
        "id": 7,
        name: 'First portfolio',
        shortDescription: `This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.`,
        background: `This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.`,
        staticPreviews: [image],
        link: '/portfolio/first-portfolio',
        liveLink: 'https://countries-summary.vercel.app/',
        skills: ["Interaction Design", "Front End Development"],
        technologies: ["HTML", "CSS", "JS"]
    },
]