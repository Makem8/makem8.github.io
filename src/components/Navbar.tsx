import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-light/80 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="font-display font-bold text-2xl tracking-tighter group flex items-center gap-2">
          <span className="group-hover:rotate-12 transition-transform duration-300 inline-block origin-bottom-right">👋</span>
          <span>Markus<span className="text-brand-orange">.</span></span>
        </Link>
        <div className="flex gap-8 font-bold text-sm">
          <Link 
            to="/" 
            className={`relative hover:text-brand-orange transition-colors ${isHome ? 'text-brand-dark' : 'text-black/50'}`}
          >
            Work
            {isHome && (
              <motion.div layoutId="nav-indicator" className="absolute -bottom-2 left-0 right-0 h-0.5 bg-brand-orange rounded-full" />
            )}
          </Link>
          <a 
            href="mailto:markusosyrjala@gmail.com" 
            className="hover:text-brand-blue transition-colors text-black/50"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
