// import { useState } from "react";
// import React from "react";
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
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const IMAGES = {
  hero: heroimg,
  support:
    "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?w=600&q=80",
  partnership:
    "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
  press:
    "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&q=80",
  network:
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1400&q=80",
};

const GlowDot = ({ pulse = false }: { pulse?: boolean }) => (
  <span
    style={{
      display: "inline-block",
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: "#10b981",
      boxShadow: "0 0 8px #10b981, 0 0 16px rgba(16,185,129,0.4)",
      animation: pulse ? "pulse 2s infinite" : "none",
    }}
  />
);

// const InputField = ({
//   label,
//   placeholder,
//   type = "text",
//   as,
// }: {
//   label: string;
//   placeholder: string;
//   type?: string;
//   as?: "textarea" | "select";
// }) => {
//   const [focused, setFocused] = useState(false);
//   const baseStyle: React.CSSProperties = {
//     width: "100%",
//     background: "rgba(255,255,255,0.05)",
//     border: `1px solid ${focused ? "#10b981" : "rgba(255,255,255,0.1)"}`,
//     borderRadius: "0.75rem",
//     color: "#fff",
//     padding: "0.75rem 1rem",
//     outline: "none",
//     fontFamily: "'Inter', sans-serif",
//     fontSize: "0.85rem",
//     letterSpacing: "0.01em",
//     resize: "none" as const,
//     transition: "border-color 0.2s, box-shadow 0.2s",
//     boxShadow: focused ? "0 0 0 2px rgba(16,185,129,0.1)" : "none",
//     boxSizing: "border-box" as const,
//   };

//   return (
//     <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
//       <label
//         style={{
//           fontFamily: "'Inter', sans-serif",
//           fontSize: "0.65rem",
//           fontWeight: 700,
//           letterSpacing: "0.15em",
//           textTransform: "uppercase",
//           color: "rgba(255,255,255,0.4)",
//         }}
//       >
//         {label}
//       </label>
//       {as === "textarea" ? (
//         <textarea
//           rows={5}
//           placeholder={placeholder}
//           style={baseStyle}
//           onFocus={() => setFocused(true)}
//           onBlur={() => setFocused(false)}
//         />
//       ) : as === "select" ? (
//         <select
//           style={{ ...baseStyle, appearance: "none", cursor: "pointer", background: "#0d1526" }}
//           onFocus={() => setFocused(true)}
//           onBlur={() => setFocused(false)}
//         >
//           <option value="builder" style={{ background: "#0d1526" }}>Builder</option>
//           <option value="investor" style={{ background: "#0d1526" }}>Investor</option>
//           <option value="partner" style={{ background: "#0d1526" }}>Partner</option>
//           <option value="press" style={{ background: "#0d1526" }}>Press / Media</option>
//         </select>
//       ) : (
//         <input
//           type={type}
//           placeholder={placeholder}
//           style={baseStyle}
//           onFocus={() => setFocused(true)}
//           onBlur={() => setFocused(false)}
//         />
//       )}
//     </div>
//   );
// };

