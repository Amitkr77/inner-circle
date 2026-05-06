import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const stagger = {
  show: { transition: { staggerChildren: 0.18 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const drawLine = {
  hidden: { scaleX: 0 },
  show: {
    scaleX: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
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

export default function About() {
  const heroRef = useRef(null);
  const mandateRef = useRef(null);
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
    <div
      className="text-neutral-900 font-sans overflow-hidden"
      style={{
        background: "var(--bg-base)",
        fontFamily: "'Cormorant Garamond', Georgia, serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600&family=DM+Sans:wght@300;400;500&display=swap');

        * { box-sizing: border-box; }

        :root {
          --em:        #059669;
          --em-mid:    #10B981;
          --em-deep:   #047857;
          --em-dim:    rgba(5, 150, 105, 0.05);
          --em-border: rgba(5, 150, 105, 0.22);

          --bg-base:   #FFFFFF;
          --bg-1:      #FAFAFA;
          --bg-2:      #F5F5F5;
          --bg-3:      #EFEFEF;

          --w95: rgba(0,0,0,0.95);
          --w90: rgba(0,0,0,0.92);
          --w75: rgba(0,0,0,0.68);
          --w60: rgba(0,0,0,0.48);
          --w40: rgba(0,0,0,0.32);
        }

        .sans  { font-family: 'DM Sans', sans-serif; }
        .serif { font-family: 'Cormorant Garamond', Georgia, serif; }

        .em-line {
          width: 40px; height: 1px;
          background: var(--em); opacity: 0.7;
          display: inline-block; flex-shrink: 0;
        }

        .label {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px; letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--em); opacity: 0.9;
          margin: 0;
        }

        .divider {
          width: 100%; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(5,150,105,0.22), transparent);
        }

        .p-card {
          background: var(--bg-2);
          border: 1px solid rgba(0,0,0,0.06);
          border-top: 2px solid var(--em-border);
          padding: 2rem 1.5rem 2.5rem;
          transition: background 0.35s, border-color 0.35s, box-shadow 0.35s;
        }
        .p-card:hover {
          background: var(--bg-3);
          border-top-color: rgba(5,150,105,0.5);
          box-shadow: 0 20px 60px -20px rgba(5,150,105,0.1);
        }

        .cta-btn {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px; font-weight: 500;
          letter-spacing: 0.22em; text-transform: uppercase;
          background: transparent;
          border: 1px solid var(--em);
          color: var(--em);
          padding: 18px 52px;
          cursor: pointer;
          position: relative; overflow: hidden;
          transition: color 0.35s, border-color 0.35s;
        }
        .cta-btn::before {
          content: '';
          position: absolute; inset: 0;
          background: var(--em);
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.4s cubic-bezier(0.22,1,0.36,1);
          z-index: 0;
        }
        .cta-btn:hover { color: #FFFFFF; border-color: var(--em); }
        .cta-btn:hover::before { transform: scaleX(1); }
        .cta-btn span { position: relative; z-index: 1; }

        .check-row {
          display: flex; align-items: flex-start; gap: 16px;
          padding: 18px 0;
          border-bottom: 1px solid rgba(0,0,0,0.07);
        }
        .check-row:last-child { border-bottom: none; }

        .stat-block { padding: 1.25rem 1.5rem; border-left: 1px solid var(--em-border); }
      `}</style>

      {/* ─── 1. HERO ─── */}
      <section
        ref={heroRef}
        className="relative min-h-[85vh] sm:min-h-screen flex flex-col justify-end pb-16 sm:pb-20 md:pb-28 px-5 sm:px-8 md:px-12 lg:px-24 overflow-hidden"
      >
        <motion.div
          style={{ y: heroY, scale: heroScale }}
          className="absolute inset-0 z-0"
        >
          <img
            className="w-full h-full object-cover"
            style={{ opacity: 0.12, filter: "grayscale(30%) brightness(1.1)" }}
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmmPz2RF0tVJDZwUor67zYSeXvPWW9dQIDk4JJ0aGkjV3CK7Renp79B8pKS-kIW0a1RAMcgEGQiEC5kNZCD24fkojwqGji2Np-3cwlzZMO4fWuqNjyI-Xa_Kafq5ST0MFEFxC7K_TmqK4bgBVbCWSl-fipdf0dSrkS_SIOO1pbvfRM7_WORFj3tLtyQbwr-uODMtugx5Oa8CCBP7abeJaJhU7ApvSwxkMXjUzqzNG5YA72ZYb7Nu1byzddaFRVrTBvYur74yDUfuk"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, #FFFFFF 25%, rgba(255,255,255,0.75) 60%, rgba(255,255,255,0.3) 100%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 40%, rgba(255,255,255,0.7) 100%)",
            }}
          />
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="absolute top-0 left-0 right-0 z-10 origin-left"
          style={{ height: "1px", background: "var(--em-border)" }}
        />

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 max-w-6xl"
        >
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="show"
            className="flex items-center gap-4 mb-8 sm:mb-10"
          >
            <motion.span
              variants={drawLine}
              className="em-line origin-left block"
            />
            <p className="label">Our Purpose</p>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="serif mb-8 sm:mb-10"
            style={{
              fontSize: "clamp(2.8rem, 9vw, 9rem)",
              fontWeight: 300,
              lineHeight: 0.93,
              letterSpacing: "-0.01em",
              fontStyle: "italic",
              color: "var(--w95)",
            }}
          >
            Clarity over
            <br />
            <span
              style={{
                color: "var(--em)",
                fontStyle: "normal",
                fontWeight: 600,
              }}
            >
              noise.
            </span>{" "}
            <span style={{ fontStyle: "normal", fontWeight: 300 }}>
              Always.
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="sans"
            style={{
              fontSize: "clamp(0.95rem, 1.6vw, 1.2rem)",
              color: "var(--w75)",
              maxWidth: "600px",
              lineHeight: 1.85,
              fontWeight: 300,
            }}
          >
            Collabuilder exists to create an environment where founders think
            clearly and build with intention.
          </motion.p>
        </motion.div>

        <div className="absolute bottom-8 sm:bottom-10 right-5 sm:right-12 z-10 flex flex-col items-center gap-2">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{
              width: "1px",
              height: "56px",
              background: "linear-gradient(to bottom, transparent, var(--em))",
            }}
          />
          <span
            className="label"
            style={{
              writingMode: "vertical-rl",
              fontSize: "9px",
              opacity: 0.5,
            }}
          >
            Scroll
          </span>
        </div>
      </section>

      {/* ─── 2. ORIGIN ─── */}
      <section
        className="relative py-16 sm:py-20 md:py-28 px-5 sm:px-8 md:px-12 lg:px-24 overflow-hidden"
        style={{ background: "var(--bg-1)" }}
      >
        <motion.div
          variants={drawLine}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="divider mb-16 sm:mb-24 origin-center"
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="md:col-span-5"
          >
            <p className="label mb-5 sm:mb-6">The Origin</p>
            <h2
              className="serif"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
                color: "var(--w95)",
              }}
            >
              Built from frustration,
              <br />
              <em style={{ color: "var(--em)" }}>not theory.</em>
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="md:col-span-6 md:col-start-7 flex flex-col gap-6 sm:gap-8"
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
                className="sans"
                style={{
                  fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)",
                  lineHeight: 1.85,
                  fontWeight: item.hi ? 400 : 300,
                  color: item.hi ? "var(--w95)" : "var(--w60)",
                  borderLeft: item.hi ? "2px solid var(--em)" : "none",
                  paddingLeft: item.hi ? "1.25rem" : "0",
                }}
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
          className="divider mt-16 sm:mt-24 origin-center"
        />
      </section>

      {/* ─── 3. THE MANDATE ─── */}
      <section
        ref={mandateRef}
        className="py-16 sm:py-20 md:py-28 px-5 sm:px-8 md:px-12 lg:px-24 overflow-hidden"
        style={{ background: "var(--bg-base)" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 sm:gap-16 md:gap-20">
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="w-full md:w-5/12 relative flex-shrink-0"
          >
            <motion.div style={{ y: mandateY }} className="relative">
              <div
                style={{
                  aspectRatio: "4/5",
                  background: "var(--bg-2)",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCU3pGfkFQkB2R4pRbuy2YVig7qwp2ENJaLfag8ZpNAHEAD0uKK_7iw1i2GAQg1VEe9dfAtp84stX4i1C_z27BSZQpvlsRu6uCCM-k53tml-iu0IgmqOE0sU8WjX4fQvXK9JZqvfCyDT_iDxJEkw53U99q7mkViBF53O4qGI6OtS3O3cin4ON9YY8nyku0etHXmznCRcNHErC3Gw0UqRHD4CgbuiPPT_IrVb2LkqccDs3QFQ_YpzEiyVE29W_pSBbAxrbjWWCHSBIk"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "grayscale(25%) brightness(0.95) contrast(1.05)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(5,150,105,0.06), transparent 60%)",
                  }}
                />
              </div>
            </motion.div>

            {/* Animated corner decorations */}
            <motion.div
              initial={{ scaleX: 0, scaleY: 0 }}
              whileInView={{ scaleX: 1, scaleY: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.4,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                position: "absolute",
                bottom: "-1px",
                right: "-1px",
                width: "60px",
                height: "60px",
                borderBottom: "1px solid var(--em)",
                borderRight: "1px solid var(--em)",
                transformOrigin: "bottom right",
              }}
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
              style={{
                position: "absolute",
                top: "-1px",
                left: "-1px",
                width: "60px",
                height: "60px",
                borderTop: "1px solid var(--em-border)",
                borderLeft: "1px solid var(--em-border)",
                transformOrigin: "top left",
              }}
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="w-full md:w-7/12"
          >
            <p className="label mb-5 sm:mb-6">The Mandate</p>
            <h2
              className="serif mb-6 sm:mb-8"
              style={{
                fontSize: "clamp(2rem, 4.5vw, 4rem)",
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
                color: "var(--w95)",
              }}
            >
              High-Density
              <br />
              <em style={{ color: "var(--em)" }}>Contribution.</em>
            </h2>
            <p
              className="sans mb-8 sm:mb-12"
              style={{
                fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)",
                color: "var(--w75)",
                lineHeight: 1.9,
                fontWeight: 300,
                maxWidth: "500px",
              }}
            >
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
                  className="check-row"
                >
                  <motion.span
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.4 + i * 0.15,
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                    }}
                    style={{
                      color: "var(--em)",
                      marginTop: "3px",
                      fontSize: "13px",
                      flexShrink: 0,
                    }}
                  >
                    ✦
                  </motion.span>
                  <span
                    className="sans"
                    style={{
                      fontSize: "clamp(0.88rem, 1.1vw, 0.95rem)",
                      fontWeight: 300,
                      lineHeight: 1.75,
                      color: "var(--w75)",
                    }}
                  >
                    {txt}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── 4. BELIEF ─── */}
      <section
        className="relative py-24 sm:py-32 md:py-40 px-5 sm:px-8 md:px-12 text-center overflow-hidden"
        style={{ background: "var(--bg-1)" }}
      >
        {/* Ghost text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.3 }}
          className="absolute inset-0 flex items-center justify-center serif pointer-events-none select-none"
          style={{
            fontSize: "clamp(120px, 32vw, 380px)",
            fontWeight: 700,
            color: "rgba(0,0,0,0.025)",
            letterSpacing: "-0.05em",
            lineHeight: 1,
          }}
        >
          Clarity
        </motion.div>

        <div className="relative z-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-8 sm:mb-10"
          >
            <motion.span
              variants={drawLine}
              className="em-line origin-right block"
            />
            <p className="label">The Belief</p>
            <motion.span
              variants={drawLine}
              className="em-line origin-left block"
            />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="serif mx-auto"
            style={{
              fontSize: "clamp(2.5rem, 8vw, 7.5rem)",
              fontWeight: 300,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              maxWidth: "1000px",
              color: "var(--w95)",
            }}
          >
            Clarity{" "}
            <em
              style={{
                color: "var(--em)",
                fontWeight: 600,
                fontStyle: "italic",
              }}
            >
              changes
            </em>
            <br />
            everything.
          </motion.h2>

          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center my-10 sm:my-12"
          >
            <div
              style={{
                width: "1px",
                height: "56px",
                background:
                  "linear-gradient(to bottom, transparent, var(--em), transparent)",
                transformOrigin: "center",
              }}
            />
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="sans mx-auto"
            style={{
              fontSize: "clamp(0.95rem, 1.5vw, 1.2rem)",
              color: "var(--w75)",
              maxWidth: "540px",
              lineHeight: 1.9,
              fontWeight: 300,
            }}
          >
            Most founders don&apos;t fail due to lack of effort — but lack of
            clarity. When clarity improves, execution follows.
          </motion.p>
        </div>
      </section>

      {/* ─── 5. EXPERIENCE ─── */}
      <section
        className="py-16 sm:py-20 md:py-28 px-5 sm:px-8 md:px-12 lg:px-24"
        style={{ background: "var(--bg-base)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-end">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="md:col-span-5"
            >
              <p className="label mb-5 sm:mb-6">The Environment</p>
              <h2
                className="serif"
                style={{
                  fontSize: "clamp(2rem, 4.5vw, 4.5rem)",
                  fontWeight: 400,
                  lineHeight: 1.1,
                  color: "var(--em)",
                }}
              >
                A different kind
                <br />
                <em style={{ color: "var(--w95)" }}>of environment</em>
              </h2>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="md:col-span-6 md:col-start-7"
            >
              <div
                style={{
                  borderLeft: "1px solid var(--em-border)",
                  paddingLeft: "1.5rem",
                }}
              >
                {[
                  { text: "Not designed for scale.", dim: true },
                  { text: "Designed for depth.", dim: false },
                  {
                    text: "Small groups. Focused sessions. No distractions.",
                    dim: true,
                  },
                ].map((item, i) => (
                  <motion.p
                    key={i}
                    variants={fadeUp}
                    className="sans"
                    style={{
                      fontSize:
                        i === 1
                          ? "clamp(1.15rem, 1.8vw, 1.4rem)"
                          : "clamp(0.95rem, 1.2vw, 1.05rem)",
                      fontWeight: i === 1 ? 500 : 300,
                      color: item.dim ? "var(--w60)" : "var(--w95)",
                      lineHeight: 1.7,
                      marginBottom: "1.25rem",
                      letterSpacing: i === 1 ? "-0.01em" : "0",
                    }}
                  >
                    {item.text}
                  </motion.p>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="grid grid-cols-1 sm:grid-cols-3 mt-10 sm:mt-12"
                style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}
              >
                {[
                  { n: "12", label: "Founders per cohort" },
                  { n: "4×", label: "Sessions per month" },
                  { n: "100%", label: "Active participation" },
                ].map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.4 + i * 0.12,
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="stat-block"
                  >
                    <p
                      className="serif"
                      style={{
                        fontSize: "clamp(1.8rem, 3vw, 2.2rem)",
                        fontWeight: 600,
                        color: "var(--em)",
                        lineHeight: 1,
                      }}
                    >
                      {s.n}
                    </p>
                    <p
                      className="sans"
                      style={{
                        fontSize: "11px",
                        color: "var(--w60)",
                        marginTop: "6px",
                        lineHeight: 1.5,
                      }}
                    >
                      {s.label}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── 6. PRINCIPLES ─── */}
      <section
        className="py-16 sm:py-20 md:py-28 px-5 sm:px-8 md:px-12 lg:px-24"
        style={{ background: "var(--bg-1)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14 sm:mb-20">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex items-center justify-center gap-4 mb-6 sm:mb-8"
            >
              <motion.span
                variants={drawLine}
                className="em-line origin-right block"
              />
              <p className="label">The Creed</p>
              <motion.span
                variants={drawLine}
                className="em-line origin-left block"
              />
            </motion.div>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="serif"
              style={{
                fontSize: "clamp(2rem, 5vw, 4.5rem)",
                fontWeight: 400,
                lineHeight: 1.1,
                color: "var(--w95)",
              }}
            >
              Our Core Principles
            </motion.h2>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-px"
            style={{ background: "var(--em-border)" }}
          >
            {principles.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="p-card"
              >
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                  className="serif"
                  style={{
                    fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                    fontWeight: 300,
                    color: "rgba(5,150,105,0.25)",
                    lineHeight: 1,
                    marginBottom: "1.25rem",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {item.number}
                </motion.p>
                <h3
                  className="serif mb-3 sm:mb-4"
                  style={{
                    fontSize: "clamp(1.4rem, 2.5vw, 1.75rem)",
                    fontWeight: 500,
                    lineHeight: 1.2,
                    letterSpacing: "-0.01em",
                    color: "var(--w95)",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="sans"
                  style={{
                    fontSize: "clamp(0.85rem, 1.1vw, 0.92rem)",
                    color: "var(--w75)",
                    lineHeight: 1.8,
                    fontWeight: 300,
                  }}
                >
                  {item.desc}
                </p>
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.5 + i * 0.1,
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{
                    width: "24px",
                    height: "1px",
                    background: "var(--em)",
                    opacity: 0.6,
                    marginTop: "1.75rem",
                    transformOrigin: "left",
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── 7. BUILDERS ─── */}
      <section
        className="py-16 sm:py-20 md:py-28 px-5 sm:px-8 md:px-12 lg:px-24"
        style={{ background: "var(--bg-base)" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="mb-14 sm:mb-20">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-6 sm:mb-8"
            >
              <motion.span
                variants={drawLine}
                className="em-line origin-left block"
              />
              <p className="label">Who Built This</p>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="serif mb-5 sm:mb-6"
              style={{
                fontSize: "clamp(2rem, 4.5vw, 4rem)",
                fontWeight: 400,
                lineHeight: 1.1,
                color: "var(--w95)",
              }}
            >
              Builders who needed
              <br />
              <em style={{ color: "var(--em)" }}>this to exist.</em>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="sans"
              style={{
                fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)",
                color: "var(--w75)",
                lineHeight: 1.9,
                fontWeight: 300,
                maxWidth: "520px",
              }}
            >
              We&apos;ve faced confusion, lack of clarity, and wrong decisions.
              Collabuilder is what we wish existed earlier.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 md:grid-cols-2 gap-px"
            style={{ background: "var(--em-border)" }}
          >
            {[
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
            ].map((person, i) => (
              <motion.div
                key={i}
                whileHover={{ backgroundColor: "var(--bg-3)" }}
                transition={{ duration: 0.3 }}
                className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start p-6 sm:p-8 md:p-10"
                style={{ background: "var(--bg-2)" }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
                  className="w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] md:w-[200px] md:h-[200px] flex-shrink-0 overflow-hidden"
                  style={{ border: "1px solid var(--em-border)" }}
                >
                  <img
                    src={person.img}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      filter: "grayscale(20%) brightness(0.95)",
                    }}
                  />
                </motion.div>
                <div>
                  <motion.h4
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
                    className="serif mb-1.5 sm:mb-2"
                    style={{
                      fontSize: "clamp(1.15rem, 2vw, 1.4rem)",
                      fontWeight: 500,
                      lineHeight: 1.2,
                      color: "var(--w95)",
                    }}
                  >
                    {person.name}
                  </motion.h4>
                  <p className="label" style={{ fontSize: "9px" }}>
                    {person.role}
                  </p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.15, duration: 0.5 }}
                    className="sans mt-3 sm:mt-4"
                    style={{
                      fontSize: "clamp(0.85rem, 1.1vw, 0.9rem)",
                      color: "var(--w75)",
                      lineHeight: 1.8,
                      fontWeight: 300,
                    }}
                  >
                    {person.desc}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── 8. POSITIONING ─── */}
      <section
        className="relative py-16 sm:py-20 md:py-28 px-5 sm:px-8 md:px-12 lg:px-24 text-center overflow-hidden"
        style={{ background: "var(--bg-2)" }}
      >
        <motion.div
          variants={drawLine}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="divider mb-14 sm:mb-20 origin-center"
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="serif mb-6 sm:mb-8"
            style={{
              fontSize: "clamp(2rem, 5vw, 4.5rem)",
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
              color: "var(--w95)",
            }}
          >
            This is not
            <br />
            <em style={{ color: "var(--w60)" }}>for everyone.</em>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="sans mb-6 sm:mb-8"
            style={{
              fontSize: "clamp(0.95rem, 1.3vw, 1.1rem)",
              color: "var(--w60)",
              lineHeight: 1.85,
              fontWeight: 300,
            }}
          >
            If you&apos;re looking for casual networking or passive learning —
            this isn&apos;t it.
          </motion.p>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="sans"
            style={{
              fontSize: "clamp(1.05rem, 1.5vw, 1.25rem)",
              color: "var(--em)",
              lineHeight: 1.7,
              fontWeight: 400,
            }}
          >
            But if you want clarity, direction, and real progress — you&apos;ll
            feel it immediately.
          </motion.p>
        </div>
        <motion.div
          variants={drawLine}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="divider mt-14 sm:mt-20 origin-center"
        />
      </section>

      {/* ─── 9. FINAL CTA ─── */}
      <section
        className="relative py-24 sm:py-32 md:py-40 text-center overflow-hidden"
        style={{ background: "var(--bg-base)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(5,150,105,0.05) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 px-5 sm:px-8 md:px-12">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-10 sm:mb-12"
          >
            <motion.span
              variants={drawLine}
              className="em-line origin-right block"
            />
            <p className="label">Join Us</p>
            <motion.span
              variants={drawLine}
              className="em-line origin-left block"
            />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="serif mx-auto mb-6 sm:mb-8"
            style={{
              fontSize: "clamp(2.5rem, 9vw, 8.5rem)",
              fontWeight: 300,
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              maxWidth: "900px",
              color: "var(--w95)",
            }}
          >
            Ready to think{" "}
            <em style={{ color: "var(--em)", fontWeight: 600 }}>clearly?</em>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="sans mb-12 sm:mb-16 mx-auto"
            style={{
              fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)",
              color: "var(--w60)",
              maxWidth: "400px",
              lineHeight: 1.85,
              fontWeight: 300,
            }}
          >
            Join a small group of founders serious about building.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Link to="/apply">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="cta-btn"
              >
                <span>Apply for the next retreat</span>
              </motion.button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-0 left-0 right-0 origin-left"
          style={{ height: "1px", background: "var(--em-border)" }}
        />
      </section>
    </div>
  );
}
