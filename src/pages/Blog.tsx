import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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

function Skeleton({ className }: { className?: string }) {
  return (
    <div
      className={`rounded-xs animate-pulse ${className}`}
      style={{ backgroundColor: "rgba(74, 222, 128, 0.12)" }}
    />
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
        if (data.success) {
          setBlogs(data.data);
        }
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
    <div className="mx-auto max-w-7xl overflow-hidden bg-[#0A0F0C] font-sans text-white pt-32">
      {/* ── Hero ── */}
      <section className="bg-[#0A0F0C] text-white flex flex-col lg:flex-row overflow-hidden pb-24">
        {/* ── Left Panel ── */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="flex-1 flex flex-col justify-start relative border-r border-[rgba(74,222,128,0.22)]"
        >
          <div className="space-y-6 mb-10">
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-4"
            >
              <div className="h-px w-8 bg-[#4ADE80]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.5em] text-[rgba(255,255,255,0.40)]">
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
                  className="text-[clamp(3rem,8vw,9rem)] font-black leading-[0.85] tracking-tighter text-[rgba(255,255,255,0.90)]"
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
                  className="text-[clamp(3rem,8vw,9rem)] font-black leading-[0.85] tracking-tighter text-[rgba(255,255,255,0.40)]"
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
                  className="relative text-[clamp(3rem,8vw,9rem)] font-black leading-[0.85] tracking-tighter text-[rgba(255,255,255,0.40)] italic"
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
                    className="absolute left-0 top-1/2 w-full h-0.75 md:h-1.25 bg-[rgba(74,222,128,0.60)] origin-left -rotate-2"
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
                  className="text-[clamp(3rem,8vw,9rem)] font-black leading-[0.85] tracking-tighter text-[rgba(255,255,255,0.90)]"
                >
                  stories.
                </motion.h1>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 border-t border-[rgba(74,222,128,0.22)] pt-8">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-[14px] leading-[1.8] text-[rgba(255,255,255,0.60)] font-light max-w-sm"
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
                  className={`rounded-xs border px-4 py-2 text-[9px] font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
                    i === 0
                      ? "border-[rgba(74,222,128,0.22)] bg-[rgba(74,222,128,0.12)] text-[#4ADE80] shadow-[0_0_20px_-5px_rgba(74,222,128,0.12)]"
                      : "border-[rgba(74,222,128,0.22)] text-[rgba(255,255,255,0.40)] hover:border-[rgba(74,222,128,0.22)] hover:text-[rgba(255,255,255,0.60)]"
                  }`}
                >
                  {f}
                </button>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* ── Right Panel: Data Feed ── */}
        {loading ? (
          <div className="w-full lg:w-105 xl:w-120 bg-[rgba(74,222,128,0.12)] border-t lg:border-t-0 border-[rgba(74,222,128,0.22)] flex flex-col justify-end animate-pulse">
            <div className="grid grid-cols-2 border-b border-[rgba(74,222,128,0.22)]">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className={`p-6 lg:p-8 flex flex-col justify-center ${i % 2 !== 0 ? "border-l border-[rgba(74,222,128,0.22)]" : ""} ${i < 2 ? "border-b border-[rgba(74,222,128,0.22)]" : ""}`}
                >
                  <Skeleton className="h-8 w-16 mb-3" />
                  <Skeleton className="h-3 w-12" />
                </div>
              ))}
            </div>
            <div className="px-8 py-5 border-b border-[rgba(74,222,128,0.22)]">
              <Skeleton className="h-3 w-24" />
            </div>
            <div className="flex-1">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 px-8 py-4 border-b border-[rgba(74,222,128,0.22)]"
                >
                  <Skeleton className="h-4 w-6 shrink-0" />
                  <Skeleton className="h-4 w-full max-w-[80%]" />
                </div>
              ))}
            </div>
            <div className="h-12 border-t border-[rgba(74,222,128,0.22)] bg-[#0A0F0C] flex items-center px-8">
              <Skeleton className="h-4 w-28" />
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="w-full lg:w-105 xl:w-120 bg-[rgba(74,222,128,0.12)] border-t lg:border-t-0 border-[rgba(74,222,128,0.22)] flex flex-col justify-end"
          >
            <div className="grid grid-cols-2 border-b border-[rgba(74,222,128,0.22)]">
              {stats.map((s, i) => (
                <div
                  key={s.l}
                  className={`p-6 lg:p-8 flex flex-col justify-center ${i % 2 !== 0 ? "border-l border-[rgba(74,222,128,0.22)]" : ""} ${i < 2 ? "border-b border-[rgba(74,222,128,0.22)]" : ""}`}
                >
                  <span className="text-[28px] font-black tracking-[-0.04em] text-[rgba(255,255,255,0.75)] tabular-nums">
                    {s.n}
                  </span>
                  <span className="mt-2 text-[9px] font-bold uppercase tracking-[0.3em] text-[rgba(255,255,255,0.40)]">
                    {s.l}
                  </span>
                </div>
              ))}
            </div>

            <div className="px-8 py-5 border-b border-[rgba(74,222,128,0.22)] flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[rgba(255,255,255,0.40)]">
                Active Feed
              </span>
              <span className="font-mono text-[10px] text-[rgba(255,255,255,0.40)]">
                // Latest
              </span>
            </div>

            <div className="flex-1 max-h-87.5 lg:max-h-100 overflow-y-auto scrollbar-hide">
              {blogs.map((item, i) => (
                <motion.a
                  href={`/blog/${item.url_handle}`}
                  key={item._id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                  className="group flex items-center gap-4 px-8 py-4 border-b border-[rgba(74,222,128,0.22)] hover:bg-[rgba(74,222,128,0.12)] transition-all duration-200"
                >
                  <span className="min-w-7 font-mono text-[11px] text-[rgba(255,255,255,0.40)] group-hover:text-[rgba(74,222,128,0.60)] transition-colors duration-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-[13px] font-medium tracking-[-0.01em] text-[rgba(255,255,255,0.40)] group-hover:text-[rgba(255,255,255,0.90)] truncate transition-colors duration-300">
                      {item.title}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    <span className="text-[8px] font-bold uppercase tracking-[0.15em] text-[rgba(74,222,128,0.60)] bg-[rgba(74,222,128,0.12)] border border-[rgba(74,222,128,0.22)] px-2 py-1 rounded-[1px]">
                      {item.tags?.[0] || "Blog"}
                    </span>
                    <svg
                      className="w-3 h-3 text-[rgba(255,255,255,0.40)]"
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

            <div className="h-12 border-t border-[rgba(74,222,128,0.22)] bg-[#0A0F0C] flex items-center px-8">
              <div className="flex items-center gap-2 text-[rgba(255,255,255,0.40)]">
                <div className="w-1.5 h-1.5 rounded-full bg-[rgba(74,222,128,0.40)] animate-pulse" />
                <span className="font-mono text-[10px] tracking-wider">
                  SYNCED WEEKLY
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </section>

      {/* ── Featured Photo Grid ── */}
      {loading ? (
        <div className="grid grid-cols-2 gap-0.5 mb-0.5">
          {Array.from({ length: 2 }).map((_, i) => (
            <div
              key={i}
              className="relative h-110 bg-[#111812] p-8 flex flex-col justify-end animate-pulse"
            >
              <div className="flex gap-2 mb-3.5">
                <Skeleton className="h-3 w-14" />
                <Skeleton className="h-3 w-10" />
              </div>
              <Skeleton className="h-7 w-3/4 mb-3" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-5/6 mb-5" />
              <div className="flex items-center gap-2.5">
                <Skeleton className="h-3 w-16" />
                <Skeleton className="h-1.5 w-1.5 rounded-full" />
                <Skeleton className="h-3 w-14" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-0.5 mb-0.5">
          {featuredBlogs.map((blog) => (
            <div
              onClick={() => navigateToBlog(blog.url_handle)}
              key={blog._id}
              className="group relative h-110 cursor-pointer overflow-hidden"
            >
              <img
                src={blog.image_url}
                referrerPolicy="no-referrer"
                alt={blog.title}
                className="absolute inset-0 h-full w-full object-cover opacity-40 transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-60"
              />
              <div className="absolute inset-0 bg-[linear-gradient(175deg,rgba(10,15,12,0)_20%,rgba(10,15,12,0.97)_100%)]" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex flex-wrap gap-2 mb-3.5">
                  {(blog.tags ?? []).map((tag: string) => (
                    <span
                      key={tag}
                      className="text-[10px] font-bold uppercase tracking-[0.14em] text-[rgba(255,255,255,0.40)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="mb-2 text-2xl font-extrabold tracking-[-0.02em] leading-[1.2] text-[rgba(255,255,255,0.90)] whitespace-pre-line">
                  {blog.title}
                </h2>
                <p className="mb-3 text-sm text-[rgba(255,255,255,0.60)] line-clamp-2">
                  {blog.excerpt}
                </p>
                <div className="flex items-center gap-2.5">
                  <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[rgba(255,255,255,0.40)]">
                    {blog.author}
                  </span>
                  <span className="h-0.75 w-0.75 rounded-full bg-[rgba(255,255,255,0.40)]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[rgba(255,255,255,0.40)]">
                    {Math.ceil(blog.word_count / 200)} min read
                  </span>
                  <span className="h-0.75 w-0.75 rounded-full bg-[rgba(255,255,255,0.40)]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[rgba(255,255,255,0.40)]">
                    {new Date(blog.created_at).toLocaleDateString()}
                  </span>
                  <div className="ml-auto flex h-8 w-8 items-center justify-center rounded-full border border-[rgba(74,222,128,0.22)]">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path
                        d="M2 8L8 2M8 2H3M8 2v5"
                        stroke="rgba(255,255,255,0.90)"
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
      )}

      {/* ── Wide Non-Featured Card ── */}
      {loading ? (
        <div className="group relative mb-0.5 h-80 bg-[#111812] animate-pulse">
          <div className="absolute inset-y-0 left-0 flex w-[55%] flex-col justify-center px-11 py-10">
            <Skeleton className="h-3 w-20 mb-4" />
            <Skeleton className="h-9 w-4/5 mb-5" />
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-3/4 mb-6" />
            <div className="flex items-center gap-2.5">
              <Skeleton className="h-3 w-14" />
              <Skeleton className="h-1.5 w-1.5 rounded-full" />
              <Skeleton className="h-3 w-16" />
            </div>
          </div>
        </div>
      ) : (
        nonFeaturedBlogs.slice(0, 1).map((item) => (
          <div
            key={item._id}
            onClick={() => navigateToBlog(item.url_handle)}
            className="group relative mb-0.5 h-80 cursor-pointer overflow-hidden"
          >
            <img
              src={item.image_url}
              referrerPolicy="no-referrer"
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-30 transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:opacity-45"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,15,12,0.97)_35%,rgba(10,15,12,0)_100%)]" />
            <div className="absolute inset-y-0 left-0 flex w-[55%] flex-col justify-center px-11 py-10">
              <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.3em] text-[#4ADE80]">
                {item.tags?.[0] || "Featured"}
              </p>
              <h2 className="mb-4 text-[32px] font-black leading-[1.1] tracking-[-0.03em] text-[rgba(255,255,255,0.90)]">
                {item.title}
              </h2>
              <p className="mb-5 text-[13px] leading-[1.8] text-[rgba(255,255,255,0.40)] line-clamp-2">
                {item.excerpt}
              </p>
              <div className="flex items-center gap-2.5">
                <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[rgba(255,255,255,0.40)]">
                  {item.author}
                </span>
                <span className="h-0.75 w-0.75 rounded-full bg-[rgba(255,255,255,0.40)]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[rgba(255,255,255,0.40)]">
                  {Math.ceil((item.word_count || 0) / 200)} min read
                </span>
                <span className="h-0.75 w-0.75 rounded-full bg-[rgba(255,255,255,0.40)]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-[rgba(255,255,255,0.40)]">
                  {new Date(item.created_at).toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>
          </div>
        ))
      )}

      {/* ── Recent Articles Grid ── */}
      <div className="mb-0.5">
        <div className="flex items-center justify-between border-b border-[rgba(74,222,128,0.22)] px-11 py-8">
          <span className="text-[11px] font-bold uppercase tracking-[0.35em] text-[rgba(255,255,255,0.40)]">
            Recent articles
          </span>
          <span className="cursor-pointer text-[11px] font-bold uppercase tracking-[0.2em] text-[#4ADE80]">
            View all →
          </span>
        </div>

        <div className="grid grid-cols-2">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-5 px-11 py-7 animate-pulse ${
                    i % 2 === 0 ? "border-r border-[rgba(74,222,128,0.22)]" : ""
                  }`}
                >
                  <Skeleton className="h-18 w-18 shrink-0 rounded" />
                  <div className="flex-1 flex flex-col gap-2 mt-1">
                    <Skeleton className="h-3 w-14" />
                    <Skeleton className="h-5 w-full" />
                    <Skeleton className="h-3 w-2/3" />
                  </div>
                </div>
              ))
            : blogs.map((item, index) => (
                <div
                  key={item.url_handle}
                  onClick={() => navigateToBlog(item.url_handle)}
                  className={`group flex cursor-pointer items-start gap-5 px-11 py-7 transition-colors duration-200 hover:bg-[rgba(74,222,128,0.12)] ${
                    index % 2 === 0
                      ? "border-r border-[rgba(74,222,128,0.22)]"
                      : ""
                  }`}
                >
                  <img
                    src={item.image_url}
                    referrerPolicy="no-referrer"
                    alt=""
                    className="h-18 w-18 shrink-0 rounded object-cover opacity-50"
                  />
                  <div className="flex-1">
                    <p className="mb-1.5 text-[9px] font-bold uppercase tracking-[0.25em] text-[#4ADE80]">
                      {item.tags?.[0] || "Blog"}
                    </p>
                    <p className="mb-2 text-[15px] font-extrabold leading-[1.3] tracking-[-0.01em] text-[rgba(255,255,255,0.60)] transition-colors duration-200 group-hover:text-[rgba(255,255,255,0.90)]">
                      {item.title}
                    </p>
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[rgba(255,255,255,0.40)]">
                      {item.author} · {Math.ceil((item.word_count || 0) / 200)}{" "}
                      min read
                    </p>
                  </div>
                </div>
              ))}
        </div>
      </div>

      {/* ── Quote Band ── */}
      <div className="flex items-center gap-12 border-y border-[rgba(74,222,128,0.22)] bg-[#111812] px-11 py-14 mb-0.5">
        <div className="shrink-0 text-[80px] font-black leading-[0.7] text-[rgba(74,222,128,0.12)] -mt-2">
          &ldquo;
        </div>
        <p className="flex-1 font-serif text-[26px] italic leading-normal text-[rgba(255,255,255,0.40)]">
          The best thinking I&apos;ve done in years happened{" "}
          <em className="text-[rgba(255,255,255,0.75)]">away from my desk</em> —
          surrounded by founders asking the same hard questions.
        </p>
        <div className="min-w-40 text-right">
          <p className="mb-1 text-[13px] font-bold text-[rgba(255,255,255,0.90)]">
            Priya Nair
          </p>
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[rgba(255,255,255,0.40)]">
            Founder · Oslo 2024
          </p>
        </div>
      </div>

      {/* ── Three Grid ── */}
      <div className="mb-0.5 grid grid-cols-3 gap-0.5">
        {loading
          ? Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="bg-[#111812] p-8 animate-pulse">
                <Skeleton className="h-35 w-full rounded mb-5" />
                <Skeleton className="h-3 w-16 mb-3" />
                <Skeleton className="h-5 w-full mb-2" />
                <Skeleton className="h-5 w-3/4 mb-5" />
                <div className="flex flex-col gap-2 mb-5">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                  <Skeleton className="h-4 w-2/3" />
                </div>
                <Skeleton className="h-3 w-16" />
              </div>
            ))
          : gridCards.map((card) => (
              <div
                key={card.title}
                className="group cursor-pointer border-t-2 border-transparent bg-[#111812] p-8 transition-all duration-200 hover:border-t-[#4ADE80] hover:bg-[#1D2820]"
              >
                <img
                  src={card.img}
                  referrerPolicy="no-referrer"
                  alt=""
                  className="mb-5 h-35 w-full rounded object-cover opacity-40 transition-opacity duration-300 group-hover:opacity-60"
                />
                <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.28em] text-[#4ADE80]">
                  {card.tag}
                </p>
                <p className="mb-2.5 text-base font-extrabold tracking-[-0.015em] leading-[1.3] text-[rgba(255,255,255,0.75)]">
                  {card.title}
                </p>
                <p className="mb-4 text-[13px] leading-[1.7] text-[rgba(255,255,255,0.40)] line-clamp-3">
                  {card.desc}
                </p>
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[rgba(255,255,255,0.40)]">
                  {card.meta}
                </p>
              </div>
            ))}
      </div>

      {/* ── Topics ── */}
      <div className="border-y border-[rgba(74,222,128,0.22)] px-11 py-12 mb-0.5">
        <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.35em] text-[rgba(255,255,255,0.60)]">
          Browse by topic
        </p>
        <div className="flex flex-wrap gap-2">
          {topics.map((t) => (
            <div
              key={t.name}
              className="flex cursor-pointer items-center gap-2 rounded-xs border border-[rgba(74,222,128,0.22)] px-4.5 py-2.5 text-[11px] font-bold uppercase tracking-[0.15em] text-[rgba(255,255,255,0.40)] transition-all duration-200 hover:border-[rgba(74,222,128,0.22)] hover:text-[#4ADE80]"
            >
              {t.name}
              <span className="text-[9px] text-[rgba(255,255,255,0.40)]">
                {t.count}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Newsletter ── */}
      <div className="grid grid-cols-2 gap-12 border-t border-[rgba(74,222,128,0.22)] bg-[#0A0F0C] px-11 py-16 items-center">
        <div>
          <p className="mb-3.5 text-[11px] font-bold uppercase tracking-[0.35em] text-[rgba(255,255,255,0.60)]">
            Stay sharp
          </p>
          <h3 className="mb-3 text-[34px] font-black leading-[1.1] tracking-[-0.03em] text-[rgba(255,255,255,0.90)]">
            Field notes,
            <br />
            direct to inbox.
          </h3>
          <p className="text-[13px] leading-[1.8] text-[rgba(255,255,255,0.40)]">
            One email a week. Honest writing on building better, thinking
            clearer, and going further — from founders who&apos;ve done the
            work.
          </p>
        </div>
        <div className="flex flex-col gap-2.5">
          <div className="flex">
            <input
              className="flex-1 border border-[rgba(74,222,128,0.22)] bg-[#172019] px-4.5 py-3.5 text-[13px] text-[rgba(255,255,255,0.40)] outline-none font-sans placeholder:text-[rgba(255,255,255,0.40)]"
              placeholder="your@email.com"
            />
            <button className="shrink-0 bg-[#4ADE80] px-5.5 py-3.5 text-[10px] font-bold uppercase tracking-[0.22em] text-[#0A0F0C]">
              Subscribe
            </button>
          </div>
          <p className="text-[10px] tracking-wider text-[rgba(255,255,255,0.40)]">
            No spam. Unsubscribe any time. 2,400+ founders already in.
          </p>
        </div>
      </div>
    </div>
  );
}
