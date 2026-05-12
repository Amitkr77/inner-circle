import { motion, useScroll, useTransform } from "framer-motion";
import type { Variants } from "framer-motion";
import heroimg from "../assets/hhh.png";
import ContactForm from "../components/InputField";
import { useNavigate } from "react-router-dom";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

// const scaleIn: Variants = {
//   hidden: { opacity: 0, scale: 0.95 },
//   show: {
//     opacity: 1,
//     scale: 1,
//     transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
//   },
// };

const stagger: Variants = {
  show: { transition: { staggerChildren: 0.12 } },
};

const drawLine: Variants = {
  hidden: { scaleX: 0 },
  show: {
    scaleX: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const IMAGES = {
  hero: heroimg,
  support:
    "/support.jpg",
};

const CONTACT_CARDS = [
  {
    title: "Retreat Applications",
    desc: "Skip the conversation. Apply directly for the next retreat.",
    action: "Apply Now →",
    onClick: "/apply",
    isNav: true,
  },
  {
    title: "Partnerships",
    desc: "Collaborate, contribute, or build together.",
    action: "hello@collabuilder.com",
    onClick: "mailto:hello@collabuilder.com",
    isNav: false,
  },
  {
    title: "Mentors & Investors",
    desc: "A high-trust network for founders, mentors, and investors to collaborate deeply.",
    action: "Launching Soon",
    onClick: "#contact",
    isNav: false,
  },
];

export default function Contact() {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 80]);
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);

  const handleCardClick = (item: (typeof CONTACT_CARDS)[0]) => {
    if (item.isNav) {
      navigate(item.onClick);
    } else if (item.onClick.startsWith("mailto:")) {
      window.location.href = item.onClick;
    } else if (item.onClick.startsWith("#")) {
      document
        .getElementById(item.onClick.slice(1))
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white text-neutral-900 overflow-x-hidden">
      {/* ── HERO SECTION ── */}
      <section className="relative w-full min-h-full sm:min-h-[100vh] flex items-end justify-start overflow-hidden pt-20 sm:pt-28 md:pt-32">
        {/* Background image with parallax */}
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          <img
            src={IMAGES.hero}
            alt="Hero background"
            className="w-full h-full object-cover object-top block "
          />
        </motion.div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-44 bg-gradient-to-t from-black to-transparent z-[2]" />

        {/* Top rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-0 left-0 right-0 h-px bg-orange-500/20 origin-left z-[3]"
        />

        {/* Content */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-[3] max-w-[1152px] w-full mx-auto px-5 sm:px-6 md:px-8 pb-12 sm:pb-16 md:pb-20"
        >
          <div className="max-w-[560px]">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block text-[10px] sm:text-[11px] tracking-[0.2em] sm:tracking-[0.3em] font-bold uppercase text-orange-600 mb-5 sm:mb-6 px-3 sm:px-4 py-1.5 sm:py-2 border border-orange-500/20 rounded-full bg-emerland/50"
            >
              Contact · High Intent Only
            </motion.p>

            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.1,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className="text-[clamp(2.4rem,6vw,5rem)] font-bold leading-[1.05] tracking-[-0.04em] text-neutral-100 mb-1"
              >
                Start the
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.18,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className="text-[clamp(2.4rem,6vw,5rem)] font-bold leading-[1.05] tracking-[-0.04em] text-neutral-100 mb-1"
              >
                conversation.
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: 0.26,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className="text-[clamp(2.4rem,6vw,5rem)] font-bold leading-[1.05] tracking-[-0.04em]"
              >
                <span className="text-orange-600">Build with intent.</span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-[14px] sm:text-[15px] text-neutral-200 leading-[1.7] max-w-[400px] mt-5 sm:mt-6"
            >
              Whether you&apos;re applying, partnering, or exploring — reach out
              with clarity. We respond to meaningful conversations only.
            </motion.p>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="mt-12 sm:mt-16 flex items-center gap-3"
            >
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-px h-10 bg-gradient-to-b from-transparent to-orange-500"
              />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-300">
                Scroll
              </span>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ── CONTACT CARDS ── */}
      <section className="max-w-[1152px] mx-auto px-5 sm:px-6 md:px-8 py-14 sm:py-20 md:py-24">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6"
        >
          {CONTACT_CARDS.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              onClick={() => handleCardClick(item)}
              className="relative p-6 sm:p-7 md:p-8 rounded-2xl bg-neutral-50 border border-neutral-200 cursor-pointer transition-all duration-500 hover:border-orange-500/40 hover:bg-orange-50/30 hover:shadow-lg hover:shadow-orange-500/[0.04] group overflow-hidden"
            >
              {/* Hover accent bar */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <h3 className="text-[15px] sm:text-base font-semibold text-neutral-900 mb-2 sm:mb-2.5 tracking-[-0.01em]">
                {item.title}
              </h3>

              <p className="text-[13px] sm:text-[14px] text-neutral-400 mb-5 sm:mb-6 leading-[1.65] font-light">
                {item.desc}
              </p>

              <div className="flex items-center gap-2">
                <span className="text-[12px] sm:text-[13px] text-orange-600 font-semibold group-hover:translate-x-1 transition-transform duration-300">
                  {item.action}
                </span>
                <div className="w-0 group-hover:w-4 h-px bg-orange-500 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── INQUIRY FORM ── */}
      <section
        id="contact"
        className="border-y border-neutral-200 bg-neutral-50"
      >
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 md:px-8 py-14 sm:py-20 md:py-24 grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 sm:gap-12 lg:gap-20 items-start">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[10px] sm:text-[11px] tracking-[0.2em] sm:tracking-[0.3em] text-orange-600 uppercase font-bold mb-4 sm:mb-5">
              ⬡ Transmission Protocol
            </p>

            <div className=" mb-1">
              <motion.h2
                initial={{ y: "110%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                className="text-[clamp(1.8rem,3vw,2.8rem)] font-bold leading-[1.05] tracking-[-0.04em] text-neutral-900"
              >
                The Build
              </motion.h2>
            </div>
            <div className="">
              <motion.h2
                initial={{ y: "110%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.08,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className="text-[clamp(1.8rem,3vw,2.8rem)] font-bold leading-[1.05] tracking-[-0.04em] text-neutral-900"
              >
                Inquiry
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-[13px] sm:text-[14px] text-neutral-400 leading-[1.8] mt-5 sm:mt-6 mb-8 sm:mb-10 max-w-[320px] font-light"
            >
              Transmit your project specifications. Our intake engine will route
              your request to the appropriate sector within 12 standard
              operating cycles.
            </motion.p>

            {/* Status indicator */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-col gap-3 mb-8 sm:mb-10"
            >
              <div className="flex items-center gap-2.5 px-4 py-2.5 bg-orange-50 border border-orange-500/20 rounded-xl">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" />
                </span>
                <span className="text-[10px] sm:text-[11px] tracking-[0.1em] text-neutral-500 uppercase font-bold">
                  Foundry Queue: Minimal Latency
                </span>
              </div>
            </motion.div>

            {/* Image card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="relative h-36 sm:h-40 md:h-44 overflow-hidden border border-neutral-200 rounded-2xl group/img"
            >
              <img
                src={IMAGES.support}
                alt="Engineering workspace"
                className="w-full h-full object-cover grayscale-[40%]  group-hover/img:grayscale-0 group-hover/img:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/[0.06] to-transparent" />
              <div className="absolute bottom-3 left-4 text-[10px] text-white tracking-[0.1em] font-bold uppercase">
                Forge_Node_01 // Online
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="px-5 sm:px-6 md:px-8 py-16 sm:py-20 md:py-28 text-center relative overflow-hidden">
        {/* Subtle radial glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] rounded-full bg-orange-500/[0.03] blur-3xl" />
        </div>

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center gap-4 mb-8 sm:mb-10"
          >
            <motion.div
              variants={drawLine}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="h-px w-8 bg-orange-500/60 origin-right block"
            />
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em] sm:tracking-[0.3em] text-orange-600">
              Final Word
            </span>
            <motion.div
              variants={drawLine}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="h-px w-8 bg-orange-500/60 origin-left block"
            />
          </motion.div>

          <div className="">
            <motion.h2
              initial={{ y: "110%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
              className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.04em] text-neutral-900 leading-[1.1] mb-1"
            >
              Don&apos;t just reach out.
            </motion.h2>
          </div>
          <div className="">
            <motion.h2
              initial={{ y: "110%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.9,
                delay: 0.1,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.04em] leading-[1.1]"
            >
              <span className="text-orange-600">
                Build something meaningful.
              </span>
            </motion.h2>
          </div>
        </div>
      </section>
    </div>
  );
}
