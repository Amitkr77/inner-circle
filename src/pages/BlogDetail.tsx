import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const tocItems = [
  { num: "01", text: "The motion trap", active: false },
  { num: "02", text: "What progress actually looks like", active: true },
  { num: "03", text: "How to break the cycle", active: false },
];

type Article = {
  title: string;
  tags: string[];
  excerpt: string;
  created_at: string;
  word_count: number;
  author: string;
  image_url: string;
};

const shareButtons = [
  {
    icon: (
      <svg className="h-4 w-4 opacity-40" viewBox="0 0 16 16" fill="none">
        <path
          d="M2 4h12M2 8h8M2 12h5"
          stroke="#fff"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    ),
    label: "Copy link",
  },
  {
    icon: (
      <svg className="h-4 w-4 opacity-40" viewBox="0 0 16 16" fill="none">
        <path
          d="M14 2L9 14l-2.5-5.5L1 6l13-4z"
          stroke="#fff"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "Twitter / X",
  },
  {
    icon: (
      <svg className="h-4 w-4 opacity-40" viewBox="0 0 16 16" fill="none">
        <rect
          x="2"
          y="2"
          width="12"
          height="12"
          rx="3"
          stroke="#fff"
          strokeWidth="1.2"
        />
        <path
          d="M6 8h4M8 6v4"
          stroke="#fff"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    ),
    label: "LinkedIn",
  },
];

const relatedMini = [
  {
    img: "https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?auto=format&fit=crop&q=80&w=200",
    tag: "Execution",
    title: "The single metric that matters",
    slug: "the-single-metric-that-matters",
  },
  {
    img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=200",
    tag: "Deep Work",
    title: "Solitude is a competitive advantage",
    slug: "solitude-is-a-competitive-advantage",
  },
  {
    img: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=200",
    tag: "Retreats",
    title: "What 48 hours in the Alps taught me",
    slug: "what-48-hours-in-the-alps-taught-me",
  },
];

const relatedCards = [
  {
    img: "https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&q=80&w=600",
    tag: "Mindset",
    title: "On sitting with uncertainty",
    meta: "4 min · Aug 2024",
    slug: "on-sitting-with-uncertainty",
  },
  {
    img: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&q=80&w=600",
    tag: "Retreats",
    title: "Norway field report — 72 hours",
    meta: "8 min · Jun 2024",
    slug: "norway-field-report-72-hours",
  },
  {
    img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=600",
    tag: "Community",
    title: "The people in the room change everything",
    meta: "6 min · Dec 2024",
    slug: "the-people-in-the-room",
  },
];

const motionSigns = [
  "Your week is full but your quarterly goals haven't moved in 30 days",
  "You feel productive at 6pm but can't name one decision you made that day",
  'Your most important work keeps getting pushed to "next week"',
];

function SectionHead({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-4 mt-11 flex items-center gap-3 text-lg font-extrabold tracking-[-0.02em] text-white/85">
      <span className="block h-0.5 w-4 shrink-0 bg-emerald-400" />
      {children}
    </h2>
  );
}

function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-10 border-l-2 border-emerald-400 py-1 pl-7">
      <p className="font-serif text-2xl italic leading-normal text-white/80">
        {children}
      </p>
    </div>
  );
}

