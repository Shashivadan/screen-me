import React, { useEffect, useRef, useState } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import '../landing.css'

export function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()
  const scrollRef = useRef<LocomotiveScroll | null>(null)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50)
  })

  useEffect(() => {
    if (!scrollRef.current) {
      scrollRef.current = new LocomotiveScroll({
        lenisOptions: {
          wrapper: window,
          content: document.documentElement,
          lerp: 0.1,
          duration: 1.2,
          orientation: 'vertical',
          gestureOrientation: 'vertical',
          smoothWheel: true,
          wheelMultiplier: 1,
          touchMultiplier: 2,
        },
      })
    }

    return () => {
      if (scrollRef.current) {
        scrollRef.current.destroy()
        scrollRef.current = null
      }
    }
  }, [])

  return (
    <div className="bg-background-dark text-white font-sans selection:bg-primary selection:text-white antialiased min-h-screen">
      <div className="fixed top-6 left-0 right-0 z-50 px-6 flex justify-center">
        <motion.div
          initial={{
            maxWidth: '72rem',
            borderRadius: '0px',
            backgroundColor: 'rgba(0,0,0,0)',
            borderColor: 'transparent',
            backdropFilter: 'blur(0px) saturate(100%)',
          }}
          animate={{
            maxWidth: isScrolled ? '70rem' : '72rem',
            borderRadius: isScrolled ? '24px' : '12px',
            y: isScrolled ? 0 : 0,
            borderWidth: '1px',
            borderColor: isScrolled ? 'rgba(255,255,255,0.12)' : 'transparent',
            backgroundColor: isScrolled
              ? 'rgba(15, 15, 15, 0.4)'
              : 'rgba(0, 0, 0, 0)',
            backdropFilter: isScrolled
              ? 'blur(20px) saturate(180%)'
              : 'blur(0px) saturate(100%)',
          }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className={`w-full flex items-center justify-between px-8 py-3.5 transition-shadow duration-500 ${
            isScrolled ? 'shadow-[0_8px_32px_rgba(0,0,0,0.4)]' : ''
          }`}
        >
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-600/30">
              <span className="material-symbols-outlined text-white font-bold text-[22px]">
                movie_filter
              </span>
            </div>
            <span className="font-display font-extrabold text-lg tracking-wider uppercase whitespace-nowrap">
              SCREEN PRO
            </span>
          </div>
          <div className="hidden md:flex items-center gap-10 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70 mx-8">
            <a
              className="hover:text-primary transition-colors flex items-center gap-1 whitespace-nowrap"
              href="#"
            >
              Product{' '}
              <span className="text-[9px] bg-white/10 px-1.5 py-0.5 rounded text-white/50">
                SOON
              </span>
            </a>
            <a
              className="hover:text-primary transition-colors flex items-center gap-1 whitespace-nowrap"
              href="#"
            >
              Workflow{' '}
              <span className="text-[9px] bg-white/10 px-1.5 py-0.5 rounded text-white/50">
                SOON
              </span>
            </a>
            <a
              className="hover:text-primary transition-colors flex items-center gap-1 whitespace-nowrap"
              href="#"
            >
              Pricing{' '}
              <span className="text-[9px] bg-white/10 px-1.5 py-0.5 rounded text-white/50">
                SOON
              </span>
            </a>
            <a
              className="hover:text-primary transition-colors flex items-center gap-1 whitespace-nowrap"
              href="#"
            >
              Enterprise{' '}
              <span className="text-[9px] bg-white/10 px-1.5 py-0.5 rounded text-white/50">
                SOON
              </span>
            </a>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden lg:block h-5 w-[1px] bg-white/10"></div>
            <button className="shimmer-btn text-white font-bold px-7 py-2.5 rounded-btn text-[10px] uppercase tracking-widest hover:brightness-110 shadow-lg shadow-primary/20 cursor-pointer flex items-center gap-2 whitespace-nowrap">
              Try for Free{' '}
              <span className="text-[9px] bg-black/20 px-1.5 py-0.5 rounded text-white/80">
                SOON
              </span>
            </button>
          </div>
        </motion.div>
      </div>

      <main className="relative min-h-screen pt-52 pb-32 overflow-hidden blueprint-bg">
        <div className="absolute inset-0 z-0 hero-gradient"></div>
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div
            className="absolute top-[15%] left-[10%] blur-[2px] animate-pulse"
            data-scroll
            data-scroll-speed="-0.2"
          >
            <span className="material-symbols-outlined text-primary/40 text-4xl">
              magic_button
            </span>
          </div>
          <div
            className="absolute top-[25%] right-[15%] blur-[4px]"
            data-scroll
            data-scroll-speed="0.3"
          >
            <span className="material-symbols-outlined text-accent/30 text-6xl">
              videocam
            </span>
          </div>
          <div
            className="absolute bottom-[20%] left-[20%] blur-[3px]"
            data-scroll
            data-scroll-speed="-0.1"
          >
            <span className="material-symbols-outlined text-primary/30 text-5xl">
              auto_fix_high
            </span>
          </div>
          <div
            className="absolute bottom-[40%] right-[10%] blur-[2px]"
            data-scroll
            data-scroll-speed="0.2"
          >
            <span className="material-symbols-outlined text-accent/40 text-4xl">
              play_circle
            </span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full premium-glass border-primary/30 text-primary text-[11px] font-extrabold tracking-[0.2em] uppercase mb-10 shadow-2xl">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-ping"></span>
            AI-Native Video Engine
          </div>
          <h1
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-8 max-w-5xl leading-[1.1] tracking-tight"
            data-scroll
            data-scroll-speed="0.1"
          >
            Edit with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/60">
              Intelligence
            </span>
            , not <span className="text-primary italic">Effort</span>.
          </h1>
          <p
            className="text-white/50 text-lg md:text-xl max-w-2xl mb-12 font-light leading-relaxed"
            data-scroll
            data-scroll-speed="0.1"
            data-scroll-delay="0.1"
          >
            The world's first cinematic AI editor. Transform raw screen captures
            into professional content using natural language commands.
          </p>
          <div className="flex flex-col items-center gap-12 mb-24">
            <button className="glass-cta group flex items-center gap-3 px-8 py-3.5 rounded-full text-sm font-bold tracking-wide text-white cursor-pointer">
              <span>Start Creating Free (Coming Soon)</span>
              <span className="material-symbols-outlined text-[20px] text-primary group-hover:translate-x-1 transition-transform">
                play_circle
              </span>
            </button>
          </div>

          <div
            className="w-full max-w-5xl relative mt-16 px-4"
            data-scroll
            data-scroll-speed="0.2"
          >
            <div className="mockup-glass rounded-t-2xl p-4 md:p-6 pb-0 overflow-hidden soft-glow-container">
              <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-white/10"></div>
                  <div className="w-3 h-3 rounded-full bg-white/10"></div>
                  <div className="w-3 h-3 rounded-full bg-white/10"></div>
                </div>
                <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] text-white/50 font-mono flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-[14px]">
                    lock
                  </span>
                  screen-pro.ai/project_042
                </div>
                <div className="w-12"></div>
              </div>
              <div className="flex flex-col gap-6">
                <div className="grid grid-cols-12 gap-6">
                  <div className="col-span-8 aspect-video rounded-xl bg-black/40 border border-white/10 flex items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
                    <span className="material-symbols-outlined text-white/20 text-6xl group-hover:scale-110 group-hover:text-primary/40 transition-all duration-500">
                      play_circle
                    </span>
                  </div>
                  <div className="col-span-4 flex flex-col gap-4">
                    <div className="h-full rounded-xl bg-white/5 border border-white/5 p-4">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-bold text-white/60 uppercase tracking-widest">
                          Assets
                        </span>
                        <span className="material-symbols-outlined text-sm text-white/30 cursor-pointer hover:text-primary">
                          add_box
                        </span>
                      </div>
                      <div className="space-y-3">
                        <div className="h-10 w-full bg-white/5 rounded-lg border border-white/5"></div>
                        <div className="h-10 w-full bg-white/5 rounded-lg border border-white/5"></div>
                        <div className="h-10 w-full bg-white/5 rounded-lg border border-white/5 opacity-40"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-6 pb-20">
                  <div className="w-full h-28 bg-black/40 rounded-xl border border-white/10 p-4 relative backdrop-blur-sm">
                    <div className="flex items-center gap-2 h-full">
                      <div className="w-24 h-12 bg-primary/20 rounded-lg border border-primary/40 flex items-center justify-center">
                        <span className="text-[8px] font-bold text-primary tracking-widest">
                          00:00:12
                        </span>
                      </div>
                      <div className="w-48 h-12 bg-accent/20 rounded-lg border border-accent/40"></div>
                      <div className="w-32 h-12 bg-white/5 rounded-lg border border-white/10"></div>
                      <div className="flex-1 h-12 bg-primary/10 rounded-lg border border-primary/20"></div>
                    </div>
                    <div className="absolute top-0 bottom-0 left-[220px] w-[2px] bg-primary shadow-[0_0_20px_rgba(168,85,247,0.8)] z-20">
                      <div className="w-3 h-3 bg-primary rounded-full absolute -top-1.5 -left-[5px] ring-4 ring-primary/20"></div>
                    </div>
                  </div>
                  <div className="max-w-2xl mx-auto flex items-center gap-4 bg-white/5 backdrop-blur-2xl border border-white/20 rounded-full p-2 pl-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                    <span className="material-symbols-outlined text-primary text-xl">
                      auto_fix_high
                    </span>
                    <input
                      className="bg-transparent border-none focus:ring-0 text-sm w-full placeholder:text-white/30 text-white outline-none"
                      placeholder="Type a command (e.g., 'Add a smooth pan to the logo')"
                      type="text"
                    />
                    <button className="shimmer-btn px-6 py-3 rounded-full text-[11px] font-bold uppercase tracking-widest cursor-pointer">
                      Generate
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 blur-[120px] -z-10 rounded-full"></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-48 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div
              className="group relative rounded-[32px] p-2 bg-white/5 border border-white/5 hover:border-blue-500/30 transition-all duration-500"
              data-scroll
              data-scroll-speed="0.1"
            >
              <div className="relative h-full w-full rounded-[24px] bg-charcoal border border-white/5 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Visual Area */}
                <div className="relative h-64 flex items-center justify-center overflow-hidden">
                  {/* Background Grid Effect */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        'radial-gradient(circle at center, #3b82f6 1px, transparent 1px)',
                      backgroundSize: '24px 24px',
                      maskImage:
                        'radial-gradient(circle at center, black 0%, transparent 70%)',
                    }}
                  ></div>

                  {/* Central Glowing Element */}
                  <div className="relative z-10 w-24 h-24 rounded-full bg-gradient-to-b from-blue-400/10 to-blue-600/10 border border-blue-400/20 flex items-center justify-center backdrop-blur-sm shadow-[0_0_60px_-10px_rgba(59,130,246,0.3)] group-hover:scale-110 transition-transform duration-500">
                    <div className="absolute inset-0 rounded-full border border-blue-400/20 animate-[spin_10s_linear_infinite] border-t-blue-400/50 border-r-transparent border-b-transparent border-l-transparent"></div>
                    <span className="material-symbols-outlined text-4xl text-blue-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                      stylus_note
                    </span>
                  </div>

                  {/* Orbiting elements */}
                  <div className="absolute w-40 h-40 rounded-full border border-white/5 animate-[spin_20s_linear_infinite_reverse]"></div>
                  <div className="absolute w-56 h-56 rounded-full border border-white/5 animate-[pulse_4s_ease-in-out_infinite]"></div>
                </div>

                {/* Content Area */}
                <div className="px-8 pb-10 relative z-10">
                  <h3 className="text-xl font-display font-semibold text-white mb-3">
                    Contextual Prompts
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-8 h-20">
                    Describe high-level cinematic intent. Our AI understands
                    video grammar, focal points, and pacing instinctively to
                    match your vision.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-blue-400 text-sm font-medium hover:gap-3 transition-all"
                  >
                    Read about prompts{' '}
                    <span className="material-symbols-outlined text-base">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="group relative rounded-[32px] p-2 bg-white/5 border border-white/5 hover:border-blue-500/30 transition-all duration-500 md:-translate-y-8"
              data-scroll
              data-scroll-speed="0.2"
            >
              <div className="relative h-full w-full rounded-[24px] bg-charcoal border border-white/5 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative h-64 flex items-center justify-center overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        'radial-gradient(circle at center, #3b82f6 1px, transparent 1px)',
                      backgroundSize: '24px 24px',
                      maskImage:
                        'radial-gradient(circle at center, black 0%, transparent 70%)',
                    }}
                  ></div>

                  <div className="relative z-10 w-24 h-24 rounded-full bg-gradient-to-b from-blue-400/10 to-blue-600/10 border border-blue-400/20 flex items-center justify-center backdrop-blur-sm shadow-[0_0_60px_-10px_rgba(59,130,246,0.3)] group-hover:scale-110 transition-transform duration-500">
                    <div className="absolute inset-0 rounded-full border border-blue-400/20 animate-[spin_8s_linear_infinite] border-t-transparent border-r-blue-400/50 border-b-transparent border-l-border-blue-400/50"></div>
                    <span className="material-symbols-outlined text-4xl text-blue-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                      center_focus_strong
                    </span>
                  </div>

                  <div className="absolute w-40 h-40 rounded-full border border-white/5 animate-[spin_15s_linear_infinite]"></div>
                  <div className="absolute w-56 h-56 rounded-full border border-white/5 opacity-50"></div>
                </div>

                <div className="px-8 pb-10 relative z-10">
                  <h3 className="text-xl font-display font-semibold text-white mb-3">
                    Smart Tracking
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-8 h-20">
                    Intelligent gaze and cursor tracking ensures the most
                    important parts of your screen are always in clear focus
                    without manual keyframing.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-blue-400 text-sm font-medium hover:gap-3 transition-all"
                  >
                    Explore tracking{' '}
                    <span className="material-symbols-outlined text-base">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="group relative rounded-[32px] p-2 bg-white/5 border border-white/5 hover:border-blue-500/30 transition-all duration-500"
              data-scroll
              data-scroll-speed="0.1"
              data-scroll-delay="0.1"
            >
              <div className="relative h-full w-full rounded-[24px] bg-charcoal border border-white/5 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative h-64 flex items-center justify-center overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        'radial-gradient(circle at center, #3b82f6 1px, transparent 1px)',
                      backgroundSize: '24px 24px',
                      maskImage:
                        'radial-gradient(circle at center, black 0%, transparent 70%)',
                    }}
                  ></div>

                  <div className="relative z-10 w-24 h-24 rounded-full bg-gradient-to-b from-blue-400/10 to-blue-600/10 border border-blue-400/20 flex items-center justify-center backdrop-blur-sm shadow-[0_0_60px_-10px_rgba(59,130,246,0.3)] group-hover:scale-110 transition-transform duration-500">
                    <div className="absolute inset-0 rounded-full border border-blue-400/20 animate-[pulse_2s_ease-in-out_infinite]"></div>
                    <span className="material-symbols-outlined text-4xl text-blue-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                      bolt
                    </span>
                  </div>

                  <div className="absolute w-40 h-40 rounded-full border border-white/5"></div>
                  <div className="absolute w-56 h-56 rounded-full border border-white/5 animate-[spin_30s_linear_infinite]"></div>
                </div>

                <div className="px-8 pb-10 relative z-10">
                  <h3 className="text-xl font-display font-semibold text-white mb-3">
                    Instant Export
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-8 h-20">
                    Built for the modern web. Cloud-render 4K 60fps projects in
                    seconds using our proprietary distributed GPU farm
                    architecture.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-blue-400 text-sm font-medium hover:gap-3 transition-all"
                  >
                    View benchmarks{' '}
                    <span className="material-symbols-outlined text-base">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 pb-32 relative z-10">
          <div
            className="w-full bg-primary rounded-3xl p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-primary/20"
            data-scroll
            data-scroll-speed="0.1"
          >
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-black/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

            <h2 className="text-3xl md:text-5xl font-display font-medium text-white mb-6 relative z-10">
              Ready to get started?
            </h2>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light relative z-10">
              Join Screen Pro today and start creating cinematic videos with AI
              or integrate our API into your workflow.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <button className="bg-white text-primary px-8 py-3.5 rounded-btn text-sm font-bold hover:bg-gray-50 transition-colors shadow-lg shadow-black/10 cursor-pointer flex items-center gap-2 group">
                Start Creating (Coming Soon)
                <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>
              <button className="bg-white/10 border border-white/20 text-white px-8 py-3.5 rounded-btn text-sm font-bold hover:bg-white/20 transition-colors cursor-pointer">
                View Pricing (Coming Soon)
              </button>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-24 border-t border-white/5 bg-charcoal relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
            <div className="col-span-1">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-[18px]">
                    movie_filter
                  </span>
                </div>
                <span className="font-display font-bold text-lg tracking-wide uppercase">
                  SCREEN PRO
                </span>
              </div>
              <p className="text-white/30 text-sm leading-relaxed max-w-xs">
                Defining the next generation of creative tools with ethical AI
                at the core of every frame.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <span className="text-[11px] font-bold text-white/70 uppercase tracking-widest">
                Platform
              </span>
              <a
                className="text-sm text-white/40 hover:text-primary transition-colors"
                href="#"
              >
                Download App (Soon)
              </a>
              <a
                className="text-sm text-white/40 hover:text-primary transition-colors"
                href="#"
              >
                Web Editor (Soon)
              </a>
              <a
                className="text-sm text-white/40 hover:text-primary transition-colors"
                href="#"
              >
                Chrome Extension (Soon)
              </a>
            </div>
            <div className="flex flex-col gap-5">
              <span className="text-[11px] font-bold text-white/70 uppercase tracking-widest">
                Resources
              </span>
              <a
                className="text-sm text-white/40 hover:text-primary transition-colors"
                href="#"
              >
                Documentation (Soon)
              </a>
              <a
                className="text-sm text-white/40 hover:text-primary transition-colors"
                href="#"
              >
                API Reference (Soon)
              </a>
              <a
                className="text-sm text-white/40 hover:text-primary transition-colors"
                href="#"
              >
                Community (Soon)
              </a>
            </div>
            <div className="flex flex-col gap-5">
              <span className="text-[11px] font-bold text-white/70 uppercase tracking-widest">
                Connect
              </span>
              <a
                className="text-sm text-white/40 hover:text-primary transition-colors"
                href="#"
              >
                Twitter (X) (Soon)
              </a>
              <a
                className="text-sm text-white/40 hover:text-primary transition-colors"
                href="#"
              >
                Discord Server (Soon)
              </a>
              <a
                className="text-sm text-white/40 hover:text-primary transition-colors"
                href="#"
              >
                LinkedIn (Soon)
              </a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-8">
            <div className="flex items-center gap-6 text-white/20">
              <span className="text-[10px] font-mono tracking-widest uppercase">
                © 2024 SCREEN PRO LABS INC.
              </span>
            </div>
            <div className="flex items-center gap-8 opacity-40">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">
                  shield_with_heart
                </span>
                <span className="text-[10px] font-mono uppercase tracking-tighter">
                  Safe & Encrypted
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">
                  public
                </span>
                <span className="text-[10px] font-mono uppercase tracking-tighter">
                  Global Delivery
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
