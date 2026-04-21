import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
interface Props { onBack: () => void; }
export default function MunnarPage({ onBack }: Props) {
  const data = [
  {
    icon: "✔️",
    title: "Curated Founders",
    desc: "Strict vetting process to ensure every person in the room adds value.",
  },
  {
    icon: "💬",
    title: "Deep Conversations",
    desc: "No small talk. We go straight to the structural challenges of your business.",
  },
  {
    icon: "🎯",
    title: "Outcome Driven",
    desc: "Leave with a 90-day execution roadmap, not just inspiration.",
  },
];
 const mentors = [
    {
      name: "Rohan Mehta",
      role: "Founder, Scalar Systems",
      desc: "Scaled from 0 to $40M ARR in 4 years. Expert in product-led growth.",
      img: "https://i.pravatar.cc/400?u=1",
    },
    {
      name: "Ananya Kapoor",
      role: "Partner, Zenith Ventures",
      desc: "Led 30+ seed rounds. Successfully exited two SaaS platforms.",
      img: "https://i.pravatar.cc/400?u=2",
    },
    {
      name: "Vikram Singh",
      role: "CTO, Cloudscale",
      desc: "Built infrastructure for 10M+ users. Master of operational excellence.",
      img: "https://i.pravatar.cc/400?u=3",
    },
  ];
  return (
  
    <div className="min-h-screen bg-[#131313] text-[#E5E2E1] font-['Manrope',sans-serif]">
      <nav className="fixed top-0 w-full z-50 bg-[#131313]/60 backdrop-blur-xl shadow-2xl shadow-black/40">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-6 md:px-12 py-5">
          <button onClick={onBack} className="flex items-center gap-2 text-[#E9C176] font-bold hover:opacity-80 transition-opacity group"><ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform"/>Back to Expeditions</button>
          <button className="bg-gradient-to-br from-[#E9C176] to-[#C5A059] text-[#412d00] font-bold py-2.5 px-6 text-xs uppercase tracking-widest">🚀 Request Booking</button>
        </div>
      </nav>
      <section className="relative min-h-screen flex items-end overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover opacity-40" src="https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&q=80&w=2070" alt="Munnar" referrerPolicy="no-referrer"/>
          <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-[#131313]/50 to-transparent"/>
        </div>
        <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:0.8}} className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-20 w-full">
          <p className="font-bold text-[#E9C176] uppercase tracking-[0.4em] text-xs mb-6">Nature · Kerala, India</p>
          <h1 className="font-['Epilogue',sans-serif] text-5xl md:text-8xl font-black tracking-tighter mb-6 leading-[0.9]" style={{textShadow:'0 0 40px rgba(233,193,118,0.2)'}}>Munnar<br/>Tea<br/>Trails</h1>
          <p className="text-xl text-[#D1C5B4] max-w-2xl font-light leading-relaxed mb-8">Emerald green tea estates, misty mountain air, and rich wildlife. God's Own Country at its finest.</p>
          <div className="flex flex-wrap gap-4 text-xs uppercase tracking-widest text-[#9a8f80]">
            <span className="border border-[#4e4639] px-4 py-2">4 Days · 3 Nights</span>
            <span className="border border-[#4e4639] px-4 py-2">Group of 10</span>
            <span className="border border-[#E9C176]/40 px-4 py-2 text-[#E9C176]">₹16,500 / Person</span>
          </div>
        </motion.div>
      </section>
      <section className="py-32 bg-[#1c1b1b]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid md:grid-cols-2 gap-20 items-start">
          
          {/* LEFT SIDE */}
          <div>
            <p className="text-[#E9C176] uppercase tracking-[0.3em] text-xs mb-4 font-bold">
              The Status Quo
            </p>

            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              Networking is broken.
            </h2>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-12">
            
            {/* ITEM 1 */}
            <div className="border-b border-white/10 pb-8">
              <h3 className="text-xl font-bold mb-3">
                Shallow Interactions
              </h3>
              <p className="text-white/50 leading-relaxed">
                Exchange cards, fake smiles, and "what do you do?" loops that lead nowhere.
              </p>
            </div>

            {/* ITEM 2 */}
            <div className="border-b border-white/10 pb-8">
              <h3 className="text-xl font-bold mb-3">
                Zero Outcome
              </h3>
              <p className="text-white/50 leading-relaxed">
                Returning to your office with a stack of LinkedIn requests but no actual breakthroughs.
              </p>
            </div>

            {/* ITEM 3 */}
            <div>
              <h3 className="text-xl font-bold mb-3">
                The Wrong Room
              </h3>
              <p className="text-white/50 leading-relaxed">
                Spending precious time with tourists rather than builders who challenge your perspective.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
    {/* FeaturesSection */}
    <section className="py-32 bg-[#131313] text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-20">
        Designed for the 1%.
      </h2>

      <div className="grid md:grid-cols-3 gap-16 max-w-6xl mx-auto px-6">
        {data.map((item, i) => (
          <div key={i} className="space-y-4">
            <div className="text-4xl text-[#E9C176]">{item.icon}</div>
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="text-white/50 text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
    {/* why include this section? mentors are not the main focus of the expedition, and we don't want to overpromise on who will be there. we can just say "sessions with industry leaders" or something in the itinerary section instead of naming specific mentors here. */}
      <section className="py-32 bg-[#0e0e0e]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p className="font-bold text-[#E9C176] uppercase tracking-[0.2em] text-xs mb-16 text-center">What's Included</p>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            <div className="md:col-span-3 bg-[#1c1b1b] p-12 hover:bg-[#201f1f] transition-colors"><p className="text-2xl mb-3">🦏</p><h3 className="font-['Epilogue',sans-serif] text-2xl font-bold mb-4">Eravikulam National Park</h3><p className="text-[#D1C5B4] font-light">Home to the endangered Nilgiri Tahr. UNESCO-nominated biodiversity hotspot with endemic flora and breathtaking valley views.</p></div>
            <div className="md:col-span-3 bg-[#1c1b1b] p-12 hover:bg-[#201f1f] transition-colors"><p className="text-2xl mb-3">⛵</p><h3 className="font-['Epilogue',sans-serif] text-2xl font-bold mb-4">Mattupetty Dam Boating</h3><p className="text-[#D1C5B4] font-light">Private boating session on the pristine Mattupetty reservoir surrounded by shola forests and tea estates.</p></div>
            <div className="md:col-span-2 bg-[#1c1b1b] p-12 hover:bg-[#201f1f] transition-colors"><p className="text-xl mb-3">🌶️</p><h4 className="font-['Epilogue',sans-serif] text-xl font-bold mb-4">Spice Plantation Tour</h4><p className="text-sm text-[#D1C5B4] font-light">Walk through cardamom, pepper, and cinnamon plantations. Interactive cooking session with local spices.</p></div>
            <div className="md:col-span-2 bg-[#1c1b1b] p-12 hover:bg-[#201f1f] transition-colors"><p className="text-xl mb-3">🍵</p><h4 className="font-['Epilogue',sans-serif] text-xl font-bold mb-4">Tea Factory Visit</h4><p className="text-sm text-[#D1C5B4] font-light">End-to-end tea processing tour, followed by expert tasting of single-origin Munnar teas.</p></div>
            <div className="md:col-span-2 bg-[#1c1b1b] p-12 hover:bg-[#201f1f] transition-colors"><p className="text-xl mb-3">🌿</p><h4 className="font-['Epilogue',sans-serif] text-xl font-bold mb-4">Tea Estate Stay</h4><p className="text-sm text-[#D1C5B4] font-light">Wake up surrounded by rolling green hills in a heritage tea planter's bungalow.</p></div>
          </div>
        </div>
      </section>
      {/* Mentors Section */}
      <section className="py-32 bg-[#131313]">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-bold mb-2">
          Learn From Builders Who’ve Done It
        </h2>
        <p className="text-white/40 mb-16 italic">
          No theorists. Only operators.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {mentors.map((m, i) => (
            <div key={i}>
              <div className="aspect-[3/4] overflow-hidden mb-6 grayscale hover:grayscale-0 transition">
                <img src={m.img} className="w-full h-full object-cover" />
              </div>

              <h4 className="text-xl font-bold">{m.name}</h4>
              <p className="text-[#E9C176] text-sm uppercase mb-2">
                {m.role}
              </p>
              <p className="text-white/50 text-sm">{m.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <div className="bg-[#1c1b1b] p-8 border-l-2 border-[#E9C176]">
            <h5 className="font-bold text-lg mb-2">Engagement Block</h5>
            <p className="text-white/50 text-sm">
              Reserved slots for 1:1 strategy audits and hyper-focused Q&A rounds with each builder.
            </p>
          </div>

          <div className="bg-[#1c1b1b] p-8 border-l-2 border-[#E9C176]">
            <h5 className="font-bold text-lg mb-2">Investor Access</h5>
            <p className="text-white/50 text-sm">
              Access to private demo nights and follow-up introductions.
            </p>
          </div>
        </div>

        <p className="text-center text-xs text-white/30 mt-10 uppercase tracking-widest">
          We don’t promise funding. We create the right environment.
        </p>

      </div>
    </section>
      {/* location section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0"><img className="w-full h-full object-cover opacity-15" src="https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&q=80&w=2070" alt="bg" referrerPolicy="no-referrer"/></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <div>
              <p className="font-bold text-[#E9C176] uppercase tracking-[0.2em] text-xs mb-4">Location: Munnar, Kerala</p>
              <h2 className="font-['Epilogue',sans-serif] text-4xl md:text-5xl font-bold tracking-tight mb-8">Nature's Boardroom.</h2>
              <p className="text-[#D1C5B4] mb-8 leading-relaxed font-light">3 nights in the greenest place in India. Munnar's misty air and endless tea estates create the perfect environment for clarity and connection.</p>
              <ul className="space-y-6">
                {[{icon:'🌱',title:'Most Affordable',desc:"At ₹16,500, Munnar is Aetheris's most accessible premium retreat — perfect for first-timers."},{icon:'🌿',title:'Nature Immersion',desc:'India\'s first fully organic region. Zero pollution, fresh mountain air, and stunning biodiversity.'},{icon:'✈️',title:'Easy from Patna',desc:'Fly to Cochin, drive to Munnar. Total travel ~4-5 hours.'}].map((item,i)=>(
                  <li key={i} className="flex items-start gap-4"><span className="text-xl mt-0.5">{item.icon}</span><div><h5 className="font-bold text-[#E5E2E1]">{item.title}</h5><p className="text-sm text-[#D1C5B4] font-light">{item.desc}</p></div></li>
                ))}
              </ul>
            </div>
            <div className="bg-[#1c1b1b] p-4 aspect-square">
              <div className="w-full h-full border border-[#4e4639]/20 flex items-center justify-center">
                <div className="text-center p-12"><p className="text-6xl mb-6 opacity-20">📍</p><h3 className="font-['Epilogue',sans-serif] text-2xl font-bold mb-2">Tea Planter's Bungalow</h3><p className="text-xs uppercase tracking-widest text-[#9a8f80]">Heritage Estate, Munnar Hills</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* itanerary section */}
      <section className="py-32 bg-[#0e0e0e]">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="font-['Epilogue',sans-serif] text-3xl font-bold mb-20 text-center">The 4-Day Narrative</h2>
          <div className="space-y-0">
            {[
              {day:'01',title:'Arrival & Misty Welcome',desc:'Arrive Cochin, scenic drive up to Munnar through spice-scented ghats. Evening on the tea estate.',meals:['Dinner'],active:true},
              {day:'02',title:'Wildlife & Water',desc:'Morning at Eravikulam National Park. Afternoon Mattupetty Dam boating. Sunset tea tasting.',meals:['Breakfast','Lunch','Dinner'],active:false},
              {day:'03',title:'Spices & Strategy',desc:'Spice plantation tour, tea factory visit, leadership workshop in the estate garden.',meals:['Breakfast','Lunch','Dinner'],active:false},
              {day:'04',title:'Departure',desc:'Final walk through the tea rows at sunrise. Farewell breakfast and drive to Cochin.',meals:['Breakfast'],active:false},
            ].map((item,i)=>(
              <div key={i} className={`relative pl-12 ${i<3?'pb-16 border-l border-[#4e4639]/30':'border-l border-[#4e4639]/30'}`}>
                <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full ring-8 ring-[#0e0e0e] ${item.active?'bg-[#E9C176]':'bg-[#4e4639]'}`}/>
                <p className="font-bold text-[#E9C176] text-xs uppercase tracking-widest mb-2">Day {item.day}</p>
                <h3 className="font-['Epilogue',sans-serif] text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-[#D1C5B4] font-light mb-4">{item.desc}</p>
                <div className="flex flex-wrap gap-2">{item.meals.map((m,mi)=><span key={mi} className="text-[9px] uppercase tracking-wider border border-[#4e4639] px-2.5 py-1 text-[#9a8f80]">{m}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Tourists vs Builders Section */}
      <section className="py-32 bg-[#0e0e0e]">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-8">

          {/* TOURISTS */}
          <div className="bg-[#1c1b1b] p-10">
            <h3 className="text-xl font-bold mb-6 text-[#E9C176]">
              ✖ The Tourists
            </h3>

            <ul className="space-y-3 text-white/50 text-sm">
              <li>• "I'm just exploring the ecosystem"</li>
              <li>• Looking for inspiration without perspiration</li>
              <li>• Focused on vanity metrics and PR</li>
              <li>• Hesitant to share real failures</li>
            </ul>
          </div>

          {/* BUILDERS */}
          <div className="bg-[#1c1b1b] p-10">
            <h3 className="text-xl font-bold mb-6 text-green-400">
              ✔ The Builders
            </h3>

            <ul className="space-y-3 text-white/50 text-sm">
              <li>• Focused on building a lasting legacy</li>
              <li>• Looking for brutal, honest feedback</li>
              <li>• Obsessed with unit economics & product</li>
              <li>• Radical transparency and vulnerability</li>
            </ul>
          </div>

        </div>

        {/* Bottom text */}
        <div className="text-center mt-20">
          <h3 className="text-2xl font-bold mb-4">
            15–20 Seats Available.
          </h3>
          <p className="text-white/40 text-sm">
            Selection is based on business stage and value contribution potential.
          </p>
        </div>

      </div>
    </section>
    {/* pricing section */}
      <section className="py-32 bg-[#1c1b1b]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="font-['Epilogue',sans-serif] text-4xl font-bold text-center mb-20">Secure Your Spot</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[{tier:'Early Bird',price:'₹14,500',items:['3-night estate stay','All Activities','All Meals'],popular:false},{tier:'Standard',price:'₹16,500',items:['Everything in Early','Strategy Workshop','Network Access','Content Package'],popular:true},{tier:'Premium',price:'₹22,000',items:['Everything in Standard','Private Bungalow Suite','Transfers','Priority Access'],popular:false}].map((t,i)=>(
              <div key={i} className={`p-12 flex flex-col relative ${t.popular?'bg-[#2a2a2a] border-2 border-[#E9C176] scale-105':'bg-[#201f1f] border border-[#4e4639]/20'}`}>
                {t.popular&&<div className="absolute top-0 right-0 bg-[#E9C176] text-[#412d00] text-[10px] font-bold px-4 py-1 uppercase tracking-widest">Most Popular</div>}
                <h4 className="uppercase tracking-widest text-xs mb-4 text-[#9a8f80]">{t.tier}</h4>
                <div className="font-['Epilogue',sans-serif] text-4xl font-bold mb-8">{t.price}</div>
                <ul className={`space-y-3 mb-12 text-sm flex-grow ${t.popular?'text-[#E5E2E1] font-medium':'text-[#D1C5B4] font-light'}`}>{t.items.map((item,ii)=><li key={ii}>✓ {item}</li>)}</ul>
                <button className={`w-full py-4 text-sm uppercase tracking-widest font-bold transition-all ${t.popular?'bg-[#E9C176] text-[#412d00]':'border border-[#9a8f80] text-[#E5E2E1] hover:bg-[#E5E2E1] hover:text-[#131313]'}`}>Apply</button>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* cta section */}
      <section className="py-40 bg-[#0e0e0e] text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(233,193,118,0.08),transparent_60%)]"/>
        <div className="relative z-10 max-w-3xl mx-auto px-12">
          <h2 className="font-['Epilogue',sans-serif] text-4xl md:text-5xl font-bold mb-8 leading-tight">Find your stillness in the green.</h2>
          <p className="text-[#D1C5B4] mb-12 font-light text-lg">The best ideas don't come in boardrooms. They come in tea gardens.</p>
          <button className="bg-gradient-to-br from-[#E9C176] to-[#C5A059] text-[#412d00] font-['Epilogue',sans-serif] font-bold py-6 px-16 text-xl hover:scale-105 transition-all">Request Booking Details</button>
          <div className="flex items-center justify-center gap-4 mt-6 text-xs uppercase tracking-[0.3em] text-[#9a8f80]"><span>Limited to 10 people</span><span className="h-1 w-1 rounded-full bg-[#E9C176]"/><span>Spots filling fast</span></div>
        </div>
      </section>
      <footer className="w-full py-16 px-12 bg-[#0E0E0E] border-t border-[#4E4639]/15">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-7xl mx-auto"><div className="text-lg font-bold">Aetheris Expeditions</div><div className="text-xs text-[#E5E2E1]/50">© 2026 Aetheris Global Expeditions.</div></div>
      </footer>
    </div>
  );
}
