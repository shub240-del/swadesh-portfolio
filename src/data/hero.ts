export interface HeroData {
    badge: string;
    headline: {
        line1: string;
        line2: string;
    };
    subheadline: string;
    primaryButton: {
        text: string;
        href: string;
    };
    secondaryButton: {
        text: string;
        href: string;
    };
    heroImage: string;
    watermarkText: {
        firstName: string;
        lastName: string;
    };
}

export const heroData: HeroData = {
    badge: "Available for Freelance Projects",
    headline: {
        line1: "I DON'T JUST EDIT VIDEOS.",
        line2: "I BUILD STORIES PEOPLE REMEMBER."
    },
    subheadline: "Helping creators, brands and businesses transform raw footage into cinematic experiences that increase engagement and leave lasting impact.",
    primaryButton: {
        text: "View Portfolio",
        href: "#projects"
    },
    secondaryButton: {
        text: "Let's Work Together",
        href: "#contact"
    },
    heroImage: "./assets/swadesh-landing-page.png",
    watermarkText: {
        firstName: "SWADESH",
        lastName: "SHIVAM"
    }
};
