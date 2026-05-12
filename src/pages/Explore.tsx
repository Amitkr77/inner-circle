import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Plane, ArrowUpRight, ArrowUpDown, SlidersHorizontal } from "lucide-react";
import { Link } from "react-router-dom";
import { EXPERIENCES } from "../constants";
import type { Experience } from "../constants";

// ─── Filter Data ────────────────────────────────────────────────────────────
const DURATIONS = ["All", "3–5 Days", "6–8 Days", "9+ Days"];
const VIBES = ["All", "Adventure", "Wellness", "Luxury", "Cultural", "Coastal"];
const SORT_OPTIONS = ["Recommended", "Price: Low", "Price: High", "Duration"];

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
//   },
// };

// const drawLine = {
//   hidden: { scaleX: 0 },
//   show: {
//     scaleX: 1,
//     transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
//   },
// };

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
  if (sortBy === "Price: Low")
    filtered = [...filtered].sort((a, b) => a.pricePerHead - b.pricePerHead);
  if (sortBy === "Price: High")
    filtered = [...filtered].sort((a, b) => b.pricePerHead - a.pricePerHead);
  if (sortBy === "Duration")
    filtered = [...filtered].sort((a, b) => a.nights - b.nights);

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans">
      {/* ── Hero Header ── */}
      <section className="pt-28 sm:pt-32 md:pt-40 pb-12 sm:pb-16 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-11 grid grid-cols-1 md:grid-cols-2 md:items-end gap-8 md:gap-0">
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-5 flex items-center gap-3 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-orange-600/70"
            >
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="h-px w-5 bg-orange-600/70 origin-left"
              />
              The Catalog
            </motion.p>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                className="text-[clamp(2.2rem,6vw,6rem)] font-black leading-[0.88] tracking-[-0.04em] text-neutral-900"
              >
                All
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className="text-[clamp(2.2rem,6vw,6rem)] font-black leading-[0.88] tracking-[-0.04em] text-orange-500 transition-colors duration-500 cursor-default"
              >
                expeditions.
              </motion.h1>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="md:pb-2 md:pl-14"
          >
            <p className="border-l border-orange-500 pl-5 sm:pl-6 text-[14px] sm:text-[15px] leading-[1.85] text-neutral-500">
              Every destination curated for founders, leaders, and high-impact
              thinkers. No tourists.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Search & Filter Bar ── */}
