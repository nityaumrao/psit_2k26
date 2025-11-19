"use client";

import { useState } from "react";
import ExploreEventsHeader from "./_components/explore-events-header";
import { EventsShowcase, type DayFilter } from "./_components/card";

export default function EventsPage() {
  const [activeFilter, setActiveFilter] = useState<DayFilter | "All">("All");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <main
      className="min-h-screen bg-[#ffffff] text-white"
      style={{ backgroundColor: "#a4810dff" }}
    >
      <ExploreEventsHeader
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <EventsShowcase activeFilter={activeFilter} searchQuery={searchQuery} />
    </main>
  );
}
