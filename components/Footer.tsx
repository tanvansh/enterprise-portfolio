import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-4 text-sm text-dim sm:flex-row sm:items-center sm:px-6">
        <p>
          © {new Date().getFullYear()} {site.name}. {site.tagline}
        </p>
        <p className="font-mono text-xs">{site.location}</p>
      </div>
    </footer>
  );
}
