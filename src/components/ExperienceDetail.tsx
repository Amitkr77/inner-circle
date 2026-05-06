import { motion } from "motion/react";
import { ArrowUpRight, Plane } from "lucide-react";
import type { Experience } from "../constants";
import { useNavigate } from "react-router-dom";

interface ExperienceDetailProps {
  exp: Experience;
}

export function ExperienceDetail({ exp }: ExperienceDetailProps) {
  const navigate = useNavigate();

  return (
    <motion.div
      key={exp.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-[#050505] text-white"
    >
      {/* ── Navigation Header ── */}
      <div className="pt-28 px-6 md:px-11 pb-12 border-b border-white/[0.06]">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onClick={() => navigate("/explore")}
          className="group inline-flex items-center gap-3"
        >
          <div className="h-px w-5 bg-emerald-400/50 group-hover:w-8 transition-all duration-300" />
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/30 group-hover:text-white/60 transition-colors">
            Back to Expeditions
          </span>
        </motion.button>
      </div>

      {/* ── Hero Image (Sharp Edges, Full Bleed) ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-11 pt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative w-full h-[50vh] md:h-[65vh] overflow-hidden border border-white/[0.06]"
        >
          <img
            src={
              exp.image ||
              "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=2070"
            }
            alt={exp.title}
            className="w-full h-full object-cover opacity-70 scale-105 hover:scale-100 transition-transform duration-[2s] ease-out"
            referrerPolicy="no-referrer"
          />
          {/* Hard Asymmetric Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/80 via-transparent to-transparent" />

          {/* Top Stamps */}
          <div className="absolute top-6 left-6 flex gap-3">
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/40 bg-black/60 backdrop-blur-sm px-3 py-1.5 border border-white/[0.08]">
              {exp.vibe}
            </span>
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-emerald-400/70 bg-black/60 backdrop-blur-sm px-3 py-1.5 border border-emerald-400/20">
              {exp.duration} · {exp.nights} Nights
            </span>
          </div>

          {/* Bottom Title Block */}
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-5 bg-emerald-400/60" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-emerald-400/70 font-bold">
                {exp.location}
              </span>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className="text-[clamp(2.5rem,6vw,6rem)] font-black leading-[0.88] tracking-[-0.04em] text-white max-w-4xl"
              >
                {exp.title}
              </motion.h1>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Main Content Grid ── */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-11 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-[2px]">
          {/* LEFT COLUMN — Content */}
          <div className="lg:col-span-8 border-r border-white/[0.06] pr-0 lg:pr-16">
            {/* Description */}
            <section className="mb-20">
              <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.3em] text-emerald-400/50">
                Overview
              </p>
              <p className="text-[17px] leading-[1.85] text-white/50 font-light max-w-2xl">
                {exp.description}
              </p>
            </section>

            {/* Highlights (No Icons, Sharp Grid) */}
            {exp.highlights && exp.highlights.length > 0 && (
              <section className="mb-20">
                <p className="mb-8 text-[11px] font-bold uppercase tracking-[0.3em] text-emerald-400/50">
                  What's Included
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px]">
                  {exp.highlights.map((h, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 * idx }}
                      className="bg-white/[0.02] border border-white/[0.04] p-6 flex items-start gap-4 hover:bg-white/[0.03] transition-colors"
                    >
                      <span className="text-emerald-400/50 font-mono text-sm mt-0.5">
                        —
                      </span>
                      <span className="text-[14px] font-medium text-white/60 leading-relaxed">
                        {h}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </section>
            )}

            {/* Itinerary (Strict Timeline) */}
            <section>
              <div className="flex items-center gap-3 mb-12">
                <Plane className="w-4 h-4 text-emerald-400/50" />
                <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-emerald-400/50">
                  Day-by-Day Itinerary
                </p>
              </div>

              {exp.itinerary && exp.itinerary.length > 0 ? (
                <div className="space-y-0">
                  {exp.itinerary.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.06 * idx }}
                      className="group relative pl-10 pb-12 border-l border-white/[0.06] last:border-l-transparent last:pb-0"
                    >
                      {/* Sharp Dot Marker (No Glow) */}
                      <div className="absolute -left-[5px] top-1.5 w-[10px] h-[10px] bg-[#050505] border-2 border-white/20 group-hover:border-emerald-400 transition-colors" />

                      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/25 block mb-2">
                        Day {String(item.day).padStart(2, "0")}
                      </span>
                      <h4 className="text-[20px] font-bold text-white/80 tracking-[-0.02em] mb-3 group-hover:text-white transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-[14px] text-white/30 font-light leading-[1.75] mb-4 max-w-xl">
                        {item.desc}
                      </p>

                      {/* Meals (Typographic) */}
                      {item.meals && item.meals.length > 0 && (
                        <div className="flex items-center gap-3">
                          <span className="text-[9px] uppercase tracking-[0.3em] text-white/15 font-bold">
                            Meals:
                          </span>
                          <div className="flex gap-2">
                            {item.meals.map((meal, mIdx) => (
                              <span
                                key={mIdx}
                                className="text-[10px] font-bold uppercase tracking-widest text-white/25 bg-white/[0.03] px-2.5 py-1 border border-white/[0.05]"
                              >
                                {meal}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="bg-[#0a0a0a] border border-white/[0.06] p-12 text-center">
                  <Plane className="w-8 h-8 text-white/10 mx-auto mb-4" />
                  <p className="text-white/20 text-[14px] font-light mb-2">
                    Detailed day-wise itinerary coming soon.
                  </p>
                  <p className="text-white/15 text-[12px]">
                    Contact us for a custom plan tailored to your group.
                  </p>
                </div>
              )}
            </section>
          </div>

          {/* RIGHT COLUMN — Data Panel & Booking */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-[2px]">
              {/* Booking Card (Sharp Spec Sheet) */}
              <div className="bg-[#0a0a0a] border border-white/[0.08] p-8 md:p-10">
                <div className="mb-8 pb-8 border-b border-white/[0.06]">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/25 font-bold mb-2">
                    Investment
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-[32px] font-black tracking-[-0.04em] text-white leading-none">
                      {/* ₹{exp.pricePerHead.toLocaleString("en-IN")} */}₹ Revealing Soon
                    </span>
                    <span className="text-[11px] text-white/20 font-mono">
                      / pax
                    </span>
                  </div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-white/20 mt-2 font-bold">
                    All Inclusive
                  </p>
                </div>

                {/* Meta Data List */}
                <div className="mb-10 space-y-0">
                  {[
                    {
                      label: "Duration",
                      value: `${exp.duration} · ${exp.nights} Nights`,
                    },
                    {
                      label: "Group Size",
                      value: `Max ${exp.groupSize} Founders`,
                    },
                    { label: "Location", value: exp.location },
                    { label: "Vibe", value: exp.vibe },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between items-center py-4 border-b border-white/[0.05] last:border-b-0"
                    >
                      <span className="text-[10px] uppercase tracking-[0.2em] text-white/20 font-bold">
                        {item.label}
                      </span>
                      <span className="text-[13px] font-bold tracking-[-0.01em] text-white/60">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={`/apply?exp=${exp.id}`}
                  className="group flex items-center justify-between w-full border border-white/[0.1] px-6 py-4 hover:bg-white hover:text-black transition-all duration-300 mb-4"
                >
                  <span className="text-[12px] font-bold uppercase tracking-[0.2em]">
                    Request Booking
                  </span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <p className="text-[10px] text-center text-white/15 tracking-wider">
                  NO COMMITMENT REQUIRED TO APPLY
                </p>
              </div>

              {/* Testimonial (No Stars) */}
              <div className="bg-[#080808] border border-white/[0.06] p-8">
                <p className="text-[15px] leading-[1.8] text-white/30 font-light italic mb-6">
                  "Every detail was obsessively curated. Returned with clarity
                  we've never had before."
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-white/[0.06]">
                  <div>
                    <span className="block text-[12px] font-bold text-white/60">
                      Sarah Chen
                    </span>
                    <span className="text-[10px] text-white/20 font-mono uppercase tracking-wider">
                      Stripe
                    </span>
                  </div>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="w-1 h-4 bg-emerald-400/30" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Back Link */}
              <button
                onClick={() => navigate("/explore")}
                className="w-full text-center text-[11px] uppercase tracking-[0.2em] text-white/20 hover:text-white/50 font-bold py-6 border-b border-white/[0.04] transition-colors"
              >
                View All Expeditions
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
