import { useState, useEffect } from "react";
import { ShaderGradient } from "shadergradient";
import { Canvas } from "@react-three/fiber";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Compass,
  Users,
  TrendingUp,
  Sparkles,
  ArrowRight,
  Play,
  Globe,
  Menu,
  X,
  Star,
  CheckCircle2,
  ChevronRight,
  Search,
  MapPin,
  Utensils,
  Plane,
  Calendar,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { Button, GlassCard } from "./UI";
import {
  EXPERIENCES,
  TESTIMONIALS,
  STATS,
  LOGOS,
  Experience,
} from "../constants";
export function ExperienceDetailModal({
  exp,
  isOpen,
  onClose,
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
                  <span className="bg-accent-emerald/20 px-3 py-1 rounded-full text-[10px] font-bold text-accent-emerald uppercase tracking-widest">
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
                    <Calendar className="w-5 h-5 text-accent-emerald" />
                    <div>
                      <p className="text-[10px] uppercase text-white/40 tracking-widest">
                        Duration
                      </p>
                      <p className="font-bold">{exp.duration}</p>
                    </div>
                  </div>
                  <div className="glass-immersive p-4 rounded-2xl flex items-center gap-4">
                    <Utensils className="w-5 h-5 text-accent-emerald" />
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
                    <Plane className="w-5 h-5 text-accent-emerald" /> Trip
                    Itinerary
                  </h3>
                  <div className="space-y-6">
                    {exp.itinerary.length > 0 ? (
                      exp.itinerary.map((item, idx) => (
                        <div
                          key={idx}
                          className="relative pl-8 border-l border-white/10 py-1"
                        >
                          <div className="absolute top-2 -left-[5px] w-2.5 h-2.5 rounded-full bg-accent-emerald shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                          <span className="text-[10px] uppercase font-bold text-accent-emerald block mb-1">
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
    <section className="py-32 relative overflow-hidden bg-premium-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent-emerald mb-4">
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
                <p className="text-[10px] font-bold text-accent-emerald uppercase tracking-widest mb-2">
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

export function Navbar({ onBook }: { onBook: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-500 ${
        isScrolled
          ? "h-20 backdrop-blur-xl bg-premium-black/60 border-none shadow-none"
          : "h-24 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto h-full px-6 md:px-10 flex items-center justify-between">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span className="text-2xl font-black tracking-tighter text-accent-gradient">
            VANTAGE
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          {["Explore", "Corporate", "Community", "About", "Resources"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/60 hover:text-accent-emerald transition"
              >
                {item}
              </a>
            ),
          )}


         
          <a
            href="#contact"
            className="text-[10px] uppercase text-white/60 hover:text-accent-emerald"
          >
            Contact
          </a>

          {/* 🔥 FINAL WORKING BUTTON */}
          <Button
            onClick={onBook}
            className="ml-4 px-8 py-3 text-[10px] uppercase tracking-[0.2em] font-black rounded-full shadow-[0_0_20px_rgba(16,185,129,0.2)]"
          >
             Book Now
          </Button>
        </div>

        <button
          className="lg:hidden p-2 text-white"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
}

export function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
      <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-premium-black/80 via-transparent to-premium-black z-10" />
        <img
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=2070"
          alt="Breathtaking Nature"
          className="w-full h-full object-cover scale-110 opacity-70"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-immersive text-[10px] font-bold tracking-[0.1em] text-white/80 uppercase mb-8"
        >
          <span className="glow-dot" />
          India & Global expeditions now open
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-6xl md:text-8xl font-bold leading-[1.05] mb-8 tracking-[-0.04em]"
        >
          Explore Nature,
          <br />
          <span className="text-accent-gradient">Elevate Life.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-white/50 max-w-xl mx-auto mb-12 font-medium leading-relaxed"
        >
          From the heights of Darjeeling to the Fjords of Norway. Premium travel
          experiences tailored for leaders, creators, and world-shakers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
        >
          <Button className="w-full sm:w-auto px-10 py-5 text-lg flex items-center group">
            Explore Experiences
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
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

export function ExperienceShowcase({
  onSelectExp,
}: {
  onSelectExp?: (exp: Experience) => void;
}) {
  const [filter, setFilter] = useState<"India" | "International">("India");

  const filteredExperiences = EXPERIENCES.filter(
    (exp) => exp.category === filter,
  );

  return (
    <section
      id="explore"
      className="py-32 relative overflow-hidden bg-premium-black"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent-emerald mb-4">
              The Collection
            </h2>
            <h3 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-8">
              Curated Expeditions
            </h3>

            <div className="inline-flex glass-immersive p-1 rounded-2xl">
              {["India"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat as any)}
                  className={`px-8 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all duration-300 ${filter === cat ? "bg-accent-gradient text-white" : "hover:bg-white/5 text-white/40"}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          <p className="text-white/30 max-w-sm mb-4 font-medium leading-relaxed bg-white/5 p-6 rounded-2xl border border-white/5">
            Discover breathtaking landscapes and high-impact communities. All
            plans include luxury stays, gourmet meals, and expert-led workshops.
          </p>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredExperiences.map((exp, idx) => (
              <motion.div
                key={exp.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                onClick={() => onSelectExp?.(exp)}
                className="group relative h-[450px] md:h-[550px] rounded-[2.5rem] overflow-hidden cursor-pointer shadow-2xl border border-white/5"
              >
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110 opacity-90"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-linear-to-t from-premium-black via-premium-black/20 to-transparent z-1" />

                <div className="absolute top-8 left-8 right-8 z-10">
                  <div className="grid grid-cols-3 items-center">   
                    {/* LEFT */}
                    <div className="flex justify-start">
                      <span className="min-w-[100px] h-[30px] px-4 flex items-center justify-center 
                      bg-white/10 backdrop-blur-md border border-white/10 
                      rounded-full text-[9px] uppercase font-bold whitespace-nowrap">
                        {exp.vibe}
                      </span>
                    </div>
                    {/* CENTER (GREEN) */}
                    <div className="flex justify-center">
                      <span className="min-w-[100px] h-[32px] px-5 flex items-center justify-center 
                      bg-white/10 backdrop-blur-2xl border border-accent-emerald/40 
                      rounded-full text-[9px] uppercase font-bold text-green-800 whitespace-nowrap">
                        {exp.duration} • {exp.nights} Nights
                      </span>
                    </div>
                    {/* RIGHT */}
                    <div className="flex justify-end">
                      <span className="min-w-[100px] h-[30px] px-4 flex items-center justify-center 
                      glass-immersive rounded-full text-[9px] uppercase font-black text-white/80 whitespace-nowrap">
                        Group of {exp.groupSize}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="absolute bottom-8 left-8 right-8 z-10">
                  <div className="flex flex-col text-center justify-center gap-6">
                    <div>
                      <p className="text-accent-emerald text-sm uppercase font-bold mb-2">
                        Location: {exp.location}
                      </p>
                      <h4 className="text-3xl md:text-4xl font-bold mb-2 tracking-tight">
                        {exp.title}
                      </h4>
                    </div>
                    <div className="bg-white/10 backdrop-blur-2xl border border-white/10 p-2 rounded-3xl flex flex-col items-center min-w-[160px] group-hover:bg-accent-emerald transition-colors duration-500">
                      <span className="text-[10px] uppercase tracking-widest font-bold text-white/60 group-hover:text-white/80">
                        Starts At
                      </span>
                      <span className="text-2xl font-black tracking-tight self-center mt-1">
                        ₹{exp.pricePerHead.toLocaleString()}
                      </span>
                      <span className="text-[8px] uppercase tracking-widest font-bold text-white/60 group-hover:text-white/80">
                        Per Person
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

export function CorporateExperience() {
  return (
    <section id="corporate" className="py-32 bg-premium-navy relative">
      <div className="absolute inset-0 opacity-10 mask-radial">
        <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2070"
                alt="Corporate Team"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-accent-purple/20 mix-blend-overlay" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="absolute -bottom-10 -right-10 glass-morphism p-8 rounded-3xl max-w-xs hidden md:block"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-accent-pink">
                  <img src="https://i.pravatar.cc/150?u=ceo" alt="CEO" />
                </div>
                <div>
                  <p className="font-bold">David Hoffman</p>
                  <p className="text-xs text-white/50 uppercase tracking-widest">
                    VP of People, Meta
                  </p>
                </div>
              </div>
              <p className="text-sm italic text-white/80 leading-relaxed">
                "The ROI on an Aetheris offsite isn't just better culture—it's
                visible in our revenue growth."
              </p>
            </motion.div>
          </div>

          <div>
            <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-accent-emerald mb-6">
              Corporate Solutions
            </h2>
            <h3 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
              Offsites Designed for High-Scale Teams
            </h3>

            <div className="space-y-8 mb-12">
              {[
                {
                  title: "Leadership Retreats",
                  desc: "Strategic alignment in the world’s most inspiring boardrooms.",
                  icon: Compass,
                },
                {
                  title: "Team Sprints",
                  desc: "Focus on shipping while surrounded by breathtaking nature.",
                  icon: Users,
                },
                {
                  title: "Cultural Resets",
                  desc: "Deep bonding experiences that eliminate silos forever.",
                  icon: Sparkles,
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl glass-immersive flex items-center justify-center shrink-0 group-hover:bg-accent-gradient transition-all duration-300">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                    <p className="text-white/40 leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a href="#contact">
              <Button className="px-10 py-5 text-lg">
                Enquire now
              </Button>
            </a>

            <div className="mt-16 pt-8 border-t border-white/10">
              <p className="text-[10px] uppercase tracking-widest text-white/30 mb-6">
                Trusted by world-changing companies
              </p>
              <div className="flex flex-wrap gap-x-8 gap-y-4 opacity-40 grayscale group-hover:grayscale-0 transition-all">
                {LOGOS.map((logo) => (
                  <span
                    key={logo}
                    className="text-lg font-bold tracking-tighter hover:opacity-100 cursor-default"
                  >
                    {logo}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CommunitySection() {
  return (
    <section id="community" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-accent-emerald mb-4">
            Network Effect
          </h2>
          <h3 className="text-5xl md:text-6xl font-bold leading-tight max-w-3xl mx-auto">
            More Than a Trip. A Lifelong Network.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <GlassCard className="col-span-1 md:col-span-2 p-12">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1">
                <h4 className="text-3xl font-display font-bold mb-6">
                  Expert-Led Mentorship
                </h4>
                <p className="text-white/60 mb-8 font-light leading-relaxed text-lg">
                  Every expedition features sessions with billion-dollar
                  founders and world-class psychologists to help you rewire your
                  thinking.
                </p>
                <div className="flex -space-x-4 mb-8">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <img
                      key={i}
                      src={`https://i.pravatar.cc/150?u=${i * 10}`}
                      alt="Expert"
                      className="w-14 h-14 rounded-full border-4 border-premium-black"
                    />
                  ))}
                  <div className="w-14 h-14 rounded-full bg-accent-emerald flex items-center justify-center border-4 border-premium-black text-xs font-bold text-white">
                    +15
                  </div>
                </div>
                {/* <Button variant="outline">Meet the Mentors</Button> */}
              </div>
              <div className="flex-1 w-full relative">
                <div className="absolute inset-0 neon-gradient blur-[80px] opacity-20" />
                <img
                  src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=2070"
                  className="rounded-2xl relative z-10 w-full"
                  alt="Workshop"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-12 flex flex-col justify-between">
            <div>
              <TrendingUp className="w-10 h-10 text-accent-orange mb-6" />
              <h4 className="text-2xl font-display font-bold mb-4">
                High-Stakes Networking
              </h4>
              <p className="text-white/60 font-light text-sm leading-relaxed mb-8">
                Skip the small talk. Engage in deep-meaning conversations
                through curated dinner themes and collaborative challenges.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { label: "Weekly Workshops", val: "Online" },
                { label: "Private Discord", val: "Exclusive" },
                { label: "Asset Access", val: "Included" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center py-2 border-b border-white/5"
                >
                  <span className="text-xs uppercase tracking-widest text-white/40">
                    {item.label}
                  </span>
                  <span className="text-sm font-bold">{item.val}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        <div className="mt-20 overflow-hidden">
        <div className="flex gap-6 animate-marquee">
          
          {[...TESTIMONIALS, ...TESTIMONIALS].map((t, index) => (
            <GlassCard
              key={index}
              className="w-[320px] h-[400px] p-6 flex flex-col justify-between flex-shrink-0"
              hover={false}
            >
              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  className="w-12 h-12 rounded-full"
                  alt={t.name}
                />
                <div>
                  <p className="font-bold">{t.name}</p>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold mb-4">
                    {t.role} {t.company && `@ ${t.company}`}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-accent-orange mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              <p className="text-lg font-light leading-relaxed mb-8">
                "{t.content}"
              </p>
            </GlassCard>
          ))}

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
      desc: "Browse our curated catalog of global transformation hubs.",
    },
    {
      num: "02",
      title: "Connect",
      desc: "Complete your profile and match with like-minded travelers.",
    },
    {
      num: "03",
      title: "Experience",
      desc: "Embark on a high-end voyage led by elite facilitators.",
    },
    {
      num: "04",
      title: "Transform",
      desc: "Return with a new network, skills, and strategic clarity.",
    },
  ];

  return (
    <section className="py-32 relative overflow-hidden bg-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-accent-emerald mb-4">
            The Journey
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold">
            Simple Process. <br /> Profound Results.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          <div className="hidden lg:block absolute top-10 left-0 w-full h-[1px] bg-white/10" />

          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="w-20 h-20 rounded-full glass-immersive flex items-center justify-center text-3xl font-bold mb-8 relative z-10 group-hover:bg-accent-gradient transition-all duration-500">
                {step.num}
              </div>
              <h4 className="text-2xl font-display font-bold mb-4">
                {step.title}
              </h4>
              <p className="text-white/40 font-light leading-relaxed">
                {step.desc}
              </p>
              <ArrowRight className="w-6 h-6 mt-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function StatsSection() {
  return (
    <section className="py-20 relative px-6">
      {/* Background Image 
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage: "url('/your-image.jpg')",
        }}
      />*/}

      {/* Gradient Background */}
        <div className="absolute inset-0 -z-10 bg-[#0b0f1a]">
          <div
            className="absolute inset-0 
            bg-[radial-gradient(circle_at_30%_40%,#94ffd1,transparent_40%),radial-gradient(circle_at_70%_60%,#7297f7,transparent_40%),radial-gradient(circle_at_50%_80%,#ffffff,transparent_30%)]
            opacity-80 blur-2xl animate-gradientMove"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-black/30" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto glass-immersive rounded-2xl p-10 flex flex-col lg:flex-row items-center justify-between gap-12 backdrop-blur-2xl">

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-16">
            {STATS.map((stat, idx) => (
              <div key={idx} className="flex flex-col gap-1">
                <div className="text-3xl font-bold flex items-baseline">
                  <span>{stat.value}</span>
                  <span className="text-accent-red text-xl ml-0.5">
                    {stat.suffix}
                  </span>
                </div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-white/80 font-bold">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Logos */}
          <div className="flex flex-wrap items-center justify-center gap-10 opacity-30 grayscale invert brightness-200">
            {LOGOS.slice(0, 4).map((logo) => (
              <span
                key={logo}
                className="text-xl font-black tracking-tighter uppercase"
              >
                {logo}
              </span>
            ))}
          </div>

        </div>
      </section>
  );
}

export function ContactSection() {
  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Ready to Upgrade <br />
              Your Life & Team?
            </h2>
            <p className="text-white/60 font-light text-lg mb-12 leading-relaxed">
              Join the waiting list for our Summer 2026 expeditions or schedule
              a custom consultation for your corporate leadership team.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <CheckCircle2 className="w-6 h-6 text-accent-emerald" />
                <span className="text-white/80">
                  Exclusive early-bird access to destinations
                </span>
              </div>
              <div className="flex items-center gap-4">
                <CheckCircle2 className="w-6 h-6 text-accent-emerald" />
                <span className="text-white/80">
                  Personal onboarding with our Experience Leads
                </span>
              </div>
            </div>
          </div>

          <GlassCard className="p-12" hover={false}>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-[0.1em] text-white/40 font-bold">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-pink transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-[0.1em] text-white/40 font-bold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-pink transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.1em] text-white/40 font-bold">
                  I am interested in...
                </label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-pink transition-colors appearance-none">
                  <option className="bg-premium-black">
                    Personal Expedition
                  </option>
                  <option className="bg-premium-black">
                    Corporate Offsite
                  </option>
                  <option className="bg-premium-black">
                    Mentorship Program
                  </option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.1em] text-white/40 font-bold">
                  Message (Optional)
                </label>
                <textarea
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-pink transition-colors h-32"
                  placeholder="Tell us about your goals..."
                />
              </div>

              <Button className="w-full py-4 text-lg">Send Inquiry</Button>
            </form>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-20 border-t border-white/5 bg-premium-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 neon-gradient rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-display font-bold tracking-tight">
                AETHERIS
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              The world's premier platform for hybrid travel and corporate
              transformation. Built for those who demand excellence in every
              aspect of life.
            </p>
          </div>

          {[
            {
              title: "Platform",
              links: ["Experiences", "Corporate", "Community", "Pricing"],
            },
            {
              title: "Company",
              links: ["About Us", "Careers", "Brand Kit", "Contact"],
            },
            {
              title: "Legal",
              links: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
            },
          ].map((col, idx) => (
            <div key={idx}>
              <h5 className="font-bold mb-6 text-xs uppercase tracking-[0.2em]">
                {col.title}
              </h5>
              <ul className="space-y-4">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/40 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 gap-8">
          <p className="text-white/20 text-xs">
            © 2026 Aetheris Global Expeditions. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Twitter", "LinkedIn", "Instagram"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-xs font-bold uppercase tracking-widest text-white/30 hover:text-white transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
