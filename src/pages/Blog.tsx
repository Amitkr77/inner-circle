import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Journal() {
  const [blogs, setBlogs] = useState([]);
  console.log(blogs);

  useEffect(() => {
    fetch(
      "https://caster-backend.onrender.com/api/blog?organization=collabuilder",
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setBlogs(data.data);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  const filters = [
    "All",
    "Mindset",
    "Execution",
    "Retreats",
    "Deep Work",
    "Community",
  ];

  const stats = [
    { n: "48+", l: "Articles" },
    { n: "12k", l: "Readers" },
    { n: "600+", l: "Founders" },
    { n: "18", l: "Countries" },
  ];

  const latestItems = [
    {
      num: "01",
      text: "Why most founders confuse motion with progress",
      tag: "Mindset",
    },
    {
      num: "02",
      text: "What 48 hours in the Alps taught me about leverage",
      tag: "Retreats",
    },
    {
      num: "03",
      text: "The 90-day plan that actually sticks",
      tag: "Execution",
    },
  ];

  const listItems = [
    {
      img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=200",
      tag: "Execution",
      title: "The 90-day plan that actually sticks",
      meta: "5 min · Feb 2025",
    },
    {
      img: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=200",
      tag: "Mindset",
      title: "Stop optimising. Start deciding.",
      meta: "4 min · Jan 2025",
    },
    {
      img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=200",
      tag: "Community",
      title: "The people in the room change everything",
      meta: "6 min · Dec 2024",
    },
    {
      img: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&q=80&w=200",
      tag: "Retreats",
      title: "Bali 2025 — what happened, honestly",
      meta: "7 min · Nov 2024",
    },
    {
      img: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&q=80&w=200",
      tag: "Execution",
      title: "How to find your actual bottleneck",
      meta: "5 min · Oct 2024",
    },
    {
      img: "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?auto=format&fit=crop&q=80&w=200",
      tag: "Deep Work",
      title: "Designing your environment for focus",
      meta: "6 min · Sep 2024",
    },
  ];

  const gridCards = [
    {
      img: "https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&q=80&w=600",
      tag: "Mindset",
      title: "On sitting with uncertainty",
      desc: "Most founders flee uncertainty with busyness. The ones who sit with it long enough find the real answer.",
      meta: "4 min · Aug 2024",
    },
    {
      img: "https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?auto=format&fit=crop&q=80&w=600",
      tag: "Execution",
      title: "The single metric that matters",
      desc: "You don't have a strategy problem. You have a prioritisation problem — and it starts with tracking the wrong thing.",
      meta: "5 min · Jul 2024",
    },
    {
      img: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&q=80&w=600",
      tag: "Retreats",
      title: "Norway field report — 72 hours",
      desc: "A dispatch from our Norway expedition — what broke, what shifted, and what 15 founders took home.",
      meta: "8 min · Jun 2024",
    },
  ];

  const topics = [
    { name: "Mindset", count: 14 },
    { name: "Execution", count: 11 },
    { name: "Deep Work", count: 9 },
    { name: "Retreats", count: 8 },
    { name: "Community", count: 6 },
    { name: "Clarity", count: 5 },
    { name: "Leadership", count: 4 },
    { name: "Focus", count: 7 },
    { name: "Field Notes", count: 3 },
  ];

  return (
    <div className="mx-auto max-w-7xl overflow-hidden bg-[#050505] font-[family-name:var(--font-sans)] text-white pt-32">
      {/* ── Hero ── */}
      <section className=" bg-[#050505] text-white flex flex-col lg:flex-row overflow-hidden pb-24">
        {/* ── Left Panel: The Manifesto ── */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="flex-1 flex flex-col justify-start  relative border-r border-white/[0.06]"
        >
          <div className="space-y-6 mb-10">
            {/* Eyebrow */}
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-4"
            >
              <div className="h-px w-8 bg-emerald-400/70" />
              <span className="text-[11px] font-bold uppercase tracking-[0.5em] text-white/30">
                The Journal
              </span>
            </motion.div>

            {/* Headline - Absurd Scale */}
            <div className="space-y-[-0.04em]">
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.3,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  className="text-[clamp(3rem,8vw,9rem)] font-black leading-[0.85] tracking-[-0.05em] text-white/90"
                >
                  Field notes
                </motion.h1>
              </div>
              <div className="overflow-hidden flex items-center gap-4 lg:gap-6">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.4,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  className="text-[clamp(3rem,8vw,9rem)] font-black leading-[0.85] tracking-[-0.05em] text-white/30"
                >
                  &
                </motion.span>
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.45,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  className="relative text-[clamp(3rem,8vw,9rem)] font-black leading-[0.85] tracking-[-0.05em] text-white/20 italic"
                >
                  founder
                  {/* Strikethrough */}
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 1.2,
                      ease: [0.76, 0, 0.24, 1],
                    }}
                    className="absolute left-0 top-1/2 w-full h-[3px] md:h-[5px] bg-emerald-400/60 origin-left -rotate-[2deg]"
                  />
                </motion.span>
              </div>
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.5,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  className="text-[clamp(3rem,8vw,9rem)] font-black leading-[0.85] tracking-[-0.05em] text-white/90"
                >
                  stories.
                </motion.h1>
              </div>
            </div>
          </div>

          {/* Bottom Meta Row */}
          <div className="grid grid-cols-1  gap-8 border-t border-white/[0.06] pt-8">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-[14px] leading-[1.8] text-white/50 font-light max-w-sm"
            >
              Honest writing on building, thinking, and the spaces that make
              both possible. No fluff — just what actually moves the needle.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-wrap gap-x-2 gap-y-2 md:justify-start items-end"
            >
              {filters.map((f, i) => (
                <button
                  key={f}
                  className={`rounded-[2px] border px-4 py-2 text-[9px] font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
                    i === 0
                      ? "border-emerald-400/50 bg-emerald-400/10 text-emerald-400 shadow-[0_0_20px_-5px_rgba(52,211,153,0.2)]"
                      : "border-white/[0.07] text-white/30 hover:border-white/20 hover:text-white/60"
                  }`}
                >
                  {f}
                </button>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* ── Right Panel: The Data Feed ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="w-full lg:w-[420px] xl:w-[480px] bg-white/5 border-t lg:border-t-0 border-white/[0.06] flex flex-col justify-end"
        >
          {/* Stats Grid - Horizontal Rows */}
          <div className="grid grid-cols-2 border-b border-white/[0.06]">
            {stats.map((s, i) => (
              <div
                key={s.l}
                className={`p-6 lg:p-8 flex flex-col justify-center ${i % 2 !== 0 ? "border-l border-white/[0.06]" : ""} ${i < 2 ? "border-b border-white/[0.06]" : ""}`}
              >
                <span className="text-[28px] font-black tracking-[-0.04em] text-white/80 tabular-nums">
                  {s.n}
                </span>
                <span className="mt-2 text-[9px] font-bold uppercase tracking-[0.3em] text-white/20">
                  {s.l}
                </span>
              </div>
            ))}
          </div>

          {/* Feed Header */}
          <div className="px-8 py-5 border-b border-white/[0.06] flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-white/25">
              Active Feed
            </span>
            <span className="font-mono text-[10px] text-white/15">
              // Latest
            </span>
          </div>

          {/* Feed List - Terminal Style */}
          <div className="flex-1 max-h-[350px] lg:max-h-[400px] overflow-y-auto scrollbar-hide">
            {latestItems.map((item, i) => (
              <motion.a
                href="#"
                key={item.num}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                className="group flex items-center gap-4 px-8 py-4 border-b border-white/[0.04] hover:bg-white/[0.02] transition-all duration-200"
              >
                {/* Index */}
                <span className="min-w-[28px] font-mono text-[11px] text-white/10 group-hover:text-emerald-400/50 transition-colors duration-300">
                  {String(item.num).padStart(2, "0")}
                </span>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] font-medium tracking-[-0.01em] text-white/40 group-hover:text-white/90 truncate transition-colors duration-300">
                    {item.text}
                  </p>
                </div>

                {/* Tag Pill & Arrow */}
                <div className="flex items-center gap-2 shrink-0 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  <span className="text-[8px] font-bold uppercase tracking-[0.15em] text-emerald-400/70 bg-emerald-400/5 border border-emerald-400/10 px-2 py-1 rounded-[1px]">
                    {item.tag}
                  </span>
                  <svg
                    className="w-3 h-3 text-white/30"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Bottom Terminal Bar */}
          <div className="h-12 border-t border-white/[0.06] bg-[#0a0a0a] flex items-center px-8">
            <div className="flex items-center gap-2 text-white/15">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400/40 animate-pulse" />
              <span className="font-mono text-[10px] tracking-wider">
                SYNCED WEEKLY
              </span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Featured Photo Grid ── */}
      <div className="grid grid-cols-2 gap-[2px] mb-[2px]">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="group relative h-[440px] cursor-pointer overflow-hidden"
          >
            <img
              src={blog.image_url}
              referrerPolicy="no-referrer"
              alt={blog.title}
              className="absolute inset-0 h-full w-full object-cover opacity-40 transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-60"
            />

            <div className="absolute inset-0 bg-[linear-gradient(175deg,rgba(5,5,5,0)_20%,rgba(5,5,5,0.97)_100%)]" />

            <div className="absolute bottom-0 left-0 right-0 p-8">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-3.5">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/[0.18]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h2 className="mb-2 text-2xl font-extrabold tracking-[-0.02em] leading-[1.2] text-white/[0.9] whitespace-pre-line">
                {blog.title}
              </h2>

              {/* Excerpt */}
              <p className="mb-3 text-sm text-white/60 line-clamp-2">
                {blog.excerpt}
              </p>

              {/* Meta */}
              <div className="flex items-center gap-2.5">
                <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/[0.18]">
                  {blog.author}
                </span>

                <span className="h-[3px] w-[3px] rounded-full bg-white/20" />

                <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/[0.18]">
                  {Math.ceil(blog.word_count / 200)} min read
                </span>

                <span className="h-[3px] w-[3px] rounded-full bg-white/20" />

                <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/[0.18]">
                  {new Date(blog.created_at).toLocaleDateString()}
                </span>

                <div className="ml-auto flex h-8 w-8 items-center justify-center rounded-full border border-white/15">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path
                      d="M2 8L8 2M8 2H3M8 2v5"
                      stroke="#fff"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Wide Card ── */}
      <div className="group relative mb-[2px] h-[320px] cursor-pointer overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1540539234-c14a20fb7c7b?auto=format&fit=crop&q=80&w=1400"
          referrerPolicy="no-referrer"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-30 transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:opacity-45"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.97)_35%,rgba(5,5,5,0)_100%)]" />
        <div className="absolute inset-y-0 left-0 flex w-[55%] flex-col justify-center px-11 py-10">
          <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.3em] text-emerald-400">
            Deep Work · Editor&apos;s Pick
          </p>
          <h2 className="mb-4 text-[32px] font-black leading-[1.1] tracking-[-0.03em] text-white/[0.9]">
            Solitude is a
            <br />
            competitive advantage
          </h2>
          <p className="mb-5 max-w-[300px] text-[13px] leading-[1.8] text-white/[0.25]">
            In a world of constant input, the founder who can sit alone with a
            hard problem — and stay there — quietly wins.
          </p>
          <div className="flex items-center gap-2.5">
            <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/[0.18]">
              Marcus Reid
            </span>
            <span className="h-[3px] w-[3px] rounded-full bg-white/20" />
            <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/[0.18]">
              9 min read
            </span>
            <span className="h-[3px] w-[3px] rounded-full bg-white/20" />
            <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/[0.18]">
              Feb 2025
            </span>
          </div>
        </div>
      </div>

      {/* ── List Section ── */}
      <div className="mb-[2px]">
        <div className="flex items-center justify-between border-b border-white/[0.07] px-11 py-8">
          <span className="text-[11px] font-bold uppercase tracking-[0.35em] text-white/[0.15]">
            Recent articles
          </span>
          <span className="cursor-pointer text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-400">
            View all →
          </span>
        </div>
        {Array.from({ length: 3 }, (_, rowIndex) => (
          <div
            key={rowIndex}
            className="grid grid-cols-2 border-b border-white/[0.07] last:border-b-0"
          >
            {listItems
              .slice(rowIndex * 2, rowIndex * 2 + 2)
              .map((item, colIndex) => (
                <div
                  key={item.title}
                  className={`group flex cursor-pointer items-start gap-5 px-11 py-7 transition-colors duration-200 hover:bg-white/[0.015] ${
                    colIndex === 0 ? "border-r border-white/[0.07]" : ""
                  }`}
                >
                  <img
                    src={item.img}
                    referrerPolicy="no-referrer"
                    alt=""
                    className="h-[72px] w-[72px] shrink-0 rounded object-cover opacity-50"
                  />
                  <div className="flex-1">
                    <p className="mb-1.5 text-[9px] font-bold uppercase tracking-[0.25em] text-emerald-400">
                      {item.tag}
                    </p>
                    <p className="mb-2 text-[15px] font-extrabold leading-[1.3] tracking-[-0.01em] text-white/[0.65] transition-colors duration-200 group-hover:text-white/[0.9]">
                      {item.title}
                    </p>
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/[0.15]">
                      {item.meta}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        ))}
      </div>

      {/* ── Quote Band ── */}
      <div className="flex items-center gap-12 border-y border-white/[0.07] bg-[#0d0d0d] px-11 py-14 mb-[2px]">
        <div className="shrink-0 text-[80px] font-black leading-[0.7] text-emerald-400/[0.12] -mt-2">
          &ldquo;
        </div>
        <p className="flex-1 font-[family-name:var(--font-serif)] text-[26px] italic leading-[1.5] text-white/[0.45]">
          The best thinking I&apos;ve done in years happened{" "}
          <em className="text-white/[0.8]">away from my desk</em> — surrounded
          by founders asking the same hard questions.
        </p>
        <div className="min-w-[160px] text-right">
          <p className="mb-1 text-[13px] font-bold text-white/[0.85]">
            Priya Nair
          </p>
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/[0.15]">
            Founder · Oslo 2024
          </p>
        </div>
      </div>

      {/* ── Three Grid ── */}
      <div className="mb-[2px] grid grid-cols-3 gap-[2px]">
        {gridCards.map((card) => (
          <div
            key={card.title}
            className="group cursor-pointer border-t-2 border-transparent bg-[#0d0d0d] p-8 transition-all duration-200 hover:border-t-emerald-400 hover:bg-[#111]"
          >
            <img
              src={card.img}
              referrerPolicy="no-referrer"
              alt=""
              className="mb-5 h-[140px] w-full rounded object-cover opacity-40 transition-opacity duration-300 group-hover:opacity-60"
            />
            <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.28em] text-emerald-400">
              {card.tag}
            </p>
            <p className="mb-2.5 text-base font-extrabold tracking-[-0.015em] leading-[1.3] text-white/[0.8]">
              {card.title}
            </p>
            <p className="mb-4 text-[13px] leading-[1.7] text-white/[0.22]">
              {card.desc}
            </p>
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/[0.15]">
              {card.meta}
            </p>
          </div>
        ))}
      </div>

      {/* ── Topics ── */}
      <div className="border-y border-white/[0.07] px-11 py-12 mb-[2px]">
        <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.35em] text-white/[0.5]">
          Browse by topic
        </p>
        <div className="flex flex-wrap gap-2">
          {topics.map((t) => (
            <div
              key={t.name}
              className="flex cursor-pointer items-center gap-2 rounded-[2px] border border-white/10 px-[18px] py-2.5 text-[11px] font-bold uppercase tracking-[0.15em] text-white/[0.3] transition-all duration-200 hover:border-emerald-400/40 hover:text-emerald-400"
            >
              {t.name}
              <span className="text-[9px] text-white/[0.15]">{t.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Newsletter ── */}
      <div className="grid grid-cols-2 gap-12 border-t border-white/[0.07] bg-[#0a0a0a] px-11 py-16 items-center">
        <div>
          <p className="mb-3.5 text-[11px] font-bold uppercase tracking-[0.35em] text-white/[0.5]">
            Stay sharp
          </p>
          <h3 className="mb-3 text-[34px] font-black leading-[1.1] tracking-[-0.03em] text-white/[0.9]">
            Field notes,
            <br />
            direct to inbox.
          </h3>
          <p className="text-[13px] leading-[1.8] text-white/[0.4]">
            One email a week. Honest writing on building better, thinking
            clearer, and going further — from founders who&apos;ve done the
            work.
          </p>
        </div>
        <div className="flex flex-col gap-2.5">
          <div className="flex">
            <input
              className="flex-1 border border-white/10 bg-[#0d0d0d] px-[18px] py-3.5 text-[13px] text-white/50 outline-none font-[family-name:var(--font-sans)] placeholder:text-white/15"
              placeholder="your@email.com"
            />
            <button className="shrink-0 bg-emerald-400 px-[22px] py-3.5 text-[10px] font-bold uppercase tracking-[0.22em] text-black">
              Subscribe
            </button>
          </div>
          <p className="text-[10px] tracking-[0.05em] text-white/[0.15]">
            No spam. Unsubscribe any time. 2,400+ founders already in.
          </p>
        </div>
      </div>
    </div>
  );
}
