# Portfolio Website

Portfolio website built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and Three.js.

## Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **React Icons** - Icon library

## Project Structure

```
Portfolio/
├── app/
│   ├── components/     # React components
│   ├── lib/           # Utility functions
│   ├── layout.tsx     # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css    # Global styles
├── data/              # JSON data files
│   ├── projects.json  # Projects data
│   └── skills.json    # Skills data
├── public/            # Static files
│   └── resume/        # Resume PDF files
└── package.json       # Dependencies
```

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Next Steps

1. Add your personal information and projects to `data/` folder
2. Create components in `app/components/`
3. Add your resume PDF to `public/resume/`
4. Customize styles and animations
5. Deploy to Vercel or your preferred platform

## Documentation

See `TECH_STACK.md` for detailed tech stack recommendations.

## Features

- Smooth animations with Framer Motion
- Immersive 3D graphics powered by Three.js
- Fully responsive layout across devices
- Dark mode support ready for implementation
- Resume download functionality
- Optimized performance with Next.js
