import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, VolumeX, Layers, Cpu } from "lucide-react";
import { Link } from "react-router-dom";
import quietStudyImg from "../assets/Screenshot 2026-04-07 224730.png";
import { assetUrl } from "../lib/assets";

const flowSteps = [
  { step: "01", title: "Open Campus Map", desc: "Start in the standard Aalto Space map view." },
  { step: "02", title: "Toggle Quiet Mode", desc: "Switch on the ambient noise layer in one tap." },
  { step: "03", title: "Scan Color-Coded Pins", desc: "Spaces update by live dB status (Silent, Moderate, Noisy)." },
  { step: "04", title: "Inspect Room Activity", desc: "Check current decibels, seat availability, and hourly trends." },
  { step: "05", title: "Book or Navigate", desc: "Confirm check-in with a silence reminder or launch maps." },
];

export default function QuietStudyFinder() {
  const videoSrc = assetUrl("/assets/aistudio/Quiet_study_recording_68ef9acf.mp4");

  return (
    <div className="pt-24 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-bold text-black/50 hover:text-[#7B3F9E] transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Work
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-black/50 mb-5">
            <span className="text-[#7B3F9E]">Feature Concept</span>
            <span aria-hidden="true">·</span>
            <span>Aalto Space App</span>
            <span aria-hidden="true">·</span>
            <span>AI-Assisted Prototyping</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 tracking-tighter text-balance">
            Quiet Study <span className="text-[#7B3F9E]">Finder</span>
          </h1>
          <p className="text-xl md:text-2xl text-black/60 font-medium leading-relaxed max-w-2xl mb-10">
            Adding a real-time ambient noise layer to Aalto Space so students can locate quiet study spots before walking across campus.
          </p>

          <div className="bg-[#7B3F9E]/6 border border-[#7B3F9E]/20 rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute -right-8 -top-8 text-[#7B3F9E]/10 pointer-events-none">
              <VolumeX className="w-40 h-40" />
            </div>
            <div className="relative z-10">
              <h2 className="text-xl font-bold mb-3 text-brand-dark">The Challenge</h2>
              <p className="text-lg text-black/75 leading-relaxed font-medium max-w-2xl">
                While Aalto Space handles basic room booking well, it gives no context about the current acoustic environment. Students often walk to a study room expecting silence only to find a noisy surrounding area.
              </p>
            </div>
          </div>
        </motion.div>

        {/* The Solution & User Story */}
        <section className="mb-20 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold mb-5">The Solution</h2>
            <p className="text-black/70 font-medium leading-relaxed mb-5">
              I designed a <strong>real-time noise layer</strong> integrated directly into the map and room detail screens. Powered by ambient room sensors, students can filter campus spaces into <em>Silent</em>, <em>Whisper</em>, or <em>Collaborative / Group Work</em> zones and inspect hourly decibel and occupancy trends before committing to a seat.
            </p>
            <p className="text-black/70 font-medium leading-relaxed">
              The concept directly targets <strong>Nielsen's #1 Heuristic (Visibility of System Status)</strong>—surfacing live environmental context up front to cut guesswork and wasted trips.
            </p>
          </div>
          <div className="bg-[#F4F1ED] p-8 rounded-3xl border border-black/5">
            <p className="text-xs font-bold text-[#7B3F9E] mb-3">User Story</p>
            <blockquote className="text-lg font-medium italic text-black/80 leading-relaxed">
              "As a student working on school projects, I want to filter campus spaces by real-time noise levels, so that I can find a guaranteed silent spot immediately without physically searching the building."
            </blockquote>
          </div>
        </section>

        {/* Interactive Walkthrough Video */}
        <section className="mb-20">
          <div className="flex items-baseline justify-between mb-6">
            <h2 className="text-3xl font-bold">Prototype Walkthrough</h2>
            <span className="text-sm font-medium text-black/45">Interactive Figma Make Build</span>
          </div>
          <div className="bg-brand-dark rounded-[2rem] p-3 shadow-xl border border-black/10 overflow-hidden mb-4">
            <video
              src={videoSrc}
              controls
              playsInline
              preload="metadata"
              className="w-full rounded-[1.5rem] bg-black aspect-video object-contain"
            />
          </div>
          <p className="text-sm text-black/55 font-medium leading-relaxed mb-10">
            Recording of the working prototype: toggling between Standard and Quiet View on the Otaniemi campus map, checking live noise and occupancy graphs for Design Factory (58 dB) and Kokeilustudio 3 (35 dB), filtering the list view, and booking a seat with check-in confirmation.
          </p>

          {/* 5-step user flow */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 mb-12">
            {flowSteps.map((item) => (
              <div key={item.step} className="bg-white p-4 rounded-2xl border border-black/8">
                <span className="text-xs font-mono font-bold text-[#7B3F9E] block mb-1">{item.step}</span>
                <h3 className="text-sm font-bold mb-1 leading-snug">{item.title}</h3>
                <p className="text-xs text-black/60 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Static Screen Reference */}
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-center bg-[#7B3F9E]/5 p-8 rounded-[2.5rem] border border-[#7B3F9E]/15 overflow-hidden">
            <img
              src={quietStudyImg}
              alt="Quiet Study Finder Map View"
              className="w-full max-w-sm rounded-[2rem] shadow-2xl border-[8px] border-gray-900 object-cover"
            />
          </div>
        </section>

        {/* AI Collaboration */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Collaboration with AI</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-7 rounded-3xl border border-black/8">
              <div className="w-11 h-11 bg-brand-blue/10 text-brand-blue rounded-2xl flex items-center justify-center mb-5">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold mb-3">Why Figma Make</h3>
              <p className="text-black/70 font-medium leading-relaxed">
                Aalto Space relies on a minimal, distinct purple-and-white visual identity that generic AI builders tend to drift away from. Figma Make let me prompt full screens quickly while still letting me inspect and edit individual elements directly.
              </p>
            </div>
            <div className="bg-white p-7 rounded-3xl border border-black/8">
              <div className="w-11 h-11 bg-brand-orange/10 text-brand-orange rounded-2xl flex items-center justify-center mb-5">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold mb-3">Friction & Manual Fixes</h3>
              <p className="text-black/70 font-medium leading-relaxed">
                The AI repeatedly hallucinated a generic street map instead of the actual Otaniemi campus, so I supplied the real Steerpath campus map myself. Map pin coordinates and bottom navigation labels ("Scanner") also needed direct manual fixes in the generated files.
              </p>
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section className="mb-16">
          <div className="bg-brand-dark text-white p-8 md:p-12 rounded-[2.5rem]">
            <h2 className="text-3xl font-bold mb-6 text-brand-yellow">Reflection</h2>
            <div className="space-y-4 text-lg text-white/80 font-medium leading-relaxed">
              <p>
                Prototyping with AI shifted my effort away from manual layout assembly toward interaction flow and how students would actually use the feature. Generating scannable room lists and placeholder activity charts took minutes instead of hours, which is particularly valuable when testing early concepts that might still change or be discarded.
              </p>
              <p>
                That said, refining the details—map accuracy, icon placement, and brand alignment—still took most of the time. Even with those rough edges, the overall efficiency gain over starting from a blank canvas was substantial.
              </p>
            </div>
          </div>
        </section>

        {/* Cross-link to Booking Flows */}
        <Link
          to="/project/aalto-space-flows"
          className="group flex items-center justify-between p-6 bg-white rounded-3xl border border-black/8 hover:border-[#7B3F9E]/40 transition-all"
        >
          <div>
            <p className="text-xs font-bold text-black/45 mb-1">Related Aalto Space Project</p>
            <p className="text-lg font-bold group-hover:text-[#7B3F9E] transition-colors">
              Aalto Space Booking Flows — Interactive Figma Prototypes
            </p>
          </div>
          <ArrowRight className="w-5 h-5 text-black/40 group-hover:text-[#7B3F9E] group-hover:translate-x-1 transition-all" />
        </Link>
      </div>
    </div>
  );
}
