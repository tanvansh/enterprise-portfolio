"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown, Download, MapPin, Trophy } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { experience } from "@/lib/data";
import { site } from "@/lib/site";

export default function Experience() {
  const [open, setOpen] = useState<Set<string>>(() => new Set([experience[0].org]));
  const reduce = useReducedMotion();

  const toggle = (org: string) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(org)) next.delete(org);
      else next.add(org);
      return next;
    });

  const allOpen = open.size === experience.length;

  return (
    <section id="experience" className="relative scroll-mt-20 border-y border-line bg-panel/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeader
            eyebrow="Experience"
            title="Career history"
            description="Engineering, entrepreneurship and AI, most recent first. Open a role for details."
          />
          <div className="mb-12 flex shrink-0 gap-2">
            <button
              type="button"
              onClick={() => setOpen(allOpen ? new Set() : new Set(experience.map((e) => e.org)))}
              className="rounded-lg border border-line px-3.5 py-2.5 text-sm text-muted transition-colors hover:border-line-strong hover:text-fg"
            >
              {allOpen ? "Collapse all" : "Expand all"}
            </button>
            <a
              href={site.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-accent/40 bg-primary/10 px-4 py-2.5 text-sm font-medium text-fg transition-colors hover:bg-primary/20"
            >
              <Download size={16} className="text-accent" />
              Resume PDF
            </a>
          </div>
        </div>

        <ol className="relative space-y-4 sm:pl-10 sm:before:absolute sm:before:left-[11px] sm:before:top-3 sm:before:h-[calc(100%-24px)] sm:before:w-px sm:before:bg-gradient-to-b sm:before:from-primary sm:before:via-line sm:before:to-line">
          {experience.map((e, i) => {
            const isOpen = open.has(e.org);
            const id = `exp-${i}`;
            return (
              <li key={e.org} className="relative">
                <span
                  aria-hidden
                  className={`absolute -left-10 top-6 hidden h-[23px] w-[23px] place-items-center rounded-full border bg-ink sm:grid ${
                    e.current ? "border-primary shadow-[0_0_12px_rgba(99,102,241,0.6)]" : "border-line-strong"
                  }`}
                >
                  <span className={`h-2 w-2 rounded-full ${e.current ? "bg-accent" : "bg-dim"}`} />
                </span>

                <Reveal delay={Math.min(i * 0.04, 0.2)} className={`card transition-colors ${isOpen ? "border-line-strong" : "hover:border-line-strong"}`}>
                  <button
                    type="button"
                    onClick={() => toggle(e.org)}
                    aria-expanded={isOpen}
                    aria-controls={id}
                    className="w-full p-6 text-left sm:p-7"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-lg font-medium tracking-tight text-fg">{e.org}</h3>
                          {e.current && (
                            <span className="rounded-full border border-accent/30 bg-primary/15 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">
                              Current
                            </span>
                          )}
                        </div>
                        <p className="mt-1 text-sm font-medium text-accent">{e.roles[0].title}</p>
                        <p className="mt-0.5 flex flex-wrap items-center gap-x-3 font-mono text-xs text-dim">
                          <span>{e.roles[0].period}</span>
                          {e.location && (
                            <span className="flex items-center gap-1 font-sans">
                              <MapPin size={11} />
                              {e.location}
                            </span>
                          )}
                        </p>
                      </div>
                      <ChevronDown
                        size={18}
                        className={`mt-1 shrink-0 text-dim transition-transform duration-300 ${isOpen ? "rotate-180 text-accent" : ""}`}
                      />
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {e.metrics.map((m) => (
                        <span key={m.label} className="rounded-lg border border-line bg-ink/60 px-3 py-2">
                          <span className="block text-base font-semibold leading-none text-fg">{m.value}</span>
                          <span className="mt-1 block text-[11px] text-dim">{m.label}</span>
                        </span>
                      ))}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={id}
                        initial={reduce ? false : { height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={reduce ? undefined : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 sm:px-7 sm:pb-7">
                          <p className="text-sm text-muted">{e.summary}</p>

                          {e.roles.length > 1 && (
                            <ul className="mt-4 space-y-1.5 rounded-lg border border-line bg-ink/40 p-3">
                              {e.roles.map((r, ri) => (
                                <li key={r.title} className="flex flex-wrap items-center justify-between gap-x-4 text-sm">
                                  <span className="flex items-center gap-2">
                                    <span className={`h-1.5 w-1.5 rounded-full ${ri === 0 ? "bg-accent" : "bg-line-strong"}`} />
                                    <span className={ri === 0 ? "text-fg" : "text-muted"}>{r.title}</span>
                                  </span>
                                  <span className="font-mono text-xs text-dim">{r.period}</span>
                                </li>
                              ))}
                            </ul>
                          )}

                          <div className="mt-5 grid gap-6 border-t border-line pt-5 md:grid-cols-2">
                            <div>
                              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-dim">Responsibilities</p>
                              <ul className="mt-3 space-y-2">
                                {e.responsibilities.map((p) => (
                                  <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted">
                                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-dim" />
                                    {p}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-dim">Key achievements</p>
                              <ul className="mt-3 space-y-2">
                                {e.achievements.map((p) => (
                                  <li key={p} className="flex gap-2.5 text-sm leading-relaxed text-fg/90">
                                    <Trophy size={14} className="mt-1 shrink-0 text-accent" />
                                    {p}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="mt-5 flex flex-wrap items-center gap-1.5">
                            <span className="mr-1 font-mono text-[11px] uppercase tracking-[0.18em] text-dim">Tools</span>
                            {e.tools.map((t) => (
                              <span key={t} className="rounded border border-line bg-panel px-2 py-0.5 font-mono text-[11px] text-muted">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
