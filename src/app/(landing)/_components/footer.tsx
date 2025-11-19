"use client";

import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/event" },
  { label: "Leaderboard", href: "/leaderboard" },
  { label: "Gallery", href: "/gallery" },
];

const resourceLinks = [
  { label: "Schedule", href: "/schedules" },
  { label: "Archives", href: "/archives" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "Teams", href: "/teams" },
];

const socials = [
  { label: "Instagram", href: "https://instagram.com", icon: InstagramIcon },
  { label: "YouTube", href: "https://youtube.com", icon: YoutubeIcon },
  { label: "Twitter", href: "https://twitter.com", icon: TwitterIcon },
  { label: "LinkedIn", href: "https://linkedin.com", icon: LinkedinIcon },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-white to-[#f5f2ef] text-black">
      {/* Soft gold highlight */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#f8e5b6]/40 to-transparent blur-2xl" />

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">

          {/* BRAND */}
          <div className="space-y-4 md:max-w-sm">
            <div className="inline-flex items-center gap-3">
              <span className="text-3xl font-semibold tracking-[0.4em] text-[#c28b00]">
                IGNITIA
              </span>
              <span className="rounded-full border border-[#c28b00]/40 px-3 py-1 text-[11px] uppercase tracking-[0.4em] text-[#c28b00]">
                2K26
              </span>
            </div>

            <p className="text-sm text-black/70">
              The official cultural & technical extravaganza of PSIT—celebrating
              ideas, creativity, and youthful energy.
            </p>

            <div className="flex gap-4 text-sm text-black/60">
              <span>Kanpur, Uttar Pradesh</span>
              <span className="text-black/30">|</span>
              <a
                href="mailto:ignitia@psit.in"
                className="text-[#c28b00] font-medium hover:text-black"
              >
                ignitia@psit.in
              </a>
            </div>
          </div>

          {/* LINK COLUMNS */}
          <div className="grid flex-1 grid-cols-2 gap-10 text-sm md:grid-cols-3">
            <FooterColumn title="Quick Links" links={quickLinks} />
            <FooterColumn title="Festival" links={resourceLinks} />

            {/* SOCIALS */}
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.4em] text-[#c28b00]">
                Connect
              </p>

              <div className="flex flex-wrap gap-3">
                {socials.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-black/70 shadow-sm transition hover:border-[#c28b00] hover:text-[#c28b00]"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER BOTTOM BAR */}
        <div className="flex flex-col gap-3 border-t border-black/10 pt-6 text-xs text-black/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Ignitia Festival. Crafted proudly at PSIT.</p>

          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-black font-medium">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-black font-medium">
              Terms
            </Link>
            <Link href="/code-of-conduct" className="hover:text-black font-medium">
              Code of Conduct
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

type FooterColumnProps = {
  title: string;
  links: { label: string; href: string }[];
};

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div className="space-y-3">
      <p className="text-xs uppercase tracking-[0.4em] text-[#c28b00]">
        {title}
      </p>

      <ul className="space-y-2 text-black/70">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="transition hover:text-black font-medium"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ICONS (Light friendly – black stroke/fill) */

function InstagramIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <path d="M16.5 7.5h.01" />
      <circle cx="12" cy="12" r="3.5" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M21.6 7.2a2.6 2.6 0 0 0-1.8-1.8C18 5 12 5 12 5s-6 0-7.8.4A2.6 2.6 0 0 0 2.4 7.2C2 9 2 12 2 12s0 3 .4 4.8a2.6 2.6 0 0 0 1.8 1.8C6 19 12 19 12 19s6 0 7.8-.4a2.6 2.6 0 0 0 1.8-1.8C22 15 22 12 22 12s0-3-.4-4.8ZM10 15.5v-7l6 3.5-6 3.5Z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M21.5 6.4a4.1 4.1 0 0 1-1.2.32 2.1 2.1 0 0 0 .9-1.13 4.09 4.09 0 0 1-1.32.52A2.06 2.06 0 0 0 16.2 7a5.85 5.85 0 0 1-4.3-2.18 2.07 2.07 0 0 0 .63 2.75 2 2 0 0 1-.93-.26v.03a2.07 2.07 0 0 0 1.65 2 2 2 0 0 1-.92.04 2.07 2.07 0 0 0 1.93 1.44 4.14 4.14 0 0 1-3 1 5.9 5.9 0 0 0 9-5.32Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 5 2.12 5 3.5ZM.5 8h4v13h-4V8Zm7.5 0h3.8v1.8h.05c.53-1 1.8-2 3.7-2 4 0 4.8 2.6 4.8 6v7.2h-4V14c0-1.4 0-3.2-2-3.2s-2.4 1.5-2.4 3v7.2h-4V8Z" />
    </svg>
  );
}
