import { useEffect, useState, useMemo, useCallback, memo } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

// ─── Types ───────────────────────────────────────────────────────────────────

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

// ─── Constants (defined outside component to avoid re-creation) ───────────────

const API_BASE = "https://caster-backend.onrender.com/api/blog";
const ORG = "collabuilder";
const WORDS_PER_MIN = 200;

const CARDS_PER_PAGE = 6;

// const TOPICS = [
//   { name: "Mindset", count: 14 },
//   { name: "Execution", count: 11 },
//   { name: "Deep Work", count: 9 },
//   { name: "Retreats", count: 8 },
//   { name: "Community", count: 6 },
//   { name: "Clarity", count: 5 },
//   { name: "Leadership", count: 4 },
//   { name: "Focus", count: 7 },
//   { name: "Field Notes", count: 3 },
// ] as const;

// ─── Animation Variants (defined outside component) ──────────────────────────

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

// ─── Utilities ───────────────────────────────────────────────────────────────

const readTime = (wordCount: number) => `${Math.ceil((wordCount || 0) / WORDS_PER_MIN)} min read`;

const formatDate = (dateStr: string, options?: Intl.DateTimeFormatOptions) =>
  new Date(dateStr).toLocaleDateString("en-US", options);

// ─── Sub-components (memoised) ───────────────────────────────────────────────

const Skeleton = memo(({ className }: { className?: string }) => (
  <div className={`rounded-sm animate-pulse bg-neutral-200 ${className ?? ""}`} />
));
Skeleton.displayName = "Skeleton";

const BlogFeedItem = memo(
  ({ item, index }: { item: Blog; index: number }) => (
    <motion.a
      href={`/blog/${item.url_handle}`}
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.8 + index * 0.06, duration: 0.5 }}
      className="group flex items-center gap-3 md:gap-4 px-6 md:px-8 py-3 md:py-4 border-b border-neutral-100 hover:bg-white transition-all duration-200"
    >
      <span className="min-w-6 font-mono text-[10px] md:text-[11px] text-neutral-300 group-hover:text-orange-600 transition-colors duration-300">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="flex-1 min-w-0">
        <p className="text-[12px] md:text-[13px] font-medium tracking-[-0.01em] text-neutral-400 group-hover:text-neutral-900 truncate transition-colors duration-300">
          {item.title}
        </p>
      </div>
      <div className="flex items-center gap-1.5 shrink-0 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
        <span className="text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.12em] text-orange-600 bg-orange-50 border border-orange-500/20 px-1.5 py-0.5 rounded-[1px]">
          {item.tags?.[0] ?? "Blog"}
        </span>
        <svg className="w-2.5 h-2.5 text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </motion.a>
  )
);
BlogFeedItem.displayName = "BlogFeedItem";

const FeaturedCard = memo(
  ({ blog, onClick }: { blog: Blog; onClick: (slug: string) => void }) => (
    <motion.div
      variants={scaleIn}
      onClick={() => onClick(blog.url_handle)}
      className="group relative h-[400px] md:h-[440px] cursor-pointer overflow-hidden border-r border-neutral-200 last:border-r-0"
    >
      <img
        src={blog.image_url}
        referrerPolicy="no-referrer"
        alt={blog.title}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/80 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
        <div className="flex flex-wrap gap-x-3 gap-y-1 mb-3">
          {blog.tags?.map((tag) => (
            <span key={tag} className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.12em] text-neutral-200">
              {tag}
            </span>
          ))}
        </div>
        <h2 className="mb-2 text-xl sm:text-[22px] md:text-2xl font-extrabold tracking-[-0.02em] leading-[1.2] text-neutral-100 whitespace-pre-line group-hover:text-orange-600 transition-colors duration-300">
          {blog.title}
        </h2>
        <p className="mb-3 text-[12px] sm:text-[13px] md:text-sm text-neutral-100 line-clamp-2">{blog.excerpt}</p>
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.12em] text-neutral-200">{blog.author}</span>
          <Dot />
          <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.12em] text-neutral-200">{readTime(blog.word_count)}</span>
          <Dot />
          <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.12em] text-neutral-300">{formatDate(blog.created_at)}</span>
          <div className="ml-auto flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full border border-neutral-200 group-hover:border-orange-500/30 group-hover:bg-orange-50 transition-all duration-300">
            <ArrowUpRight />
          </div>
        </div>
      </div>
    </motion.div>
  )
);
FeaturedCard.displayName = "FeaturedCard";

