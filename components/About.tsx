import { Compass, Cpu, Layers, Wrench } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const facets = [
  {
    icon: Wrench,
    title: "Mechanical engineer by training",
    body: "B.Tech from Thapar. FEA and thermal analysis on an EV go-kart that finished on the national podium.",
  },
  {
    icon: Layers,
    title: "Engineering data in practice",
    body: "Digital twins, P&ID and 3D model data, and clash detection for offshore wind projects at Siemens Energy.",
  },
  {
    icon: Compass,
    title: "Operator and founder",
    body: "Built Noble Soccer Store, and run OTA growth for The Home Curator. Budgets, teams, customers and margins.",
  },
  {
    icon: Cpu,
    title: "Data and AI curious",
    body: "LLM training at Outlier, OpenCV and TensorFlow projects, and my own Pine Script tools for the markets.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <div>
            <SectionHeader eyebrow="About me" title="A systems thinker who likes getting hands-on." />
            <Reveal className="-mt-6 space-y-4 text-base leading-relaxed text-muted">
              <p>
                My path doesn&apos;t fit a single box. I studied mechanical engineering, now work on engineering data
                for some of the largest offshore wind projects in Europe, and have spent the last few years running real
                businesses on the side.
              </p>
              <p>
                That mix shapes how I work. I start from the problem, not the tool: find where time, money or
                accuracy is leaking, understand the people doing the work, then build the simplest system that fixes
                it and keeps working.
              </p>
              <p>
                Most of what I&apos;ve learned came from doing: fixing design clashes on huge projects, scaling a store,
                filling rental calendars. If you never push your own limits, you stay stuck in the same place.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:pt-14">
            {facets.map(({ icon: Icon, title, body }, i) => (
              <Reveal key={title} delay={i * 0.06} className="card p-6">
                <Icon size={20} className="text-accent" />
                <h3 className="mt-4 text-base font-medium">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
