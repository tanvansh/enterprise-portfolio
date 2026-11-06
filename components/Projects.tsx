import { ArrowUpRight, Lock } from "lucide-react";
import { GitHubIcon } from "./BrandIcons";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Projects & technical builds"
          title="Things I've built"
          description="Code, hardware, engineering systems and businesses."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.06} className="card flex flex-col p-6 transition-colors hover:border-line-strong">
              <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-dim">{p.context}</p>
              <h3 className="mt-2 text-base font-medium leading-snug">{p.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{p.description}</p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span key={s} className="rounded border border-line bg-white/[0.02] px-2 py-0.5 font-mono text-[11px] text-muted">
                    {s}
                  </span>
                ))}
              </div>

              {(p.live || p.github || p.note) && (
                <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-line pt-4 text-sm">
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-fg transition-colors hover:text-accent"
                    >
                      Live site <ArrowUpRight size={14} />
                    </a>
                  )}
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-fg transition-colors hover:text-accent"
                    >
                      <GitHubIcon width={14} height={14} /> Code
                    </a>
                  )}
                  {p.note && (
                    <span className="inline-flex items-center gap-1.5 text-xs text-dim">
                      <Lock size={12} /> {p.note}
                    </span>
                  )}
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
