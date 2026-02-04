// ===================================
// HACKATHON LANDING PAGE - JAVASCRIPT
// ===================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // ===================================
    // NAVBAR SCROLL EFFECT
    // ===================================
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', function () {
        const currentScroll = window.pageYOffset;

        // Add 'scrolled' class when scrolling down
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // ===================================
    // MOBILE MENU TOGGLE
    // ===================================
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuClose = document.getElementById('mobileMenuClose');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    // Open mobile menu
    hamburger.addEventListener('click', () => {
        mobileMenu.classList.add('active');
    });

    // Close mobile menu
    mobileMenuClose.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });

    // Close menu when clicking a link
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });

    // ===================================
    // SMOOTH SCROLLING FOR NAVIGATION LINKS
    // ===================================
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for navbar height

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===================================
    // INTERSECTION OBSERVER FOR REVEAL ANIMATIONS
    // ===================================
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    // Optional: stop observing after reveal
                    // observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        }
    );

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

    // ===================================
    // PARALLAX EFFECT FOR ORBS
    // ===================================
    const orbs = document.querySelectorAll('.orb');

    window.addEventListener('scroll', function () {
        const scrolled = window.pageYOffset;

        orbs.forEach((orb, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrolled * speed);
            orb.style.transform = `translateY(${yPos}px)`;
        });
    });

    // ===================================
    // ANIMATED COUNTER (for future stats section)
    // ===================================
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);

        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(start);
            }
        }, 16);
    }

    // ===================================
    // CUSTOM MASCOT CURSOR
    // ===================================
    let cursorFollower = null;

    // Create cursor follower element
    function createCursorFollower() {
        cursorFollower = document.createElement('div');
        cursorFollower.className = 'cursor-follower';
        cursorFollower.innerHTML = '<img src="mascot.jpeg" alt="Cursor">';
        document.body.appendChild(cursorFollower);
    }

    createCursorFollower();

    // Track mouse movement (desktop)
    document.addEventListener('mousemove', (e) => {
        if (cursorFollower) {
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        }
    });

    // Track touch movement (mobile)
    document.addEventListener('touchmove', (e) => {
        if (cursorFollower && e.touches[0]) {
            cursorFollower.style.left = e.touches[0].clientX + 'px';
            cursorFollower.style.top = e.touches[0].clientY + 'px';
        }
    });

    // Show cursor on touch start (mobile)
    document.addEventListener('touchstart', (e) => {
        if (cursorFollower && e.touches[0]) {
            cursorFollower.style.left = e.touches[0].clientX + 'px';
            cursorFollower.style.top = e.touches[0].clientY + 'px';
            cursorFollower.style.opacity = '1';
        }
    });

    // Hide cursor on touch end (mobile)
    document.addEventListener('touchend', () => {
        if (cursorFollower) {
            setTimeout(() => {
                cursorFollower.style.opacity = '0';
            }, 500);
        }
    });

    // ===================================
    // DYNAMIC GRADIENT ANIMATION
    // ===================================
    const heroTitle = document.querySelector('.hero h1');

    if (heroTitle) {
        let hue = 0;

        setInterval(() => {
            hue = (hue + 1) % 360;
            const color1 = `hsl(${hue}, 100%, 60%)`;
            const color2 = `hsl(${(hue + 60) % 360}, 100%, 60%)`;

            heroTitle.style.backgroundImage = `linear-gradient(135deg, ${color1} 0%, ${color2} 100%)`;
        }, 50);
    }

    // ===================================
    // CARD TILT EFFECT ON HOVER
    // ===================================
    const cards = document.querySelectorAll('.glass-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', function (e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
        });

        card.addEventListener('mouseleave', function () {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });

    // ===================================
    // PARTICLE BACKGROUND (Optional - Performance Heavy)
    // ===================================
    function createParticles() {
        const particleCount = 50;
        const hero = document.querySelector('.hero');

        if (!hero || window.innerWidth < 768) return;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.cssText = `
                position: absolute;
                width: 2px;
                height: 2px;
                background: rgba(0, 240, 255, 0.5);
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: float ${5 + Math.random() * 10}s ease-in-out infinite;
                animation-delay: ${Math.random() * 5}s;
            `;
            hero.appendChild(particle);
        }
    }

    // Uncomment to enable particles (may impact performance)
    // createParticles();

    // ===================================
    // SCROLL PROGRESS INDICATOR
    // ===================================
    function createScrollProgress() {
        const progressBar = document.createElement('div');
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            height: 3px;
            background: linear-gradient(90deg, #00f0ff 0%, #ff00ff 100%);
            z-index: 10000;
            transform-origin: left;
            transform: scaleX(0);
            transition: transform 0.1s ease;
        `;
        document.body.appendChild(progressBar);

        window.addEventListener('scroll', () => {
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (window.pageYOffset / windowHeight);
            progressBar.style.transform = `scaleX(${scrolled})`;
        });
    }

    createScrollProgress();

    // ===================================
    // LOG INITIALIZATION
    // ===================================
    console.log('%c🚀 TechVerse Hackathon 2026 ', 'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; font-size: 20px; padding: 10px; border-radius: 5px;');
    console.log('%cWebsite initialized successfully!', 'color: #00f0ff; font-size: 14px;');
});

// ===================================
// UTILITY FUNCTIONS
// ===================================

// Debounce function for performance optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}
