# AxioML'26 Hackathon Website - Project Context

## Overview
A premium, animated landing page for **AxioML'26**, a 24-hour offline hackathon organized by the Department of AI & ML at Prathyusha Engineering College.

**Live URL:** https://Vigneshwaran-NM.github.io/AxioML-26/  
**Repository:** https://github.com/Vigneshwaran-NM/AxioML-26

---

## Tech Stack
| Technology | Purpose |
|------------|---------|
| HTML5 | Structure |
| CSS3 | Styling, Animations |
| Vanilla JavaScript | Interactivity |
| Font Awesome | Icons (CDN) |
| Google Fonts | Typography (Inter, Orbitron) |

---

## Project Structure
```
d:/Viki/Hack/
├── index.html          # Main webpage
├── style.css           # All styles & animations
├── script.js           # JavaScript functionality
├── AXIOML LOGO.png     # Event logo (navbar + footer)
├── mascot.jpeg         # Custom cursor image
├── MediaPartner.png    # Eventopia sponsor logo
├── PvsMA.png           # PVS Metals and Alloys sponsor logo
├── bus-routes.pdf      # Transport service PDF
└── AxioMLContext.md    # This file
```

---

## Key Features

### 1. Theme Colors
| Element | Hex Code |
|---------|----------|
| Background Primary | `#0e0019` |
| Background Secondary | `#000005` |
| Accent Primary | `#b572df` |
| Accent Secondary | `#4c017f` |
| Accent Tertiary | `#f842fa` |
| Text Primary | `#fefefe` |
| Gold (Sponsor Label) | `#ffd700` |

### 2. Sections (in page order)
- **Hero**: Logo, event details, animated Register button, glowing "E-Certificates for all Participants" text
- **Overview**: About AxioML'26
- **Domains**: 5 cards (AI, AR/VR, ML Resilience, EdTech, Healthcare) with hover-reveal overlay
- **FAQ**: 6 questions with glassmorphism cards
- **Contact**: Faculty coordinator (Dr. Famitha) + Student coordinators (Sakthivel K, Shreenidhi C U)
- **Sponsors**: Event sponsors with glassmorphism cards — Eventopia (Media Partner), PVS Metals and Alloys
- **Location**: Google Maps embed + "Open in Google Maps" button + "Bus Routes" PDF button
- **Footer**: Navigation links, Instagram Follow button, "@prathyusha_aiml" glowing handle, copyright

### 3. Animations
| Animation | Element | Description |
|-----------|---------|-------------|
| `pulse` | Register button | Glowing shadow |
| `shimmer` | Primary buttons | Sweeping highlight |
| `font-cycle` | "Intelligence", "AI & ML" | Cycles through Orbitron, Courier New, Georgia, Impact |
| `float` | Hero logo | Gentle up/down movement |
| `glow-pulse` | E-certificate text, Instagram handle | Purple ↔ pink text-shadow pulse |

### 4. Mobile Features
- **Hamburger Menu**: 3 spans animated, slides in fullscreen overlay from right (<768px)
- **Responsive Grid**: Domain cards use `aspect-ratio: 4/3` on mobile, stacked layouts
- **Responsive Map**: Reduced iframe height (250px) on mobile
- **Custom Cursor**: Mascot follows mouse/touch

### 5. Navigation Links
All three nav areas (navbar, mobile menu, footer) contain:
`Home | Overview | Domains | FAQ | Contact | Location | Sponsors | Register`

---

## Important Links
| Resource | URL |
|----------|-----|
| Registration Form | https://forms.gle/JUX38mZHQVxzCg3s9 |
| Google Maps | https://maps.app.goo.gl/njFqowZLdssiXEQe8 |
| Instagram | https://www.instagram.com/prathyusha_aiml |
| Bus Routes | `bus-routes.pdf` (local file) |

---

## Event Details
- **Event**: AxioML'26 (24-Hour Offline Hackathon)
- **Dates**: 3rd - 4th March, 2026
- **Venue**: Prathyusha Engineering College, Tiruvallur
- **Fee**: ₹150/Team

---

## Coordinators
| Role | Name | Contact |
|------|------|---------|
| Faculty (HOD/AIML) | Dr. S. Famitha | - |
| Student | Sakthivel K | 9080168910 |
| Student | Shreenidhi C U | 9445099777 |

---

## Event Sponsors
| Sponsor | Image File | Label |
|---------|-----------|-------|
| Eventopia | `MediaPartner.png` | Media Partner (gold italic text) |
| PVS Metals and Alloys | `PvsMA.png` | — |

---

## Deployment
```bash
git add .
git commit -m "Description"
git push
# Site auto-deploys via GitHub Pages (main branch)
```

---

## Development Notes
- **Mobile breakpoint**: 768px
- **CSS Variables**: Defined in `:root` at top of `style.css`
- **Custom Cursor**: Uses `mascot.jpeg` with JS tracking in `script.js`
- **Font Animation**: `font-cycle` keyframe cycles through Orbitron → Courier New → Georgia → Impact
- **Glow Animation**: `glow-pulse` keyframe alternates purple/pink text-shadow
- **Sponsor Cards**: `max-width: 250px`, compact for scalability — easily add more sponsors
- **Glassmorphism**: `var(--glass-bg)` + `backdrop-filter: blur(20px)` + `var(--glass-border)`

---

## Quick Reference CSS Classes
| Class | Purpose |
|-------|---------|
| `.glass-card` | Glassmorphism effect |
| `.btn-primary` | Gradient button with shimmer |
| `.btn-secondary` | Outlined accent button |
| `.nav-register-btn` | Animated navbar register |
| `.scroll-text` | Font-cycling animation |
| `.glow-text` | Purple glow-pulse text |
| `.domain-card` | Hover-reveal domain cards |
| `.contact-card` | Coordinator cards |
| `.sponsor-card` | Sponsor logo cards |
| `.sponsor-label` | Gold italic label (Media Partner) |
| `.hamburger` | Mobile menu trigger |
| `.mobile-menu` | Fullscreen mobile nav overlay |
| `.instagram-follow-btn` | Instagram gradient button |

---

## Continue Development
1. Clone: `git clone https://github.com/Vigneshwaran-NM/AxioML-26.git`
2. Open `index.html` in browser
3. Edit files, refresh to see changes
4. Push to deploy

---

*Last Updated: 18 February 2026*
