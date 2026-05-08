import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ExternalLink, ArrowUpRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Scroll handler — computes progress
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // const docHeight =
      //   document.documentElement.scrollHeight - window.innerHeight;
      // if (docHeight > 0) {
      //   setScrollProgress((window.scrollY / docHeight) * 100);
      // }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial
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
      {/* ── Scroll Progress Bar ── */}
      {/* <div className="fixed top-0 left-0 right-0 z-[1000] h-[2px] bg-neutral-100">
        <motion.div
          className="h-full bg-gradient-to-r from-orange-500 to-orange-400 origin-left"
          style={{ width: `${scrollProgress}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      </div> */}

      {/* ── Main Navbar ── */}
      <nav
        className={`fixed left-0 right-0 top-[0px] z-[999] transition-all duration-500 ${
          isScrolled
            ? "h-14 sm:h-20 bg-white shadow-sm shadow-neutral-900/[0.03] "
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
              // whileHover={{ scale: 1.05, rotate: 3 }}
              // transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className={`rounded-full bg-white p-1 sm:p-1.5 transition-all duration-300   overflow-hidden ${isScrolled ? " " : " "}`}
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
                    {/* Underline */}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-px bg-orange-500 transition-all duration-400 ease-out ${
                        active ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                    {/* Active dot */}
                    {/* <motion.span
                      initial={active ? { scale: 0 } : {}}
                      animate={active ? { scale: 1 } : {}}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 15,
                      }}
                      className="absolute -bottom-3 left-1/2 h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-orange-500"
                    /> */}
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
                  className="group relative overflow-hidden rounded-full  bg-gradient-to-r from-orange-500 via-orange-400 to-amber-300 px-6 sm:px-7 py-2 sm:py-2.5 text-[10px] sm:text-[11px] font-black uppercase tracking-[0.15em] sm:tracking-[0.18em] text-white shadow-md shadow-neutral-900/10 transition-shadow duration-300 hover:shadow-lg hover:shadow-neutral-900/15"
                >
                  {/* orange hover sweep */}
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
            className={`rounded-lg border p-2 transition-all duration-200 lg:hidden relative z-10 ${
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

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-[58px] sm:top-[66px] z-[998] border-b border-neutral-200 bg-white/[0.97] backdrop-blur-2xl lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 top-0 -z-10 bg-neutral-900/[0.04] lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />

            <div className="mx-auto max-w-7xl px-5 sm:px-6 py-6 sm:py-8">
              <div className="mb-6 sm:mb-8 flex flex-col gap-0.5">
                {navItems.map((item, i) => {
                  const active = isActive(item.to);
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.05 + i * 0.05,
                        duration: 0.35,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <Link
                        to={item.to}
                        className={`flex items-center justify-between rounded-xl px-4 py-3 sm:py-3.5 text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.18em] sm:tracking-[0.2em] transition-all duration-200 ${
                          active
                            ? "bg-orange-50 text-orange-600 border border-orange-500/15"
                            : "text-neutral-400 hover:bg-neutral-50 hover:text-neutral-900 border border-transparent"
                        }`}
                      >
                        <span>{item.label}</span>
                        <span className="flex items-center gap-2">
                          {active && (
                            <motion.span
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 15,
                              }}
                              className="h-1.5 w-1.5 rounded-full bg-orange-500"
                            />
                          )}
                          {item.external && (
                            <ExternalLink className="h-3 w-3 opacity-30" />
                          )}
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.4 }}
              >
                <Link to="/apply" className="block">
                  <button className="group relative w-full overflow-hidden rounded-full bg-neutral-900 py-3.5 sm:py-4 text-[11px] sm:text-[12px] font-black uppercase tracking-[0.18em] sm:tracking-[0.2em] text-white shadow-md shadow-neutral-900/10 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]">
                    <span className="absolute inset-0 bg-orange-600 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Book Now
                      <ArrowUpRight className="h-3 w-3" />
                    </span>
                  </button>
                </Link>
              </motion.div>

              {/* Mobile bottom detail */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="mt-6 sm:mt-8 flex items-center justify-center gap-2 text-neutral-300"
              >
                <div className="w-1 h-1 rounded-full bg-orange-500/50" />
                <span className="text-[9px] font-bold uppercase tracking-[0.25em]">
                  High-Intent Only
                </span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
