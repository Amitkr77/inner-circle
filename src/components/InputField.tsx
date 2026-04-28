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

// ─── Input Field Component (Sharp Edges) ─────────────────────────────────────
const InputField = ({
  label,
  placeholder,
  type = "text",
  as,
  error,
  value,
  onChange,
}: InputProps) => {
  const baseClasses = `w-full bg-white/[0.02] border text-white text-[14px] px-4 py-3.5 outline-none transition-colors duration-300 placeholder:text-white/20 ${
    error ? "border-red-500/50 focus:border-red-500/80" : "border-white/[0.08] focus:border-emerald-400/30"
  }`;

  return (
    <div className="flex flex-col gap-2">
      <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/60">
        {label} <span className="text-red-500/70">*</span>
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
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`${baseClasses} appearance-none cursor-pointer`}
        >
          <option value="" disabled className="bg-[#0a0a0a] text-white/40">
            -- Select a role --
          </option>
          <option value="Builder" className="bg-[#0a0a0a] text-white/70">
            Builder
          </option>
          <option value="Investor" className="bg-[#0a0a0a] text-white/70">
            Investor
          </option>
          <option value="Partner" className="bg-[#0a0a0a] text-white/70">
            Partner
          </option>
        </select>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={baseClasses}
        />
      )}

      <AnimatePresence>
        {error && (
          <motion.span 
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="text-[10px] tracking-wider text-red-400 font-medium pl-1"
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
        }
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
          exit={{ opacity: 0 }}
          className="bg-[#0a0a0a] border border-emerald-400/20 p-12 md:p-16 flex flex-col items-center justify-center text-center min-h-[400px]"
        >
          <div className="w-16 h-16 rounded-full border border-emerald-400/30 flex items-center justify-center mb-8">
            <CheckCircle2 className="w-8 h-8 text-emerald-400" />
          </div>
          <h3 className="text-2xl font-bold tracking-[-0.03em] text-white mb-4">
            Inquiry Received.
          </h3>
          <p className="text-[14px] text-white/30 leading-relaxed max-w-sm mb-8">
            Thank you for reaching out. Our experience leads typically respond within 24 hours.
          </p>
          <div className="h-px w-16 bg-emerald-400/30" />
        </motion.div>
      ) : (
        /* ── Form State ── */
        <motion.div
          key="form"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="bg-[#0a0a0a] border border-white/[0.06] p-8 md:p-12 flex flex-col gap-6"
        >
          {/* Top Row: Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          <InputField
            label="Organization"
            placeholder="Your company name"
            value={form.org}
            onChange={set("org")}
            error={errors.org}
          />

          {/* Role Select */}
          <InputField
            label="Role Selection"
            placeholder=""
            as="select"
            value={form.role}
            onChange={set("role")}
            error={errors.role}
          />

          {/* Message Textarea */}
          <InputField
            label="Objective"
            placeholder="Tell us about your goals for this retreat..."
            as="textarea"
            value={form.message}
            onChange={set("message")}
            error={errors.message}
          />

          {/* Submit Button (Inverted Hover) */}
          <button
            type="button"
            onClick={submitForm}
            className="group flex items-center justify-between w-full border border-white/[0.1] px-6 py-4 mt-2 hover:bg-white hover:text-black transition-all duration-300"
          >
            <span className="text-[12px] font-bold uppercase tracking-[0.2em]">
              Send Inquiry
            </span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

         
        </motion.div>
      )}
    </AnimatePresence>
  );
}