export default function Contact() {
  const navigate = useNavigate();
  // const [submitted,] = useState(false);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 80]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;900&display=swap');

        @keyframes pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 8px #10b981, 0 0 16px rgba(16,185,129,0.4); }
          50% { opacity: 0.5; box-shadow: 0 0 4px #10b981; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.7s ease forwards; }
        ::placeholder {
          color: rgba(255,255,255,0.2) !important;
          font-family: 'Inter', sans-serif;
          font-size: 0.82rem;
        }
      `}</style>

      <div
        style={{
          background: "#070b14",
          minHeight: "100%",
          color: "#fff",
          fontFamily: "'Inter', sans-serif",
          overflowX: "hidden",
        }}
      >
        {/* ── HERO SECTION ── */}
        <section
          style={{
            position: "relative",
            width: "100%",
            minHeight: "100vh",
            display: "flex",
            alignItems: "flex-start", // 👈 top align
            justifyContent: "flex-start",
            overflow: "hidden",
            paddingTop: "6rem", // ✅ upper padding add
          }}
        >
          {/* Background image */}
          <motion.div
            style={{
              position: "absolute",
              inset: 0,
              y: y1,
              zIndex: 0,
            }}
          >
            <img
              src={IMAGES.hero}
              alt="Hero background"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top",
                display: "block",
              }}
            />
          </motion.div>

          {/* Bottom fade */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "180px",
              background:
                "linear-gradient(to bottom, transparent 0%, #070b14 100%)",
              zIndex: 2,
            }}
          />

          {/* Content */}
          <div
            style={{
              position: "relative",
              zIndex: 3,
              maxWidth: 1152,
              width: "100%",
              margin: "0 auto",
              padding: "4rem 2rem 6rem", // ✅ balanced spacing
            }}
          >
            <div style={{ maxWidth: 560 }}>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                  color: "#10b981",
                  fontSize: "0.65rem",
                  letterSpacing: "0.3em",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  marginBottom: "1.5rem",
                  display: "inline-block",
                  padding: "0.4rem 1rem",
                  border: "1px solid rgba(16,185,129,0.3)",
                  borderRadius: "100px",
                  background: "rgba(16,185,129,0.05)",
                }}
              >
                CONTACT · HIGH INTENT ONLY
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                style={{
                  fontSize: "clamp(2.8rem, 6vw, 5rem)",
                  fontWeight: 700,
                  lineHeight: 1.05,
                  color: "#fff",
                  marginBottom: "1.5rem",
                }}
              >
                Start the
                <br />
                conversation.
                <br />
                <span style={{ color: "#10b981" }}>Build with intent.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{
                  fontSize: "0.9rem",
                  color: "rgba(255,255,255,0.45)",
                  lineHeight: 1.7,
                  maxWidth: 400,
                }}
              >
                Whether you're applying, partnering, or exploring — reach out
                with clarity. We respond to meaningful conversations only.
              </motion.p>
            </div>
          </div>
        </section>

        {/* ── CONTACT CARDS ── */}
        <section
          style={{
            maxWidth: 1152,
            margin: "0 auto",
            padding: "6rem 2rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
          }}
        >
          {[
            {
              title: "Retreat Applications",
              desc: "Skip the conversation. Apply directly for the next retreat.",
              action: "Apply Now →",
              onClick: () => navigate("/apply"),
            },
            {
              title: "Partnerships",
              desc: "Collaborate, contribute, or build together.",
              action: "hello@collabuilder.com",
              onClick: () =>
                (window.location.href = "mailto:hello@collabuilder.com"),
            },
            {
              title: "Mentors & Investors",
              desc: "A high-trust network designed for founders, mentors, and investors to collaborate deeply.",
              action: "Launching Soon",
              onClick: () => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              },
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              whileHover={{ y: -5 }}
              onClick={item.onClick}
              style={{
                padding: "2rem",
                borderRadius: "1.5rem",
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(255,255,255,0.08)",
                transition: "all 0.3s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "#10b981";
                (e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "rgba(255,255,255,0.08)";
                (e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(0px)";
              }}
            >
              <h3
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "#fff",
                  marginBottom: "0.5rem",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  fontSize: "0.82rem",
                  color: "rgba(255,255,255,0.4)",
                  marginBottom: "1rem",
                  lineHeight: 1.6,
                  fontWeight: 300,
                }}
              >
                {item.desc}
              </p>

              <p
                style={{
                  fontSize: "0.82rem",
                  color: "#10b981",
                  fontWeight: 600,
                }}
              >
                {item.action}
              </p>
            </motion.div>
          ))}
        </section>

        {/* ── INQUIRY FORM ── */}
        <section
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            background: "rgba(255,255,255,0.01)",
          }}
        >
          <div
            style={{
              maxWidth: 1200,
              margin: "0 auto",
              padding: "5rem 2rem",
              display: "grid",
              gridTemplateColumns: "1fr 1.4fr",
              gap: "5rem",
              alignItems: "start",
            }}
          >
            {/* Left side */}
            <div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.6rem",
                  letterSpacing: "0.3em",
                  color: "#10b981",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  marginBottom: "1rem",
                }}
              >
                ⬡ TRANSMISSION PROTOCOL
              </div>
              <h2
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                  fontWeight: 700,
                  color: "#fff",
                  lineHeight: 1.05,
                  marginBottom: "1.5rem",
                  letterSpacing: "-0.04em",
                }}
              >
                THE BUILD
                <br />
                INQUIRY
              </h2>
              <p
                style={{
                  fontSize: "0.82rem",
                  color: "rgba(255,255,255,0.4)",
                  lineHeight: 1.8,
                  marginBottom: "2.5rem",
                  maxWidth: 320,
                  fontWeight: 300,
                }}
              >
                Transmit your project specifications. Our intake engine will
                route your request to the appropriate sector within 12 standard
                operating cycles.
              </p>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  marginBottom: "2.5rem",
                }}
              >
                {[
                  { label: "Foundry Queue: Minimal Latency", pulse: true },
                  // { label: "Global Network Status: Operational", pulse: false },
                ].map((s) => (
                  <div
                    key={s.label}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "10px 16px",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "0.75rem",
                      fontSize: "0.65rem",
                      letterSpacing: "0.1em",
                      color: "rgba(255,255,255,0.4)",
                      textTransform: "uppercase",
                      fontWeight: 700,
                    }}
                  >
                    <GlowDot pulse={s.pulse} />
                    {s.label}
                  </div>
                ))}
              </div>

              <div
                style={{
                  position: "relative",
                  height: 180,
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "1.5rem",
                }}
              >
                <img
                  src={IMAGES.support}
                  alt="engineering workspace"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    opacity: 0.3,
                    filter: "grayscale(60%)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(135deg, rgba(16,185,129,0.08) 0%, transparent 60%)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 12,
                    left: 16,
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.6rem",
                    color: "#10b981",
                    letterSpacing: "0.1em",
                    fontWeight: 700,
                    textTransform: "uppercase",
                  }}
                >
                  FORGE_NODE_01 // ONLINE
                </div>
              </div>
            </div>

            {/* Right: Form */}
            {/* <div>
              {submitted ? (
                <div
                  style={{
                    background: "rgba(16,185,129,0.04)",
                    border: "1px solid rgba(16,185,129,0.2)",
                    borderRadius: "2rem",
                    padding: "3rem",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: "50%",
                      background: "rgba(16,185,129,0.1)",
                      border: "1px solid rgba(16,185,129,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 1rem",
                      fontSize: "1.5rem",
                      color: "#10b981",
                    }}
                  >
                    ✓
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      color: "#10b981",
                      letterSpacing: "-0.02em",
                      marginBottom: "0.75rem",
                    }}
                  >
                    Transmission Received
                  </h3>
                  <p style={{ fontSize: "0.82rem", color: "rgba(255,255,255,0.4)", fontWeight: 300 }}>
                    Your inquiry has been routed to the appropriate sector.
                    <br />
                    Expect response within 12 operating cycles.
                  </p>
                </div>
              ) : (
                <div
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "2rem",
                    backdropFilter: "blur(16px)",
                    padding: "2.5rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.25rem",
                  }}
                >
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
                    <InputField label="Name" placeholder="Identify self" />
                    <InputField label="Organization" placeholder="Entity name" />
                  </div>
                  <InputField label="Role Selection" placeholder="" as="select" />
                  <InputField
                    label="Message"
                    placeholder="Describe project parameters..."
                    as="textarea"
                  />

                  <button
                    onClick={() => setSubmitted(true)}
                    style={{
                      background: "linear-gradient(135deg, #10b981, #059669)",
                      color: "#fff",
                      border: "none",
                      borderRadius: "100px",
                      padding: "1.1rem 2rem",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.7rem",
                      fontWeight: 900,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 10,
                      transition: "box-shadow 0.3s, transform 0.2s",
                      boxShadow: "0 0 20px rgba(16,185,129,0.2)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.boxShadow =
                        "0 0 40px rgba(16,185,129,0.35)";
                      (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.boxShadow =
                        "0 0 20px rgba(16,185,129,0.2)";
                      (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                    }}
                  >
                    SUBMIT TRANSMISSION →
                  </button>
                </div>
              )}
            </div> */}
            <ContactForm />
          </div>
        </section>

        {/* ── CTA SECTION ── */}
        <section style={{ padding: "2rem 2rem", textAlign: "center" }}>
          <motion.h2
            initial="hidden"
            whileInView="show"
            variants={fadeUp}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "#fff",
              letterSpacing: "-0.04em",
              marginBottom: "2rem",
              lineHeight: 1.1,
            }}
          >
            Don't just reach out.
            <br />
            <span style={{ color: "#10b981" }}>
              Build something meaningful.
            </span>
          </motion.h2>

          {/* <motion.button
            whileHover={{ scale: 1.05 }}
            style={{
              background: "#10b981",
              color: "#000",
              border: "none",
              borderRadius: "100px",
              padding: "1rem 2.5rem",
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.85rem",
              fontWeight: 700,
              cursor: "pointer",
              letterSpacing: "0.05em",
            }}
          >
            Start the conversation →
          </motion.button> */}
        </section>
      </div>
    </>
  );
}
