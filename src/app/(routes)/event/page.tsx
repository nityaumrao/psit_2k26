"use client";

import { useState } from "react";
import ExploreEventsHeader from "./_components/explore-events-header";
import { EventsShowcase, type DayFilter } from "./_components/card";
import Footer from "../_components/footer";
import { Navbar } from "@/app/(routes)/home/_components/Navbar";
export default function EventsPage() {
  const [activeFilter, setActiveFilter] = useState<DayFilter | "All">("All");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <main
      className="min-h-screen bg-[#ffffff] text-white"
      style={{ backgroundColor: "#a4810dff" }}
    >
      <Navbar/>
      <ExploreEventsHeader
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <EventsShowcase activeFilter={activeFilter} searchQuery={searchQuery} />
      <div className="bg-gradient-to-b from-[#550902ff] via-[#550902ff] to-[#090201ff] text-white">
        <Footer />
      </div>
      
    </main>
  );
}
