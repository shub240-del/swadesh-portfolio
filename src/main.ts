import { heroData } from './data/hero';
import { siteConfig } from './data/site';
import { aboutData } from './data/about';

document.addEventListener('DOMContentLoaded', () => {
    // Populate Hero Section & Site Branding & About Section from data layer
    renderHeroSection();
    renderSiteBranding();
    renderAboutSection();

    // UI Interactive Logic
    initNavigation();
    initStatsCounter();
    initReviewsCarousel();
    initContactForm();
    initImageFallbackHandlers();
});

function initImageFallbackHandlers(): void {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', () => {
            console.warn(`[Asset Error] Image failed to load: ${img.src}`);
            img.style.display = 'none';
            const parent = img.parentElement;
            if (parent && !parent.querySelector('.img-fallback-box')) {
                const fallback = document.createElement('div');
                fallback.className = 'img-fallback-box';
                fallback.style.cssText = 'width:100%;height:100%;min-height:160px;display:flex;align-items:center;justify-content:center;background:rgba(120,10,19,0.4);border:1px solid rgba(244,228,208,0.2);border-radius:16px;color:#f4e4d0;font-family:sans-serif;font-weight:600;font-size:0.9rem;text-transform:uppercase;letter-spacing:1px;';
                fallback.innerText = 'Swadesh Shivam Portfolio';
                parent.appendChild(fallback);
            }
        });
    });
}

function renderAboutSection(): void {
    const headlineEl = document.getElementById('about-headline');
    if (headlineEl) {
        headlineEl.innerHTML = `
            <span class="text-sand">${aboutData.headline.line1}</span><br>
            <span class="text-black">${aboutData.headline.line2}</span>
        `;
    }

    const paragraphsEl = document.getElementById('about-paragraphs');
    if (paragraphsEl && aboutData.paragraphs) {
        paragraphsEl.innerHTML = aboutData.paragraphs.map(p => `
            <p class="about-text-p">${p}</p>
        `).join('');
    }

    const imgEl = document.getElementById('about-portrait-img') as HTMLImageElement | null;
    if (imgEl) {
        imgEl.src = aboutData.image;
        imgEl.alt = aboutData.imageAlt;
    }
}

function renderHeroSection(): void {
    const badgeEl = document.getElementById('hero-badge-text');
    if (badgeEl) {
        badgeEl.textContent = heroData.badge;
    }

    const headlineEl = document.getElementById('hero-headline');
    if (headlineEl) {
        headlineEl.innerHTML = `
            <span class="text-sand">${heroData.headline.line1}</span><br>
            <span class="text-sand">${heroData.headline.line2sand}</span><span class="text-black">${heroData.headline.line2black}</span><br>
            <span class="text-sand">${heroData.headline.line3}</span><br>
            <span class="text-black">${heroData.headline.line4}</span>
        `;
    }

    const subheadlineEl = document.getElementById('hero-description');
    if (subheadlineEl) {
        subheadlineEl.textContent = heroData.subheadline;
    }

    const primaryBtnEl = document.getElementById('hero-primary-btn') as HTMLAnchorElement | null;
    if (primaryBtnEl) {
        primaryBtnEl.href = heroData.primaryButton.href;
        primaryBtnEl.querySelector('span')!.textContent = heroData.primaryButton.text;
    }

    const secondaryBtnEl = document.getElementById('hero-secondary-btn') as HTMLAnchorElement | null;
    if (secondaryBtnEl) {
        secondaryBtnEl.href = heroData.secondaryButton.href;
        secondaryBtnEl.querySelector('span')!.textContent = heroData.secondaryButton.text;
    }

    const bgFirstNameEl = document.querySelector('.bg-name-first');
    if (bgFirstNameEl) {
        bgFirstNameEl.textContent = heroData.watermarkText.firstName;
    }

    const bgLastNameEl = document.querySelector('.bg-name-last');
    if (bgLastNameEl) {
        bgLastNameEl.textContent = heroData.watermarkText.lastName;
    }

    const heroImgEl = document.querySelector('.hero-bg-image') as HTMLImageElement | null;
    if (heroImgEl) {
        heroImgEl.src = heroData.heroImage;
        heroImgEl.alt = `${siteConfig.name} Hero Image`;
    }
}

function renderSiteBranding(): void {
    // Navigation Logo & Subtitle
    const logoTextEl = document.querySelector('.logo-text');
    if (logoTextEl) {
        logoTextEl.textContent = siteConfig.name;
    }

    const logoSubtitleEl = document.getElementById('logo-subtitle');
    if (logoSubtitleEl) {
        logoSubtitleEl.textContent = siteConfig.subtitle;
    }

    // Render Stats
    const statsContainerEl = document.getElementById('hero-stats-container');
    if (statsContainerEl) {
        statsContainerEl.innerHTML = siteConfig.stats.map((stat, idx) => `
            <div class="stat-item">
                <span class="stat-number" data-target="${stat.targetNumber || 0}">${stat.value}</span>
                <span class="stat-label">${stat.label}</span>
            </div>
            ${idx < siteConfig.stats.length - 1 ? '<div class="stat-divider"></div>' : ''}
        `).join('');
    }

    // Footer Copyright
    const footerTextEl = document.querySelector('.footer-content p');
    if (footerTextEl) {
        const currentYear = new Date().getFullYear();
        footerTextEl.textContent = `© ${currentYear} ${siteConfig.name}. All rights reserved.`;
    }
}

