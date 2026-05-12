import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────
type InputProps = {
  label: string;
  placeholder: string;
  type?: string;
  as?: "textarea" | "select";
  error?: string;
  value: string;
  onChange: (val: string) => void;
};

type FormData = {
  name: string;
  email: string;
  org: string;
  role: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

// ─── Input Field Component (Light Theme) ─────────────────────────────────────
const InputField = ({
  label,
  placeholder,
  type = "text",
  as,
  error,
  value,
  onChange,
}: InputProps) => {
  const baseClasses = `w-full border text-neutral-900 text-[13px] sm:text-[14px] px-4 py-3.5 outline-none transition-all duration-300 placeholder:text-neutral-400  ${
    error
      ? "border-red-400 focus:border-red-500 focus:ring-1 focus:ring-red-500/20"
      : "border-neutral-200 focus:border-orange-500 focus:ring-1 focus:ring-orange-500/20 hover:border-neutral-300"
  }`;

  return (
    <div className="flex flex-col gap-2">
      <label className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.3em] font-bold text-neutral-500">
        {label} <span className="text-red-500/80">*</span>
      </label>

      {as === "textarea" ? (
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={4}
          className={`${baseClasses} resize-none`}
        />
      ) : as === "select" ? (
        <div className="relative">
          <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={`${baseClasses} appearance-none cursor-pointer pr-10 hover:bg-orange-50`}
          >
            <option
              value=""
              disabled
              className="bg-white text-neutral-400 bg-orange-50 "
            >
              -- Select a role --
            </option>
            <option value="Builder" className="bg-white text-neutral-700">
              Builder
            </option>
            <option value="Investor" className="bg-white text-neutral-700">
              Investor
            </option>
            <option value="Partner" className="bg-white text-neutral-700">
              Partner
            </option>
          </select>
          <svg
            className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none"
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
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`${baseClasses}`}
        />
      )}

      <AnimatePresence>
        {error && (
          <motion.span
            initial={{ opacity: 0, y: -5, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -5, height: 0 }}
            className="text-[10px] tracking-wider text-red-500 font-medium pl-1 overflow-hidden"
          >
            {error}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
};

// ─── Main Form Component ─────────────────────────────────────────────────────
export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    org: "",
    role: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const set = (key: keyof FormData) => (val: string) => {
    setForm((f) => ({ ...f, [key]: val }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Enter a valid email";
    if (!form.org.trim()) errs.org = "Organization is required";
    if (!form.role) errs.role = "Please select a role";
    if (!form.message.trim()) errs.message = "Message is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const submitForm = async () => {
    if (!validate()) return;

    try {
      const res = await fetch(
        "/zoho-webhook/921703489/flow/webhook/incoming?zapikey=1001.130d40f218d17232e143982f604991f7.b964238c780c061be4d333c85664a10a&isdebug=false",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        },
      );

      if (!res.ok) throw new Error("Failed");

      setSubmitted(true);
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        /* ── Success State ── */
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white border border-neutral-200 p-10 sm:p-12 md:p-16 flex flex-col items-center justify-center text-center min-h-[400px] md:min-h-[450px]"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 0.2,
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
            className="w-16 h-16 rounded-full border-2 border-orange-500/30 bg-orange-50 flex items-center justify-center mb-8"
          >
            <CheckCircle2 className="w-8 h-8 text-orange-500" />
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-2xl font-bold tracking-[-0.03em] text-neutral-900 mb-4"
          >
            Inquiry Received.
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-[14px] sm:text-[15px] text-neutral-500 leading-relaxed max-w-sm mb-8"
          >
            Thank you for reaching out. Our experience leads typically respond
            within 24 hours.
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="h-px w-16 bg-neutral-200 origin-center"
          />
        </motion.div>
      ) : (
        /* ── Form State ── */
        <motion.div
          key="form"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white border border-neutral-200 p-6 sm:p-8 md:p-12 flex flex-col gap-5 sm:gap-6 relative overflow-hidden"
        >
          {/* Subtle corner gradient for visual interest */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-neutral-50 to-transparent pointer-events-none -z-0" />

          {/* Top Row: Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 relative z-10">
            <InputField
              label="Full Name"
              placeholder="John Doe"
              value={form.name}
              onChange={set("name")}
              error={errors.name}
            />
            <InputField
              label="Email Address"
              placeholder="john@company.com"
              type="email"
              value={form.email}
              onChange={set("email")}
              error={errors.email}
            />
          </div>

          {/* Organization */}
          <div className="relative z-10">
            <InputField
              label="Organization"
              placeholder="Your company name"
              value={form.org}
              onChange={set("org")}
              error={errors.org}
            />
          </div>

          {/* Role Select */}
          <div className="relative z-10">
            <InputField
              label="Role Selection"
              placeholder=""
              as="select"
              value={form.role}
              onChange={set("role")}
              error={errors.role}
            />
          </div>

          {/* Message Textarea */}
          <div className="relative z-10">
            <InputField
              label="Objective"
              placeholder="Tell us about your goals for this retreat..."
              as="textarea"
              value={form.message}
              onChange={set("message")}
              error={errors.message}
            />
          </div>

          {/* Submit Button (Inverted Hover) */}
          <motion.button
            type="button"
            onClick={submitForm}
            whileHover={{ scale: 1.005 }}
            whileTap={{ scale: 0.995 }}
            className="group flex items-center justify-between w-full border-2 border-orange-500 text-neutral-300 px-6 py-4 mt-2 bg-gradient-to-b from-orange-50/80 to-transparent transition-all duration-300 relative z-10"
          >
            <span className="text-[16px] sm:text-[12px] font-bold uppercase text-orange-500 group-hover:text-black transition-colors">
              Send Inquiry
            </span>
            <div className="flex items-center justify-center w-10 h-10 rounded-full text-orange-500 group-hover:text-white border border-current bg-white group-hover:bg-orange-500 group-hover:border-orange-500/10 transition-colors">
              <ArrowUpRight className="w-6 h-8 transform rotate-12 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </div>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
