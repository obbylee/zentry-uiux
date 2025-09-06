### Zentry: Forge Your Legend in the Multiverse

A visually dynamic web experience built with Next.js, Tailwind CSS, and GSAP.

---

## 🚀 Technologies Used

- **Next.js**: A powerful React framework for building performant and scalable web applications.
- **Tailwind CSS (v4+)**: A utility-first CSS framework for rapid UI development and consistent styling.
- **GSAP**: Professional-grade JavaScript animation library, chosen for its performance and advanced features in creating fluid, interactive experiences.

---

## ✨ Key Features

- **Interactive Hero Section:** A dynamic video background with scroll-based animations.
- **Fluid Typography:** Captivating text effects.
- **Scroll-Driven Animations:** Elements are animated into view using GSAP's ScrollTrigger.
- **Responsive Design:** Optimized for a seamless experience across all devices.

---

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

### 📚 Learning & Acknowledgments

This project is a direct result of the incredible learning resources provided by **jsmastery.pro** and **Adrian Hajdin ([@adrianhajdin](https://github.com/adrianhajdin))**.

Completed as part of an online course to deepen my understanding of GSAP. Key concepts learned include:

- **GSAP & React Integration**: Learning the modern, efficient approach of using the useGSAP hook to manage GSAP animations within a React application's lifecycle, ensuring proper cleanup and preventing memory leaks.

- **Scroll-Based Animation**: Mastering the GSAP ScrollTrigger plugin to create interactive scroll effects, such as pinning elements and tying animations directly to scroll progress (`scrub`).

- **Advanced UI Animations**: Implementing sophisticated visual effects, including:

  - Responsive, tilt-based animations that follow the mouse cursor.

  - Sequencing Animations: Using `gsap.timeline` to create powerful, sequenced animations that tell a story.

  - Performance optimization for animation-heavy pages.
