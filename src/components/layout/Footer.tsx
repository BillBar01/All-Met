import Link from "next/link";
import { NAV_LINKS, SITE_NAME, SITE_TAGLINE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-ink border-t-4 border-red text-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="headline-stamp text-gold text-2xl mb-3">{SITE_NAME}</h3>
            <p className="typewriter-accent text-silver text-sm">{SITE_TAGLINE}</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="headline-stamp text-gold text-sm mb-4 tracking-widest">Navigate</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-silver text-sm hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="headline-stamp text-gold text-sm mb-4 tracking-widest">Connect</h4>
            <p className="text-silver text-sm mb-2">Washington, DC</p>
            <p className="text-silver text-sm">Built with grit and caffeine.</p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-silver/20 text-center">
          <p className="typewriter-accent text-silver/60 text-xs">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
