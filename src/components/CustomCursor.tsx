import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const cursorDotRef = useRef<HTMLDivElement | null>(null);

  // ── Custom cursor ────────────────────────────────────────────────────────────
  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = cursorDotRef.current;

    if (!cursor || !dot) return;

    let mx = 0,
      my = 0,
      cx = 0,
      cy = 0;

    const move = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };

    window.addEventListener("mousemove", move);

    let raf: number;

    const tick = () => {
      cx += (mx - cx) * 0.12;
      cy += (my - cy) * 0.12;

      cursor.style.transform = `translate(${cx - 20}px, ${cy - 20}px)`;
      dot.style.transform = `translate(${mx - 3}px, ${my - 3}px)`;

      raf = requestAnimationFrame(tick);
    };

    tick();

    const enterBtn = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;

      if (target?.closest("button")) {
        gsap.to(cursor, {
          scale: 2.2,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    const leaveBtn = () => {
      gsap.to(cursor, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    document.addEventListener("mouseover", enterBtn);
    document.addEventListener("mouseout", leaveBtn);

    return () => {
      cancelAnimationFrame(raf);

      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", enterBtn);
      document.removeEventListener("mouseout", leaveBtn);
    };
  }, []);
  return (
    <div>
      {" "}
      {/* ── Inject fonts & global cursor hide ─── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Sans:wght@300;400&display=swap');
        * { cursor: none !important; } 
        .hero-wrap { font-family: 'DM Sans', sans-serif; }
        .font-display { font-family: 'Cormorant Garamond', serif; }
        .reveal-line { overflow: hidden; display: block; }
        .reveal-line span { display: inline-block; }
        @keyframes pulse-ring {
          0%   { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(2.5); opacity: 0; }
        }
        @keyframes line-slide {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        .btn-primary:hover .btn-fill { transform: scaleX(1); }
        .btn-fill {
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s cubic-bezier(0.76, 0, 0.24, 1);
        }
        .stat-card:hover { background: rgba(255,255,255,0.06); }
        .marquee-track { overflow: hidden; }
        .marquee-inner { display: flex; width: max-content; gap: 0; }
      `}</style>
      {/* ── Custom Cursor ─── */}
      <div
        ref={cursorRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.5)",
          pointerEvents: "none",
          zIndex: 9999,
          mixBlendMode: "difference",
          willChange: "transform",
          transition: "scale 0.3s",
        }}
      />
      <div
        ref={cursorDotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "orange",
          pointerEvents: "none",
          zIndex: 9999,
          willChange: "transform",
        }}
      />
    </div>
  );
}
