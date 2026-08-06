export interface StatItem {
    id: string;
    label: string;
    value: number | string;
    targetNumber?: number;
    suffix: string;
}

export interface ContactInfo {
    email: string;
    phone?: string;
    location: string;
    availability: string;
    socials: {
        platform: string;
        url: string;
        iconClass: string;
    }[];
}

export interface SiteConfig {
    name: string;
    title: string;
    subtitle: string;
    description: string;
    contact: ContactInfo;
    stats: StatItem[];
}

export const siteConfig: SiteConfig = {
    name: "Swadesh Shivam",
    title: "Swadesh Shivam's Portfolio",
    subtitle: "Video Editor & Filmmaker",
    description: "Portfolio of Swadesh Shivam - Video Editor & Filmmaker specializing in cinematic stories and high-impact visual content.",
    contact: {
        email: "swadeshshivam@example.com",
        location: "Available Worldwide / Remote",
        availability: "Open for Freelance & Full-time",
        socials: [
            {
                platform: "LinkedIn",
                url: "#contact",
                iconClass: "fa-brands fa-linkedin-in"
            },
            {
                platform: "X",
                url: "#contact",
                iconClass: "fa-brands fa-x-twitter"
            },
            {
                platform: "Instagram",
                url: "https://www.instagram.com/",
                iconClass: "fa-brands fa-instagram"
            }
        ]
    },
    stats: [
        {
            id: "years-exp",
            label: "Years Experience",
            value: "2+",
            targetNumber: 2,
            suffix: "+"
        },
        {
            id: "projects-completed",
            label: "Projects Completed",
            value: "99+",
            targetNumber: 99,
            suffix: "+"
        },
        {
            id: "happy-clients",
            label: "Happy Clients",
            value: "50+",
            targetNumber: 50,
            suffix: "+"
        },
        {
            id: "views-generated",
            label: "Views Generated",
            value: "10M+",
            targetNumber: 10,
            suffix: "M+"
        }
    ]
};
