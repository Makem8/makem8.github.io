import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, ChevronLeft, ChevronRight, Map, ShieldAlert, MessageSquare, Compass, Play, Pause, Maximize2, Minimize2 } from "lucide-react";
import { Link } from "react-router-dom";
import { assetUrl } from "../lib/assets";
// Replace these placeholder imports with your exported Figma screenshots
import visitorGuideImg from "../assets/images/etosha_visitor_guide_ui_1795197283424.jpg";
import visitorMapImg from "../assets/images/etosha_visitor_map_ui_1795197316915.jpg";
import visitorReportImg from "../assets/images/etosha_visitor_report_ui_1795197299968.jpg";
import rangerDashboardImg from "../assets/images/etosha_ranger_dashboard_ui_1795197313847.jpg";

const uiScreens = [
  {
    src: visitorGuideImg,
    role: "Visitor View",
    title: "Park Guide & Wildlife Hub",
    caption: "Home overview linking landscape, history, weather, black rhino conservation, and entrance details.",
  },
  {
    src: visitorMapImg,
    role: "Visitor View",
    title: "Interactive Map & Camps",
    caption: "Etosha Pan map with entrance gates, camp overview cards, and downloadable offline maps.",
  },
  {
    src: visitorReportImg,
    role: "Visitor View",
    title: "Guided Poaching Report",
    caption: "Step-by-step anonymous reporting chat capturing incident type, GPS coordinates, and urgency.",
  },
  {
    src: rangerDashboardImg,
    role: "Ranger View",
    title: "Incident Triage Dashboard",
    caption: "Authenticated ranger queue sorting incoming reports by severity with map links and status tracking.",
  },
];

