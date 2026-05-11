import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ExternalLink, ArrowUpRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Explore", to: "/explore" },
    { label: "About", to: "/about" },
    { label: "Resources", to: "/resources" },
    { label: "Blog", to: "/blog" },
    { label: "Contact", to: "/contact", external: false },
  ];

  const isActive = (path: string) =>
    location.pathname === path ||
    (path !== "/" && location.pathname.startsWith(path));

  return (
    <>
      {/* ── Main Navbar ── */}
      <nav
        className={`fixed left-0 right-0 top-0 z-[999] transition-all duration-500 ${
          isScrolled
            ? "h-14 sm:h-20 bg-white shadow-sm shadow-neutral-900/[0.03]"
            : "h-20 sm:h-28 bg-transparent backdrop-blur-0 shadow-none"
        }`}
      >
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-5 sm:px-6 md:px-10">
          {/* ── Logo ── */}
          <Link
            to="/"
            className="group flex items-center gap-2.5 sm:gap-3 relative z-10"
          >
            <motion.div
              className={`rounded-full bg-white p-1 sm:p-1.5 transition-all duration-300 overflow-hidden`}
            >
              <img
                src="/logo.png"
                alt="Logo"
                className="h-7 w-auto sm:h-15 object-contain opacity-90 transition-opacity duration-300 group-hover:opacity-100"
              />
            </motion.div>
          </Link>

          {/* ── Desktop Nav ── */}
          <div className="hidden items-center gap-8 lg:flex">
            {navItems.map((item, i) => {
              const active = isActive(item.to);
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
                >
                  <Link
                    to={item.to}
                    className={`group relative flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] sm:tracking-[0.2em] transition-all duration-300 py-1 ${
                      active
                        ? "text-orange-600"
                        : "text-neutral-400 hover:text-neutral-900"
                    }`}
                  >
                    {item.label}
                    {item.external && (
                      <ExternalLink className="h-2.5 w-2.5 opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-40 group-hover:translate-x-0" />
                    )}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-px bg-orange-500 transition-all duration-400 ease-out ${
                        active ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* ── CTA ── */}
          <div className="hidden items-center gap-4 lg:flex">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              <Link to="/apply">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="group relative overflow-hidden rounded-full bg-gradient-to-r from-orange-500 via-orange-400 to-amber-300 px-6 sm:px-7 py-2 sm:py-2.5 text-[10px] sm:text-[11px] font-black uppercase tracking-[0.15em] sm:tracking-[0.18em] text-white shadow-md shadow-neutral-900/10 transition-shadow duration-300 hover:shadow-lg hover:shadow-neutral-900/15"
                >
                  <span className="absolute inset-0 bg-orange-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                  <span className="relative z-10 flex items-center gap-1.5 sm:gap-2">
                    Book Now
                    <ArrowUpRight className="h-2.5 w-2.5 sm:h-3 sm:w-3 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* ── Mobile Toggle ── */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className={`rounded-lg border p-2 transition-all duration-200 lg:hidden relative z-[1000] ${
              mobileMenuOpen
                ? "border-neutral-300 text-neutral-900 bg-neutral-50"
                : "border-neutral-200 text-neutral-500 hover:border-neutral-300 hover:text-neutral-900 bg-white/50 backdrop-blur-sm"
            }`}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-5 w-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-5 w-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </nav>

      {/* ── Mobile Menu — Full Screen ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[998] bg-white flex flex-col lg:hidden"
          >
            {/* Top bar spacing so menu button is visible */}
            <div className="h-14 sm:h-20 shrink-0" />

            {/* Decorative orange line at top */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              // className="h-px bg-gradient-to-r from-orange-500/0 via-orange-500 to-orange-500/0 origin-center mx-6"
            />

            {/* Nav links — centred vertically */}
            <div className="flex flex-col flex-1 justify-center px-6 sm:px-10 gap-1">
              {navItems.map((item, i) => {
                const active = isActive(item.to);
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{
                      delay: 0.1 + i * 0.07,
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Link
                      to={item.to}
                      className={`group flex items-center justify-between rounded-2xl px-5 py-4 transition-all duration-200 ${
                        active
                          ? "bg-orange-50 border border-orange-500/20"
                          : "border border-transparent hover:bg-neutral-50"
                      }`}
                    >
                      <span
                        className={`text-[clamp(1.4rem,6vw,2rem)] font-bold tracking-[-0.03em] transition-colors duration-200 ${
                          active
                            ? "text-orange-600"
                            : "text-neutral-300 group-hover:text-neutral-900"
                        }`}
                      >
                        {item.label}
                      </span>

                      <span className="flex items-center gap-2">
                        {active && (
                          <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 400, damping: 15 }}
                            className="h-2 w-2 rounded-full bg-orange-500"
                          />
                        )}
                        {item.external && (
                          <ExternalLink className="h-4 w-4 opacity-30" />
                        )}
                        <ArrowUpRight
                          className={`h-4 w-4 transition-all duration-200 opacity-0 group-hover:opacity-40 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${
                            active ? "opacity-30" : ""
                          }`}
                        />
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ delay: 0.45, duration: 0.4 }}
              className="px-6 sm:px-10 pb-10 sm:pb-14 space-y-4"
            >
              {/* Divider */}
              <div className="h-px bg-neutral-100" />

              <Link to="/apply" className="block">
                <button className="group relative w-full overflow-hidden rounded-full bg-neutral-900 py-4 text-[12px] font-black uppercase tracking-[0.2em] text-white shadow-md shadow-neutral-900/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]">
                  <span className="absolute inset-0 bg-orange-500 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Book Now
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </button>
              </Link>

              {/* Footer tag */}
              <div className="flex items-center justify-center gap-2 text-neutral-300 pt-1">
                <div className="w-1 h-1 rounded-full bg-orange-500/50" />
                <span className="text-[9px] font-bold uppercase tracking-[0.25em]">
                  High-Intent Only
                </span>
                <div className="w-1 h-1 rounded-full bg-orange-500/50" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}