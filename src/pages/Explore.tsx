import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Calendar,
  Users,
  Utensils,
  Search,
  SlidersHorizontal,
  X,
  Plane,
} from "lucide-react";
import { Link } from "react-router-dom";
import { EXPERIENCES } from "../constants";
import type { Experience } from "../constants";

// ─── Filter Pills ────────────────────────────────────────────────────────────
const DURATIONS = ["All", "3–5 Days", "6–8 Days", "9+ Days"];
const VIBES = ["All", "Adventure", "Wellness", "Luxury", "Cultural", "Coastal"];
const SORT_OPTIONS = [
  "Recommended",
  "Price: Low to High",
  "Price: High to Low",
  "Duration",
];

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
  if (sortBy === "Price: Low to High")
    filtered = [...filtered].sort((a, b) => a.pricePerHead - b.pricePerHead);
  if (sortBy === "Price: High to Low")
    filtered = [...filtered].sort((a, b) => b.pricePerHead - a.pricePerHead);
  if (sortBy === "Duration")
    filtered = [...filtered].sort((a, b) => a.nights - b.nights);

  return (
    <div className="min-h-screen bg-premium-black text-white font-sans">
      {/* ── Hero Banner ── */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=2070"
            alt="Explore"
            className="w-full h-full object-cover opacity-25"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-premium-black/60 via-premium-black/80 to-premium-black" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-bold tracking-[-0.04em] mb-4"
          >
            All{" "}
            <span className="italic font-light text-accent-gradient">
              Expeditions
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-white/40 text-lg max-w-xl mx-auto font-light"
          >
            Every destination curated for founders, leaders &amp; high-impact
            thinkers.
          </motion.p>
        </div>
      </section>

      {/* ── Search + Filter Bar ── */}
      <div className="sticky top-[80px] z-50 bg-premium-black/80 backdrop-blur-xl border-b border-white/5 py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-4 items-center">
          {/* Search */}
          <div className="relative flex-1 w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search destinations, experiences…"
              className="w-full bg-white/5 border border-white/10 rounded-2xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-accent-emerald/50 transition placeholder:text-white/20"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3 text-sm text-white/60 focus:outline-none focus:border-accent-emerald/50 appearance-none cursor-pointer min-w-[180px]"
          >
            {SORT_OPTIONS.map((s) => (
              <option key={s} className="bg-[#0a0f1c]">
                {s}
              </option>
            ))}
          </select>

          {/* Filters toggle */}
          <button
            onClick={() => setFiltersOpen((p) => !p)}
            className={`flex items-center gap-2 px-5 py-3 rounded-2xl border text-xs uppercase font-bold tracking-widest transition ${
              filtersOpen
                ? "border-accent-emerald text-accent-emerald bg-accent-emerald/10"
                : "border-white/10 text-white/40 hover:border-white/30"
            }`}
          >
            <SlidersHorizontal className="w-4 h-4" /> Filters
          </button>
        </div>

        {/* Expandable filter rows */}
        <AnimatePresence>
          {filtersOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-4">
                {/* Duration */}
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold mr-2">
                    Duration
                  </span>
                  {DURATIONS.map((d) => (
                    <FilterPill
                      key={d}
                      label={d}
                      active={activeDuration === d}
                      onClick={() => setActiveDuration(d)}
                    />
                  ))}
                </div>
                {/* Vibe */}
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold mr-2">
                    Vibe
                  </span>
                  {VIBES.map((v) => (
                    <FilterPill
                      key={v}
                      label={v}
                      active={activeVibe === v}
                      onClick={() => setActiveVibe(v)}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── Results Count ── */}
      <div className="max-w-7xl mx-auto px-6 pt-10 pb-4">
        <p className="text-white/30 text-xs uppercase tracking-widest font-bold">
          {filtered.length} expedition{filtered.length !== 1 ? "s" : ""} found
        </p>
      </div>

      {/* ── Grid ── */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        {filtered.length === 0 ? (
          <div className="text-center py-32 text-white/20">
            <Plane className="w-12 h-12 mx-auto mb-4 opacity-30" />
            <p className="text-xl font-light">
              No expeditions match your filters.
            </p>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
    <button
      onClick={onClick}
      className={`px-4 py-1.5 rounded-full text-[10px] uppercase font-bold tracking-widest border transition-all duration-200 ${
        active
          ? "bg-accent-emerald text-black border-accent-emerald"
          : "border-white/10 text-white/40 hover:border-white/30 hover:text-white/60"
      }`}
    >
      {label}
    </button>
  );
}

// ─── Explore Card ────────────────────────────────────────────────────────────
function ExploreCard({ exp, idx }: { exp: Experience; idx: number }) {
  return (
    <Link to={`/experiences/${exp.id}`}>
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.93, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.93 }}
        transition={{ duration: 0.45, delay: idx * 0.04 }}
        className="group relative h-[500px] rounded-[2.5rem] overflow-hidden cursor-pointer shadow-2xl border border-white/5 hover:border-accent-emerald/30 transition-colors duration-500"
      >
        {/* Image */}
        <img
          src={exp.image}
          alt={exp.title}
          className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110 opacity-90"
          referrerPolicy="no-referrer"
        />
        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-premium-black via-premium-black/30 to-transparent z-[1]" />

        {/* Top badges */}
        <div className="absolute top-6 left-6 right-6 z-10 flex items-center justify-between">
          <span className="px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-[9px] uppercase font-bold">
            {exp.vibe}
          </span>
          <span className="px-4 py-1.5 bg-white/10 backdrop-blur-md border border-accent-emerald/30 rounded-full text-[9px] uppercase font-bold text-accent-emerald">
            {exp.duration} • {exp.nights}N
          </span>
          <span className="px-4 py-1.5 glass-immersive rounded-full text-[9px] uppercase font-black text-white/70">
            {exp.groupSize} pax
          </span>
        </div>

        {/* Bottom content */}
        <div className="absolute bottom-0 left-0 right-0 z-10 p-8">
          {/* Location */}
          <div className="flex items-center gap-2 text-accent-emerald text-[10px] uppercase font-bold tracking-widest mb-2">
            <MapPin className="w-3.5 h-3.5" />
            {exp.location}
          </div>

          <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
            {exp.title}
          </h3>

          {/* Meta row */}
          <div className="flex items-center gap-4 mb-6 text-white/40 text-[10px] uppercase font-bold">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3 h-3" /> {exp.duration}
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="w-3 h-3" /> Group of {exp.groupSize}
            </span>
            <span className="flex items-center gap-1.5">
              <Utensils className="w-3 h-3" /> All Inclusive
            </span>
          </div>

          {/* Price + CTA */}
          <div className="flex items-center justify-between">
            <div>
              <span className="flex flex-col items-center min-w-[160px] text-sm text-white/50 font-semibold">
                ₹ Revealing Soon
              </span>
            </div>
            <div className="px-6 py-2.5 bg-white/10 group-hover:bg-accent-emerald border border-white/10 group-hover:border-accent-emerald rounded-full text-[10px] uppercase font-black tracking-widest transition-all duration-500 group-hover:text-black">
              View Details
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}