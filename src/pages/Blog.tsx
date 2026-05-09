import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

type Blog = {
  _id: string;
  title: string;
  content: string;
  organization?: string;
  url_handle: string;
  image_url?: string;
  tags: string[];
  excerpt: string;
  author: string;
  word_count: number;
  created_at: string;
  createdAt?: Date;
  updatedAt?: Date;
  is_featured?: boolean;
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  show: { transition: { staggerChildren: 0.08 } },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.97 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

function Skeleton({ className }: { className?: string }) {
  return (
    <div className={`rounded-sm animate-pulse bg-neutral-200 ${className}`} />
  );
}

export default function Journal() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [featuredBlogs, setFeaturedBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  const nonFeaturedBlogs = blogs.filter(
    (b) =>
      b.is_featured !== true && !featuredBlogs.some((fb) => fb._id === b._id),
  );

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://caster-backend.onrender.com/api/blog/featured?organization=collabuilder",
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const allBlogs: Blog[] = data.data;
          setBlogs(allBlogs);
          setFeaturedBlogs(allBlogs.filter((blog) => blog.is_featured));
        }
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    fetch(
      "https://caster-backend.onrender.com/api/blog?organization=collabuilder",
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) setBlogs(data.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const navigateToBlog = (url: string) => {
    window.location.href = `/blog/${url}`;
  };

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

  const groupedByTag = blogs.reduce(
    (acc, blog) => {
      const tag = blog.tags?.[0] || "General";
      if (!acc[tag]) acc[tag] = [];
      acc[tag].push(blog);
      return acc;
    },
    {} as Record<string, typeof blogs>,
  );

  const gridCards = Object.entries(groupedByTag)
    .flatMap(([tag, items]) =>
      items.map((item) => ({
        img: item.image_url,
        tag,
        title: item.title,
        desc: item.excerpt,
        meta: `${Math.ceil((item.word_count || 0) / 200)} min read`,
        slug: item.url_handle,
      })),
    )
    .slice(0, 6);

  return (
    <div className="mx-auto max-w-7xl overflow-hidden bg-white font-sans text-neutral-900 pt-20 xs:pt-24 sm:pt-28 md:pt-32">
      {/* ── Hero ── */}
      <section className="flex flex-col lg:flex-row overflow-hidden pb-12 xs:pb-14 sm:pb-16 md:pb-20 lg:pb-24 border-b border-neutral-200">
        {/* Left Panel */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="flex-1 flex flex-col justify-start relative lg:border-r border-neutral-200 px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10"
        >
          <div className="space-y-4 xs:space-y-5 sm:space-y-6 mb-6 xs:mb-7 sm:mb-8 md:mb-10">
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-2 xs:gap-2.5 sm:gap-3 md:gap-4"
            >
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="h-px w-5 xs:w-6 sm:w-7 md:w-8 bg-orange-600 origin-left block"
              />
              <span className="text-[9px] xs:text-[9.5px] sm:text-[10px] md:text-[11px] font-bold uppercase tracking-[0.25em] xs:tracking-[0.3em] sm:tracking-[0.4em] md:tracking-[0.5em] text-neutral-400">
                The Journal
              </span>
            </motion.div>

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
                  className="text-[clamp(2rem,10vw,9rem)] xs:text-[clamp(2.25rem,10vw,9rem)] sm:text-[clamp(2.5rem,9vw,9rem)] md:text-[clamp(3rem,8.5vw,9rem)] lg:text-[clamp(3.5rem,8vw,9rem)] font-black leading-[0.85] tracking-[-0.04em] text-neutral-900"
                >
                  Field notes
                </motion.h1>
              </div>
              <div className="overflow-hidden flex items-center gap-2 xs:gap-2.5 sm:gap-3 md:gap-4 lg:gap-6">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.4,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  className="text-[clamp(2rem,10vw,9rem)] xs:text-[clamp(2.25rem,10vw,9rem)] sm:text-[clamp(2.5rem,9vw,9rem)] md:text-[clamp(3rem,8.5vw,9rem)] lg:text-[clamp(3.5rem,8vw,9rem)] font-black leading-[0.85] tracking-[-0.04em] text-neutral-300"
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
                  className="relative text-[clamp(2rem,10vw,9rem)] xs:text-[clamp(2.25rem,10vw,9rem)] sm:text-[clamp(2.5rem,9vw,9rem)] md:text-[clamp(3rem,8.5vw,9rem)] lg:text-[clamp(3.5rem,8vw,9rem)] font-black leading-[0.85] tracking-[-0.04em] text-neutral-300 italic"
                >
                  founder
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 1.2,
                      ease: [0.76, 0, 0.24, 1],
                    }}
                    className="absolute left-0 top-3/4 w-full h-[2px] xs:h-[2.5px] sm:h-[3px] md:h-1 bg-orange-500/60 origin-left -rotate-2"
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
                  className="text-[clamp(2rem,10vw,9rem)] xs:text-[clamp(2.25rem,10vw,9rem)] sm:text-[clamp(2.5rem,9vw,9rem)] md:text-[clamp(3rem,8.5vw,9rem)] lg:text-[clamp(3.5rem,8vw,9rem)] font-black leading-[0.85] tracking-[-0.04em] text-neutral-900"
                >
                  stories.
                </motion.h1>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 xs:gap-6 sm:gap-7 md:gap-8 border-t border-neutral-200 pt-5 xs:pt-6 sm:pt-7 md:pt-8">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-[13px] xs:text-[13.5px] sm:text-[14px] md:text-[15px] leading-[1.7] xs:leading-[1.75] sm:leading-[1.8] text-neutral-500 font-light max-w-sm"
            >
              Honest writing on building, thinking, and the spaces that make
              both possible. No fluff — just what actually moves the needle.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-wrap gap-x-1.5 xs:gap-x-2 gap-y-1.5 xs:gap-y-2"
            >
              {filters.map((f, i) => (
                <motion.button
                  key={f}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`rounded-sm border px-2.5 xs:px-3 sm:px-3.5 md:px-4 py-1.5 xs:py-1.75 sm:py-2 text-[8px] xs:text-[8.5px] sm:text-[9px] md:text-[10px] font-bold uppercase tracking-[0.12em] xs:tracking-[0.14em] sm:tracking-[0.16em] md:tracking-[0.2em] transition-all duration-300 ${
                    i === 0
                      ? "border-orange-500/30 bg-orange-50 text-orange-600 shadow-sm shadow-orange-500/[0.06]"
                      : "border-neutral-200 text-neutral-400 hover:border-neutral-300 hover:text-neutral-600 bg-white"
                  }`}
                >
                  {f}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Right Panel: Data Feed */}
        {loading ? (
          <div className="w-full lg:w-[380px] xl:w-[420px] 2xl:w-[480px] bg-neutral-50 border-t lg:border-t-0 border-neutral-200 flex flex-col justify-end mt-8 lg:mt-0">
            {/* Skeleton UI */}
            <div className="grid grid-cols-2 border-b border-neutral-200">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className={`p-4 xs:p-5 sm:p-6 md:p-7 lg:p-8 flex flex-col justify-center ${i % 2 !== 0 ? "border-l border-neutral-200" : ""} ${i < 2 ? "border-b border-neutral-200" : ""}`}
                >
                  <Skeleton className="h-6 xs:h-7 sm:h-8 w-12 xs:w-13 sm:w-14 md:w-16 mb-2 sm:mb-2.5 md:mb-3" />
                  <Skeleton className="h-2.5 xs:h-3 w-10 xs:w-11 sm:w-12" />
                </div>
              ))}
            </div>
            <div className="px-5 xs:px-6 sm:px-7 md:px-8 py-3.5 xs:py-4 sm:py-4.5 md:py-5 border-b border-neutral-200">
              <Skeleton className="h-3 w-20 xs:w-22 sm:w-24" />
            </div>
            <div className="flex-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 xs:gap-3 sm:gap-3.5 md:gap-4 px-5 xs:px-6 sm:px-7 md:px-8 py-3 xs:py-3.5 sm:py-4 border-b border-neutral-200"
                >
                  <Skeleton className="h-4 w-4 xs:w-4.5 sm:w-5 shrink-0" />
                  <Skeleton className="h-3.5 xs:h-4 w-full max-w-[80%]" />
                </div>
              ))}
            </div>
            <div className="h-9 xs:h-10 sm:h-11 md:h-12 border-t border-neutral-200 bg-white flex items-center px-5 xs:px-6 sm:px-7 md:px-8">
              <Skeleton className="h-3.5 xs:h-4 w-24 xs:w-26 sm:w-28" />
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-[380px] xl:w-[420px] 2xl:w-[480px] bg-neutral-50 border-t lg:border-t-0 border-neutral-200 flex flex-col justify-end mt-8 lg:mt-0"
          >
            <div className="grid grid-cols-2 border-b border-neutral-200">
              {stats.map((s, i) => (
                <div
                  key={s.l}
                  className={`p-4 xs:p-5 sm:p-6 md:p-7 lg:p-8 flex flex-col justify-center ${i % 2 !== 0 ? "border-l border-neutral-200" : ""} ${i < 2 ? "border-b border-neutral-200" : ""}`}
                >
                  <span className="text-[22px] xs:text-[24px] sm:text-[26px] md:text-[28px] font-black tracking-[-0.04em] text-neutral-800 tabular-nums">
                    {s.n}
                  </span>
                  <span className="mt-1.5 xs:mt-1.75 sm:mt-2 text-[8.5px] xs:text-[9px] sm:text-[9.5px] md:text-[10px] font-bold uppercase tracking-[0.18em] xs:tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] text-neutral-400">
                    {s.l}
                  </span>
                </div>
              ))}
            </div>

            <div className="px-5 xs:px-6 sm:px-7 md:px-8 py-3.5 xs:py-4 sm:py-4.5 md:py-5 border-b border-neutral-200 flex items-center justify-between">
              <span className="text-[9px] xs:text-[9.5px] sm:text-[10px] font-bold uppercase tracking-[0.2em] xs:tracking-[0.25em] sm:tracking-[0.3em] md:tracking-[0.35em] text-neutral-400">
                Active Feed
              </span>
              <span className="font-mono text-[9px] xs:text-[9.5px] sm:text-[10px] text-neutral-300">
                // Latest
              </span>
            </div>

            <div className="flex-1 max-h-[280px] xs:max-h-[300px] sm:max-h-[320px] md:max-h-[360px] lg:max-h-[400px] overflow-y-auto scrollbar-hide">
              {blogs.slice(0, 8).map((item, i) => (
                <motion.a
                  href={`/blog/${item.url_handle}`}
                  key={item._id}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + i * 0.06, duration: 0.5 }}
                  className="group flex items-center gap-2.5 xs:gap-3 sm:gap-3.5 md:gap-4 px-5 xs:px-6 sm:px-7 md:px-8 py-2.5 xs:py-3 sm:py-3.5 md:py-4 border-b border-neutral-100 hover:bg-white transition-all duration-200"
                >
                  <span className="min-w-5 xs:min-w-5.5 sm:min-w-6 md:min-w-7 font-mono text-[9.5px] xs:text-[10px] sm:text-[10.5px] md:text-[11px] text-neutral-300 group-hover:text-orange-600 transition-colors duration-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11.5px] xs:text-[12px] sm:text-[12.5px] md:text-[13px] font-medium tracking-[-0.01em] text-neutral-400 group-hover:text-neutral-900 truncate transition-colors duration-300">
                      {item.title}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 xs:gap-1.5 sm:gap-2 shrink-0 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    <span className="text-[7.5px] xs:text-[8px] sm:text-[8.5px] font-bold uppercase tracking-[0.1em] xs:tracking-[0.12em] sm:tracking-[0.15em] text-orange-600 bg-orange-50 border border-orange-500/20 px-1.5 xs:px-1.75 sm:px-2 py-0.5 xs:py-0.75 sm:py-1 rounded-[1px]">
                      {item.tags?.[0] || "Blog"}
                    </span>
                    <svg
                      className="w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3 sm:h-3 text-neutral-300"
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

            <div className="h-9 xs:h-10 sm:h-11 md:h-12 border-t border-neutral-200 bg-white flex items-center px-5 xs:px-6 sm:px-7 md:px-8">
              <div className="flex items-center gap-1.5 xs:gap-2 text-neutral-400">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                <span className="font-mono text-[8.5px] xs:text-[9px] sm:text-[9.5px] md:text-[10px] tracking-wider">
                  SYNCED WEEKLY
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </section>

      {/* ── Featured Photo Grid ── */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 border-b border-neutral-200">
          {Array.from({ length: 2 }).map((_, i) => (
            <div
              key={i}
              className="relative h-[340px] xs:h-[370px] sm:h-[400px] md:h-[420px] lg:h-[440px] bg-neutral-100 p-5 xs:p-6 sm:p-7 md:p-8 flex flex-col justify-end border-r border-neutral-200 last:border-r-0"
            >
              <div className="flex gap-2 mb-2.5 xs:mb-3">
                <Skeleton className="h-2.5 xs:h-3 w-12 xs:w-14" />
                <Skeleton className="h-2.5 xs:h-3 w-9 xs:w-10" />
              </div>
              <Skeleton className="h-5 xs:h-5.5 sm:h-6 w-3/4 mb-2.5 xs:mb-3" />
              <Skeleton className="h-3.5 xs:h-4 w-full mb-1.5 xs:mb-2" />
              <Skeleton className="h-3.5 xs:h-4 w-5/6 mb-4 xs:mb-5" />
              <div className="flex items-center gap-2">
                <Skeleton className="h-2.5 xs:h-3 w-14 xs:w-16" />
                <Skeleton className="h-1.5 w-1.5 rounded-full" />
                <Skeleton className="h-2.5 xs:h-3 w-12 xs:w-14" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 border-b border-neutral-200"
        >
          {featuredBlogs.map((blog) => (
            <motion.div
              key={blog._id}
              variants={scaleIn}
              onClick={() => navigateToBlog(blog.url_handle)}
              className="group relative h-[340px] xs:h-[370px] sm:h-[400px] md:h-[420px] lg:h-[440px] cursor-pointer overflow-hidden border-r border-neutral-200 last:border-r-0"
            >
              <img
                src={blog.image_url}
                referrerPolicy="no-referrer"
                alt={blog.title}
                className="absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 xs:p-6 sm:p-7 md:p-8">
                <div className="flex flex-wrap gap-x-2.5 xs:gap-x-3 gap-y-1 mb-2.5 xs:mb-3 sm:mb-3.5">
                  {(blog.tags ?? []).map((tag: string) => (
                    <span
                      key={tag}
                      className="text-[8.5px] xs:text-[9px] sm:text-[9.5px] md:text-[10px] font-bold uppercase tracking-[0.1em] xs:tracking-[0.12em] sm:tracking-[0.14em] text-neutral-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="mb-1.5 xs:mb-2 text-lg xs:text-xl sm:text-[22px] md:text-2xl font-extrabold tracking-[-0.02em] leading-[1.2] text-neutral-900 whitespace-pre-line group-hover:text-orange-600 transition-colors duration-300">
                  {blog.title}
                </h2>
                <p className="mb-2.5 xs:mb-3 text-[12px] xs:text-[12.5px] sm:text-[13px] md:text-sm text-neutral-100 line-clamp-2">
                  {blog.excerpt}
                </p>
                <div className="flex items-center gap-1.5 xs:gap-2 sm:gap-2.5 flex-wrap">
                  <span className="text-[8.5px] xs:text-[9px] sm:text-[9.5px] md:text-[10px] font-bold uppercase tracking-[0.1em] xs:tracking-[0.12em] sm:tracking-[0.14em] text-neutral-200">
                    {blog.author}
                  </span>
                  <span className="h-[2px] xs:h-0.5 sm:h-0.75 w-[2px] xs:w-0.5 sm:w-0.75 rounded-full bg-neutral-300" />
                  <span className="text-[8.5px] xs:text-[9px] sm:text-[9.5px] md:text-[10px] font-bold uppercase tracking-[0.1em] xs:tracking-[0.12em] sm:tracking-[0.14em] text-neutral-200">
                    {Math.ceil(blog.word_count / 200)} min read
                  </span>
                  <span className="h-[2px] xs:h-0.5 sm:h-0.75 w-[2px] xs:w-0.5 sm:w-0.75 rounded-full bg-neutral-300" />
                  <span className="text-[8.5px] xs:text-[9px] sm:text-[9.5px] md:text-[10px] font-bold uppercase tracking-[0.1em] xs:tracking-[0.12em] sm:tracking-[0.14em] text-neutral-300">
                    {new Date(blog.created_at).toLocaleDateString()}
                  </span>
                  <div className="ml-auto flex h-6 w-6 xs:h-7 xs:w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full border border-neutral-200 group-hover:border-orange-500/30 group-hover:bg-orange-50 transition-all duration-300">
                    <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
                      <path
                        d="M2 8L8 2M8 2H3M8 2v5"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        className="text-neutral-400 group-hover:text-orange-600 transition-colors"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* ── Wide Non-Featured Card ── */}
      {loading ? (
        <div className="group relative h-56 xs:h-60 sm:h-64 md:h-72 lg:h-80 bg-neutral-100 border-b border-neutral-200">
          <div className="absolute inset-y-0 left-0 flex w-full sm:w-[60%] md:w-[55%] flex-col justify-center px-5 xs:px-6 sm:px-8 md:px-10 lg:px-11 py-7 xs:py-8 sm:py-9 md:py-10">
            <Skeleton className="h-2.5 xs:h-3 w-18 xs:w-20 mb-3 xs:mb-3.5 sm:mb-4" />
            <Skeleton className="h-7 xs:h-8 w-4/5 mb-4 xs:mb-4.5 sm:mb-5" />
            <Skeleton className="h-3.5 xs:h-4 w-full mb-1.5 xs:mb-2" />
            <Skeleton className="h-3.5 xs:h-4 w-3/4 mb-5 xs:mb-5.5 sm:mb-6" />
            <div className="flex items-center gap-2 xs:gap-2.5">
              <Skeleton className="h-2.5 xs:h-3 w-12 xs:w-14" />
              <Skeleton className="h-1.5 w-1.5 rounded-full" />
              <Skeleton className="h-2.5 xs:h-3 w-14 xs:w-16" />
            </div>
          </div>
        </div>
      ) : (
        nonFeaturedBlogs.slice(0, 1).map((item) => (
          <motion.div
            key={item._id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onClick={() => navigateToBlog(item.url_handle)}
            className="group relative h-56 xs:h-60 sm:h-64 md:h-72 lg:h-80 cursor-pointer overflow-hidden border-b border-neutral-200"
          >
            <img
              src={item.image_url}
              referrerPolicy="no-referrer"
              alt=""
              className="absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/50 to-black/80 to-transparent" />
            <div className="absolute inset-y-0 left-0 flex w-full sm:w-[60%] md:w-[55%] flex-col justify-center px-5 xs:px-6 sm:px-8 md:px-10 lg:px-11 py-7 xs:py-8 sm:py-9 md:py-10">
              <p className="mb-2.5 xs:mb-3 text-[8.5px] xs:text-[9px] sm:text-[9.5px] md:text-[10px] font-bold uppercase tracking-[0.18em] xs:tracking-[0.2em] sm:tracking-[0.25em] md:tracking-[0.3em] text-orange-600">
                {item.tags?.[0] || "Featured"}
              </p>
              <h2 className="mb-3.5 xs:mb-4 text-xl xs:text-2xl sm:text-[28px] md:text-[30px] lg:text-[32px] font-black leading-[1.1] tracking-[-0.03em] text-neutral-900 group-hover:text-orange-600 transition-colors duration-300">
                {item.title}
              </h2>
              <p className="mb-4 xs:mb-4.5 sm:mb-5 text-[12px] xs:text-[12.5px] sm:text-[13px] md:text-[14px] leading-[1.7] xs:leading-[1.75] sm:leading-[1.8] text-neutral-200 line-clamp-2">
                {item.excerpt}
              </p>
              <div className="flex items-center gap-1.5 xs:gap-2 sm:gap-2.5 flex-wrap">
                <span className="text-[8.5px] xs:text-[9px] sm:text-[9.5px] md:text-[10px] font-bold uppercase tracking-[0.1em] xs:tracking-[0.12em] sm:tracking-[0.14em] text-neutral-200">
                  {item.author}
                </span>
                <span className="h-[2px] xs:h-0.5 sm:h-0.75 w-[2px] xs:w-0.5 sm:w-0.75 rounded-full bg-neutral-300" />
                <span className="text-[8.5px] xs:text-[9px] sm:text-[9.5px] md:text-[10px] font-bold uppercase tracking-[0.1em] xs:tracking-[0.12em] sm:tracking-[0.14em] text-neutral-300">
                  {Math.ceil((item.word_count || 0) / 200)} min read
                </span>
                <span className="h-[2px] xs:h-0.5 sm:h-0.75 w-[2px] xs:w-0.5 sm:w-0.75 rounded-full bg-neutral-300" />
                <span className="text-[8.5px] xs:text-[9px] sm:text-[9.5px] md:text-[10px] font-bold uppercase tracking-[0.1em] xs:tracking-[0.12em] sm:tracking-[0.14em] text-neutral-300">
                  {new Date(item.created_at).toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>
          </motion.div>
        ))
      )}

      {/* ── Recent Articles Grid ── */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="border-b border-neutral-200"
      >
        <div className="flex items-center justify-between border-b border-neutral-200 px-4 xs:px-5 sm:px-6 md:px-8 lg:px-11 py-5 xs:py-6 sm:py-7 md:py-8">
          <span className="text-[9px] xs:text-[9.5px] sm:text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] xs:tracking-[0.25em] sm:tracking-[0.3em] md:tracking-[0.35em] text-neutral-400">
            Recent articles
          </span>
          <span className="cursor-pointer text-[9px] xs:text-[9.5px] sm:text-[10px] md:text-[11px] font-bold uppercase tracking-[0.12em] xs:tracking-[0.15em] sm:tracking-[0.18em] md:tracking-[0.2em] text-orange-600 hover:text-orange-700 transition-colors">
            View all →
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3.5 xs:gap-4 sm:gap-4.5 md:gap-5 px-4 xs:px-5 sm:px-6 md:px-8 lg:px-11 py-5 xs:py-5.5 sm:py-6 md:py-7 border-b border-neutral-100 sm:border-b-0 sm:border-r border-neutral-200 last:border-r-0"
                >
                  <Skeleton className="h-14 w-14 xs:h-15 xs:w-15 sm:h-16 sm:w-16 shrink-0 rounded-sm" />
                  <div className="flex-1 flex flex-col gap-1.5 xs:gap-2 mt-0.5 xs:mt-1">
                    <Skeleton className="h-2.5 xs:h-3 w-12 xs:w-14" />
                    <Skeleton className="h-4.5 xs:h-5 w-full" />
                    <Skeleton className="h-2.5 xs:h-3 w-2/3" />
                  </div>
                </div>
              ))
            : blogs.slice(0, 6).map((item) => (
                <motion.div
                  key={item.url_handle}
                  variants={fadeUp}
                  onClick={() => navigateToBlog(item.url_handle)}
                  className="group flex cursor-pointer items-start gap-3.5 xs:gap-4 sm:gap-4.5 md:gap-5 px-4 xs:px-5 sm:px-6 md:px-8 lg:px-11 py-4.5 xs:py-5 sm:py-5.5 md:py-6 lg:py-7 transition-colors duration-200 hover:bg-neutral-50 border-b border-neutral-100 sm:border-b-0 sm:border-r border-neutral-200 last:border-r-0"
                >
                  <img
                    src={item.image_url}
                    referrerPolicy="no-referrer"
                    alt=""
                    className="h-14 w-14 xs:h-15 xs:w-15 sm:h-16 sm:w-16 shrink-0 rounded-sm object-cover transition-opacity duration-300"
                  />
                  <div className="flex-1">
                    <p className="mb-1 xs:mb-1.25 sm:mb-1.5 text-[8.5px] xs:text-[9px] sm:text-[9.5px] md:text-[10px] font-bold uppercase tracking-[0.18em] xs:tracking-[0.2em] sm:tracking-[0.22em] md:tracking-[0.25em] text-orange-600">
                      {item.tags?.[0] || "Blog"}
                    </p>
                    <p className="mb-1.25 xs:mb-1.5 sm:mb-2 text-[13px] xs:text-[13.5px] sm:text-[14px] md:text-[15px] font-extrabold leading-[1.25] xs:leading-[1.28] sm:leading-[1.3] tracking-[-0.01em] text-neutral-500 transition-colors duration-200 group-hover:text-neutral-900">
                      {item.title}
                    </p>
                    <p className="text-[8.5px] xs:text-[9px] sm:text-[9.5px] md:text-[10px] font-bold uppercase tracking-[0.1em] xs:tracking-[0.12em] sm:tracking-[0.14em] text-neutral-400">
                      {item.author} · {Math.ceil((item.word_count || 0) / 200)}{" "}
                      min read
                    </p>
                  </div>
                </motion.div>
              ))}
        </div>
      </motion.div>

      {/* ── Quote Band ── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex flex-col md:flex-row items-start md:items-center gap-5 xs:gap-6 sm:gap-7 md:gap-10 lg:gap-12 border-y border-neutral-200 bg-neutral-50 px-4 xs:px-5 sm:px-6 md:px-8 lg:px-11 py-8 xs:py-9 sm:py-10 md:py-12 lg:py-14"
      >
        <div className="shrink-0 text-[50px] xs:text-[55px] sm:text-[60px] md:text-[70px] lg:text-[80px] font-black leading-[0.7] text-orange-500/10 -mt-1.5 xs:-mt-2 font-serif">
          &ldquo;
        </div>
        <p className="flex-1 font-serif text-[17px] xs:text-[18px] sm:text-[20px] md:text-[23px] lg:text-[26px] italic leading-normal text-neutral-400">
          The best thinking I&apos;ve done in years happened{" "}
          <em className="text-neutral-700">away from my desk</em> — surrounded
          by founders asking the same hard questions.
        </p>
        <div className="min-w-0 sm:min-w-36 md:min-w-40 text-left md:text-right">
          <p className="mb-0.5 xs:mb-1 text-[12px] xs:text-[12.5px] sm:text-[13px] font-bold text-neutral-900">
            Priya Nair
          </p>
          <p className="text-[8.5px] xs:text-[9px] sm:text-[9.5px] md:text-[10px] font-bold uppercase tracking-[0.12em] xs:tracking-[0.14em] sm:tracking-[0.16em] md:tracking-[0.18em] text-neutral-400">
            Founder · Oslo 2024
          </p>
        </div>
      </motion.div>

      {/* ── Three Grid ── */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 border-b border-neutral-200"
      >
        {loading
          ? Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="bg-neutral-100 p-5 xs:p-6 sm:p-7 md:p-8 border-r border-neutral-200 last:border-r-0"
              >
                <Skeleton className="h-28 xs:h-30 sm:h-32 md:h-35 w-full rounded-sm mb-4 xs:mb-4.5 sm:mb-5" />
                <Skeleton className="h-2.5 xs:h-3 w-14 xs:w-16 mb-2.5 xs:mb-3" />
                <Skeleton className="h-4.5 xs:h-5 w-full mb-1.5 xs:mb-2" />
                <Skeleton className="h-4.5 xs:h-5 w-3/4 mb-4 xs:mb-4.5 sm:mb-5" />
                <div className="flex flex-col gap-1.5 xs:gap-2 mb-4 xs:mb-4.5 sm:mb-5">
                  <Skeleton className="h-3.5 xs:h-4 w-full" />
                  <Skeleton className="h-3.5 xs:h-4 w-5/6" />
                  <Skeleton className="h-3.5 xs:h-4 w-2/3" />
                </div>
                <Skeleton className="h-2.5 xs:h-3 w-14 xs:w-16" />
              </div>
            ))
          : gridCards.map((card) => (
              <motion.div
                key={card.title}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group cursor-pointer border-t-2 border-transparent bg-neutral-50 p-5 xs:p-6 sm:p-7 md:p-8 transition-all duration-300 hover:border-t-orange-500 hover:bg-white hover:shadow-lg hover:shadow-orange-500/[0.04] border-r border-neutral-200 last:border-r-0"
              >
                <img
                  src={card.img}
                  referrerPolicy="no-referrer"
                  alt=""
                  className="mb-3.5 xs:mb-4 sm:mb-4.5 md:mb-5 h-28 xs:h-30 sm:h-32 md:h-35 w-full rounded-sm object-cover opacity-60 transition-opacity duration-300 group-hover:opacity-80"
                />
                <p className="mb-1.5 xs:mb-2 text-[8.5px] xs:text-[9px] sm:text-[9.5px] md:text-[10px] font-bold uppercase tracking-[0.18em] xs:tracking-[0.2em] sm:tracking-[0.24em] md:tracking-[0.28em] text-orange-600">
                  {card.tag}
                </p>
                <p className="mb-2 xs:mb-2.25 sm:mb-2.5 text-[14px] xs:text-[14.5px] sm:text-[15px] md:text-base font-extrabold tracking-[-0.015em] leading-[1.25] xs:leading-[1.28] sm:leading-[1.3] text-neutral-700 group-hover:text-orange-600 transition-colors duration-300">
                  {card.title}
                </p>
                <p className="mb-3.5 xs:mb-4 text-[12px] xs:text-[12.5px] sm:text-[13px] md:text-[14px] leading-[1.65] xs:leading-[1.68] sm:leading-[1.7] text-neutral-400 line-clamp-3">
                  {card.desc}
                </p>
                <p className="text-[8.5px] xs:text-[9px] sm:text-[9.5px] md:text-[10px] font-bold uppercase tracking-[0.1em] xs:tracking-[0.12em] sm:tracking-[0.14em] text-neutral-400">
                  {card.meta}
                </p>
              </motion.div>
            ))}
      </motion.div>

      {/* ── Topics ── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="border-y border-neutral-200 px-4 xs:px-5 sm:px-6 md:px-8 lg:px-11 py-7 xs:py-8 sm:py-9 md:py-10 lg:py-12"
      >
        <p className="mb-4 xs:mb-4.5 sm:mb-5 md:mb-6 text-[9px] xs:text-[9.5px] sm:text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] xs:tracking-[0.25em] sm:tracking-[0.3em] md:tracking-[0.35em] text-neutral-500">
          Browse by topic
        </p>
        <div className="flex flex-wrap gap-1.5 xs:gap-2">
          {topics.map((t) => (
            <motion.button
              key={t.name}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex cursor-pointer items-center gap-1.5 xs:gap-2 rounded-sm border border-neutral-200 bg-white px-3 xs:px-3.5 sm:px-4 py-1.75 xs:py-2 sm:py-2.5 text-[9.5px] xs:text-[10px] sm:text-[10.5px] md:text-[11px] font-bold uppercase tracking-[0.1em] xs:tracking-[0.12em] sm:tracking-[0.15em] text-neutral-400 transition-all duration-200 hover:border-orange-500/30 hover:text-orange-600 hover:bg-orange-50/30"
            >
              {t.name}
              <span className="text-[7.5px] xs:text-[8px] sm:text-[8.5px] md:text-[9px] text-neutral-300">
                {t.count}
              </span>
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* ── Newsletter ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="grid grid-cols-1 md:grid-cols-2 gap-7 xs:gap-8 sm:gap-10 md:gap-12 border-t border-neutral-200 bg-white px-4 xs:px-5 sm:px-6 md:px-8 lg:px-11 py-10 xs:py-11 sm:py-12 md:py-14 lg:py-16 items-center"
      >
        <div>
          <p className="mb-2.5 xs:mb-3 sm:mb-3.5 text-[9px] xs:text-[9.5px] sm:text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] xs:tracking-[0.25em] sm:tracking-[0.3em] md:tracking-[0.35em] text-neutral-500">
            Stay sharp
          </p>
          <h3 className="mb-2.5 xs:mb-3 text-[24px] xs:text-[26px] sm:text-[28px] md:text-[31px] lg:text-[34px] font-black leading-[1.1] tracking-[-0.03em] text-neutral-900">
            Field notes,
            <br />
            direct to inbox.
          </h3>
          <p className="text-[12px] xs:text-[12.5px] sm:text-[13px] md:text-[14px] leading-[1.7] xs:leading-[1.75] sm:leading-[1.8] text-neutral-500">
            One email a week. Honest writing on building better, thinking
            clearer, and going further — from founders who&apos;ve done the
            work.
          </p>
        </div>
        <div className="flex flex-col gap-2 xs:gap-2.25 sm:gap-2.5">
          <div className="flex flex-col xs:flex-row gap-2 xs:gap-0">
            <input
              className="flex-1 border border-neutral-200 bg-neutral-50 px-3.5 xs:px-4 py-2.75 xs:py-3 sm:py-3.5 text-[12.5px] xs:text-[13px] sm:text-[14px] text-neutral-900 outline-none font-sans placeholder:text-neutral-400 focus:border-orange-500 focus:ring-1 focus:ring-orange-500/10 transition-all rounded-sm"
              placeholder="your@email.com"
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="shrink-0 bg-neutral-900 px-4.5 xs:px-5 sm:px-6 py-2.75 xs:py-3 sm:py-3.5 text-[9.5px] xs:text-[10px] sm:text-[10.5px] md:text-[11px] font-bold uppercase tracking-[0.14em] xs:tracking-[0.16em] sm:tracking-[0.2em] md:tracking-[0.22em] text-white hover:bg-orange-600 transition-colors rounded-sm"
            >
              Subscribe
            </motion.button>
          </div>
          <p className="text-[8.5px] xs:text-[9px] sm:text-[9.5px] md:text-[10px] tracking-wider text-neutral-400">
            No spam. Unsubscribe any time. 2,400+ founders already in.
          </p>
        </div>
      </motion.div>
    </div>
  );
}