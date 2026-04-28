import { motion } from "framer-motion";

export default function InsideRetreat() {
  const sessions = [
    {
      num: "01",
      title: "Deep Work & Reflection",
      desc: "Uninterrupted sessions built to cut through noise and produce real, lasting clarity.",
      tag: "Core",
    },
    {
      num: "02",
      title: "Bottleneck Analysis",
      desc: "Pinpoint exactly what's blocking your growth — then build a plan to remove it.",
      tag: "Workshop",
    },
    {
      num: "03",
      title: "Meaningful Conversations",
      desc: "Small groups, real founders, real problems. No pitching. Just depth.",
      tag: "Community",
    },
    {
      num: "04",
      title: "Clarity & Execution Plan",
      desc: "Leave with a concrete 90-day plan — decisions made, actions defined, no vague goals.",
      tag: "Output",
    },
  ];

  const forList = [
    "First-time and early-stage founders",
    "Builders seeking clarity and direction",
    "Founders tired of shallow networking",
    "Serious individuals ready to grow",
  ];

  return (
    <section
      id="inside-retreat"
      className="bg-[#050505] px-6 md:px-11 py-18 md:py-28 font-[family-name:var(--font-sans)] text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* ── Header ── */}
        <div className="mb-20 md:mb-28 grid grid-cols-1 md:grid-cols-2 md:items-end gap-10 md:gap-0">
          {/* Left Column */}
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-6 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.4em] text-emerald-400"
            >
              <div className="h-px w-5 bg-emerald-400" />
              What happens inside
            </motion.p>

            {/* Proper H2 wrapper for semantics */}
            <h2 className="text-[clamp(2.5rem,6vw,64px)] font-black leading-[0.88] tracking-[-0.04em]">
              {/* Line 1 */}
              <div className="">
                <motion.span
                  initial={{ y: "105%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                  className="block text-white/[0.9]"
                >
                  Inside
                </motion.span>
              </div>

              {/* Line 2 (The bridge) */}
              <div className=" flex items-baseline gap-3 md:gap-5">
                <motion.span
                  initial={{ y: "105%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.1,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  className="block text-white/[0.35]" // Upped from 0.2 so it reads intentionally, not broken
                >
                  the
                </motion.span>
                <motion.span
                  initial={{ y: "105%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.15,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  className="block text-emerald-400 font-normal italic" // Italic makes the slash feel like punctuation, not a button
                >
                  /
                </motion.span>
              </div>

              {/* Line 3 */}
              <div className="">
                <motion.span
                  initial={{ y: "105%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  className="block text-white/[0.9]"
                >
                  retreat.
                </motion.span>
              </div>
            </h2>
          </div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="md:pb-3 md:pl-14"
          >
            <div className="border-l border-white/[0.08] pl-6">
              <p className="text-[15px] leading-[1.85] text-white/[0.5]">
                Four focused experiences. Zero filler. Designed for founders who
                need real momentum — not another conference badge.
              </p>
              {/* Subtle bottom detail to anchor the right side */}
              <div className="mt-6 flex items-center gap-2 text-white/[0.3]">
                <div className="h-px w-4 bg-current" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em]">
                  Scroll to explore
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Sessions List (Expanding Rows) ── */}
        <div className="mb-24 flex flex-col border-t border-white/[0.06]">
          {sessions.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group cursor-pointer border-b border-white/[0.06] transition-all duration-500 hover:bg-white/[0.02]"
            >
              {/* Main Row */}
              <div className="flex items-baseline gap-6 md:gap-12 py-7 md:py-8 px-4 md:px-0">
                <span className="min-w-[30px] font-mono text-[12px] font-bold tracking-[0.2em] text-white/40 group-hover:text-emerald-400/50 transition-colors duration-300">
                  {s.num}
                </span>

                <h3 className="flex-1 text-[clamp(1.5rem,3vw,32px)] font-extrabold tracking-[-0.025em] text-white/[0.85] group-hover:text-emerald-400 transition-colors duration-300">
                  {s.title}
                </h3>

                <span className="hidden sm:inline-block rounded-[2px] border border-white/[0.2] group-hover:border-emerald-400/30 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-white/40 group-hover:text-emerald-400/60 transition-all duration-300 min-w-[100px] text-center">
                  {s.tag}
                </span>
              </div>

              {/* Expanding Description (Hidden by default) */}
              <div className="grid grid-rows-[0fr] transition-all duration-500 ease-out group-hover:grid-rows-[1fr] opacity-0 group-hover:opacity-100">
                <div className="overflow-hidden">
                  <p className="pb-8 pl-[54px] md:pl-[90px] pr-8 text-[14px] leading-[1.75] text-white/50 max-w-2xl">
                    {s.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Bottom Panels ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[2px]">
          {/* Who this is for */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-[#0a0a0a] p-10 md:p-12 border border-white/[0.04] hover:border-white/[0.08] transition-colors duration-500"
          >
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-emerald-400/60" />

            <p className="mb-10 text-[11px] font-bold uppercase tracking-[0.4em] text-emerald-400">
              Who this is for
            </p>

            <div className="space-y-0">
              {forList.map((text, i) => (
                <motion.div
                  key={text}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                  className="group/item flex items-center gap-4 border-b border-white/[0.04] py-5 last:border-b-0"
                >
                  <span className="h-px w-4 shrink-0 bg-emerald-400/40 group-hover/item:w-8 transition-all duration-300" />
                  <span className="text-[15px] tracking-[0.01em] text-white/40 group-hover/item:text-white/60 transition-colors duration-300">
                    {text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Panel */}
          <motion.a
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="group relative overflow-hidden bg-emerald-400 p-10 md:p-12 flex flex-col justify-between min-h-[320px] transition-colors duration-300 hover:bg-emerald-300"
          >
            {/* Background Texture Grid */}
            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />

            <div className="relative z-10">
              <p className="mb-8 text-[11px] font-bold uppercase tracking-[0.35em] text-black/40">
                A word on fit
              </p>
              <h3 className="text-[clamp(1.8rem,4vw,40px)] font-black leading-[1.05] tracking-[-0.03em] text-black/80">
                Not for passive
                <br />
                attendees.
              </h3>
              <p className="mt-5 max-w-[300px] text-[14px] leading-[1.75] text-black/30">
                This demands presence and honesty. If you're here to collect
                cards and coast — this isn't for you.
              </p>
            </div>

            <div className="relative z-10 mt-10 flex items-center justify-between">
              <span className="text-[12px] font-bold uppercase tracking-[0.25em] text-black/60 group-hover:text-black/80 transition-colors">
                Apply for a spot
              </span>

              <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-black/20 group-hover:border-black/40 group-hover:scale-110 transition-all duration-300">
                <svg
                  className="-rotate-45"
                  width="16"
                  height="16"
                  viewBox="0 0 10 10"
                  fill="none"
                >
                  <path
                    d="M2 8L8 2M8 2H3M8 2v5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    className="text-black/60"
                  />
                </svg>
              </div>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
