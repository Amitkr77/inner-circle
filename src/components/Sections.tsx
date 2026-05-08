import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  Users,
  ArrowRight,
  Play,
  Utensils,
  Plane,
  Calendar,
} from "lucide-react";
import { Button } from "./UI";
import { EXPERIENCES, TESTIMONIALS } from "../constants";
import type { Experience } from "../constants";
import ContactForm from "../components/InputField";
export function ExperienceDetailModal({
  exp,
  isOpen,
  onBook,
}: {
  exp: Experience | null;
  isOpen: boolean;
  onClose: () => void;
  onBook: () => void;
}) {
  if (!exp) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10 bg-premium-black/90 backdrop-blur-2xl overflow-y-auto"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-5xl bg-premium-navy rounded-[3rem] overflow-hidden shadow-2xl border border-white/10"
          >
            <Button
              onClick={onBook}
              className="ml-4 px-8 py-3 text-[10px] uppercase tracking-[0.2em] font-black rounded-full shadow-[0_0_20px_rgba(16,185,129,0.2)]"
            >
              Book Now
            </Button>

            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-[300px] lg:h-full relative">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-linear-to-t from-premium-navy via-transparent translate-y-1" />
              </div>

              <div className="p-8 md:p-12 overflow-y-auto max-h-[70vh] lg:max-h-none">
                <div className="flex items-center gap-3 mb-6">
                  <span className="bg-accent-orange/20 px-3 py-1 rounded-full text-[10px] font-bold text-accent-orange uppercase tracking-widest">
                    {exp.vibe}
                  </span>
                  <span className="text-white/40 text-[10px] uppercase tracking-widest font-bold">
                    {exp.location}
                  </span>
                </div>

                <h2 className="text-4xl font-bold mb-4">{exp.title}</h2>
                <p className="text-white/60 mb-8 leading-relaxed font-light">
                  {exp.description}
                </p>

                <div className="grid grid-cols-2 gap-6 mb-10">
                  <div className="glass-immersive p-4 rounded-2xl flex items-center gap-4">
                    <Calendar className="w-5 h-5 text-accent-orange" />
                    <div>
                      <p className="text-[10px] uppercase text-white/40 tracking-widest">
                        Duration
                      </p>
                      <p className="font-bold">{exp.duration}</p>
                    </div>
                  </div>
                  <div className="glass-immersive p-4 rounded-2xl flex items-center gap-4">
                    <Utensils className="w-5 h-5 text-accent-orange" />
                    <div>
                      <p className="text-[10px] uppercase text-white/40 tracking-widest">
                        Meals
                      </p>
                      <p className="font-bold">All Inclusive</p>
                    </div>
                  </div>
                </div>

                <div className="mb-10">
                  <h3 className="text-lg font-bold mb-6 flex items-center gap-3">
                    <Plane className="w-5 h-5 text-accent-orange" /> Trip
                    Itinerary
                  </h3>
                  <div className="space-y-6">
                    {exp.itinerary.length > 0 ? (
                      exp.itinerary.map((item, idx) => (
                        <div
                          key={idx}
                          className="relative pl-8 border-l border-white/10 py-1"
                        >
                          <div className="absolute top-2 -left-[5px] w-2.5 h-2.5 rounded-full bg-accent-orange shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                          <span className="text-[10px] uppercase font-bold text-accent-orange block mb-1">
                            Day {item.day}
                          </span>
                          <h4 className="font-bold text-white mb-2">
                            {item.title}
                          </h4>
                          <p className="text-sm text-white/50 leading-relaxed mb-3">
                            {item.desc}
                          </p>
                          <div className="flex gap-2">
                            {item.meals.map((meal, mIdx) => (
                              <span
                                key={mIdx}
                                className="text-[9px] bg-white/5 border border-white/5 px-2 py-0.5 rounded-md text-white/40 font-bold uppercase tracking-tighter"
                              >
                                {meal}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-white/30 italic text-sm">
                        Detailed day-wise plan coming soon. Contact us for
                        custom Patna-departure routes.
                      </p>
                    )}
                  </div>
                </div>

                <Button className="w-full py-5 text-sm font-black uppercase tracking-[0.2em]">
                  Request Booking Details
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function PastExpeditions() {
  const pastEvents = [
    {
      title: "Meta Leadership Retreat",
      location: "Bali, 2025",
      image:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=2070",
      stats: "25 Leaders",
    },
    {
      title: "Google Innovation Sprints",
      location: "Switzerland, 2024",
      image:
        "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=2070",
      stats: "40 Engineers",
    },
    {
      title: "Airbnb Founders Summit",
      location: "Norway, 2024",
      image:
        "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?auto=format&fit=crop&q=80&w=2070",
      stats: "15 High-impact",
    },
  ];

  return (
    <section className="py-12 relative overflow-hidden bg-premium-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent-orange mb-4">
              Past Memories
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight">
              Success Stories
            </h3>
          </div>
          <p className="text-white/30 max-w-sm mb-4 font-medium leading-relaxed">
            A glimpse into the transformations we've hosted for global
            innovators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pastEvents.map((event, idx) => (
            <div
              key={idx}
              className="group relative h-[400px] rounded-[2rem] overflow-hidden"
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-premium-black to-transparent" />
              <div className="absolute bottom-8 left-8">
                <p className="text-[10px] font-bold text-accent-orange uppercase tracking-widest mb-2">
                  {event.location}
                </p>
                <h4 className="text-2xl font-bold mb-4">{event.title}</h4>
                <div className="flex items-center gap-2 text-white/40 text-xs font-bold uppercase tracking-widest">
                  <Users className="w-4 h-4" /> {event.stats}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Hero() {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-12 pb-20 overflow-hidden">
      <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-premium-black/80 via-transparent to-premium-black z-10" />
        <img
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=2070"
          alt="Breathtaking Nature"
          className="w-full h-full object-cover scale-110 opacity-70"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-20 pt-48 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-3 px-4 py-3 rounded-full glass-immersive text-sm font-bold tracking-[0.1em] text-white/80 uppercase mb-8"
        >
          <span className="glow-dot h-2 w-2 rounded-full bg-accent-orange" />
          India expeditions now open
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-6xl md:text-8xl font-bold leading-[1.05] mb-2 tracking-[-0.04em]"
        >
          Founder Retreat for <span className="italic font-light">Clarity</span>
          <br />
          <span className="text-accent-gradient">
            Focus & Real <span className="italic font-algerian">Progress</span>.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl md:text-xl text-white/50 max-w-xl mx-auto mb-4 font-medium leading-relaxed"
        >
          Step away. Think clearly. Build better.
          {/*A curated startup founder retreat designed to 
          help you step away from noise, gain clarity, and solve real business bottlenecks. */}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-2"
        >
          <Button
            onClick={() => navigate("/explore")}
            className="w-full sm:w-auto px-10 py-5 text-lg flex items-center group"
          >
            Explore Experiences
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            onClick={() => navigate("/apply")}
            variant="outline"
            className="w-full sm:w-auto px-10 py-5 text-lg group"
          >
            Plan Corporate Retreat
            <Play className="w-4 h-4 fill-white" />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {[
            { label: "Fortune 500 Clients", value: "50+" },
            { label: "Curated Destinations", value: "120+" },
            { label: "Active Members", value: "10k+" },
            { label: "NPS Score", value: "98%" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="glass-morphism p-4 rounded-2xl flex flex-col items-center"
            >
              <span className="text-2xl font-display font-bold text-accent-pink">
                {stat.value}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-white/40">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function ExperienceShowcase() {
  const [filter] = useState("India");

  const filteredExperiences = EXPERIENCES.filter(
    (exp) => exp.category === filter,
  );

  // Extract the 3 cards safely
  const featuredExp = filteredExperiences[0];
  const stackedExps = filteredExperiences.slice(1, 3);

  return (
    <section
      id="explore"
      className="relative bg-[#FDFCF8] py-16 md:py-28 border-t border-[#0A0A0A]/[0.06] overflow-hidden selection:bg-orange-200 selection:text-orange-900"
    >
      {/* Premium Ambient Gradients */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(6,78,59,0.05),_transparent_50%)]" />
      <div className="pointer-events-none absolute top-0 left-0 w-1/2 h-1/2 bg-[radial-gradient(ellipse_at_top_left,_rgba(6,78,59,0.04),_transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-6 md:px-11">
        {/* ── Header ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:items-end gap-8 border-b border-[#0A0A0A]/[0.06] pb-12 md:pb-16 mb-12 md:mb-20">
          {/* Left: The Title */}
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-5 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.4em] text-orange-400/70"
            >
              <div className="h-px w-5 bg-orange-400/70" />
              The Collection
            </motion.p>

            {/* Added overflow-hidden so the slide up actually works */}
            <div className="">
              <motion.h2
                initial={{ y: "110%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                className="text-[clamp(2.2rem,5vw,4.5rem)] font-black leading-[0.9] tracking-[-0.04em] text-[#0A0A0A]"
              >
                Curated Expeditions.
              </motion.h2>
            </div>

            {/* Ghost echo for typographic weight */}
            <div className="mt-1">
              <motion.p
                initial={{ y: "110%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className="text-[clamp(1.5rem,3vw,2.5rem)] font-black leading-[0.9] tracking-[-0.04em] text-orange-900/60"
              >
                India.
              </motion.p>
            </div>
          </div>

          {/* Right: The Meta Data */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="md:pb-2 md:pl-14 border-l border-[#0A0A0A]/[0.08] flex flex-col gap-4 place-items-end"
          >
            {/* Static Data Readout (Replaces the lonely single button) */}
            <div className="flex items-center gap-3">
              <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-orange-400 border-b border-orange-400/30 pb-0.5">
                India
              </span>
              <span className="font-mono text-[12px] uppercase tracking-[0.3em] text-black/50  bg-gradient-to-b from-orange-50/80 to-transparent backdrop-blur-sm px-3 py-1.5 border border-orange-400/20">
                :Active Region
              </span>
            </div>

            <p className="text-[15px] leading-[1.75] text-black/50 max-w-[350px] text-right">
              Breathtaking landscapes, luxury stays, and expert-led workshops
              designed for builders.
            </p>
          </motion.div>
        </div>

        {/* ── The Asymmetric Magazine Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-px">
          {/* Left: The Featured Massive Card */}
          {featuredExp && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-7 relative h-[450px] sm:h-[550px] lg:h-[700px] overflow-hidden bg-neutral-100 group cursor-pointer"
            >
              <Link
                to={`/experiences/${featuredExp.id}`}
                className="absolute inset-0 z-20"
              />

              <img
                src={featuredExp.image}
                alt={featuredExp.title}
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

              <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-12 z-10 pointer-events-none">
                {/* Top Stamps */}
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-black/50 bg-white/50 backdrop-blur-sm px-4 py-2 border border-white/[0.08]">
                    {featuredExp.vibe}
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-black/50 bg-white/50 backdrop-blur-sm px-4 py-2 border border-white/[0.08]">
                    {featuredExp.duration} • {featuredExp.nights} Nights
                  </span>
                </div>

                {/* Bottom Content */}
                <div>
                  <div className="flex items-end justify-between mb-8">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.3em] text-orange-400/70 mb-3 font-bold">
                        {featuredExp.location}
                      </p>
                      <h3 className="text-[clamp(2rem,3.5vw,3.5rem)] font-black tracking-[-0.03em] text-white leading-[0.9]">
                        {featuredExp.title}
                      </h3>
                    </div>

                    <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:border-orange-400/30 transition-all duration-500 shrink-0 mb-2">
                      <svg
                        className="w-5 h-5 text-orange-400/70 -rotate-45"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 12h14M12 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 pt-8 border-t border-white/[0.1]">
                    <div>
                      <span className="block text-[9px] uppercase tracking-[0.3em] text-white/25 mb-1 font-bold">
                        Group Size
                      </span>
                      <span className="text-[15px] font-bold text-white/80">
                        {featuredExp.groupSize} Founders
                      </span>
                    </div>
                    <div className="h-10 w-px bg-white/[0.08]" />
                    <div>
                      <span className="block text-[9px] uppercase tracking-[0.3em] text-white/25 mb-1 font-bold">
                        Starting At
                      </span>
                      <span className="text-[15px] font-bold text-white/80">
                        Revealing Soon
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Right: Stacked Cards Container */}
          <div className="lg:col-span-5 flex flex-col gap-[0.5px]">
            {stackedExps.map((exp) => (
              <motion.div
                key={exp.id}
                layout
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                className="relative flex-1 min-h-[350px] overflow-hidden bg-neutral-900  group cursor-pointer"
              >
                <Link
                  to={`/experiences/${exp.id}`}
                  className="absolute inset-0 z-20"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                <img
                  src={exp.image}
                  alt={exp.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-110 transition-transform duration-[1.5s] ease-out"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 flex flex-col justify-between p-8 z-10 pointer-events-none">
                  <div className="flex justify-end">
                    <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-white/50 bg-black/50 backdrop-blur-sm px-3 py-1.5 border border-white/[0.08]">
                      {exp.duration}
                    </span>
                  </div>

                  <div>
                    <div className="flex items-end justify-between mb-6">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.3em] text-orange-400/60 mb-2 font-bold">
                          {exp.location} • {exp.vibe}
                        </p>
                        <h3 className="text-[clamp(1.5rem,2.5vw,2.2rem)] font-black tracking-[-0.03em] text-white leading-[0.95]">
                          {exp.title}
                        </h3>
                      </div>
                      <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:border-orange-400/30 transition-all duration-500 shrink-0">
                        <svg
                          className="w-3.5 h-3.5 text-orange-400/70 -rotate-45"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 12h14M12 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>

                    <div className="flex items-center gap-5 pt-5 border-t border-white/[0.1]">
                      <span className="text-[11px] font-bold text-white">
                        {exp.groupSize} Founders
                      </span>
                      <div className="h-4 w-px bg-white/[0.5]" />
                      <span className="text-[11px] font-bold text-white">
                        Revealing Soon
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── View All CTA ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12 flex justify-center"
        >
          <a
            href="/explore"
            className="group inline-flex items-center gap-4 border  px-8 py-4 border-orange-400/30 bg-orange-400/5 transition-all duration-300"
          >
            <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-orange-400 group-hover:text-orange-400 transition-colors">
              View all expeditions
            </span>
            <div className="w-8 h-8 rounded-full border border-orange-400/30 flex items-center justify-center">
              <svg
                className="w-3 h-3 -rotate-45 text-orange-400 transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14M12 5l7 7-7 7"
                />
              </svg>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export function CorporateExperience() {
  const services = [
    {
      id: "01",
      title: "Leadership Retreats",
      desc: "Strategic alignment in the world’s most inspiring boardrooms.",
    },
    {
      id: "02",
      title: "Team Sprints",
      desc: "Focus on shipping while surrounded by breathtaking nature.",
    },
    {
      id: "03",
      title: "Cultural Resets",
      desc: "Deep bonding experiences that eliminate silos forever.",
    },
  ];

  return (
    <section
      id="corporate"
      className=" bg-gradient-to-b from-orange-50/80 to-transparente py-18 md:py-28 border-t border-white/[0.08] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-11">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[2px]">
          {/* ── Left Image ── */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 relative h-[500px] lg:h-auto bg-neutral-900 overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2070"
              alt="Corporate Team Alignment"
              className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-[1.5s] ease-out"
              referrerPolicy="no-referrer"
            />

            {/* Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

            {/* Corner detail */}
            <div className="absolute top-6 left-6 w-16 h-16 border-t border-l border-white/40 z-10" />

            {/* Badge */}
            <div className="absolute bottom-6 left-6 z-10 hidden lg:block">
              <div className="bg-black/70 backdrop-blur-sm border border-white/20 px-4 py-2">
                <span className="font-mono text-[10px] tracking-[0.3em] text-white/70 uppercase">
                  Enterprise Tier
                </span>
              </div>
            </div>
          </motion.div>

          {/* ── Right: The Specification Sheet ── */}
          <div className="lg:col-span-7  border border-white/[0.08] p-8 md:p-16 flex flex-col justify-center">
            {/* Eyebrow - Increased from 50 to 80 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-6 flex items-center gap-3"
            >
              <div className="h-px w-5 bg-orange-400/80" />
              <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-orange-400/80">
                Corporate Solutions
              </span>
            </motion.div>

            {/* Headline - Increased secondary line from 20 to 40 */}
            <div className="mb-12">
              <div className="">
                <motion.h2
                  initial={{ y: "110%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                  className="text-[clamp(2rem,4vw,3.5rem)] font-black leading-[0.88] tracking-[-0.04em] text-black"
                >
                  Offsites designed
                </motion.h2>
              </div>
              <div className="">
                <motion.h2
                  initial={{ y: "110%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.1,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  className="text-[clamp(2rem,4vw,3.5rem)] font-black leading-[0.88] tracking-[-0.04em] text-black/40"
                >
                  for high-scale
                </motion.h2>
              </div>
              <div className="">
                <motion.h2
                  initial={{ y: "110%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  className="text-[clamp(2rem,4vw,3.5rem)] font-black leading-[0.88] tracking-[-0.04em] text-black"
                >
                  teams.
                </motion.h2>
              </div>
            </div>

            {/* Services List - Massively Increased Visibility */}
            <div className="mb-14 border-t border-white/[0.1]">
              {services.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.1, duration: 0.6 }}
                  className="group flex items-baseline gap-6 py-7 border-b border-black/[0.1] cursor-default hover:bg-white/[0.02] -mx-4 px-4 transition-colors duration-300"
                >
                  {/* Increased from 15 to 40 */}
                  <span className="font-mono text-[11px] text-black/40 min-w-[24px] group-hover:text-orange-400 transition-colors duration-300">
                    {item.id}
                  </span>
                  {/* Increased from 70 to solid white */}
                  <h4 className="flex-1 text-[18px] font-bold tracking-[-0.02em] text-black group-hover:text-orange-400 transition-colors duration-300">
                    {item.title}
                  </h4>
                  {/* Increased from 25 to 50 - THE CRITICAL FIX */}
                  <p className="hidden md:block text-[14px] text-black/50 max-w-xs text-right group-hover:text-black/70 transition-colors duration-300">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA & Trust - Increased Visibility */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8">
              <a
                href="/contact"
                className="group inline-flex items-center gap-3 border px-7 py-4 border-orange-400/50 bg-orange-400/5 transition-all duration-300 w-fit"
              >
                <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-black/80 group-hover:text-black transition-colors">
                  Enquire now
                </span>
                <div className="w-8 h-8 rounded-full border border-orange-400/50 bg-orange-400/5 flex items-center justify-center">
                  <svg
                    className="w-3 h-3 -rotate-45 text-orange-400 transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14M12 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CommunitySection() {
  return (
    <section
      id="community"
      className=" bg-gradient-to-b from-orange-50/80 to-transparent py-16 sm:py-20  overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-11">
        {/* ── Header ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:items-end gap-8 md:gap-0 mb-14 sm:mb-20 border-b border-neutral-200 pb-10 sm:pb-16">
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-5 flex items-center gap-3 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-orange-600"
            >
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="h-px w-5 bg-orange-600 origin-left"
              />
              Network Effect
            </motion.p>

            <div className="">
              <motion.h2
                initial={{ y: "110%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                className="text-[clamp(2rem,5vw,4.5rem)] font-black leading-[0.9] tracking-[-0.04em] text-neutral-900"
              >
                More than a trip.
              </motion.h2>
            </div>
            <div className="">
              <motion.h2
                initial={{ y: "110%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className="text-[clamp(2rem,5vw,4.5rem)] font-black leading-[0.9] tracking-[-0.04em] text-orange-500 transition-colors duration-500 cursor-default"
              >
                A lifelong network.
              </motion.h2>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="md:pb-2 md:pl-14"
          >
            <p className="border-l border-orange-500 pl-5 sm:pl-6 text-[14px] sm:text-[15px] leading-[1.85] text-neutral-500">
              Skip the small talk. This is where builders connect through depth,
              shared pressure, and unfiltered conversations.
            </p>
          </motion.div>
        </div>

        {/* ── Cinematic Split Screen Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[2px] mb-0">
          {/* Left Panel: The Cinematic Feature */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="lg:col-span-8 relative min-h-[400px] sm:min-h-[500px] lg:min-h-[650px] overflow-hidden bg-neutral-900 group cursor-default rounded-sm lg:rounded-none lg:rounded-l-sm"
          >
            {/* The Image - Slow Cinematic Zoom */}
            <img
              src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=2070"
              alt="Workshop session"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover opacity-60 scale-105 group-hover:scale-110 transition-transform duration-[2s] ease-out"
            />

            {/* Multi-layer Gradients for Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/50 to-neutral-900/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/70 via-transparent to-neutral-900/90" />

            {/* Content Layer */}
            <div className="relative z-10 h-full flex flex-col justify-end p-8 sm:p-10 md:p-16">
              {/* Micro-detail top */}
              <div className="absolute top-8 left-8 sm:top-10 sm:left-10 md:top-16 md:left-16 flex items-center gap-3">
                <div className="w-8 h-px bg-orange-400/80" />
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/50">
                  Session Type: Mentorship
                </span>
              </div>

              {/* Main Typography */}
              <div className="max-w-xl">
                <motion.h3
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.2,
                    duration: 0.8,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className="text-[clamp(1.8rem,4vw,3.5rem)] font-black leading-[0.9] tracking-[-0.04em] text-white mb-6 group-hover:text-orange-400 transition-colors duration-500"
                >
                  Expert-Led
                  <br />
                  <span className="text-white/30 group-hover:text-orange-400/50 transition-colors duration-500">
                    Mentorship.
                  </span>
                </motion.h3>

                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-[14px] sm:text-[15px] leading-[1.8] text-white/50 mb-10 max-w-md"
                >
                  Every expedition features sessions with billion-dollar
                  founders and world-class psychologists to help you rewire your
                  thinking.
                </motion.p>
              </div>

              {/* Avatars - Bottom Bar */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex items-center gap-5 pt-8 border-t border-white/[0.1] max-w-md"
              >
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.15, zIndex: 50 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                      className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-neutral-700 border-2 border-neutral-900 overflow-hidden grayscale hover:grayscale-0 transition-all duration-700"
                    >
                      <img
                        src={`https://i.pravatar.cc/150?u=${i * 10}`}
                        alt="Mentor"
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
                <div className="ml-2">
                  <span className="text-[13px] font-bold text-orange-400/80">
                    +15
                  </span>
                  <span className="block text-[9px] uppercase tracking-[0.3em] text-white/40 font-bold mt-0.5">
                    Active Mentors
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Panel: The Data Spec Sheet */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-4  relative overflow-hidden flex flex-col justify-between p-8 sm:p-10 transition-colors duration-500 rounded-sm lg:rounded-none lg:rounded-r-sm"
          >
            {/* Ghosted Background Number */}
            <span className="absolute -bottom-6 -right-4 text-[10rem] font-black leading-none text-orange-900/[0.3] select-none pointer-events-none">
              03
            </span>

            <div className="relative z-10">
              <div className="mb-8 flex items-center gap-3">
                <div className="h-px w-5 bg-orange-600" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-neutral-400">
                  Infrastructure
                </span>
              </div>

              <motion.h3
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-5xl font-extrabold tracking-[-0.03em] text-orange-500 leading-tight mb-4"
              >
                High-Stakes
                <br />
                Networking.
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-[14px] sm:text-[15px] leading-[1.8] text-neutral-500"
              >
                Curated dinners and challenges designed to bypass surface-level
                conversation.
              </motion.p>
            </div>

            <div className="relative z-10 mt-12">
              <div className="h-px w-full bg-neutral-200 mb-6" />

              {[
                { label: "Weekly Workshops", val: "Online", id: "01" },
                { label: "Private Discord", val: "Exclusive", id: "02" },
                { label: "Asset Access", val: "Included", id: "03" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.3 + idx * 0.1,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group/item flex items-center justify-between py-4 sm:py-5 border-b border-neutral-200 last:border-b-0 cursor-default"
                >
                  <div className="flex items-center gap-4 sm:gap-5">
                    <span className="font-mono text-[10px] text-neutral-400 w-4">
                      {item.id}
                    </span>
                    <span className="text-[11px] uppercase tracking-[0.2em] text-neutral-500 group-hover/item:text-neutral-800 transition-colors duration-300">
                      {item.label}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-[12px] font-bold tracking-[-0.02em] text-neutral-700 group-hover/item:text-neutral-900 transition-colors duration-300">
                      {item.val}
                    </span>
                    {/* Animated expanding bar on hover */}
                    <div className="w-0 h-px bg-orange-500/70 group-hover/item:w-4 transition-all duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── High-Contrast Editorial Ticker ── */}
      <div className="mt-16 sm:mt-24  relative overflow-hidden select-none ">
        {/* Shorter edge fades so more text is readable */}
        <div className="absolute inset-y-0 left-0 w-24 sm:w-32 bg-gradient-to-r from-neutral-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 sm:w-32 bg-gradient-to-l from-neutral-50 to-transparent z-10 pointer-events-none" />

        <div className="py-10 sm:py-14 md:py-20 space-y-10 sm:space-y-12">
          {/* Track 1: The Quotes (Moves Left) */}
          <div className="flex whitespace-nowrap">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              className="flex shrink-0 gap-14 sm:gap-16 md:gap-24 pr-14 sm:pr-16 md:pr-24"
            >
              {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
                <div
                  key={`q-${i}`}
                  className="flex items-center gap-5 sm:gap-6 min-w-max"
                >
                  {/* orange Vertical Accent */}
                  <div className="h-10 w-[2px] bg-orange-500/70 shrink-0" />

                  <div className="flex flex-col">
                    <span className="text-base sm:text-lg md:text-xl font-medium text-neutral-700 leading-snug">
                      &ldquo;{t.content}&rdquo;
                    </span>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-orange-600">
                        {t.name}
                      </span>
                      {t.company && (
                        <span className="text-[10px] uppercase tracking-[0.15em] text-neutral-300 font-mono">
                          {t.company}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Track 2: The Roles (Moves Right) */}
          <div className="flex whitespace-nowrap">
            <motion.div
              animate={{ x: ["-50%", "0%"] }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="flex shrink-0 gap-10 sm:gap-12 md:gap-20 pl-10 sm:pl-12 md:pl-20"
            >
              {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
                <div
                  key={`r-${i}`}
                  className="flex items-center gap-4 sm:gap-5 min-w-max"
                >
                  <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-neutral-400">
                    {t.role || "Founder"}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-neutral-300 shrink-0" />
                  <span className="text-sm md:text-base font-light text-neutral-500 leading-snug">
                    &ldquo;{t.content}&rdquo;
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Discover",
      desc: "Browse our curated catalog of global transformation hubs designed for operators.",
    },
    {
      num: "02",
      title: "Connect",
      desc: "Match with a cohort of like-minded, high-caliber travelers and builders.",
    },
    {
      num: "03",
      title: "Experience",
      desc: "Embark on a high-end voyage led by elite facilitators and operators.",
    },
    {
      num: "04",
      title: "Transform",
      desc: "Return home with a new network, sharpened skills, and absolute clarity.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className=" bg-gradient-to-b from-orange-50/80 to-transparent py-16 sm:py-20 md:py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-11">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14 sm:mb-20 md:mb-28 relative"
        >
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 sm:mb-5 inline-block text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-orange-500"
          >
            The Journey
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-[clamp(1.75rem,5vw,4.5rem)] font-black leading-[0.95] tracking-[-0.04em] text-neutral-900 mx-auto max-w-3xl"
          >
            Simple process.{" "}
            <span className="text-neutral-300">Profound results.</span>
          </motion.h2>

          {/* Animated underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 mx-auto h-px bg-neutral-200 origin-left"
            style={{ maxWidth: "200px" }}
          />
        </motion.div>

        {/* ── The 4-Column Matrix ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 overflow-hidden">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: idx * 0.12,
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              whileHover={{ y: -6 }}
              className="group relative border-b sm:border-b-0 sm:border-r border-neutral-200 last:border-r-0 last:border-b-0 min-h-[320px] sm:h-[420px] lg:h-[520px] flex flex-col justify-end p-7 sm:p-8 lg:p-10 cursor-default transition-colors duration-500 hover:bg-neutral-50/80"
            >
              {/* Vertical Divider Hover Glow */}
              <motion.div
                initial={{ scaleY: 0 }}
                whileHover={{ scaleY: 1 }}
                className="absolute inset-y-0 right-0 w-px bg-orange-400 origin-top z-20 hidden sm:block"
                style={{
                  transform: "scaleY(0)",
                  transition: "transform 0.5s cubic-bezier(0.22,1,0.36,1)",
                }}
              />
              <div
                className="absolute inset-y-0 right-0 w-px bg-transparent group-hover:bg-orange-400/60 transition-all duration-500 z-20 hidden sm:block"
                style={{ transform: "scaleY(0)", transformOrigin: "top" }}
                onMouseEnter={(e) => {
                  (e.target as HTMLDivElement).style.transform = "scaleY(1)";
                }}
              />

              {/* Massive Background Number */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: idx * 0.12 + 0.2,
                  ease: "easeOut",
                }}
                className="absolute top-[-16px] left-[-8px] lg:left-[16px] pointer-events-none select-none"
              >
                <span className="text-[8rem] sm:text-[10rem] lg:text-[14rem] font-black leading-none text-orange-100 group-hover:text-orange-400 transition-colors duration-700">
                  {step.num}
                </span>
              </motion.div>

              {/* The Horizontal Line — animates width on hover */}
              <div className="absolute top-1/2 left-0 right-0 z-0 flex items-center">
                <div className="h-px bg-neutral-100 w-full transition-colors duration-500 group-hover:bg-orange-200" />
                <motion.div
                  className="absolute left-0 h-px bg-orange-400"
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>

              {/* Bottom Content Block */}
              <div className="relative z-10 border-t border-neutral-200 group-hover:border-orange-400/40 pt-6 sm:pt-8 transition-colors duration-500 -mx-1 px-1">
                {/* STEP label — slides in from left */}
                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.12 + 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex items-center gap-3 mb-4 sm:mb-5"
                >
                  <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.2em] text-orange-500/80">
                    STEP {step.num}
                  </span>
                  {idx < 3 && (
                    <motion.svg
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: idx * 0.12 + 0.45,
                      }}
                      className="hidden lg:block w-4 h-4 text-neutral-300 absolute top-[2.15rem] right-3 group-hover:text-orange-500 group-hover:translate-x-2 transition-all duration-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </motion.svg>
                  )}
                </motion.div>

                {/* Title — mask reveal */}
                <motion.h3
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: idx * 0.12 + 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-[-0.03em] text-neutral-900 group-hover:text-orange-600 transition-colors duration-300 mb-3 sm:mb-4"
                >
                  {step.title}
                </motion.h3>

                {/* Description — fade up */}
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: idx * 0.12 + 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="text-[13px] sm:text-[14px] lg:text-[15px] leading-[1.7] sm:leading-[1.75] text-neutral-400 group-hover:text-neutral-600 transition-colors duration-300 max-w-[280px] lg:max-w-none"
                >
                  {step.desc}
                </motion.p>

                {/* Hover accent dot — bottom left */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  className="mt-5 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                  <span className="text-[10px] font-mono tracking-widest text-orange-500/70 uppercase">
                    Active
                  </span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Bottom Progression Indicator ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 px-1 sm:px-2"
        >
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="font-mono text-[10px] sm:text-[11px] text-neutral-400 tracking-widest"
          >
            PROGRESSION: 01 — 04
          </motion.span>

          <div className="flex items-center gap-1.5 sm:gap-2 order-last sm:order-none">
            {[10, 30, 55, 100].map((opacity, i) => (
              <motion.div
                key={i}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.6 + i * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="w-8 sm:w-12 h-px bg-orange-500 origin-left"
                style={{ opacity: opacity / 100 }}
              />
            ))}
          </div>

          <motion.span
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="font-mono text-[10px] sm:text-[11px] text-orange-500 tracking-widest font-bold"
          >
            OUTPUT ACHIEVED
          </motion.span>
        </motion.div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section className="  bg-gradient-to-b from-orange-50/80 to-transparent py-16 sm:py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-11">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 sm:gap-16 lg:gap-20 items-center">
          {/* LEFT */}
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-5 sm:mb-6 flex items-center gap-3 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-orange-600"
            >
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="h-px w-5 bg-orange-600 origin-left"
              />
              Get in touch
            </motion.p>

            <div className="mb-8 sm:mb-10">
              <div className="">
                <motion.h2
                  initial={{ y: "110%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                  className="text-[clamp(2rem,5vw,4.5rem)] font-black leading-[0.88] tracking-[-0.04em] text-neutral-900"
                >
                  Ready to upgrade
                </motion.h2>
              </div>
              <div className="">
                <motion.h2
                  initial={{ y: "110%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.1,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  className="text-[clamp(2rem,5vw,4.5rem)] font-black leading-[0.88] tracking-[-0.04em] text-orange-500 transition-colors duration-500 cursor-default"
                >
                  your life & team.
                </motion.h2>
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="border-l border-orange-500 pl-5 sm:pl-6 text-[14px] sm:text-[15px] leading-[1.85] text-neutral-500 max-w-md mb-10 sm:mb-12"
            >
              Join the waiting list for our Summer 2026 expeditions or schedule
              a custom consultation for your corporate leadership team.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="space-y-0"
            >
              {[
                {
                  num: "01",
                  text: "Exclusive early-bird access to destinations",
                },
                {
                  num: "02",
                  text: "Personal onboarding with our Experience Leads",
                },
              ].map((item, idx) => (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.7 + idx * 0.1,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group/item flex items-baseline gap-4 sm:gap-5 py-4 sm:py-5 border-b border-neutral-200 last:border-b-0 cursor-default"
                >
                  <span className="font-mono text-[10px] sm:text-[11px] text-neutral-400 w-5 sm:w-6 group-hover/item:text-orange-600 transition-colors duration-300">
                    {item.num}
                  </span>
                  <span className="text-[13px] sm:text-[14px] font-medium text-neutral-400 group-hover/item:text-neutral-700 group-hover/item:translate-x-1 transition-all duration-300">
                    {item.text}
                  </span>
                  {/* Expanding accent bar */}
                  <span className="ml-auto w-0 h-px bg-orange-500/60 group-hover/item:w-6 transition-all duration-500" />
                </motion.div>
              ))}
            </motion.div>

            {/* Bottom micro-detail */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 0.6 }}
              className="mt-8 sm:mt-10 flex items-center gap-2 text-neutral-300"
            >
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-px w-3 bg-orange-500 origin-left "
              />
              <span className="text-[10px] font-bold text-black/60 uppercase tracking-[0.3em]">
                Limited to 24 per cohort
              </span>
            </motion.div>
          </div>

          {/* RIGHT FORM */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
