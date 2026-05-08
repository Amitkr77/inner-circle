import type { ReactNode } from "react";
import { motion } from "motion/react";
import type { HTMLMotionProps } from "framer-motion";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  hover?: boolean;
}

export function GlassCard({
  children,
  className = "",
  hover = true,
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -5, transition: { duration: 0.2 } } : {}}
      className={`glass-immersive rounded-3xl p-8 overflow-hidden relative group ${className}`}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      {children}
    </motion.div>
  );
}

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  className?: string;
  onClick?: () => void;
}

export function Button({
  children,
  variant = "primary",
  className = "",
  onClick,
}: ButtonProps) {
  const base =
    "px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 active:scale-[0.98] cursor-pointer";

  const variants = {
    primary:
      "bg-accent-gradient text-white hover:brightness-110 shadow-lg shadow-accent-red/20",
    secondary:
      "bg-surface border border-surface-border text-white hover:bg-white/10 backdrop-blur-md",
    outline:
      "border border-white/10 hover:border-white/20 backdrop-blur-sm text-white",
    ghost: "hover:bg-white/5 text-white/80 hover:text-white",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export function GlowBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Top right atmospheric greenery glow */}
      <div className="absolute top-[-200px] right-[-200px] w-[700px] h-[700px] bg-gradient-to-r from-accent-orange/20 to-transparent blur-[100px] rounded-full" />
      {/* Bottom left deep forest glow */}
      <div className="absolute bottom-[-150px] left-[-150px] w-[600px] h-[600px] bg-gradient-to-r from-accent-forest/30 to-transparent blur-[100px] rounded-full" />
      {/* Subtle center organic drift */}
      <div className="absolute top-[30%] left-[20%] w-[500px] h-[500px] bg-orange-500/5 blur-[120px] rounded-full" />
    </div>
  );
}
