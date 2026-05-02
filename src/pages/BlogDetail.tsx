import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

type Article = {
  title: string;
  tags: string[];
  excerpt: string;
  created_at: string;
  word_count: number;
  author: string;
  image_url: string;
  url_handle: string;
};

// const tocItems = [
//   { num: "01", text: "The motion trap", active: false },
//   { num: "02", text: "What progress actually looks like", active: true },
//   { num: "03", text: "How to break the cycle", active: false },
// ];

const shareButtons = [
  {
    label: "Copy link",
    type: "copy",
    icon: (
      <svg className="h-4 w-4 opacity-40" viewBox="0 0 16 16" fill="none">
        <path
          d="M2 4h12M2 8h8M2 12h5"
          stroke="rgba(255,255,255,0.90)"
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
      <svg className="h-4 w-4 opacity-40" viewBox="0 0 16 16" fill="none">
        <path
          d="M14 2L9 14l-2.5-5.5L1 6l13-4z"
          stroke="rgba(255,255,255,0.90)"
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
      <svg className="h-4 w-4 opacity-40" viewBox="0 0 16 16" fill="none">
        <rect
          x="2"
          y="2"
          width="12"
          height="12"
          rx="3"
          stroke="rgba(255,255,255,0.90)"
          strokeWidth="1.2"
        />
        <path
          d="M6 8h4M8 6v4"
          stroke="rgba(255,255,255,0.90)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

// const motionSigns = [
//   "Your week is full but your quarterly goals haven't moved in 30 days",
//   "You feel productive at 6pm but can't name one decision you made that day",
//   'Your most important work keeps getting pushed to "next week"',
// ];

// function SectionHead({ children }: { children: React.ReactNode }) {
//   return (
//     <h2
//       className="mb-4 mt-11 flex items-center gap-3 text-lg font-extrabold tracking-[-0.02em]"
//       style={{ color: "rgba(255,255,255,0.90)" }}
//     >
//       <span
//         className="block h-0.5 w-4 shrink-0"
//         style={{ backgroundColor: "#4ADE80" }}
//       />
//       {children}
//     </h2>
//   );
// }

// function PullQuote({ children }: { children: React.ReactNode }) {
//   return (
//     <div
//       className="my-10 border-l-2 py-1 pl-7"
//       style={{ borderColor: "#4ADE80" }}
//     >
//       <p
//         className="font-serif text-2xl italic leading-normal"
//         style={{ color: "rgba(255,255,255,0.75)" }}
//       >
//         {children}
//       </p>
//     </div>
//   );
// }

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((w) => w[0] ?? "")
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

// Skeleton loader for related mini items
function RelatedMiniSkeleton() {
  return (
    <>
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="flex items-start gap-3 py-3.5"
          style={{ borderBottom: "1px solid rgba(74, 222, 128, 0.22)" }}
        >
          <div
            className="h-13 w-13 shrink-0 rounded animate-pulse"
            style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
          />
          <div className="flex-1 flex flex-col gap-2 pt-1">
            <div
              className="h-2 w-12 rounded animate-pulse"
              style={{ backgroundColor: "rgba(74,222,128,0.15)" }}
            />
            <div
              className="h-3 w-full rounded animate-pulse"
              style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
            />
            <div
              className="h-3 w-3/4 rounded animate-pulse"
              style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
            />
          </div>
        </div>
      ))}
    </>
  );
}

// Skeleton loader for related cards
function RelatedCardSkeleton() {
  return (
    <>
      {[1, 2, 3].map((i) => (
        <div key={i} style={{ backgroundColor: "#111812" }}>
          <div
            className="h-42 w-full animate-pulse"
            style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
          />
          <div className="p-5 flex flex-col gap-2">
            <div
              className="h-2 w-14 rounded animate-pulse"
              style={{ backgroundColor: "rgba(74,222,128,0.15)" }}
            />
            <div
              className="h-4 w-full rounded animate-pulse"
              style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
            />
            <div
              className="h-2 w-20 rounded animate-pulse"
              style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
            />
          </div>
        </div>
      ))}
    </>
  );
}

