"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { RESOURCES } from "../data/resources";

export default function ResourceDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const article = RESOURCES.find((item) => item.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-[#0D1210] text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-[10px] uppercase tracking-[0.5em] text-orange-400 mb-6">
            Not Found
          </p>
          <h1 className="text-[12rem] font-black leading-none tracking-tighter text-white/5 select-none">
            404
          </h1>
          <Link
            to="/resources"
            className="inline-flex items-center gap-3 text-white/40 hover:text-white text-[11px] uppercase tracking-[0.35em] transition-colors mt-10"
          >
            <ArrowLeft size={12} /> Return to Library
          </Link>
        </div>
      </div>
    );
  }

  const paragraphs = article.content
    .trim()
    .split("\n")
    .filter((l) => l.trim() !== "");
  const relatedArticles = RESOURCES.filter(
    (r) => r.slug !== slug && r.category === article.category,
  ).slice(0, 3);

  return (
    <>
      <div className="bg-[#FAFAF8] min-h-screen">
        {/* ── HERO: DARK SPLIT ── */}
        {/* ── Breadcrumb ── */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 sm:gap-2.5  py-4 sm:py-5 border-b border-neutral-200 mt-28 mx-auto max-w-7xl  "
        >
          {[
            { text: "Resources", active: false, path: "/resources" },
            {
              text:
                article.title.length > 40
                  ? article.title.slice(0, 40) + "…"
                  : article.title,
              active: true,
              path: null,
            },
          ].map((bc, i) => (
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
        <div className="relative bg-[#0D1210] overflow-hidden  max-w-7xl mx-auto ">
          {/* Split hero grid */}
          <div className="grid lg:grid-cols-[1fr_420px] min-h-[72vh]">
            {/* Left: title + meta */}
            <div className="flex flex-col justify-between p-8 sm:p-14 lg:p-20 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="flex-1 flex flex-col justify-center"
              >
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-10 h-px bg-orange-500" />
                  <span className="text-orange-500 text-[10px] uppercase tracking-[0.5em]">
                    {article.readTime}
                  </span>
                </div>

                <h1 className="text-white font-black leading-[0.83] tracking-[-0.05em] text-5xl sm:text-6xl xl:text-[5.5rem]">
                  {article.title}
                </h1>

                <p className="text-white/30 text-[1.05rem] leading-relaxed mt-10 max-w-md font-light">
                  {article.excerpt}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="mt-14 pt-8 border-t border-white/[0.07] flex items-center gap-5"
              >
                <div className="w-9 h-9 rounded-full bg-orange-500/15 border border-orange-500/25 flex items-center justify-center shrink-0">
                  <span className="text-orange-400 text-[10px] font-bold">
                    {article.author
                      ?.split(" ")
                      .map((w) => w[0])
                      .join("")
                      .slice(0, 2)}
                  </span>
                </div>
                <div>
                  <p className="text-white/75 text-sm font-medium">
                    {article.author}
                  </p>
                  <p className="text-white/25 text-[11px] tracking-widest uppercase mt-0.5">
                    {article.published}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right: image */}
            <div className="relative overflow-hidden hidden lg:block">
              <motion.img
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
                src={article.image}
                alt={article.title}
                className="absolute inset-0 w-full h-full object-cover opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0D1210] via-[#0D1210]/20 to-transparent" />
              <div className="absolute bottom-10 right-10 text-white/10 text-[9px] uppercase tracking-[0.8em] writing-mode-vertical-rl rotate-90 origin-bottom-right">
                {article.category}
              </div>
            </div>
          </div>
        </div>

        {/* ── CONTENT + SIDEBAR ── */}
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="lg:grid lg:grid-cols-[1fr_300px] lg:gap-20 relative">
            {/* ── ARTICLE BODY ── */}
            <div className="py-20 lg:py-28">
              {/* Oversized pull quote opener */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-20 flex items-start gap-5"
              >
                <span className="text-[6rem] leading-[0.55] text-orange-200 font-serif select-none shrink-0 mt-2">
                  &ldquo;
                </span>
                <p className="text-2xl sm:text-3xl font-serif italic text-neutral-700 leading-[1.4] tracking-tight">
                  {article.excerpt}
                </p>
              </motion.div>

              {/* Section divider */}
              <div className="flex items-center gap-5 mb-16">
                <div className="flex-1 h-px bg-neutral-200" />
                <span className="text-[10px] uppercase tracking-[0.5em] text-neutral-400">
                  Article
                </span>
                <div className="flex-1 h-px bg-neutral-200" />
              </div>

              {/* Body content */}
              <article>
                {paragraphs.map((para, i) => {
                  if (para.startsWith("# ")) {
                    return (
                      <h1
                        key={i}
                        className="text-4xl sm:text-5xl font-black tracking-[-0.04em] text-neutral-900 mt-24 mb-10 leading-[0.88]"
                      >
                        {para.replace("# ", "")}
                      </h1>
                    );
                  }
                  if (para.startsWith("## ")) {
                    return (
                      <div
                        key={i}
                        className="mt-20 mb-8 flex items-center gap-4"
                      >
                        <span className="w-4 h-4 bg-orange-500 shrink-0" />
                        <h2 className="text-2xl sm:text-3xl font-bold tracking-[-0.025em] text-neutral-900">
                          {para.replace("## ", "")}
                        </h2>
                      </div>
                    );
                  }
                  if (para.startsWith("### ")) {
                    return (
                      <h3
                        key={i}
                        className="text-lg font-bold text-neutral-800 mt-12 mb-4 uppercase tracking-[0.06em]"
                      >
                        {para.replace("### ", "")}
                      </h3>
                    );
                  }
                  if (para.startsWith("> ")) {
                    return (
                      <div
                        key={i}
                        className="my-14 bg-[#0D1210] px-10 py-9 relative overflow-hidden"
                      >
                        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-orange-500" />
                        <p className="text-white/75 text-xl font-serif italic leading-relaxed">
                          {para.replace("> ", "")}
                        </p>
                      </div>
                    );
                  }
                  if (para.startsWith("- ")) {
                    return (
                      <div key={i} className="flex items-start gap-4 my-4 pl-1">
                        <span className="text-orange-500 font-black text-base leading-7 shrink-0">
                          →
                        </span>
                        <p className="text-[1.1rem] leading-[1.85] text-neutral-500 font-light">
                          {para.replace("- ", "")}
                        </p>
                      </div>
                    );
                  }
                  if (para === "---") {
                    return (
                      <div key={i} className="py-12 flex items-center gap-4">
                        <div className="flex-1 h-px bg-neutral-200" />
                        <div className="flex gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-orange-400" />
                          <span className="w-1 h-1 rounded-full bg-orange-300" />
                          <span className="w-1 h-1 rounded-full bg-orange-200" />
                        </div>
                        <div className="flex-1 h-px bg-neutral-200" />
                      </div>
                    );
                  }
                  return (
                    <p
                      key={i}
                      className="text-[1.1rem] leading-[1.9] text-neutral-500 font-light mt-7"
                    >
                      {para}
                    </p>
                  );
                })}
              </article>

              {/* Article footer */}
              <div className="mt-24 pt-10 border-t border-neutral-200 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center">
                    <span className="text-orange-600 text-[10px] font-bold">
                      {article.author
                        ?.split(" ")
                        .map((w) => w[0])
                        .join("")
                        .slice(0, 2)}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-neutral-800">
                      {article.author}
                    </p>
                    <p className="text-xs text-neutral-400 uppercase tracking-widest mt-0.5">
                      {article.published}
                    </p>
                  </div>
                </div>
                <Link
                  to="/resources"
                  className="group inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-neutral-400 hover:text-neutral-900 transition-colors"
                >
                  All Articles{" "}
                  <ArrowUpRight
                    size={12}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </Link>
              </div>
            </div>

            {/* ── STICKY SIDEBAR ── */}
            <aside className="hidden lg:block">
              <div className="sticky top-10 py-28 space-y-10">
                {/* Meta */}
                <div className="border border-neutral-200 bg-white p-6">
                  <p className="text-[10px] uppercase tracking-[0.45em] text-neutral-400 mb-5">
                    About
                  </p>
                  <div className="space-y-4">
                    {[
                      { label: "Category", value: article.category },
                      { label: "Author", value: article.author },
                      { label: "Published", value: article.published },
                      { label: "Read time", value: article.readTime },
                    ].map(({ label, value }) => (
                      <div
                        key={label}
                        className="flex justify-between gap-4 items-start"
                      >
                        <span className="text-[11px] text-neutral-400 uppercase tracking-widest shrink-0">
                          {label}
                        </span>
                        <span className="text-[11px] text-neutral-700 font-semibold text-right">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Related */}
                {relatedArticles.length > 0 && (
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.45em] text-neutral-400 mb-5">
                      Related
                    </p>
                    <div className="space-y-4">
                      {relatedArticles.map((r) => (
                        <Link
                          key={r.slug}
                          to={`/resources/${r.slug}`}
                          className="group flex gap-3 items-start pb-4 border-b border-neutral-100 last:border-0 hover:border-orange-200 transition-colors"
                        >
                          <div className="w-12 h-12 shrink-0 overflow-hidden bg-neutral-100">
                            <img
                              src={r.image}
                              alt={r.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                          <div>
                            <p className="text-[12px] font-semibold text-neutral-700 leading-snug line-clamp-2 group-hover:text-orange-600 transition-colors">
                              {r.title}
                            </p>
                            <p className="text-[10px] text-neutral-400 mt-1 uppercase tracking-wider">
                              {r.readTime}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA block */}
                <div className="bg-[#0D1210] p-7 relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-28 h-28 border border-orange-500/10 rounded-full pointer-events-none" />
                  <div className="absolute -top-5 -right-5 w-14 h-14 border border-orange-500/15 rounded-full pointer-events-none" />
                  <p className="text-white/30 text-[10px] uppercase tracking-[0.45em] mb-2">
                    Explore more
                  </p>
                  <p className="text-white font-bold text-lg leading-tight mb-6">
                    Strategic Insights Library
                  </p>
                  <Link
                    to="/resources"
                    className="group inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white text-[11px] uppercase tracking-[0.3em] font-bold px-5 py-3 transition-colors"
                  >
                    View All{" "}
                    <ArrowUpRight
                      size={11}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* ── BOTTOM STRIP ── */}
        {/* <div className="bg-[#0D1210]">
          <div className="max-w-7xl mx-auto px-8 lg:px-16 py-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
            <div>
              <p className="text-white/20 text-[10px] uppercase tracking-[0.5em] mb-2">You've finished reading</p>
              <p className="text-white font-black text-2xl sm:text-3xl tracking-[-0.03em] leading-tight max-w-lg">
                {article.title}
              </p>
            </div>
            <Link to="/resources" className="group shrink-0 border border-white/10 hover:border-orange-500/60 px-7 py-4 text-white/50 hover:text-white transition-all duration-300 text-[11px] uppercase tracking-[0.3em] inline-flex items-center gap-3">
              <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
              Back to Library
            </Link>
          </div>
        </div> */}
      </div>
    </>
  );
}
