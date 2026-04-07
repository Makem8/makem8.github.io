import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight, Sparkles, Layout, MousePointer2, Coffee } from "lucide-react";
import { Link } from "react-router-dom";
import profileImg from "../assets/ChatGPT Image Feb 27, 2026, 01_45_42 PM.png";
import cafeHeritageImg from "../assets/2024-07-13.webp";

export default function Home() {
  return (
    <div className="pt-32 pb-16">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-32 relative">
        {/* Playful background blobs */}
        <div className="absolute top-0 right-10 w-64 h-64 bg-brand-yellow/20 rounded-full blur-3xl -z-10 animate-pulse" />
        <div className="absolute bottom-0 left-10 w-48 h-48 bg-brand-blue/10 rounded-full blur-3xl -z-10" />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-8 mb-8">
            <div className="relative group">
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
              <motion.div 
                whileHover={{ scale: 1.05, rotate: -2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border-2 border-brand-yellow text-brand-dark text-sm font-bold mb-4 shadow-sm cursor-default"
              >
                <Sparkles className="w-4 h-4 text-brand-yellow" />
                <span>Available for internships</span>
              </motion.div>
              <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
                Hi, I'm Markus.
              </h1>
            </div>
          </div>
          <p className="text-xl text-black/70 leading-relaxed mb-10 max-w-2xl font-medium">
            I'm a student at Aalto University specializing in <span className="text-brand-orange font-bold">Human-Computer Interaction</span> and software development. I'm passionate about building intuitive, user-centered applications: whether that involves designing a sustainable travel platform or prototyping smart hardware concepts. I love tackling complex problems and turning them into seamless, accessible digital experiences.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <a href="#work" className="bg-brand-dark text-white px-8 py-4 rounded-full font-bold hover:bg-brand-orange hover:-translate-y-1 transition-all shadow-lg hover:shadow-brand-orange/25 flex items-center gap-2">
              View Work <ArrowRight className="w-5 h-5" />
            </a>
            <a href="mailto:markusosyrjala@gmail.com" className="bg-white border-2 border-black/10 text-brand-dark px-8 py-4 rounded-full font-bold hover:border-brand-blue hover:text-brand-blue hover:-translate-y-1 transition-all shadow-sm">
              Get in touch
            </a>
            <span className="hidden md:inline-block ml-4 font-handwriting text-2xl text-black/40 -rotate-6">
              Let's build something cool!
            </span>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="work" className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <h2 className="text-4xl font-bold tracking-tight">Selected Work</h2>
          <span className="font-handwriting text-2xl text-brand-blue rotate-3">My favorite projects ↓</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 1: Cafe Heritage */}
          <Link to="/project/cafe-heritage" className="group block">
            <div className="bg-white rounded-[2rem] p-3 border-2 border-black/5 hover:border-brand-orange/50 transition-all duration-300 h-full flex flex-col hover:-translate-y-2 hover:shadow-xl hover:shadow-brand-orange/10">
              <div className="bg-[#F4F1ED] rounded-3xl aspect-[4/3] overflow-hidden relative mb-6 flex items-center justify-center p-8 group-hover:scale-[0.98] transition-transform duration-300">
                <img src={cafeHeritageImg} alt="Cafe Heritage" className="absolute inset-0 w-full h-full object-cover z-0" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 z-0" />
                <div className="relative z-10 text-center transform group-hover:scale-105 transition-transform duration-500">
                  <h3 className="font-display font-bold text-5xl tracking-tighter text-white mb-2 uppercase drop-shadow-lg">Heritage</h3>
                  <p className="font-mono text-sm tracking-widest text-brand-yellow uppercase drop-shadow-md">Customer Scene Investigation</p>
                </div>
                <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-lg z-10">
                  <ArrowUpRight className="w-6 h-6 text-brand-orange" />
                </div>
              </div>
              <div className="px-5 pb-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-brand-orange transition-colors">Cafe Heritage</h3>
                  <p className="text-black/60 mb-6 line-clamp-2 font-medium">
                    A comprehensive customer scene investigation and ethnographic study for an art-focused coffee shop in Helsinki.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-1.5 bg-brand-orange/10 text-brand-orange rounded-full text-sm font-bold">User Research</span>
                  <span className="px-4 py-1.5 bg-black/5 text-black/70 rounded-full text-sm font-bold">Ethnography</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Project 2: AI Prototyping */}
          <Link to="/project/ai-ux-design" className="group block">
            <div className="bg-white rounded-[2rem] p-3 border-2 border-black/5 hover:border-brand-blue/50 transition-all duration-300 h-full flex flex-col hover:-translate-y-2 hover:shadow-xl hover:shadow-brand-blue/10">
              <div className="bg-brand-blue/5 rounded-3xl aspect-[4/3] relative mb-6 flex items-center justify-center overflow-hidden group-hover:scale-[0.98] transition-transform duration-300">
                <img src="https://picsum.photos/seed/app/800/600" alt="AI Prototyping" className="absolute inset-0 w-full h-full object-cover z-0" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-brand-blue/40 mix-blend-multiply z-0" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 z-0" />
                <div className="relative z-10 text-center transform group-hover:scale-105 transition-transform duration-500">
                  <h3 className="font-display font-bold text-5xl tracking-tighter text-white mb-2 drop-shadow-lg">AI + UX</h3>
                  <p className="font-mono text-sm tracking-widest text-white/90 uppercase drop-shadow-md">Prototyping Study</p>
                </div>
                <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-lg z-10">
                  <ArrowUpRight className="w-6 h-6 text-brand-blue" />
                </div>
              </div>
              <div className="px-5 pb-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-brand-blue transition-colors">AI-Driven UX Design</h3>
                  <p className="text-black/60 mb-6 font-medium">
                    Exploring the intersection of AI and product design by generating a sustainable travel app prototype entirely with AI tools.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-1.5 bg-brand-blue/10 text-brand-blue rounded-full text-sm font-bold">AI Prototyping</span>
                  <span className="px-4 py-1.5 bg-black/5 text-black/70 rounded-full text-sm font-bold">GenAI</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Project 3: Quiet Study Finder */}
          <Link to="/project/quiet-study-finder" className="group block md:col-span-2">
            <div className="bg-white rounded-[2rem] p-3 border-2 border-black/5 hover:border-[#7B3F9E]/50 transition-all duration-300 h-full flex flex-col md:flex-row gap-6 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#7B3F9E]/10">
              <div className="bg-[#7B3F9E]/5 rounded-3xl aspect-[21/9] md:w-2/3 relative flex items-center justify-center overflow-hidden group-hover:scale-[0.98] transition-transform duration-300">
                <img src="https://picsum.photos/seed/library/800/400" alt="Quiet Study Finder" className="absolute inset-0 w-full h-full object-cover z-0" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-[#7B3F9E]/40 mix-blend-multiply z-0" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 z-0" />
                <div className="relative z-10 text-center transform group-hover:scale-105 transition-transform duration-500">
                  <h3 className="font-display font-bold text-5xl tracking-tighter text-white mb-2 drop-shadow-lg">Quiet Study</h3>
                  <p className="font-mono text-sm tracking-widest text-white/90 uppercase drop-shadow-md">Aalto Space Feature</p>
                </div>
                <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-lg z-10">
                  <ArrowUpRight className="w-6 h-6 text-[#7B3F9E]" />
                </div>
              </div>
              <div className="px-5 py-6 md:w-1/3 flex flex-col justify-center">
                <div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-[#7B3F9E] transition-colors">Quiet Study Finder</h3>
                  <p className="text-black/60 mb-6 font-medium">
                    A feature concept for the Aalto Space app that visualizes real-time ambient noise levels to help students find guaranteed silent spots.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-1.5 bg-[#7B3F9E]/10 text-[#7B3F9E] rounded-full text-sm font-bold">Prototyping</span>
                  <span className="px-4 py-1.5 bg-black/5 text-black/70 rounded-full text-sm font-bold">Figma Make</span>
                </div>
              </div>
            </div>
          </Link>

        </div>
      </section>
    </div>
  );
}
