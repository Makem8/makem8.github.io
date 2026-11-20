import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight, Sparkles, Coffee, Linkedin, BookOpen, Calendar, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import profileImg from "../assets/ChatGPT Image Feb 27, 2026, 01_45_42 PM.png";
import cafeHeritageImg from "../assets/2024-07-13.webp";
import socialUxThumbnailImg from "../assets/images/social_ux_thumbnail_1795210480946.jpg";
import { assetUrl } from "../lib/assets";

type Category = "all" | "research" | "prototyping" | "engineering";

export default function Home() {
  const [filter, setFilter] = useState<Category>("all");

  const show = (cats: Category[]) => filter === "all" || cats.includes(filter);

  return (
    <div className="pt-32 pb-16">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-28 relative">
        {/* Playful background blobs */}
        <div className="absolute top-0 right-10 w-64 h-64 bg-brand-yellow/20 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-10 w-48 h-48 bg-brand-blue/10 rounded-full blur-3xl -z-10" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-8 mb-8">
            <div className="relative group w-fit">
              <div className="absolute inset-0 bg-brand-orange rounded-full rotate-6 group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute inset-0 bg-brand-blue rounded-full -rotate-6 group-hover:-rotate-12 transition-transform duration-300" />
              <img
                src={profileImg}
                alt="Markus"
                referrerPolicy="no-referrer"
                className="relative w-32 h-32 rounded-full object-cover shadow-lg border-4 border-white transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-2 rounded-full shadow-md border border-black/5 rotate-12 group-hover:rotate-0 transition-transform">
                <Coffee className="w-5 h-5 text-brand-orange" />
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 text-sm font-bold text-black/60 mb-3">
                <Sparkles className="w-4 h-4 text-brand-orange" />
                <span>Available for internships · Aalto University</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
                Hi, I'm Markus.
              </h1>
            </div>
          </div>
          <p className="text-xl text-black/70 leading-relaxed mb-10 max-w-2xl font-medium">
            I'm a student at Aalto University specializing in <span className="text-brand-orange font-bold">Human-Computer Interaction</span> and software development. I'm passionate about building intuitive, user-centered applications: whether that involves evaluating university tools, building augmented reality concepts, or prototyping interactive interfaces.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <button
              type="button"
              onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-brand-dark text-white px-8 py-4 rounded-full font-bold hover:bg-brand-orange hover:-translate-y-1 transition-all shadow-lg hover:shadow-brand-orange/25 flex items-center gap-2 cursor-pointer whitespace-nowrap"
            >
              View Work <ArrowRight className="w-5 h-5" />
            </button>
            <a
              href="mailto:markusosyrjala@gmail.com"
              className="bg-white border-2 border-black/10 text-brand-dark px-8 py-4 rounded-full font-bold hover:border-brand-blue hover:text-brand-blue hover:-translate-y-1 transition-all shadow-sm whitespace-nowrap"
            >
              Get in touch
            </a>
            <a
              href="https://www.linkedin.com/in/markussyrjala/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0A66C2] text-white p-4 rounded-full font-bold hover:-translate-y-1 transition-all shadow-lg hover:shadow-[#0A66C2]/25 flex items-center justify-center"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5 fill-current" />
            </a>
            <span className="hidden md:inline-block ml-4 font-handwriting text-2xl text-black/40 -rotate-6">
              Let's build something cool!
            </span>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="work" className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-4xl font-bold tracking-tight mb-2">Selected Work</h2>
            <p className="text-black/55 font-medium">
              HCI research, interactive prototypes, usability evaluations, and software builds.
            </p>
          </div>

          {/* Interactive Category Filter */}
          <div className="inline-flex flex-wrap items-center gap-1 p-1 bg-black/5 rounded-xl self-start md:self-auto">
            {(
              [
                { id: "all", label: "All (8)" },
                { id: "research", label: "Research & Evaluation" },
                { id: "prototyping", label: "Prototyping & UI" },
                { id: "engineering", label: "AR & Engineering" },
              ] as { id: Category; label: string }[]
            ).map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setFilter(tab.id)}
                className={`px-3.5 py-2 text-xs font-bold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  filter === tab.id
                    ? "bg-white text-brand-dark shadow-sm"
                    : "text-black/55 hover:text-brand-dark"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Views of Harald (New) */}
          {show(["engineering", "prototyping"]) && (
            <Link to="/project/views-of-harald" className="group block">
              <div className="bg-white rounded-[2rem] p-3 border border-black/8 hover:border-emerald-600/40 transition-all duration-300 h-full flex flex-col hover:-translate-y-1.5 hover:shadow-xl hover:shadow-emerald-600/10">
                <div className="bg-brand-dark rounded-3xl aspect-[4/3] overflow-hidden relative mb-6 flex items-center justify-center group-hover:scale-[0.98] transition-transform duration-300">
                  <video
                    src={`${assetUrl("/assets/aistudio/Views_of_harald_video_50ad945c.mp4")}#t=3`}
                    muted
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/15 group-hover:from-black/80 transition-colors duration-300 z-0" />
                  <div className="relative z-10 text-center px-6 transform group-hover:scale-105 transition-transform duration-500">
                    <h3 className="font-display font-bold text-4xl md:text-5xl tracking-tighter text-white mb-2 drop-shadow-lg">
                      Views of Harald
                    </h3>
                    <p className="font-mono text-xs tracking-widest text-emerald-200 uppercase drop-shadow-md">
                      AR Seasonal Windows
                    </p>
                  </div>
                  <div className="absolute top-4 right-4 w-11 h-11 bg-white rounded-full flex items-center justify-center transform translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-lg z-10">
                    <ArrowUpRight className="w-5 h-5 text-emerald-700" />
                  </div>
                </div>
                <div className="px-5 pb-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-emerald-700 transition-colors">
                      Views of Harald: AR Window Views
                    </h3>
                    <p className="text-black/60 mb-5 font-medium leading-relaxed">
                      Passthrough augmented reality prototype for Meta Quest 3 that turns winter window views into customizable seasons with spatial audio.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-black/45">
                    <span className="text-emerald-700">Unity & Quest 3</span>
                    <span aria-hidden="true">·</span>
                    <span>Augmented Reality</span>
                    <span aria-hidden="true">·</span>
                    <span>Video Demo</span>
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Etosha National Park App (New) */}
          {show(["engineering", "prototyping"]) && (
            <Link to="/project/etosha-app" className="group block">
              <div className="bg-white rounded-[2rem] p-3 border border-black/8 hover:border-[#8C1D18]/40 transition-all duration-300 h-full flex flex-col hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#8C1D18]/10">
                <div className="bg-[#231917] rounded-3xl aspect-[4/3] overflow-hidden relative mb-6 flex items-center justify-center group-hover:scale-[0.98] transition-transform duration-300">
                  <video
                    src={`${assetUrl("/assets/aistudio/Etosha_App_Demo_e572e9aa.mp4")}#t=42`}
                    muted
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 w-full h-full object-cover z-0 opacity-75"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2B0A08]/85 via-black/40 to-black/20 group-hover:from-[#2B0A08]/90 transition-colors duration-300 z-0" />
                  <div className="relative z-10 text-center px-6 transform group-hover:scale-105 transition-transform duration-500">
                    <h3 className="font-display font-bold text-4xl md:text-5xl tracking-tighter text-white mb-2 drop-shadow-lg">
                      Etosha Park
                    </h3>
                    <p className="font-mono text-xs tracking-widest text-amber-200 uppercase drop-shadow-md">
                      Guide & Anti-Poaching App
                    </p>
                  </div>
                  <div className="absolute top-4 right-4 w-11 h-11 bg-white rounded-full flex items-center justify-center transform translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-lg z-10">
                    <ArrowUpRight className="w-5 h-5 text-[#8C1D18]" />
                  </div>
                </div>
                <div className="px-5 pb-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-[#8C1D18] transition-colors">
                      Etosha National Park App
                    </h3>
                    <p className="text-black/60 mb-5 font-medium leading-relaxed">
                      Dual-purpose Vue & Spring Boot mobile web app pairing a visitor park guide with anonymous rhino poaching reporting and ranger triage.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-black/45">
                    <span className="text-[#8C1D18]">Vue & Spring Boot</span>
                    <span aria-hidden="true">·</span>
                    <span>UI Construction</span>
                    <span aria-hidden="true">·</span>
                    <span>Video Demo</span>
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* MyCourses Calendar Evaluation (New) */}
          {show(["research"]) && (
            <Link to="/project/mycourses-calendar" className="group block">
              <div className="bg-white rounded-[2rem] p-3 border border-black/8 hover:border-teal-700/40 transition-all duration-300 h-full flex flex-col hover:-translate-y-1.5 hover:shadow-xl hover:shadow-teal-700/10">
                <div className="bg-gradient-to-br from-[#0D5C5C] via-[#0F766E] to-[#134E4A] rounded-3xl aspect-[4/3] overflow-hidden relative mb-6 flex flex-col justify-between p-7 group-hover:scale-[0.98] transition-transform duration-300">
                  <div className="flex items-center justify-between text-white/80">
                    <Calendar className="w-7 h-7" />
                    <span className="font-mono text-xs tracking-widest uppercase">CS-E5230 Study</span>
                  </div>
                  <div className="my-auto text-center">
                    <h3 className="font-display font-bold text-4xl md:text-5xl tracking-tighter text-white mb-2">
                      MyCourses
                    </h3>
                    <p className="font-mono text-xs tracking-widest text-teal-100 uppercase">
                      Calendar Usability Evaluation
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/15 text-center text-white">
                    <div>
                      <div className="text-lg font-bold font-display tabular-nums">57.8</div>
                      <div className="text-[11px] text-white/70">SUS Score</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold font-display tabular-nums">52</div>
                      <div className="text-[11px] text-white/70">Issues Found</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold font-display tabular-nums">87%</div>
                      <div className="text-[11px] text-white/70">Completion</div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 w-11 h-11 bg-white rounded-full flex items-center justify-center transform translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-lg z-10">
                    <ArrowUpRight className="w-5 h-5 text-teal-700" />
                  </div>
                </div>
                <div className="px-5 pb-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-teal-700 transition-colors">
                      MyCourses Calendar Evaluation
                    </h3>
                    <p className="text-black/60 mb-5 font-medium leading-relaxed">
                      Heuristic evaluation and think-aloud user testing of Aalto's course calendar, leading to concrete modal and export redesigns.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-black/45">
                    <span className="text-teal-700">Usability Testing</span>
                    <span aria-hidden="true">·</span>
                    <span>Heuristics</span>
                    <span aria-hidden="true">·</span>
                    <span>Redesign</span>
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Quiet Study Finder (Updated Existing) */}
          {show(["prototyping"]) && (
            <Link to="/project/quiet-study-finder" className="group block">
              <div className="bg-white rounded-[2rem] p-3 border border-black/8 hover:border-[#7B3F9E]/40 transition-all duration-300 h-full flex flex-col hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#7B3F9E]/10">
                <div className="bg-[#23142E] rounded-3xl aspect-[4/3] overflow-hidden relative mb-6 flex items-center justify-center group-hover:scale-[0.98] transition-transform duration-300">
                  <video
                    src={`${assetUrl("/assets/aistudio/Quiet_study_recording_68ef9acf.mp4")}#t=2`}
                    muted
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2A103D]/85 via-[#7B3F9E]/35 to-black/25 group-hover:from-[#2A103D]/90 transition-colors duration-300 z-0" />
                  <div className="relative z-10 text-center px-6 transform group-hover:scale-105 transition-transform duration-500">
                    <h3 className="font-display font-bold text-4xl md:text-5xl tracking-tighter text-white mb-2 drop-shadow-lg">
                      Quiet Study
                    </h3>
                    <p className="font-mono text-xs tracking-widest text-purple-100 uppercase drop-shadow-md">
                      Aalto Space Noise Layer
                    </p>
                  </div>
                  <div className="absolute top-4 right-4 w-11 h-11 bg-white rounded-full flex items-center justify-center transform translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-lg z-10">
                    <ArrowUpRight className="w-5 h-5 text-[#7B3F9E]" />
                  </div>
                </div>
                <div className="px-5 pb-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-[#7B3F9E] transition-colors">
                      Quiet Study Finder
                    </h3>
                    <p className="text-black/60 mb-5 font-medium leading-relaxed">
                      A feature concept for Aalto Space visualizing live ambient noise levels and occupancy trends to help students find silent spots.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-black/45">
                    <span className="text-[#7B3F9E]">Figma Make</span>
                    <span aria-hidden="true">·</span>
                    <span>AI Prototyping</span>
                    <span aria-hidden="true">·</span>
                    <span>Video Demo</span>
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Aalto Space Interactive Booking Flows (New) */}
          {show(["prototyping"]) && (
            <Link to="/project/aalto-space-flows" className="group block">
              <div className="bg-white rounded-[2rem] p-3 border border-black/8 hover:border-[#7B3F9E]/40 transition-all duration-300 h-full flex flex-col hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#7B3F9E]/10">
                <div className="bg-[#291F38] rounded-3xl aspect-[4/3] overflow-hidden relative mb-6 flex items-center justify-center group-hover:scale-[0.98] transition-transform duration-300">
                  <video
                    src={`${assetUrl("/assets/aistudio/Interactive_flow_recording_-_booking_room_ff6acd11.mp4")}#t=10`}
                    muted
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 w-full h-full object-cover z-0 opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E142D]/85 via-black/35 to-black/20 group-hover:from-[#1E142D]/90 transition-colors duration-300 z-0" />
                  <div className="relative z-10 text-center px-6 transform group-hover:scale-105 transition-transform duration-500">
                    <h3 className="font-display font-bold text-4xl md:text-5xl tracking-tighter text-white mb-2 drop-shadow-lg">
                      Booking Flows
                    </h3>
                    <p className="font-mono text-xs tracking-widest text-purple-100 uppercase drop-shadow-md">
                      Aalto Space Figma Prototype
                    </p>
                  </div>
                  <div className="absolute top-4 right-4 w-11 h-11 bg-white rounded-full flex items-center justify-center transform translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-lg z-10">
                    <ArrowUpRight className="w-5 h-5 text-[#7B3F9E]" />
                  </div>
                </div>
                <div className="px-5 pb-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-[#7B3F9E] transition-colors">
                      Aalto Space Booking Flows
                    </h3>
                    <p className="text-black/60 mb-5 font-medium leading-relaxed">
                      Three animated Figma prototypes for room booking, cancellation, and screen-filtered search, iterated through peer critique.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-black/45">
                    <span className="text-[#7B3F9E]">Figma & Smart Animate</span>
                    <span aria-hidden="true">·</span>
                    <span>Interaction Design</span>
                    <span aria-hidden="true">·</span>
                    <span>Video Demo</span>
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Cafe Heritage (Existing) */}
          {show(["research"]) && (
            <Link to="/project/cafe-heritage" className="group block">
              <div className="bg-white rounded-[2rem] p-3 border border-black/8 hover:border-brand-orange/40 transition-all duration-300 h-full flex flex-col hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand-orange/10">
                <div className="bg-[#F4F1ED] rounded-3xl aspect-[4/3] overflow-hidden relative mb-6 flex items-center justify-center p-8 group-hover:scale-[0.98] transition-transform duration-300">
                  <img
                    src={cafeHeritageImg}
                    alt="Cafe Heritage"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/45 group-hover:bg-black/55 transition-colors duration-300 z-0" />
                  <div className="relative z-10 text-center transform group-hover:scale-105 transition-transform duration-500">
                    <h3 className="font-display font-bold text-4xl md:text-5xl tracking-tighter text-white mb-2 uppercase drop-shadow-lg">
                      Heritage
                    </h3>
                    <p className="font-mono text-xs tracking-widest text-brand-yellow uppercase drop-shadow-md">
                      Customer Scene Investigation
                    </p>
                  </div>
                  <div className="absolute top-4 right-4 w-11 h-11 bg-white rounded-full flex items-center justify-center transform translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-lg z-10">
                    <ArrowUpRight className="w-5 h-5 text-brand-orange" />
                  </div>
                </div>
                <div className="px-5 pb-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-brand-orange transition-colors">
                      Cafe Heritage
                    </h3>
                    <p className="text-black/60 mb-5 font-medium leading-relaxed">
                      Customer scene investigation combining interviews, ethnography, and visitor surveys for an art-focused coffee shop in Helsinki.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-black/45">
                    <span className="text-brand-orange">User Research</span>
                    <span aria-hidden="true">·</span>
                    <span>Ethnography</span>
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* AI-Driven UX Design (Existing) */}
          {show(["prototyping"]) && (
            <Link to="/project/ai-ux-design" className="group block">
              <div className="bg-white rounded-[2rem] p-3 border border-black/8 hover:border-brand-blue/40 transition-all duration-300 h-full flex flex-col hover:-translate-y-1.5 hover:shadow-xl hover:shadow-brand-blue/10">
                <div className="bg-[#0F2429] rounded-3xl aspect-[4/3] relative mb-6 flex flex-col justify-between p-7 overflow-hidden group-hover:scale-[0.98] transition-transform duration-300">
                  <img
                    src={assetUrl("/assets/aistudio/image_c9d677f5.png")}
                    alt="Scenic Norwegian fjord and alpine railway from the AI-Driven UX Design prototype"
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover object-right z-0 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#091820]/80 via-[#0B222C]/35 to-[#0A1929]/45 group-hover:from-[#091820]/85 transition-colors duration-300 z-0" />
                  <div className="relative z-10 flex items-center justify-between text-white/85">
                    <Leaf className="w-7 h-7 drop-shadow-sm" />
                    <span className="font-mono text-xs tracking-widest uppercase drop-shadow-sm">EcoJourney</span>
                  </div>
                  <div className="relative z-10 my-auto text-center transform group-hover:scale-105 transition-transform duration-500">
                    <h3 className="font-display font-bold text-4xl md:text-5xl tracking-tighter text-white mb-2 drop-shadow-lg">
                      AI + UX
                    </h3>
                    <p className="font-mono text-xs tracking-widest text-teal-100 uppercase drop-shadow-md">
                      Prototyping Study
                    </p>
                  </div>
                  <div className="relative z-10 text-xs font-mono text-white/80 text-center pt-4 border-t border-white/15">
                    Research · Wireframes · High-Fi Screens
                  </div>
                  <div className="absolute top-4 right-4 w-11 h-11 bg-white rounded-full flex items-center justify-center transform translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-lg z-10">
                    <ArrowUpRight className="w-5 h-5 text-brand-blue" />
                  </div>
                </div>
                <div className="px-5 pb-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-brand-blue transition-colors">
                      AI-Driven UX Design
                    </h3>
                    <p className="text-black/60 mb-5 font-medium leading-relaxed">
                      Exploring generative AI across research, wireframing, and UI production through a sustainable travel app concept.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-black/45">
                    <span className="text-brand-blue">AI Prototyping</span>
                    <span aria-hidden="true">·</span>
                    <span>GenAI Workflow</span>
                    <span aria-hidden="true">·</span>
                    <span>Video Demo</span>
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Academic Thesis (Existing) */}
          {show(["research"]) && (
            <Link to="/project/thesis" className="group block">
              <div className="bg-white rounded-[2rem] p-3 border border-black/8 hover:border-blue-600/40 transition-all duration-300 h-full flex flex-col hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blue-600/10">
                <div className="bg-[#081024] rounded-3xl aspect-[4/3] relative mb-6 flex flex-col justify-between p-7 overflow-hidden group-hover:scale-[0.98] transition-transform duration-300">
                  <img
                    src={socialUxThumbnailImg}
                    alt="Endless cascade of smoked-glass mobile screens representing social media UX"
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover z-0 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050B1C]/85 via-[#0A1633]/40 to-[#060E24]/50 group-hover:from-[#050B1C]/90 transition-colors duration-300 z-0" />
                  <div className="relative z-10 flex items-center justify-between text-white/85">
                    <BookOpen className="w-7 h-7 drop-shadow-sm" />
                    <span className="font-mono text-xs tracking-widest uppercase drop-shadow-sm">JYX Repository</span>
                  </div>
                  <div className="relative z-10 my-auto text-center transform group-hover:scale-105 transition-transform duration-500">
                    <h3 className="font-display font-bold text-4xl md:text-5xl tracking-tighter text-white mb-2 drop-shadow-lg">
                      UX in Social Media
                    </h3>
                    <p className="font-mono text-xs tracking-widest text-blue-100 uppercase drop-shadow-md">
                      Academic Thesis · TikTok
                    </p>
                  </div>
                  <div className="relative z-10 text-xs font-mono text-white/80 text-center pt-4 border-t border-white/15">
                    Cognitive Load · Engagement · Ethical UX
                  </div>
                  <div className="absolute top-4 right-4 w-11 h-11 bg-white rounded-full flex items-center justify-center transform translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-lg z-10">
                    <ArrowUpRight className="w-5 h-5 text-blue-600" />
                  </div>
                </div>
                <div className="px-5 pb-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                      The Role of UX Design in Social Media
                    </h3>
                    <p className="text-black/60 mb-5 font-medium leading-relaxed">
                      Case study thesis examining how TikTok's UX patterns lower cognitive effort to sustain engagement, alongside ethical design strategies.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-black/45">
                    <span className="text-blue-600">Academic Thesis</span>
                    <span aria-hidden="true">·</span>
                    <span>UX Research & Ethics</span>
                  </div>
                </div>
              </div>
            </Link>
          )}
        </div>
      </section>
    </div>
  );
}
