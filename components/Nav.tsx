"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/lib/site";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "border-b border-line bg-ink/80 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5 text-sm font-medium tracking-tight">
          <span className="grid h-7 w-7 place-items-center rounded-md border border-line-strong bg-panel font-mono text-[11px] text-accent">
            TS
          </span>
          <span>{site.name}</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-muted transition-colors hover:text-fg">
              {item.label}
            </a>
          ))}
          <a
            href={site.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-line-strong bg-white/5 px-3.5 py-1.5 text-sm font-medium transition-colors hover:bg-white/10"
          >
            Resume
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-9 w-9 place-items-center rounded-md border border-line text-muted md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-line px-4 pb-4 md:hidden">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-b border-line py-3 text-sm text-muted hover:text-fg"
            >
              {item.label}
            </a>
          ))}
          <a
            href={site.resume}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-md bg-fg px-4 py-2.5 text-center text-sm font-medium text-ink"
          >
            Resume
          </a>
        </nav>
      )}
    </header>
  );
}
