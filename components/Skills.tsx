import { Award, GraduationCap, Languages } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";
import { certifications, education, skills, spokenLanguages } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-20 border-y border-line bg-panel/40 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader eyebrow="Education, certifications & skills" title="Toolkit and credentials" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((s, i) => (
            <Reveal key={s.group} delay={(i % 3) * 0.05} className="card p-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-dim">{s.group}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {s.items.map((it) => (
                  <span key={it} className="rounded-md border border-line bg-white/[0.03] px-2.5 py-1 text-xs text-fg/90">
                    {it}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <Reveal>
            <h3 className="flex items-center gap-2 text-sm font-medium">
              <GraduationCap size={18} className="text-accent" /> Education
            </h3>
            <ol className="mt-5 space-y-3">
              {education.map((e) => (
                <li key={e.school} className="card p-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="text-sm font-medium">{e.school}</p>
                    <p className="font-mono text-xs text-dim">{e.period}</p>
                  </div>
                  <p className="mt-1 text-sm text-muted">
                    {e.degree}
                    {e.detail && <span className="text-accent"> · {e.detail}</span>}
                  </p>
                  <p className="mt-1 text-xs text-dim">{e.location}</p>
                </li>
              ))}
            </ol>

            <h3 className="mt-10 flex items-center gap-2 text-sm font-medium">
              <Languages size={18} className="text-accent" /> Languages
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {spokenLanguages.map((l) => (
                <span key={l} className="rounded-md border border-line px-2.5 py-1 text-xs text-muted">
                  {l}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <h3 className="flex items-center gap-2 text-sm font-medium">
              <Award size={18} className="text-accent-2" /> Certifications
            </h3>
            <ul className="card mt-5 divide-y divide-line">
              {certifications.map((c) => (
                <li key={c.name} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 px-5 py-3.5">
                  <span className="text-sm text-fg/90">{c.name}</span>
                  {c.issuer && <span className="text-xs text-dim">{c.issuer}</span>}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
