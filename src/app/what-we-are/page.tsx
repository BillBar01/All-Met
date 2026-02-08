import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "What We Are",
  description: "ALL MET — what we stand for, how we operate, and why we exist.",
};

const VALUES = [
  {
    title: "No Corporate Fluff",
    description:
      "We don't write press releases. We don't do access journalism. We write what we think, and we back it up.",
  },
  {
    title: "DC First",
    description:
      "This city has its own sports culture and business identity. We cover it like insiders because we are insiders.",
  },
  {
    title: "Straight Talk",
    description:
      "If your team is playing like garbage, we'll say so. If a startup is changing the game, we'll say that too. No hedging.",
  },
  {
    title: "Built Different",
    description:
      "We're not a legacy outlet trying to stay relevant. We're a new voice built for how people actually consume content.",
  },
];

export default function WhatWeArePage() {
  return (
    <div className="py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading className="mb-12">What We Are</SectionHeading>

        {/* Mission Block */}
        <div className="bg-navy diagonal-stripes p-8 md:p-12 border-3 border-navy shadow-[6px_6px_0_var(--navy)] mb-16">
          <h2 className="headline-stamp text-white text-2xl md:text-3xl mb-4 text-center">
            Our Mission
          </h2>
          <p className="typewriter-accent text-white text-lg md:text-xl text-center leading-relaxed max-w-2xl mx-auto">
            To cover DC sports and business with honesty, attitude, and a
            relentless commitment to the truth. We believe this city deserves
            better coverage — so we&apos;re building it.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {VALUES.map((value) => (
            <div key={value.title} className="retro-card p-6">
              <div className="h-2 bg-red mb-4" />
              <h3 className="headline-stamp text-navy text-lg mb-3">
                {value.title}
              </h3>
              <p className="text-navy/70 text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Closing */}
        <div className="text-center">
          <p className="typewriter-accent text-navy/60 text-lg">
            This is ALL MET. Washington&apos;s Own. Read us or don&apos;t — but don&apos;t say you weren&apos;t told.
          </p>
        </div>
      </div>
    </div>
  );
}