// Tiny shared primitives
const Dot = () => <span className="h-0.5 w-0.5 rounded-full bg-neutral-300" />;
const ArrowUpRight = () => (
  <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
    <path d="M2 8L8 2M8 2H3M8 2v5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" className="text-neutral-400 group-hover:text-orange-600 transition-colors" />
  </svg>
);

// ─── Skeleton Blocks ──────────────────────────────────────────────────────────

const FeedSkeleton = () => (
  <div className="w-full lg:w-[380px] xl:w-[420px] 2xl:w-[480px] bg-neutral-50 border-t lg:border-t-0 border-neutral-200 flex flex-col justify-end mt-8 lg:mt-0">
    <div className="px-6 md:px-8 py-4 md:py-5 border-b border-neutral-200">
      <Skeleton className="h-3 w-24" />
    </div>
    <div className="flex-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i} className="flex items-center gap-3 md:gap-4 px-6 md:px-8 py-3.5 md:py-4 border-b border-neutral-200">
          <Skeleton className="h-4 w-4 shrink-0" />
          <Skeleton className="h-3.5 w-full max-w-[80%]" />
        </div>
      ))}
    </div>
    <div className="h-10 sm:h-12 border-t border-neutral-200 bg-white flex items-center px-6 md:px-8">
      <Skeleton className="h-3.5 w-28" />
    </div>
  </div>
);

const FeaturedSkeleton = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 border-b border-neutral-200">
    {[0, 1].map((i) => (
      <div key={i} className="relative h-[400px] md:h-[440px] bg-neutral-100 p-6 md:p-8 flex flex-col justify-end border-r border-neutral-200 last:border-r-0">
        <div className="flex gap-2 mb-3"><Skeleton className="h-3 w-12" /><Skeleton className="h-3 w-9" /></div>
        <Skeleton className="h-6 w-3/4 mb-3" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-5/6 mb-5" />
        <div className="flex items-center gap-2"><Skeleton className="h-3 w-14" /><Skeleton className="h-1.5 w-1.5 rounded-full" /><Skeleton className="h-3 w-12" /></div>
      </div>
    ))}
  </div>
);

const WideCardSkeleton = () => (
  <div className="relative h-64 md:h-80 bg-neutral-100 border-b border-neutral-200">
    <div className="absolute inset-y-0 left-0 flex w-full sm:w-[60%] flex-col justify-center px-6 sm:px-11 py-8 sm:py-10">
      <Skeleton className="h-3 w-20 mb-4" />
      <Skeleton className="h-8 w-4/5 mb-5" />
      <Skeleton className="h-4 w-full mb-2" />
      <Skeleton className="h-4 w-3/4 mb-6" />
      <div className="flex items-center gap-2"><Skeleton className="h-3 w-12" /><Skeleton className="h-1.5 w-1.5 rounded-full" /><Skeleton className="h-3 w-14" /></div>
    </div>
  </div>
);

const GridSkeleton = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 border-b border-neutral-200">
    {[0, 1, 2].map((i) => (
      <div key={i} className="bg-neutral-100 p-6 md:p-8 border-r border-neutral-200 last:border-r-0">
        <Skeleton className="h-32 md:h-36 w-full rounded-sm mb-5" />
        <Skeleton className="h-3 w-16 mb-3" />
        <Skeleton className="h-5 w-full mb-2" />
        <Skeleton className="h-5 w-3/4 mb-5" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-5/6 mb-2" />
        <Skeleton className="h-4 w-2/3 mb-5" />
        <Skeleton className="h-3 w-16" />
      </div>
    ))}
  </div>
);

const ArticlesSkeleton = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2">
    {Array.from({ length: 6 }).map((_, i) => (
      <div key={i} className="flex items-start gap-4 md:gap-5 px-6 md:px-11 py-5 md:py-7 border-b border-neutral-100 sm:border-b-0 sm:border-r border-neutral-200 last:border-r-0">
        <Skeleton className="h-16 w-16 shrink-0 rounded-sm" />
        <div className="flex-1 flex flex-col gap-2 mt-1">
          <Skeleton className="h-3 w-14" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-3 w-2/3" />
        </div>
      </div>
    ))}
  </div>
);

