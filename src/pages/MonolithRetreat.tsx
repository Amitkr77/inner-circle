import { useState, useRef } from "react";
import type { ChangeEvent } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface FormData {
  fullName: string;
  linkedin: string;
  company: string;
  stage: string;
  phone: string;
  email: string;
  location: string;
  hardestProblem: string;
  contribution: string;
  breakthrough: string;
  cohortDate: string;
  dietary: string;
  notes: string;
}

interface FieldConfig {
  label: string;
  name: keyof FormData;
  type?: string;
  placeholder: string;
  options?: { label: string; value: string }[];
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const stagger = {
  show: { transition: { staggerChildren: 0.06 } },
};

// const drawLine = {
//   hidden: { scaleX: 0 },
//   show: { scaleX: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
// };

const basicFields: FieldConfig[] = [
  {
    label: "Full Name",
    name: "fullName",
    type: "text",
    placeholder: "John Doe",
  },
  {
    label: "LinkedIn Profile",
    name: "linkedin",
    type: "url",
    placeholder: "linkedin.com/in/...",
  },
  {
    label: "Company Name",
    name: "company",
    type: "text",
    placeholder: "Acme Corp",
  },
  {
    label: "Current Stage / Revenue",
    name: "stage",
    placeholder: "Select the stage",
    type: "select",
    options: [
      { label: "Ideation", value: "idea" },
      { label: "MVP", value: "mvp" },
      { label: "Pre-Seed", value: "pre-seed" },
      { label: "Seed", value: "seed" },
      { label: "Series A & Above", value: "series-a & above" },
    ],
  },
  {
    label: "Contact / WhatsApp",
    name: "phone",
    type: "tel",
    placeholder: "+1 (555) 000-0000",
  },
  {
    label: "Email ID",
    name: "email",
    type: "email",
    placeholder: "john@example.com",
  },
  {
    label: "Location",
    name: "location",
    type: "text",
    placeholder: "San Francisco, CA",
  },
];

const deepDiveFields: FieldConfig[] = [
  {
    label: "What is the hardest problem you're solving right now?",
    name: "hardestProblem",
    placeholder: "Scaling cultural integrity during hyper-growth...",
  },
  {
    label: "What do you hope to contribute to the group?",
    name: "contribution",
    placeholder: "Hard-won expertise in GTM strategy and failure states...",
  },
  {
    label: "What breakthroughs have you had in the last 6 months?",
    name: "breakthrough",
    placeholder: "Developed a new framework for handling customer feedback...",
  },
];

export default function MonolithRetreat() {
  const navigate = useNavigate();
  const formRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: formRef,
    offset: ["start start", "end end"],
  });
  const headerOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    linkedin: "",
    company: "",
    stage: "",
    phone: "",
    email: "",
    location: "",
    hardestProblem: "",
    contribution: "",
    breakthrough: "",
    cohortDate: "Rishikesh Retreat",
    dietary: "",
    notes: "",
  });

  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const ZOHO_FLOW_WEBHOOK_URL =
        "/zoho-webhook/921703489/flow/webhook/incoming?zapikey=1001.3a8f40c7d56c15ca8ff9f88e1702f159.4c9d09fc73d1a99a0f53721dc345ec49&isdebug=false";

      const response = await fetch(ZOHO_FLOW_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setFormData({
          fullName: "",
          linkedin: "",
          company: "",
          stage: "",
          phone: "",
          email: "",
          location: "",
          hardestProblem: "",
          contribution: "",
          breakthrough: "",
          cohortDate: "Rishikesh Retreat",
          dietary: "",
          notes: "",
        });
        navigate("/success");
      } else {
        alert("Error submitting form. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-[Manrope]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,100..900;1,100..900&family=Manrope:wght@200..800&display=swap');
      `}</style>

      <main
        ref={formRef}
        className="pt-28 sm:pt-32 pb-20 sm:pb-24 px-5 sm:px-6 lg:px-12 max-w-7xl mx-auto"
      >
        {/* ── Hero ── */}
        <motion.header
          style={{ opacity: headerOpacity }}
          className="mb-16 sm:mb-24 lg:mb-32 max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 sm:mb-5 flex items-center gap-3"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-px w-5 bg-orange-500 origin-left block"
            />
            <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] text-orange-600">
              Phase One
            </span>
          </motion.div>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
              className="font-[Epilogue] text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[0.92] tracking-[-0.03em] text-neutral-900 mb-5 sm:mb-6"
            >
              The Application.
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-[15px] sm:text-[18px] sm:text-xl text-neutral-500 leading-relaxed"
          >
            An intentional process for intentional founders. We curate our
            cohorts with surgical precision to ensure maximum collective
            intelligence.
          </motion.p>
        </motion.header>

        {/* ── Form Grid ── */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 lg:grid-cols-7 gap-10 sm:gap-12 lg:gap-16"
        >
          {/* ── Left Column ── */}
          <div className="lg:col-span-5 space-y-16 sm:space-y-20">
            {/* Section 1: The Basics */}
            <motion.section
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={stagger}
            >
              <div className="flex items-baseline gap-3 sm:gap-4 mb-10 sm:mb-12">
                <motion.span
                  variants={fadeUp}
                  className="font-[Epilogue] text-2xl sm:text-3xl font-light italic text-orange-500"
                >
                  01
                </motion.span>
                <motion.h2
                  variants={fadeUp}
                  className="font-[Epilogue] text-2xl sm:text-3xl font-bold text-neutral-900"
                >
                  The Basics
                </motion.h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                {basicFields.map((field) => (
                  <motion.div
                    key={field.name}
                    variants={fadeUp}
                    className="group"
                  >
                    <label className="block text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-neutral-400 group-focus-within:text-orange-600 mb-2.5 sm:mb-3 transition-colors font-semibold">
                      {field.label}
                    </label>
                    {field.type === "select" ? (
                      <div className="relative">
                        <select
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleChange}
                          className="w-full bg-neutral-50 border border-neutral-200 focus:border-orange-500 focus:ring-1 focus:ring-orange-500/10 py-3 sm:py-3.5 text-sm text-neutral-900 focus:outline-none transition-all appearance-none cursor-pointer rounded-sm"
                        >
                          <option value="" className="text-neutral-400">
                            Select Stage
                          </option>
                          {field.options?.map((opt) => (
                            <option
                              key={opt.value}
                              value={opt.value}
                              className="bg-white"
                            >
                              {opt.label}
                            </option>
                          ))}
                        </select>
                        <svg
                          className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    ) : (
                      <input
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        value={formData[field.name]}
                        onChange={handleChange}
                        onFocus={() => setFocusedField(field.name)}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full bg-transparent border-b-2 border-neutral-200 focus:border-orange-500 py-3 sm:py-3.5 text-sm text-neutral-900 placeholder:text-neutral-300 focus:outline-none transition-all duration-300 ${
                          focusedField === field.name
                            ? "border-orange-500 bg-orange-50/30"
                            : ""
                        }`}
                      />
                    )}
                    {/* Animated underline */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-px bg-orange-500 origin-left"
                      initial={{ scaleX: 0 }}
                      animate={
                        focusedField === field.name
                          ? { scaleX: 1 }
                          : { scaleX: 0 }
                      }
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Section 2: Deep Dive */}
            <motion.section
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={stagger}
            >
              <div className="flex items-baseline gap-3 sm:gap-4 mb-10 sm:mb-12">
                <motion.span
                  variants={fadeUp}
                  className="font-[Epilogue] text-2xl sm:text-3xl font-light italic text-orange-500"
                >
                  02
                </motion.span>
                <motion.h2
                  variants={fadeUp}
                  className="font-[Epilogue] text-2xl sm:text-3xl font-bold text-neutral-900"
                >
                  Deep Dive
                </motion.h2>
              </div>

              <div className="space-y-8 sm:space-y-10">
                {deepDiveFields.map((field) => (
                  <motion.div
                    key={field.name}
                    variants={fadeUp}
                    className="group relative"
                  >
                    <label className="block text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-neutral-400 group-focus-within:text-orange-600 mb-2.5 sm:mb-3 transition-colors font-semibold">
                      {field.label}
                    </label>
                    <textarea
                      name={field.name}
                      placeholder={field.placeholder}
                      rows={3}
                      value={formData[field.name]}
                      onChange={handleChange}
                      onFocus={() => setFocusedField(field.name)}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full bg-transparent border-b-2 border-neutral-200 focus:border-orange-500 py-3 sm:py-3.5 text-sm text-neutral-900 placeholder:text-neutral-300 focus:outline-none transition-all duration-300 resize-none leading-relaxed ${
                        focusedField === field.name
                          ? "border-orange-500 bg-orange-50/30"
                          : ""
                      }`}
                    />
                    <motion.div
                      className="absolute bottom-0 left-0 h-px bg-orange-500 origin-left"
                      initial={{ scaleX: 0 }}
                      animate={
                        focusedField === field.name
                          ? { scaleX: 1 }
                          : { scaleX: 0 }
                      }
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Section 3: Logistics */}
            <motion.section
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={stagger}
            >
              <div className="flex items-baseline gap-3 sm:gap-4 mb-10 sm:mb-12">
                <motion.span
                  variants={fadeUp}
                  className="font-[Epilogue] text-2xl sm:text-3xl font-light italic text-orange-500"
                >
                  03
                </motion.span>
                <motion.h2
                  variants={fadeUp}
                  className="font-[Epilogue] text-2xl sm:text-3xl font-bold text-neutral-900"
                >
                  Logistics
                </motion.h2>
              </div>

              <motion.div variants={fadeUp} className="space-y-6 sm:space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                  <div className="group relative">
                    <label className="block text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-neutral-400 group-focus-within:text-orange-600 mb-2.5 sm:mb-3 transition-colors font-semibold">
                      Preferred Retreat
                    </label>
                    <div className="relative">
                      <select
                        name="cohortDate"
                        value={formData.cohortDate}
                        onChange={handleChange}
                        className="w-full bg-neutral-50 border border-neutral-200 focus:border-orange-500 focus:ring-1 focus:ring-orange-500/10 py-3 sm:py-3.5 text-sm text-neutral-900 focus:outline-none transition-all appearance-none cursor-pointer rounded-sm"
                      >
                        <option value="Rishikesh Retreat" className="bg-white">
                          Rishikesh Retreat
                        </option>
                        <option value="Manali Mountains" className="bg-white">
                          Manali Mountains
                        </option>
                      </select>
                      <svg
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                    <motion.div
                      className="absolute bottom-0 left-0 h-px bg-orange-500 origin-left"
                      initial={{ scaleX: 0 }}
                      animate={
                        focusedField === "cohortDate"
                          ? { scaleX: 1 }
                          : { scaleX: 0 }
                      }
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>

                  <div className="group relative">
                    <label className="block text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-neutral-400 group-focus-within:text-orange-600 mb-2.5 sm:mb-3 transition-colors font-semibold">
                      Dietary Requirements
                    </label>
                    <input
                      type="text"
                      name="dietary"
                      placeholder="None"
                      value={formData.dietary}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("dietary")}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full bg-transparent border-b-2 border-neutral-200 focus:border-orange-500 py-3 sm:py-3.5 text-sm text-neutral-900 placeholder:text-neutral-300 focus:outline-none transition-all duration-300 ${
                        focusedField === "dietary"
                          ? "border-orange-500 bg-orange-50/30"
                          : ""
                      }`}
                    />
                    <motion.div
                      className="absolute bottom-0 left-0 h-px bg-orange-500 origin-left"
                      initial={{ scaleX: 0 }}
                      animate={
                        focusedField === "dietary"
                          ? { scaleX: 1 }
                          : { scaleX: 0 }
                      }
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                </div>

                <motion.div variants={fadeUp} className="group relative">
                  <label className="block text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-neutral-400 group-focus-within:text-orange-600 mb-2.5 sm:mb-3 transition-colors font-semibold">
                    Additional Notes
                  </label>
                  <input
                    type="text"
                    name="notes"
                    placeholder="Anything else we should know?"
                    value={formData.notes}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("notes")}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full bg-transparent border-b-2 border-neutral-200 focus:border-orange-500 py-3 sm:py-3.5 text-sm text-neutral-900 placeholder:text-neutral-300 focus:outline-none transition-all duration-300 ${
                      focusedField === "notes"
                        ? "border-orange-500 bg-orange-50/30"
                        : ""
                    }`}
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 h-px bg-orange-500 origin-left"
                    initial={{ scaleX: 0 }}
                    animate={
                      focusedField === "notes" ? { scaleX: 1 } : { scaleX: 0 }
                    }
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  />
                </motion.div>
              </motion.div>

              {/* Submit */}
              <motion.div variants={fadeUp} className="pt-4 sm:pt-6">
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative overflow-hidden inline-flex items-center gap-3 bg-neutral-900 hover:bg-white duration-1000 text-white font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[12px] sm:text-sm px-8 sm:px-10 py-4 sm:py-5 rounded-sm hover:shadow-xl hover:shadow-neutral-900/10 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {/* orange sweep */}
                  <span className="absolute inset-0 bg-orange-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                  <span className="relative z-10 flex items-center gap-3">
                    {loading ? (
                      <motion.span
                        animate={{ rotate: [0, 360] }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-4 h-4 border-2 border-white/30 border-t-transparent rounded-full"
                      />
                    ) : (
                      <>
                        <span>Submit Application for Review</span>
                        <span className="text-lg leading-none">→</span>
                      </>
                    )}
                  </span>
                </motion.button>
                <p className="mt-3 sm:mt-4 text-[10px] sm:text-[11px] text-neutral-400 uppercase tracking-[0.15em] sm:tracking-[0.2em] font-medium">
                  By submitting, you agree to our terms of confidentiality.
                </p>
              </motion.div>
            </motion.section>
          </div>

          {/* ── Right Aside ── */}
          <motion.aside
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
            className="lg:col-span-2"
          >
            <div className="lg:sticky lg:top-28 space-y-6 sm:space-y-8">
              {/* ── Image Card 1 ── */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative aspect-[4/5] overflow-hidden rounded-md bg-neutral-100 shadow-sm hover:shadow-lg transition-shadow duration-500"
              >
                <img
                  src="./form_image.png"
                  alt="Interior architectural detail"
                  className="w-full h-full object-cover  group-hover:scale-105 transition-transform duration-700"
                />

                {/* Better gradient (clean + premium) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              </motion.div>

              {/* ── Info Card ── */}
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="bg-white border border-neutral-200 p-6 sm:p-8 rounded-md hover:border-orange-500/40 transition-all duration-300"
              >
                <h4 className="font-[Epilogue] font-bold text-lg sm:text-xl text-neutral-900 mb-3">
                  Selection Protocol
                </h4>

                <p className="text-sm text-neutral-600 leading-relaxed mb-5">
                  Selection is based on business stage and value contribution
                  potential. We look for founders scaling both revenue and
                  internal clarity.
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                  <span className="text-[11px] uppercase tracking-[0.2em] text-orange-600 font-semibold">
                    Response within 48 hours
                  </span>
                </div>
              </motion.div>

              {/* ── Image Card 2 ── */}
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative aspect-square overflow-hidden rounded-md bg-neutral-100 shadow-sm hover:shadow-lg transition-shadow duration-500"
              >
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZrKCOKHaWPNb1Y737vCorp7JRuSx-wcEZ9wNuT4C8XEQfUnpKfH8Kl3I4BHrbOST49OMzOUaSVhH4NljrtnRdSSsai3VIpPChoASYhbQr2elFhDDrB5xafEORUXUXTh03sN54dWUSf9MKKtk1H4iOD1VQcK2W_t4QneT0jIQDjGAm8iib2K30AnNLeDrw53Rzcyp5U-_61wya9UHDuoQvjrve3m1lKwFweq0An8psZ7xN8UKBLop--JMJSmktcBfOR0bhrk_-1Q0"
                  alt="Moody forest landscape"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-base sm:text-lg italic text-white/90 leading-relaxed font-[Epilogue]">
                    “True breakthroughs happen in the space between silence and
                    conversation.”
                  </p>
                </div>
              </motion.div>

              {/* ── Stats ── */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                {[
                  { n: "24", l: "Max Cohort" },
                  { n: "48h", l: "Depth" },
                  { n: "3", l: "Destinations" },
                ].map((item, i) => (
                  <motion.div
                    key={item.l}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                    className="text-center py-4 rounded-md bg-neutral-50 border border-neutral-100"
                  >
                    <p className="text-xl font-black text-orange-600 tabular-nums">
                      {item.n}
                    </p>
                    <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-400 mt-1">
                      {item.l}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.aside>
        </form>
      </main>
    </div>
  );
}
