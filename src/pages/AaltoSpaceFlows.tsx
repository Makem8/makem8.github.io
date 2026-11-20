import { motion } from "motion/react";
import { ArrowLeft, CalendarCheck, XCircle, Monitor, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { assetUrl } from "../lib/assets";

export default function AaltoSpaceFlows() {
  const videoSrc = assetUrl("/assets/aistudio/Interactive_flow_recording_-_booking_room_ff6acd11.mp4");

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
            <span className="text-[#7B3F9E]">Interactive Prototyping</span>
            <span aria-hidden="true">·</span>
            <span>Aalto Space App</span>
            <span aria-hidden="true">·</span>
            <span>Figma & Smart Animate</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 tracking-tighter text-balance">
            Aalto Space Booking Flows
          </h1>
          <p className="text-xl md:text-2xl text-black/60 font-medium leading-relaxed max-w-2xl mb-10">
            Translating core campus room-booking journeys into responsive, animated Figma prototypes refined through peer critique.
          </p>

          <div className="bg-[#7B3F9E]/6 border border-[#7B3F9E]/20 rounded-3xl p-8">
            <h2 className="text-xl font-bold mb-3 text-brand-dark">From Static Screens to Working Flows</h2>
            <p className="text-lg text-black/75 leading-relaxed font-medium">
              Earlier feedback pointed out that several controls in my initial Aalto Space mockups were still static background screenshots or unlinked shapes. For this iteration, I rebuilt those elements as genuine interactive components and connected three separate room-booking journeys using Figma's Smart Animate and prototyping links so every step could be tested end-to-end.
            </p>
          </div>
        </motion.div>

        {/* Prototype Recording */}
        <section className="mb-20">
          <div className="flex items-baseline justify-between mb-6">
            <h2 className="text-3xl font-bold">Interactive Flow Recording</h2>
            <span className="text-sm font-medium text-black/45">Figma Prototype Walkthrough</span>
          </div>
          <div className="bg-brand-dark rounded-[2rem] p-3 shadow-xl border border-black/10 overflow-hidden">
            <video
              src={videoSrc}
              controls
              playsInline
              preload="metadata"
              className="w-full rounded-[1.5rem] bg-black aspect-video object-contain"
            />
          </div>
          <p className="text-sm text-black/55 font-medium mt-4 leading-relaxed">
            Walkthrough of the three separated flows in Figma preview: browsing and booking a room in Marsio, cancelling an active U350 reservation, and filtering for a study room equipped with a screen.
          </p>
        </section>

        {/* Three Flows */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Three Interactive Flows</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-7 rounded-3xl border border-black/8">
              <div className="w-11 h-11 rounded-2xl bg-[#7B3F9E]/10 text-[#7B3F9E] flex items-center justify-center mb-5">
                <CalendarCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold mb-2">1. Browse & Book</h3>
              <p className="text-black/70 font-medium leading-relaxed text-sm">
                Users browse available campus rooms, open space details, pick a time slot, and confirm the booking—receiving clear transition feedback and an active reservation countdown bar.
              </p>
            </div>

            <div className="bg-white p-7 rounded-3xl border border-black/8">
              <div className="w-11 h-11 rounded-2xl bg-[#7B3F9E]/10 text-[#7B3F9E] flex items-center justify-center mb-5">
                <XCircle className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold mb-2">2. Cancel Room</h3>
              <p className="text-black/70 font-medium leading-relaxed text-sm">
                Demonstrates managing an existing booking via a confirmation overlay that communicates the consequence of cancelling before updating to the empty reservations state.
              </p>
            </div>

            <div className="bg-white p-7 rounded-3xl border border-black/8">
              <div className="w-11 h-11 rounded-2xl bg-[#7B3F9E]/10 text-[#7B3F9E] flex items-center justify-center mb-5">
                <Monitor className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold mb-2">3. Room with a Screen</h3>
              <p className="text-black/70 font-medium leading-relaxed text-sm">
                Focuses on filtered search—picking a date, selecting the "Screen" equipment filter, scanning matching spaces across campus buildings, and inspecting room amenities.
              </p>
            </div>
          </div>
        </section>

        {/* Peer Review & Reflection */}
        <section className="mb-16">
          <div className="bg-brand-dark text-white p-8 md:p-12 rounded-[2.5rem]">
            <h2 className="text-3xl font-bold mb-6 text-purple-300">Peer Review & Reflection</h2>
            <div className="space-y-4 text-white/80 font-medium leading-relaxed text-lg">
              <p>
                Two remote peer-review sessions with Group 6 caught dead buttons that I had overlooked and highlighted how differently designers organize their Figma files. While I structured frames around complete user flows first and wired interactions afterward, several peers built reusable components first or kept reference screenshots directly beside their frames—approaches that noticeably improved visual consistency.
              </p>
              <p>
                Implementing smooth scrolling containers and working around paywalled prototyping features in Figma were shared friction points across the group. Separating each user journey into its own testable flow kept debugging manageable and made peer testing much more focused.
              </p>
            </div>
          </div>
        </section>

        {/* Cross-link to Quiet Study Finder */}
        <Link
          to="/project/quiet-study-finder"
          className="group flex items-center justify-between p-6 bg-white rounded-3xl border border-black/8 hover:border-[#7B3F9E]/40 transition-all"
        >
          <div>
            <p className="text-xs font-bold text-black/45 mb-1">Next Aalto Space Exploration</p>
            <p className="text-lg font-bold group-hover:text-[#7B3F9E] transition-colors">
              Quiet Study Finder — AI-Assisted Feature Concept
            </p>
          </div>
          <ArrowRight className="w-5 h-5 text-black/40 group-hover:text-[#7B3F9E] group-hover:translate-x-1 transition-all" />
        </Link>
      </div>
    </div>
  );
}
