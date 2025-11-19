"use client";

import Image from "next/image";
import { useMemo } from "react";

export const dayFilters = ["25th March", "28th March", "29th March"] as const;
export type DayFilter = (typeof dayFilters)[number];

type EventCardProps = {
  title: string;
  date: DayFilter;
  club: string;
  category: string;
  imageUrl: string;
  description: string;
};

const events: (EventCardProps & { id: number })[] = [
  {
    id: 1,
    title: "Drone Dynamics",
    description: "Aerial ingenuity showdown hosted by the IoT Club.",
    date: "25th March",
    club: "IoT Club",
    category: "Technical",
    imageUrl: "https://images.unsplash.com/photo-1504198458649-3128b932f49b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    title: "Mind Meld Challenge",
    description: "Puzzle derby curated by DISH to test synergy under pressure.",
    date: "28th March",
    club: "DISH",
    category: "Cultural",
    imageUrl: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    title: "Stock Market Simulation",
    description: "Decode the markets in PSIT's flagship finance strategy battle.",
    date: "28th March",
    club: "FinVerse",
    category: "Finance",
    imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    title: "Launchpad Marathon",
    description: "Pitch, pivot, and prototype during the campus-wide startup sprint.",
    date: "29th March",
    club: "Startup Cell",
    category: "Entrepreneurship",
    imageUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 5,
    title: "Rhythm Riot",
    description: "Cultural face-off to own the main stage.",
    date: "28th March",
    club: "Cultural Committee",
    category: "Cultural",
    imageUrl: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 6,
    title: "Code Arena",
    description: "Flagship hack sprint featuring the sharpest coders on campus.",
    date: "25th March",
    club: "CSI",
    category: "Hackathon",
    imageUrl: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  },
];

type EventsShowcaseProps = {
  activeFilter: DayFilter | "All";
  searchQuery: string;
};

export function EventsShowcase({ activeFilter, searchQuery }: EventsShowcaseProps) {
  const visibleEvents = useMemo(() => {
    const byDay = activeFilter === "All" ? events : events.filter((event) => event.date === activeFilter);
    const bySearch = byDay.filter((event) =>
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.club.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (bySearch.length >= 4) {
      return bySearch;
    }
    const supplemental = events.filter((event) => !bySearch.some((item) => item.id === event.id));
    return [...bySearch, ...supplemental].slice(0, 4);
  }, [activeFilter, searchQuery]);

  return (
    <section className="bg-[#060112] py-16 text-white">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {visibleEvents.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EventCard({ title, description, date, club, category, imageUrl }: EventCardProps) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-[#f4c77a]/15 bg-gradient-to-b from-[#000000] via-[#0b0b0b] to-[#550902ff]
 shadow-[0_25px_60px_rgba(0,0,0,0.45)]">
      <div className="overflow-hidden">
        <Image
          src={imageUrl}
          alt={`${title} poster`}
          width={480}
          height={640}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 px-6 py-6">
        <div className="flex items-center justify-between text-[13px] font-semibold uppercase tracking-[0.35em] text-[#f9dca8]">
          <span>{date}</span>
          <span className="text-[#f7a928]">{category}</span>
        </div>
        <h3 className="text-2xl font-semibold text-white drop-shadow-[0_5px_20px_rgba(247,169,40,0.35)]">{title}</h3>
        <p className="text-sm text-white/70">{description}</p>
        <div className="mt-auto flex items-center justify-between text-sm text-white/60">
          <span>{club}</span>
          <button className="rounded-full border border-[#f7a928]/40 px-4 py-1 text-[12px] font-semibold uppercase tracking-[0.3em] text-[#f9dca8] transition hover:border-[#f7a928] hover:text-white">
            Register
          </button>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-transparent via-[#f7a928] to-transparent opacity-60" />
    </article>
  );
}
