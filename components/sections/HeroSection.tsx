"use client"

import Image from "next/image"
import dynamic from "next/dynamic"
import DecryptedText from "@/components/reactbits/DecryptedText"
import Terminal from "@/components/Terminal"
import { experiences, profile } from "@/lib/content"

// Canvas background: no reason to ship it during server render.
const DotGrid = dynamic(() => import("@/components/reactbits/DotGrid"), { ssr: false })

const current = experiences[0]

export default function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <DotGrid
          dotSize={2}
          gap={32}
          baseColor="#302B26"
          activeColor="#FFB454"
          proximity={110}
          shockRadius={210}
          shockStrength={4}
          resistance={620}
          returnDuration={1.4}
        />
      </div>

      <div className="relative mx-auto max-w-shell px-6 pb-24 pt-24 lg:px-10 lg:pb-32">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-rule pb-5">
          <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-label text-paper-dim">
            <span className="inline-block h-1.5 w-1.5 bg-phosphor" aria-hidden="true" />
            {profile.available ? "Open to work" : "Not looking right now"}
          </p>
          <p className="font-mono text-[11px] uppercase tracking-label text-paper-faint">
            {profile.location}
          </p>
        </div>

        {/* DOM order is name → portrait → terminal so the portrait stays above the
            fold on phones; on desktop the portrait spans both rows on the right. */}
        {/* auto_1fr: the portrait column is taller than the name block, and without
            this the leftover height inflates row 1 and pushes the terminal down. */}
        <div className="mt-8 grid grid-cols-12 gap-x-6 gap-y-8 lg:mt-9 lg:grid-rows-[auto_1fr]">
          <div className="col-span-12 lg:col-span-8 lg:col-start-1 lg:row-start-1">
            {/* The scramble would read as gibberish, so the accessible name is set explicitly. */}
            <h1
              aria-label={profile.shortName}
              className="font-mono text-[clamp(2rem,5.5vw,4rem)] font-bold uppercase leading-[1.02] tracking-display"
            >
              <span aria-hidden="true">
                <DecryptedText
                  text={profile.shortName}
                  animateOn="view"
                  sequential
                  revealDirection="start"
                  speed={32}
                  maxIterations={14}
                  characters="ABCDEFGHIJKLMNOPQRSTUVWXYZ#$%&/*-+"
                  className="text-paper"
                  encryptedClassName="text-paper-faint"
                />
              </span>
            </h1>

            <p className="mt-4 font-mono text-lg text-paper lg:text-2xl">{profile.role}</p>
          </div>

          <aside className="col-span-12 lg:col-span-4 lg:col-start-9 lg:row-span-2 lg:row-start-1">
            <div className="flex items-end gap-6 lg:block">
              <div className="relative aspect-[4/5] w-40 shrink-0 border border-rule sm:w-48 lg:w-full">
                <Image
                  src="/prof-pic.jpeg"
                  alt={profile.name}
                  fill
                  sizes="(max-width: 1024px) 192px, 400px"
                  className="object-cover grayscale-[0.35] contrast-[1.05]"
                  priority
                />
              </div>

              <dl className="flex-1 font-mono text-[12px] leading-relaxed lg:mt-6">
                <div className="border-t border-rule py-3.5">
                  <dt className="text-[10px] uppercase tracking-label text-paper-faint">Now</dt>
                  <dd className="mt-1.5 text-paper">{current.role}</dd>
                  <dd className="text-paper-dim">{current.company}</dd>
                </div>
                <div className="border-y border-rule py-3.5">
                  <dt className="text-[10px] uppercase tracking-label text-paper-faint">Also</dt>
                  <dd className="mt-1.5 text-paper-dim">Freelance ERP &amp; contract builds</dd>
                </div>
              </dl>
            </div>
          </aside>

          <div className="col-span-12 lg:col-span-8 lg:col-start-1 lg:row-start-2">
            <Terminal />
          </div>
        </div>
      </div>
    </section>
  )
}
