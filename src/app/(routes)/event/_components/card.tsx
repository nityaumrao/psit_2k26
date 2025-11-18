"use client";

import { useMemo, useState } from "react";
import { DirectionAwareHover } from "./ui/direction-aware-hover";

type EventCardProps = {
  title: string;
  description: string;
  date: string;
  club: string;
  imageUrl: string;
};

const dayFilters = ["25th March", "28th March", "29th March"] as const;
type DayFilter = (typeof dayFilters)[number];

const events: (EventCardProps & { id: number; date: DayFilter })[] = [
  {
    id: 1,
    title: "Drone Dynamics",
    description: "Elevating the ordinary with aerial ingenuity and rapid prototyping challenges.",
    date: "25th March",
    club: "IoT Club",
    imageUrl:
      "https://images.unsplash.com/photo-1504198458649-3128b932f49b?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    title: "Mind Meld Challenge",
    description: "A brain-flexing puzzle derby curated by DISH to test synergy under pressure.",
    date: "28th March",
    club: "DISH",
    imageUrl:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    title: "Stock Market Simulation",
    description: "Decipher the markets in PSIT's flagship financial strategy faceoff.",
    date: "28th March",
    club: "FinVerse",
    imageUrl:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    title: "Launchpad Marathon",
    description: "Pitch, pivot, and prototype during the campus-wide startup showcase.",
    date: "29th March",
    club: "Startup Cell",
    imageUrl:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80",
  },
];

export function EventsShowcase() {
  const [activeFilter, setActiveFilter] = useState<DayFilter | "All">("28th March");
  const filteredEvents = useMemo(() => {
    if (activeFilter === "All") return events;
    return events.filter((event) => event.date === activeFilter);
  }, [activeFilter]);

  return (
    <section className="min-h-screen bg-black py-24 text-white">
      <div className="mx-auto w-full max-w-6xl px-6">
        <header className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">Ignitia 2k26</p>
          <h1 className="mt-4 text-4xl font-semibold uppercase md:text-5xl">Events</h1>
          <p className="mx-auto mt-4 max-w-3xl text-sm text-zinc-400 md:text-base">
            Explore every showcase, challenge, and celebration happening across campus. Filter by day to lock in your
            schedule.
          </p>
        </header>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {(["All", ...dayFilters] as const).map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                activeFilter === filter
                  ? "bg-white text-black"
                  : "bg-zinc-900/70 text-zinc-300 hover:bg-zinc-800"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function EventCard({ title, description, date, club, imageUrl }: EventCardProps) {
  return (
    <div className="flex items-center justify-center">
      <DirectionAwareHover
        imageUrl={imageUrl}
        className="h-[28rem] w-full max-w-sm md:h-[32rem]"
        childrenClassName="max-w-[14rem] space-y-2"
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.45em] text-white/80">{date}</p>
        <p className="font-semibold text-2xl leading-tight text-white">{title}</p>
        <p className="text-sm text-white/80">{description}</p>
        <span className="inline-flex rounded-full border border-white/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/80">
          {club}
        </span>
      </DirectionAwareHover>
    </div>
  );
}
