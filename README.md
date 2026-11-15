# Iori Yamauchi | Portfolio

My personal portfolio showcasing my projects, skills, and contact details. I'm a 4th-year BSIT student looking for an OJT placement, and I built this site to show what I've made so far.

## Live Site

[Visit my portfolio](https://iori-yamauchi.vercel.app/)

## Features

- Responsive layout that works on phones, tablets, and desktops
- Light and dark theme, with a toggle button that remembers my choice
- Project cards with screenshots, descriptions, and the tools I used
- Scroll depth gauge and floating bubbles that match the deep-sea theme
- Downloadable resume (PDF) and contact links in the Contact section
- Custom favicon

## Technologies

- HTML, CSS, and JavaScript
- Vite for local development and production builds
- Git and GitHub for version control
- Vercel for hosting

## Project Structure

```
my-portfolio/
├─ public/            Static files (favicon, resume PDF, project images)
├─ src/
│  ├─ main.js         Theme toggle, depth gauge, and bubbles
│  └─ style.css       Colors, layout, animations, and mobile styles
├─ index.html         Page content and structure
└─ package.json       Project info and npm commands
```

## Run Locally

Install Node.js and Git, then run:

```bash
git clone ADD-YOUR-GITHUB-REPO-LINK-HERE
cd my-portfolio
npm install
npm run dev
```

Open the local URL printed in the terminal.

To test on my phone, I run `npm run dev -- --host` and open the Network link on the same Wi-Fi.

If PowerShell blocks npm scripts, use `npm.cmd` instead of `npm`.

## Production Build

```bash
npm run build
npm run preview
```

The build creates production files in `dist`.
The preview command serves those files locally.

## Updating the Site

1. Edit the files and check the changes locally.
2. Save them with Git:

```bash
git add .
git commit -m "Describe the change"
git push
```

Vercel redeploys automatically after each push to `main`.

## What I Learned

- Using Vite to run a local development server and build my website.
- Using CSS variables, spacing, Flexbox, Grid, and media queries for responsive layouts.
- Switching between light and dark themes with CSS and JavaScript.
- Saving changes with Git and publishing updates through GitHub and Vercel.
- Improving accessibility with keyboard focus, image descriptions, and a skip link.
- Converting screenshots to WebP to reduce image download sizes.
- Testing my site on a real phone and fixing layout problems on small screens.

## Known Limitation

The original AbyssTunes screenshot has limited resolution, so it may
look less sharp on high-density screens.
