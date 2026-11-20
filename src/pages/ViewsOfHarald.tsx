import { motion } from "motion/react";
import { ArrowLeft, Glasses, Layers, Hand, Volume2 } from "lucide-react";
import { Link } from "react-router-dom";
import { assetUrl } from "../lib/assets";

export default function ViewsOfHarald() {
  const videoSrc = assetUrl("/assets/aistudio/Views_of_harald_video_50ad945c.mp4");

  return (
    <div className="pt-24 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-bold text-black/50 hover:text-brand-orange transition-colors mb-12"
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
            <span className="text-emerald-700">Augmented Reality</span>
            <span aria-hidden="true">·</span>
            <span>CS-E4200</span>
            <span aria-hidden="true">·</span>
            <span>Team of 3</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 tracking-tighter text-balance">
            Views of Harald
          </h1>
          <p className="text-xl md:text-2xl text-black/60 font-medium leading-relaxed max-w-2xl mb-10">
            Transforming indoor window views into customizable seasonal landscapes using passthrough augmented reality.
          </p>

          {/* Context Card */}
          <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-3xl p-8">
            <h2 className="text-xl font-bold mb-3 text-brand-dark">Context & Motivation</h2>
            <p className="text-lg text-black/75 leading-relaxed font-medium">
              Long Finnish winters bring months of low daylight and minimal greenery, which can reduce motivation and mood when spending most of the day indoors. Existing VR nature apps disconnect users from their physical space and are impractical for everyday study or work. Inspired by Alvar Aalto's Otaniemi library bringing the sky indoors, we designed a lightweight AR prototype that augments only the scenery outside a window—leaving the indoor room completely visible.
            </p>
          </div>
        </motion.div>

        {/* Demo Video */}
        <section className="mb-20">
          <div className="flex items-baseline justify-between mb-6">
            <h2 className="text-3xl font-bold">Prototype Demo</h2>
            <span className="text-sm font-medium text-black/45">Meta Quest 3 Passthrough · Audio included</span>
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
            In the recording, a floating spatial menu lets the user directly poke between Spring, Summer, Autumn, and Winter. Each selection updates the occluded window portal, shifts the ambient lighting mood, and plays a spatialized seasonal soundscape.
          </p>
        </section>

        {/* Implementation */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">System & Interaction Design</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-7 rounded-3xl border border-black/8">
              <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-5">
                <Glasses className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold mb-2">Unity 6.3 & Meta Quest 3</h3>
              <p className="text-black/70 font-medium leading-relaxed">
                Built with Unity's Universal Render Pipeline and the Meta XR All-in-One SDK (v64+), leveraging Quest 3 color passthrough and depth sensing so users stay grounded in their real room.
              </p>
            </div>

            <div className="bg-white p-7 rounded-3xl border border-black/8">
              <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-5">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold mb-2">Passthrough Window Portal</h3>
              <p className="text-black/70 font-medium leading-relaxed">
                Digital planes are aligned to physical window frames using Spatial Anchors. A custom occlusion shader cuts a visual portal in the passthrough feed, revealing the chosen seasonal scene behind the wall.
              </p>
            </div>

            <div className="bg-white p-7 rounded-3xl border border-black/8">
              <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-5">
                <Hand className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold mb-2">Direct Poke Interaction</h3>
              <p className="text-black/70 font-medium leading-relaxed">
                Rather than deep menus, a minimal floating canvas sits at an ergonomic distance. Using the Meta Interaction SDK, users tap seasons directly with their hand, receiving proximity glow and tactile displacement feedback.
              </p>
            </div>

            <div className="bg-white p-7 rounded-3xl border border-black/8">
              <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-5">
                <Volume2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold mb-2">Lighting & Spatial Audio</h3>
              <p className="text-black/70 font-medium leading-relaxed">
                Switching seasons triggers a subtle global ambient light shift (for example, cooler tones in winter) paired with 3D audio loops—birds in spring, wind in winter—spatialized at the window so volume scales with proximity.
              </p>
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section>
          <div className="bg-brand-dark text-white p-8 md:p-12 rounded-[2.5rem]">
            <h2 className="text-3xl font-bold mb-6 text-emerald-300">Reflection</h2>
            <div className="space-y-4 text-white/80 font-medium leading-relaxed text-lg">
              <p>
                One of our earliest takeaways was that visual realism is not always what makes an AR experience convincing. We initially aimed for highly detailed dynamic scenery, but heavier graphics hurt frame stability and exposed tracking drift. Simpler, cleaner seasonal visuals held tracking better and felt noticeably calmer to look at.
              </p>
              <p>
                Choosing AR over VR shaped every interface decision: because users remain aware of their real desks and surroundings, too many floating controls quickly become distracting. Current consumer headsets still face limits in field of view and automatic window tracking, yet the prototype demonstrated that quiet, everyday environmental augmentation is a realistic direction beyond gaming or productivity apps.
              </p>
            </div>
            <p className="text-sm text-white/45 mt-8 pt-6 border-t border-white/10 font-medium">
              Project team: Markus Syrjälä, Peng Ying, Junyi Chen · Course: CS-E4200 (Aalto University)
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
