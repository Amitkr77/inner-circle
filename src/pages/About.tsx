import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const stagger = {
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const drawLine = {
  hidden: { scaleX: 0 },
  show: {
    scaleX: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const principles = [
  {
    number: "01",
    title: "Honest Thinking",
    desc: "Radical candor over comfortable silence. Every session demands your real thoughts.",
  },
  {
    number: "02",
    title: "Depth Over Noise",
    desc: "We eliminate distraction by design. What remains is signal — sharp, actionable, true.",
  },
  {
    number: "03",
    title: "Meaningful Connection",
    desc: "Relationships built inside real problems endure. This is not networking. It's alignment.",
  },
];

const founders = [
  {
    img: "https://media.licdn.com/dms/image/v2/D5603AQGkCPtJXviAeg/profile-displayphoto-crop_800_800/B56ZfVNL1LHQAI-/0/1751628693328?e=1779321600&v=beta&t=4kYfsKdn_lPzoiWB_pagkMw_e912-UjM3BCU80PqvT4",
    name: "Vishwjeet Narayanan",
    role: "Founder",
    desc: "Building systems and environments where founders think clearly and execute better.",
  },
  {
    img: "/founders/kundan.png",
    name: "Kundan Kumar",
    role: "Co-Founder",
    desc: "Focused on creating meaningful founder connections and high-trust environments.",
  },
];

export default function About() {
  const heroRef = useRef<HTMLElement | null>(null);
  const mandateRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  const { scrollYProgress: mandateProgress } = useScroll({
    target: mandateRef,
    offset: ["start end", "end start"],
  });

  const mandateY = useTransform(mandateProgress, [0, 1], ["8%", "-8%"]);

  return (
    <div className="overflow-hidden bg-white font-serif text-neutral-900">
      {/* HERO */}
      <section
        ref={heroRef}
        className="relative flex min-h-[85vh] flex-col justify-end overflow-hidden px-5 pb-16 sm:min-h-screen sm:px-8 sm:pb-20 md:px-12 md:pb-28 lg:px-24"
      >
        <motion.div
          style={{ y: heroY, scale: heroScale }}
          className="absolute inset-0 z-0"
        >
          <img
            src="/about_hero.png"
            className="h-full w-full object-cover  grayscale"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-white/20" />

          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(255,255,255,0.7)_100%)]" />
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 1.2,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute left-0 right-0 top-0 z-10 h-px origin-left bg-orange-500/20"
        />

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 max-w-6xl"
        >
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="show"
            className="mb-8 flex items-center gap-4 sm:mb-10"
          >
            <motion.span
              variants={drawLine}
              className="block h-px w-10 origin-left bg-orange-600"
            />

            <p className="font-sans text-[10px] uppercase tracking-[0.28em] text-orange-600">
              Our Purpose
            </p>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mb-8 text-[clamp(2.8rem,9vw,9rem)] font-light italic leading-[0.93] tracking-tight text-black sm:mb-10"
          >
            Clarity over
            <br />
            <span className="font-semibold not-italic text-orange-600">
              noise.
            </span>{" "}
            <span className="not-italic font-light">Always.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="max-w-[600px] font-sans text-[clamp(0.95rem,1.6vw,1.2rem)] font-light leading-[1.85] text-black/70"
          >
            Collabuilder exists to create an environment where founders think
            clearly and build with intention.
          </motion.p>
        </motion.div>

        <div className="absolute bottom-8 right-5 z-10 flex flex-col items-center gap-2 sm:bottom-10 sm:right-12">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-14 w-px bg-gradient-to-b from-transparent to-orange-600"
          />

          <span className="[writing-mode:vertical-rl] font-sans text-[9px] uppercase tracking-[0.28em] text-black/40">
            Scroll
          </span>
        </div>
      </section>

      {/* ORIGIN */}
      <section className="bg-neutral-50 px-5 py-16 sm:px-8  md:px-12  lg:px-24">
        <motion.div
          variants={drawLine}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-16 h-px w-full origin-center bg-gradient-to-r from-transparent via-orange-500/20 to-transparent sm:mb-24"
        />

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="md:col-span-5"
          >
            <p className="mb-6 font-sans text-[10px] uppercase tracking-[0.28em] text-orange-600">
              The Origin
            </p>

            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-normal leading-[1.1] tracking-tight text-black">
              Built from frustration,
              <br />
              <em className="text-orange-600">not theory.</em>
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col gap-6 md:col-span-6 md:col-start-7"
          >
            {[
              {
                text: "Most founder spaces are built for visibility, not clarity.",
                hi: false,
              },
              {
                text: "Too many events. Too much noise. Too little signal.",
                hi: false,
              },
              {
                text: "We created Collabuilder as a space where founders stop reacting, start thinking, and make better decisions.",
                hi: true,
              },
            ].map((item, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                className={`font-sans text-[clamp(0.95rem,1.2vw,1.05rem)] leading-[1.85] ${
                  item.hi
                    ? "border-l-2 border-orange-600 pl-5 font-normal text-black"
                    : "font-light text-black/60"
                }`}
              >
                {item.text}
              </motion.p>
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={drawLine}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-16 h-px w-full origin-center bg-gradient-to-r from-transparent via-orange-500/20 to-transparent sm:mt-24"
        />
      </section>

      {/* MANDATE */}
      <section
        ref={mandateRef}
        className="overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20 md:px-12 md:py-28 lg:px-24"
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 md:flex-row md:gap-20">
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative w-full shrink-0 md:w-5/12"
          >
            <motion.div style={{ y: mandateY }} className="relative">
              <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCU3pGfkFQkB2R4pRbuy2YVig7qwp2ENJaLfag8ZpNAHEAD0uKK_7iw1i2GAQg1VEe9dfAtp84stX4i1C_z27BSZQpvlsRu6uCCM-k53tml-iu0IgmqOE0sU8WjX4fQvXK9JZqvfCyDT_iDxJEkw53U99q7mkViBF53O4qGI6OtS3O3cin4ON9YY8nyku0etHXmznCRcNHErC3Gw0UqRHD4CgbuiPPT_IrVb2LkqccDs3QFQ_YpzEiyVE29W_pSBbAxrbjWWCHSBIk"
                  className="h-full w-full object-cover grayscale-[25%] brightness-95"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-orange-600/5 to-transparent" />
              </div>
            </motion.div>

            <motion.div
              initial={{ scaleX: 0, scaleY: 0 }}
              whileInView={{ scaleX: 1, scaleY: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.4,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute bottom-0 right-0 h-[60px] w-[60px] origin-bottom-right border-b border-r border-orange-600"
            />

            <motion.div
              initial={{ scaleX: 0, scaleY: 0 }}
              whileInView={{ scaleX: 1, scaleY: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.5,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute left-0 top-0 h-[60px] w-[60px] origin-top-left border-l border-t border-orange-600/20"
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="w-full md:w-7/12"
          >
            <p className="mb-6 font-sans text-[10px] uppercase tracking-[0.28em] text-orange-600">
              The Mandate
            </p>

            <h2 className="mb-8 text-[clamp(2rem,4.5vw,4rem)] font-normal leading-[1.1] tracking-tight text-black">
              High-Density
              <br />
              <em className="text-orange-600">Contribution.</em>
            </h2>

            <p className="mb-12 max-w-[500px] font-sans text-[clamp(0.95rem,1.2vw,1.05rem)] font-light leading-[1.9] text-black/70">
              We keep groups intentionally small — not for exclusivity, but for
              clarity. In a focused group, there&apos;s no hiding. Everyone
              contributes, and every conversation matters.
            </p>

            <div>
              {[
                "No spectators. Every founder actively participates.",
                "Built for real thinking, not surface-level networking.",
              ].map((txt, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.3 + i * 0.15,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex items-start gap-4 border-b border-black/10 py-5 last:border-none"
                >
                  <span className="mt-1 text-sm text-orange-600">✦</span>

                  <span className="font-sans text-[clamp(0.88rem,1.1vw,0.95rem)] font-light leading-[1.75] text-black/70">
                    {txt}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* BELIEF */}
      <section className="relative overflow-hidden bg-neutral-50 px-5 py-24 text-center sm:px-8 sm:py-32 md:px-12 md:py-40">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          className="pointer-events-none absolute inset-0 flex select-none items-center justify-center text-[clamp(120px,32vw,380px)] font-bold leading-none tracking-[-0.05em] text-black/[0.025]"
        >
          Clarity
        </motion.div>

        <div className="relative z-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-8 flex items-center justify-center gap-4 sm:mb-10"
          >
            <motion.span
              variants={drawLine}
              className="block h-px w-10 bg-orange-600"
            />

            <p className="font-sans text-[10px] uppercase tracking-[0.28em] text-orange-600">
              The Belief
            </p>

            <motion.span
              variants={drawLine}
              className="block h-px w-10 bg-orange-600"
            />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mx-auto max-w-[1000px] text-[clamp(2.5rem,8vw,7.5rem)] font-light leading-[1.05] tracking-tight text-black"
          >
            Clarity{" "}
            <em className="font-semibold italic text-orange-600">changes</em>
            <br />
            everything.
          </motion.h2>

          <div className="my-12 flex justify-center">
            <div className="h-14 w-px bg-gradient-to-b from-transparent via-orange-600 to-transparent" />
          </div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mx-auto max-w-[540px] font-sans text-[clamp(0.95rem,1.5vw,1.2rem)] font-light leading-[1.9] text-black/70"
          >
            Most founders don&apos;t fail due to lack of effort — but lack of
            clarity. When clarity improves, execution follows.
          </motion.p>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 md:px-12 md:py-28 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 text-center sm:mb-20">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mb-6 flex items-center justify-center gap-4 sm:mb-8"
            >
              <motion.span
                variants={drawLine}
                className="block h-px w-10 bg-orange-600"
              />

              <p className="font-sans text-[10px] uppercase tracking-[0.28em] text-orange-600">
                The Creed
              </p>

              <motion.span
                variants={drawLine}
                className="block h-px w-10 bg-orange-600"
              />
            </motion.div>

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="text-[clamp(2rem,5vw,4.5rem)] font-normal leading-[1.1] text-black"
            >
              Our Core Principles
            </motion.h2>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-px  md:grid-cols-3"
          >
            {principles.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -10 }}
                // transition={{
                //   type: "spring",
                //   stiffness: 100,
                //   damping: 0,
                // }}
                className="border-t-2 border-orange-500/20 bg-neutral-100 p-8 transition-all duration-100 hover:bg-neutral-200 hover:shadow-[0_20px_60px_-20px_rgba(5,150,105,0.1)]"
              >
                <p className="mb-5 text-[clamp(2.5rem,5vw,3.5rem)] font-light leading-none tracking-tight text-orange-600/30">
                  {item.number}
                </p>

                <h3 className="mb-4 text-[clamp(1.4rem,2.5vw,1.75rem)] font-medium leading-tight text-black">
                  {item.title}
                </h3>

                <p className="font-sans text-[clamp(0.85rem,1.1vw,0.92rem)] font-light leading-[1.8] text-black/70">
                  {item.desc}
                </p>

                {/* <div className="mt-7 h-px w-6 bg-orange-600/60" /> */}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* BUILDERS */}
      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 md:px-12 md:py-28 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 sm:mb-20">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mb-6 flex items-center gap-4 sm:mb-8"
            >
              <motion.span
                variants={drawLine}
                className="block h-px w-10 bg-orange-600 "
              />

              <p className="font-sans text-[10px] uppercase tracking-[0.28em] text-orange-600">
                Who Built This
              </p>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mb-6 text-[clamp(2rem,4.5vw,4rem)] font-normal leading-[1.1] text-black"
            >
              Builders who needed
              <br />
              <em className="text-orange-600">this to exist.</em>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="max-w-[520px] font-sans text-[clamp(0.95rem,1.2vw,1.05rem)] font-light leading-[1.9] text-black/70"
            >
              We&apos;ve faced confusion, lack of clarity, and wrong decisions.
              Collabuilder is what we wish existed earlier.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 gap-px bg-orange-500/20 md:grid-cols-2">
            {founders.map((person, i) => (
              <motion.div
                key={i}
                whileHover={{ backgroundColor: "#EFEFEF" }}
                className="flex flex-col gap-6 bg-neutral-100 p-6 transition-all duration-300 sm:flex-row sm:gap-8 sm:p-8 md:p-10"
              >
                <div className="h-[200px] w-[200px] flex-shrink-0 overflow-hidden border border-orange-500/20">
                  <img
                    src={person.img}
                    className="h-full w-full object-cover grayscale-[20%] brightness-95"
                  />
                </div>

                <div>
                  <h4 className="mb-2 text-[clamp(1.15rem,2vw,1.4rem)] font-medium text-black">
                    {person.name}
                  </h4>

                  <p className="font-sans text-[9px] uppercase tracking-[0.28em] text-orange-600">
                    {person.role}
                  </p>

                  <p className="mt-4 font-sans text-[clamp(0.85rem,1.1vw,0.9rem)] font-light leading-[1.8] text-black/70">
                    {person.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-white py-24 text-center sm:py-32 md:py-40">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(5,150,105,0.05)_0%,transparent_70%)]" />

        <div className="relative z-10 px-5 sm:px-8 md:px-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mb-10 flex items-center justify-center gap-4 sm:mb-12"
          >
            <motion.span
              variants={drawLine}
              className="block h-px w-10 bg-orange-600"
            />

            <p className="font-sans text-[10px] uppercase tracking-[0.28em] text-orange-600">
              Join Us
            </p>

            <motion.span
              variants={drawLine}
              className="block h-px w-10 bg-orange-600"
            />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mx-auto mb-6 max-w-[900px] text-[clamp(2.5rem,9vw,8.5rem)] font-light leading-[0.95] tracking-tight text-black sm:mb-8"
          >
            Ready to think{" "}
            <em className="font-semibold text-orange-600">clearly?</em>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="mx-auto mb-12 max-w-[400px] font-sans text-[clamp(0.95rem,1.2vw,1.05rem)] font-light leading-[1.85] text-black/60 sm:mb-16"
          >
            Join a small group of founders serious about building.
          </motion.p>

          <Link to="/apply">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group relative overflow-hidden border border-orange-600 px-14 py-5 font-sans text-[11px] uppercase tracking-[0.22em] text-orange-600 transition-colors duration-300 hover:text-white"
            >
              <span className="absolute inset-0 origin-left scale-x-0 bg-orange-600 transition-transform duration-500 ease-out group-hover:scale-x-100" />

              <span className="relative z-10">Apply for the next retreat</span>
            </motion.button>
          </Link>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute bottom-0 left-0 right-0 h-px origin-left bg-orange-500/20"
        />
      </section>
    </div>
  );
}
