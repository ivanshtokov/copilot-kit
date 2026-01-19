# Copilot Kit - Documentation Website

> **Next.js 16** documentation website for Copilot Kit

## Development

```bash
cd web
npm install
npm run dev
```

Visit `http://localhost:3000`

## Tech Stack

- **Framework**: Next.js 16.1.3 with App Router
- **UI**: Tailwind CSS v4
- **Components**: Base UI React
- **Theme**: next-themes
- **Icons**: Lucide React

## Structure

```
web/
├── src/
│   ├── app/           # Next.js App Router pages
│   ├── components/    # React components
│   │   ├── docs/      # Documentation components
│   │   ├── layout/    # Header, Footer, TOC
│   │   └── ui/        # Reusable UI components
│   ├── hooks/         # Custom React hooks
│   └── lib/           # Utilities and configs
└── public/            # Static assets
```

## Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Production server
npm run lint     # ESLint check
```
