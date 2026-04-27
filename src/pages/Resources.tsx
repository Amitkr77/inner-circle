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
    description: "How to maintain the soul of your enterprise while building the systems that allow it to breathe without you. A framework for essential growth.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJsFr1QPuk7dTapLhL3oC9EpqtcmAfrN2DTkyrQu3NVDd4wckWuVoP_Xgprf9p7aigOYvXQ9s6xrtpt2zpaLbwXyIwvdGuSaOh2HyqaEWN2WqEfiaolLGUL77KNebXUncxXVSNM7qiBrSE2JK7cO9YlSFqZYBDZAHIC4Hgb2TV5gkS_nvcH8sl--QrP7C17Blq2BspagODG0mYeQvhn7JZhXX5O66i-sqgr4zD5gx83u_6Vk12udN0K5gC96mEE-ezbtmGkhHH1bU",
    major: true
  },
  {
    category: "Psychology",
    title: "The Psychology of Leverage",
    description: "Understanding the internal barriers that prevent external expansion and team empowerment.",
    major: false
  },
  {
    category: "Case Study",
    title: "From Zero to Growth",
    description: "A technical post-mortem on the pivot that redefined a legacy vertical in the tech sector.",
    major: false
  }
];

const CATEGORIES = [
  { icon: Brain, label: "Founder Mindset" },
  { icon: Network, label: "Scaling & Ops" },
  { icon: Users, label: "Hiring & Team" },
  { icon: TrendingUp, label: "Growth" },
  { icon: Leaf, label: "Personal Clarity" }
];

const RESOURCE_CARDS = [
  {
    tag: "Article",
    category: "Mindset",
    readTime: "12 min read",
    title: "The Art of Essentialism",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2g0UdnKo10aTip0JLXuLWB_CJgm9OAPUJ26RBAJG9WOBwKHNH6TBvMEwFGqgbs7900dBOISp6ZKP3hPKL47-wW90WzmSIykj_iH37ko5H_9TtODd77m7jo9qWOzmbFR78WcAGbytTYSzBMETR6LFF5QJRDLaNq_vnxVbl6InixE2IFj3gS-rtnCE3NIFFNebTRGgqdhkTPE3D9pnLnwr3Fd3ZATk_irmW0VY_gW03GPxObEKX0BnVolBkXEmp1OVjZO3sJXm-hAI"
  },
  {
    tag: "Framework",
    category: "Hiring",
    readTime: "8 min read",
    title: "Hiring Protocol 2.0",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjNmvZ1iHi4bZmZUpdmg-qd6Is-yIoyxhITe27apYKJn4XeXOuC2HxGth3ByOJzwc7Ys2EaZNGGGmb4nIusiVM1nsMTKjORr2YYDFN5MfpMJ2PRllHpIFg3FMgUwOb81zPrjNHNvrMoi4c10Wi3F8LjKGoopbIptqhHq4n8dBTmdDOIHeB2X3N_zBdokRCw7iCGYXxVd53FEjkjMV5GBuy4W4U9bWE04zMEWpaFAO7rmw9YFA4gvy9tID83fmLn_kss7tR4t6f02E"
  },
  {
    tag: "Resource",
    category: "Operations",
    readTime: "Downloadable",
    title: "Operating Systems",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuARlECMmwaC2WLKxq7m1Qlod0XCeFBcbrvlNGprITTvwFG_EHC6TAqALdAr87FhtP3-14tKszzdHWtyYLM9IEvYESOVp0YSsQwCz5P6qGdoyOaD-Yd0mmqZ6LZ3CKmqH36RVmkASepvx73tLzuhobBXuTIJcCuWWsDwxp4vi8PGMKCk-uP_HXqGD19UJttdi2AieQbt0mU9Q5ON33l2SaYjdAAIWHv00d_db_UylZ9jy-CZi4okw6JetQDjAoAE2xNWq3B61uw174k"
  }
];

