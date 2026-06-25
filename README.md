# Ankesh Kumar Portfolio

A modern, responsive developer portfolio for Ankesh Kumar, an MCA student and aspiring Full Stack Web Developer. The site is built with React, Vite, Framer Motion, React Icons, and EmailJS-ready contact form support.

## Features

- Dark mode by default with light theme toggle
- Full-screen hero with typing animation
- Glassmorphism UI, scroll progress, animated cursor, and particle background
- About, education timeline, skills, projects, experience, certifications, achievements, resume, contact, and footer sections
- Project filtering and certificate preview modal
- Animated progress bars and counters
- Responsive mobile navigation
- SEO meta tags and accessibility-conscious markup
- EmailJS integration hooks

## Project Structure

```text
.
├── public/
│   ├── profile-placeholder.svg
│   └── resume-placeholder.pdf
├── src/
│   ├── data/
│   │   └── portfolio.js
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── .env.example
├── index.html
├── package.json
└── vite.config.js
```

## Customize Your Details

Update personal details, education, skills, projects, certificates, achievements, social links, and resume path in:

```text
src/data/portfolio.js
```

Replace the placeholder resume at:

```text
public/resume-placeholder.pdf
```

Replace the placeholder profile artwork at:

```text
public/profile-placeholder.svg
```

## EmailJS Setup

1. Create an EmailJS account.
2. Create an email service and template.
3. Copy `.env.example` to `.env.local`.
4. Fill in:

```text
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

The contact form will show a configuration message until these variables are set.

## Installation

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

## Production Build

```bash
npm run build
npm run preview
```

The production files are generated in `dist/`.

## Deploy to GitHub Pages

1. Push this project to GitHub.
2. Install the Pages deploy helper:

```bash
npm install --save-dev gh-pages
```

3. Add these scripts to `package.json`:

```json
{
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

4. Run:

```bash
npm run deploy
```

The Vite config already uses `base: './'`, which works for many static hosting paths. If your GitHub Pages setup needs a repository base path, set `base: '/repository-name/'` in `vite.config.js`.

## Deploy to Vercel

1. Import the GitHub repository in Vercel.
2. Framework preset: Vite.
3. Build command: `npm run build`.
4. Output directory: `dist`.
5. Add EmailJS environment variables in Vercel Project Settings.

## Deploy to Netlify

1. Import the GitHub repository in Netlify.
2. Build command: `npm run build`.
3. Publish directory: `dist`.
4. Add EmailJS environment variables in Site Settings.

## Suggested Real Details to Add

- Actual college and school names
- MCA/BCA CGPA or percentage
- Real project screenshots
- Real GitHub, LinkedIn, LeetCode, HackerRank, and Instagram URLs
- Final resume PDF
- Live demo URLs for each project