export default function BlogDetail() {
  const { url_handle } = useParams<{ url_handle: string }>();
  const navigate = useNavigate();

  const [progress, setProgress] = useState(0);
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  // Dynamic related posts state
  const [relatedMini, setRelatedMini] = useState<Article[]>([]);
  const [relatedCards, setRelatedCards] = useState<Article[]>([]);
  const [relatedLoading, setRelatedLoading] = useState(true);

  // Scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)));
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fetch main article
  useEffect(() => {
    if (!url_handle) return;
    setLoading(true);
    fetch(`https://caster-backend.onrender.com/api/blog/handle/${url_handle}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.data) {
          setArticle(data.data);
        } else {
          setArticle(null);
        }
      })
      .catch(() => setArticle(null))
      .finally(() => setLoading(false));
  }, [url_handle]);

  // Fetch related posts — all blogs, exclude current, pick 6 (3 mini + 3 cards)
  useEffect(() => {
    setRelatedLoading(true);
    fetch("https://caster-backend.onrender.com/api/blog")
      .then((res) => res.json())
      .then((data) => {
        // Support both { data: [...] } and direct array responses
        const all: Article[] = Array.isArray(data)
          ? data
          : Array.isArray(data.data)
            ? data.data
            : [];

        // Exclude the current article
        const others = all.filter((a) => a.url_handle !== url_handle);

        // Shuffle for variety
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
      alert("Link copied!");
    }
    if (type === "twitter") {
      const text = article?.title || "Check this out";
      window.open(
        `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
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

  // ── Loading state ──
  if (loading) {
    return (
      <div
        className="flex min-h-screen items-center justify-center"
        style={{ backgroundColor: "#0A0F0C", color: "rgba(255,255,255,0.90)" }}
      >
        <div className="flex flex-col items-center gap-4">
          <div
            className="h-8 w-8 rounded-full border-2 border-t-transparent animate-spin"
            style={{ borderColor: "#4ADE80", borderTopColor: "transparent" }}
          />
          <p
            className="text-[10px] font-bold uppercase tracking-[0.3em]"
            style={{ color: "rgba(255,255,255,0.40)" }}
          >
            Loading article…
          </p>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div
        className="flex min-h-screen flex-col items-center justify-center gap-4"
        style={{ backgroundColor: "#0A0F0C", color: "rgba(255,255,255,0.90)" }}
      >
        <p
          className="text-[10px] font-bold uppercase tracking-[0.3em]"
          style={{ color: "#4ADE80" }}
        >
          404
        </p>
        <h1 className="text-3xl font-black tracking-tight">
          Article not found
        </h1>
        <button
          onClick={() => navigate("/blog")}
          className="mt-4 px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em]"
          style={{ backgroundColor: "#4ADE80", color: "#0A0F0C" }}
        >
          Back to Journal
        </button>
      </div>
    );
  }

  // ── Computed ──
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
    { text: article.title, active: true, path: null },
  ];

  return (
    <div
      className="mx-auto max-w-7xl font-sans pt-28"
      style={{ backgroundColor: "#0A0F0C", color: "rgba(255,255,255,0.90)" }}
    >
      {/* ── Breadcrumb ── */}
      <div
        className="flex items-center gap-2.5 px-11 py-5"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.40)" }}
      >
        {breadcrumbs.map((bc, i) => (
          <span key={i} className="flex items-center gap-2.5">
            {i > 0 && (
              <span
                className="text-[10px]"
                style={{ color: "rgba(255,255,255,0.40)" }}
              >
                /
              </span>
            )}
            <span
              onClick={() => bc.path && navigate(bc.path)}
              className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-200 ${
                bc.active ? "" : "cursor-pointer hover:opacity-70"
              }`}
              style={{ color: "rgba(255,255,255,0.40)" }}
            >
              {bc.text}
            </span>
          </span>
        ))}
      </div>

      {/* ── Hero Image ── */}
      <div className="relative h-140 overflow-hidden">
        <img
          src={article.image_url}
          referrerPolicy="no-referrer"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,15,12,0.2) 0%, rgba(10,15,12,0.98) 100%)",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 px-11 pb-14">
          {/* Tag pills */}
          <div className="mb-5 flex items-center gap-2.5">
            {articleTags.map((tag, i) => (
              <span
                key={tag}
                className="rounded-xs border px-3 py-1 text-[9px] font-bold uppercase tracking-[0.3em]"
                style={{
                  borderColor:
                    i === 0
                      ? "rgba(74, 222, 128, 0.22)"
                      : "rgba(255,255,255,0.40)",
                  color: i === 0 ? "#4ADE80" : "rgba(255,255,255,0.40)",
                }}
              >
                {tag}
              </span>
            ))}
            <span
              className="rounded-xs border px-3 py-1 text-[9px] font-bold uppercase tracking-[0.3em]"
              style={{
                borderColor: "rgba(255,255,255,0.40)",
                color: "rgba(255,255,255,0.40)",
              }}
            >
              {readTime}
            </span>
            <span
              className="rounded-xs border px-3 py-1 text-[9px] font-bold uppercase tracking-[0.3em]"
              style={{
                borderColor: "rgba(255,255,255,0.40)",
                color: "rgba(255,255,255,0.40)",
              }}
            >
              Featured
            </span>
          </div>

          <h1 className="mb-6 max-w-180 text-[48px] font-black leading-[0.95] tracking-[-0.04em]">
            {article.title}
          </h1>

          {/* Author + meta */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2.5">
              <div
                className="flex h-7 w-7 items-center justify-center rounded-full border text-[10px] font-bold"
                style={{
                  borderColor: "rgba(74, 222, 128, 0.22)",
                  backgroundColor: "rgba(74, 222, 128, 0.12)",
                  color: "#4ADE80",
                }}
              >
                {authorInitials}
              </div>
              <span
                className="text-[11px] font-bold uppercase tracking-[0.15em]"
                style={{ color: "rgba(255,255,255,0.40)" }}
              >
                {authorName}
              </span>
            </div>
            {[formattedDate, readTime].map((item) => (
              <span key={item} className="flex items-center gap-4">
                <span
                  className="h-0.75 w-0.75 rounded-full"
                  style={{ backgroundColor: "rgba(255,255,255,0.40)" }}
                />
                <span
                  className="text-[11px] font-bold uppercase tracking-[0.15em]"
                  style={{ color: "rgba(255,255,255,0.40)" }}
                >
                  {item}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Layout: Article + Sidebar ── */}
      <div
        className="grid grid-cols-[1fr_280px] items-start"
        style={{ borderTop: "1px solid rgba(74, 222, 128, 0.22)" }}
      >
        {/* Article body */}
        <div
          className="px-11 pb-20 pr-14 pt-14"
          style={{ borderRight: "1px solid rgba(74, 222, 128, 0.22)" }}
        >
          <p
            className="mb-10 pb-10 text-xl leading-[1.7]"
            style={{
              borderBottom: "1px solid rgba(74, 222, 128, 0.22)",
              color: "rgba(255,255,255,0.60)",
            }}
          >
            {article.excerpt}
          </p>

          {/* <p
            className="mb-7 text-[15px] leading-[1.9]"
            style={{ color: "rgba(255,255,255,0.40)" }}
          >
            Most founders I've sat with in our retreats arrive carrying this
            exact weight. They've confused the texture of work — the meetings,
            the decks, the DMs — with the substance of progress.{" "}
            <strong
              className="font-bold"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              Motion feels like momentum. It rarely is.
            </strong>
          </p>

          <p
            className="mb-7 text-[15px] leading-[1.9]"
            style={{ color: "rgba(255,255,255,0.40)" }}
          >
            The distinction matters more than almost anything else in building.
            Because once you can feel the difference, you stop rewarding
            yourself for being busy and start asking the only question that
            matters: is this moving the needle, or just filling the hours?
          </p>

          <PullQuote>
            "The founders who build something real aren't the ones who work the
            most hours. They're the ones who work on the right thing — and have
            the discipline to stop doing everything else."
          </PullQuote>

          <SectionHead>The motion trap</SectionHead>

          <p
            className="mb-7 text-[15px] leading-[1.9]"
            style={{ color: "rgba(255,255,255,0.40)" }}
          >
            Motion is seductive because it feels productive. Responding to every
            email is motion. Attending every meeting is motion. Rewriting the
            pitch deck for the fourth time is motion. None of it is inherently
            progress — and all of it can consume an entire week without moving
            your company a single inch forward.
          </p>

          <p
            className="mb-7 text-[15px] leading-[1.9]"
            style={{ color: "rgba(255,255,255,0.40)" }}
          >
            <strong
              className="font-bold"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              Progress, by contrast, is uncomfortable.
            </strong>{" "}
            It requires sitting with a hard problem longer than feels
            reasonable. It means saying no to requests that seem urgent but
            aren't important. It demands a level of focus that modern work
            culture actively discourages.
          </p>

          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=900"
            referrerPolicy="no-referrer"
            alt=""
            className="mb-2 mt-10 block h-75 w-full rounded object-cover opacity-45"
          />
          <p
            className="mb-10 text-[11px] font-semibold uppercase tracking-widest"
            style={{ color: "rgba(255,255,255,0.40)" }}
          >
            Swiss Alps retreat, March 2025 — where space to think changes
            everything
          </p>

          <div
            className="my-8 rounded border p-7"
            style={{
              borderColor: "rgba(74, 222, 128, 0.22)",
              backgroundColor: "#111812",
            }}
          >
            <p
              className="mb-4 text-[9px] font-bold uppercase tracking-[0.3em]"
              style={{ color: "#4ADE80" }}
            >
              Three signs you're in the motion trap
            </p>
            {motionSigns.map((sign) => (
              <div
                key={sign}
                className="flex items-start gap-3 py-2.5 last:border-b-0"
                style={{ borderBottom: "1px solid rgba(74, 222, 128, 0.22)" }}
              >
                <span
                  className="mt-1.5 h-1.25 w-1.25 shrink-0 rounded-full"
                  style={{ backgroundColor: "#4ADE80" }}
                />
                <span
                  className="text-[13px] leading-[1.6]"
                  style={{ color: "rgba(255,255,255,0.40)" }}
                >
                  {sign}
                </span>
              </div>
            ))}
          </div> */}

          {/* <SectionHead>What progress actually looks like</SectionHead>

          <p
            className="mb-7 text-[15px] leading-[1.9]"
            style={{ color: "rgba(255,255,255,0.40)" }}
          >
            In three days at our Switzerland retreat, founders do less than in a
            typical Monday. No Slack. No calls. No emails. Just structured
            thinking time, small-group conversation, and long walks. By day two,
            something shifts.{" "}
            <strong
              className="font-bold"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              The important problems surface on their own.
            </strong>
          </p>

          <p
            className="mb-7 text-[15px] leading-[1.9]"
            style={{ color: "rgba(255,255,255,0.40)" }}
          >
            That's not a coincidence. When you remove the noise, the signal gets
            loud. The real bottleneck — the one you've been avoiding because
            it's hard or uncomfortable — becomes impossible to ignore.
          </p>

          <div className="mb-10 mt-10 grid grid-cols-2 gap-2">
            <img
              src="https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&q=80&w=600"
              referrerPolicy="no-referrer"
              alt=""
              className="h-55 w-full rounded object-cover opacity-40"
            />
            <img
              src="https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&q=80&w=600"
              referrerPolicy="no-referrer"
              alt=""
              className="h-55 w-full rounded object-cover opacity-40"
            />
          </div>

          <SectionHead>How to break the cycle</SectionHead>

          <p
            className="mb-7 text-[15px] leading-[1.9]"
            style={{ color: "rgba(255,255,255,0.40)" }}
          >
            You don't need a retreat to start. You need a single honest question
            at the start of each week:{" "}
            <strong
              className="font-bold"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              what is the one thing that, if I moved it forward this week, would
              actually matter in six months?
            </strong>{" "}
            Write it down. Put it first. Protect it like a meeting you can't
            cancel.
          </p> */}

          {/* <p
            className="mb-7 text-[15px] leading-[1.9]"
            style={{ color: "rgba(255,255,255,0.40)" }}
          >
            Everything else — every request, every meeting, every distraction —
            gets evaluated against that question. Most of it won't survive the
            filter. And that's the point. The goal isn't to do more. It's to do
            less, better, with full attention.
          </p> */}

          {/* <PullQuote>
            "Motion is cheap. Progress is rare. That's what makes it worth
            protecting."
          </PullQuote> */}

          {/* <p
            className="mb-7 text-[15px] leading-[1.9]"
            style={{ color: "rgba(255,255,255,0.40)" }}
          >
            The founders who consistently build something real aren't
            superhuman. They've just learned to be ruthless about what gets
            their best hours — and to stop mistaking a full calendar for a
            well-spent day.
          </p> */}

          {/* Tags */}
          <div
            className="mt-12 flex flex-wrap gap-2 pt-8"
            style={{ borderTop: "1px solid rgba(74, 222, 128, 0.22)" }}
          >
            {articleTags.map((tag) => (
              <div
                key={tag}
                className="cursor-pointer rounded-xs border px-3.5 py-1.75 text-[9px] font-bold uppercase tracking-[0.2em] transition-all duration-200 hover:border-green-400 hover:text-green-400"
                style={{
                  borderColor: "rgba(255,255,255,0.40)",
                  color: "rgba(255,255,255,0.40)",
                }}
              >
                {tag}
              </div>
            ))}
          </div>

          {/* Author Card */}
          <div
            className="mt-12 rounded border p-6"
            style={{
              borderColor: "rgba(74, 222, 128, 0.22)",
              backgroundColor: "#111812",
            }}
          >
            <div className="mb-4 flex items-center gap-3.5">
              <div
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border text-sm font-extrabold"
                style={{
                  borderColor: "rgba(74, 222, 128, 0.22)",
                  backgroundColor: "rgba(74, 222, 128, 0.12)",
                  color: "#4ADE80",
                }}
              >
                {authorInitials}
              </div>
              <div>
                <p
                  className="mb-0.5 text-[15px] font-extrabold"
                  style={{ color: "rgba(255,255,255,0.90)" }}
                >
                  {authorName}
                </p>
                <p
                  className="text-[10px] font-bold uppercase tracking-[0.18em]"
                  style={{ color: "rgba(255,255,255,0.40)" }}
                >
                  Contributor
                </p>
              </div>
            </div>
            <p
              className="text-[13px] leading-[1.7]"
              style={{ color: "rgba(255,255,255,0.40)" }}
            >
              Writing on startups, execution, and the mindset required to build
              something that lasts.
            </p>
          </div>
        </div>

        {/* ── Sidebar ── */}
        <div className="px-7 py-10 sticky top-24 self-start h-[calc(100vh-96px)] overflow-y-auto">
          {/* Reading Progress */}
          <div
            className="mb-8 rounded border p-5"
            style={{
              borderColor: "rgba(74, 222, 128, 0.22)",
              backgroundColor: "#111812",
            }}
          >
            <p
              className="mb-2.5 text-[9px] font-bold uppercase tracking-[0.28em]"
              style={{ color: "rgba(255,255,255,0.40)" }}
            >
              Reading progress
            </p>
            <div
              className="h-0.75 overflow-hidden rounded-full"
              style={{ backgroundColor: "rgba(74, 222, 128, 0.12)" }}
            >
              <div
                className="h-full rounded-full transition-all duration-150"
                style={{ width: `${progress}%`, backgroundColor: "#4ADE80" }}
              />
            </div>
            <p
              className="mt-2 text-[12px] font-bold"
              style={{ color: "#4ADE80" }}
            >
              {Math.round(progress)}% through
            </p>
          </div>

          {/* Share */}
          <p
            className="mb-5 text-[9px] font-bold uppercase tracking-[0.32em]"
            style={{ color: "rgba(255,255,255,0.40)" }}
          >
            Share
          </p>
          <div className="mb-10 flex flex-col gap-1.5">
            {shareButtons.map((btn) => (
              <div
                key={btn.label}
                onClick={() => handleShare(btn.type)}
                className="flex cursor-pointer items-center gap-2.5 rounded-xs border px-3.5 py-2.5 transition-all duration-200 hover:border-green-400/40"
                style={{ borderColor: "rgba(74, 222, 128, 0.22)" }}
              >
                {btn.icon}
                <span
                  className="text-[10px] font-bold uppercase tracking-[0.18em]"
                  style={{ color: "rgba(255,255,255,0.40)" }}
                >
                  {btn.label}
                </span>
              </div>
            ))}
          </div>

          <div
            className="my-7 h-px"
            style={{ backgroundColor: "rgba(74, 222, 128, 0.22)" }}
          />

          {/* Read Next — dynamic */}
          <p
            className=" text-[9px] font-bold uppercase tracking-[0.32em]"
            style={{ color: "rgba(255,255,255,0.40)" }}
          >
            Read next
          </p>
          <div className="flex flex-col">
            {relatedLoading ? (
              <RelatedMiniSkeleton />
            ) : relatedMini.length === 0 ? (
              <p
                className="text-[11px]"
                style={{ color: "rgba(255,255,255,0.30)" }}
              >
                No related articles found.
              </p>
            ) : (
              relatedMini.map((item) => (
                <div
                  key={item.url_handle}
                  onClick={() => navigate(`/blog/${item.url_handle}`)}
                  className="flex cursor-pointer items-start gap-3 py-3.5 last:border-b-0 hover:opacity-70 transition-opacity"
                  style={{ borderBottom: "1px solid rgba(74, 222, 128, 0.22)" }}
                >
                  <img
                    src={item.image_url}
                    referrerPolicy="no-referrer"
                    alt=""
                    className="h-13 w-13 shrink-0 rounded object-cover opacity-40"
                  />
                  <div>
                    <p
                      className="mb-1 text-[9px] font-bold uppercase tracking-[0.22em]"
                      style={{ color: "#4ADE80" }}
                    >
                      {(item.tags ?? [])[0] ?? "Article"}
                    </p>
                    <p
                      className="text-[13px] font-bold leading-[1.3] line-clamp-2"
                      style={{ color: "rgba(255,255,255,0.40)" }}
                    >
                      {item.title}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* ── Related Cards — dynamic ── */}
      <div
        className="px-11 py-14"
        style={{ borderTop: "1px solid rgba(74, 222, 128, 0.22)" }}
      >
        <div className="mb-10 flex items-center justify-between">
          <span
            className="text-[11px] font-bold uppercase tracking-[0.35em]"
            style={{ color: "rgba(255,255,255,0.40)" }}
          >
            More from the journal
          </span>
          <span
            onClick={() => navigate("/blog")}
            className="cursor-pointer text-[11px] font-bold uppercase tracking-[0.2em] hover:opacity-70 transition-opacity"
            style={{ color: "#4ADE80" }}
          >
            View all →
          </span>
        </div>
        <div className="grid grid-cols-3 gap-0.5">
          {relatedLoading ? (
            <RelatedCardSkeleton />
          ) : relatedCards.length === 0 ? (
            <p
              className="col-span-3 text-[13px]"
              style={{ color: "rgba(255,255,255,0.30)" }}
            >
              No related articles found.
            </p>
          ) : (
            relatedCards.map((card) => (
              <div
                key={card.url_handle}
                onClick={() => navigate(`/blog/${card.url_handle}`)}
                className="group cursor-pointer border-t-2 border-transparent transition-colors duration-200 hover:border-green-400/30"
                style={{ backgroundColor: "#111812" }}
              >
                <img
                  src={card.image_url}
                  referrerPolicy="no-referrer"
                  alt=""
                  className="block h-42.5 w-full object-cover opacity-40 transition-opacity duration-300 group-hover:opacity-55"
                />
                <div className="p-5">
                  <p
                    className="mb-2 text-[9px] font-bold uppercase tracking-[0.25em]"
                    style={{ color: "#4ADE80" }}
                  >
                    {(card.tags ?? [])[0] ?? "Article"}
                  </p>
                  <p
                    className="mb-2 text-[15px] font-extrabold leading-[1.3] tracking-[-0.01em] line-clamp-2"
                    style={{ color: "rgba(255,255,255,0.75)" }}
                  >
                    {card.title}
                  </p>
                  <p
                    className="text-[10px] font-bold uppercase tracking-[0.14em]"
                    style={{ color: "rgba(255,255,255,0.40)" }}
                  >
                    {Math.ceil((card.word_count ?? 0) / 200)} min ·{" "}
                    {new Date(card.created_at).toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* ── Newsletter ── */}
      <div
        className="flex items-center justify-between gap-8 px-11 py-12"
        style={{
          borderTop: "1px solid rgba(74, 222, 128, 0.22)",
          backgroundColor: "#111812",
        }}
      >
        <div>
          <p
            className="mb-2.5 text-[11px] font-bold uppercase tracking-[0.35em]"
            style={{ color: "rgba(255,255,255,0.40)" }}
          >
            Stay sharp
          </p>
          <h3
            className="text-2xl font-black tracking-[-0.02em]"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            Field notes, direct to inbox.
          </h3>
        </div>
        <div className="flex">
          <input
            className="w-60 border px-4.5 py-3 font-sans text-[13px] outline-none placeholder:opacity-100"
            style={{
              borderColor: "rgba(74, 222, 128, 0.22)",
              backgroundColor: "#172019",
              color: "rgba(255,255,255,0.40)",
            }}
            placeholder="your@email.com"
          />
          <button
            className="shrink-0 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.2em] hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#4ADE80", color: "#0A0F0C" }}
          >
            Subscribe
          </button>
        </div>
      </div>

      {/* ── Footer ── */}
      <div
        className="flex items-center justify-between px-11 py-7"
        style={{ borderTop: "1px solid rgba(74, 222, 128, 0.22)" }}
      >
        <span
          className="text-[12px] font-extrabold uppercase tracking-[0.2em]"
          style={{ color: "rgba(255,255,255,0.40)" }}
        >
          Basecamp © 2025
        </span>
        <div className="flex gap-6">
          {["Privacy", "Terms", "Contact"].map((link) => (
            <span
              key={link}
              className="cursor-pointer text-[10px] font-bold uppercase tracking-[0.18em] hover:opacity-70 transition-opacity"
              style={{ color: "rgba(255,255,255,0.40)" }}
            >
              {link}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