function formatTime(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

export default function EtoshaApp() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerContainerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const demoVideoSrc = assetUrl("/assets/aistudio/Etosha_App_Demo_e572e9aa.mp4");

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.volume = 0;
    }

    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement === playerContainerRef.current);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const enforceMute = () => {
    const video = videoRef.current;
    if (!video) return;
    if (!video.muted || video.volume !== 0) {
      video.muted = true;
      video.volume = 0;
    }
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    enforceMute();
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

  const toggleFullscreen = () => {
    const container = playerContainerRef.current;
    if (!container) return;
    if (document.fullscreenElement === container) {
      void document.exitFullscreen();
    } else if (container.requestFullscreen) {
      void container.requestFullscreen();
    }
  };

  const scrollCarousel = (direction: "prev" | "next") => {
    if (!carouselRef.current) return;
    const offset = direction === "next" ? 300 : -300;
    carouselRef.current.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <div className="pt-24 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-bold text-black/50 hover:text-[#8C1D18] transition-colors mb-12"
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
            <span className="text-[#8C1D18]">UI Construction & Full-Stack</span>
            <span aria-hidden="true">·</span>
            <span>CS-E5220</span>
            <span aria-hidden="true">·</span>
            <span>Group 16</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 tracking-tighter text-balance">
            Etosha National Park App
          </h1>
          <p className="text-xl md:text-2xl text-black/60 font-medium leading-relaxed max-w-2xl mb-10">
            A dual-purpose mobile web application combining a national park visitor guide with anonymous rhino poaching reporting for park rangers.
          </p>

          {/* Context Card */}
          <div className="bg-[#8C1D18]/5 border border-[#8C1D18]/20 rounded-3xl p-8">
            <h2 className="text-xl font-bold mb-3 text-brand-dark">The Problem</h2>
            <p className="text-lg text-black/75 leading-relaxed font-medium">
              Namibia's Etosha National Park is home to the largest population of black rhinos, yet poachers are frequently caught only after an animal has already been injured. Our goal was to design an interface that lowers the barrier to reporting suspicious activity in time—while accounting for mixed digital literacy among visitors and unreliable mobile connectivity inside the park.
            </p>
          </div>
        </motion.div>

        {/* Demo Video (Permanently Muted) */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6">Application Walkthrough</h2>

          <div
            ref={playerContainerRef}
            className="bg-brand-dark rounded-[2rem] p-3 shadow-xl border border-black/10 overflow-hidden flex flex-col justify-center"
          >
            <div className="relative rounded-[1.5rem] overflow-hidden bg-black">
              <video
                ref={videoRef}
                src={demoVideoSrc}
                muted
                playsInline
                preload="metadata"
                onClick={togglePlay}
                onContextMenu={(e) => e.preventDefault()}
                onVolumeChange={enforceMute}
                onPlay={() => {
                  enforceMute();
                  setIsPlaying(true);
                }}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
                onLoadedMetadata={(e) => {
                  enforceMute();
                  setDuration(e.currentTarget.duration || 0);
                }}
                onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
                className={`w-full bg-black object-contain cursor-pointer ${
                  isFullscreen ? "max-h-[calc(100vh-6rem)]" : "aspect-video"
                }`}
              />

              {!isPlaying && (
                <button
                  type="button"
                  onClick={togglePlay}
                  aria-label="Play walkthrough video"
                  className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-white/90 text-brand-dark flex items-center justify-center shadow-xl hover:scale-105 transition-transform cursor-pointer"
                >
                  <Play className="w-7 h-7 fill-current ml-0.5" />
                </button>
              )}
            </div>

            {/* Custom Controls (No Unmute / Volume Control) */}
            <div className="flex items-center gap-3 px-3 pt-3 pb-1 text-white">
              <button
                type="button"
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause video" : "Play video"}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors shrink-0 cursor-pointer"
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4 fill-current" />
                ) : (
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                )}
              </button>

              <input
                type="range"
                min={0}
                max={duration || 0}
                step={0.1}
                value={Math.min(currentTime, duration || 0)}
                onChange={(e) => handleSeek(Number(e.target.value))}
                aria-label="Seek video timeline"
                className="flex-1 h-1.5 accent-[#E25D52] cursor-pointer"
              />

              <span className="font-mono text-xs text-white/75 tabular-nums shrink-0">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>

              <button
                type="button"
                onClick={toggleFullscreen}
                aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors shrink-0 cursor-pointer"
              >
                {isFullscreen ? (
                  <Minimize2 className="w-4 h-4" />
                ) : (
                  <Maximize2 className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
          <p className="text-sm text-black/55 font-medium mt-4 leading-relaxed">
            Prototype designed in Figma and implemented as a mobile-first web app with <strong>Vue</strong> on the frontend and <strong>Spring Boot + PostgreSQL</strong> on the backend.
          </p>
        </section>

        {/* Design & Architecture */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Dual-Purpose Design</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-7 rounded-3xl border border-black/8">
              <div className="w-11 h-11 rounded-2xl bg-[#8C1D18]/10 text-[#8C1D18] flex items-center justify-center mb-5">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold mb-2">Visitor Guide & Wildlife Info</h3>
              <p className="text-black/70 font-medium leading-relaxed">
                By doubling as a practical park companion—covering history, weather, entrance fees, and species profiles (with dedicated black rhino conservation info)—tourists have a natural reason to keep the app open during their visit.
              </p>
            </div>

            <div className="bg-white p-7 rounded-3xl border border-black/8">
              <div className="w-11 h-11 rounded-2xl bg-[#8C1D18]/10 text-[#8C1D18] flex items-center justify-center mb-5">
                <Map className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold mb-2">Interactive & Offline Maps</h3>
              <p className="text-black/70 font-medium leading-relaxed">
                Visitors can browse entrance gates, camp amenities, and inter-camp distances, and download offline maps ahead of time for low-signal zones. Rangers use the same map layer to inspect reported incident coordinates.
              </p>
            </div>

            <div className="bg-white p-7 rounded-3xl border border-black/8">
              <div className="w-11 h-11 rounded-2xl bg-[#8C1D18]/10 text-[#8C1D18] flex items-center justify-center mb-5">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold mb-2">Guided Conversational Reporting</h3>
              <p className="text-black/70 font-medium leading-relaxed">
                Suspicious activity is reported anonymously through a step-by-step chat flow—asking clear questions for incident type, location, GPS coordinates, date, and urgency—followed by a summary confirmation to prevent accidental submissions.
              </p>
            </div>

            <div className="bg-white p-7 rounded-3xl border border-black/8">
              <div className="w-11 h-11 rounded-2xl bg-[#8C1D18]/10 text-[#8C1D18] flex items-center justify-center mb-5">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold mb-2">Ranger Triage & Accessibility</h3>
              <p className="text-black/70 font-medium leading-relaxed">
                Authenticated rangers access a prioritized incident queue (Critical to Low), view pinpointed locations, and mark cases resolved or closed. The UI applies Shneiderman's Golden Rules, Nielsen's heuristics, and WCAG 2.2 A/AA guidelines.
              </p>
            </div>
          </div>
        </section>

        {/* Figma UI Screenshots Carousel */}
        <section className="mb-20">
          <div className="flex items-end justify-between gap-4 mb-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">Figma UI Design</h2>
              <p className="text-black/60 font-medium">
                Placeholder mockups covering both the visitor guide and ranger triage views.
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => scrollCarousel("prev")}
                aria-label="Scroll screenshots left"
                className="w-10 h-10 rounded-full bg-white border border-black/10 text-brand-dark flex items-center justify-center hover:border-[#8C1D18] hover:text-[#8C1D18] transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => scrollCarousel("next")}
                aria-label="Scroll screenshots right"
                className="w-10 h-10 rounded-full bg-white border border-black/10 text-brand-dark flex items-center justify-center hover:border-[#8C1D18] hover:text-[#8C1D18] transition-colors cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory no-scrollbar"
          >
            {uiScreens.map((screen) => (
              <figure
                key={screen.title}
                className="w-[250px] sm:w-[270px] shrink-0 snap-start flex flex-col"
              >
                <div className="aspect-[9/16] w-full rounded-2xl overflow-hidden border border-black/10 bg-[#F4F1ED] shadow-md mb-4">
                  <img
                    src={screen.src}
                    alt={`${screen.role} — ${screen.title}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <figcaption className="px-1">
                  <p className="text-xs font-bold text-[#8C1D18] mb-1">
                    {screen.role}
                  </p>
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

        {/* Reflection */}
        <section>
          <div className="bg-brand-dark text-white p-8 md:p-12 rounded-[2.5rem]">
            <h2 className="text-3xl font-bold mb-6 text-amber-300">Reflection</h2>
            <div className="space-y-4 text-white/80 font-medium leading-relaxed text-lg">
              <p>
                Combining a casual tourism guide with an urgent anti-poaching tool was an interesting exercise in balancing tone and user groups. Early on, reporting was tucked inside the general safari chatbot, but moving it into its own top-level navigation tab kept the serious reporting flow distinct while still benefiting from the visitor guide's everyday engagement.
              </p>
              <p>
                Merging five individual Figma concepts into a working Vue and Spring Boot application also exposed structural gaps—particularly in the report details and map sync views—which required redesigning parts of the UI during implementation. Designing for novice visitors alongside expert rangers reinforced how much clear text labels, reversible steps, and fail-safe confirmations matter when real-world stakes are high.
              </p>
            </div>
            <p className="text-sm text-white/45 mt-8 pt-6 border-t border-white/10 font-medium">
              Group 16 · Course: CS-E5220 (Aalto University)
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
