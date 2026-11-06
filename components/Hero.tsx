"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import HeroBackground from "./HeroBackground";
import { GitHubIcon, LinkedInIcon } from "./BrandIcons";
import { site } from "@/lib/site";

const socials = [
  { label: "GitHub", href: site.github, icon: GitHubIcon },
  { label: "LinkedIn", href: site.linkedin, icon: LinkedInIcon },
  { label: "Email", href: `mailto:${site.email}`, icon: Mail },
];

export default function Hero() {
  const reduce = useReducedMotion();
  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 18 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section id="top" className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-24 pb-16">
      <HeroBackground />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,7fr)_minmax(0,4fr)]">
        <div>
          <motion.div
            {...fade(0)}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-panel/80 px-3 py-1 text-xs text-muted backdrop-blur"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            {site.title}
          </motion.div>

          <motion.h1
            {...fade(0.08)}
            className="mt-6 text-5xl font-semibold leading-[1.02] tracking-tight text-fg sm:text-7xl"
          >
            {site.name}
          </motion.h1>

          <motion.p {...fade(0.14)} className="mt-5 max-w-xl text-xl font-medium tracking-tight sm:text-2xl">
            <span className="text-fg">Engineer, founder, builder.</span>{" "}
            <span className="bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent">{site.tagline}</span>
          </motion.p>

          <motion.p {...fade(0.2)} className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            I build connected engineering systems at Siemens Energy, and bring the same systems mindset to businesses,
            technical builds, and the teams I work with. My path spans offshore wind, entrepreneurship, AI evaluation,
            and an electric go-kart team that earned a national podium finish.
          </motion.p>

          <motion.div {...fade(0.28)} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#experience"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-white shadow-[0_0_0_1px_rgba(129,140,248,0.4),0_10px_36px_-10px_rgba(99,102,241,0.8)] transition-all hover:-translate-y-0.5 hover:bg-[#575af0]"
            >
              View Experience / Resume
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg border border-line bg-panel/70 px-5 py-3 text-sm font-medium text-fg backdrop-blur transition-colors hover:border-line-strong hover:bg-panel-2"
            >
              Get in Touch
            </a>
          </motion.div>

          <motion.div {...fade(0.34)} className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <ul className="flex items-center gap-2">
              {socials.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    title={label}
                    target={href.startsWith("mailto") ? undefined : "_blank"}
                    rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-panel/70 text-muted backdrop-blur transition-colors hover:border-accent/50 hover:text-fg"
                  >
                    <Icon width={17} height={17} />
                  </a>
                </li>
              ))}
            </ul>
            <p className="flex items-center gap-1.5 text-sm text-dim">
              <MapPin size={14} />
              {site.location}
            </p>
          </motion.div>
        </div>

        <motion.div
          {...(reduce
            ? {}
            : {
                initial: { opacity: 0, scale: 0.96 },
                animate: { opacity: 1, scale: 1 },
                transition: { duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] as const },
              })}
          className="relative mx-auto w-full max-w-[340px] lg:max-w-none"
        >
          <div
            aria-hidden
            className="absolute -inset-6 -z-10 rounded-[32px] bg-[radial-gradient(closest-side,rgba(99,102,241,0.35),transparent)] blur-2xl"
          />
          <div className="relative overflow-hidden rounded-2xl border border-line bg-panel p-1.5 shadow-2xl shadow-black/40">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
              <Image
                src={site.photo}
                alt={`Portrait of ${site.name}`}
                fill
                priority
                sizes="(min-width: 1024px) 380px, 340px"
                className="object-cover object-[50%_45%]"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/80 to-transparent" />
              <div className="absolute inset-x-3 bottom-3 flex items-center justify-between rounded-lg border border-white/10 bg-ink/60 px-3 py-2 backdrop-blur-md">
                <span className="text-xs font-medium text-fg">Engineering · Data · Business</span>
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
