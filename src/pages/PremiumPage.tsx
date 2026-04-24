import React from "react";
import { motion } from "framer-motion";
import { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function PremiumPage() {
  return (
    <div className="bg-[#0B0B0B] text-white font-sans overflow-hidden">

      {/* HERO */}
      <section className="px-8 py-32 max-w-5xl mx-auto text-center">
        <motion.p
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="text-green-400 text-xs tracking-widest mb-4"
        >
          INVESTOR & MENTOR NETWORK
        </motion.p>

        <motion.h1
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="text-5xl md:text-6xl font-semibold leading-tight mb-6"
        >
          Access founders who are
          <br />
          <span className="text-green-400">serious about building</span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="text-gray-400 max-w-xl mx-auto mb-10"
        >
          Curated founders. Real problems. No noise.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="bg-green-500 text-black px-8 py-3 rounded-full font-medium shadow-[0_0_20px_rgba(0,255,136,0.3)] hover:shadow-[0_0_30px_rgba(0,255,136,0.5)] transition"
        >
          Request Access →
        </motion.button>
      </section>

      {/* GLASS VALUE CARDS */}
      <section className="px-8 py-24 max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

        {[
          "Context, not cold intros",
          "High-signal conversations",
          "Early access to builders",
          "Real influence",
        ].map((text, i) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            whileHover={{ y: -5 }}
            className="p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-green-400 transition"
          >
            <h3 className="text-lg font-medium mb-2">{text}</h3>
            <p className="text-gray-400 text-sm">
              Meaningful interaction over noise.
            </p>
          </motion.div>
        ))}
      </section>

      {/* FORM (APPLE-STYLE) */}
      <section className="px-8 py-24">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-lg mx-auto p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)]"
        >
          <h2 className="text-2xl font-semibold mb-8 text-center">
            Request Access
          </h2>

          <div className="space-y-5">

            <input
              className="w-full p-4 rounded-lg bg-black/60 border border-white/10 focus:border-green-400 outline-none transition placeholder-gray-500"
              placeholder="Full Name"
            />

            <input
              className="w-full p-4 rounded-lg bg-black/60 border border-white/10 focus:border-green-400 outline-none transition"
              placeholder="Email"
            />

            <select className="w-full p-4 rounded-lg bg-black/60 border border-white/10 focus:border-green-400">
              <option>Angel Investor</option>
              <option>VC</option>
              <option>Mentor</option>
            </select>

            <textarea
              rows={4}
              className="w-full p-4 rounded-lg bg-black/60 border border-white/10 focus:border-green-400"
              placeholder="Why do you want to be part of Collabuilder?"
            />

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              className="w-full bg-green-500 text-black py-4 rounded-full font-medium shadow-[0_0_20px_rgba(0,255,136,0.3)]"
            >
              Request Access →
            </motion.button>

          </div>
        </motion.div>
      </section>

      {/* FINAL CTA */}
      <section className="px-8 py-32 text-center">
        <motion.h2
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          className="text-4xl font-semibold mb-6"
        >
          Don’t just meet founders.
          <br />
          <span className="text-green-400">
            Work with the right ones.
          </span>
        </motion.h2>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-green-500 text-black px-10 py-4 rounded-full shadow-lg"
        >
          Request Access →
        </motion.button>
      </section>

    </div>
  );
}