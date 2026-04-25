import { useState, useEffect } from "react";
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

  // Scroll handler — also computes progress
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
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
      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0%   { background-position: -1000px 0; }
          100% { background-position:  1000px 0; }
        }
        .mobile-menu-enter {
          animation: slideDown 0.25s ease-out forwards;
        }
        .glow-button::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(16,185,129,0.35) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .glow-button:hover::before { opacity: 1; }
        .nav-shimmer {
          background: linear-gradient(90deg, transparent, rgba(16,185,129,0.08), transparent);
          background-size: 1000px 100%;
          animation: shimmer 4s infinite;
        }
      `}</style>

      {/* ── Main Navbar ── */}
      <nav
        className={`fixed left-0 right-0 top-0 z-[999] transition-all duration-500 ${
          isScrolled
            ? "h-16  bg-black/80 shadow-2xl shadow-black/40 backdrop-blur-xl"
            : "h-24 bg-gradient-to-b from-black/60 to-transparent"
        }`}
      >
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 md:px-10">
          {/* ── Logo ── */}
          <Link to="/" className="group flex items-center gap-3">
            <div className="rounded-full border border-white/10 bg-white p-1.5 transition-all duration-300 group-hover:border-emerald-400/30 group-hover:shadow-lg group-hover:shadow-emerald-500/10">
              <img
                src="./logo3.png"
                alt="Logo"
                className="h-8 w-auto object-contain opacity-90 transition-opacity duration-300 group-hover:opacity-100"
              />
            </div>
          </Link>

          {/* ── Desktop Nav ── */}
          <div className="hidden items-center gap-10 lg:flex">
            {navItems.map((item) => {
              const active = isActive(item.to);
              return (
                <Link
                  key={item.label}
                  to={item.to}
                  className={`group relative flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
                    active
                      ? "text-emerald-400"
                      : "text-white/50 hover:text-white"
                  }`}
                >
                  {item.label}
                  {item.external && (
                    <ExternalLink className="h-2.5 w-2.5 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                  )}
                  {/* Underline */}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-px bg-gradient-to-r from-emerald-400 to-transparent transition-all duration-300 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                  {/* Active dot */}
                  {active && (
                    <span className="absolute -bottom-3.5 left-1/2 h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-emerald-400" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* ── CTA ── */}
          <div className="hidden items-center gap-4 lg:flex">
            <Link to="/apply">
              <button className="glow-button group relative overflow-hidden rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 px-7 py-2.5 text-[10px] font-black uppercase tracking-[0.18em] text-black shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:scale-105 hover:shadow-emerald-500/40 active:scale-95">
                <span className="relative flex items-center gap-2">
                  Book Now
                  <ArrowUpRight className="h-3 w-3 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </button>
            </Link>
          </div>

          {/* ── Mobile Toggle ── */}
          <button
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="rounded-lg border border-white/10 p-2 text-white/60 transition-all duration-200 hover:border-white/20 hover:text-white lg:hidden"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {/* ── Mobile Menu ── */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-16 z-[998] border-b border-white/[0.06] bg-black/95 backdrop-blur-xl lg:hidden">
          <div className="mx-auto max-w-7xl px-6 py-8">
            <div className="mb-8 flex flex-col gap-1">
              {navItems.map((item, i) => {
                const active = isActive(item.to);
                return (
                  <Link
                    key={item.label}
                    to={item.to}
                    className={`mobile-menu-enter flex items-center justify-between rounded-lg px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-200 ${
                      active
                        ? "bg-emerald-400/10 text-emerald-400"
                        : "text-white/50 hover:bg-white/[0.04] hover:text-white"
                    }`}
                    style={{ animationDelay: `${i * 40}ms` }}
                  >
                    <span>{item.label}</span>
                    <span className="flex items-center gap-2">
                      {active && (
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      )}
                      {item.external && (
                        <ExternalLink className="h-3 w-3 opacity-40" />
                      )}
                    </span>
                  </Link>
                );
              })}
            </div>

            <Link to="/apply" className="block">
              <button className="w-full rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 py-4 text-[11px] font-black uppercase tracking-[0.2em] text-black shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-emerald-500/40 active:scale-95">
                Book Now
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
