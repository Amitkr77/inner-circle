import React, { useEffect, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Test() {
  const containerRef = useRef(null);
  const sceneRef = useRef(null); // The 3D wrapper
  const textRef = useRef(null);  // The text layer
  const imageRef = useRef(null); // The image layer
  const badgeRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      
      // --- 1. Entrance Animation ---
      const tl = gsap.timeline();
      
      tl.from(badgeRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)"
      })
      .from(".char-word", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.1,
        ease: "power4.out"
      }, "-=0.5")
      .from(imageRef.current, {
        scale: 1.2,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out"
      }, "-=1");

      // --- 2. Scroll Animation: The Z-AXIS FLIGHT ---
      // This is the "Premium" feel. Elements move towards the viewer (Z-axis).
      
      // Text flies AT you
      gsap.to(textRef.current, {
        z: 500, // Move 500px towards the camera
        opacity: 0,
        scale: 1.5,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      // Image moves AWAY (sinks)
      gsap.to(imageRef.current, {
        z: -300, // Move 300px away
        scale: 0.8,
        rotationX: 15, // Tilt back
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  // 3. Interactive 3D Tilt Logic
  const handleMouseMove = (e) => {
    if (!sceneRef.current) return;

    const { clientX, clientY } = e;
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Calculate rotation based on mouse position relative to center
    // Limit rotation to small angles for elegance (-5 to 5 degrees)
    const rotateY = ((clientX - width / 2) / width) * 10; 
    const rotateX = ((clientY - height / 2) / height) * -10; // Inverted Y feels more natural

    gsap.to(sceneRef.current, {
      rotateX: rotateX,
      rotateY: rotateY,
      duration: 1, // Smooth follow
      ease: "power2.out"
    });
  };

  return (
    <section 
      ref={containerRef} 
      className="relative w-full h-[200vh] bg-[#050505] text-white overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      
      {/* 3D Scene Wrapper - Provides Perspective */}
      <div className="fixed inset-0 flex items-center justify-center perspective-[1200px] pointer-events-none">
        <div 
          ref={sceneRef}
          className="relative w-full max-w-[1600px] mx-auto px-6 transform-style-3d will-change-transform"
          style={{ transformStyle: "preserve-3d" }}
        >
          
          {/* Floating Badge */}
          <div 
            ref={badgeRef}
            className="absolute top-10 left-6 md:left-12 z-50"
            style={{ transform: "translateZ(50px)" }} // Floats above text
          >
            <div className="px-4 py-2 border border-white/10 bg-white/5 backdrop-blur-md rounded-full flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/70">Founder Retreat</span>
            </div>
          </div>

          {/* Layer 1: The Image (Sinks into background on scroll) */}
          <div 
            ref={imageRef}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[50vh] md:w-[60vw] md:h-[60vh] rounded-2xl overflow-hidden shadow-2xl will-change-transform"
            style={{ transform: "translateZ(-100px)" }}
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
          </div>

          {/* Layer 2: The Typography (Comes towards you on scroll) */}
          <div 
            ref={textRef}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10 will-change-transform mix-blend-overlay"
            style={{ transform: "translateZ(0px)" }} 
          >
            <h1 className="font-serif text-[12vw] leading-[0.8] font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-600">
              <div className="overflow-hidden">
                <span className="char-word block">Elevate</span>
              </div>
              <div className="overflow-hidden">
                <span className="char-word block italic text-white">Your</span>
              </div>
              <div className="overflow-hidden">
                <span className="char-word block text-orange-400">Reality.</span>
              </div>
            </h1>
          </div>

          {/* Floating CTA */}
          <button 
            className="absolute bottom-10 right-6 md:right-12 z-50 group pointer-events-auto"
            style={{ transform: "translateZ(100px)" }} // Highest Z
          >
            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">
              <span>Start Journey</span>
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                <ArrowUpRight size={16} />
              </div>
            </div>
          </button>

        </div>
      </div>

      {/* Noise Texture for "Film" Feel */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] mix-blend-overlay" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />

    </section>
  );
}