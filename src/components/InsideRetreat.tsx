import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
      className="bg-white px-5 sm:px-6 md:px-11 py-16 sm:py-20 md:py-28 font-[family-name:var(--font-sans)] text-neutral-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* ── Header ── */}
        <div className="mb-14 sm:mb-20 md:mb-28 grid grid-cols-1 md:grid-cols-2 md:items-end gap-8 sm:gap-10 md:gap-0">
          {/* Left Column */}
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-5 sm:mb-6 flex items-center gap-3 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-orange-500"
            >
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="h-px w-5 bg-orange-500 origin-left"
              />
              What happens inside
            </motion.p>

            <h2 className="text-[clamp(2rem,6vw,64px)] font-black leading-[0.88] tracking-[-0.04em]">
              {/* Line 1 */}
              <div className="">
                <motion.span
                  initial={{ y: "105%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                  className="block text-neutral-900"
                >
                  Inside
                </motion.span>
              </div>

              {/* Line 2 */}
              <div className="flex items-baseline gap-3 md:gap-5 ">
                <motion.span
                  initial={{ y: "105%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: 0.1,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  className="block text-neutral-300"
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
                  className="block text-orange-500 font-normal italic"
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
                  className="block text-neutral-900"
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
            <div className="border-l border-neutral-200 pl-5 sm:pl-6">
              <p className="text-[14px] sm:text-[15px] leading-[1.85] text-neutral-500">
                Four focused experiences. Zero filler. Designed for founders who
                need real momentum — not another conference badge.
              </p>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="mt-5 sm:mt-6 flex items-center gap-2 text-neutral-300"
              >
                <motion.div
                  animate={{ x: [0, 6, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                  }}
                  className="h-px w-4 bg-current"
                />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em]">
                  Scroll to explore
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* ── Sessions List (Expanding Rows) ── */}
        <div className="mb-16 sm:mb-24 flex flex-col border-t border-neutral-200">
          {sessions.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group cursor-pointer border-b border-neutral-200 relative transition-all duration-500 hover:bg-neutral-50"
            >
              {/* Left accent bar on hover */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-orange-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top" />

              {/* Main Row */}
              <div className="flex items-baseline gap-4 sm:gap-6 md:gap-12 py-6 sm:py-7 md:py-8 px-4 sm:px-5 md:px-5 relative">
                {/* Number */}
                <span className="min-w-[28px] sm:min-w-[30px] font-mono text-[11px] sm:text-[12px] font-bold tracking-[0.2em] text-neutral-300 group-hover:text-orange-500/70 transition-colors duration-300">
                  {s.num}
                </span>

                {/* Title */}
                <h3 className="flex-1 text-[clamp(1.25rem,3vw,32px)] font-extrabold tracking-[-0.025em] text-neutral-900 group-hover:text-orange-600 transition-all duration-300 group-hover:translate-x-2">
                  {s.title}
                </h3>

                {/* Tag pill */}
                <span className="hidden sm:inline-block rounded-[2px] border border-neutral-200 group-hover:border-orange-500/30 px-2.5 sm:px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-neutral-400 group-hover:text-orange-600/70 transition-all duration-300 min-w-[90px] sm:min-w-[100px] text-center group-hover:bg-orange-50">
                  {s.tag}
                </span>

                {/* Mobile expand chevron */}
                <motion.svg
                  className="sm:hidden w-4 h-4 text-neutral-300 group-hover:text-orange-500 group-hover:rotate-90 transition-all duration-300 absolute right-4 top-1/2 -translate-y-1/2"
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
                </motion.svg>
              </div>

              {/* Expanding Description */}
              <div className="grid grid-rows-[0fr] transition-all duration-500 ease-out group-hover:grid-rows-[1fr] opacity-0 group-hover:opacity-100">
                <div className="overflow-hidden">
                  <p className="pb-7 sm:pb-8 pl-[40px] sm:pl-[54px] md:pl-[90px] pr-6 sm:pr-8 text-[13px] sm:text-[14px] leading-[1.75] text-neutral-400 group-hover:text-neutral-500 max-w-2xl transition-colors duration-300">
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
            className="relative bg-neutral-50 p-8 sm:p-10 md:p-12 border border-neutral-200 hover:border-neutral-300 transition-all duration-500 hover:bg-neutral-100/60"
          >
            {/* Animated accent bar */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute left-0 top-0 bottom-0 w-[2px] bg-orange-500/70 origin-top"
            />

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mb-8 sm:mb-5 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-orange-600"
            >
              Who this is for
            </motion.p>

            <div className="space-y-0">
              {forList.map((text, i) => (
                <motion.div
                  key={text}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.2 + i * 0.1,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group/item flex items-center gap-3 sm:gap-4 border-b border-neutral-200 py-4 sm:py-5 last:border-b-0"
                >
                  {/* Expanding dash */}
                  <span className="h-px w-3 sm:w-4 shrink-0 bg-orange-500/40 group-hover/item:w-6 sm:group-hover/item:w-8 transition-all duration-500 ease-out" />

                  {/* Hover glow dot */}
                  <span className="relative flex items-center">
                    <span className="absolute w-1.5 h-1.5 rounded-full bg-orange-500/0 group-hover/item:bg-orange-500/20 transition-all duration-500 -left-1" />
                    <span className="text-[14px] sm:text-[15px] tracking-[0.01em] text-neutral-400 group-hover/item:text-neutral-700 group-hover/item:translate-x-1 transition-all duration-300">
                      {text}
                    </span>
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Corner detail */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-2 sm:mt-2 flex items-center gap-2 text-neutral-300"
            >
              <div className="w-1 h-1 rounded-full bg-orange-500/50" />
              <span className="text-[10px] font-mono tracking-widest uppercase">
                4 profiles
              </span>
            </motion.div>
          </motion.div>

          {/* CTA Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <motion.a
              href="#"
              whileHover="hover"
              initial="idle"
              className="group relative overflow-hidden bg-orange-500 p-8 sm:p-10 md:p-12 flex flex-col justify-between min-h-[300px] sm:min-h-[320px] transition-colors duration-300 hover:bg-orange-400 block"
            >
              {/* Background grid — now white lines on orange */}
              <div
                className="absolute inset-0 opacity-[0.15] group-hover:opacity-[0.25] transition-opacity duration-700"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />

              {/* Animated corner lines on hover */}
              <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute top-0 right-0 w-px h-full bg-white/10 group-hover:h-8 transition-all duration-500 origin-top" />
                <div className="absolute top-0 right-0 h-px w-full bg-white/10 group-hover:w-8 transition-all duration-500 origin-right" />
              </div>

              <div className="relative z-10">
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="mb-6 sm:mb-8 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] sm:tracking-[0.35em] text-white/50"
                >
                  A word on fit
                </motion.p>
                <motion.h3
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="text-[clamp(1.5rem,4vw,40px)] font-black leading-[1.05] tracking-[-0.03em] text-white"
                >
                  Not for passive
                  <br />
                  attendees.
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="mt-4 sm:mt-5 max-w-[280px] sm:max-w-[300px] text-[13px] sm:text-[14px] leading-[1.75] text-white/50"
                >
                  This demands presence and honesty. If you're here to collect
                  cards and coast — this isn't for you.
                </motion.p>
              </div>

              <Link
                to="/apply"
                className="relative z-10 mt-8 sm:mt-10 flex items-center justify-between"
              >
                <motion.span
                  variants={{
                    idle: { x: 0 },
                    hover: { x: 4 },
                  }}
                  transition={{ duration: 0.3 }}
                  className="text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-white/70 group-hover:text-white transition-colors"
                >
                  Apply for a spot
                </motion.span>

                <motion.div
                  variants={{
                    idle: { scale: 1, rotate: -45 },
                    hover: { scale: 1.1, rotate: 0 },
                  }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border-2 border-white/20 group-hover:border-white/50 transition-colors duration-300"
                >
                  <svg width="14" height="14" viewBox="0 0 10 10" fill="none">
                    <motion.path
                      d="M2 8L8 2M8 2H3M8 2v5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      className="text-white/70 group-hover:text-white transition-colors"
                      variants={{
                        idle: { pathLength: 0.6 },
                        hover: { pathLength: 1 },
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </svg>
                </motion.div>
              </Link>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
