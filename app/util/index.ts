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


// Manage images
import manage from "../../public/images/manage/image-portfolio-manage@2x.jpg";
import manageHero from "../../public/images/manage/image-manage-hero@2x.jpg";
import managePrev1 from "../../public/images/manage/image-manage-preview-1@2x.jpg";
import managePrev2 from "../../public/images/manage/image-manage-preview-2@2x.jpg";

// Bookmark images
import bookmark from "../../public/images/bookmark/image-portfolio-bookmark@2x.jpg";
import bookmarkHero from "../../public/images/bookmark/image-bookmark-hero@2x.jpg";
import bookmarkPrev1 from "../../public/images/bookmark/image-bookmark-preview-1@2x.jpg";
import bookmarkPrev2 from "../../public/images/bookmark/image-bookmark-preview-2@2x.jpg";

// Insure images
import insure from "../../public/images/insure/image-portfolio-insure@2x.jpg";
import insureHero from "../../public/images/insure/image-insure-hero@2x.jpg";
import insurePrev1 from "../../public/images/insure/image-insure-preview-1@2x.jpg";
import insurePrev2 from "../../public/images/insure/image-insure-preview-2@2x.jpg";

// Fylo images
import fylo from "../../public/images/fylo/image-portfolio-fylo@2x.jpg";
import fyloHero from "../../public/images/fylo/image-fylo-hero@2x.jpg";
import fyloPrev1 from "../../public/images/fylo/image-fylo-preview-1@2x.jpg";
import fyloPrev2 from "../../public/images/fylo/image-fylo-preview-2@2x.jpg";

/*Countris images
import manage from "../../public/images/manage/image-portfolio-manage@2x.jpg";
import manageHero from "../../public/images/manage/image-manage-hero@2x.jpg";
import managePrev1 from "../../public/images/manage/image-manage-preview-1@2x.jpg";
import managePrev2 from "../../public/images/manage/image-manage-preview-2@2x.jpg";

IP address tracker images
import manage from "../../public/images/manage/image-portfolio-manage@2x.jpg";
import manageHero from "../../public/images/manage/image-manage-hero@2x.jpg";
import managePrev1 from "../../public/images/manage/image-manage-preview-1@2x.jpg";
import managePrev2 from "../../public/images/manage/image-manage-preview-2@2x.jpg";
*/



export const portfolios = [
    {
        "id": 1,
        name: 'Manage',
        shortDescription: `This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.`,
        background: `This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.`,
        staticPreviews: [manage, manageHero, managePrev1, managePrev2],
        link: '/portfolio/manage',
        liveLink: 'https://countries-summary.vercel.app/',
        skills: ["Interaction Design", "/", "Front End Development"],
        technologies: ["HTML", "/", "CSS", "/", "JS"]
    },
    {
        "id": 2,
        name: 'Bookmark',
        shortDescription: `This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.`,
        background: `This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.`,
        staticPreviews: [bookmark, bookmarkHero, bookmarkPrev1, bookmarkPrev2],
        link: '/portfolio/bookmark',
        liveLink: 'https://world-ip-tracker.netlify.app/',
        skills: ["Interaction Design", "Front End Development"],
        technologies: ["HTML", "CSS", "JS"]
    },
    {
        "id": 3,
        name: 'Insure',
        shortDescription: `This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.`,
        background: `This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.`,
        staticPreviews: [insure, insureHero, insurePrev1, insurePrev2],
        link: '/portfolio/insure',
        liveLink: 'https://countries-summary.vercel.app/',
        skills: ["Interaction Design", "Front End Development"],
        technologies: ["HTML", "CSS", "JS"]
    },
    {
        "id": 4,
        name: 'Fylo',
        shortDescription: `This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.`,
        background: `This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.`,
        staticPreviews: [fylo, fyloHero, fyloPrev1, fyloPrev2],
        link: '/portfolio/fylo',
        liveLink: 'https://countries-summary.vercel.app/',
        skills: ["Interaction Design", "Front End Development"],
        technologies: ["HTML", "CSS", "JS", "React"]
    },
    // {
    //     "id": 2,
    //     name: 'IP address tracker',
    //     shortDescription: `This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.`,
    //     background: `This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.`,
    //     staticPreviews: [insure],
    //     link: '/portfolio/ip-address-tracker',
    //     liveLink: 'https://countries-summary.vercel.app/',
    //     skills: ["Interaction Design", "Front End Development"],
    //     technologies: ["HTML", "CSS", "JS"]
    // },
    // {
    //     "id": 7,
    //     name: 'First portfolio',
    //     shortDescription: `This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.`,
    //     background: `This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.`,
    //     staticPreviews: [manage],
    //     link: '/portfolio/first-portfolio',
    //     liveLink: 'https://countries-summary.vercel.app/',
    //     skills: ["Interaction Design", "Front End Development"],
    //     technologies: ["HTML", "CSS", "JS"]
    // },
    // {
    //     "id": 1,
    //     name: 'Countris',
    //     shortDescription: `This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.`,
    //     background: `This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.`,
    //     staticPreviews: [manage, manageHero, managePrev1, managePrev2],
    //     link: '/portfolio/countris',
    //     liveLink: 'https://countries-summary.vercel.app/',
    //     skills: ["Interaction Design", "Front End Development"],
    //     technologies: ["HTML", "CSS", "JS"]
    // },
]