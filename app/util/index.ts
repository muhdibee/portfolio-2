export function capitalizeFirstLetter(word: string) {
    if (!word) return word;
    return word.charAt(0).toUpperCase() + word.slice(1);
};


export const aboutMeDetail: string = "I’m a full-stack software engineer passionate about building scalable and efficient web applications.  I work with modern front-end frameworks like React and Next.js and back-end technologies like Node.js, Express.js and Nest.js. to build robust APIs and services. I’m adaptable to different tech stacks. I thrive in collaborative environments, whether on-site or remote. When I’m not coding, I enjoy exploring new tech trends, problem-solving, or spending time outdoors. Feel free to check out my work!";

export const heroSummary: string = " Hey, I’m Muhammad Ibrahim and I love building awesome software";
import image from "../../public/images/manage/image-portfolio-manage@2x.jpg";

export const portfolios = [
    {
        "id": 1,
        name: 'countris',
        shortDescription: `This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.`,
        background: `This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.`,
        staticPreviews: [image],
        link: '/portfolio/countris',
        liveLink: 'https://countries-summary.vercel.app/',
        skills: ["Interaction Design", "Front End Development"],
        technologies: ["HTML", "CSS", "JS"]
    },
]