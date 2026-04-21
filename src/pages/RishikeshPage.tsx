import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

interface Props { 
  onBack: () => void;
  onApply: () => void;
}

export default function RishikeshPage({ onBack, onApply }: Props) {
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

      {/* NAV */}
      <nav className="fixed top-0 w-full z-50 bg-[#131313]/60 backdrop-blur-xl shadow-2xl shadow-black/40">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-6 md:px-12 py-5">
          <button onClick={onBack} className="flex items-center gap-2 text-[#E9C176] font-bold tracking-tight hover:opacity-80 transition-opacity group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Expeditions
          </button>
          <button className="bg-gradient-to-br from-[#E9C176] to-[#C5A059] text-[#412d00] font-bold py-2.5 px-6 text-xs uppercase tracking-widest hover:shadow-[0_0_30px_rgba(233,193,118,0.3)] transition-all">
            🚀 Request Booking
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-end justify-start overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover opacity-40" src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=2070" alt="Rishikesh" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-[#131313]/50 to-transparent" />
        </div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-20 w-full">
          <p className="font-bold text-[#E9C176] uppercase tracking-[0.4em] text-xs mb-6">Adventure · Rishikesh, Uttarakhand</p>
          <h1 className="font-['Epilogue',sans-serif] text-5xl md:text-8xl font-black tracking-tighter text-[#E5E2E1] mb-6 leading-[0.9]" style={{ textShadow: '0 0 40px rgba(233,193,118,0.2)' }}>
            Rishikesh<br />High-Octane<br />Tech-Sprint
          </h1>
          <p className="text-xl text-[#D1C5B4] max-w-2xl font-light leading-relaxed mb-8">
            Perfect for teams looking for high energy and spiritual depth. Convenient travel from Patna via Dehradun/Haridwar.
          </p>
          <div className="flex flex-wrap gap-4 text-xs uppercase tracking-widest text-[#9a8f80]">
            <span className="border border-[#4e4639] px-4 py-2">6 Days · 5 Nights</span>
            <span className="border border-[#4e4639] px-4 py-2">Group of 15</span>
            <span className="border border-[#E9C176]/40 px-4 py-2 text-[#E9C176]">₹25,500 / Person</span>
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

      {/* WHAT YOU GET — Bento Grid */}
      <section className="py-32 bg-[#0e0e0e]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p className="font-bold text-[#E9C176] uppercase tracking-[0.2em] text-xs mb-16 text-center">What's Included</p>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            <div className="md:col-span-3 bg-[#1c1b1b] p-12 hover:bg-[#201f1f] transition-colors">
              <p className="text-2xl mb-3">🌊</p>
              <h3 className="font-['Epilogue',sans-serif] text-2xl font-bold mb-4">Grade III River Rafting</h3>
              <p className="text-[#D1C5B4] font-light">16km of thrilling rapids on the mighty Ganga. Professional guides, safety gear, and a hidden beach cafe lunch.</p>
            </div>
            <div className="md:col-span-3 bg-[#1c1b1b] p-12 hover:bg-[#201f1f] transition-colors">
              <p className="text-2xl mb-3">🔥</p>
              <h3 className="font-['Epilogue',sans-serif] text-2xl font-bold mb-4">Evening Ganga Aarti Ritual</h3>
              <p className="text-[#D1C5B4] font-light">Witness the sacred evening ceremony at Triveni Ghat — an experience that shifts your perspective on scale and purpose.</p>
            </div>
            <div className="md:col-span-2 bg-[#1c1b1b] p-12 hover:bg-[#201f1f] transition-colors">
              <p className="text-xl mb-3">⚡</p>
              <h4 className="font-['Epilogue',sans-serif] text-xl font-bold mb-4">Bungee & Flying Fox</h4>
              <p className="text-sm text-[#D1C5B4] font-light">India's highest bungee jump. Conquer fear, build team trust.</p>
            </div>
            <div className="md:col-span-2 bg-[#1c1b1b] p-12 hover:bg-[#201f1f] transition-colors">
              <p className="text-xl mb-3">⛺</p>
              <h4 className="font-['Epilogue',sans-serif] text-xl font-bold mb-4">Riverside Luxury Camping</h4>
              <p className="text-sm text-[#D1C5B4] font-light">Fall asleep to the sound of the Ganga in premium tented accommodation.</p>
            </div>
            <div className="md:col-span-2 bg-[#1c1b1b] p-12 hover:bg-[#201f1f] transition-colors">
              <p className="text-xl mb-3">🧘</p>
              <h4 className="font-['Epilogue',sans-serif] text-xl font-bold mb-4">Yoga & Strategy Sprints</h4>
              <p className="text-sm text-[#D1C5B4] font-light">Sunrise yoga followed by high-focus work sessions in the Himalayan air.</p>
            </div>
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
        <div className="absolute inset-0 z-0">
          <img className="w-full h-full object-cover opacity-15" src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=2070" alt="bg" referrerPolicy="no-referrer" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-24 items-center">
            <div>
              <p className="font-bold text-[#E9C176] uppercase tracking-[0.2em] text-xs mb-4">Location: Rishikesh, Uttarakhand</p>
              <h2 className="font-['Epilogue',sans-serif] text-4xl md:text-5xl font-bold tracking-tight mb-8">High Energy in Sacred Land.</h2>
              <p className="text-[#D1C5B4] mb-8 leading-relaxed font-light">5 nights of adrenaline and clarity in the Yoga Capital of the World. We combine white-water intensity with deep-focus team strategy sessions.</p>
              <ul className="space-y-6">
                {[
                  { icon: '🌊', title: 'Adventure First', desc: 'Rafting, bungee, and trekking that break comfort zones and build cohesion.' },
                  { icon: '🔥', title: 'Bonfire Masterminds', desc: 'Unfiltered night sessions by the river where real breakthroughs happen.' },
                  { icon: '✈️', title: 'Easy from Patna', desc: 'Direct travel via Dehradun airport or Haridwar train — under 12 hours.' },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="text-xl mt-0.5">{item.icon}</span>
                    <div>
                      <h5 className="font-bold text-[#E5E2E1]">{item.title}</h5>
                      <p className="text-sm text-[#D1C5B4] font-light">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#1c1b1b] p-4 aspect-square">
              <div className="w-full h-full border border-[#4e4639]/20 flex items-center justify-center">
                <div className="text-center p-12">
                  <p className="text-6xl mb-6 opacity-20">📍</p>
                  <h3 className="font-['Epilogue',sans-serif] text-2xl font-bold mb-2">The Base Camp</h3>
                  <p className="text-xs uppercase tracking-widest text-[#9a8f80]">Riverside Luxury Resort, Rishikesh</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ITINERARY TIMELINE */}
      <section className="py-32 bg-[#0e0e0e]">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="font-['Epilogue',sans-serif] text-3xl font-bold mb-20 text-center">The 6-Day Narrative</h2>
          <div className="space-y-0">
            {[
              { day: '01', title: 'Arrival & Evening Aarti', desc: 'Arrive at Dehradun. Luxury transfer to Rishikesh. Attend the sacred Ganga Aarti.', meals: ['Welcome Tea', 'Dinner'], active: true },
              { day: '02', title: 'Extreme Rafting', desc: '16km of thrilling rapids. Lunch at a hidden beach cafe. Evening team debrief.', meals: ['Breakfast', 'Lunch', 'Dinner'], active: false },
              { day: '03', title: 'Bungee & Bonfire', desc: "India's highest bungee jumping. Evening fireside chat with innovators.", meals: ['Breakfast', 'Lunch', 'Dinner'], active: false },
              { day: '04', title: 'Trek to Hidden Falls', desc: 'A scenic trek through the forest to Neer Garh waterfall. Strategy session at summit.', meals: ['Breakfast', 'Lunch', 'Dinner'], active: false },
              { day: '05', title: 'Yoga & Organic Sprints', desc: 'Sunrise yoga sessions followed by a deep-work strategy workshop.', meals: ['Breakfast', 'Lunch', 'Dinner'], active: false },
              { day: '06', title: 'Departure', desc: 'Final morning meditation, group commitment circle, and transfer to station/airport.', meals: ['Breakfast'], active: false },
            ].map((item, i) => (
              <div key={i} className={`relative pl-12 ${i < 5 ? 'pb-16 border-l border-[#4e4639]/30' : 'border-l border-[#4e4639]/30'}`}>
                <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full ring-8 ring-[#0e0e0e] ${item.active ? 'bg-[#E9C176]' : 'bg-[#4e4639]'}`} />
                <p className="font-bold text-[#E9C176] text-xs uppercase tracking-widest mb-2">Day {item.day}</p>
                <h3 className="font-['Epilogue',sans-serif] text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-[#D1C5B4] font-light mb-4">{item.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {item.meals.map((m, mi) => (
                    <span key={mi} className="text-[9px] uppercase tracking-wider border border-[#4e4639] px-2.5 py-1 text-[#9a8f80]">{m}</span>
                  ))}
                </div>
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
      {/* PRICING */}
      <section className="py-32 bg-[#1c1b1b]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="font-['Epilogue',sans-serif] text-4xl font-bold text-center mb-20">Secure Your Spot</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#201f1f] p-12 border border-[#4e4639]/20 flex flex-col">
              <h4 className="uppercase tracking-widest text-xs mb-4 text-[#9a8f80]">Early Bird</h4>
              <div className="font-['Epilogue',sans-serif] text-4xl font-bold mb-2">₹23,000</div>
              <p className="text-xs text-[#9a8f80] mb-8 uppercase tracking-widest">Per Person</p>
              <ul className="space-y-3 mb-12 text-sm text-[#D1C5B4] font-light flex-grow">
                <li>✓ All-inclusive 5-night stay</li>
                <li>✓ Group Adventure Activities</li>
                <li>✓ All Meals Included</li>
              </ul>
              <button 
  onClick={onApply}
  className="w-full py-4 border border-[#9a8f80] text-[#E5E2E1] hover:bg-[#E5E2E1] hover:text-[#131313] transition-colors text-sm uppercase tracking-widest"
>
  Apply
</button>
            </div>
            <div className="bg-[#2a2a2a] p-12 border-2 border-[#E9C176] flex flex-col relative scale-105">
              <div className="absolute top-0 right-0 bg-[#E9C176] text-[#412d00] text-[10px] font-bold px-4 py-1 uppercase tracking-widest">Most Popular</div>
              <h4 className="uppercase tracking-widest text-xs mb-4 text-[#9a8f80]">Standard</h4>
              <div className="font-['Epilogue',sans-serif] text-4xl font-bold mb-2">₹25,500</div>
              <p className="text-xs text-[#9a8f80] mb-8 uppercase tracking-widest">Per Person</p>
              <ul className="space-y-3 mb-12 text-sm text-[#E5E2E1] font-medium flex-grow">
                <li>✓ Everything in Early Bird</li>
                <li>✓ 1:1 Strategy Session</li>
                <li>✓ Post-Trip Network Access</li>
                <li>✓ Content Capture Package</li>
              </ul>
              <button className="w-full py-4 bg-[#E9C176] text-[#412d00] font-bold hover:shadow-[0_0_30px_rgba(233,193,118,0.3)] transition-all text-sm uppercase tracking-widest">Apply Now</button>
            </div>
            <div className="bg-[#201f1f] p-12 border border-[#4e4639]/20 flex flex-col">
              <h4 className="uppercase tracking-widest text-xs mb-4 text-[#9a8f80]">Premium</h4>
              <div className="font-['Epilogue',sans-serif] text-4xl font-bold mb-2">₹32,000</div>
              <p className="text-xs text-[#9a8f80] mb-8 uppercase tracking-widest">Per Person</p>
              <ul className="space-y-3 mb-12 text-sm text-[#D1C5B4] font-light flex-grow">
                <li>✓ Everything in Standard</li>
                <li>✓ Private Suite Upgrade</li>
                <li>✓ Airport Transfers</li>
                <li>✓ Priority Future Cohorts</li>
              </ul>
              <button className="w-full py-4 border border-[#9a8f80] text-[#E5E2E1] hover:bg-[#E5E2E1] hover:text-[#131313] transition-colors text-sm uppercase tracking-widest">Apply</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 bg-[#0e0e0e] text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(233,193,118,0.08),transparent_60%)]" />
        <div className="relative z-10 max-w-3xl mx-auto px-12">
          <h2 className="font-['Epilogue',sans-serif] text-4xl md:text-5xl font-bold mb-8 leading-tight">Ready for the Sprint?</h2>
          <p className="text-[#D1C5B4] mb-12 font-light text-lg">Your breakthrough isn't in a boardroom. It's in the rapids of the Ganga.</p>
          <button className="bg-gradient-to-br from-[#E9C176] to-[#C5A059] text-[#412d00] font-['Epilogue',sans-serif] font-bold py-6 px-16 text-xl hover:scale-105 transition-all">Request Booking Details</button>
          <div className="flex items-center justify-center gap-4 mt-6 text-xs uppercase tracking-[0.3em] text-[#9a8f80]">
            <span>Limited to 15 people</span>
            <span className="h-1 w-1 rounded-full bg-[#E9C176]" />
            <span>Spots filling fast</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full py-16 px-12 bg-[#0E0E0E] border-t border-[#4E4639]/15">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-7xl mx-auto">
          <div className="text-lg font-bold text-[#E5E2E1]">Aetheris Expeditions</div>
          <div className="text-xs text-[#E5E2E1]/50">© 2026 Aetheris Global Expeditions. All rights reserved.</div>
        </div>
      </footer>

    </div>
  );
}
