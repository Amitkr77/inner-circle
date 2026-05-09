"use client";

import { motion } from "framer-motion";
// import { useRef } from "react";
import {
  Brain,
  Network,
  Users,
  TrendingUp,
  Leaf,
  Focus,
  BarChart3,
  LayoutGrid,
  Quote,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

/* ================= DATA ================= */

const FEATURED_INSIGHTS = [
  {
    slug: "founder-playbook",
    category: "Scaling Strategy",
    title: "Founder Playbook: Scaling with Intent",
    description:
      "How to maintain the soul of your enterprise while building the systems that allow it to breathe without you. A framework for essential growth.",
    image: "/resources/Founder-playbook.png",
    major: true,
  },
  {
    slug: "psychology-of-leverage",
    category: "Psychology",
    title: "The Psychology of Leverage",
    description:
      "Understanding the internal barriers that prevent external expansion and team empowerment.",
    major: false,
  },
  {
    slug: "from-zero-to-growth",
    category: "Case Study",
    title: "From Zero to Growth",
    description:
      "A technical post-mortem on the pivot that redefined a legacy vertical in the tech sector.",
    major: false,
  },
];

const CATEGORIES = [
  { icon: Brain, label: "Founder Mindset" },
  { icon: Network, label: "Scaling & Ops" },
  { icon: Users, label: "Hiring & Team" },
  { icon: TrendingUp, label: "Growth" },
  { icon: Leaf, label: "Personal Clarity" },
];

const RESOURCE_CARDS = [
  {
    slug: "art-of-essentialism",
    tag: "Article",
    category: "Mindset",
    readTime: "12 min read",
    title: "The Art of Essentialism",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA2g0UdnKo10aTip0JLXuLWB_CJgm9OAPUJ26RBAJG9WOBwKHNH6TBvMEwFGqgbs7900dBOISp6ZKP3hPKL47-wW90WzmSIykj_iH37ko5H_9TtODd77m7jo9qWOzmbFR78WcAGbytTYSzBMETR6LFF5QJRDLaNq_vnxVbl6InixE2IFj3gS-rtnCE3NIFFNebTRGgqdhkTPE3D9pnLnwr3Fd3ZATk_irmW0VY_gW03GPxObEKX0BnVolBkXEmp1OVjZO3sJXm-hAI",
  },
  {
    slug: "hiring-protocol-2",
    tag: "Framework",
    category: "Hiring",
    readTime: "8 min read",
    title: "Hiring Protocol 2.0",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDjNmvZ1iHi4bZmZUpdmg-qd6Is-yIoyxhITe27apYKJn4XeXOuC2HxGth3ByOJzwc7Ys2EaZNGGGmb4nIusiVM1nsMTKjORr2YYDFN5MfpMJ2PRllHpIFg3FMgUwOb81zPrjNHNvrMoi4c10Wi3F8LjKGoopbIptqhHq4n8dBTmdDOIHeB2X3N_zBdokRCw7iCGYXxVd53FEjkjMV5GBuy4W4U9bWE04zMEWpaFAO7rmw9YFA4gvy9tID83fmLn_kss7tR4t6f02E",
  },
  {
    slug: "operating-systems",
    tag: "Resource",
    category: "Operations",
    readTime: "Downloadable",
    title: "Operating Systems",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuARlECMmwaC2WLKxq7m1Qlod0XCeFBcbrvlNGprITTvwFG_EHC6TAqALdAr87FhtP3-14tKszzdHWtyYLM9IEvYESOVp0YSsQwCz5P6qGdoyOaD-Yd0mmqZ6LZ3CKmqH36RVmkASepvx73tLzuhobBXuTIJcCuWWsDwxp4vi8PGMKCk-uP_HXqGD19UJttdi2AieQbt0mU9Q5ON33l2SaYjdAAIWHv00d_db_UylZ9jy-CZi4okw6JetQDjAoAE2xNWq3B61uw174k",
  },
];

const MINI_ARTICLES = [
  {
    slug: "cap-table-narrative",
    category: "Finance",
    title: "The Cap Table Narrative",
    description:
      "Communicating equity value to late-stage hires and strategic partners.",
  },
  {
    slug: "radical-delegation",
    category: "Leadership",
    title: "Radical Delegation",
    description:
      "Finding the precise edge where trust meets operational accountability.",
  },
  {
    slug: "second-act-transitions",
    category: "Exit Strategy",
    title: "Second Act Transitions",
    description:
      "Life beyond the liquidity event: identity and purpose after exit.",
  },
];

const FRAMEWORKS = [
  {
    slug: "decision-clarity",
    icon: Focus,
    title: "Decision Clarity",
    description:
      "A 4-step heuristic to separate market signal from emotional noise in executive pivots.",
  },
  {
    slug: "network-mapping",
    icon: BarChart3,
    title: "Bottleneck Audit",
    description:
      "Quantifying the hidden cost of founder involvement in operational minutiae.",
  },
  {
    slug: "growth-matrix",
    icon: LayoutGrid,
    title: "Growth Matrix",
    description:
      "Balancing rapid expansion with structural integrity to prevent organizational decay.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const stagger = {
  show: { transition: { staggerChildren: 0.12 } },
};

/* ================= COMPONENT ================= */

export default function Resources() {
  const navigate = useNavigate();
  // const heroRef = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: heroRef,
  //   offset: ["start start", "end start"],
  // });

  // const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  // const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <div className="min-h-screen bg-white selection:bg-orange-100 selection:text-orange-900">
      <main>
        {/* ─── Hero Section ─── */}
        <section className="relative min-h-[100vh] flex flex-col justify-end px-6 pb-16 lg:px-24 lg:pb-24 overflow-hidden bg-[#0A0F0C]">
          {/* Background Image - Slow cinematic drift */}
          <div className="absolute inset-0 z-0">
            <motion.img
              initial={{ scale: 1.1, y: -10 }}
              animate={{ scale: 1.1, y: 0 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
              }}
              className="w-full h-full object-cover opacity-60"
              src="d1.png"
              alt="Cinematic wide shot founders"
            />
            {/* Hard, asymmetric mask - not a soft gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F0C]/30 via-[#0A0F0C]/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F0C]/60 via-[#0A0F0C]/30 to-transparent" />
          </div>

          {/* Architectural Corner Accents */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute top-8 left-8 w-16 h-16 border-t border-l border-[rgba(255,255,255,0.40)] z-10"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-[rgba(255,255,255,0.40)] z-10"
          />

          {/* Main Content Container */}
          <div className="relative z-10 w-full max-w-7xl mx-auto">
            {/* Top Row: Eyebrow + Description aligned to grid edges */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="lg:col-span-4"
              >
                <span className="font-mono text-[11px] text-[rgba(255,255,255,0.40)] tracking-[0.4em] uppercase">
                  001 — Archives & Insights
                </span>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="lg:col-span-6 lg:col-start-7 font-body text-[15px] text-[rgba(255,255,255,0.40)] leading-relaxed"
              >
                A curated repository of strategic leverage, operational
                frameworks, and psychological protocols for the modern
                architect.
              </motion.p>
            </div>

            {/* The Typographic Hero - Massive scale */}
            <div className="space-y-[-0.05em]">
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: "110%", rotateX: -20 }}
                  animate={{ y: 0, rotateX: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.2,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  className="font-display font-bold text-[clamp(3rem,8vw,9rem)] tracking-ultra-tight leading-[0.85] text-[rgba(255,255,255,0.90)]"
                >
                  Resources for
                </motion.h1>
              </div>

              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: "110%", rotateX: -20 }}
                  animate={{ y: 0, rotateX: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.35,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  className="font-display font-bold text-[clamp(3rem,8vw,9rem)] tracking-ultra-tight leading-[0.85] text-[rgba(255,255,255,0.90)]"
                >
                  Founders Who Want
                </motion.h1>
              </div>

              {/* The "Clarity" Drop - Bigger scale, stroke effect */}
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 1.1,
                    delay: 0.5,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  className="font-display font-bold text-[clamp(4rem,11vw,12rem)] tracking-ultra-tight leading-[0.8]"
                >
                  {/* Outline Text */}
                  <span className="text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.40)] italic font-medium">
                    Clarity
                  </span>
                  {/* Filled overlay that slides in */}
                  <motion.span
                    initial={{ clipPath: "inset(0 100% 0 0)" }}
                    animate={{ clipPath: "inset(0 0% 0 0)" }}
                    transition={{
                      duration: 0.8,
                      delay: 1.2,
                      ease: [0.76, 0, 0.24, 1],
                    }}
                    className="absolute left-0 text-[#4ADE80] italic font-medium [-webkit-text-stroke:0px]"
                    style={{ textShadow: "0 0 40px rgba(74, 222, 128, 0.2)" }}
                    aria-hidden="true"
                  >
                    Clarity
                  </motion.span>
                </motion.h1>
              </div>
            </div>

            {/* Bottom Structure: Expanding line + CTA */}
            <div className="mt-12 flex items-center gap-6">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 1.2,
                  delay: 1.4,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className="origin-left h-px w-32 bg-[rgba(255,255,255,0.60)]"
              />

              <motion.a
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6, duration: 0.5 }}
                href="#features"
                className="group inline-flex items-center gap-3 font-label text-[12px] text-[rgba(255,255,255,0.40)] uppercase tracking-[0.3em] hover:text-[rgba(255,255,255,0.90)] transition-colors duration-500"
              >
                <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center group-hover:bg-[rgba(255,255,255,0.90)] group-hover:text-[#0A0F0C] transition-all duration-500">
                  <svg
                    className="w-2.5 h-2.5 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
                Enter Archive
              </motion.a>
            </div>
          </div>
        </section>

        {/* ─── Featured Insights ─── */}
        <section
          id="features"
          className="py-14 sm:py-16 lg:py-24 px-5 sm:px-6 lg:px-24 xl:px-32 bg-neutral-50"
        >
          <div className="mb-12 sm:mb-20 lg:mb-24 flex flex-col sm:flex-row items-start sm:items-baseline justify-between gap-6 border-b border-neutral-200 pb-6 sm:pb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-orange-600 text-[10px] sm:text-[11px] uppercase tracking-[0.25em] sm:tracking-[0.3em] block mb-3 sm:mb-4 font-bold">
                The Vanguard
              </span>
              <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl tracking-[-0.03em] text-neutral-900">
                Featured Insights
              </h2>
            </motion.div>
            <motion.a
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              href="#"
              className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-widest text-neutral-400 hover:text-orange-600 transition-colors border border-neutral-200 hover:border-orange-500 px-4 py-2 font-bold whitespace-nowrap"
            >
              View All Insights
            </motion.a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-12 lg:gap-20">
            {/* Major Feature */}
            <motion.div
              onClick={() =>
                navigate(`/resources/${FEATURED_INSIGHTS[0].slug}`)
              }
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="md:col-span-8 group cursor-pointer"
            >
              <div className="aspect-[16/8] sm:aspect-[16/8] overflow-hidden mb-5 sm:mb-6 bg-neutral-100 relative border border-neutral-200 rounded-sm">
                <img
                  className="w-full h-full object-cover grayscale-[30%] brightness-90 group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 ease-out"
                  src={FEATURED_INSIGHTS[0].image}
                  alt={FEATURED_INSIGHTS[0].title}
                />
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="absolute top-5 sm:top-8 left-5 sm:left-8 bg-white/90 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 border border-orange-500/20 text-[9px] tracking-widest uppercase font-bold text-orange-600"
                >
                  {FEATURED_INSIGHTS[0].category}
                </motion.div>
              </div>
              <h3 className="font-bold text-2xl sm:text-3xl lg:text-4xl mb-4 sm:mb-6 tracking-[-0.02em] sm:tracking-[-0.03em] text-neutral-900 group-hover:text-orange-600 transition-colors duration-500">
                {FEATURED_INSIGHTS[0].title}
              </h3>
              <p className="text-neutral-500 max-w-xl leading-relaxed text-[15px] sm:text-base lg:text-lg font-light">
                {FEATURED_INSIGHTS[0].description}
              </p>
            </motion.div>

            {/* Side features */}
            <div className="md:col-span-4 flex flex-col gap-12 sm:gap-14 lg:gap-20 pt-6 sm:pt-10">
              {FEATURED_INSIGHTS.slice(1).map((item, i) => (
                <motion.div
                  onClick={() => navigate(`/resources/${item.slug}`)}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.15,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  key={item.title}
                  className="group cursor-pointer"
                >
                  <span className="text-orange-600 text-[11px] sm:text-[12px] uppercase tracking-[0.25em] sm:tracking-[0.3em] block mb-3 sm:mb-4 font-bold">
                    {item.category}
                  </span>
                  <h3 className="font-bold text-xl sm:text-2xl mb-3 sm:mb-4 tracking-[-0.02em] text-neutral-900 group-hover:text-orange-600 transition-colors duration-500">
                    {item.title}
                  </h3>
                  <p className="text-sm text-neutral-400 leading-relaxed font-light">
                    {item.description}
                  </p>
                  <div className="mt-5 sm:mt-6 w-0 group-hover:w-12 h-px bg-orange-500 transition-all duration-500 ease-out" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Categories Grid ─── */}
        <section className=" border-y border-neutral-200">
          <div className="">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5">
              {CATEGORIES.map((cat, i) => (
                <motion.a
                  key={cat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  whileHover={{ y: -2 }}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(`#`);
                  }}
                  className="bg-white py-10 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-10 flex flex-col items-center text-center border-r border-b border-neutral-200 last:border-r-0  transition-all duration-500 group"
                >
                  <motion.div
                    whileHover={{ rotate: 6, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <cat.icon
                      className="w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-neutral-400 group-hover:text-orange-600 mb-4 sm:mb-6 transition-colors duration-300"
                      strokeWidth={1.5}
                    />
                  </motion.div>
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-neutral-500 group-hover:text-orange-600 transition-colors font-bold">
                    {cat.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Resource Library ─── */}
        <section className="py-16 sm:py-20 lg:py-24 px-5 sm:px-6 lg:px-24 xl:px-32 bg-white">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 sm:mb-20 lg:mb-24 gap-6 border-b border-neutral-200 pb-8 sm:pb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <span className="text-orange-600 text-[10px] sm:text-[11px] uppercase tracking-[0.25em] sm:tracking-[0.3em] block mb-3 sm:mb-4 font-bold">
                The Archive
              </span>
              <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl tracking-[-0.03em] text-neutral-900">
                Resource Library
              </h2>
            </motion.div>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-14 xl:gap-16"
          >
            {RESOURCE_CARDS.map((card) => (
              <motion.div
              onClick={()=>navigate(`/resources/${card.slug}`)}
                key={card.title}
                variants={fadeUp}
                className="group cursor-pointer"
              >
                <div className="h-[320px] sm:h-[380px] lg:h-[420px] bg-neutral-100 mb-6 sm:mb-8 overflow-hidden relative border border-neutral-200 rounded-sm transition-all duration-700 group-hover:-translate-y-2 group-hover:shadow-lg group-hover:shadow-orange-500/5 group-hover:border-neutral-300">
                  <img
                    className="w-full h-full object-cover grayscale-[40%]  transition-all duration-1000 ease-out group-hover:scale-105"
                    src={card.image}
                    alt={card.title}
                  />
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/20 to-transparent" /> */}
                  <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10">
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      className={`inline-block px-3 py-1 text-[8px] sm:text-[9px] font-bold uppercase tracking-widest transition-all duration-300 ${
                        card.tag === "Article"
                          ? "bg-orange-600 text-white border border-orange-600 group-hover:bg-orange-500"
                          : "bg-white/90 backdrop-blur-md text-neutral-700 border border-neutral-200 group-hover:border-orange-500/30 group-hover:text-orange-700"
                      }`}
                    >
                      {card.tag}
                    </motion.span>
                  </div>
                </div>
                <div className="px-1 sm:px-2">
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <span className="text-[9px] sm:text-[10px] text-orange-600 tracking-[0.15em] sm:tracking-[0.2em] uppercase font-bold">
                      {card.category}
                    </span>
                    <span className="w-1 h-1 bg-neutral-300 rounded-full" />
                    <span className="text-[9px] sm:text-[10px] text-neutral-400 uppercase tracking-widest">
                      {card.readTime}
                    </span>
                  </div>
                  <h3 className="font-bold text-xl sm:text-2xl tracking-[-0.02em] text-neutral-900 group-hover:text-orange-600 transition-colors duration-500">
                    {card.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Mini Articles */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 lg:gap-14 xl:gap-16 pt-12 sm:pt-16 border-t border-neutral-200"
          >
            {MINI_ARTICLES.map((article, i) => (
              <motion.div
                  onClick={() => navigate(`/resources/${article.slug}`)}
                key={article.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.12, duration: 0.6 }}
                className="group cursor-pointer"
              >
                <span className="text-[9px] sm:text-[10px] text-orange-600 tracking-[0.15em] sm:tracking-widest uppercase mb-3 sm:mb-4 block font-bold">
                  {article.category}
                </span>
                <h3 className="font-bold text-lg sm:text-xl mb-2 sm:mb-3 tracking-[-0.02em] text-neutral-900 group-hover:text-orange-600 transition-colors duration-500">
                  {article.title}
                </h3>
                <p className="text-[12px] sm:text-xs text-neutral-400 font-light leading-relaxed">
                  {article.description}
                </p>
                <div className="mt-4 w-0 group-hover:w-8 h-px bg-orange-500 transition-all duration-500" />
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ─── Founder Frameworks ─── */}
        <section className="py-12 sm:py-16 lg:py-20 px-5 sm:px-6 lg:px-24 xl:px-32  bg-gradient-to-b from-orange-50/80 to-transparent  text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center mb-10 sm:mb-12"
          >
            <span className="text-orange-600 text-[10px] sm:text-[11px] uppercase tracking-[0.3em] sm:tracking-[0.4em] mb-5 sm:mb-6 font-bold">
              Founder Frameworks
            </span>
            <h2 className="font-bold text-4xl sm:text-5xl lg:text-7xl tracking-[-0.03em] max-w-4xl leading-tight text-neutral-900">
              High-Value Tools for
              <br className="hidden sm:block" /> High-Stakes Decisions.
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 text-left"
          >
            {FRAMEWORKS.map((tool, i) => (
              <motion.div
                // onClick={() => navigate(`/resources/${tool.slug}`)}
                key={tool.title}
                variants={fadeUp}
                whileHover={{
                  y: -6,
                  borderColor: "rgba(5, 150, 105, 0.3)",
                  boxShadow: "0 20px 60px -20px rgba(5, 150, 105, 0.12)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="p-8 sm:p-12 lg:p-14 xl:p-16 border border-neutral-200 bg-white transition-all duration-500 group rounded-sm cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: 6, scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center border bg-neutral-50 rounded-sm mb-8 sm:mb-12 border-orange-500/30 group-hover:bg-orange-50 transition-colors duration-300"
                >
                  <tool.icon
                    className="text-orange-600 w-7 h-7 sm:w-8 sm:h-8"
                    strokeWidth={1.5}
                  />
                </motion.div>
                <h4 className="font-bold group-hover:text-orange-600 text-2xl sm:text-3xl mb-4 sm:mb-6 tracking-[-0.02em] text-neutral-900 transition-colors duration-300">
                  {tool.title}
                </h4>
                <p className="text-neutral-400 sm:text-[15px] font-light leading-relaxed">
                  {tool.description}
                </p>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.6 + i * 0.15,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="mt-6 sm:mt-8 h-px w-8 bg-orange-500/40 origin-left"
                />
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* ─── Quotes ─── */}
        <section className="py-10 sm:py-14 lg:py-20 px-5 sm:px-6 lg:px-24 xl:px-32 bg-white border-y border-neutral-200">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 0.15, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex justify-center mb-6 sm:mb-8"
            >
              <Quote
                size={48}
                className="text-orange-600"
                fill="currentColor"
              />
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 xl:gap-32">
              <motion.blockquote
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <p className="font-medium text-2xl sm:text-3xl leading-snug italic text-neutral-800 mb-6 sm:mb-8 tracking-[-0.02em]">
                  &ldquo;The quality of your network is the ceiling of your
                  success.&rdquo;
                </p>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.3,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="h-px w-8 bg-orange-500/40 mb-4 origin-left"
                />
                <cite className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-orange-600 not-italic font-bold">
                  — Circle Member, Series C Founder
                </cite>
              </motion.blockquote>

              <motion.blockquote
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <p className="font-medium text-2xl sm:text-3xl leading-snug italic text-neutral-800 mb-6 sm:mb-8 tracking-[-0.02em]">
                  &ldquo;Clarity isn&apos;t found in the chaos; it&apos;s forged
                  in the silence that follows it.&rdquo;
                </p>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.3,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="h-px w-8 bg-orange-500/40 mb-4 origin-left"
                />
                <cite className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-orange-600 not-italic font-bold">
                  — Circle Member, Exit &apos;22
                </cite>
              </motion.blockquote>
            </div>
          </div>
        </section>

        {/* ─── Final CTA ─── */}
        <section className="py-16 sm:py-20 lg:py-28 px-5 sm:px-6 lg:px-24 xl:px-32 bg-white text-center relative overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] rounded-full bg-orange-500/[0.03] blur-3xl" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="font-bold text-5xl sm:text-6xl md:text-8xl tracking-[-0.04em] mb-10 sm:mb-12 leading-[0.9] text-neutral-900"
            >
              Experience
              <br />
              The Unseen.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Link to="/apply">
                {" "}
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="relative overflow-hidden border border-orange-300  text-black font-bold hover:border-white text-[10px] sm:text-[11px] uppercase tracking-[0.3em] sm:tracking-[0.4em] px-10 sm:px-16 py-4 sm:py-5 transition-all duration-700 shadow-lg shadow-neutral-900/10 group"
                >
                  <span className="absolute inset-0 bg-orange-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                    Explore Experiences
                  </span>
                </motion.button>
              </Link>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-8 sm:mt-12 text-[9px] sm:text-[10px] text-neutral-400 uppercase tracking-[0.3em] sm:tracking-[0.4em] font-medium"
            >
              Restricted Access &bull; Verified Founders Only
            </motion.p>
          </div>
        </section>
      </main>
    </div>
  );
}
