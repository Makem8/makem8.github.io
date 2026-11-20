import { useRef, useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, Bot, Sparkles, Zap, LayoutTemplate, PenTool, Play, Pause } from "lucide-react";
import { Link } from "react-router-dom";
import { assetUrl } from "../lib/assets";

const prototypeScreens = [
  {
    src: assetUrl("/assets/aistudio/image_df28d13b.png"),
    title: "Discover Home",
    caption: "Editorial hero screen introducing low-impact rail, road, and water routes with a destination picker.",
  },
  {
    src: assetUrl("/assets/aistudio/image_724ea7ff.png"),
    title: "Route & Booking Flow",
    caption: "Multi-step Amsterdam to Bergen night train checkout highlighting 87 kg CO2 saved compared to flying.",
  },
  {
    src: assetUrl("/assets/aistudio/image_e5a5807e.png"),
    title: "Traveler Impact Profile",
    caption: "Personal sustainability overview tracking CO2 avoided, rail kilometers covered, and past trips.",
  },
];

function formatTime(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

export default function AIPrototyping() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const walkthroughVideoSrc = assetUrl("/assets/aistudio/20261120-2155-00.8365679_a07a1872.mp4");

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused || video.ended) {
      void video.play();
    } else {
      video.pause();
    }
  };

  const handleSeek = (value: number) => {
    const video = videoRef.current;
    if (!video) return;
    video.currentTime = value;
    setCurrentTime(value);
  };

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

        {/* Concrete Screens & Interactive Walkthrough Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-4">High-Fidelity Prototype</h2>
          <p className="text-xl text-black/70 mb-10 max-w-2xl font-medium">
            Below is the interactive mobile prototype and key screens for the sustainable travel concept. Layouts, imagery, copy, and booking flows were iteratively generated and refined using AI design tools.
          </p>

          {/* Interactive Walkthrough Video */}
          <div className="bg-[#F4F1ED] border border-black/8 rounded-[2.5rem] p-6 sm:p-10 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-center">
              <div className="w-[244px] sm:w-[268px] mx-auto">
                <div className="relative aspect-[9/19.2] rounded-[2.5rem] overflow-hidden bg-[#181818] shadow-2xl ring-1 ring-black/15">
                  <video
                    ref={videoRef}
                    src={walkthroughVideoSrc}
                    playsInline
                    preload="metadata"
                    onClick={togglePlay}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onEnded={() => setIsPlaying(false)}
                    onLoadedMetadata={(e) => setDuration(e.currentTarget.duration || 0)}
                    onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
                    className="w-full h-full object-cover object-center scale-[1.06] cursor-pointer"
                  />

                  {!isPlaying && (
                    <button
                      type="button"
                      onClick={togglePlay}
                      aria-label="Play prototype walkthrough"
                      className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-white/90 text-brand-dark flex items-center justify-center shadow-xl hover:scale-105 transition-transform cursor-pointer"
                    >
                      <Play className="w-6 h-6 fill-current ml-0.5" />
                    </button>
                  )}
                </div>

                {/* External Controls Bar (keeps mobile bottom nav unobstructed) */}
                <div className="mt-4 bg-brand-dark text-white rounded-2xl px-3 py-2 flex items-center gap-2.5 shadow-md">
                  <button
                    type="button"
                    onClick={togglePlay}
                    aria-label={isPlaying ? "Pause walkthrough" : "Play walkthrough"}
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors shrink-0 cursor-pointer"
                  >
                    {isPlaying ? (
                      <Pause className="w-3.5 h-3.5 fill-current" />
                    ) : (
                      <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                    )}
                  </button>

                  <input
                    type="range"
                    min={0}
                    max={duration || 0}
                    step={0.1}
                    value={Math.min(currentTime, duration || 0)}
                    onChange={(e) => handleSeek(Number(e.target.value))}
                    aria-label="Seek prototype walkthrough"
                    className="flex-1 min-w-0 h-1.5 accent-emerald-400 cursor-pointer"
                  />

                  <span className="font-mono text-[11px] text-white/75 tabular-nums shrink-0">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </span>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2">
                    Interactive Recording
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3">
                    End-to-End Prototype Flow
                  </h3>
                  <p className="text-black/70 font-medium leading-relaxed">
                    The recording walks through the core user journey from discovering low-emission destinations to completing a train booking and reviewing personal carbon savings.
                  </p>
                </div>

                <div className="space-y-4 pt-2 border-t border-black/10">
                  <div>
                    <h4 className="text-sm font-bold text-brand-dark">1. Discover & Eco-Scores</h4>
                    <p className="text-sm text-black/65 font-medium leading-relaxed">
                      Curated European destinations (such as Ljubljana and Kandersteg) paired with eco-score badges and an interactive map view.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-dark">2. Low-Impact Booking Checkout</h4>
                    <p className="text-sm text-black/65 font-medium leading-relaxed">
                      Three-step reservation flow for an Amsterdam to Bergen night train, surfacing CO2 savings directly above traveler and payment details.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-dark">3. Sustainability Profile</h4>
                    <p className="text-sm text-black/65 font-medium leading-relaxed">
                      Visual progress toward annual CO2 reduction goals alongside total rail kilometers and past journeys.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Cropped Key Screenshots */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {prototypeScreens.map((screen) => (
              <figure key={screen.title} className="flex flex-col items-center sm:items-stretch">
                <div className="w-full max-w-[260px] mx-auto aspect-[9/19.2] rounded-[2.35rem] overflow-hidden bg-[#181818] shadow-xl ring-1 ring-black/15 mb-4">
                  <img
                    src={screen.src}
                    alt={screen.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center scale-[1.035]"
                  />
                </div>
                <figcaption className="text-center sm:text-left px-1 max-w-[260px] mx-auto sm:max-w-none">
                  <h3 className="text-base font-bold text-brand-dark mb-1">
                    {screen.title}
                  </h3>
                  <p className="text-xs text-black/60 font-medium leading-relaxed">
                    {screen.caption}
                  </p>
                </figcaption>
              </figure>
            ))}
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
