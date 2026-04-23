import { useState, useEffect } from "react";
import { Menu, X, ExternalLink } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

interface NavbarProps {
  onBook: () => void;
}

export function Navbar({ onBook }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const progress =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Explore", href: "#explore" },
    { label: "Corporate", href: "#corporate" },
    { label: "Community", href: "#community" },
    { label: "About", href: "about" },
    { label: "Resources", href: "#resources" },
  ];

  const handleBookClick = () => {
    onBook();
    setMobileMenuOpen(false);
  };

  return (
    <>
      <style>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-12px); }
          to   { opacity: 1; transform: translateY(0);     }
        }
        @keyframes shimmer {
          0%   { background-position: -1000px 0; }
          100% { background-position:  1000px 0; }
        }
        .mobile-menu-enter { animation: slideDown 0.3s ease-out forwards; }
        .glow-button { position: relative; overflow: hidden; }
        .glow-button::before {
          content: '';
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 100%; height: 100%;
          background: radial-gradient(circle, rgba(16,185,129,0.3) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .glow-button:hover::before { opacity: 1; }
      `}</style>

      {/* Scroll Progress Bar */}
      {isScrolled && (
        <div
          className="fixed top-0 left-0 z-[1000] h-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-emerald-500 transition-all duration-100"
          style={{ width: `${scrollProgress}%` }}
        />
      )}

      {/* Main Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-500 ${
          isScrolled
            ? "h-20 backdrop-blur-xl bg-black/70 shadow-2xl shadow-emerald-500/5"
            : "h-24 bg-gradient-to-b from-black/50 to-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto h-full px-6 md:px-10 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center cursor-pointer group">
            <div className="p-2 rounded-full bg-white border border-white/5 group-hover:border-white/20 transition-all duration-300">
              <img
                src="./logo3.png"
                alt="Logo"
                className="h-10 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-12">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm uppercase tracking-[0.15em] font-bold text-white/70 hover:text-emerald-400 transition-colors"
              >
                {item.label}
              </a>
            ))}

            {/* Contact Link */}
            <Link
              to="/contact"
              className="group flex items-center gap-1 text-sm uppercase tracking-[0.15em] font-bold text-white/70 hover:text-emerald-400 transition-colors relative"
            >
              <span className="relative">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-transparent group-hover:w-full transition-all duration-300" />
              </span>
              <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>

            {/* Book Now Button */}
            <button
              onClick={handleBookClick}
              className="glow-button relative group ml-6 px-8 py-3 text-xs uppercase tracking-[0.15em] font-black text-black rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white/70 hover:text-emerald-400 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed top-24 left-0 right-0 z-[998] lg:hidden bg-black/95 backdrop-blur-xl border-b border-emerald-500/10">
          <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="mobile-menu-enter text-sm uppercase tracking-[0.15em] font-bold text-white/70 hover:text-emerald-400 transition-colors"
              >
                {item.label}
              </a>
            ))}

            <a
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mobile-menu-enter text-sm uppercase tracking-[0.15em] font-bold text-white/70 hover:text-emerald-400 transition-colors flex items-center gap-2"
            >
              Contact
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={handleBookClick}
              className="mt-4 w-full px-8 py-4 text-xs uppercase tracking-[0.15em] font-black text-black rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 shadow-lg shadow-emerald-500/20 transition-all duration-300 transform hover:scale-105"
            >
              🚀 Book Now
            </button>
          </div>
        </div>
      )}
    </>
  );
}