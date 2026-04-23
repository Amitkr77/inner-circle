import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function AboutPage() {
  return (
    <div className="bg-[#0B0B0B] text-white font-sans overflow-hidden">

      {/* 1. HERO */}
      <section className="px-6 md:px-12 py-32 text-center max-w-4xl mx-auto">
        <motion.p initial="hidden" animate="show" variants={fadeUp} className="text-green-400 text-xs tracking-widest mb-4">
          OUR PURPOSE
        </motion.p>

        <motion.h1 initial="hidden" animate="show" variants={fadeUp} className="text-4xl md:text-6xl font-semibold mb-6">
          Clarity over noise. Always.
        </motion.h1>

        <motion.p initial="hidden" animate="show" variants={fadeUp} className="text-gray-400">
          Collabuilder exists to create an environment where founders think clearly and build with intention.
        </motion.p>
      </section>

      {/* 2. ORIGIN */}
      <section className="px-6 md:px-12 py-24 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" className="text-3xl font-semibold">
          Built from frustration, not theory.
        </motion.h2>

        <motion.div variants={fadeUp} initial="hidden" whileInView="show" className="text-gray-400 space-y-4">
          <p>Most founder spaces are built for visibility, not clarity.</p>
          <p>Too many events. Too much noise.</p>
          <p>
            We created Collabuilder as a space where founders stop reacting,
            start thinking, and make better decisions.
          </p>
        </motion.div>
      </section>

      {/* 3. BELIEF */}
      <section className="px-6 md:px-12 py-24 text-center bg-[#0F0F0F]">
        <motion.p variants={fadeUp} initial="hidden" whileInView="show" className="text-green-400 text-xs mb-4">
          THE BELIEF
        </motion.p>

        <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" className="text-3xl md:text-4xl font-semibold mb-6">
          Clarity changes everything.
        </motion.h2>

        <motion.p variants={fadeUp} initial="hidden" whileInView="show" className="text-gray-400 max-w-2xl mx-auto">
          Most founders don’t fail due to lack of effort—but lack of clarity.
          When clarity improves, execution follows.
        </motion.p>
      </section>

      {/* 4. EXPERIENCE */}
      <section className="px-6 md:px-12 py-24 max-w-4xl mx-auto text-center">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" className="text-3xl font-semibold mb-6">
          A different kind of environment
        </motion.h2>

        <motion.p variants={fadeUp} initial="hidden" whileInView="show" className="text-gray-400">
          Not designed for scale. Designed for depth.  
          Small groups. Focused sessions. No distractions.
        </motion.p>
      </section>

      {/* 5. PRINCIPLES */}
      <section className="px-6 md:px-12 py-24 max-w-6xl mx-auto">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" className="text-3xl font-semibold text-center mb-12">
          Our principles
        </motion.h2>

        <motion.div variants={stagger} initial="hidden" whileInView="show" className="grid md:grid-cols-3 gap-8">
          {[
            "Honest Thinking",
            "Depth Over Noise",
            "Meaningful Connection",
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-green-400"
            >
              <h3 className="text-lg font-medium mb-2">{item}</h3>
              <p className="text-gray-400 text-sm">
                Built for real progress, not surface-level interaction.
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 6. BUILDERS */}
      <section className="px-6 md:px-12 py-24 bg-[#0F0F0F] text-center">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" className="text-3xl font-semibold mb-6">
          Who built this
        </motion.h2>

        <motion.p variants={fadeUp} initial="hidden" whileInView="show" className="text-gray-400 max-w-2xl mx-auto">
          We’re builders ourselves. We’ve faced confusion, lack of clarity,
          and wrong decisions. Collabuilder is what we wish existed earlier.
        </motion.p>
      </section>

      {/* 7. POSITIONING */}
      <section className="px-6 md:px-12 py-24 max-w-4xl mx-auto text-center">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" className="text-3xl font-semibold mb-6">
          This is not for everyone
        </motion.h2>

        <motion.p variants={fadeUp} initial="hidden" whileInView="show" className="text-gray-400 mb-4">
          If you're looking for casual networking or passive learning—this isn’t it.
        </motion.p>

        <motion.p variants={fadeUp} initial="hidden" whileInView="show" className="text-green-400">
          But if you want clarity, direction, and real progress—you’ll feel it immediately.
        </motion.p>
      </section>

      {/* 8. FINAL CTA */}
      <section className="px-6 md:px-12 py-32 text-center">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" className="text-4xl font-semibold mb-6">
          Ready to think clearly?
        </motion.h2>

        <motion.p variants={fadeUp} initial="hidden" whileInView="show" className="text-gray-400 mb-8">
          Join a small group of founders serious about building.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="bg-green-500 text-black px-10 py-4 rounded-full shadow-[0_0_20px_rgba(0,255,136,0.3)]"
        >
          Apply for the next retreat →
        </motion.button>
      </section>

    </div>
  );
}