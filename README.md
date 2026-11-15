# My Portfolio (Vite)

## Files at a glance
- `index.html`   the page structure (all the text content lives here)
- `src/style.css` all the colors, layout, and animations
- `src/main.js`   theme toggle, depth gauge, bubbles
- `package.json`  project info and commands

## Run it on your computer
1. Install Node.js (LTS) from https://nodejs.org
2. Open this folder in VS Code, then open the terminal (Terminal > New Terminal)
3. Run `npm install` (once)
4. Run `npm run dev` and open the link it shows (usually http://localhost:5173)
5. Edit a file, save, and the browser updates by itself

## Upload to GitHub
1. Create an empty repo on github.com (New repository, no README)
2. In the VS Code terminal:
   git init
   git add .
   git commit -m "Portfolio v2"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main

## Deploy on Vercel
1. Go to vercel.com and log in with GitHub
2. Add New > Project > import your repo
3. Framework Preset: Vite (Build: `npm run build`, Output: `dist`)
4. Click Deploy. Every `git push` after that redeploys automatically.
