# WEEK 1 
# Project One Tour Site - WanderMore Travel Site
Build your own site, with your group, before the assessment session.

Quick rules:
- Team of 4 to 5, one shared project and look, no shared code
- Everyone builds solo, in their own GitHub repo
- Meet during the week, help each other debug, stay aligned
- No one person building while others copy
- You present and explain your own code at assessment

## Project Brief
Your project: a travel agency site. A grid of tour packages with duration and price, a testimonials section, and a Plan your trip call to action instead of a shop link, with a destination photo hero.

# 
Must have:
- GitHub repo with real, small commits
- Single page, responsive, plain HTML5/CSS3, no frameworks
- Semantic landmarks, one h1, working nav links
- box-sizing: border-box globally, your own CSS variables for colors
- Real use of Flexbox and real use of Grid
- No horizontal scroll on phone, tablet, or desktop

Use AI (ChatGPT, Claude, Copilot) as much as you want, just make sure you understand your own code. Pick one teammate as project manager to organize meetings.

# Status
Week 1 Project - Static HTML/CSS Landing page

# WEEK 2 

## Assignment 2: Evolve your site with JavaScript, React & Tailwind

Same teams, same rules as last week — solo code in your own repo, meet during the week, no copying, you present your own code at assessment.

Not a new project. Take your Assignment 1 site and rebuild it with React + Tailwind, same way we rebuilt BrewHaus in Week 2 — keep your business type, content, and look.

Must have:
- Scaffolded with Vite + React inside your existing repo
- Componentized: header, hero, main content, footer each their own component
- Your listed items in one data file (array of objects), not copy-pasted JSX
- Tailwind fully wired in, old styles.css removed
- One real filter on your main grid, built with useState
- One small controlled component reused per item (stepper, toggle, rating — your pick), same pattern as QuantityStepper
- Responsive classes rewritten mobile-first (unprefixed → sm:/md:/lg:)
- Real, small commits as you go
- No horizontal scroll on any screen size

No TypeScript, no extra libraries, data stays hardcoded — backend comes in Week 3.

At assessment, being able to explain how your useState and your controlled component actually work is especially encouraged — that's the core idea of this week, so it's worth being able to walk through it, not just show it working.

Send me your GitHub repo link so I can check in on your progress during the week. Deadline is the assessment session — have it ready to present then.

Use AI as much as you want, just understand your own code. If you want to see how the reference project (BrewHaus) was actually built, my repo's here:

# WEEK 3

## Assignment 3: Add a real backend, database, auth, and go live

Please watch the 3rd session's video first:
https://drive.google.com/drive/folders/1nQ-xu9g5q6Y9jgIu4kcdU1916h1UP_Et?usp=drive_link

Same project, same rules as before — solo code in your own repo, meet during the week, no copying, you present your own code at assessment.

This week your React + Tailwind site gets a real backend behind it: a database, a working API, real login, and your whole app live on the internet.

You can build the backend with plain Node.js + Express (what we covered in class), or with Next.js instead — if you use Next.js, your API routes can live inside the same app rather than a separate server. Either is fine, but you need to be able to explain your own code and folder structure at assessment, so don't use a structure you don't understand.

Steps:
1. Split your project into a client and a server (skip this if you're using Next.js — frontend and API live together there).
2. Set up a free Postgres database (e.g. Neon) and define your schema — at minimum, tables for your users (handled by your auth library) and your product/items data.
3. Store your secrets (database URL, auth secret) in a .env file that never gets committed to git.
4. Connect your backend to the real database and move your Week 2 hardcoded data into it with a seed script.
5. Build a real API with at least one working route that returns your data as JSON.
6. Add real authentication — signup, login, sessions — and update your UI to reflect signed-in state (e.g. "Sign out" vs "Sign in").
7. Connect your React frontend to the real API instead of hardcoded data.
8. Deploy your backend and frontend so the whole thing is live on a public URL. Railway (backend) + Vercel (frontend) is what we used in class, but you're free to use other platforms (Render, Netlify, Fly.io, etc.) as long as both parts end up publicly reachable and talking to each other.

Note: Railway is currently having some issues on their end and it may not be fixed for a couple of days, so for your backend, you can use Render.com or another similar platform instead of Railway for now.

Must have by assessment:
- A working API, live on the internet, reading from a real Postgres database
- A database schema you can explain in plain English
- A live URL where the whole app actually works — not localhost
- Real signup/login, with sessions that survive a page refresh
- .env confirmed excluded from git — no secrets committed

No TypeScript. Keep working on your existing project — don't start a new one.

Use AI as much as you want, just make sure you understand your own code — you'll be asked to walk through your folder structure and explain how your auth and database are wired up.

Send me your GitHub repo link (and your live URL once deployed) so I can check in on your progress during the week.
