const sections = [
  {
    title: "Quick Links",
    links: ["Home", "About Us", "Our Teams", "Contact Us"],
  },
  {
    title: "Explore More",
    links: ["Events", "Gallery", "Sponsors", "Web Archives"],
  },
  {
    title: "Support",
    links: ["Privacy Policy", "Refund Policy", "Terms & Conditions", "Delivery & Shipping", "FAQs"],
  },
];

/* eslint-disable @next/next/no-img-element */
export default function Footer() {
  return (
    <footer className="bg-black px-6 py-16 text-[#d6a847]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-sm space-y-4">
          <img src="/icon.png" alt="Ignitia logo" className="w-32" />
          <p className="text-sm text-black/80">
            Join us for an unforgettable celebration of art, music, and culture.
          </p>
        </div>

        <div className="grid flex-1 grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-semibold text-[#f5d47a]">{section.title}</h4>
              <ul className="mt-4 space-y-2 text-sm text-black/70">
                {section.links.map((link) => (
                  <li key={link}>
                    <a className="cursor-pointer transition hover:text-gold">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-10 w-full max-w-6xl border-t border-black/10" />

      <div className="mx-auto mt-6 flex w-full max-w-6xl flex-col items-center justify-between gap-4 text-xs text-black/60 sm:flex-row">
        <p>© 2025 Ignitia 2K25 by PSIT. All rights reserved.</p>
        <div className="flex items-center gap-3">
          {["facebook", "instagram", "youtube"].map((icon) => (
            <span key={icon} className="h-10 w-10 rounded-full border border-[#d6a847]/60 text-center leading-10 text-[#d6a847]">
              <i className={`fa-brands fa-${icon} text-lg`}></i>
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
