export default function InsideRetreat() {
  const sessions = [
    {
      num: "01",
      title: "Deep Work & Reflection",
      desc: "Uninterrupted sessions built to cut through noise and produce real, lasting clarity.",
      tag: "Core",
    },
    {
      num: "02",
      title: "Bottleneck Analysis",
      desc: "Pinpoint exactly what's blocking your growth — then build a plan to remove it.",
      tag: "Workshop",
    },
    {
      num: "03",
      title: "Meaningful Conversations",
      desc: "Small groups, real founders, real problems. No pitching. Just depth.",
      tag: "Community",
    },
    {
      num: "04",
      title: "Clarity & Execution Plan",
      desc: "Leave with a concrete 90-day plan — decisions made, actions defined, no vague goals.",
      tag: "Output",
    },
  ];

  const forList = [
    "First-time and early-stage founders",
    "Builders seeking clarity and direction",
    "Founders tired of shallow networking",
    "Serious individuals ready to grow",
  ];

  return (
    <div className="bg-[#050505] px-11 pt-20 pb-[100px] font-[family-name:var(--font-sans)] text-white ">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-24 grid grid-cols-2 items-end">
          <div>
            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.4em] text-white/[0.12] bg-clip-text text-transparent bg-gradient-to-r from-emerald-400/80 to-emerald-400/20">
              What happens inside
            </p>
            <h2 className="text-[64px] font-black leading-[0.9] tracking-[-0.04em] text-white/[0.9]">
              Inside
              <br />
              the <span className="text-emerald-400">/</span>
              <br />
              retreat.
            </h2>
          </div>
          <div className="pb-2 pl-10">
            <p className="border-l border-emerald-400 pl-5 text-md leading-[1.85] text-white/[0.5]">
              Four focused experiences. Zero filler. Designed for founders who
              need real momentum — not another conference badge.
            </p>
          </div>
        </div>

        {/* Sessions List */}
        <div className="mb-20 flex flex-col border-t border-white/[0.06]">
          {sessions.map((s) => (
            <div
              key={s.num}
              className="group grid grid-cols-[56px_1fr_1fr_100px] items-center border-b border-white/[0.06] py-8 transition-colors duration-200 hover:bg-white/[0.02]"
            >
              <span className="pr-4 text-xs font-bold tracking-[0.2em] text-white/[0.5]">
                {s.num}
              </span>
              <span className="pr-8 text-2xl font-extrabold tracking-[-0.025em] text-white/[0.85] transition-colors duration-200 group-hover:text-emerald-400">
                {s.title}
              </span>
              <span className="pr-6 text-sm leading-[1.7] text-white/[0.5]">
                {s.desc}
              </span>
              <div className="text-right">
                <span className="inline-block rounded-[2px] border border-emerald-400/20 px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-emerald-400/60">
                  {s.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Panels */}
        <div className="grid grid-cols-2 gap-[2px]">
          {/* Who this is for */}
          <div className="relative overflow-hidden bg-[#0d0d0d] p-12 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-emerald-400/80">
            <p className="mb-10 text-[11px] font-bold uppercase tracking-[0.35em] text-white/[0.12] bg-clip-text text-transparent bg-gradient-to-r from-emerald-400/80 to-emerald-400/20">
              Who this is for
            </p>
            {forList.map((text) => (
              <div
                key={text}
                className="flex items-center gap-4 border-b border-white/[0.04] py-4 last:border-b-0"
              >
                <span className="h-px w-4 shrink-0 bg-emerald-400/70" />
                <span className="text-[15px] tracking-[0.01em] text-white/[0.5]">
                  {text}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Panel */}
          <div className="relative flex flex-col justify-between overflow-hidden bg-emerald-400/90 p-12">
            <div className="absolute -right-10 -top-10 h-[140px] w-[140px] rounded-full border border-black/10" />
            <div className="absolute -right-2.5 -top-2.5 h-[70px] w-[70px] rounded-full border border-black/[0.12]" />
            <div>
              <p className="mb-8 text-[11px] font-bold uppercase tracking-[0.35em] text-white">
                A word on fit
              </p>
              <p className="text-4xl font-black leading-[1.05] tracking-[-0.03em] text-black/80">
                Not for passive
                <br />
                attendees.
              </p>
              <p className="mt-5 max-w-[280px] text-sm leading-[1.75] text-black/35">
                This demands presence and honesty. If you're here to collect
                cards and coast — this isn't for you.
              </p>
            </div>
            <div className="mt-10 flex items-center gap-3">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-black/70">
                Apply for a spot
              </span>
              <div className="flex h-8 w-8 items-center justify-center rounded-full border-[1.5px] border-black/20">
                <svg width="12" height="12" viewBox="0 0 10 10" fill="none">
                  <path
                    d="M2 8L8 2M8 2H3M8 2v5"
                    stroke="#000"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
