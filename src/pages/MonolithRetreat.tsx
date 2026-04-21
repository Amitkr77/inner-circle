import React, { useState, FormEvent, ChangeEvent } from "react";

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

interface ApiResponse {
  status: "success" | "error";
  message?: string;
}

interface FieldConfig {
  label: string;
  name: keyof FormData;
  type?: string;
  placeholder: string;
}

const MonolithRetreat: React.FC = () => {
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
    cohortDate: "Autumn Session (Oct 12-15)",
    dietary: "",
    notes: "",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setLoading(true);

    try {
      // Replace with your Google Apps Script deployment URL
      const GOOGLE_APPS_SCRIPT_URL =
        "https://script.google.com/macros/s/AKfycby-5_dWHy4UMhiA8pwdgIvTBu5fDZZZ5_SFysqAVaeJJecjB2TE8PHaoeRxA7KR6uwE/exec";

      const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(formData),
      });

      const result: ApiResponse = await response.json();

      if (result.status === "success") {
        setSubmitted(true);
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
          cohortDate: "Autumn Session (Oct 12-15)",
          dietary: "",
          notes: "",
        });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert("Error submitting form. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,100..900;1,100..900&family=Manrope:wght@200..800&display=swap');
      `}</style>

      <div className="min-h-screen bg-gray-950 text-gray-100 font-[Manrope]">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-lg border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-4 flex justify-between items-center">
            <div className="font-[Epilogue] text-xl font-bold tracking-tight text-gray-100">
              The Monolith Retreat
            </div>
            <div className="flex items-center gap-8">
              {["Agenda", "Venue", "Founders"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-xs font-semibold uppercase tracking-widest text-gray-400 hover:text-amber-400 transition-colors"
                >
                  {link}
                </a>
              ))}
              <button className="px-6 py-2 bg-amber-700 text-amber-50 text-xs font-bold uppercase tracking-widest rounded-sm hover:shadow-lg hover:shadow-amber-500/20 transition-all">
                Apply Now
              </button>
            </div>
          </div>
        </nav>

        {/* Main */}
        <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
          {/* Hero */}
          <header className="mb-32 max-w-2xl">
            <span className="block text-amber-500 text-xs font-bold uppercase tracking-widest mb-4">
              Phase One
            </span>
            <h1 className="font-[Epilogue] text-5xl sm:text-6xl font-bold leading-tight mb-6 text-gray-100">
              The Application.
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              An intentional process for intentional founders. We curate our
              cohorts with surgical precision to ensure maximum collective
              intelligence.
            </p>
          </header>

          {/* Form Grid */}
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 lg:grid-cols-7 gap-12"
          >
            {/* Left Column */}
            <div className="lg:col-span-5 space-y-20">
              {/* Success Message */}
              {submitted && (
                <div className="p-4 bg-green-900/20 border border-green-700 rounded-sm text-green-300 text-sm">
                  ✓ Application submitted successfully! We'll review and respond
                  within 48 hours.
                </div>
              )}

              {/* Section 1: The Basics */}
              <section>
                <div className="flex items-baseline gap-4 mb-12">
                  <span className="font-[Epilogue] text-2xl font-light italic text-amber-500">
                    01
                  </span>
                  <h2 className="font-[Epilogue] text-3xl font-bold text-gray-100">
                    The Basics
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {[
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
                      type: "text",
                      placeholder: "Series A / $5M ARR",
                    },
                    {
                      label: "Contact/WhatsApp Number",
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
                  ].map((field) => (
                    <div key={field.name} className="group">
                      <label className="block text-xs uppercase tracking-widest text-gray-500 group-focus-within:text-amber-500 mb-2 transition-colors font-semibold">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        value={formData[field.name]}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-gray-700 focus:border-amber-500 py-3 text-gray-200 placeholder-gray-600 focus:outline-none transition-colors text-sm"
                      />
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 2: Deep Dive */}
              <section>
                <div className="flex items-baseline gap-4 mb-12">
                  <span className="font-[Epilogue] text-2xl font-light italic text-amber-500">
                    02
                  </span>
                  <h2 className="font-[Epilogue] text-3xl font-bold text-gray-100">
                    Deep Dive
                  </h2>
                </div>

                <div className="space-y-10">
                  {[
                    {
                      label:
                        "What is the hardest problem you're solving right now?",
                      name: "hardestProblem",
                      placeholder:
                        "Scaling cultural integrity during hyper-growth...",
                    },
                    {
                      label: "What do you hope to contribute to the group?",
                      name: "contribution",
                      placeholder:
                        "Hard-won expertise in GTM strategy and failure states...",
                    },
                    {
                      label: "Describe a recent breakthrough.",
                      name: "breakthrough",
                      placeholder:
                        "Rethinking our fundamental unit economics...",
                    },
                  ].map((field) => (
                    <div key={field.name} className="group">
                      <label className="block text-xs uppercase tracking-widest text-gray-500 group-focus-within:text-amber-500 mb-2 transition-colors font-semibold">
                        {field.label}
                      </label>
                      <textarea
                        name={field.name}
                        placeholder={field.placeholder}
                        rows={3}
                        value={formData[field.name]}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-gray-700 focus:border-amber-500 py-3 text-gray-200 placeholder-gray-600 focus:outline-none transition-colors text-sm resize-none"
                      />
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 3: Logistics */}
              <section>
                <div className="flex items-baseline gap-4 mb-12">
                  <span className="font-[Epilogue] text-2xl font-light italic text-amber-500">
                    03
                  </span>
                  <h2 className="font-[Epilogue] text-3xl font-bold text-gray-100">
                    Logistics
                  </h2>
                </div>

                <div className="space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="group">
                      <label className="block text-xs uppercase tracking-widest text-gray-500 group-focus-within:text-amber-500 mb-2 transition-colors font-semibold">
                        Preferred Cohort Date
                      </label>
                      <select
                        name="cohortDate"
                        value={formData.cohortDate}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-gray-700 focus:border-amber-500 py-3 text-gray-200 focus:outline-none transition-colors text-sm appearance-none cursor-pointer"
                      >
                        <option className="bg-gray-950 text-gray-200">
                          Autumn Session (Oct 12–15)
                        </option>
                        <option className="bg-gray-950 text-gray-200">
                          Winter Solstice (Dec 4–7)
                        </option>
                        <option className="bg-gray-950 text-gray-200">
                          Spring Ascent (Mar 20–23)
                        </option>
                      </select>
                    </div>

                    <div className="group">
                      <label className="block text-xs uppercase tracking-widest text-gray-500 group-focus-within:text-amber-500 mb-2 transition-colors font-semibold">
                        Dietary Requirements
                      </label>
                      <input
                        type="text"
                        name="dietary"
                        placeholder="None"
                        value={formData.dietary}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-gray-700 focus:border-amber-500 py-3 text-gray-200 placeholder-gray-600 focus:outline-none transition-colors text-sm"
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-xs uppercase tracking-widest text-gray-500 group-focus-within:text-amber-500 mb-2 transition-colors font-semibold">
                      Additional Notes
                    </label>
                    <input
                      type="text"
                      name="notes"
                      placeholder="Anything else we should know?"
                      value={formData.notes}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-gray-700 focus:border-amber-500 py-3 text-gray-200 placeholder-gray-600 focus:outline-none transition-colors text-sm"
                    />
                  </div>
                </div>
              </section>

              {/* Submit */}
              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-tr from-amber-600 to-amber-500 text-gray-950 font-bold uppercase tracking-widest text-sm rounded-sm hover:shadow-xl hover:shadow-amber-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>
                    {loading
                      ? "Submitting..."
                      : "Submit Application for Review"}
                  </span>
                  <span className="text-lg">→</span>
                </button>
                <p className="mt-4 text-xs text-gray-500 uppercase tracking-widest font-semibold">
                  By submitting, you agree to our terms of confidentiality.
                </p>
              </div>
            </div>

            {/* Right Aside */}
            <aside className="lg:col-span-2 space-y-8">
              <div className="sticky top-32 space-y-8">
                {/* Image Card */}
                <div className="aspect-[4/5] overflow-hidden rounded-sm bg-gray-800 group cursor-pointer">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBL8ICws2CRXOYbd0NRAFTsUaJc7gRUVNLpNz9miDX9JWHTYdxuSsxTbVS0M-h0ln4bnpA7LVi0EH5dPcyt0TG2eBB5E-Up2B7Ammv_ILzxP5rZ17vCJe7sSIt5UDBWxPjSaJzkg2f9kKaV5dx9u4oOznXbQXF-3Ck19cvMGHUmgV08FWbKQq0j2DwdhL4RReHrAW6w39-WUrBR8Usc7G6gRk2hXcON7Yd1MfclCRf8sKPFa_gPADDR3XUza3OAA6DkfcdH49aVDno"
                    alt="Interior architectural detail"
                    className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-lg italic text-gray-100 leading-relaxed">
                      "True breakthroughs happen in the space between silence
                      and conversation."
                    </p>
                  </div>
                </div>

                {/* Info Card */}
                <div className="bg-gray-900 p-8 border-l-2 border-amber-500/20">
                  <h4 className="font-[Epilogue] font-bold text-lg text-gray-100 mb-4">
                    Selection Protocol
                  </h4>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4">
                    Selection is based on business stage and value contribution
                    potential. We look for founders who are not only scaling
                    revenue but scaling their own consciousness.
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    <span className="text-xs uppercase tracking-widest text-amber-500 font-semibold">
                      Response within 48 hours
                    </span>
                  </div>
                </div>

                {/* Image Square */}
                <div className="aspect-square overflow-hidden rounded-sm bg-gray-800 group cursor-pointer">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZrKCOKHaWPNb1Y737vCorp7JRuSx-wcEZ9wNuT4C8XEQfUnpKfH8Kl3I4BHrbOST49OMzOUaSVhH4NljrtnRdSSsai3VIpPChoASYhbQr2elFhDDrB5xafEORUXUXTh03sN54dWUSf9MKKtk1H4iOD1VQcK2W_t4QneT0jIQDjGAm8iib2K30AnNLeDrw53Rzcyp5U-_61wya9UHDuoQvjrve3m1lKwFweq0An8psZ7xN8UKBLop--JMJSmktcBfOR0bhrk_-1Q0"
                    alt="Moody forest landscape"
                    className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-60 transition-opacity"
                  />
                </div>
              </div>
            </aside>
          </form>
        </main>

        {/* Footer */}
        <footer className="border-t border-gray-800 bg-black/40 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="font-[Epilogue] text-lg font-black text-gray-100">
              The Monolith
            </div>
            <div className="flex gap-8">
              {["Privacy", "Terms of Service", "Press"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-sm text-gray-500 hover:text-amber-400 transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
            <div className="text-sm text-gray-500">
              © 2024 The Monolith. By Invitation Only.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default MonolithRetreat as React.FC;
