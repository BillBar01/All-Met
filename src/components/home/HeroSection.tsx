import NewsletterSignup from "@/components/ui/NewsletterSignup";

export default function HeroSection() {
  return (
    <section className="bg-navy diagonal-stripes py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="headline-stamp text-gold text-5xl md:text-7xl lg:text-8xl mb-4">
          THE ALL MET
        </h1>
        <p className="typewriter-accent text-red text-xl md:text-2xl mb-2">
          NO BULLSHIT.
        </p>
        <p className="text-silver text-sm md:text-base mb-10 max-w-xl mx-auto">
          DC sports and tech coverage that cuts through the noise.
          Real takes. Real stories. No corporate fluff.
        </p>
        <div className="flex justify-center">
          <NewsletterSignup variant="hero" />
        </div>
      </div>
    </section>
  );
}
