import { motion } from "motion/react";
import { ArrowLeft, Bot, Sparkles, Zap, LayoutTemplate, PenTool, Leaf, Map, Navigation, Train, Plane, ChevronRight, User, Battery, Wifi, Signal, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function AIPrototyping() {
  return (
    <div className="pt-24 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-black/50 hover:text-brand-blue transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" /> Back to Work
        </Link>

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-brand-blue/10 text-brand-blue rounded-full text-xs font-bold tracking-wider uppercase">Case Study</span>
            <span className="text-sm text-black/50 font-bold">Personal Exploration</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 tracking-tighter">
            AI-Driven UX <br/>
            <span className="text-3xl md:text-5xl text-black/40 font-handwriting rotate-2 inline-block ml-2 text-brand-blue">Designing with machines</span>
          </h1>
          
          <div className="bg-brand-blue/5 border-2 border-brand-blue/20 rounded-3xl p-8 mt-12 relative overflow-hidden">
            <div className="absolute -right-10 -top-10 text-brand-blue/10">
              <Bot className="w-48 h-48" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4 text-brand-blue font-bold">
                <Sparkles className="w-5 h-5" />
                <h3>Project Premise</h3>
              </div>
              <p className="text-xl text-black/80 leading-relaxed font-medium max-w-2xl">
                I used AI for most of the production of this project. My goal was to learn exactly how generative AI can be integrated into UX/UI design and prototyping workflows, from initial research to high-fidelity mockups.
              </p>
            </div>
          </div>
        </motion.div>

        {/* The Process */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-8">The AI-Assisted Workflow</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-3xl border-2 border-black/5 hover:border-brand-blue/30 transition-colors">
              <div className="w-12 h-12 bg-brand-blue/10 text-brand-blue rounded-2xl flex items-center justify-center mb-6 transform -rotate-6">
                <PenTool className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">1. Research & Ideation</h3>
              <p className="text-black/60 font-medium">
                Used LLMs to generate user personas, simulate user interviews, and map out the user journey for a conceptual sustainable travel app.
              </p>
            </div>
            <div className="bg-white p-6 rounded-3xl border-2 border-black/5 hover:border-brand-yellow/30 transition-colors">
              <div className="w-12 h-12 bg-brand-yellow/10 text-brand-yellow rounded-2xl flex items-center justify-center mb-6 transform rotate-3">
                <LayoutTemplate className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">2. Wireframing</h3>
              <p className="text-black/60 font-medium">
                Leveraged AI UI generators to rapidly produce low-fidelity wireframes and layout structures based on text prompts.
              </p>
            </div>
            <div className="bg-white p-6 rounded-3xl border-2 border-black/5 hover:border-brand-orange/30 transition-colors">
              <div className="w-12 h-12 bg-brand-orange/10 text-brand-orange rounded-2xl flex items-center justify-center mb-6 transform -rotate-3">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">3. High-Fi & Copy</h3>
              <p className="text-black/60 font-medium">
                Refined the designs using AI for copywriting, image generation, and component styling, acting as an "art director" rather than a pixel-pusher.
              </p>
            </div>
          </div>
        </section>

        {/* Concrete Screens Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-8">High-Fidelity Prototypes</h2>
          <p className="text-xl text-black/70 mb-12 max-w-2xl font-medium">
            Here are the concrete screens for the sustainable travel app, <strong className="text-brand-blue">EcoJourney</strong>. The layouts, copy, and visual hierarchy were iteratively generated and refined using AI design tools.
          </p>

          <div className="flex flex-col lg:flex-row gap-12 items-center justify-center bg-brand-blue/5 p-8 md:p-12 rounded-[3rem] border-2 border-brand-blue/10 overflow-hidden">
            
            {/* Screen 1: Dashboard */}
            <div className="w-[300px] h-[600px] bg-gray-50 rounded-[2.5rem] border-[10px] border-gray-900 overflow-hidden relative shadow-2xl shrink-0 flex flex-col">
              {/* Status Bar */}
              <div className="h-7 w-full flex justify-between items-center px-4 pt-1 text-[10px] font-bold text-black/80 z-20">
                <span>9:41</span>
                <div className="flex gap-1.5 items-center">
                  <Signal className="w-3 h-3" />
                  <Wifi className="w-3 h-3" />
                  <Battery className="w-4 h-4" />
                </div>
              </div>
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-gray-900 rounded-b-2xl z-30"></div>

              {/* App Content */}
              <div className="flex-1 overflow-y-auto pb-20 no-scrollbar">
                <div className="p-5 pt-6">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Good morning,</p>
                      <h3 className="text-2xl font-bold tracking-tight">Markus</h3>
                    </div>
                    <div className="w-10 h-10 bg-brand-blue/10 rounded-full flex items-center justify-center text-brand-blue">
                      <User className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Impact Card */}
                  <div className="bg-gradient-to-br from-emerald-400 to-green-600 rounded-2xl p-5 text-white mb-6 shadow-lg shadow-green-500/20 relative overflow-hidden">
                    <div className="absolute -right-4 -bottom-4 opacity-20">
                      <Leaf className="w-24 h-24" />
                    </div>
                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-2">
                        <Leaf className="w-4 h-4" />
                        <span className="font-bold text-sm">Your Impact</span>
                      </div>
                      <div className="text-4xl font-bold mb-1 tracking-tighter">124 <span className="text-xl">kg</span></div>
                      <p className="text-green-100 text-xs font-medium">CO₂ saved this month</p>
                    </div>
                  </div>

                  <h4 className="font-bold mb-4 text-lg">Trending Eco-Destinations</h4>
                  <div className="flex gap-4 overflow-x-auto pb-4 snap-x no-scrollbar">
                    <div className="min-w-[160px] snap-start">
                      <img src="https://picsum.photos/seed/forest/320/240" className="w-full h-32 object-cover rounded-2xl mb-3 shadow-sm" alt="Forest" referrerPolicy="no-referrer" />
                      <p className="font-bold text-sm">Nuuksio Park</p>
                      <p className="text-xs text-gray-500 font-medium">Finland • 12km away</p>
                    </div>
                    <div className="min-w-[160px] snap-start">
                      <img src="https://picsum.photos/seed/lake/320/240" className="w-full h-32 object-cover rounded-2xl mb-3 shadow-sm" alt="Lake" referrerPolicy="no-referrer" />
                      <p className="font-bold text-sm">Lake Bled</p>
                      <p className="text-xs text-gray-500 font-medium">Slovenia • Train route</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Nav */}
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-white/90 backdrop-blur-md border-t border-gray-100 flex justify-around items-center px-6 pb-4 z-20">
                <div className="flex flex-col items-center text-emerald-600">
                  <Map className="w-6 h-6 mb-1" />
                  <span className="text-[10px] font-bold">Explore</span>
                </div>
                <div className="flex flex-col items-center text-gray-400">
                  <Navigation className="w-6 h-6 mb-1" />
                  <span className="text-[10px] font-bold">Routes</span>
                </div>
                <div className="flex flex-col items-center text-gray-400">
                  <Leaf className="w-6 h-6 mb-1" />
                  <span className="text-[10px] font-bold">Impact</span>
                </div>
              </div>
            </div>

            {/* Screen 2: Route Planner */}
            <div className="w-[300px] h-[600px] bg-gray-50 rounded-[2.5rem] border-[10px] border-gray-900 overflow-hidden relative shadow-2xl shrink-0 flex flex-col">
              {/* Status Bar */}
              <div className="h-7 w-full flex justify-between items-center px-4 pt-1 text-[10px] font-bold text-black/80 z-20">
                <span>9:42</span>
                <div className="flex gap-1.5 items-center">
                  <Signal className="w-3 h-3" />
                  <Wifi className="w-3 h-3" />
                  <Battery className="w-4 h-4" />
                </div>
              </div>
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-gray-900 rounded-b-2xl z-30"></div>

              {/* App Content */}
              <div className="flex-1 overflow-y-auto pb-6 no-scrollbar">
                <div className="bg-white px-5 pt-6 pb-5 border-b border-gray-100 mb-4">
                  <div className="flex items-center gap-3 mb-5">
                    <ArrowLeft className="w-5 h-5 text-gray-600" />
                    <h3 className="text-xl font-bold tracking-tight">Compare Routes</h3>
                  </div>
                  <div className="flex items-center justify-between bg-gray-50 p-3 rounded-2xl border border-gray-100">
                    <div className="font-bold text-sm">Helsinki</div>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                    <div className="font-bold text-sm">Stockholm</div>
                  </div>
                </div>

                <div className="px-5 space-y-4">
                  {/* Option 1: Eco */}
                  <div className="bg-white rounded-2xl p-4 border-2 border-emerald-500 shadow-sm relative">
                    <div className="absolute -top-3 right-4 bg-emerald-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      Recommended
                    </div>
                    <div className="flex justify-between items-start mb-4 mt-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                          <Train className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-bold text-sm">Ferry + Train</h4>
                          <p className="text-xs text-gray-500 font-medium">14h 30m total</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-base">€ 85</div>
                      </div>
                    </div>
                    <div className="bg-emerald-50 rounded-xl p-3 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-emerald-700">
                        <Leaf className="w-4 h-4" />
                        <span className="text-xs font-bold">15 kg CO₂</span>
                      </div>
                      <span className="text-[10px] text-emerald-600 font-bold uppercase tracking-wider">-88% vs flight</span>
                    </div>
                  </div>

                  {/* Option 2: Flight */}
                  <div className="bg-white rounded-2xl p-4 border-2 border-gray-100 shadow-sm opacity-75">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-500">
                          <Plane className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-bold text-sm">Direct Flight</h4>
                          <p className="text-xs text-gray-500 font-medium">1h 00m total</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-base">€ 60</div>
                      </div>
                    </div>
                    <div className="bg-red-50 rounded-xl p-3 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-red-700">
                        <Zap className="w-4 h-4" />
                        <span className="text-xs font-bold">120 kg CO₂</span>
                      </div>
                      <span className="text-[10px] text-red-600 font-bold uppercase tracking-wider">High impact</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-5 bg-white border-t border-gray-100 z-20">
                <button className="w-full bg-emerald-600 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-emerald-600/30 flex justify-center items-center gap-2 hover:bg-emerald-700 transition-colors">
                  Book Eco Route <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* Key Learnings */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-8">Key Takeaways</h2>
          <div className="bg-[#F4F1ED] p-8 md:p-12 rounded-[2.5rem]">
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 text-2xl">
                  🚀
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Speed vs. Precision</h4>
                  <p className="text-black/70 font-medium leading-relaxed">
                    AI is incredible for overcoming the "blank page syndrome." It can generate 10 variations of a layout in seconds. However, fine-tuning specific details still requires a human touch and traditional design skills.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 text-2xl">
                  🧠
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">The Designer as a Curator</h4>
                  <p className="text-black/70 font-medium leading-relaxed">
                    My role shifted from creating every element from scratch to curating, editing, and assembling AI-generated pieces into a cohesive, user-centered experience.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 text-2xl">
                  ⚠️
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Consistency is the Challenge</h4>
                  <p className="text-black/70 font-medium leading-relaxed">
                    Maintaining a consistent design system (typography, spacing, exact brand colors) across multiple AI-generated screens is currently the biggest bottleneck, requiring manual overrides.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
