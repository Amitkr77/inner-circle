import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { social } from "../constants";
import type { Variants, Transition } from "framer-motion";

const easeInOut: Transition["ease"] = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easeInOut,
    },
  },
};

const stagger: Variants = {
  show: { transition: { staggerChildren: 0.08 } },
};

const drawLine: Variants = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 1, ease: easeInOut } },
};

const footerLinks = [
  {
    title: "Discover",
    links: [
      { name: "Retreats", path: "/explore" },
      { name: "Inside Retreat", path: "/#inside-retreat", isHash: true },
      { name: "Apply Now", path: "/apply" },
      { name: "About", path: "/about" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "Our Story", path: "/about" },
      { name: "Journal", path: "/blog" },
      { name: "Resources", path: "/resources" },
      { name: "Contact", path: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", path: "/privacy" },
      { name: "Terms of Use", path: "/terms" },
      { name: "Cookie Policy", path: "/cookies" },
    ],
  },
];

function FloatingOrb({
  className,
  duration = 9,
}: {
  className?: string;
  duration?: number;
}) {
  return (
    <motion.div
      animate={{ y: [0, -18, 0], x: [0, 10, 0], scale: [1, 1.1, 1] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
      className={`absolute rounded-full pointer-events-none ${className}`}
    />
  );
}

function RotatingShape({
  children,
  className,
  duration = 22,
}: {
  children?: React.ReactNode;
  className?: string;
  duration?: number;
}) {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
      className={`absolute pointer-events-none ${className}`}
    >
      {children}
    </motion.div>
  );
}

function PulseRing({
  className,
  duration = 5,
}: {
  className?: string;
  duration?: number;
}) {
  return (
    <motion.div
      animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0.08, 0.3] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut" }}
      className={`absolute rounded-full border pointer-events-none ${className}`}
    />
  );
}

function MorphingBlob({ className }: { className?: string }) {
  return (
    <motion.div
      animate={{
        borderRadius: [
          "30% 70% 70% 30% / 30% 30% 70% 70%",
          "70% 30% 30% 70% / 70% 70% 30% 30%",
          "30% 70% 70% 30% / 70% 70% 30% 30%",
        ],
        scale: [1, 1.06, 1],
        rotate: [0, 120, 0],
      }}
      transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      className={`absolute pointer-events-none ${className}`}
    />
  );
}

function TracePath({ d, className }: { d: string; className?: string }) {
  const pathLength = 300;
  return (
    <svg
      viewBox="0 0 100 100"
      className={`absolute pointer-events-none ${className}`}
    >
      <motion.path
        d={d}
        fill="none"
        stroke="currentColor"
        strokeWidth="0.4"
        className="text-emerald-400"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: [0, pathLength, 0], opacity: [0, 0.4, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </svg>
  );
}

function GridPattern() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="fgrid"
          width="48"
          height="48"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 48 0 L 0 0 0 48"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.3"
            className="text-neutral-100"
          />
        </pattern>
        <linearGradient id="fgfade" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="white" stopOpacity="0.7" />
          <stop offset="50%" stopColor="white" stopOpacity="0.15" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <mask id="fgmask">
          <rect width="100%" height="100%" fill="url(#fgfade)" />
        </mask>
      </defs>
      <rect width="100%" height="100%" fill="url(#fgrid)" mask="url(#fgmask)" />
    </svg>
  );
}

function AnimatedDots({ count = 18 }: { count?: number }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          animate={{ opacity: [0, 0.6, 0], scale: [0.5, 1, 0.5] }}
          transition={{
            duration: 3 + (i % 4),
            repeat: Infinity,
            delay: i * 0.35,
            ease: "easeInOut",
          }}
          className="absolute rounded-full bg-emerald-500"
          style={{
            width: 2 + (i % 3),
            height: 2 + (i % 3),
            top: `${10 + (i % 5) * 18}%`,
            left: `${5 + Math.floor(i / 5) * 22}%`,
          }}
        />
      ))}
    </div>
  );
}

