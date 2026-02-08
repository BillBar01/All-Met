"use client";

import { useState } from "react";

interface NewsletterSignupProps {
  variant?: "hero" | "default";
}

export default function NewsletterSignup({ variant = "default" }: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  if (submitted) {
    return (
      <p className={`typewriter-accent text-lg ${variant === "hero" ? "text-white" : "text-navy"}`}>
        You&apos;re in. Watch your inbox.
      </p>
    );
  }

  const isHero = variant === "hero";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
        className={`flex-1 px-4 py-3 border-3 border-navy font-body text-sm ${
          isHero ? "bg-white text-navy" : "bg-white text-navy"
        } focus:outline-none focus:ring-2 focus:ring-red`}
      />
      <button
        type="submit"
        className={`retro-button text-sm ${
          isHero ? "bg-red text-white" : "bg-navy text-white"
        }`}
      >
        Subscribe
      </button>
    </form>
  );
}
