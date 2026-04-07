import { motion } from "motion/react";
import { ArrowLeft, VolumeX, Search, Layers, Cpu } from "lucide-react";
import { Link } from "react-router-dom";
import quietStudyImg from "../assets/Screenshot 2026-04-07 224730.png";

export default function QuietStudyFinder() {
  return (
    <div className="pt-24 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-black/50 hover:text-brand-yellow transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" /> Back to Work
        </Link>

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-brand-yellow/20 text-brand-yellow rounded-full text-xs font-bold tracking-wider uppercase">Feature Concept</span>
            <span className="text-sm text-black/50 font-bold">Aalto Space App</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 tracking-tighter">
            Quiet Study <br/>
            <span className="text-brand-yellow">Finder</span>
          </h1>
          
          <div className="bg-brand-yellow/10 border-2 border-brand-yellow/20 rounded-3xl p-8 mt-12 relative overflow-hidden">
            <div className="absolute -right-10 -top-10 text-brand-yellow/20">
              <VolumeX className="w-48 h-48" />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">The Challenge</h3>
              <p className="text-xl text-black/80 leading-relaxed font-medium max-w-2xl">
                Students often book study rooms hoping for silence, but find the surrounding area noisy. The current Aalto Space app lacks real-time context regarding the ambient environment of these spaces.
              </p>
            </div>
          </div>
        </motion.div>

        {/* The Solution & User Story */}
        <section className="mb-24 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">The Solution</h2>
            <p className="text-black/70 font-medium leading-relaxed mb-6">
              Introducing a <strong>"noise layer"</strong> to the map and room details. This feature allows students to filter spaces based on current ambient noise levels (Silent, Whisper, Collaborative), powered by hidden sensors that pick up how loud a space currently is.
            </p>
            <p className="text-black/70 font-medium leading-relaxed">
              This addresses Nielsen’s #1 Heuristic: <em>Visibility of System Status</em>. By visualizing the environment's state before commitment, we reduce uncertainty and physical effort.
            </p>
          </div>
          <div className="bg-[#F4F1ED] p-8 rounded-3xl border-2 border-black/5">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Search className="w-5 h-5 text-brand-yellow" />
              User Story
            </h3>
            <blockquote className="text-lg font-medium italic text-black/70 border-l-4 border-brand-yellow pl-4 py-2">
              "As a student working on school projects, I want to filter campus spaces by real-time noise levels, so that I can find a guaranteed silent spot immediately without physically searching the building."
            </blockquote>
          </div>
        </section>

        {/* Concrete Screens Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-8">High-Fidelity Prototype</h2>
          <p className="text-xl text-black/70 mb-12 max-w-2xl font-medium">
            The proposed interface integrates seamlessly into the existing Aalto Space app, adding a "Quiet View" toggle that transforms the map with color-coded noise indicators.
          </p>

          <div className="flex flex-col lg:flex-row gap-12 items-center justify-center bg-brand-yellow/5 p-8 md:p-12 rounded-[3rem] border-2 border-brand-yellow/20 overflow-hidden">
            
            {/* Screen 1: Map View */}
            <img 
              src={quietStudyImg} 
              alt="Quiet Study Finder Prototype" 
              className="w-full max-w-md rounded-[2.5rem] shadow-2xl border-[10px] border-gray-900 object-cover"
            />

          </div>
        </section>

        {/* AI Collaboration */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-8">Collaboration with AI</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl border-2 border-black/5">
              <div className="w-12 h-12 bg-brand-blue/10 text-brand-blue rounded-2xl flex items-center justify-center mb-6">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">Tool Selection: Figma Make</h3>
              <p className="text-black/70 font-medium leading-relaxed">
                I utilized Figma Make for this project. Aalto Space has a specific, minimalist visual identity, and other AI design builders often struggle to stay consistent with the existing brand. Figma Make allowed me to prompt for layouts while keeping the output visible and editable in specific elements.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl border-2 border-black/5">
              <div className="w-12 h-12 bg-brand-orange/10 text-brand-orange rounded-2xl flex items-center justify-center mb-6">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">Friction & Iteration</h3>
              <p className="text-black/70 font-medium leading-relaxed">
                Working with AI introduced specific friction points. The AI initially hallucinated a different map for the Otaniemi campus. I had to manually provide the correct Steerpath map. Additionally, icons were sometimes misplaced, requiring manual intervention to fix the layout.
              </p>
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section className="mb-24">
          <div className="bg-brand-dark text-white p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6 text-brand-yellow">Reflection</h2>
              <p className="text-lg text-white/80 font-medium leading-relaxed mb-6">
                Using AI shifted the workload from "pixel-pushing" more to the ideation of the design. I spent less time drawing rectangles and more time thinking of how the design would be used by real users.
              </p>
              <p className="text-lg text-white/80 font-medium leading-relaxed">
                While the initial generation was fast and excellent at creating clear, scannable vertical lists with placeholder data, the details took the majority of the time. The efficiency gain was quite large compared to starting from a blank canvas, allowing me to showcase a concept quickly without spending excessive time on an idea that might get scrapped.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
