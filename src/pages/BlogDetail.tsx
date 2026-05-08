import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import type { Variants } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Article = {
  title: string;
  tags: string[];
  excerpt: string;
  content: string;
  created_at: string;
  word_count: number;
  author: string;
  image_url: string;
  url_handle: string;
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

const shareButtons = [
  {
    label: "Copy link",
    type: "copy",
    icon: (
      <svg className="h-4 w-4 text-neutral-400" viewBox="0 0 16 16" fill="none">
        <path
          d="M2 4h12M2 8h8M2 12h5"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    type: "twitter",
    icon: (
      <svg className="h-4 w-4 text-neutral-400" viewBox="0 0 16 16" fill="none">
        <path
          d="M14 2L9 14l-2.5-5.5L1 6l13-4z"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    type: "linkedin",
    icon: (
      <svg className="h-4 w-4 text-neutral-400" viewBox="0 0 16 16" fill="none">
        <rect
          x="2"
          y="2"
          width="12"
          height="12"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <path
          d="M6 8h4M8 6v4"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((w) => w[0] ?? "")
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function Skeleton({ className }: { className?: string }) {
  return (
    <div className={`rounded-sm animate-pulse bg-neutral-200 ${className}`} />
  );
}

function RelatedMiniSkeleton() {
  return (
    <>
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="flex items-start gap-3 py-3.5 border-b border-neutral-100"
        >
          <Skeleton className="h-14 w-14 shrink-0 rounded-sm" />
          <div className="flex-1 flex flex-col gap-2 pt-1">
            <Skeleton className="h-2 w-14" />
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-3/4" />
          </div>
        </div>
      ))}
    </>
  );
}

function RelatedCardSkeleton() {
  return (
    <>
      {[1, 2, 3].map((i) => (
        <div key={i} className="bg-neutral-50">
          <Skeleton className="h-40 w-full" />
          <div className="p-5 flex flex-col gap-2">
            <Skeleton className="h-2 w-16" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-2 w-20" />
          </div>
        </div>
      ))}
    </>
  );
}

export default function BlogDetail() {
  const { url_handle } = useParams<{ url_handle: string }>();
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);

  const [progress, setProgress] = useState(0);
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [relatedMini, setRelatedMini] = useState<Article[]>([]);
  const [relatedCards, setRelatedCards] = useState<Article[]>([]);
  const [relatedLoading, setRelatedLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  // Scroll progress
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.15], [0, 50]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!url_handle) return;
    setLoading(true);
    fetch(`https://caster-backend.onrender.com/api/blog/handle/${url_handle}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data) setArticle(data.data);
        else setArticle(null);
      })
      .catch(() => setArticle(null))
      .finally(() => setLoading(false));
  }, [url_handle]);

  useEffect(() => {
    setRelatedLoading(true);
    fetch("https://caster-backend.onrender.com/api/blog")
      .then((res) => res.json())
      .then((data) => {
        const all: Article[] = Array.isArray(data)
          ? data
          : Array.isArray(data.data)
            ? data.data
            : [];
        const others = all.filter((a) => a.url_handle !== url_handle);
        const shuffled = others.sort(() => Math.random() - 0.5);
        setRelatedMini(shuffled.slice(0, 3));
        setRelatedCards(shuffled.slice(3, 6));
      })
      .catch(() => {
        setRelatedMini([]);
        setRelatedCards([]);
      })
      .finally(() => setRelatedLoading(false));
  }, [url_handle]);

  const handleShare = (type: string) => {
    const url = window.location.href;
    if (type === "copy") {
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
    if (type === "twitter") {
      window.open(
        `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(article?.title || "")}`,
        "_blank",
      );
    }
    if (type === "linkedin") {
      window.open(
        `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
        "_blank",
      );
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-4">
          <div className="h-8 w-8 rounded-full border-2 border-t-transparent animate-spin border-orange-500" />
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-400">
            Loading article…
          </p>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-white">
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-orange-600">
          404
        </p>
        <h1 className="text-3xl font-black tracking-tight text-neutral-900">
          Article not found
        </h1>
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate("/blog")}
          className="mt-4 px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] bg-neutral-900 text-white rounded-sm hover:bg-neutral-800 transition-colors"
        >
          Back to Journal
        </motion.button>
      </div>
    );
  }

  const authorName = article.author ?? "Author";
  const authorInitials = getInitials(authorName);
  const readTime = `${Math.ceil((article.word_count ?? 0) / 200)} min read`;
  const formattedDate = new Date(article.created_at).toLocaleDateString(
    "en-US",
    { month: "short", year: "numeric" },
  );
  const primaryTag = (article.tags ?? [])[0] ?? "Article";
  const articleTags = article.tags ?? [];

  const breadcrumbs = [
    { text: "Journal", active: false, path: "/blog" },
    { text: primaryTag, active: false, path: "/blog" },
    {
      text:
        article.title.length > 40
          ? article.title.slice(0, 40) + "…"
          : article.title,
      active: true,
      path: null,
    },
  ];

  return (
    <div className="mx-auto max-w-7xl font-sans pt-28 sm:pt-32 bg-white text-neutral-900">
      {/* ── Breadcrumb ── */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2 sm:gap-2.5  py-4 sm:py-5 border-b border-neutral-200"
      >
        {breadcrumbs.map((bc, i) => (
          <span key={i} className="flex items-center gap-2 sm:gap-2.5">
            {i > 0 && <span className="text-[10px] text-neutral-300">/</span>}
            <span
              onClick={() => bc.path && navigate(bc.path)}
              className={`text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] transition-colors duration-200 ${bc.active ? "text-neutral-600" : "cursor-pointer text-neutral-400 hover:text-neutral-600"}`}
            >
              {bc.text}
            </span>
          </span>
        ))}
      </motion.div>

      {/* ── Hero Image ── */}
      <motion.div
        ref={heroRef}
        style={{ y: heroY }}
        className="relative h-[400px] sm:h-[500px] lg:h-[560px] overflow-hidden"
      >
        <img
          src={article.image_url}
          referrerPolicy="no-referrer"
          alt=""
          className="absolute inset-0 h-full w-full object-cover "
        />
        <motion.div
          style={{ opacity: heroOpacity }}
          className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent"
        />
        <div className="absolute bottom-0 left-0 right-0 px-5 sm:px-8 md:px-11 pb-10 sm:pb-14">
          {/* Tag pills */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mb-4 sm:mb-5 flex flex-wrap items-center gap-2 sm:gap-2.5"
          >
            {articleTags.slice(0, 3).map((tag, i) => (
              <span
                key={tag}
                className={`rounded-sm border px-2.5 sm:px-3 py-1 text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] ${
                  i === 0
                    ? "border-orange-500/30 bg-orange-50 text-orange-600"
                    : "border-neutral-300 text-neutral-400 bg-white/80 backdrop-blur-sm"
                }`}
              >
                {tag}
              </span>
            ))}
            <span className="rounded-sm border border-neutral-300 px-2.5 sm:px-3 py-1 text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-neutral-400 bg-white/80 backdrop-blur-sm">
              {readTime}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-5 sm:mb-6 max-w-4xl text-[clamp(2rem,5vw,3rem)] font-black leading-[0.95] tracking-[-0.04em] text-neutral-900"
          >
            {article.title}
          </motion.h1>

          {/* Author + meta */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-wrap items-center gap-3 sm:gap-4"
          >
            <div className="flex items-center gap-2 sm:gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-full border text-[10px] font-bold border-orange-500/30 bg-orange-50 text-orange-600">
                {authorInitials}
              </div>
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.12em] sm:tracking-[0.15em] text-neutral-500">
                {authorName}
              </span>
            </div>
            {[formattedDate, readTime].map((item) => (
              <span key={item} className="flex items-center gap-3 sm:gap-4">
                <span className="h-0.5 w-0.5 rounded-full bg-neutral-300" />
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.12em] sm:tracking-[0.15em] text-neutral-500">
                  {item}
                </span>
              </span>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* ── Layout: Article + Sidebar ── */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] xl:grid-cols-[1fr_300px] items-start border-t border-neutral-200">
        {/* Article body */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="px-5 sm:px-8 md:px-11 pb-16 sm:pb-20 lg:pr-10 xl:pr-14 pt-10 sm:pt-14 lg:border-r border-neutral-200"
        >
          <p className="mb-8 sm:mb-10 pb-8 sm:pb-10 text-[16px] sm:text-xl leading-[1.7] text-neutral-500 border-b border-neutral-200">
            {article.excerpt}
          </p>

          {/* Article content */}
          {/* <div
            className="prose prose-neutral max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
            style={{
              fontSize: "15px",
              lineHeight: "1.9",
              color: "rgba(0,0,0,0.75)",
            }}
          /> */}

          <div className="prose prose-neutral max-w-none text-[15px] leading-[1.9] text-black/75">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {article.content}
            </ReactMarkdown>
          </div>

          {/* Tags */}
          <div className="mt-10 sm:mt-12 flex flex-wrap gap-2 pt-6 sm:pt-8 border-t border-neutral-200">
            {articleTags.map((tag) => (
              <motion.button
                key={tag}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="cursor-pointer rounded-sm border border-neutral-200 bg-white px-3 sm:px-3.5 py-1.5 sm:py-1.75 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-neutral-400 transition-all duration-200 hover:border-orange-500/30 hover:text-orange-600 hover:bg-orange-50/30"
              >
                {tag}
              </motion.button>
            ))}
          </div>

          {/* Author Card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-10 sm:mt-12 rounded-sm border border-neutral-200 bg-neutral-50 p-5 sm:p-6"
          >
            <div className="mb-4 flex items-center gap-3 sm:gap-3.5">
              <motion.div
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="flex h-10 sm:h-11 w-10 sm:w-11 shrink-0 items-center justify-center rounded-full border border-orange-500/30 bg-orange-50 text-sm sm:text-base font-extrabold text-orange-600"
              >
                {authorInitials}
              </motion.div>
              <div>
                <p className="mb-0.5 text-[14px] sm:text-[15px] font-extrabold text-neutral-900">
                  {authorName}
                </p>
                <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.18em] text-neutral-400">
                  Contributor
                </p>
              </div>
            </div>
            <p className="text-[13px] sm:text-[14px] leading-[1.7] text-neutral-500">
              Writing on startups, execution, and the mindset required to build
              something that lasts.
            </p>
          </motion.div>
        </motion.div>

        {/* ── Sidebar ── */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="px-5 sm:px-6 lg:px-7 py-8 sm:py-10 lg:sticky lg:top-24 lg:self-start lg:h-[calc(100vh-96px)] "
        >
          {/* Reading Progress */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mb-6 sm:mb-8 rounded-sm border border-neutral-200 bg-neutral-50 p-4 sm:p-5"
          >
            <p className="mb-2 sm:mb-2.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.28em] text-neutral-400">
              Reading progress
            </p>
            <div className="h-1.5 overflow-hidden rounded-full bg-orange-100">
              <motion.div
                className="h-full rounded-full bg-orange-500"
                style={{ width: `${progress}%` }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
              />
            </div>
            <p className="mt-2 text-[11px] sm:text-[12px] font-bold text-orange-600">
              {Math.round(progress)}% through
            </p>
          </motion.div>

          {/* Share */}
          <p className="mb-4 sm:mb-5 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.25em] sm:tracking-[0.32em] text-neutral-400">
            Share
          </p>
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="mb-6 sm:mb-10 flex flex-col gap-1.5"
          >
            {shareButtons.map((btn) => (
              <motion.button
                key={btn.label}
                variants={fadeUp}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleShare(btn.type)}
                className="flex items-center gap-2.5 rounded-sm border border-neutral-200 px-3 sm:px-3.5 py-2 sm:py-2.5 transition-all duration-200 hover:border-orange-500/30 hover:bg-orange-50/30 w-full text-left"
              >
                {btn.icon}
                <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.18em] text-neutral-400">
                  {btn.type === "copy" && copied ? "Copied!" : btn.label}
                </span>
              </motion.button>
            ))}
          </motion.div>

          <div className="my-5 sm:my-7 h-px bg-neutral-200" />

          {/* Read Next */}
          <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.25em] sm:tracking-[0.32em] text-neutral-400 mb-3 sm:mb-4">
            Read next
          </p>
          <div className="flex flex-col">
            {relatedLoading ? (
              <RelatedMiniSkeleton />
            ) : relatedMini.length === 0 ? (
              <p className="text-[11px] text-neutral-300">
                No related articles found.
              </p>
            ) : (
              relatedMini.map((item, i) => (
                <motion.div
                  key={item.url_handle}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + i * 0.1, duration: 0.5 }}
                  onClick={() => navigate(`/blog/${item.url_handle}`)}
                  className="flex cursor-pointer items-start gap-3 py-3 sm:py-3.5 border-b border-neutral-100 last:border-b-0 hover:bg-neutral-50 -mx-2 px-2 rounded-sm transition-colors duration-200"
                >
                  <img
                    src={item.image_url}
                    referrerPolicy="no-referrer"
                    alt=""
                    className="h-12 sm:h-14 w-12 sm:w-14 shrink-0 rounded-sm object-cover opacity-60"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="mb-1 text-[9px] font-bold uppercase tracking-[0.18em] sm:tracking-[0.22em] text-orange-600">
                      {(item.tags ?? [])[0] ?? "Article"}
                    </p>
                    <p className="text-[12px] sm:text-[13px] font-bold leading-[1.3] line-clamp-2 text-neutral-500">
                      {item.title}
                    </p>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </motion.div>
      </div>

      {/* ── Related Cards ── */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="px-5 sm:px-8 md:px-11 py-10 sm:py-14 border-t border-neutral-200"
      >
        <div className="mb-8 sm:mb-10 flex items-center justify-between">
          <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em] sm:tracking-[0.35em] text-neutral-400">
            More from the journal
          </span>
          <motion.span
            whileHover={{ x: 4 }}
            onClick={() => navigate("/blog")}
            className="cursor-pointer text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-orange-600 hover:text-orange-700 transition-colors"
          >
            View all →
          </motion.span>
        </div>
        <motion.div
          variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5"
        >
          {relatedLoading ? (
            <RelatedCardSkeleton />
          ) : relatedCards.length === 0 ? (
            <p className="col-span-full text-[13px] text-neutral-300 text-center py-12">
              No related articles found.
            </p>
          ) : (
            relatedCards.map((card) => (
              <motion.div
                key={card.url_handle}
                variants={scaleIn}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                onClick={() => navigate(`/blog/${card.url_handle}`)}
                className="group cursor-pointer border-t-2 border-transparent bg-neutral-50 rounded-sm overflow-hidden transition-all duration-300 hover:border-t-orange-500 hover:bg-white hover:shadow-lg hover:shadow-orange-500/[0.04]"
              >
                <img
                  src={card.image_url}
                  referrerPolicy="no-referrer"
                  alt=""
                  className="block h-36 sm:h-42 w-full object-cover opacity-60 transition-opacity duration-300 group-hover:opacity-80"
                />
                <div className="p-4 sm:p-5">
                  <p className="mb-2 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-orange-600">
                    {(card.tags ?? [])[0] ?? "Article"}
                  </p>
                  <p className="mb-2 text-[14px] sm:text-[15px] font-extrabold leading-[1.3] tracking-[-0.01em] line-clamp-2 text-neutral-700 group-hover:text-orange-600 transition-colors duration-300">
                    {card.title}
                  </p>
                  <p className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.12em] sm:tracking-[0.14em] text-neutral-400">
                    {Math.ceil((card.word_count ?? 0) / 200)} min ·{" "}
                    {new Date(card.created_at).toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </motion.div>
            ))
          )}
        </motion.div>
      </motion.div>

      {/* ── Newsletter ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-8 px-5 sm:px-8 md:px-11 py-10 sm:py-12 border-t border-neutral-200 bg-neutral-50"
      >
        <div>
          <p className="mb-2 sm:mb-2.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em] sm:tracking-[0.35em] text-neutral-400">
            Stay sharp
          </p>
          <h3 className="text-xl sm:text-2xl font-black tracking-[-0.02em] text-neutral-800">
            Field notes, direct to inbox.
          </h3>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 w-full sm:w-auto">
          <input
            className="flex-1 sm:w-60 border border-neutral-200 bg-white px-4 py-3 sm:py-3.5 font-sans text-[13px] sm:text-[14px] text-neutral-900 outline-none placeholder:text-neutral-400 focus:border-orange-500 focus:ring-1 focus:ring-orange-500/10 transition-all rounded-sm"
            placeholder="your@email.com"
          />
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="shrink-0 bg-neutral-900 px-5 sm:px-6 py-3 sm:py-3.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white hover:bg-orange-600 transition-colors rounded-sm"
          >
            Subscribe
          </motion.button>
        </div>
      </motion.div>

      {/* ── Footer ── */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 px-5 sm:px-8 md:px-11 py-6 sm:py-7 border-t border-neutral-200">
        <span className="text-[11px] sm:text-[12px] font-extrabold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-neutral-400">
          Basecamp © 2025
        </span>
        <div className="flex gap-4 sm:gap-6">
          {["Privacy", "Terms", "Contact"].map((link) => (
            <motion.span
              key={link}
              whileHover={{ y: -1 }}
              className="cursor-pointer text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.18em] text-neutral-400 hover:text-neutral-600 transition-colors"
            >
              {link}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
}
