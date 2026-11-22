# yashkhurana.dev

Yash Khurana's freelance portfolio. Next.js App Router, TypeScript and Tailwind CSS, built as a static export.

## Local development

Use Node.js 22.18+ and pnpm 11.

```sh
pnpm install
pnpm dev
```

## Checks

```sh
pnpm lint
pnpm test
pnpm build
```

`pnpm build` generates the static website in `out/`. The build includes all six project pages, the 404 page, sitemap, robots file and generated Open Graph image. On Vercel, use the Next.js preset; no environment variables or backend are needed.

## Updating content

- `src/content/site.ts`: name, email, profile links, services and home page copy. Upwork and Fiverr are hidden until their URLs are set.
- `src/content/projects.ts`: project copy, categories, technology, case studies and links. Set `demoUrl` to replace “Live demo — soon” with a live demo button.
- Set a project's `image` to an image path in `public/` (for example `/projects/blink.webp`) to replace its designed cover. Keep the same aspect ratio to preserve the card layout.
- `src/components/project-cover.tsx`: the six original SVG cover illustrations. They are illustrative compositions, not internal product screenshots.

The theme follows the operating system until changed with the theme button. That preference is saved locally. Scroll reveals respect reduced motion and content remains visible without JavaScript.

The approved design spec is in `docs/superpowers/specs/2026-11-22-portfolio-site-design.md`.
