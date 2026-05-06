import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ClaritySection() {
  const cols = [
    {
      num: "01",
      title: "Carefully selected environments",
      desc: "Every venue is chosen for its ability to strip away noise and invite real thought.",
    },
    {
      num: "02",
      title: "Small, intentional groups",
      desc: "Never more than 20 founders. Every voice matters. Every conversation goes somewhere.",
    },
    {
      num: "03",
      title: "Zero distractions",
      desc: "No notifications, no agenda padding, no filler. Just the space to think clearly and build better.",
    },
  ];

  const tags = [
    "Curated locations worldwide",
    "Max 20 founders per retreat",
    "Structured deep work sessions",
    "90-day execution plan on exit",
  ];

  return (
    <div className="overflow-hidden bg-[#FAFAF9] font-[family-name:var(--font-sans)] text-black relative">
      {/* Ambient Background Gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(16,185,129,0.06),_transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(16,185,129,0.04),_transparent_50%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* ── Hero ── */}
        <div className="relative px-6 pt-16 pb-12 sm:px-8 sm:pt-20 sm:pb-16 md:px-11 lg:pt-28 lg:pb-24">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 sm:mb-10 lg:mb-12 flex items-center gap-3 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] sm:tracking-[0.45em] text-emerald-600 before:block before:h-px before:w-4 sm:before:w-6 shrink-0 before:bg-emerald-400"
          >
            The philosophy
          </motion.p>

          {/* Big Background Word - Responsive Scaling */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="pointer-events-none select-none absolute right-[-2%] top-2 sm:right-[-5%] sm:top-6 lg:right-[-10px] lg:top-10 z-0 whitespace-nowrap text-[80px] sm:text-[120px] md:text-[180px] lg:text-[220px] font-black leading-none tracking-[-0.06em] bg-gradient-to-br from-emerald-200/50 to-transparent bg-clip-text text-transparent"
          >
            CLARITY
          </motion.div>

          {/* Headline - Responsive Typography */}
          <div className="relative z-10 text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] font-black leading-[0.9] tracking-[-0.04em] sm:tracking-[-0.05em]">
            <div className="">
              <motion.span
                initial={{ y: "110%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                className="block text-neutral-900"
              >
                Designed for
              </motion.span>
            </div>
            <div className="">
              <motion.span
                initial={{ y: "110%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className="block text-emerald-500/60"
              >
                clarity &
              </motion.span>
            </div>
            <div className="">
              <motion.span
                initial={{ y: "110%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className="block text-neutral-800"
              >
                deep thinking.
              </motion.span>
            </div>
          </div>
        </div>

        {/* ── Three Columns ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-neutral-200">
          {cols.map((c, i) => (
            <motion.div
              key={c.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: i * 0.15,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="group relative p-6 sm:p-8 lg:p-10"
            >
              {/* Hover background */}
              <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/80 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Hover top line */}
              <div className="absolute left-0 top-0 h-[2px] w-0 bg-gradient-to-r from-emerald-400 to-emerald-500 transition-all duration-500 ease-out group-hover:w-full" />

              <div className="relative z-10">
                <div className="mb-4 sm:mb-6 text-[48px] sm:text-[56px] lg:text-[72px] font-black leading-none tracking-[-0.04em] text-neutral-300 transition-colors duration-500 group-hover:text-emerald-400">
                  {c.num}
                </div>
                <p className="mb-2 sm:mb-3 text-sm sm:text-base font-extrabold tracking-[-0.01em] text-emerald-600">
                  {c.title}
                </p>
                <p className="text-[13px] sm:text-sm leading-[1.85] text-neutral-500">
                  {c.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Bottom Section ── */}
        <div className="mt-px grid grid-cols-1 lg:grid-cols-[2fr_1fr] border-t border-neutral-200">
          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="border-b lg:border-b-0 lg:border-r border-neutral-200 px-6 sm:px-8 md:px-11 py-10 sm:py-12 lg:py-14"
          >
            <p className="mb-5 sm:mb-6 font-[family-name:var(--font-serif)] text-lg sm:text-xl lg:text-[22px] italic leading-[1.65] text-neutral-400">
              "Everything is built to help you{" "}
              <em className="not-italic font-semibold text-emerald-600">
                think better
              </em>{" "}
              and{" "}
              <em className="not-italic font-semibold text-emerald-600">
                build better
              </em>{" "}
              — not just feel inspired for a week."
            </p>
            <p className="flex items-center gap-2.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-neutral-400 before:block before:h-px before:w-4 shrink-0 before:bg-emerald-400">
              The retreat ethos
            </p>
          </motion.div>

          {/* Tags & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="flex flex-col justify-between px-6 sm:px-8 md:px-9 py-10 sm:py-12 lg:py-14"
          >
            <div className="flex flex-col gap-3.5 sm:gap-4 mb-8 lg:mb-0">
              {tags.map((text, idx) => (
                <motion.div
                  key={text}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + idx * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <span className="h-1 w-1 shrink-0 rounded-full bg-emerald-500" />
                  <span className="text-[12px] sm:text-[13px] font-medium text-neutral-400">
                    {text}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className=" mt-5  bg-gradient-to-b from-emerald-50/80 to-transparent border border-emerald-200 px-2 py-1">
              <Link
                to="/apply"
                className="group/cta flex items-center justify-between w-full"
              >
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-600 transition-colors group-hover/cta:text-black">
                  Apply now
                </span>

                {/* Premium CTA Button */}
                <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-neutral-300 bg-white text-emerald-600 transition-all duration-300 group-hover/cta:bg-emerald-500 group-hover/cta:border-emerald-500 group-hover/cta:text-white group-hover/cta:shadow-lg group-hover/cta:shadow-emerald-500/25">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    className="transition-transform duration-300 group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5"
                  >
                    <path
                      d="M2 10L10 2M10 2H4M10 2v6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
