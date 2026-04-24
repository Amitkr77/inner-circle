import { CheckCircle2, Clock, ShieldCheck, X } from "lucide-react";
import { easeInOut, motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Success() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true);

  // Navbar hide karo jab yeh page open ho
  useEffect(() => {
    const navbar = document.querySelector("nav");
    if (navbar) navbar.style.display = "none";
    return () => {
      if (navbar) navbar.style.display = "";
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => navigate("/"), 400);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleClose}
            className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            key="modal"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ duration: 0.4, ease: easeInOut }}
            className="fixed inset-0 z-[101] flex items-center justify-center px-4"
          >
            <div className="relative w-full max-w-lg bg-gray-950 border border-white/10 rounded-xl overflow-hidden shadow-2xl">

              {/* Background image inside modal */}
              <div className="absolute inset-0 pointer-events-none">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-fgnYtYQaK9KNobJQQR1dK3ODeI5wn_LWXo2KlrYW-vNDHMw75ZoaX3hDL1CRmpYQCkxiKuMD1l-aHxee3WegrFPPMHQo0Db60R0HDZvh5gzKXS9iIxUKYK-lUaKn_pQYqbBSRf3kCQFjXXqqrt4H9zM4yDqUDAwpYOP6HRbIThC39-gSgPkVahcVDl7Vae4y2vUxPtTwF9bUSQFxWCOAIaE5HRVScDWHtHjY_dFR90Yvjk-ISL4UQpdoTMx6HoMpAixX5bHgRNA"
                  className="w-full h-full object-cover grayscale opacity-10"
                  referrerPolicy="no-referrer"
                  alt=""
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/80 to-gray-950/60" />
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={(e) => {
                    e.stopPropagation(); 
                    handleClose();
                }}
                className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                >
                <X className="w-4 h-4 pointer-events-none" />
            </button>

              {/* Content */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
                  },
                }}
                className="relative z-10 flex flex-col items-center text-center px-8 py-12 gap-5"
              >
                {/* Icon */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, ease: easeInOut },
                    },
                  }}
                >
                  <div className="w-16 h-16 rounded-full border border-amber-500/20 flex items-center justify-center bg-white/5">
                    <CheckCircle2
                      className="w-7 h-7 text-amber-400"
                      strokeWidth={1.5}
                    />
                  </div>
                </motion.div>

                {/* Label */}
                <motion.span
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, ease: easeInOut },
                    },
                  }}
                  className="text-[10px] tracking-[0.35em] uppercase text-amber-500 font-bold"
                >
                  Inner Circle Retreat
                </motion.span>

                {/* Heading */}
                <motion.h1
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, ease: easeInOut },
                    },
                  }}
                  className="font-[Epilogue] text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-gray-100 leading-tight"
                >
                  Application <br /> Received.
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, ease: easeInOut },
                    },
                  }}
                  className="text-sm text-gray-400 max-w-xs leading-relaxed"
                >
                  Your journey toward clarity and deep connection starts here.
                </motion.p>

                {/* Card */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, ease: easeInOut },
                    },
                  }}
                  className="w-full bg-white/5 border border-white/10 rounded-lg p-6"
                >
                  <p className="text-sm italic text-gray-300 leading-relaxed">
                    "We carefully review each application to ensure a
                    high-quality cohort. You will hear from us within{" "}
                    <span className="text-amber-400 not-italic font-semibold">
                      48 hours
                    </span>
                    ."
                  </p>

                  <div className="mt-5 pt-4 border-t border-white/10 flex justify-center gap-8 text-[10px] uppercase text-gray-500">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-amber-500/60" />
                      48h Review
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-amber-500/60" />
                      Confidential
                    </div>
                  </div>
                </motion.div>

                {/* Close text button */}
                <motion.button
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { duration: 0.5 } },
                  }}
                  onClick={handleClose}
                  className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-600 hover:text-amber-400 transition-colors mt-2"
                >
                  ← Back to Home
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}