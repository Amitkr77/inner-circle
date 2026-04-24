import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Terminal, 
  User, 
  ArrowRight, 
  Clock, 
  Send
} from 'lucide-react';

const CATEGORIES = ['All', 'Engineering', 'Foundry', 'Product', 'Culture'];

const POSTS = [
  {
    id: 1,
    title: 'Optimizing CI/CD for Massive Monorepos.',
    description: 'How we reduced build times by 65% across 200+ internal packages using custom layer caching and selective orchestration.',
    category: 'Foundry',
    date: 'MAR 12, 2024',
    readTime: '8 MIN READ',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAs9VaSwmGCg-NDfxgqDXkv4fF_jg8B9sgWKeS5rDaxedpTn8L8mHqRCbcs4xolxdtP3A8DVAi-Cqwl0W0wg1l2osXgV3vHNw7PWBN7S0ei7VrRMadjUeWHMHVzJLuhNZn-tTtHGELsG7PBiGQhwCjXq-SpRSw8QiSIceOWM4X17sYRoW3hYFAzN9reHoXbJRTEymT3E-MA7x2rJl1l78TcXYXW-V7NpClu4fyo2J3BtFjxt08I0eSGyP6mezf278006_yFQdtAvu8'
  },
  {
    id: 2,
    title: 'The Psychology of Technical Friction.',
    description: 'Analyzing how micro-delays in developer tooling compound into major architectural debt over long-term project lifecycles.',
    category: 'Product',
    date: 'MAR 08, 2024',
    readTime: '5 MIN READ',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDYpUWASNh-SOh1R0XS7HHFaZpi-SSSjQA9OGoaGkLu--ZjwmhLgazu3IS5RbMmd4-aHliNhcX4591_VCdsaIQO7sskRKRj8OXOlsOoe138Jz9ccS_e4VN4JTJpicrm0_mT0MCHdWOfsOaCcsN64VRjlKugXJkZmVm5ESaN4QFmuBOtrxsq4r9MhdsLTLEI4hFfPFkBrSRMhhctS0MnFEugUMkCDXtjcfRfQxqvzKq8DrdZ_ofclWBMiL6xC5KhL4HB1OkMSixKa7M'
  },
  {
    id: 3,
    title: 'Remote First vs. Remote Only.',
    description: 'A strategic framework for building high-trust collaborative environments without a physical headquarters.',
    category: 'Culture',
    date: 'FEB 28, 2024',
    readTime: '15 MIN READ',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASbwAyvNnXaDLUhmFo3_t_IoN1b2YnErgxS_MXYXRWXZOTuriRTIysZ84Qxx6m14gNCACLdHzGKNyuTSi0edz92Ic_SXGpmcmZOQj6aQN6tOkYBjs_DjXqTsnbqW5qHTvJmxsQWGplEH9o7Thfb_WpIqNX3j50csMXutDNV2ckxORhgwYW2AIQgbMbG1XvMJSM0jlrdunVynMJ5kZZK1hqASplnKJ3D-EMyRnhcgs28w4wdKV6y8EZX7KJdJFjONuyfumo6dUBD7g'
  },
  {
    id: 4,
    title: 'Hardware Acceleration in Browser-Based IDEs.',
    description: 'Leveraging WebGPU for massive parallelization of code analysis and syntax highlighting in the browser.',
    category: 'Engineering',
    date: 'FEB 22, 2024',
    readTime: '6 MIN READ',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBMfCi6uVp5zp977aPzuz7vDNjNE9FwocLUpnoU-bIA-UKICSpVtKSlkyDxdsr57TyS1TgJAAqcQz1dPca0quKrpFIzM5qfvlIQVdsasxgtGrqoL_kN1856e7HY6N5ycKYf1PXZ0wSn9O-s-r8ou6SAzKJdG8NBA7drPID2lLL-PyMJD4zsAcQiv43CjhwsZWTqfz0KmJydD8z3Zrl9PZNgkKQZdEqLjcwbxswRh0yIAVQByGWf35q4AoHwg_Rm9FywOgEtaF8I80'
  },
  {
    id: 5,
    title: 'Securing the Collaborative Supply Chain.',
    description: 'Protecting real-time WebSocket streams from man-in-the-middle attacks using quantum-resistant encryption protocols.',
    category: 'Foundry',
    date: 'FEB 15, 2024',
    readTime: '10 MIN READ',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAA3VTpvaPyaaVVmrD6iywOjctZEomKXJvERJMj2uUtKQoVYGerrhSc7hgryXryZ3Dax6oMtD1ezgc7ecZWdtAR8Bov1zi1L8_op3yZkA5IQ46Q5IJ0ffXF0beJbgpNt-1Khw68Gok3jqv-JwIHcei2dXTqxPpLmdv1mbWyv3s8z2C7Rtr5R4rwMfvum1XOu6pygjq3AnBfP4nUNNp9IRwTreJHTOdlwIXIpcqLf5Hh-AwIdq28Nk1V3Yh6Gl7XDeFc9NSKWBegYnw'
  },
  {
    id: 6,
    title: 'Type Safety as a Team Multiplier.',
    description: 'How strictly typed contracts between microservices accelerate parallel development and reduce integration bugs.',
    category: 'Engineering',
    date: 'FEB 02, 2024',
    readTime: '7 MIN READ',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANC-xV9SGqqUM3j91pT6QvCOziovvXj_g4Y1d7angvryGtLWv0n-mZTAd9gloXPP6BQUGa5Sfya1AimU9zxPPEncSiwthpOU-64alR14Lkjas_PV4M1bzVoXkP0wU5xElCeLLz38hs2dgf3y7k33kyBzoESY0Lnv15xPAom-xY7-LvnzjW8ZY8aUiqeToqEI8AKi0irc_8vsdY8ZtnpSrAAZ4MoQfHybWAk3eXS5U_ZOGf3kj2CbNiNUoCrfYYbBG-42-9bD_M-xw'
  }
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = POSTS.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#131313] text-[#e2e2e2] font-sans selection:bg-primary-container selection:text-on-primary-container">
      {/* Top Navigation */}


      <main className=" mx-auto ">
        {/* Hero Section */}
        <div className=" relative h-[800px] w-full rounded-xl overflow-hidden group cursor-pointer border border-neutral-800/50">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzeJXe6QEh6ROsSXqUElaV2PLFdRI0NzPnhpX_q1GQOL1rTI9c7VKz0FeOXx3cTWeeAZpda5gveM-SVszOjmbv5oSlKOrGXKJqPVYWKLPbJYv4Ri4AAxdSqrnwFFgRYbnVV9xHdBD40fwnD0B5V_VgrhP5waDhg9XV02liFxjQ0qeJuuCyXkrRsLH5jgAV3retSzF-o2yFfMLzTA2fC7nDTOZuv2jsKvy-9eJI8BgX5MazC1BJk_uP8pKdzCD9C_NOkHlKDB2XLXQ" 
            alt="Hero"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          
          <div className="absolute bottom-0 left-0 p-12 lg:p-20 max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-primary-container/10 border border-primary-container text-primary-container text-[10px] font-bold px-3 py-1 rounded-sm uppercase tracking-widest">Engineering</span>
              <span className="text-neutral-400 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                <Clock className="w-3 h-3" /> 12 MIN READ
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl text-white font-bold mb-6 leading-tight">
              Architecting the Persistent Collaboration Engine.
            </h1>
            <p className="text-neutral-300 text-lg max-w-2xl mb-8 leading-relaxed">
              Deep dive into the distributed systems architecture powering real-time synchronization across global teams without latency trade-offs.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full border border-neutral-700 overflow-hidden">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPjUWPbxjzYKrSStJIXPMECamNnHmoE1HZ-fmtYittd109fceze4DgTjxIiT8kol4VL3G-ZAUUAJWQcZ7nSc5DCnjVtpgQ77gkNp1J7tmR3mfAjNdRFN6fBHJexn79-sDJaTUQZ4dyM2Zyk3j70bgn2vEpfJ3gmyezX-U_C5rpNk1jABM60DhSLIHxWWvSJy7gWiYaK-xUFF62-FurcRi6JzfYSguY9YYDbtl_AHYnDGAl4VH9EVReZJUcy0yH_KDOitUk4sSL9-U" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Marcus Thorne</p>
                <p className="text-neutral-500 text-[10px] font-bold uppercase tracking-widest">Principal Architect</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div>
            <h2 className="font-display text-3xl md:text-4xl text-white font-semibold tracking-tight">The Builder Journal</h2>
            <p className="text-neutral-500 mt-2">Latest insights from the forge of elite engineering.</p>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 text-[10px] font-bold uppercase tracking-widest rounded-sm border transition-all ${
                  activeCategory === cat 
                    ? 'bg-primary-container text-on-primary-container border-primary-container' 
                    : 'bg-neutral-900 text-neutral-400 border-neutral-800 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post) => (
              <motion.article 
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                key={post.id} 
                className="flex flex-col group"
              >
                <div className="aspect-video mb-6 overflow-hidden bg-surface-container rounded-sm border border-neutral-800 relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80"
                  />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-black/80 backdrop-blur-md text-primary-container text-[10px] font-bold px-2 py-1 uppercase tracking-tighter border border-primary-container/30">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 mb-3 text-neutral-500 text-[10px] font-bold uppercase tracking-widest">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 bg-neutral-700 rounded-full" />
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-white text-xl font-display font-semibold mb-4 group-hover:text-primary-container transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-neutral-400 text-sm line-clamp-3 mb-6 leading-relaxed">
                  {post.description}
                </p>
                
                <a href="#" className="mt-auto flex items-center gap-2 text-primary-container text-[10px] font-bold uppercase tracking-widest group/link">
                  Read Article
                  <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Newsletter Section */}
        <section className="mb-24 py-20 px-8 bg-surface-container border border-neutral-800 rounded-sm relative overflow-hidden backdrop-blur-sm">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary-container/5 blur-[120px] rounded-full" />
          <div className="max-w-2xl mx-auto text-center relative z-10">
            <h2 className="font-display text-3xl md:text-4xl text-white font-semibold mb-4 tracking-tight">Join the Network</h2>
            <p className="text-neutral-400 text-lg mb-10 leading-relaxed">
              Get architectural breakdowns, engineering deep-dives, and product updates delivered directly to your inbox. No fluff, just technical clarity.
            </p>
            <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                className="flex-1 bg-black border border-neutral-800 px-6 py-4 rounded-sm text-white placeholder:text-neutral-600 focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all outline-none" 
                placeholder="builder@company.com" 
                type="email"
              />
              <button className="bg-primary-container text-on-primary-container font-bold px-10 py-4 rounded-sm hover:opacity-90 transition-all uppercase tracking-widest text-[10px] flex items-center justify-center gap-2">
                Subscribe <Send className="w-3 h-3" />
              </button>
            </form>
            <p className="mt-6 text-neutral-600 text-[10px] font-bold uppercase tracking-widest">
              Exclusive to the CollaBuilder ecosystem. One email per week maximum.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}

    </div>
  );
}