<motion.div
  initial={{ y: -10 }}
  animate={{ y: 0 }}
  transition={{ delay: 0.3, duration: 0.5 }}
  className="sticky top-[56px] sm:top-[64px] md:top-[80px] z-50 bg-white/95 backdrop-blur-xl border-b border-neutral-200">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-11">
    
    {/* Single Row - All Screen Sizes */}
    <div className="flex items-center gap-2 py-3">
      
      {/* Search Input - Flex grow */}
      <div className="relative flex-1 min-w-0">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search destinations..."
          className="w-full bg-neutral-100 border border-transparent pl-9 pr-8 py-2.5 text-[13px] text-neutral-900 focus:outline-none focus:bg-white focus:border-orange-400/40 focus:ring-1 focus:ring-orange-400/10 transition-all placeholder:text-neutral-400 rounded-lg"
        />
        <AnimatePresence>
          {search && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => setSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
            >
              <X className="w-3.5 h-3.5" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Sort - Compact Icon Button */}
      <div className="relative shrink-0">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="absolute inset-0 opacity-0 cursor-pointer w-full h-full z-10"
        >
          {SORT_OPTIONS.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        <div className={`flex items-center gap-1.5 px-3 py-2.5 rounded-lg border text-[12px] font-medium transition-all ${
          sortBy !== SORT_OPTIONS[0]
            ? "bg-orange-50 border-orange-200 text-orange-600"
            : "bg-neutral-100 border-transparent text-neutral-600"
        }`}>
          <ArrowUpDown className="w-3.5 h-3.5 shrink-0" />
          <span className="hidden sm:block max-w-[80px] truncate">{sortBy}</span>
        </div>
      </div>

      {/* Filter Toggle Button */}
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => setFiltersOpen((p) => !p)}
        className={`relative shrink-0 flex items-center gap-1.5 px-3 py-2.5 rounded-lg border text-[12px] font-medium transition-all duration-200 ${
          filtersOpen || activeDuration !== "All" || activeVibe !== "All"
            ? "bg-orange-500 border-orange-500 text-white"
            : "bg-neutral-100 border-transparent text-neutral-600 hover:bg-neutral-200"
        }`}
      >
        <SlidersHorizontal className="w-3.5 h-3.5 shrink-0" />
        <span className="hidden sm:block">Filters</span>
        {/* Active dot */}
        {!filtersOpen && (activeDuration !== "All" || activeVibe !== "All") && (
          <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-orange-400 border border-white rounded-full" />
        )}
      </motion.button>
    </div>
  </div>

  {/* Expandable Filter Panel */}
  <AnimatePresence>
    {filtersOpen && (
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden border-t border-neutral-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-11 py-4 bg-neutral-50">

          {/* Sort Pills - Mobile Only */}
          <div className="sm:hidden mb-4 pb-4 border-b border-neutral-200">
            <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-bold mb-2.5">
              Sort By
            </p>
            <div className="flex flex-wrap gap-1.5">
              {SORT_OPTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => setSortBy(s)}
                  className={`px-3 py-1.5 text-[11px] font-medium rounded-md border transition-all ${
                    sortBy === s
                      ? "bg-neutral-900 border-neutral-900 text-white"
                      : "bg-white border-neutral-200 text-neutral-500"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Duration & Vibe Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
            
            {/* Duration */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
            >
              <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-bold mb-2.5">
                Duration
              </p>
              <div className="flex flex-wrap gap-1.5">
                {DURATIONS.map((d) => (
                  <FilterPill
                    key={d}
                    label={d}
                    active={activeDuration === d}
                    onClick={() => setActiveDuration(d)}
                  />
                ))}
              </div>
            </motion.div>

            {/* Vibe */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-bold mb-2.5">
                Vibe
              </p>
              <div className="flex flex-wrap gap-1.5">
                {VIBES.map((v) => (
                  <FilterPill
                    key={v}
                    label={v}
                    active={activeVibe === v}
                    onClick={() => setActiveVibe(v)}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Footer Actions */}
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-neutral-200">
            <button
              onClick={() => {
                setActiveDuration("All");
                setActiveVibe("All");
                setSortBy(SORT_OPTIONS[0]);
              }}
              className="text-[11px] text-neutral-400 hover:text-neutral-600 transition-colors font-medium"
            >
              Reset all
            </button>
            <button
              onClick={() => setFiltersOpen(false)}
              className="flex items-center gap-1.5 px-4 py-2 bg-neutral-900 text-white text-[11px] font-bold uppercase tracking-[0.1em] rounded-lg hover:bg-neutral-700 transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
</motion.div>

      {/* ── Results Count ── */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-11 pt-10 sm:pt-12 pb-5 sm:pb-6 flex items-center justify-between">
        <motion.p
          key={filtered.length}
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-[11px] sm:text-[12px] text-neutral-400 uppercase tracking-[0.2em] font-bold"
        >
          {filtered.length} Expedition{filtered.length !== 1 ? "s" : ""} Found
        </motion.p>
        <div className="h-px flex-1 mx-6 sm:mx-8 bg-neutral-100" />
        <p className="text-[11px] sm:text-[12px] text-neutral-300 uppercase tracking-[0.15em] sm:tracking-[0.2em] font-mono hidden sm:block">
          SORT: {sortBy.toUpperCase()}
        </p>
      </div>

      {/* ── Grid ── */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 md:px-11 pb-20 sm:pb-32">
        {filtered.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-24 sm:py-32 border border-neutral-200 rounded-sm"
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Plane className="w-10 h-10 mx-auto mb-5 text-neutral-200" />
            </motion.div>
            <p className="text-base sm:text-lg font-light text-neutral-300">
              No expeditions match your query.
            </p>
            <button
              onClick={() => {
                setSearch("");
                setActiveDuration("All");
                setActiveVibe("All");
              }}
              className="mt-5 text-[11px] font-bold uppercase tracking-[0.2em] text-orange-600 hover:text-orange-700 transition-colors"
            >
              Clear all filters
            </button>
          </motion.div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-[2px]"
          >
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

// ─── Filter Pill ─────────────────────────────────────────────────────────────
function FilterPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={`px-3.5 sm:px-4 py-2 text-[10px] sm:text-[11px] uppercase font-bold tracking-[0.15em] sm:tracking-[0.2em] border transition-all duration-200 rounded-sm ${
        active
          ? "border-orange-500/40 bg-orange-50 text-orange-600 shadow-sm shadow-orange-500/[0.06]"
          : "border-neutral-200 text-neutral-400 hover:border-neutral-300 hover:text-neutral-600 bg-white"
      }`}
    >
      {label}
    </motion.button>
  );
}

// ─── Explore Card ────────────────────────────────────────────────────────────
function ExploreCard({ exp, idx }: { exp: Experience; idx: number }) {
  return (
    <Link
      to={`/experiences/${exp.slug}`}
      className="block h-[480px] sm:h-[550px] lg:h-[650px] relative overflow-hidden bg-neutral-100 border border-neutral-200 group rounded-sm sm:rounded-none"
    >
      <motion.div
        layout
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{
          duration: 0.5,
          delay: idx * 0.05,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative w-full h-full"
      >
        {/* Image */}
        <img
          src={exp.image}
          alt={exp.title}
          className="absolute inset-0 w-full h-full object-cover  group-hover:scale-105  transition-all duration-[1.5s] ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

        {/* Top Stamps */}
        <div className="absolute top-5 sm:top-6 left-5 sm:left-6 right-5 sm:right-6 z-10 flex items-start justify-between">
          <motion.span
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + idx * 0.05, duration: 0.4 }}
            className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] uppercase text-neutral-500 bg-white/80 backdrop-blur-sm px-2.5 sm:px-3 py-1 sm:py-1.5 border border-neutral-200 rounded-sm"
          >
            {exp.vibe}
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 + idx * 0.05, duration: 0.4 }}
            className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] uppercase text-orange-600/80 bg-white/80 backdrop-blur-sm px-2.5 sm:px-3 py-1 sm:py-1.5 border border-orange-500/20 rounded-sm"
          >
            {exp.duration} • {exp.nights}N
          </motion.span>
        </div>

        {/* Bottom Content */}
        <div className="absolute bottom-0 left-0 right-0 z-10 p-6 sm:p-8 flex flex-col justify-end h-full">
          <div className="mt-auto">
            {/* Location */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + idx * 0.05, duration: 0.5 }}
              className="flex items-center gap-3 mb-3 sm:mb-4"
            >
              <motion.div
                // variants={drawLine}
                initial="hidden"
                animate="show"
                transition={{ delay: 0.35 + idx * 0.05 }}
                className="h-px w-5 bg-orange-500/60 origin-left block"
              />
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.3em] text-orange-300/70 font-bold">
                {exp.location}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h3
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 + idx * 0.05, duration: 0.5 }}
              className="text-[clamp(1.3rem,2.5vw,2.5rem)] font-black tracking-[-0.03em] text-white leading-[0.95] mb-6 sm:mb-8  transition-colors duration-300"
            >
              {exp.title}
            </motion.h3>

            {/* Bottom Data Row */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 + idx * 0.05, duration: 0.5 }}
              className="flex items-center justify-between pt-5 sm:pt-6 border-t border-neutral-200/80"
            >
              <div className="flex items-center gap-4 sm:gap-6">
                <div>
                  <span className="block text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] text-neutral-300 mb-0.5 sm:mb-1 font-bold">
                    Group Size
                  </span>
                  <span className="text-[12px] sm:text-[13px] font-bold text-neutral-500">
                    {exp.groupSize} Founders
                  </span>
                </div>
                <div className="h-6 sm:h-8 w-px bg-neutral-200" />
                <div>
                  <span className="block text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.3em] text-neutral-300 mb-0.5 sm:mb-1 font-bold">
                    Starting At
                  </span>
                  <span className="text-[12px] sm:text-[13px] font-bold text-neutral-500">
                    Revealing Soon
                  </span>
                </div>
              </div>

              {/* Arrow */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0, scale: 0.8 }}
                whileHover={{ opacity: 1, scale: 1 }}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-neutral-200 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:border-orange-500/30 group-hover:bg-orange-50/50 transition-all duration-500 shrink-0"
              >
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600/70" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
