
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const stagger = {
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function About() {
  return (
    <div className="bg-[#0B0B0B] text-white font-sans overflow-hidden">

      {/* 1. HERO */}
      <section className="relative min-h-screen flex flex-col justify-center px-12 md:px-24 pt-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-30 grayscale"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmmPz2RF0tVJDZwUor67zYSeXvPWW9dQIDk4JJ0aGkjV3CK7Renp79B8pKS-kIW0a1RAMcgEGQiEC5kNZCD24fkojwqGji2Np-3cwlzZMO4fWuqNjyI-Xa_Kafq5ST0MFEFxC7K_TmqK4bgBVbCWSl-fipdf0dSrkS_SIOO1pbvfRM7_WORFj3tLtyQbwr-uODMtugx5Oa8CCBP7abeJaJhU7ApvSwxkMXjUzqzNG5YA72ZYb7Nu1byzddaFRVrTBvYur74yDUfuk"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl">

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-green-400 text-xs tracking-[0.3em] uppercase mb-6"
          >
            OUR PURPOSE
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] mb-8"
          >
            Clarity over noise. Always.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="text-xl md:text-3xl text-gray-400 max-w-3xl leading-relaxed font-light"
          >
            Collabuilder exists to create an environment where founders think clearly and build with intention.
          </motion.p>

        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-12 flex items-center gap-4 animate-bounce opacity-40">
          <span className="text-xl">↓</span>
          <span className="text-xs tracking-widest uppercase">
            Scroll to descend
          </span>
        </div>

      </section>

      {/* 2. ORIGIN */}
      <section className="py-16 px-12 md:px-24 bg-[#0B0B0B]">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">

          {/* LEFT (Heading) */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="md:col-start-2 md:col-span-4"
          >
            <h2 className="text-4xl font-bold tracking-tight leading-tight">
              Built from frustration, not theory.
            </h2>
          </motion.div>

          {/* RIGHT (Content) */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="md:col-span-6 flex flex-col gap-8 text-gray-400"
          >
            <p className="text-lg leading-loose">
              Most founder spaces are built for visibility, not clarity.
            </p>

            <p className="text-lg leading-loose">
              Too many events. Too much noise.
            </p>

            <p className="text-lg leading-loose">
              We created Collabuilder as a space where founders stop reacting,
              start thinking, and make better decisions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. THE MANDATE */}
      <section className="py-16 px-12 md:px-24 bg-[#0F0F0F] overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
          {/* IMAGE SIDE */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="w-full md:w-1/2 relative"
          >
            <div className="aspect-[4/5] bg-[#1a1a1a] rounded-sm overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCU3pGfkFQkB2R4pRbuy2YVig7qwp2ENJaLfag8ZpNAHEAD0uKK_7iw1i2GAQg1VEe9dfAtp84stX4i1C_z27BSZQpvlsRu6uCCM-k53tml-iu0IgmqOE0sU8WjX4fQvXK9JZqvfCyDT_iDxJEkw53U99q7mkViBF53O4qGI6OtS3O3cin4ON9YY8nyku0etHXmznCRcNHErC3Gw0UqRHD4CgbuiPPT_IrVb2LkqccDs3QFQ_YpzEiyVE29W_pSBbAxrbjWWCHSBIk"
                className="w-full h-full object-cover grayscale brightness-75"
              />
            </div>

            {/* FLOATING 15 BOX 
            <div className="absolute -bottom-10 -right-10 bg-green-500 p-12 hidden md:block">
              <span className="text-7xl font-black text-black">15</span>
            </div>*/}
          </motion.div>

          {/* TEXT SIDE */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="w-full md:w-1/2"
          >
            <span className="text-green-400 tracking-[0.2em] uppercase text-xs mb-4 block">
              THE MANDATE
            </span>

            <h2 className="text-5xl font-bold tracking-tight mb-8">
              High-Density Contribution.
            </h2>

            <p className="text-lg text-gray-400 leading-loose mb-10">
              We keep groups intentionally small—not for exclusivity,
              but for clarity. In a focused group, there’s no hiding.
              Everyone contributes, and every conversation matters.
            </p>

            <div className="space-y-6">

              <div className="flex items-start gap-4">
                <span className="text-green-400 mt-1">✔</span>
                <span className="text-white">
                  No spectators. Every founder actively participates.
                </span>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-green-400 mt-1">✔</span>
                <span className="text-white">
                  Built for real thinking, not surface-level networking.
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. BELIEF */}
      <section className="py-16 px-6 md:px-12 bg-[#0F0F0F] text-center">
        {/* LABEL */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="text-green-400 text-xs tracking-[0.3em] uppercase mb-8"
        >
          THE BELIEF
        </motion.p>

        {/* MAIN STATEMENT */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-10"
        >
          Clarity changes everything.
        </motion.h2>

        {/* DIVIDER */}
        <div className="w-16 h-[1px] bg-green-400 mx-auto mb-10 opacity-40"></div>
        {/* SUPPORT TEXT */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
        >
          Most founders don’t fail due to lack of effort—but lack of clarity.
          When clarity improves, execution follows.
        </motion.p>
      </section>

      {/* 5. EXPERIENCE */}
      <section className="py-16 px-4 md:px-24 bg-[#0F0F0F]">
        <div className="max-w-6xl mx-auto"> 
        <div className="grid md:grid-cols-12 gap-16 items-center">
          {/* LEFT SIDE */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="md:col-span-5"
          >
            <h2 className="text-4xl md:text-5xl text-green-400 font-bold tracking-tight leading-tight">
              A different kind of environment
            </h2>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="md:col-span-6 md:col-start-7"
          >
            <div className="space-y-6 text-lg text-gray-400 leading-loose">
              <p>Not designed for scale.</p>
              <p className="text-white font-medium">
                Designed for depth.
              </p>
              <p>Small groups. Focused sessions. No distractions.</p>
            </div>
          </motion.div>
        </div>
        </div>
      </section>

      {/* 6. PRINCIPLES */}
      <section className="py-16 px-12 md:px-24 bg-[#0B0B0B]">
        <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="text-green-400 tracking-[0.3em] uppercase text-xs mb-4 block"
          >
            THE CREED
          </motion.span>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            className="text-5xl font-bold"
          >
            Our Core Principles
          </motion.h2>
        </div>


        {/* GRID */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >

          {[
            {
              title: "Honest Thinking",
              icon: "psychology",
            },
            {
              title: "Depth Over Noise",
              icon: "layers",
            },
            {
              title: "Meaningful Connection",
              icon: "all_inclusive",
            },
          ].map((item, i) => (

            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="bg-[#1A1A1A] p-12 group hover:bg-[#222] transition-all duration-500"
            >

              {/* ICON */}
              <span
                className="material-symbols-outlined text-green-400 mb-8 block text-center"
                style={{
                  fontSize: "40px",
                  fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24",
                }}
              >
                {item.icon}
              </span>

              {/* TITLE */}
              <h3 className="text-2xl font-bold mb-4">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-400 leading-relaxed font-light">
                Built for real progress, not surface-level interaction.
              </p>

            </motion.div>

          ))}

        </motion.div>

        </div>
      </section>

      {/* 7. BUILDERS */}
      <section className="py-16 px-12 md:px-24 bg-[#0F0F0F]">
        <div className="max-w-4xl mx-auto">
          {/* TOP TEXT */}
          <div className="mb-20 text-center md:text-left">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              className="text-5xl font-bold mb-6"
            >
              Who built this
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              className="text-xl text-gray-400 leading-relaxed font-light"
            >
              We’re builders ourselves. We’ve faced confusion, lack of clarity,
              and wrong decisions. Collabuilder is what we wish existed earlier.
            </motion.p>
          </div>

          {/* TEAM GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* PERSON 1 */}
            <div className="flex gap-6 items-center">
              <div className="w-20 h-20 rounded-full overflow-hidden grayscale bg-[#1A1A1A] flex-shrink-0">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEt2oaX68PE-vuaAFnPiURcHuDBEcbQvmGitJu8PtYTdMC4td5K1nCtSzPbJRC8HjSQBoL2KTeskI57skGylAS9lLyapPi41TOPnewtX0PJLr2-QRzHYWhF7c4TBI8blUaWpfy_dqXo9ErwTXdaS0E0JxJxAcQXggYNK9ND93woEct1cyKLFKGzNSdLV_9RdveDWx87UHY8olD2idmxFwue07Z8C1Tq2OIjyEWd2XBpAK5uoY9fV3GqGKGLlfJ6bhuCDbVHbrG9lA"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-lg">Founder</h4>
                <p className="text-green-400 text-[10px] tracking-widest uppercase mb-1">
                  Builder
                </p>
                <p className="text-gray-400 text-sm">
                  Building systems and environments where founders think clearly and execute better.
                </p>
              </div>
            </div>

            {/* PERSON 2 */}
            <div className="flex gap-6 items-center">
              <div className="w-20 h-20 rounded-full overflow-hidden grayscale bg-[#1A1A1A] flex-shrink-0">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgMA_DSp-25qtvaK_whY3ZtfJjUD8FdX6G0D8SUZkhy8zGz7gjUDk-K43mxrzt-N4a8qFwNIA5Eebnw8BX9kA3uOIBvQ_P4rY9_rCDkOYdwdgrMSLEKSgMugY2UTsZ3gTt9i0H-s4JCibxS9rBJekuz82A44eTM0NaksuBuZWxKWB73DymlZDpxRL0iiIHpwshDWjXlZDxxmrTQhLom9OlhRJGYIHX5wLEqgUfOlYXqvJABvl0BNar0fTiDLGgW-mYY2ClHmXlNvg"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h4 className="font-bold text-lg">Co-Builder</h4>
                <p className="text-green-400 text-[10px] tracking-widest uppercase mb-1">
                  Operator
                </p>
                <p className="text-gray-400 text-sm">
                  Focused on creating meaningful founder connections and high-trust environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. POSITIONING */}
      <section className="py-16 px-12 md:px-24 bg-[#0B0B0B] text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="text-4xl md:text-5xl font-bold tracking-tight mb-8"
        >
          This is not for everyone
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-6 leading-relaxed"
        >
          If you're looking for casual networking or passive learning—this isn’t it.
        </motion.p>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="text-xl md:text-2xl font-medium text-green-400 max-w-2xl mx-auto leading-relaxed"
        >
          But if you want clarity, direction, and real progress—you’ll feel it immediately.
        </motion.p>
      </section>

      {/* 9. FINAL CTA */}
      <section className="py-10 text-center bg-[#0B0B0B]">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="text-5xl md:text-7xl font-bold tracking-tighter mb-10"
        >
          Ready to think clearly?
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="text-gray-400 mb-12 max-w-xl mx-auto text-lg"
        >
          Join a small group of founders serious about building.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          className="bg-green-400 text-black px-12 py-5 text-sm font-bold tracking-[0.2em] uppercase rounded-sm hover:opacity-90 transition-all duration-300"
        >
          Apply for the next retreat
        </motion.button>
      </section>
    </div>
  );
}