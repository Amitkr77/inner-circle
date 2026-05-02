"use client";

import { motion } from "framer-motion";
import {
  // ChevronLeft,
  // ChevronRight,
  // ArrowRight,
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

/* ================= DATA ================= */

const FEATURED_INSIGHTS = [
  {
    category: "Scaling Strategy",
    title: "Founder Playbook: Scaling with Intent",
    description:
      "How to maintain the soul of your enterprise while building the systems that allow it to breathe without you. A framework for essential growth.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBJsFr1QPuk7dTapLhL3oC9EpqtcmAfrN2DTkyrQu3NVDd4wckWuVoP_Xgprf9p7aigOYvXQ9s6xrtpt2zpaLbwXyIwvdGuSaOh2HyqaEWN2WqEfiaolLGUL77KNebXUncxXVSNM7qiBrSE2JK7cO9YlSFqZYBDZAHIC4Hgb2TV5gkS_nvcH8sl--QrP7C17Blq2BspagODG0mYeQvhn7JZhXX5O66i-sqgr4zD5gx83u_6Vk12udN0K5gC96mEE-ezbtmGkhHH1bU",
    major: true,
  },
  {
    category: "Psychology",
    title: "The Psychology of Leverage",
    description:
      "Understanding the internal barriers that prevent external expansion and team empowerment.",
    major: false,
  },
  {
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
    tag: "Article",
    category: "Mindset",
    readTime: "12 min read",
    title: "The Art of Essentialism",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA2g0UdnKo10aTip0JLXuLWB_CJgm9OAPUJ26RBAJG9WOBwKHNH6TBvMEwFGqgbs7900dBOISp6ZKP3hPKL47-wW90WzmSIykj_iH37ko5H_9TtODd77m7jo9qWOzmbFR78WcAGbytTYSzBMETR6LFF5QJRDLaNq_vnxVbl6InixE2IFj3gS-rtnCE3NIFFNebTRGgqdhkTPE3D9pnLnwr3Fd3ZATk_irmW0VY_gW03GPxObEKX0BnVolBkXEmp1OVjZO3sJXm-hAI",
  },
  {
    tag: "Framework",
    category: "Hiring",
    readTime: "8 min read",
    title: "Hiring Protocol 2.0",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDjNmvZ1iHi4bZmZUpdmg-qd6Is-yIoyxhITe27apYKJn4XeXOuC2HxGth3ByOJzwc7Ys2EaZNGGGmb4nIusiVM1nsMTKjORr2YYDFN5MfpMJ2PRllHpIFg3FMgUwOb81zPrjNHNvrMoi4c10Wi3F8LjKGoopbIptqhHq4n8dBTmdDOIHeB2X3N_zBdokRCw7iCGYXxVd53FEjkjMV5GBuy4W4U9bWE04zMEWpaFAO7rmw9YFA4gvy9tID83fmLn_kss7tR4t6f02E",
  },
  {
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
    category: "Finance",
    title: "The Cap Table Narrative",
    description:
      "Communicating equity value to late-stage hires and strategic partners.",
  },
  {
    category: "Leadership",
    title: "Radical Delegation",
    description:
      "Finding the precise edge where trust meets operational accountability.",
  },
  {
    category: "Exit Strategy",
    title: "Second Act Transitions",
    description:
      "Life beyond the liquidity event: identity and purpose after exit.",
  },
];

const FRAMEWORKS = [
  {
    icon: Focus,
    title: "Decision Clarity",
    description:
      "A 4-step heuristic to separate market signal from emotional noise in executive pivots.",
  },
  {
    icon: BarChart3,
    title: "Bottleneck Audit",
    description:
      "Quantifying the hidden cost of founder involvement in operational minutiae.",
  },
  {
    icon: LayoutGrid,
    title: "Growth Matrix",
    description:
      "Balancing rapid expansion with structural integrity to prevent organizational decay.",
  },
];

/* ================= COMPONENT ================= */

export default function Resources() {
  return (
    <div className="min-h-screen bg-[#0A0F0C] selection:bg-[rgba(74,222,128,0.12)] selection:text-[#0A0F0C]">
      {/* Navbar */}

      <main>
        {/* Hero Section */}
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

        {/* Featured Insights */}
        <section
          id="features"
          className="py-16 lg:py-26 px-6 lg:px-32 bg-[#111812]"
        >
          <div className="mb-24 flex items-baseline justify-between border-b border-[rgba(74,222,128,0.22)] pb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="font-label text-[#4ADE80] text-[10px] uppercase tracking-[0.3em] block mb-4 font-bold">
                The Vanguard
              </span>
              <h2 className="font-display font-bold text-4xl lg:text-5xl tracking-ultra-tight text-[rgba(255,255,255,0.90)]">
                Featured Insights
              </h2>
            </motion.div>
            <a
              href="#"
              className="font-label text-[10px] uppercase tracking-widest text-[rgba(255,255,255,0.40)] hover:text-[#4ADE80] transition-colors border border-[rgba(74,222,128,0.22)] hover:border-[#4ADE80] px-4 py-2 font-bold"
            >
              View All Insights
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20">
            {/* Major Feature */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-8 group cursor-pointer"
            >
              <div className="aspect-[16/8] overflow-hidden mb-6 bg-[#1D2820] relative border border-[rgba(74,222,128,0.22)]">
                <img
                  className="w-full h-full object-cover grayscale brightness-50 group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-75 transition-all duration-1000"
                  src={FEATURED_INSIGHTS[0].image}
                  alt={FEATURED_INSIGHTS[0].title}
                />
                <div className="absolute top-8 left-8 bg-[#0A0F0C]/90 backdrop-blur-md px-4 py-2 border border-[rgba(74,222,128,0.22)] text-[9px] font-label text-[#4ADE80] tracking-widest uppercase font-bold">
                  {FEATURED_INSIGHTS[0].category}
                </div>
              </div>
              <h3 className="font-display font-bold text-3xl lg:text-4xl mb-6 tracking-ultra-tight text-[rgba(255,255,255,0.90)] group-hover:text-[#4ADE80] transition-colors duration-500">
                {FEATURED_INSIGHTS[0].title}
              </h3>
              <p className="font-body text-[rgba(255,255,255,0.40)] opacity-60 max-w-xl leading-relaxed text-lg font-light">
                {FEATURED_INSIGHTS[0].description}
              </p>
            </motion.div>

            {/* Side features */}
            <div className="md:col-span-4 flex flex-col gap-16 lg:gap-20 pt-10">
              {FEATURED_INSIGHTS.slice(1).map((item, i) => (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  key={item.title}
                  className="group cursor-pointer"
                >
                  <span className="font-label text-[#4ADE80] text-[12px] uppercase tracking-[0.3em] block mb-4 font-bold">
                    {item.category}
                  </span>
                  <h3 className="font-display font-bold text-2xl mb-4 tracking-tight text-[rgba(255,255,255,0.90)] group-hover:text-[#4ADE80] transition-colors duration-500">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-[rgba(255,255,255,0.40)] opacity-60 leading-relaxed font-light">
                    {item.description}
                  </p>
                  <div className="mt-6 w-0 group-hover:w-12 h-[1px] bg-[#4ADE80] transition-all duration-500" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="bg-[#172019] border-y border-[rgba(74,222,128,0.22)]">
          <div className="bg-[rgba(74,222,128,0.12)]">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 ">
              {CATEGORIES.map((cat, i) => (
                <motion.a
                  key={cat.label}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  href="#"
                  className="bg-[#172019] py-12 lg:py-16 px-6 lg:px-10 flex flex-col items-center text-center border-r border-b border-[rgba(74,222,128,0.22)] hover:bg-[#111812] transition-all group duration-500"
                >
                  <cat.icon className="w-8 h-8 lg:w-10 lg:h-10 text-[rgba(255,255,255,0.40)] group-hover:text-[#4ADE80] mb-6 transition-colors" />
                  <span className="font-label text-[10px] uppercase tracking-[0.2em] text-[rgba(255,255,255,0.60)] group-hover:text-[#4ADE80] transition-colors font-bold">
                    {cat.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Resource Library */}
        <section className="py-24 lg:py-24 px-6 lg:px-32 bg-[#0A0F0C]">
          <div className="flex justify-between items-end mb-24 border-b border-[rgba(74,222,128,0.22)] pb-12">
            <div className="max-w-2xl">
              <span className="font-label text-[#4ADE80] text-[10px] uppercase tracking-[0.3em] block mb-4 font-bold">
                The Archive
              </span>
              <h2 className="font-display font-bold text-4xl lg:text-5xl tracking-ultra-tight text-[rgba(255,255,255,0.90)]">
                Resource Library
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {RESOURCE_CARDS.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="h-[400px] lg:h-[420px] bg-[#172019] mb-8 overflow-hidden relative border border-[rgba(74,222,128,0.22)] transition-transform duration-700 group-hover:-translate-y-2">
                  <img
                    className="w-full h-full object-cover grayscale opacity-30 group-hover:opacity-50 transition-all duration-1000 group-hover:scale-105"
                    src={card.image}
                    alt={card.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F0C]/80 to-transparent" />
                  <div className="absolute bottom-10 left-10">
                    <span
                      className={`px-3 py-1 text-[8px] font-bold uppercase group-hover:text-[#4ADE80] group-hover:border-[#4ADE80] tracking-widest ${
                        card.tag === "Article"
                          ? "bg-[#4ADE80] text-[#0A0F0C] border border-[rgba(74,222,128,0.22)]"
                          : "bg-[rgba(74,222,128,0.12)] backdrop-blur-md text-[rgba(255,255,255,0.90)] border border-[rgba(74,222,128,0.22)]"
                      }`}
                    >
                      {card.tag}
                    </span>
                  </div>
                </div>
                <div className="px-2">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="font-label text-[9px] text-[#4ADE80] tracking-[0.2em] uppercase font-bold">
                      {card.category}
                    </span>
                    <span className="w-1 h-1 bg-[rgba(74,222,128,0.22)] rounded-full" />
                    <span className="font-label text-[9px] text-[rgba(255,255,255,0.40)] uppercase tracking-widest">
                      {card.readTime}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-2xl tracking-tight text-[rgba(255,255,255,0.90)] group-hover:text-[#4ADE80] transition-colors duration-500">
                    {card.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 pt-16 border-t border-[rgba(74,222,128,0.22)]">
            {MINI_ARTICLES.map((article, i) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="group cursor-pointer"
              >
                <span className="font-label text-[9px] text-[#4ADE80] tracking-widest uppercase mb-4 block font-bold">
                  {article.category}
                </span>
                <h3 className="font-display font-bold text-xl mb-3 tracking-tight text-[rgba(255,255,255,0.90)] group-hover:text-[#4ADE80] transition-colors duration-500">
                  {article.title}
                </h3>
                <p className="text-xs text-[rgba(255,255,255,0.40)] opacity-50 font-light leading-relaxed">
                  {article.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Founder Frameworks */}
        <section className="py-12 lg:py-12 px-6 lg:px-32 bg-[#111812] text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center mb-12"
          >
            <span className="font-label text-[#4ADE80] text-[10px] uppercase tracking-[0.4em] mb-6 font-bold">
              Founder Frameworks
            </span>
            <h2 className="font-display font-bold text-5xl lg:text-7xl tracking-ultra-tight max-w-4xl leading-tight text-[rgba(255,255,255,0.90)]">
              High-Value Tools for <br />
              High-Stakes Decisions.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left">
            {FRAMEWORKS.map((tool, i) => (
              <motion.div
                key={tool.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{
                  borderColor: "rgba(74, 222, 128, 0.22)",
                  scale: 1.02,
                }}
                className="p-12 lg:p-16 border border-[rgba(74,222,128,0.22)] transition-all duration-700 group  rounded-lg cursor-pointer"
              >
                <div className="w-16 h-16 flex items-center justify-center border  bg-[#1D2820] rounded-sm mb-12 border-[#4ADE80] transition-colors">
                  <tool.icon
                    className="text-[#4ADE80] w-8 h-8"
                    strokeWidth={1.5}
                  />
                </div>
                <h4 className="font-display font-bold group-hover:text-[#4ADE80] text-3xl mb-6 tracking-tight text-[rgba(255,255,255,0.90)]">
                  {tool.title}
                </h4>
                <p className="font-body text-[rgba(255,255,255,0.40)] mb-2 opacity-50 font-light leading-relaxed">
                  {tool.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Quotes */}
        <section className="py-8 lg:py-18 px-6 lg:px-32 bg-[#0A0F0C] border-y border-[rgba(74,222,128,0.22)]">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-center mb-8 opacity-20">
              <Quote
                size={60}
                fill="#4ADE80"
                className="text-[#4ADE80]"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 lg:gap-32">
              <motion.blockquote
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <p className="font-display font-medium text-3xl leading-snug italic text-[rgba(255,255,255,0.90)] mb-8 tracking-tight">
                  "The quality of your network is the ceiling of your success."
                </p>
                <cite className="font-label text-[9px] uppercase tracking-[0.3em] text-[#4ADE80] not-italic font-bold">
                  — Circle Member, Series C Founder
                </cite>
              </motion.blockquote>

              <motion.blockquote
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <p className="font-display font-medium text-3xl leading-snug italic text-[rgba(255,255,255,0.90)] mb-8 tracking-tight">
                  "Clarity isn't found in the chaos; it's forged in the silence
                  that follows it."
                </p>
                <cite className="font-label text-[9px] uppercase tracking-[0.3em] text-[#4ADE80] not-italic font-bold">
                  — Circle Member, Exit '22
                </cite>
              </motion.blockquote>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-10 lg:py-14 px-6 lg:px-32 bg-[#0A0F0C] text-center relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-[#4ADE80]/20 rounded-full blur-3xl" />
          </div>

          <div className="relative z-2 max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display font-bold text-6xl md:text-8xl tracking-ultra-tight mb-12 leading-[0.9] text-[rgba(255,255,255,0.90)]"
            >
              Experience <br />
              The Unseen.
            </motion.h2>

            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#4ADE80] text-[#0A0F0C] font-display font-bold text-[10px] uppercase tracking-[0.4em] px-16 transition-all duration-700 shadow-2xl shadow-[rgba(74,222,128,0.10)]"
            >
              Explore Experiences
            </motion.button>

            <p className="mt-12 font-label text-[9px] text-[rgba(255,255,255,0.40)] uppercase tracking-[0.4em] font-medium">
              Restricted Access • Verified Founders Only
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}