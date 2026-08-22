export interface ShowreelConfig {
    videoUrl: string;
    posterUrl?: string;
    title: string;
    caption?: string;
}

export const showreelConfig: ShowreelConfig = {
    videoUrl: "/videos/showreel.mp4",
    posterUrl: "", // Optional poster image URL
    title: "Swadesh Shivam — Showreel",
    caption: "Iktara - To The Dreams - A Short Film"
};
