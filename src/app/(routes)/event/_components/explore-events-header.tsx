"use client";

import { useEffect, useState } from "react";
import type { DayFilter } from "./card";
import { dayFilters } from "./card";

type ExploreEventsHeaderProps = {
  activeFilter: DayFilter | "All";
  onFilterChange: (filter: DayFilter | "All") => void;
  searchQuery: string;
  onSearchChange: (value: string) => void;
};

// Hero header for Explore Events section with decorative glow and search input
const ExploreEventsHeader = ({
  activeFilter,
  onFilterChange,
  searchQuery,
  onSearchChange,
}: ExploreEventsHeaderProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsVisible(true), 50);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative isolate flex min-h-[60vh] flex-col items-center justify-center overflow-hidden px-6 py-24 text-center text-white md:px-12"
      style={{
        background:
          "radial-gradient(circle at 15% 20%, rgba(251, 190, 86, 0.22), transparent 45%), radial-gradient(circle at 85% 10%, rgba(179,131,56,0.25), transparent 50%), linear-gradient(180deg, #550902ff 0%, #1d0302ff 60%, #090201ff 100%)",
      }}
    >
      {/* floating glow accents */}
      <div className="pointer-events-none absolute left-6 top-4 h-24 w-24 rounded-full bg-[#f4d29a]/20 blur-3xl" />
      <div className="pointer-events-none absolute right-6 top-[-20px] h-32 w-32 rounded-full bg-[#b38338]/30 blur-[100px]" />

     

      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6">
        <div
          className={`transition duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-xs uppercase tracking-[0.6em] text-[#f4d29a]/80">Ignitia 2k25</p>
          <h1
            className="mt-4 font-serif text-4xl font-bold uppercase tracking-[0.2em] text-transparent sm:text-5xl md:text-6xl"
            style={{
              background: "linear-gradient(120deg, #F5E6B3, #B88A46 55%, #F5E6B3)",
              WebkitBackgroundClip: "text",
            }}
          >
            Explore Events
          </h1>
          <p className="mt-4 text-base text-[#fce9c9] sm:text-lg">
            Explore and register for our exciting lineup of technical and cultural events
          </p>
        </div>

        <label className="relative w-full max-w-xl" aria-label="Search events">
          <span className="sr-only">Search events</span>
          <input
            type="search"
            placeholder="Search events..."
            value={searchQuery}
            onChange={(event) => onSearchChange(event.target.value)}
            className="w-full rounded-full border border-[#f7a928]/40 bg-[#120014]/60 px-6 py-3 text-base text-white placeholder:text-white/60 shadow-[0_0_25px_rgba(247,169,40,0.3)] focus:border-[#f7e2b5] focus:outline-none"
          />
          <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-[#f7a928]">
            <SearchIcon />
          </span>
        </label>

        <div className="flex flex-wrap justify-center gap-4">
          {(["All", ...dayFilters] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => onFilterChange(filter === "All" ? "All" : filter)}
              className={`rounded-full border px-6 py-2 text-sm font-semibold uppercase tracking-[0.3em] transition ${
                activeFilter === filter
                  ? "border-[#f7a928] bg-gradient-to-r from-[#f7a928] to-[#f9dca8] text-black"
                  : "border-[#f7a928]/30 bg-transparent text-[#f9dca8] hover:border-[#f7a928]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <circle cx="11" cy="11" r="7" />
    <line x1="16.65" y1="16.65" x2="21" y2="21" />
  </svg>
);

export default ExploreEventsHeader;
