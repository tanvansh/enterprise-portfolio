import Reveal from "./Reveal";

export default function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      <h2 className="text-gradient text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-relaxed text-muted">{description}</p>}
    </Reveal>
  );
}
