# Tax Plus Accountants - Project Instructions

## Project Overview

This is a professional website for Tax Plus Accountants, built with Next.js 16, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Linting**: ESLint
- **Package Manager**: npm

## Project Structure

- `/src/app/` - Next.js App Router pages and layouts
- `/src/app/page.tsx` - Main home page with services, about, and contact sections
- `/src/app/layout.tsx` - Root layout with metadata
- `/src/app/globals.css` - Global styles and Tailwind directives
- `/public/` - Static assets

## Development

To run the development server:
```bash
npm run dev
```

The site will be available at http://localhost:3000 (or next available port).

## Building for Production

```bash
npm run build
npm start
```

## Code Style

- Use TypeScript for all files
- Follow ESLint rules configured in eslint.config.mjs
- Use Tailwind utility classes for styling
- Component structure follows Next.js App Router conventions
