import type { Metadata } from "next";
import SectionHeading from "@/components/ui/SectionHeading";
import NewsletterSignup from "@/components/ui/NewsletterSignup";

export const metadata: Metadata = {
  title: "Newsletters",
  description: "Subscribe to ALL MET newsletters — DC sports and business delivered to your inbox.",
};

const NEWSLETTERS = [
  {
    name: "The Daily Rundown",
    frequency: "Every weekday morning",
    description:
      "Your 5-minute briefing on everything DC sports and business. Scores, headlines, and the takes that matter — no filler, no fluff. In your inbox before your first coffee.",
  },
  {
    name: "The Deep Cut",
    frequency: "Every Saturday",
    description:
      "One long-form story per week. The kind of piece that makes you put your phone down and actually read. Deep dives into the stories behind the stories.",
  },
];

export default function NewslettersPage() {
  return (
    <div className="py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading className="mb-6">Newsletters</SectionHeading>

        <p className="text-navy/70 text-center max-w-2xl mx-auto mb-12">
          We write it. You read it. No algorithms deciding what you see — just straight-up
          DC sports and business coverage delivered to your inbox.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {NEWSLETTERS.map((newsletter) => (
            <div key={newsletter.name} className="retro-card p-6">
              <div className="h-2 bg-red mb-4" />
              <h3 className="headline-stamp text-navy text-xl mb-2">
                {newsletter.name}
              </h3>
              <p className="typewriter-accent text-red text-sm mb-4">
                {newsletter.frequency}
              </p>
              <p className="text-navy/70 text-sm leading-relaxed">
                {newsletter.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-navy diagonal-stripes p-8 md:p-12 border-3 border-navy shadow-[6px_6px_0_var(--navy)]">
          <h3 className="headline-stamp text-white text-2xl mb-2 text-center">
            Get On The List
          </h3>
          <p className="typewriter-accent text-silver text-sm mb-6 text-center">
            Pick your newsletter. Or both. We don&apos;t judge.
          </p>
          <div className="flex justify-center">
            <NewsletterSignup variant="hero" />
          </div>
        </div>
      </div>
    </div>
  );
}
