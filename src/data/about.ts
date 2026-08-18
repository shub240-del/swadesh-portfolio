export interface AboutData {
    headline: {
        line1: string;
        line2: string;
    };
    location: string;
    paragraphs: string[];
    image: string;
    imageAlt: string;
}

export const aboutData: AboutData = {
    headline: {
        line1: "CRAFTING STORIES",
        line2: "FRAME BY FRAME."
    },
    location: "Patna, Bihar",
    paragraphs: [
        "Hi, I'm Swadesh Shivam — a video editor and writer from Patna, Bihar, with 4+ years of experience and 2000+ projects completed.",
        "Over the years, I've worked across different styles of video content, turning raw footage into engaging stories through thoughtful editing, pacing, sound, motion, and visual storytelling.",
        "For me, editing isn't just about cutting clips together. It's about understanding the story, finding the right rhythm, and making every frame serve a purpose.",
        "Whether it's short-form content, YouTube videos, brand content, or cinematic projects, my goal is simple: create work that feels intentional, keeps people watching, and communicates the creator's vision clearly."
    ],
    image: "./assets/swadesh-about.jpg",
    imageAlt: "Swadesh Shivam"
};
