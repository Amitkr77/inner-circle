import { motion } from 'motion/react';
import { ArrowLeft, Calendar, Users, Utensils, MapPin, Star, CheckCircle2, Plane, Clock } from 'lucide-react';
import { Experience } from '../constants';
import { Button } from './UI';

interface ExperienceDetailProps {
  exp: Experience;
  onBack: () => void;
}

const VIBE_COLORS: Record<string, string> = {
  Adventure: 'bg-accent-orange/20 text-accent-orange border-accent-orange/30',
  Luxury:    'bg-accent-purple/20 text-accent-purple border-accent-purple/30',
  Nature:    'bg-accent-emerald/20 text-accent-emerald border-accent-emerald/30',
  Growth:    'bg-blue-500/20 text-blue-400 border-blue-400/30',
};

export function ExperienceDetail({ exp, onBack }: ExperienceDetailProps) {
  return (
    <motion.div
      key={exp.id}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen bg-premium-black text-white"
    >
      {/* BACK BUTTON — pt-28 pushes it below fixed navbar (h-20/h-24 + buffer) */}
      <div className="pt-28 px-6 md:px-12 pb-6">
        <motion.button
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          onClick={onBack}
          className="inline-flex items-center gap-2 glass-immersive px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-white/10 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Expeditions
        </motion.button>
      </div>

      {/* HERO IMAGE — rounded card style */}
      <div className="relative h-[60vh] min-h-[400px] overflow-hidden mx-6 md:mx-12 rounded-[2rem]">
        <img
          src={exp.image}
          alt={exp.title}
          className="w-full h-full object-cover opacity-70 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-premium-black via-premium-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-premium-black/50 via-transparent to-transparent" />

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="absolute top-6 left-6 flex flex-wrap gap-3"
        >
          <span className={`border px-4 py-1.5 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold backdrop-blur-md ${VIBE_COLORS[exp.vibe] || VIBE_COLORS.Nature}`}>
            {exp.vibe}
          </span>
          <span className="glass-immersive px-4 py-1.5 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold text-white/60">
            {exp.duration} · {exp.nights} Nights
          </span>
        </motion.div>

        {/* Title bottom of hero */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-accent-emerald text-[11px] uppercase tracking-[0.3em] font-bold mb-3"
          >
            {exp.location}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-[-0.04em] leading-[1.05] mb-5 max-w-4xl"
          >
            {exp.title}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.32 }}
            className="flex flex-wrap items-center gap-6 text-white/50 text-sm"
          >
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-accent-emerald" />
              {exp.location}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-accent-emerald" />
              {exp.duration} · {exp.nights} Nights
            </span>
            <span className="flex items-center gap-2">
              <Users className="w-4 h-4 text-accent-emerald" />
              Group of {exp.groupSize}
            </span>
          </motion.div>
        </div>
      </div>

      {/* BODY */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

          {/* LEFT — content */}
          <div className="lg:col-span-2 space-y-16">

            <section>
              <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent-emerald mb-4">About This Expedition</p>
              <p className="text-lg text-white/60 font-light leading-relaxed">{exp.description}</p>
            </section>

            {exp.highlights && exp.highlights.length > 0 && (
              <section>
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent-emerald mb-6">What's Included</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {exp.highlights.map((h, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * idx }}
                      className="flex items-start gap-4 glass-immersive p-5 rounded-2xl hover:border-accent-emerald/30 transition-colors"
                    >
                      <CheckCircle2 className="w-5 h-5 text-accent-emerald mt-0.5 shrink-0" />
                      <span className="text-sm font-medium text-white/80">{h}</span>
                    </motion.div>
                  ))}
                </div>
              </section>
            )}

            <section>
              <div className="flex items-center gap-3 mb-8">
                <Plane className="w-5 h-5 text-accent-emerald" />
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-accent-emerald">Day-by-Day Itinerary</p>
              </div>

              {exp.itinerary.length > 0 ? (
                <div>
                  {exp.itinerary.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.06 * idx }}
                      className="relative pl-10 pb-10 border-l border-white/[0.08] last:border-l-transparent last:pb-0"
                    >
                      <div className="absolute -left-[9px] top-1 w-[18px] h-[18px] rounded-full bg-premium-black border-2 border-accent-emerald flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-emerald" style={{ boxShadow: '0 0 6px rgba(16,185,129,0.7)' }} />
                      </div>
                      <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-accent-emerald block mb-1.5">Day {item.day}</span>
                      <h4 className="text-xl font-bold text-white mb-2 tracking-tight">{item.title}</h4>
                      <p className="text-sm text-white/50 font-light leading-relaxed mb-4">{item.desc}</p>
                      {item.meals.length > 0 && (
                        <div className="flex flex-wrap items-center gap-2">
                          <Utensils className="w-3.5 h-3.5 text-white/30 shrink-0" />
                          {item.meals.map((meal, mIdx) => (
                            <span key={mIdx} className="text-[9px] font-bold uppercase tracking-wider bg-white/5 border border-white/[0.07] px-2.5 py-1 rounded-md text-white/40">
                              {meal}
                            </span>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="glass-immersive rounded-2xl p-8 text-center">
                  <Plane className="w-8 h-8 text-white/20 mx-auto mb-4" />
                  <p className="text-white/30 text-sm italic">Detailed day-wise itinerary coming soon.</p>
                  <p className="text-white/20 text-xs mt-2">Contact us for a custom plan tailored to your group.</p>
                </div>
              )}
            </section>
          </div>

          {/* RIGHT — sticky booking card */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-5">

              <div className="glass-immersive rounded-3xl p-8 border border-white/[0.07]">
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 mb-1">Starts At</p>
                <span className="text-5xl font-bold tracking-tight text-white block mb-1">
                  ₹{exp.pricePerHead.toLocaleString('en-IN')}
                </span>
                <p className="text-xs uppercase tracking-widest text-white/30 font-bold mb-8">Per Person · All Inclusive</p>

                <div className="space-y-3 mb-8">
                  {[
                    { icon: Calendar, label: 'Duration',   value: `${exp.duration} · ${exp.nights} Nights` },
                    { icon: Users,    label: 'Group Size', value: `Max ${exp.groupSize} People` },
                    { icon: Utensils, label: 'Meals',      value: 'All Inclusive' },
                    { icon: MapPin,   label: 'Location',   value: exp.location },
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex items-center gap-4 py-3 border-b border-white/[0.05] last:border-0">
                      <Icon className="w-4 h-4 text-accent-emerald shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-[9px] uppercase tracking-wider text-white/30 font-bold">{label}</p>
                        <p className="text-sm font-semibold text-white/80 truncate">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Button className="w-full py-4 text-sm font-black uppercase tracking-[0.2em]">
                  🚀 Request Booking
                </Button>
              </div>

              <div className="glass-immersive rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} className="w-3.5 h-3.5 fill-accent-orange text-accent-orange" />
                    ))}
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-white/30 font-bold">5.0 Rating</span>
                </div>
                <p className="text-xs text-white/40 font-light leading-relaxed">
                  "Every detail was obsessively curated. Returned with clarity we've never had before."
                </p>
                <p className="text-[10px] uppercase tracking-widest text-white/25 mt-3 font-bold">— Sarah Chen, Stripe</p>
              </div>

              <button
                onClick={onBack}
                className="w-full text-center text-xs uppercase tracking-[0.2em] text-white/30 hover:text-white/60 font-bold py-3 transition-colors flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-3 h-3" />
                View All Expeditions
              </button>

            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
