"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, CalendarDays, FileText, Mail, Send } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./BrandIcons";
import Reveal from "./Reveal";
import { site } from "@/lib/site";

const links = [
  { label: "Email", value: site.email, href: `mailto:${site.email}`, icon: Mail },
  { label: "LinkedIn", value: "in/tanvansh-singh", href: site.linkedin, icon: LinkedInIcon },
  { label: "GitHub", value: "View profile", href: site.github, icon: GitHubIcon },
  { label: "Booking", value: "Request a time", href: site.booking, icon: CalendarDays },
  { label: "Resume", value: "Download PDF", href: site.resume, icon: FileText },
];

const inputCls =
  "w-full rounded-lg border border-line bg-ink/70 px-3.5 py-2.5 text-sm text-fg placeholder:text-dim outline-none transition-colors focus:border-accent/50 focus:ring-2 focus:ring-accent/15";

export default function Contact() {
  const [sent, setSent] = useState(false);

  // No backend needed: the form opens the visitor's mail client with the message pre-filled.
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n${name}\n${email}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="relative scroll-mt-20 border-t border-line py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="card relative overflow-hidden p-6 sm:p-12">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[radial-gradient(closest-side,rgba(99,102,241,0.2),transparent)]"
          />
          <div className="relative grid gap-12 lg:grid-cols-2">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Contact</p>
              <h2 className="text-gradient mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Let&apos;s talk.</h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-muted">
                Open to conversations about engineering, data, automation, new roles, or a problem you&apos;re stuck on.
                I usually reply within a couple of days.
              </p>

              <ul className="mt-8 space-y-3">
                {links.map(({ label, value, href, icon: Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={href.startsWith("mailto") ? undefined : "_blank"}
                      rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                      className="group flex items-center gap-4 rounded-xl border border-line bg-ink/60 p-3.5 transition-colors hover:border-line-strong hover:bg-panel-2"
                    >
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-line bg-panel text-muted group-hover:text-fg">
                        <Icon width={16} height={16} />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-xs text-dim">{label}</span>
                        <span className="block truncate text-sm text-fg">{value}</span>
                      </span>
                      <ArrowUpRight size={16} className="shrink-0 text-dim transition-colors group-hover:text-accent" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <form onSubmit={onSubmit} className="flex flex-col gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-1.5 block text-xs text-muted">Name</span>
                  <input name="name" required autoComplete="name" placeholder="Your name" className={inputCls} />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-xs text-muted">Email</span>
                  <input name="email" type="email" required autoComplete="email" placeholder="you@company.com" className={inputCls} />
                </label>
              </div>
              <label className="block flex-1">
                <span className="mb-1.5 block text-xs text-muted">Message</span>
                <textarea
                  name="message"
                  required
                  rows={7}
                  placeholder="What would you like to talk about?"
                  className={`${inputCls} min-h-40 resize-y`}
                />
              </label>
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-fg px-5 py-3 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
              >
                <Send size={15} />
                Send message
              </button>
              <p className="text-xs text-dim" aria-live="polite">
                {sent
                  ? "Your email app should have opened with the message ready to send."
                  : "Opens your email app with the message pre-filled."}
              </p>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
