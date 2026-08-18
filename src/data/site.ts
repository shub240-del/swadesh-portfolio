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
    subtitle: "Video Editor & Writer",
    description: "Portfolio of Swadesh Shivam - Video Editor & Writer specializing in cinematic stories and high-impact visual content.",
    contact: {
        email: "solotalksstory@gmail.com",
        location: "Patna, Bihar",
        availability: "Open for Freelance & Full-time",
        socials: [
            {
                platform: "Instagram",
                url: "https://www.instagram.com/swadesh.x?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
                iconClass: "fa-brands fa-instagram"
            },
            {
                platform: "YouTube",
                url: "https://www.youtube.com/@swadesh.x",
                iconClass: "fa-brands fa-youtube"
            }
        ]
    },
    stats: [
        {
            id: "years-exp",
            label: "Years Experience",
            value: "4+",
            targetNumber: 4,
            suffix: "+"
        },
        {
            id: "projects-completed",
            label: "Projects Completed",
            value: "2000+",
            targetNumber: 2000,
            suffix: "+"
        }
    ]
};
