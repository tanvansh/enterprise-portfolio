import { Brain, CalendarDays, CandlestickChart, Footprints, Mountain, Music, Plane, Trophy, Waves } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeader from "./SectionHeader";

const pursuits = [
  { icon: Plane, title: "Paragliding · P1 + P2", body: "Completed the P1 + P2 paragliding course; also hold an NCC “C” Certificate from the Air Wing." },
  { icon: Mountain, title: "Mountaineering", body: "Kedarkantha, Pangarchulla, Chopta Chandrashila, and Dayara Bugyal." },
  { icon: Brain, title: "Meditation", body: "Practising Shambhavi Mahamudra as part of a steady personal practice." },
  { icon: Waves, title: "Surfing", body: "Completed a surfing course and keep looking for time in the water." },
  { icon: Footprints, title: "Trail running", body: "ITRA trail runner, drawn to long days and technical mountain trails." },
  { icon: CalendarDays, title: "Running events", body: "Organising an event in Pune with Ourglass and collaborating with multiple running events." },
  { icon: Trophy, title: "Football", body: "Most Promising Player at the Jackie Memorial Soccer Tournament. The game I love most." },
  { icon: CandlestickChart, title: "Markets", body: "Trading equities and building my own indicators on TradingView." },
  { icon: Music, title: "Piano & people", body: "Learning piano, and an ongoing interest in human behaviour and palmistry." },
];

const honours = [
  "Exceptional Sportsmanship Throughout the Year",
  "Run for Nation · position holder",
  "Most Promising Player · Jackie Memorial Soccer Tournament",
];

export default function Beyond() {
  return (
    <section id="beyond" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          eyebrow="Off the clock"
          title="Outside the usual lines"
          description="Mountains, movement, and the people who make an event worth showing up for."
        />

        <div className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {pursuits.map(({ icon: Icon, title, body }) => (
            <div key={title} className="bg-ink p-6">
              <Icon size={18} className="text-muted" />
              <p className="mt-3 text-sm font-medium">{title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-dim">{body}</p>
            </div>
          ))}
        </div>

        <Reveal className="mt-6 flex flex-wrap items-center gap-2">
          <span className="mr-1 font-mono text-[11px] uppercase tracking-[0.18em] text-dim">Honours</span>
          {honours.map((h) => (
            <span key={h} className="rounded-full border border-line px-3 py-1 text-xs text-muted">
              {h}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
