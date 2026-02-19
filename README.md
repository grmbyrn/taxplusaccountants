# Tax Plus Accountants Website

A modern, professional website for Tax Plus Accountants, built with Next.js 16, TypeScript, and Tailwind CSS. This project is the public-facing marketing site for an accountancy business, designed to attract and convert new clients. It features clean design, accessibility, and easy content management.

---

## 🚀 Features

- Modern, responsive design for all devices
- Next.js 16 App Router architecture
- TypeScript throughout for type safety
- Tailwind CSS utility-first styling
- Framer Motion scroll animations
- Modular, reusable components (e.g., PageHero)
- Blog system with Markdown/MDX support
- Contact form (GDPR-ready)
- SEO-friendly and performant

---

## 🛠️ Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) (animations)
- [ESLint](https://eslint.org/) (linting)

---

## 📁 Project Structure

```
taxplusaccountants/
├── src/
│   ├── app/                # Next.js pages & layouts
│   │   ├── page.tsx        # Home page
│   │   ├── about/          # About page
│   │   ├── services/       # Services pages
│   │   ├── blog/           # Blog system
│   │   ├── resources/      # Resources page
│   │   └── globals.css     # Global styles
│   ├── components/         # Reusable UI components
│   ├── assets/             # Images, icons, etc.
│   └── lib/                # Utilities
├── public/                 # Static assets
├── next.config.ts          # Next.js config
├── tailwind.config.ts      # Tailwind config
├── tsconfig.json           # TypeScript config
└── package.json            # Dependencies
```

---

## 🏁 Getting Started

1. **Install dependencies:**
	```bash
	npm install
	```
2. **Run the development server:**
	```bash
	npm run dev
	```
	Visit [http://localhost:3000](http://localhost:3000)

3. **Build for production:**
	```bash
	npm run build
	npm start
	```

4. **Lint code:**
	```bash
	npm run lint
	```

---

## 🧩 Key Components

- **Header** – Responsive navigation with dropdowns and contact button
- **PageHero** – Reusable hero/banner for all main pages
- **Services** – Modular service cards and details
- **Blog** – Markdown/MDX-powered articles
- **Contact** – Accessible contact form with consent checkbox
- **Footer** – Company info, legal links, and social

---

## ✍️ Customization & Content

- **Edit content:**
  - Main pages: `src/app/`
  - Blog posts: `src/content/blog/` (Markdown/MDX)
- **Branding:**
  - Colors: `tailwind.config.ts` and CSS variables in `globals.css`
  - Logo/images: `public/images/`
- **Legal:**
  - Add your Privacy Policy, Cookie Policy, and Terms in `src/app/`

---

## 📄 Legal & Compliance

- GDPR-ready: Contact form includes consent
- Add Privacy Policy, Cookie Policy, and Terms pages for compliance
- Company details in footer (required for Irish/EU businesses)

---

## 🤝 Contributing

Pull requests and suggestions are welcome! Please open an issue or PR for improvements.

---

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)

---

## 📝 License

Copyright © 2026 Tax Plus Accountants. All rights reserved.

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [React](https://react.dev/) - UI library

## Learn More

To learn more about Next.js, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)

## License

Copyright © 2026 Tax Plus Accountants. All rights reserved.
