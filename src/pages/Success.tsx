import { CheckCircle2, Clock, ShieldCheck } from 'lucide-react';
import { easeInOut, motion } from "framer-motion";

export default function App() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: easeInOut } 
    },
  };

  return (
    <div className="relative h-screen flex flex-col font-sans overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-surface-lowest" />
        <motion.img
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 2 }}
          className="w-full h-full object-cover grayscale"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-fgnYtYQaK9KNobJQQR1dK3ODeI5wn_LWXo2KlrYW-vNDHMw75ZoaX3hDL1CRmpYQCkxiKuMD1l-aHxee3WegrFPPMHQo0Db60R0HDZvh5gzKXS9iIxUKYK-lUaKn_pQYqbBSRf3kCQFjXXqqrt4H9zM4yDqUDAwpYOP6HRbIThC39-gSgPkVahcVDl7Vae4y2vUxPtTwF9bUSQFxWCOAIaE5HRVScDWHtHjY_dFR90Yvjk-ISL4UQpdoTMx6HoMpAixX5bHgRNA"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-lowest via-transparent to-surface-lowest" />
      </div>

      {/* Navbar */}
      <nav className="relative z-50 flex justify-between items-center px-6 py-4 mt-20">
        <span className="text-lg font-bold tracking-[0.3em] uppercase">
           
        </span>
        <span className="text-[30px] tracking-[0.2em] uppercase opacity-50 hidden md:block">
          Status: <span className="text-primary italic">Pending</span>
        </span>
      </nav>

      {/* Main */}
      <main className="relative z-20 flex-grow flex items-center justify-center px-4 py-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl w-full flex flex-col items-center text-center"
        >

          {/* Icon */}
          <motion.div variants={itemVariants} className="mb-6">
            <div className="w-16 h-16 rounded-full border border-primary/20 flex items-center justify-center bg-white/5">
              <CheckCircle2 className="w-7 h-7 text-primary" />
            </div>
          </motion.div>

          {/* Tagline */}
          <motion.div variants={itemVariants} className="mb-2">
            <span className="text-[10px] tracking-[0.3em] uppercase text-primary">
              Inner Circle Retreat
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold uppercase leading-tight mb-4"
          >
            Application Received
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            variants={itemVariants}
            className="text-sm md:text-lg max-w-lg opacity-70 mb-8"
          >
            Your journey toward clarity and deep connection starts here.
          </motion.p>

          {/* Card */}
          <motion.div 
            variants={itemVariants}
            className="w-full max-w-xl bg-white/5 border border-white/10 p-6 md:p-8 rounded-xl backdrop-blur-xl"
          >
            <p className="text-sm md:text-base italic opacity-80">
              We carefully review each application to ensure a high-quality cohort.
              You will hear from us within 48 hours.
            </p>

            <div className="mt-6 pt-4 border-t border-white/10 flex flex-col md:flex-row justify-center gap-4 md:gap-10 text-[10px] uppercase opacity-50">

              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                48h Review
              </div>

              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                Confidential
              </div>

            </div>
          </motion.div>

        </motion.div>
      </main>

      {/* Footer */}
      {/* <footer className="relative z-20 py-4 px-6 text-center text-[10px] opacity-40">
        © 2024 THE MONOLITH
      </footer> */}

    </div>
  );
}