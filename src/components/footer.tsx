import { Link } from "react-router-dom";
import { easeInOut, motion } from "framer-motion";
import { GlobeBackground } from "../components/Globebackground";
import { social } from "../constants";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeInOut },
  },
};

const footerLinks = [
  {
    title: "Discover",
    links: [
      { name: "Features", path: "/#inside-retreat" },
      { name: "Explore", path: "/explore" },
      { name: "Booking Now", path: "/apply" },
      { name: "Pricing", path: "/" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", path: "/about" },
      { name: "Blog", path: "/blog" },
      { name: "Resources", path: "/resources" },
      { name: "Contact", path: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", path: "/privacy" },
      { name: "Terms of Use", path: "/terms" },
      { name: "Cookie Policy", path: "/cookies" },
     
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative py-6 border-t border-white/5 bg-premium-black overflow-hidden">

      {/* 🔥 Background glow (reduced blur) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute w-[300px] h-[300px] bg-green-500 blur-[70px] rounded-full top-[-100px] left-[-100px] animate-pulse" />
        <div className="absolute w-[250px] h-[250px] bg-blue-500 blur-[60px] rounded-full bottom-[-80px] right-[-80px] animate-pulse" />
      </div>

      {/* 🌍 Globe */}
      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: "-15%",
          width: "52%",
          opacity: 0.7,          // 🔥 increased visibility
          pointerEvents: "none", // 🔥 smoother UX
          zIndex: 1,
        }}
      >
        <GlobeBackground />
      </div>

      {/* 🔥 Light overlay (reduced shadow) */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          pointerEvents: "none",
          background:
            "linear-gradient(90deg,#0a0a0a 20%,rgba(10,10,10,0.25) 50%,transparent 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* 🔥 TOP GRID */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-6"
        >

          {/* LOGO */}
          <motion.div variants={fadeUp} className="space-y-4">
            <div className="flex items-center gap-2">
              <img
                src="/logo.png"
                alt="AETHERIS logo"
                className="h-14 w-40 bg-white p-2 rounded-full shadow-md hover:scale-105 transition-transform duration-300"
              />
            </div>

            <p className="text-white/40 text-xs leading-relaxed max-w-xs">
              The world's premier platform for hybrid travel and corporate
              transformation.
            </p>
          </motion.div>

          {/* LINKS */}
          {footerLinks.map((col, idx) => (
            <motion.div key={idx} variants={fadeUp}>
              <h5 className="font-bold mb-2 text-xs uppercase tracking-[0.2em]">
                {col.title}
              </h5>

              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.name}>
                    {link.name === "Features" ? (
                      <a
                        href="/#inside-retreat"
                        className="text-xs text-white/40 hover:text-green-400 transition-all duration-300 hover:translate-x-1 inline-block"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        to={link.path}
                        className="text-xs text-white/40 hover:text-green-400 transition-all duration-300 hover:translate-x-1 inline-block"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* 🔥 BOTTOM */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col md:flex-row items-center justify-between pt-6 border-t border-white/5 gap-6"
        >
          <p className="text-white/20 text-xs text-center md:text-left">
            © 2026 Aetheris Global Expeditions. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            {social.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-bold uppercase tracking-widest text-white/30 hover:text-green-400 transition-all duration-300 hover:scale-110"
              >
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>

      </div>
    </footer>
  );
}