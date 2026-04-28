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
    <div className="overflow-hidden bg-[#050505] font-[family-name:var(--font-sans)] text-white">
      <div className="mx-auto max-w-7xl">
        
        {/* ── Hero ── */}
        <div className="relative px-11 pt-24 pb-20">
          {/* Eyebrow */}
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.45em] text-white/[0.5] before:block before:h-px before:w-6 shrink-0 before:bg-emerald-400"
          >
            The philosophy
          </motion.p>

          {/* Big Background Word */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="pointer-events-none absolute right-[-10px] top-10 z-0 whitespace-nowrap text-[220px] font-black leading-none tracking-[-0.06em] text-white/[0.09]"
          >
            CLARITY
          </motion.div>

          {/* Headline - Line by line reveal */}
          <div className="relative z-10 text-[72px] font-black leading-[0.9] tracking-[-0.05em]">
            <div className="">
              <motion.span 
                initial={{ y: "110%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                className="block"
              >
                Designed for
              </motion.span>
            </div>
            <div className="">
              <motion.span 
                initial={{ y: "110%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
                className="block text-white/[0.12]"
              >
                clarity &
              </motion.span>
            </div>
            <div className="">
              <motion.span 
                initial={{ y: "110%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
                className="block text-white/[0.9]"
              >
                deep thinking.
              </motion.span>
            </div>
          </div>
        </div>

        {/* ── Three Columns ── */}
        <div className="grid grid-cols-3 border-t border-white/[0.09]">
          {cols.map((c, i) => (
            <motion.div
              key={c.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className={`group relative border-r border-white/[0.07] p-10 ${
                i === 2 ? "border-r-0" : ""
              }`}
            >
              {/* Hover Accent Line */}
              <div className="absolute left-0 top-0 h-0.5 w-0 bg-emerald-400 transition-all duration-500 ease-out group-hover:w-full" />

              <div className="mb-6 text-[72px] font-black leading-none tracking-[-0.04em] text-white/[0.4] transition-colors group-hover:text-emerald-400">
                {c.num}
              </div>
              <p className="mb-3 text-base font-extrabold tracking-[-0.01em] text-white/[0.9]">
                {c.title}
              </p>
              <p className="text-sm leading-[1.8] text-white/[0.4]">{c.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* ── Bottom Section ── */}
        <div className="grid grid-cols-[2fr_1fr] border-t border-white/[0.07]">
          
          {/* Quote */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="border-r border-white/[0.07] px-11 py-12"
          >
            <p className="mb-5 font-[family-name:var(--font-serif)] text-2xl italic leading-[1.5] text-white/[0.5]">
              "Everything is built to help you{" "}
              <em className="text-white/[0.85]">think better</em> and{" "}
              <em className="text-white/[0.85]">build better</em> — not just
              feel inspired for a week."
            </p>
            <p className="flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.25em] text-white/[0.4] before:block before:h-px before:w-4 shrink-0 before:bg-emerald-400">
              The retreat ethos
            </p>
          </motion.div>

          {/* Tags & CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="flex flex-col justify-between px-9 py-12"
          >
            <div className="flex flex-col gap-4">
              {tags.map((text, idx) => (
                <motion.div 
                  key={text}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + (idx * 0.1), duration: 0.5 }}
                  className="flex items-center gap-2.5"
                >
                  <span className="h-1.5 w-1.5 shrink-0 bg-emerald-400" />
                  <span className="text-sm font-medium text-white/[0.35]">
                    {text}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="border-t border-white/[0.07] pt-8">
              <Link to="/apply" className="flex items-center justify-between group/cta">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-emerald-400">
                  Apply now
                </span>
                <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-emerald-400/30 transition-colors duration-200 group-hover/cta:bg-emerald-400/[0.08]">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2 10L10 2M10 2H4M10 2v6"
                      stroke="#34d399"
                      strokeWidth="1.5"
                      strokeLinecap="round"
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