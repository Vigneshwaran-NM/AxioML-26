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
├── AXIOML LOGO.png     # Event logo
├── mascot.jpeg         # Custom cursor image
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

### 2. Sections
- **Hero**: Logo, event details, animated Register button
- **Overview**: About AxioML'26
- **Domains**: 5 cards (AI, AR/VR, ML Resilience, EdTech, Healthcare)
- **FAQ**: 6 questions with glassmorphism cards
- **Contact**: Coordinators (Dr. Famitha, Sakthivel K, Shreenidhi C U)
- **Location**: Google Maps embed + directions
- **Footer**: Instagram follow button, copyright

### 3. Animations
| Animation | Element | Description |
|-----------|---------|-------------|
| `pulse` | Register button | Glowing shadow |
| `shimmer` | Primary buttons | Sweeping highlight |
| `font-cycle` | "Intelligence", "AI & ML" | Cycles through fonts |
| `float` | Hero logo | Gentle up/down movement |

### 4. Mobile Features
- **Hamburger Menu**: Slides in from right on mobile (<768px)
- **Responsive Grid**: Stacked layouts on small screens
- **Custom Cursor**: Mascot follows mouse/touch

---

## Important Links
| Resource | URL |
|----------|-----|
| Registration Form | https://forms.gle/JUX38mZHQVxzCg3s9 |
| Google Maps | https://maps.app.goo.gl/njFqowZLdssiXEQe8 |
| Instagram | https://www.instagram.com/prathyusha_aiml |

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

## Deployment
```bash
# Push changes
git add .
git commit -m "Description"
git push

# Site auto-deploys via GitHub Pages (main branch)
```

---

## Development Notes
- **Mobile breakpoint**: 768px
- **CSS Variables**: Defined in `:root` at top of style.css
- **Custom Cursor**: Uses `mascot.jpeg` with JS tracking
- **Font Animation**: Cycles through Orbitron, Courier New, Georgia, Impact

---

## Quick Reference CSS Classes
| Class | Purpose |
|-------|---------|
| `.glass-card` | Glassmorphism effect |
| `.btn-primary` | Gradient button with shimmer |
| `.nav-register-btn` | Animated navbar register |
| `.scroll-text` | Font-cycling animation |
| `.domain-card` | Hover-reveal domain cards |
| `.contact-card` | Coordinator cards |
| `.hamburger` | Mobile menu trigger |
| `.mobile-menu` | Fullscreen mobile nav |

---

## Continue Development
1. Clone: `git clone https://github.com/Vigneshwaran-NM/AxioML-26.git`
2. Open `index.html` in browser
3. Edit files, refresh to see changes
4. Push to deploy

---

*Last Updated: February 2026*
