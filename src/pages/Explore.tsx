import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Plane, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { EXPERIENCES } from "../constants";
import type { Experience } from "../constants";

// ─── Filter Data ────────────────────────────────────────────────────────────
const DURATIONS = ["All", "3–5 Days", "6–8 Days", "9+ Days"];
const VIBES = ["All", "Adventure", "Wellness", "Luxury", "Cultural", "Coastal"];
const SORT_OPTIONS = ["Recommended", "Price: Low", "Price: High", "Duration"];

// ─── Explore Page ────────────────────────────────────────────────────────────
export default function Explore() {
  const [search, setSearch] = useState("");
  const [activeDuration, setActiveDuration] = useState("All");
  const [activeVibe, setActiveVibe] = useState("All");
  const [sortBy, setSortBy] = useState("Recommended");
  const [filtersOpen, setFiltersOpen] = useState(false);

  // Filtering logic
  let filtered = EXPERIENCES.filter((exp) => {
    const matchesSearch =
      exp.title.toLowerCase().includes(search.toLowerCase()) ||
      exp.location.toLowerCase().includes(search.toLowerCase());

    const matchesDuration =
      activeDuration === "All" ||
      (activeDuration === "3–5 Days" && exp.nights <= 4) ||
      (activeDuration === "6–8 Days" && exp.nights >= 5 && exp.nights <= 7) ||
      (activeDuration === "9+ Days" && exp.nights >= 8);

    const matchesVibe =
      activeVibe === "All" ||
      exp.vibe.toLowerCase() === activeVibe.toLowerCase();

    return matchesSearch && matchesDuration && matchesVibe;
  });

  // Sorting
  if (sortBy === "Price: Low") filtered = [...filtered].sort((a, b) => a.pricePerHead - b.pricePerHead);
  if (sortBy === "Price: High") filtered = [...filtered].sort((a, b) => b.pricePerHead - a.pricePerHead);
  if (sortBy === "Duration") filtered = [...filtered].sort((a, b) => a.nights - b.nights);

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans">
      
      {/* ── Hero Header (No Image, Pure Typography) ── */}
      <section className="pt-32 md:pt-40 pb-16 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 md:px-11 grid grid-cols-1 md:grid-cols-2 md:items-end gap-8 md:gap-0">
          <div>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.4em] text-emerald-400/50"
            >
              <div className="h-px w-5 bg-emerald-400/50" />
              The Catalog
            </motion.p>
            <div className="overflow-hidden">
              <motion.h1 
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                className="text-[clamp(2.5rem,6vw,6rem)] font-black leading-[0.88] tracking-[-0.04em] text-white"
              >
                All
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1 
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
                className="text-[clamp(2.5rem,6vw,6rem)] font-black leading-[0.88] tracking-[-0.04em] text-white/20"
              >
                expeditions.
              </motion.h1>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="md:pb-2 md:pl-14"
          >
            <p className="border-l border-white/10 pl-5 text-[15px] leading-[1.85] text-white/40">
              Every destination curated for founders, leaders, and high-impact thinkers. No tourists.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Search & Filter Bar (Sharp Edges) ── */}
      <div className="sticky top-0 z-50 bg-[#050505]/90 backdrop-blur-sm border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-6 md:px-11 py-5 flex flex-col md:flex-row gap-4 items-center">
          
          {/* Search Input (Sharp Square) */}
          <div className="relative flex-1 w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search destinations, vibes..."
              className="w-full bg-white/[0.03] border border-white/[0.08] px-10 pr-4 py-3 text-[13px] focus:outline-none focus:border-emerald-400/30 transition placeholder:text-white/15"
            />
            {search && (
              <button onClick={() => setSearch("")} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Sort Select (Sharp Square) */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-white/[0.03] border border-white/[0.08] px-4 py-3 text-[12px] text-white/50 focus:outline-none focus:border-emerald-400/30 appearance-none cursor-pointer min-w-[160px]"
          >
            {SORT_OPTIONS.map((s) => (
              <option key={s} className="bg-[#0a0a0a]">{s}</option>
            ))}
          </select>

          {/* Filter Toggle (Terminal Style) */}
          <button
            onClick={() => setFiltersOpen((p) => !p)}
            className={`flex items-center gap-2 px-5 py-3 border text-[11px] uppercase font-bold tracking-[0.2em] transition-all duration-300 ${
              filtersOpen
                ? "border-emerald-400/50 text-emerald-400 bg-emerald-400/5"
                : "border-white/[0.08] text-white/30 hover:border-white/20"
            }`}
          >
            Filters
          </button>
        </div>

        {/* Expandable Filter Terminal */}
        <AnimatePresence>
          {filtersOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden border-t border-white/[0.06]"
            >
              <div className="max-w-7xl mx-auto px-6 md:px-11 py-6 grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#080808]">
                {/* Duration Row */}
                <div>
                  <span className="block text-[10px] uppercase tracking-[0.3em] text-white/20 font-bold mb-4">
                    Duration
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {DURATIONS.map((d) => (
                      <FilterPill key={d} label={d} active={activeDuration === d} onClick={() => setActiveDuration(d)} />
                    ))}
                  </div>
                </div>
                {/* Vibe Row */}
                <div>
                  <span className="block text-[10px] uppercase tracking-[0.3em] text-white/20 font-bold mb-4">
                    Vibe
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {VIBES.map((v) => (
                      <FilterPill key={v} label={v} active={activeVibe === v} onClick={() => setActiveVibe(v)} />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── Results Count ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-11 pt-12 pb-6 flex items-center justify-between">
        <p className="text-[12px] text-white/30 uppercase tracking-[0.2em] font-bold">
          {filtered.length} Expedition{filtered.length !== 1 ? "s" : ""} Found
        </p>
        <div className="h-px flex-1 mx-8 bg-white/[0.04]" />
        <p className="text-[12px] text-white/15 uppercase tracking-[0.2em] font-mono">
          SORT: {sortBy.toUpperCase()}
        </p>
      </div>

      {/* ── Grid ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-11 pb-32">
        {filtered.length === 0 ? (
          <div className="text-center py-32 border border-white/[0.06]">
            <Plane className="w-10 h-10 mx-auto mb-4 text-white/10" />
            <p className="text-lg font-light text-white/20">
              No expeditions match your query.
            </p>
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px]">
            <AnimatePresence mode="popLayout">
              {filtered.map((exp, idx) => (
                <ExploreCard key={exp.id} exp={exp} idx={idx} />
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </section>
    </div>
  );
}

// ─── Filter Pill (Sharp Edge) ────────────────────────────────────────────────
function FilterPill({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-[10px] uppercase font-bold tracking-[0.2em] border transition-all duration-200 ${
        active
          ? "border-emerald-400/50 bg-emerald-400/10 text-emerald-400"
          : "border-white/[0.06] text-white/30 hover:border-white/20 hover:text-white/50"
      }`}
    >
      {label}
    </button>
  );
}

// ─── Explore Card (Architectural) ────────────────────────────────────────────
function ExploreCard({ exp, idx }: { exp: Experience; idx: number }) {
  return (
    <Link to={`/experiences/${exp.id}`} className="block h-[550px] lg:h-[650px] relative overflow-hidden bg-[#0a0a0a] border border-white/[0.06] group">
      <motion.div
        layout
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: idx * 0.05 }}
        className="relative w-full h-full"
      >
        {/* Image */}
        <img
          src={exp.image}
          alt={exp.title}
          className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-90 transition-all duration-[1.5s] ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Hard Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />

        {/* Top Stamps (Sharp Edges) */}
        <div className="absolute top-6 left-6 right-6 z-10 flex items-start justify-between">
          <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/40 bg-black/60 backdrop-blur-sm px-3 py-1.5 border border-white/[0.08]">
            {exp.vibe}
          </span>
          <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-emerald-400/70 bg-black/60 backdrop-blur-sm px-3 py-1.5 border border-emerald-400/20">
            {exp.duration} • {exp.nights}N
          </span>
        </div>

        {/* Bottom Content (Anchored) */}
        <div className="absolute bottom-0 left-0 right-0 z-10 p-8 flex flex-col justify-end h-full">
          
          <div className="mt-auto">
            {/* Location */}
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-5 bg-emerald-400/60" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-emerald-400/70 font-bold">
                {exp.location}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-[clamp(1.5rem,2.5vw,2.5rem)] font-black tracking-[-0.03em] text-white leading-[0.95] mb-8">
              {exp.title}
            </h3>

            {/* Bottom Data Row */}
            <div className="flex items-center justify-between pt-6 border-t border-white/[0.1]">
              <div className="flex items-center gap-6">
                <div>
                  <span className="block text-[9px] uppercase tracking-[0.3em] text-white/20 mb-1 font-bold">Group Size</span>
                  <span className="text-[13px] font-bold text-white/60">{exp.groupSize} Founders</span>
                </div>
                <div className="h-8 w-px bg-white/[0.06]" />
                <div>
                  <span className="block text-[9px] uppercase tracking-[0.3em] text-white/20 mb-1 font-bold">Starting At</span>
                  <span className="text-[13px] font-bold text-white/60">Revealing Soon</span>
                </div>
              </div>

              {/* Arrow Indicator */}
              <div className="w-12 h-12 rounded-full border border-white/[0.08] flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:border-emerald-400/30 transition-all duration-500 shrink-0">
                <ArrowUpRight className="w-5 h-5 text-emerald-400/70 -rotate-0" />
              </div>
            </div>
          </div>

        </div>
      </motion.div>
    </Link>
  );
}