// Derive initials from a plain author string — "Blog Team" → "BT"
function getInitials(name: string): string {
  return name
    .split(" ")
    .map((w) => w[0] ?? "")
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function BlogDetail() {
  
  const { url_handle } = useParams<{ url_handle: string }>();
  console.log(url_handle);

  const navigate = useNavigate();

  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  console.log(article);

  useEffect(() => {
    if (!url_handle) {
      console.log("url not found");
    }

    fetch(`https://caster-backend.onrender.com/api/blog/handle/${url_handle}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("FULL API RESPONSE:", data);

        if (data.success && data.data) {
          setArticle(data.data);
        } else {
          console.warn("Invalid response:", data);
          setArticle(null);
        }
      })
      .catch((err) => {
        console.error("FETCH ERROR:", err);
        setArticle(null);
      })
      .finally(() => setLoading(false));
  }, [url_handle]);

  if (loading) {
    return <div className="text-white p-10">Loading...</div>;
  }

  if (!article) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#050505] text-white gap-4">
        <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-400">
          404
        </p>
        <h1 className="text-3xl font-black tracking-tight">
          Article not found
        </h1>
        <button
          onClick={() => navigate("/blog")}
          className="mt-4 bg-emerald-400 px-6 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-black"
        >
          Back to Journal
        </button>
      </div>
    );
  }

  // ── Computed from plain API shape ──────────────────────────────────
  const authorName = article.author ?? "Author";
  const authorInitials = getInitials(authorName);
  const readTime = `${Math.ceil((article.word_count ?? 0) / 200)} min read`;
  const formattedDate = new Date(article.created_at).toLocaleDateString(
    "en-US",
    {
      month: "short",
      year: "numeric",
    },
  );
  const primaryTag = (article.tags ?? [])[0] ?? "Article";
  const articleTags = article.tags ?? [];

  const breadcrumbs = [
    { text: "Journal", active: false, path: "/blog" },
    { text: primaryTag, active: false, path: "/blog" },
    { text: article.title, active: true, path: null },
  ];

  return (
    <div className="mx-auto max-w-7xl overflow-hidden bg-[#050505] font-sans text-white pt-28">
      {/* ── Breadcrumb ── */}
      <div className="flex items-center gap-2.5 border-b border-white/6 px-11 py-5">
        {breadcrumbs.map((bc, i) => (
          <span key={i} className="flex items-center gap-2.5">
            {i > 0 && <span className="text-[10px] text-white/12">/</span>}
            <span
              onClick={() => bc.path && navigate(bc.path)}
              className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-200 ${
                bc.active
                  ? "text-white/45"
                  : "cursor-pointer text-white/20 hover:text-white/45"
              }`}
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
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.2)_0%,rgba(5,5,5,0.98)_100%)]" />
        <div className="absolute bottom-0 left-0 right-0 px-11 pb-14">
          {/* Tag pills */}
          <div className="mb-5 flex items-center gap-2.5">
            {articleTags.map((tag, i) => (
              <span
                key={tag}
                className={`rounded-xs border px-3 py-1 text-[9px] font-bold uppercase tracking-[0.3em] ${
                  i === 0
                    ? "border-emerald-400/30 text-emerald-400"
                    : "border-white/10 text-white/20"
                }`}
              >
                {tag}
              </span>
            ))}
            <span className="rounded-xs border border-white/10 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.3em] text-white/20">
              {readTime}
            </span>
            <span className="rounded-xs border border-white/10 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.3em] text-white/20">
              Featured
            </span>
          </div>

          <h1 className="mb-6 max-w-180 text-[48px] font-black leading-[0.95] tracking-[-0.04em]">
            {article.title}
          </h1>

          {/* Author + meta */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-full border border-emerald-400/30 bg-[#1a3a2a] text-[10px] font-bold text-emerald-400">
                {authorInitials}
              </div>
              <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/45">
                {authorName}
              </span>
            </div>
            {[formattedDate, readTime].map((item) => (
              <span key={item} className="flex items-center gap-4">
                <span className="h-0.75 w-0.75 rounded-full bg-white/20" />
                <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/25">
                  {item}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Layout: Article + Sidebar ── */}
      <div className="grid grid-cols-[1fr_280px] border-t border-white/[0.07]">
        {/* Article body */}
        <div className="border-r border-white/[0.07] px-11 pb-20 pr-14 pt-14">
          <p className="mb-10 border-b border-white/[0.07] pb-10 text-xl leading-[1.7] text-white/50">
            {article.excerpt}
          </p>

          <p className="mb-7 text-[15px] leading-[1.9] text-white/38">
            Most founders I've sat with in our retreats arrive carrying this
            exact weight. They've confused the texture of work — the meetings,
            the decks, the DMs — with the substance of progress.{" "}
            <strong className="font-bold text-white/65">
              Motion feels like momentum. It rarely is.
            </strong>
          </p>

          <p className="mb-7 text-[15px] leading-[1.9] text-white/38">
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

          <p className="mb-7 text-[15px] leading-[1.9] text-white/38">
            Motion is seductive because it feels productive. Responding to every
            email is motion. Attending every meeting is motion. Rewriting the
            pitch deck for the fourth time is motion. None of it is inherently
            progress — and all of it can consume an entire week without moving
            your company a single inch forward.
          </p>

          <p className="mb-7 text-[15px] leading-[1.9] text-white/38">
            <strong className="font-bold text-white/65">
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
          <p className="mb-10 text-[11px] font-semibold uppercase tracking-widest text-white/15">
            Swiss Alps retreat, March 2025 — where space to think changes
            everything
          </p>

          <div className="my-8 rounded border border-white/[0.07] bg-[#0d0d0d] p-7">
            <p className="mb-4 text-[9px] font-bold uppercase tracking-[0.3em] text-emerald-400">
              Three signs you're in the motion trap
            </p>
            {motionSigns.map((sign) => (
              <div
                key={sign}
                className="flex items-start gap-3 border-b border-white/6 py-2.5 last:border-b-0"
              >
                <span className="mt-1.5 h-1.25 w-1.25 shrink-0 rounded-full bg-emerald-400" />
                <span className="text-[13px] leading-[1.6] text-white/42">
                  {sign}
                </span>
              </div>
            ))}
          </div>

          <SectionHead>What progress actually looks like</SectionHead>

          <p className="mb-7 text-[15px] leading-[1.9] text-white/38">
            In three days at our Switzerland retreat, founders do less than in a
            typical Monday. No Slack. No calls. No emails. Just structured
            thinking time, small-group conversation, and long walks. By day two,
            something shifts.{" "}
            <strong className="font-bold text-white/65">
              The important problems surface on their own.
            </strong>
          </p>

          <p className="mb-7 text-[15px] leading-[1.9] text-white/38">
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

          <p className="mb-7 text-[15px] leading-[1.9] text-white/38">
            You don't need a retreat to start. You need a single honest question
            at the start of each week:{" "}
            <strong className="font-bold text-white/65">
              what is the one thing that, if I moved it forward this week, would
              actually matter in six months?
            </strong>{" "}
            Write it down. Put it first. Protect it like a meeting you can't
            cancel.
          </p>

          <p className="mb-7 text-[15px] leading-[1.9] text-white/38">
            Everything else — every request, every meeting, every distraction —
            gets evaluated against that question. Most of it won't survive the
            filter. And that's the point. The goal isn't to do more. It's to do
            less, better, with full attention.
          </p>

          <PullQuote>
            "Motion is cheap. Progress is rare. That's what makes it worth
            protecting."
          </PullQuote>

          <p className="mb-7 text-[15px] leading-[1.9] text-white/38">
            The founders who consistently build something real aren't
            superhuman. They've just learned to be ruthless about what gets
            their best hours — and to stop mistaking a full calendar for a
            well-spent day.
          </p>

          {/* Tags */}
          <div className="mt-12 flex flex-wrap gap-2 border-t border-white/[0.07] pt-8">
            {articleTags.map((tag) => (
              <div
                key={tag}
                className="cursor-pointer rounded-xs border border-white/10 px-3.5 py-1.75 text-[9px] font-bold uppercase tracking-[0.2em] text-white/25 transition-all duration-200 hover:border-emerald-400/30 hover:text-emerald-400"
              >
                {tag}
              </div>
            ))}
          </div>

          {/* Author Card — author is a plain string, no nested object */}
          <div className="mt-12 rounded border border-white/[0.07] bg-[#0d0d0d] p-6">
            <div className="mb-4 flex items-center gap-3.5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-emerald-400/30 bg-[#1a3a2a] text-sm font-extrabold text-emerald-400">
                {authorInitials}
              </div>
              <div>
                <p className="mb-0.5 text-[15px] font-extrabold text-white/85">
                  {authorName}
                </p>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/20">
                  Contributor
                </p>
              </div>
            </div>
            <p className="text-[13px] leading-[1.7] text-white/25">
              Writing on startups, execution, and the mindset required to build
              something that lasts.
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="px-7 py-10">
          <p className="mb-5 text-[9px] font-bold uppercase tracking-[0.32em] text-white/15">
            In this article
          </p>
          <div className="mb-10 flex flex-col">
            {tocItems.map((item) => (
              <div
                key={item.num}
                className={`flex cursor-pointer items-start gap-2.5 border-b border-white/5 py-3 transition-colors duration-200 hover:text-emerald-400 ${
                  item.active ? "text-emerald-400" : "text-white/30"
                }`}
              >
                <span className="min-w-4.5 pt-px text-[10px] font-bold">
                  {item.num}
                </span>
                <span className="text-[13px] font-bold leading-[1.4]">
                  {item.text}
                </span>
              </div>
            ))}
          </div>

          <div className="my-7 h-px bg-white/[0.07]" />

          <div className="mb-10 rounded border border-white/[0.07] bg-[#0d0d0d] p-5">
            <p className="mb-2.5 text-[9px] font-bold uppercase tracking-[0.28em] text-white/15">
              Reading progress
            </p>
            <div className="h-0.75 overflow-hidden rounded-full bg-white/8">
              <div className="h-full w-[38%] rounded-full bg-emerald-400" />
            </div>
            <p className="mt-2 text-[12px] font-bold text-emerald-400">
              38% through
            </p>
          </div>

          <p className="mb-5 text-[9px] font-bold uppercase tracking-[0.32em] text-white/15">
            Share
          </p>
          <div className="mb-10 flex flex-col gap-1.5">
            {shareButtons.map((btn) => (
              <div
                key={btn.label}
                className="flex cursor-pointer items-center gap-2.5 rounded-xs border border-white/8 px-3.5 py-2.5 transition-all duration-200 hover:border-white/18 hover:bg-white/2"
              >
                {btn.icon}
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/25">
                  {btn.label}
                </span>
              </div>
            ))}
          </div>

          <div className="my-7 h-px bg-white/[0.07]" />

          <p className="mb-5 text-[9px] font-bold uppercase tracking-[0.32em] text-white/15">
            Read next
          </p>
          <div className="flex flex-col">
            {relatedMini.map((item) => (
              <div
                key={item.title}
                onClick={() => navigate(`/blog/${item.slug}`)}
                className="flex cursor-pointer items-start gap-3 border-b border-white/6 py-3.5 last:border-b-0 hover:opacity-70 transition-opacity"
              >
                <img
                  src={item.img}
                  referrerPolicy="no-referrer"
                  alt=""
                  className="h-13 w-13 shrink-0 rounded object-cover opacity-40"
                />
                <div>
                  <p className="mb-1 text-[9px] font-bold uppercase tracking-[0.22em] text-emerald-400">
                    {item.tag}
                  </p>
                  <p className="text-[13px] font-bold leading-[1.3] text-white/40">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Related ── */}
      <div className="border-t border-white/[0.07] px-11 py-14">
        <div className="mb-10 flex items-center justify-between">
          <span className="text-[11px] font-bold uppercase tracking-[0.35em] text-white/15">
            More from the journal
          </span>
          <span
            onClick={() => navigate("/blog")}
            className="cursor-pointer text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-400"
          >
            View all →
          </span>
        </div>
        <div className="grid grid-cols-3 gap-0.5">
          {relatedCards.map((card) => (
            <div
              key={card.title}
              onClick={() => navigate(`/blog/${card.slug}`)}
              className="group cursor-pointer border-t-2 border-transparent bg-[#0d0d0d] transition-colors duration-200 hover:border-t-emerald-400"
            >
              <img
                src={card.img}
                referrerPolicy="no-referrer"
                alt=""
                className="block h-42.5 w-full object-cover opacity-40 transition-opacity duration-300 group-hover:opacity-55"
              />
              <div className="p-5">
                <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.25em] text-emerald-400">
                  {card.tag}
                </p>
                <p className="mb-2 text-[15px] font-extrabold leading-[1.3] tracking-[-0.01em] text-white/70">
                  {card.title}
                </p>
                <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/15">
                  {card.meta}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Newsletter ── */}
      <div className="flex items-center justify-between gap-8 border-t border-white/[0.07] bg-[#0a0a0a] px-11 py-12">
        <div>
          <p className="mb-2.5 text-[11px] font-bold uppercase tracking-[0.35em] text-white/12">
            Stay sharp
          </p>
          <h3 className="text-2xl font-black tracking-[-0.02em] text-white/80">
            Field notes, direct to inbox.
          </h3>
        </div>
        <div className="flex">
          <input
            className="w-60 border border-white/10 bg-[#0d0d0d] px-4.5 py-3 font-sans text-[13px] text-white/40 outline-none placeholder:text-white/12"
            placeholder="your@email.com"
          />
          <button className="shrink-0 bg-emerald-400 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-black">
            Subscribe
          </button>
        </div>
      </div>

      {/* ── Footer ── */}
      <div className="flex items-center justify-between border-t border-white/[0.07] px-11 py-7">
        <span className="text-[12px] font-extrabold uppercase tracking-[0.2em] text-white/20">
          Basecamp © 2025
        </span>
        <div className="flex gap-6">
          {["Privacy", "Terms", "Contact"].map((link) => (
            <span
              key={link}
              className="cursor-pointer text-[10px] font-bold uppercase tracking-[0.18em] text-white/15"
            >
              {link}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
