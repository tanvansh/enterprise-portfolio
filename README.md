# Tanvansh Singh — Portfolio & Interactive Resume

Single-page portfolio built with Next.js 15 (App Router), TypeScript, Tailwind CSS v4, Framer Motion and React Three Fiber.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (also type-checks)
npm run typecheck  # tsc only
```

## Edit your details

- [`lib/site.ts`](lib/site.ts): name, email, LinkedIn, GitHub (placeholder: update it), domain
- [`lib/data.ts`](lib/data.ts): experience, projects (add `github` / `live` links per project), skills, education, certifications
- `public/resume.pdf`: the downloadable resume. Replace the file to update it.

## Structure

```
app/            layout (fonts, metadata), page, global styles, favicon
components/
  NetworkCanvas   interactive Three.js particle network (client only)
  HeroBackground  loads NetworkCanvas via next/dynamic with ssr: false
  Hero, About, Experience, Projects, Skills, Beyond, Contact, Nav, Footer
lib/site.ts     contact details and nav
lib/data.ts     resume content
```

## Deploy to Vercel

Push to a Git repo and import it in Vercel. The framework is auto-detected as Next.js, and no environment variables are needed.
Or run `npx vercel` from this folder.
