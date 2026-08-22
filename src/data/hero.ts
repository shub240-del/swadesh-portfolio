export interface HeroData {
    badge: string;
    headline: {
        line1: string;
        line2sand: string;
        line2black: string;
        line3: string;
        line4: string;
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
        line1: "I DON'T JUST",
        line2sand: "EDIT ",
        line2black: "VIDEOS.",
        line3: "I BUILD STORIES",
        line4: "PEOPLE REMEMBER."
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
    heroImage: "/images/hero/swadesh-hero.png",
    watermarkText: {
        firstName: "SWADESH",
        lastName: "SHIVAM"
    }
};