export function Footer() {
  const footerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"],
  });
  const revealY = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const revealOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <footer
      ref={footerRef}
      className="relative bg-white text-neutral-900 overflow-hidden"
    >
      {/* ── Top separator ── */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />

      {/* ── Animated Background Layer ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <GridPattern />
        <AnimatedDots count={20} />

        {/* Orbs */}
        <FloatingOrb className="w-[400px] h-[400px] -top-[140px] -left-[100px] bg-emerald-500/[0.03] blur-[100px]" />
        <FloatingOrb
          className="w-[320px] h-[320px] -bottom-[120px] -right-[80px] bg-emerald-500/[0.04] blur-[90px]"
          duration={11}
        />
        <FloatingOrb
          className="w-[200px] h-[200px] top-[40%] left-[50%] bg-neutral-300/[0.04] blur-[60px]"
          duration={7}
        />

        {/* Blobs */}
        <MorphingBlob className="w-[180px] h-[180px] top-[15%] right-[8%] bg-emerald-500/[0.02]" />
        <MorphingBlob className="w-[140px] h-[140px] bottom-[20%] left-[15%] bg-neutral-300/[0.03]" />

        {/* Rings */}
        <PulseRing className="w-[120px] h-[120px] top-[8%] left-[25%] border-emerald-500/[0.08]" />
        <PulseRing
          className="w-[160px] h-[160px] bottom-[12%] right-[20%] border-emerald-500/[0.05]"
          duration={7}
        />
        <PulseRing
          className="w-[80px] h-[80px] top-[50%] left-[60%] border-neutral-200/40"
          duration={4}
        />

        {/* Rotating shapes */}
        <RotatingShape
          className="w-16 h-16 top-[25%] right-[12%] border border-neutral-200/30 rounded-sm"
          duration={28}
        />
        <RotatingShape
          className="w-12 h-12 bottom-[20%] left-[18%] border border-emerald-500/[0.08] rounded-sm"
          duration={20}
        />
        <RotatingShape className="w-20 h-20 top-[10%] left-[8%]" duration={35}>
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <rect
              x="15"
              y="15"
              width="70"
              height="70"
              rx="4"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.4"
              className="text-emerald-400/[0.08]"
            />
          </svg>
        </RotatingShape>
        <RotatingShape
          className="w-14 h-14 bottom-[30%] right-[8%]"
          duration={16}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon
              points="50,15 85,85 15,85"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.4"
              className="text-emerald-400/[0.08]"
            />
          </svg>
        </RotatingShape>

        {/* Trace paths */}
        <TracePath
          d="M 20 80 Q 50 10, 80 80"
          className="w-[120px] h-[120px] top-[20%] right-[3%] opacity-60"
        />
        <TracePath
          d="M 10 60 Q 40 5, 90 50 Q 60 95, 90 40"
          className="w-[100px] h-[100px] bottom-[25%] left-[5%] opacity-40"
        />

        {/* Diagonal accents */}
        <motion.div
          animate={{ x: [0, 30, 0], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[35%] right-[4%] w-px h-[100px] bg-gradient-to-b from-transparent via-emerald-500/15 to-transparent origin-top -rotate-[22deg]"
        />
        <motion.div
          animate={{ x: [0, -25, 0], opacity: [0.08, 0.15, 0.08] }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
          className="absolute bottom-[25%] left-[6%] w-px h-[80px] bg-gradient-to-b from-transparent via-emerald-500/[0.1] to-transparent origin-top rotate-[18deg]"
        />

        {/* Corner frames */}
        {[
          { pos: "top-8 left-8", origin: "top-left" },
          { pos: "top-8 right-8", origin: "top-right" },
          { pos: "bottom-8 left-8", origin: "bottom-left" },
          { pos: "bottom-8 right-8", origin: "bottom-right" },
        ].map(({ pos, origin }, i) => (
          <div key={origin} className={`absolute ${pos} w-10 h-10`}>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.2 + i * 0.1,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`absolute top-0 ${
                i % 2 === 0 ? "left-0" : "right-0"
              } w-full h-px bg-emerald-500/15 origin-${
                i % 2 === 0 ? "left" : "right"
              }`}
            />
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.25 + i * 0.1,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`absolute ${
                i % 2 === 0 ? "top-0" : "bottom-0"
              } left-0 w-px h-full bg-emerald-500/15 origin-${
                i < 2 ? "top" : "bottom"
              }`}
            />
          </div>
        ))}
      </div>

      {/* ── Main Content ── */}
      <motion.div
        style={{ y: revealY, opacity: revealOpacity }}
        className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 md:px-11 pt-16 sm:pt-20 md:pt-24 pb-8 sm:pb-10"
      >
        {/* ── Top Grid ── */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 mb-14 sm:mb-16"
        >
          {/* Logo + Description */}
          <motion.div variants={fadeUp} className="space-y-5">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="inline-block"
            >
              <img
                src="/logo.png"
                alt="Collabuilder logo"
                className="h-12 sm:h-14 w-auto"
              />
            </motion.div>

            <p className="text-neutral-400 text-[13px] sm:text-[14px] leading-[1.75] max-w-xs font-light">
              The world&apos;s premier platform for high-stakes founder retreats
              and transformation expeditions.
            </p>

            <motion.div
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex items-center gap-2.5 pt-2"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-300">
                Accepting applications
              </span>
            </motion.div>
          </motion.div>

          {/* Link Columns */}
          {footerLinks.map((col, idx) => (
            <motion.div key={idx} variants={fadeUp}>
              <h5 className="font-bold mb-4 sm:mb-5 text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-neutral-400">
                {col.title}
              </h5>

              <ul className="space-y-3 sm:space-y-3.5">
                {col.links.map((link, linkIdx) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.2 + idx * 0.08 + linkIdx * 0.05,
                      duration: 0.4,
                    }}
                  >
                    {link.isHash ? (
                      <a
                        href={link.path}
                        className="group flex items-center gap-2.5 text-[12px] sm:text-[13px] text-neutral-900 hover:text-emerald-600 transition-colors duration-300"
                      >
                        {link.name}
                        <span className="w-0 group-hover:w-3 h-px bg-emerald-500/50 transition-all duration-300" />
                      </a>
                    ) : (
                      <Link
                        to={link.path}
                        className="group flex items-center gap-2.5 text-[12px] sm:text-[13px] text-neutral-900 hover:text-emerald-600 transition-colors duration-300"
                      >
                        {link.name}
                        <span className="w-0 group-hover:w-3 h-px bg-emerald-500/50 transition-all duration-300" />
                      </Link>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Decorative Divider ── */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative h-px w-full mb-8 sm:mb-10 origin-center"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-200 to-transparent" />
          <motion.div
            variants={drawLine}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-px bg-emerald-500/30 origin-center"
          />
          <motion.div
            initial={{ scale: 0, rotate: -90 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.5,
              type: "spring",
              stiffness: 300,
              damping: 15,
            }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 border border-emerald-500/25 rotate-45"
          />
        </motion.div>

        {/* ── Bottom Bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-0"
        >
          <p className="text-neutral-900 text-[11px] sm:text-[12px] text-center sm:text-left font-light tracking-wide">
            © 2026 Collabuilder. All rights reserved.
          </p>

          <div className="flex items-center gap-5 sm:gap-6">
            {social.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 + i * 0.06, duration: 0.4 }}
                whileHover={{ y: -2 }}
                className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] sm:tracking-widest text-neutral-900 hover:text-emerald-600 transition-colors duration-300 cursor-pointer"
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* ── Bottom line ── */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={drawLine}
          className="mt-8 sm:mt-10 h-px w-full bg-gradient-to-r from-transparent via-neutral-200/60 to-transparent origin-center"
        />
      </motion.div>
    </footer>
  );
}