const MINI_ARTICLES = [
  { 
    category: "Finance", 
    title: "The Cap Table Narrative", 
    description: "Communicating equity value to late-stage hires and strategic partners." 
  },
  { 
    category: "Leadership", 
    title: "Radical Delegation", 
    description: "Finding the precise edge where trust meets operational accountability." 
  },
  { 
    category: "Exit Strategy", 
    title: "Second Act Transitions", 
    description: "Life beyond the liquidity event: identity and purpose after exit." 
  }
];

const FRAMEWORKS = [
  {
    icon: Focus,
    title: "Decision Clarity",
    description: "A 4-step heuristic to separate market signal from emotional noise in executive pivots."
  },
  {
    icon: BarChart3,
    title: "Bottleneck Audit",
    description: "Quantifying the hidden cost of founder involvement in operational minutiae."
  },
  {
    icon: LayoutGrid,
    title: "Growth Matrix",
    description: "Balancing rapid expansion with structural integrity to prevent organizational decay."
  }
];

/* ================= COMPONENT ================= */

export default function Resources() {
  return (
   <div className="min-h-screen bg-background-lowest selection:bg-primary-container selection:text-on-primary">
      {/* Navbar */}
      

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[100vh] flex items-center px-6 lg:px-32 overflow-hidden bg-surface pt-20">
          <div className="absolute inset-0 z-0">
            <img 
              className="w-full h-full object-cover opacity-[0.8] "
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbnDFLP43Fn141nKcxJbanMu6mYas6vX-2s8-gNzG-74JMQktYuYVbszGHGkJ7_1RgoVhuouFPrMG90d4m7TaYpnomQpLT_906UyIEeaq094pU2igxg-LpIQNpjoO_uMRNdYdiEDYBVdzi8FTaX4HU_fJ2wIZ5OCRzW6mFCRVwpbRDNxiedY-UphCaqzCnRQ_TohLsAt3dUQWZBLINzszW5FVQ0q9WGszV1ehZLN-bbdrijV9rpW3gWBNk7kmAb5tczz59j4-kVpQ"
              alt="Cinematic wide shot founders"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background-lowest via-transparent to-transparent" />
          </div>
          
          <div className="relative z-10 max-w-5xl">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block font-label text-green-400 text-[14px] uppercase tracking-[0.4em] mb-8 font-bold"
            >
              Archives & Insights
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-display font-bold text-6xl md:text-6xl lg:text-7xl tracking-ultra-tight leading-[0.85] text-on-surface mb-10"
            >
              Resources for <br/>Founders Who <br/>Want <span className="text-primary italic font-medium">Clarity</span>.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.4 }}
              className="font-body text-xl md:text-base font-bold text-on-surface-variant max-w-lg leading-relaxed"
            >
              A curated repository of strategic leverage, operational frameworks, and psychological protocols for the modern architect.
            </motion.p>
          </div>
        </section>

        {/* Featured Insights */}
        <section className="py-16 lg:py-26 px-6 lg:px-32 bg-surface">
          <div className="mb-24 flex items-baseline justify-between border-b border-outline-variant/10 pb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="font-label text-green-400 text-[10px] uppercase tracking-[0.3em] block mb-4 font-bold">The Vanguard</span>
              <h2 className="font-display font-bold text-4xl lg:text-5xl tracking-ultra-tight">Featured Insights</h2>
            </motion.div>
            <a href="#" className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant hover:text-green-400 transition-colors">
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
              <div className="aspect-[16/8] overflow-hidden mb-6 bg-surface-highest relative border border-white/[0.03]">
                <img 
                  className="w-full h-full object-cover grayscale brightness-50 group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-75 transition-all duration-1000"
                  src={FEATURED_INSIGHTS[0].image}
                  alt={FEATURED_INSIGHTS[0].title}
                />
                <div className="absolute top-8 left-8 bg-background-lowest/90 backdrop-blur-md px-4 py-2 border border-white/10 text-[9px] font-label text-green-400 tracking-widest uppercase font-bold">
                  {FEATURED_INSIGHTS[0].category}
                </div>
              </div>
              <h3 className="font-display font-bold text-3xl lg:text-4xl mb-6 tracking-ultra-tight group-hover:text-green-400 transition-colors duration-500">
                {FEATURED_INSIGHTS[0].title}
              </h3>
              <p className="font-body text-on-surface-variant opacity-60 max-w-xl leading-relaxed text-lg font-light">
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
                  <span className="font-label text-green-400 text-[12px] uppercase tracking-[0.3em] block mb-4 font-bold">
                    {item.category}
                  </span>
                  <h3 className="font-display font-bold text-2xl mb-4 tracking-tight group-hover:text-primary transition-colors duration-500">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-on-surface-variant opacity-60 leading-relaxed font-light">
                    {item.description}
                  </p>
                  <div className="mt-6 w-0 group-hover:w-12 h-[1px] bg-primary transition-all duration-500" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Grid */}
        <section className="bg-surface-low border-y border-white/[0.03]">
          <div className="grid grid-cols-2 md:grid-cols-5 bg-white/[0.05]">
            {CATEGORIES.map((cat, i) => (
              <motion.a
                key={cat.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                href="#"
                className="bg-surface-low py-12 lg:py-16 px-6 lg:px-10 flex flex-col items-center text-center border-r border-b border-white/[0.03] hover:bg-surface transition-all group duration-500"
              >
                <cat.icon className="w-8 h-8 lg:w-10 lg:h-10 text-on-surface-variant/40 group-hover:text-green-400 mb-6 transition-colors" />
                <span className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant/60 group-hover:text-green-400 transition-colors font-bold">
                  {cat.label}
                </span>
              </motion.a>
            ))}
          </div>
        </section>

        {/* Resource Library */}
        <section className="py-24 lg:py-24 px-6 lg:px-32 bg-background-lowest">
          <div className="flex justify-between items-end mb-24 border-b border-outline-variant/10 pb-12">
            <div className="max-w-2xl">
              <span className="font-label text-green-400 text-[10px] uppercase tracking-[0.3em] block mb-4 font-bold">The Archive</span>
              <h2 className="font-display font-bold text-4xl lg:text-5xl tracking-ultra-tight">Resource Library</h2>
            </div>
            {/* <div className="hidden md:flex gap-4">
              <button className="w-12 h-12 flex items-center justify-center border border-outline-variant/20 rounded-full text-on-surface-variant hover:border-primary hover:text-primary transition-all group">
                <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              </button>
              <button className="w-12 h-12 flex items-center justify-center border border-outline-variant/20 rounded-full text-on-surface-variant hover:border-primary hover:text-primary transition-all group">
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div> */}
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
                <div className="h-[400px] lg:h-[420px] bg-surface-low mb-8 overflow-hidden relative border border-white/5 transition-transform duration-700 group-hover:-translate-y-2">
                  <img 
                    className="w-full h-full object-cover grayscale opacity-30 group-hover:opacity-50 transition-all duration-1000 group-hover:scale-105"
                    src={card.image}
                    alt={card.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background-lowest/80 to-transparent" />
                  <div className="absolute bottom-10 left-10">
                    <span className={`px-3 py-1 text-[8px] font-bold uppercase group-hover:text-green-400 group-hover:border-green-400 tracking-widest ${
                      card.tag === "Article" ? "bg-primary text-background-lowest border border-white/20" : "bg-white/10 backdrop-blur-md text-white border border-white/20"
                    }`}>
                      {card.tag}
                    </span>
                  </div>
                </div>
                <div className="px-2">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="font-label text-[9px] text-primary tracking-[0.2em] uppercase font-bold">{card.category}</span>
                    <span className="w-1 h-1 bg-outline-variant/30 rounded-full" />
                    <span className="font-label text-[9px] text-on-surface-variant/50 uppercase tracking-widest">{card.readTime}</span>
                  </div>
                  <h3 className="font-display font-bold text-2xl tracking-tight group-hover:text-green-400 transition-colors duration-500">
                    {card.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 pt-16 border-t border-outline-variant/10">
            {MINI_ARTICLES.map((article, i) => (
              <motion.div 
                key={article.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="group cursor-pointer"
              >
                <span className="font-label text-[9px] text-primary tracking-widest uppercase mb-4 block font-bold">{article.category}</span>
                <h3 className="font-display font-bold text-xl mb-3 tracking-tight group-hover:text-green-400 transition-colors duration-500">
                  {article.title}
                </h3>
                <p className="text-xs text-on-surface-variant opacity-50 font-light leading-relaxed">
                  {article.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Founder Frameworks */}
        <section className="py-12 lg:py-12 px-6 lg:px-32 bg-surface text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center mb-12"
          >
            <span className="font-label text-green-400 text-[10px] uppercase tracking-[0.4em] mb-6 font-bold">Founder Frameworks</span>
            <h2 className="font-display font-bold text-5xl lg:text-7xl tracking-ultra-tight max-w-4xl leading-tight">
              High-Value Tools for <br/>High-Stakes Decisions.
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
                whileHover={{ borderColor: "rgba(13, 154, 6, 0.79)", scale: 1.02 }}
                className="bg-surface-low/30 p-12 lg:p-16 border border-white/[0.03] transition-all duration-700 group hover:bg-surface-highest/20 rounded-lg cursor-pointer"
              >
                <div className="w-16 h-16 flex items-center justify-center border border-white/5 bg-surface-highest rounded-sm mb-12 group-hover:border-green-400 transition-colors">
                  <tool.icon className="text-primary w-8 h-8" strokeWidth={1.5} />
                </div>
                <h4 className="font-display font-bold group-hover:text-green-400 text-3xl mb-6 tracking-tight">{tool.title}</h4>
                <p className="font-body text-on-surface-variant mb-2 opacity-50 font-light leading-relaxed">
                  {tool.description}
                </p>
                {/* <a href="#" className="font-label text-[9px] uppercase tracking-[0.3em] text-primary flex items-center gap-3 group/link font-bold">
                  Access Tool <ArrowRight size={14} className="group-hover/link:translate-x-2 transition-transform duration-500" />
                </a> */}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Quotes */}
        <section className="py-8 lg:py-18 px-6 lg:px-32 bg-background-lowest border-y border-white/[0.03]">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-center mb-8 opacity-20">
              <Quote size={60} fill="var(--color-primary)" className="text-primary" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 lg:gap-32">
              <motion.blockquote 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <p className="font-display font-medium text-3xl leading-snug italic text-on-surface mb-8 tracking-tight">
                  "The quality of your network is the ceiling of your success."
                </p>
                <cite className="font-label text-[9px] uppercase tracking-[0.3em] text-green-400 not-italic font-bold">
                  — Circle Member, Series C Founder
                </cite>
              </motion.blockquote>
              
              <motion.blockquote 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <p className="font-display font-medium text-3xl leading-snug italic text-on-surface mb-8 tracking-tight">
                  "Clarity isn't found in the chaos; it's forged in the silence that follows it."
                </p>
                <cite className="font-label text-[9px] uppercase tracking-[0.3em] text-green-400 not-italic font-bold">
                  — Circle Member, Exit '22
                </cite>
              </motion.blockquote>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-10 lg:py-14 px-6 lg:px-32 bg-background-lowest text-center relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-primary/20 rounded-full blur-3xl" />
          </div>
          
          <div className="relative z-2 max-w-4xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display font-bold text-6xl md:text-8xl tracking-ultra-tight mb-12 leading-[0.9]"
            >
              Experience <br/>The Unseen.
            </motion.h2>
            
            <motion.button 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="luxury-gradient text-background-lowest text-green-400 font-display font-bold text-[10px] uppercase tracking-[0.4em] px-16 transition-all duration-700 shadow-2xl shadow-primary/10"
            >
              Explore Experiences
            </motion.button>
            
            <p className="mt-12 font-label text-[9px] text-on-surface-variant/40 uppercase tracking-[0.4em] font-medium">
              Restricted Access • Verified Founders Only
            </p>
          </div>
        </section>
      </main>



    </div>
  );
}