// ─── Main Component ───────────────────────────────────────────────────────────

export default function Journal() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [gridPage, setGridPage] = useState(0);

  // Single fetch — the /blog endpoint returns all posts including featured ones.
  // We derive featured/non-featured from the same data, eliminating the double request.
  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${API_BASE}?organization=${ORG}`);
        const data = await res.json();
        if (!cancelled && data.success) setBlogs(data.data);
      } catch (err) {
        console.error(err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    load();
    return () => { cancelled = true; };
  }, []);

  // Derived state — memoised so re-renders from unrelated state don't recompute
  const featuredBlogs = useMemo(() => blogs.filter((b) => b.is_featured), [blogs]);

  const nonFeaturedBlogs = useMemo(
    () => blogs.filter((b) => !b.is_featured),
    [blogs]
  );

  // All grid cards (no hard slice — pagination handles display)
  const allGridCards = useMemo(() => {
    const grouped = blogs.reduce<Record<string, Blog[]>>((acc, blog) => {
      const tag = blog.tags?.[0] ?? "General";
      (acc[tag] ??= []).push(blog);
      return acc;
    }, {});

    return Object.entries(grouped).flatMap(([tag, items]) =>
      items.map((item) => ({ ...item, tag }))
    );
  }, [blogs]);

  const totalPages = Math.ceil(allGridCards.length / CARDS_PER_PAGE);
  const gridCards = allGridCards.slice(
    gridPage * CARDS_PER_PAGE,
    gridPage * CARDS_PER_PAGE + CARDS_PER_PAGE
  );

  // Stable navigation callback
  const navigateToBlog = useCallback((slug: string) => {
    window.location.href = `/blog/${slug}`;
  }, []);

  return (
    <div className="mx-auto max-w-7xl overflow-hidden bg-white font-sans text-neutral-900 pt-20 sm:pt-28 md:pt-32">

      {/* ── Hero ── */}
      <section className="flex flex-col lg:flex-row overflow-hidden pb-12 sm:pb-16 md:pb-20 lg:pb-24 border-b border-neutral-200">

        {/* Left Panel */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="flex-1 flex flex-col justify-start relative lg:border-r border-neutral-200 px-4 sm:px-6 md:px-8 lg:px-10"
        >
          <div className="space-y-5 sm:space-y-6 mb-7 sm:mb-8 md:mb-10">
            <motion.div
              variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 md:gap-4"
            >
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="h-px w-7 md:w-8 bg-orange-600 origin-left block"
              />
              <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.4em] md:tracking-[0.5em] text-neutral-400">
                The Journal
              </span>
            </motion.div>

            <div className="space-y-[-0.04em]">
              {[
                { text: "Field notes", delay: 0.3, dim: false, italic: false },
              ].map(({ text, delay }) => (
                <div key={text} className="overflow-hidden">
                  <motion.h1
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, delay, ease: [0.76, 0, 0.24, 1] }}
                    className="text-[clamp(2rem,10vw,9rem)] font-black leading-[0.85] tracking-[-0.04em] text-neutral-900"
                  >
                    {text}
                  </motion.h1>
                </div>
              ))}

              <div className="overflow-hidden flex items-center gap-3 md:gap-6">
                {(["&", "founder"] as const).map((word, i) => (
                  <motion.span
                    key={word}
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, delay: 0.4 + i * 0.05, ease: [0.76, 0, 0.24, 1] }}
                    className={`relative text-[clamp(2rem,10vw,9rem)] font-black leading-[0.85] tracking-[-0.04em] text-neutral-300 ${word === "founder" ? "italic" : ""}`}
                  >
                    {word === "&" ? "& " : word}
                    {word === "founder" && (
                      <motion.span
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 1.2, ease: [0.76, 0, 0.24, 1] }}
                        className="absolute left-0 top-3/4 w-full h-[2px] sm:h-[3px] md:h-1 bg-orange-500/60 origin-left -rotate-2"
                      />
                    )}
                  </motion.span>
                ))}
              </div>

              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay: 0.5, ease: [0.76, 0, 0.24, 1] }}
                  className="text-[clamp(2rem,10vw,9rem)] font-black leading-[0.85] tracking-[-0.04em] text-neutral-900"
                >
                  stories.
                </motion.h1>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:gap-8 border-t border-neutral-200 pt-6 md:pt-8">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-[13px] sm:text-[14px] md:text-[15px] leading-[1.7] sm:leading-[1.8] text-neutral-500 font-light max-w-md"
            >
              Honest writing on building, thinking, and the spaces that make both possible. No fluff — just what actually moves the needle.
            </motion.p>


          </div>
        </motion.div>

        {/* Right Panel: Data Feed */}
        {loading ? (
          <FeedSkeleton />
        ) : (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-[380px] xl:w-[420px] 2xl:w-[480px] bg-neutral-50 border-t lg:border-t-0 border-neutral-200 mt-8 lg:mt-0"
          >
            <div className="px-6 md:px-8 py-4 md:py-5 border-b border-neutral-200 flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] md:tracking-[0.35em] text-neutral-400">
                Active Feed
              </span>
              <span className="font-mono text-[10px] text-neutral-300">// Latest</span>
            </div>

            <div
              className="flex-1 max-h-[320px] md:max-h-[400px] overflow-y-auto scrollbar-hide"
              role="feed"
              aria-label="Latest articles"
            >
              {blogs.slice(0, 7).map((item, i) => (
                <BlogFeedItem key={item._id} item={item} index={i} />
              ))}
            </div>

            <div className="h-10 sm:h-12 border-t border-neutral-200 bg-white flex items-center px-6 md:px-8">
              <div className="flex items-center gap-2 text-neutral-400">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" aria-hidden="true" />
                <span className="font-mono text-[9px] md:text-[10px] tracking-wider">SYNCED WEEKLY</span>
              </div>
            </div>
          </motion.div>
        )}
      </section>

      {/* ── Featured Photo Grid ── */}
      {loading ? (
        <FeaturedSkeleton />
      ) : (
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 border-b border-neutral-200"
        >
          {featuredBlogs.map((blog) => (
            <FeaturedCard key={blog._id} blog={blog} onClick={navigateToBlog} />
          ))}
        </motion.div>
      )}

      {/* ── Wide Non-Featured Card ── */}
      {loading ? (
        <WideCardSkeleton />
      ) : (
        nonFeaturedBlogs.slice(0, 1).map((item) => (
          <motion.div
            key={item._id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onClick={() => navigateToBlog(item.url_handle)}
            className="group relative h-60 sm:h-64 md:h-72 lg:h-80 cursor-pointer overflow-hidden border-b border-neutral-200"
          >
            <img
              src={item.image_url}
              referrerPolicy="no-referrer"
              alt={item.title}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-black/80 to-transparent" />
            <div className="absolute inset-y-0 left-0 flex w-full sm:w-[55%] flex-col justify-center px-6 sm:px-11 py-8 sm:py-10">
              <p className="mb-3 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.25em] sm:tracking-[0.3em] text-orange-600">
                {item.tags?.[0] ?? "Featured"}
              </p>
              <h2 className="mb-4 text-xl sm:text-[28px] md:text-[32px] font-black leading-[1.1] tracking-[-0.03em] text-neutral-100 group-hover:text-orange-600 transition-colors duration-300">
                {item.title}
              </h2>
              <p className="mb-5 text-[12px] sm:text-[13px] md:text-[14px] leading-[1.75] sm:leading-[1.8] text-neutral-200 line-clamp-2">
                {item.excerpt}
              </p>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.12em] text-neutral-200">{item.author}</span>
                <Dot />
                <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.12em] text-neutral-300">{readTime(item.word_count)}</span>
                <Dot />
                <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.12em] text-neutral-300">
                  {formatDate(item.created_at, { month: "short", year: "numeric" })}
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
        <div className="flex items-center justify-between border-b border-neutral-200 px-4 sm:px-6 md:px-8 lg:px-11 py-6 sm:py-7 md:py-8">
          <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] md:tracking-[0.35em] text-neutral-400">
            Recent articles
          </span>
          <button
            type="button"
            className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.16em] md:tracking-[0.2em] text-orange-600 hover:text-orange-700 transition-colors"
          >
            View all →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2">
          {loading ? (
            <ArticlesSkeleton />
          ) : (
            blogs.slice(0, 6).map((item) => (
              <motion.div
                key={item.url_handle}
                variants={fadeUp}
                onClick={() => navigateToBlog(item.url_handle)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && navigateToBlog(item.url_handle)}
                className="group flex cursor-pointer items-start gap-4 md:gap-5 px-4 sm:px-6 md:px-8 lg:px-11 py-5 md:py-7 transition-colors duration-200 hover:bg-neutral-50 border-b border-neutral-100 sm:border-b-0 sm:border-r border-neutral-200 last:border-r-0"
              >
                <img
                  src={item.image_url}
                  referrerPolicy="no-referrer"
                  alt={item.title}
                  loading="lazy"
                  className="h-16 w-16 shrink-0 rounded-sm object-cover transition-opacity duration-300"
                />
                <div className="flex-1">
                  <p className="mb-1.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-orange-600">
                    {item.tags?.[0] ?? "Blog"}
                  </p>
                  <p className="mb-1.5 text-[13px] sm:text-[14px] md:text-[15px] font-extrabold leading-[1.28] sm:leading-[1.3] tracking-[-0.01em] text-neutral-500 transition-colors duration-200 group-hover:text-neutral-900">
                    {item.title}
                  </p>
                  <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.12em] text-neutral-400">
                    {item.author} · {readTime(item.word_count)}
                  </p>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </motion.div>

      {/* ── Quote Band ── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 lg:gap-12 border-y border-neutral-200 bg-neutral-50 px-4 sm:px-6 md:px-8 lg:px-11 py-8 sm:py-10 md:py-12 lg:py-14"
      >
        <div className="shrink-0 text-[60px] sm:text-[70px] md:text-[80px] font-black leading-[0.7] text-orange-500/10 -mt-2 font-serif" aria-hidden="true">
          &ldquo;
        </div>
        <p className="flex-1 font-serif text-[17px] sm:text-[20px] md:text-[23px] lg:text-[26px] italic leading-normal text-neutral-400">
          The best thinking I&apos;ve done in years happened{" "}
          <em className="text-neutral-700">away from my desk</em> — surrounded by founders asking the same hard questions.
        </p>
        <div className="min-w-0 sm:min-w-36 md:min-w-40 text-left md:text-right">
          <p className="mb-1 text-[12px] sm:text-[13px] font-bold text-neutral-900">Priya Nair</p>
          <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.14em] sm:tracking-[0.18em] text-neutral-400">
            Founder · Oslo 2024
          </p>
        </div>
      </motion.div>

      {/* ── Three Grid ── */}
      <div className="border-b border-neutral-200">
        <motion.div
          key={`grid-${gridPage}`}
          variants={stagger}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
        >
          {loading ? (
            <GridSkeleton />
          ) : gridCards.length === 0 ? (
            <div className="col-span-3 py-20 text-center text-[13px] text-neutral-400">
              No articles found.
            </div>
          ) : (
            gridCards.map((card) => (
              <motion.div
                key={card._id}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onClick={() => navigateToBlog(card.url_handle)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && navigateToBlog(card.url_handle)}
                className="group cursor-pointer border-t-2 border-transparent bg-neutral-50 p-6 sm:p-7 md:p-8 transition-all duration-300 hover:border-t-orange-500 hover:bg-white hover:shadow-lg hover:shadow-orange-500/[0.04] border-r border-neutral-200 last:border-r-0"
              >
                <img
                  src={card.image_url}
                  referrerPolicy="no-referrer"
                  alt={card.title}
                  loading="lazy"
                  className="mb-4 sm:mb-5 h-32 md:h-36 w-full rounded-sm object-cover opacity-60 transition-opacity duration-300 group-hover:opacity-80"
                />
                <p className="mb-2 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.22em] sm:tracking-[0.28em] text-orange-600">
                  {card.tag}
                </p>
                <p className="mb-2.5 text-[14px] sm:text-[15px] md:text-base font-extrabold tracking-[-0.015em] leading-[1.28] sm:leading-[1.3] text-neutral-700 group-hover:text-orange-600 transition-colors duration-300">
                  {card.title}
                </p>
                <p className="mb-4 text-[12px] sm:text-[13px] md:text-[14px] leading-[1.68] sm:leading-[1.7] text-neutral-400 line-clamp-3">
                  {card.excerpt}
                </p>
                <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.12em] text-neutral-400">
                  {readTime(card.word_count)}
                </p>
              </motion.div>
            ))
          )}
        </motion.div>

        {/* Pagination controls */}
        {!loading && totalPages > 1 && (
          <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-11 py-4 sm:py-5 border-t border-neutral-100">
            <motion.button
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setGridPage((p) => Math.max(0, p - 1))}
              disabled={gridPage === 0}
              className="flex items-center gap-2 px-4 py-2 rounded-sm border border-neutral-200 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] text-neutral-400 hover:border-neutral-300 hover:text-neutral-700 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Prev
            </motion.button>

            <div className="flex items-center gap-1.5">
              {Array.from({ length: totalPages }).map((_, i) => (
                <motion.button
                  key={i}
                  type="button"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setGridPage(i)}
                  aria-label={`Page ${i + 1}`}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    i === gridPage
                      ? "bg-orange-500 scale-125"
                      : "bg-neutral-300 hover:bg-neutral-400"
                  }`}
                />
              ))}
            </div>

            <motion.button
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setGridPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={gridPage === totalPages - 1}
              className="flex items-center gap-2 px-4 py-2 rounded-sm border border-neutral-200 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] text-neutral-400 hover:border-neutral-300 hover:text-neutral-700 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              Next
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        )}
      </div>

      {/* ── Topics ── */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="border-y border-neutral-200 px-4 sm:px-6 md:px-8 lg:px-11 py-8 sm:py-9 md:py-10 lg:py-12"
      >
        <p className="mb-5 md:mb-6 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.28em] md:tracking-[0.35em] text-neutral-500">
          Browse by topic
        </p>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {TOPICS.map((t) => (
            <motion.button
              key={t.name}
              type="button"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="flex cursor-pointer items-center gap-1.5 sm:gap-2 rounded-sm border border-neutral-200 bg-white px-3.5 sm:px-4 py-2 sm:py-2.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.12em] sm:tracking-[0.15em] text-neutral-400 transition-all duration-200 hover:border-orange-500/30 hover:text-orange-600 hover:bg-orange-50/30"
            >
              {t.name}
              <span className="text-[8px] sm:text-[9px] text-neutral-300">{t.count}</span>
            </motion.button>
          ))}
        </div>
      </motion.div> */}

      {/* ── Newsletter ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 border-t border-neutral-200 bg-white px-4 sm:px-6 md:px-8 lg:px-11 py-10 sm:py-12 md:py-14 lg:py-16 items-center"
      >
        <div>
          <p className="mb-3 sm:mb-3.5 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.28em] md:tracking-[0.35em] text-neutral-500">
            Stay sharp
          </p>
          <h3 className="mb-3 text-[26px] sm:text-[28px] md:text-[31px] lg:text-[34px] font-black leading-[1.1] tracking-[-0.03em] text-neutral-900">
            Field notes,<br />direct to inbox.
          </h3>
          <p className="text-[12px] sm:text-[13px] md:text-[14px] leading-[1.75] sm:leading-[1.8] text-neutral-500">
            One email a week. Honest writing on building better, thinking clearer, and going further — from founders who&apos;ve done the work.
          </p>
        </div>
        <div className="flex flex-col gap-2.5">
          <div className="flex flex-col xs:flex-row gap-2 xs:gap-0">
            <input
              type="email"
              aria-label="Email address"
              className="flex-1 border border-neutral-200 bg-neutral-50 px-4 py-3 sm:py-3.5 text-[13px] sm:text-[14px] text-neutral-900 outline-none font-sans placeholder:text-neutral-400 focus:border-orange-500 focus:ring-1 focus:ring-orange-500/10 transition-all rounded-sm"
              placeholder="your@email.com"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="shrink-0 bg-neutral-900 px-5 sm:px-6 py-3 sm:py-3.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] sm:tracking-[0.22em] text-white hover:bg-orange-600 transition-colors rounded-sm"
            >
              Subscribe
            </motion.button>
          </div>
          <p className="text-[9px] sm:text-[10px] tracking-wider text-neutral-400">
            No spam. Unsubscribe any time. 2,400+ founders already in.
          </p>
        </div>
      </motion.div>

    </div>
  );
}