function initNavigation(): void {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinksContainer = document.getElementById('nav-links');
    const backToTopBtn = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar?.classList.add('scrolled');
        } else {
            navbar?.classList.remove('scrolled');
        }

        if (window.scrollY > 500) {
            backToTopBtn?.classList.add('visible');
        } else {
            backToTopBtn?.classList.remove('visible');
        }

        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 200;

        sections.forEach(section => {
            const sectionTop = (section as HTMLElement).offsetTop;
            const sectionHeight = (section as HTMLElement).offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    if (mobileToggle && navLinksContainer) {
        mobileToggle.addEventListener('click', () => {
            navLinksContainer.classList.toggle('active');
            const icon = mobileToggle.querySelector('i');
            if (icon) {
                if (navLinksContainer.classList.contains('active')) {
                    icon.className = 'fa-solid fa-xmark';
                } else {
                    icon.className = 'fa-solid fa-bars';
                }
            }
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navLinksContainer.classList.remove('active');
                const icon = mobileToggle.querySelector('i');
                if (icon) {
                    icon.className = 'fa-solid fa-bars';
                }
            });
        });
    }

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

function initStatsCounter(): void {
    const statNumbers = document.querySelectorAll('.stat-number');
    let animated = false;

    const animateStats = () => {
        if (animated) return;
        const heroStats = document.querySelector('.hero-stats');
        if (!heroStats) return;

        const rect = heroStats.getBoundingClientRect();
        if (rect.top <= window.innerHeight) {
            statNumbers.forEach(stat => {
                const targetAttr = stat.getAttribute('data-target');
                if (!targetAttr) return;
                const target = parseInt(targetAttr, 10);
                if (isNaN(target) || target <= 0) return;

                const originalText = stat.textContent || '';
                const suffix = originalText.replace(/[0-9]/g, '');
                let count = 0;
                const speed = target / 30;

                const updateCount = () => {
                    count += speed;
                    if (count < target) {
                        stat.textContent = Math.ceil(count) + suffix;
                        setTimeout(updateCount, 30);
                    } else {
                        stat.textContent = target + suffix;
                    }
                };
                updateCount();
            });
            animated = true;
        }
    };

    window.addEventListener('scroll', animateStats);
    animateStats();
}

function initReviewsCarousel(): void {
    const reviewsTrack = document.getElementById('reviews-track');
    const prevBtn = document.getElementById('reviews-prev');
    const nextBtn = document.getElementById('reviews-next');

    if (reviewsTrack && prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            const firstCard = reviewsTrack.querySelector('.review-card') as HTMLElement | null;
            const cardWidth = firstCard?.offsetWidth || 340;
            reviewsTrack.scrollBy({ left: -(cardWidth + 24), behavior: 'smooth' });
        });

        nextBtn.addEventListener('click', () => {
            const firstCard = reviewsTrack.querySelector('.review-card') as HTMLElement | null;
            const cardWidth = firstCard?.offsetWidth || 340;
            reviewsTrack.scrollBy({ left: cardWidth + 24, behavior: 'smooth' });
        });
    }
}

function initContactForm(): void {
    const contactForm = document.getElementById('contact-form') as HTMLFormElement | null;
    const formStatus = document.getElementById('form-status');

    if (!contactForm || !formStatus) return;

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const nameInput = document.getElementById('name') as HTMLInputElement | null;
        const emailInput = document.getElementById('email') as HTMLInputElement | null;
        const subjectInput = document.getElementById('subject') as HTMLInputElement | null;
        const messageInput = document.getElementById('message') as HTMLTextAreaElement | null;
        const submitBtn = contactForm.querySelector('.submit-btn') as HTMLButtonElement | null;

        if (!nameInput || !emailInput || !subjectInput || !messageInput || !submitBtn) return;

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const subject = subjectInput.value.trim();
        const message = messageInput.value.trim();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!name || !email || !subject || !message) {
            formStatus.className = 'form-status error';
            formStatus.textContent = 'Please fill out all fields before submitting.';
            return;
        }

        if (!emailRegex.test(email)) {
            formStatus.className = 'form-status error';
            formStatus.textContent = 'Please enter a valid email address.';
            return;
        }

        const originalBtnText = submitBtn.innerHTML;
        submitBtn.innerHTML = `<span>Sending...</span> <i class="fa-solid fa-spinner fa-spin"></i>`;
        submitBtn.disabled = true;

        // Simulated successful submission
        setTimeout(() => {
            formStatus.className = 'form-status success';
            formStatus.textContent = `Message sent successfully! ${siteConfig.name} will get back to you soon.`;
            contactForm.reset();
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;

            setTimeout(() => {
                formStatus.textContent = '';
                formStatus.className = 'form-status';
            }, 6000);
        }, 1000);
    });
}
