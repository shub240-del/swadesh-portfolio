# Swadesh Shivam — Video Editor & Filmmaker Portfolio

A premium, cinematic, responsive web portfolio built for **Swadesh Shivam**, a professional Video Editor & Filmmaker based in Patna, Bihar. Designed with rich glassmorphism aesthetics, dynamic video marquees, 3D fanned card stacks, client stories, and smooth animations.

---

## 🌟 Features & Highlights

- **Cinematic Dark Theme Aesthetics**: Features dark crimson & ambient glow lighting orbs matching portfolio branding.
- **Hero & Headline Section**: Bold typographic headline, live availability badge, experience stats, and hero banner background.
- **Visual Highlights Showcase Reel**: Clean poster container state ready for featured editor showreel deployment.
- **Infinite Auto-Scrolling Video Marquee Gallery**: Dual-set seamless loop showcasing short-form YouTube edits, Shorts, TikToks, and Reels.
- **Long-Form Video Highlights Grid**: Dedicated grid layout featuring curated long-form YouTube videos and creative edits.
- **3D Fanned Services Stack**: Interactive 5-card stacked services breakdown (YouTube Editing, Short Form Content, Podcast Editing, Commercial Ads, Motion Graphics).
- **Client Stories & Reviews Carousel**: Dynamic testimonial slider featuring verified client reviews with client avatars and star ratings.
- **Get In Touch & Contact Form**: Functional contact section integrated with EmailJS for direct inquiry handling.
- **Vite & TypeScript Built**: Optimized asset pipeline with automatic hashing, type safety, and zero broken build paths.

---

## 📁 Folder & File Structure

```text
pot.folio/
├── assets/                                  # Media & Photo Assets
│   ├── swadesh-landing-page.png             # Hero background banner
│   ├── swadesh-about.jpg                    # About Me portrait image
│   ├── youtube.jpg                          # Services Card Preview
│   ├── short-form-video-trends.jpg          # Services Card Preview
│   ├── podcast.jpg                          # Services Card Preview
│   ├── commercial-ads-preview.jpg           # Services Card Preview
│   └── motion-designer-software-vector.jpg  # Services Card Preview
├── public/                                  # Public Assets
│   ├── favicon.svg                          # Portfolio Favicon
│   └── og-image.png                         # Open Graph Social Share Image
├── src/                                     # Source Code
│   ├── data/                                # Modular Data Layer
│   │   ├── site.ts                          # Site branding & contact config
│   │   ├── hero.ts                          # Hero section data & image import
│   │   └── about.ts                         # About section data & image import
│   ├── main.ts                              # Application Entry Point & Interactivity
│   └── vite-env.d.ts                        # TypeScript declarations for assets
├── index.html                               # Main Portfolio Homepage
├── styles.css                               # Main CSS Stylesheet & Design System
├── tsconfig.json                            # TypeScript configuration
├── package.json                             # Dependencies & Scripts
└── vercel.json                              # Deployment configuration
```

---

## 🛠️ Technologies Used

- **TypeScript / Vite**: Fast dev server and optimized production bundler.
- **HTML5**: Semantic markup, embedded YouTube IFrames.
- **CSS3**: Custom CSS variables, flexbox, CSS Grid, glassmorphism, 3D CSS transforms, `@keyframes` animations.
- **JavaScript (ES6+)**: Modular TypeScript for navigation toggles, carousel slider, counter animations, and infinite marquee logic.
- **FontAwesome 6.5.2**: Scalable vector icons for social media and UI elements.
- **Google Fonts**: *Poppins* font family.

---

## 🚀 How to Run Locally

```bash
npm run dev
```

### Production Build

```bash
npm run build
npm run preview
```
