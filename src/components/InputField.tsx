import { useState } from "react";

type InputProps = {
  label: string;
  placeholder: string;
  type?: string;
  as?: "textarea" | "select";
  error?: string;
  value: string;
  onChange: (val: string) => void;
};

const InputField = ({
  label,
  placeholder,
  type = "text",
  as,
  error,
  value,
  onChange,
}: InputProps) => {
  const [focused, setFocused] = useState(false);

  const baseStyle: React.CSSProperties = {
    width: "100%",
    background: "rgba(255,255,255,0.05)",
    border: `1px solid ${error ? "#ef4444" : focused ? "#10b981" : "rgba(255,255,255,0.1)"}`,
    borderRadius: "0.75rem",
    color: "#fff", // ✅ FIX
    padding: "0.75rem 1rem",
    outline: "none",
    fontSize: "0.85rem",
    transition: "0.2s",
  };
  const props = {
    style: baseStyle,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <label style={{ fontSize: "0.65rem", color: "#fff" }}>
        {label} <span style={{ color: "#ef4444" }}>*</span>
      </label>

      {as === "textarea" ? (
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          {...props}
        />
      ) : as === "select" ? (
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          {...props}
          style={{ ...baseStyle, background: "rgba(255,255,255,0.05)" }} // ✅ fix
        >
          <option
            value=""
            style={{ background: "rgba(255,255,255,0.05)", color: "#fff" }}
          >
            -- Select a role --
          </option>
          <option
            style={{ background: "rgba(255,255,255,0.05)", color: "#fff" }}
          >
            Builder
          </option>
          <option
            style={{ background: "rgba(255,255,255,0.05)", color: "#fff" }}
          >
            Investor
          </option>
          <option
            style={{ background: "rgba(255,255,255,0.05)", color: "#fff" }}
          >
            Partner
          </option>
        </select>
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          {...props}
        />
      )}

      {error && (
        <span style={{ fontSize: "0.65rem", color: "#ef4444", paddingLeft: 2 }}>
          {error}
        </span>
      )}
    </div>
  );
};

type FormData = {
  name: string;
  email: string;
  org: string;
  role: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

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
      const res = await fetch("/zoho-webhook/921703489/flow/webhook/incoming?zapikey=1001.130d40f218d17232e143982f604991f7.b964238c780c061be4d333c85664a10a&isdebug=false", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed");

      setSubmitted(true);
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  };

  return (
    <div>
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
          <h3 style={{ color: "#10b981" }}>Form Submitted Successfully</h3>
          <p style={{ color: "rgba(255,255,255,0.5)" }}>
            We'll get back to you soon 🚀
          </p>
        </div>
      ) : (
        <div
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "2rem",
            padding: "2.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
            }}
          >
            <InputField
              label="Name"
              placeholder="Enter your name"
              value={form.name}
              onChange={set("name")}
              error={errors.name}
            />
            <InputField
              label="Email"
              placeholder="Enter your email"
              type="email"
              value={form.email}
              onChange={set("email")}
              error={errors.email}
            />
          </div>
          <InputField
            label="Organization"
            placeholder="Your company"
            value={form.org}
            onChange={set("org")}
            error={errors.org}
          />
          <InputField
            label="Role Selection"
            placeholder=""
            as="select"
            value={form.role}
            onChange={set("role")}
            error={errors.role}
          />
          <InputField
            label="Message"
            placeholder="Tell us about your goals..."
            as="textarea"
            value={form.message}
            onChange={set("message")}
            error={errors.message}
          />

          <button
            onClick={submitForm}
            style={{
              background: "#10b981",
              color: "#000",
              borderRadius: "999px",
              padding: "1rem",
              fontWeight: "bold",
              cursor: "pointer",
              border: "none",
            }}
          >
            Submit →
          </button>
        </div>
      )}
    </div>
  );
}
