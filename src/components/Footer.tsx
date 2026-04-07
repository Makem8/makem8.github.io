export default function Footer() {
  return (
    <footer className="border-t border-black/5 py-12 mt-24 bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
          <p className="text-sm text-black/60 font-bold">
            © {new Date().getFullYear()} Markus.
          </p>
          <p className="text-sm text-black/40 mt-1 flex items-center gap-1 font-medium">
            Designed with <span className="text-brand-orange">♥</span>, ☕, and lots of post-it notes.
          </p>
        </div>
        <div className="flex gap-6 text-sm font-bold">
          <a href="https://www.linkedin.com/in/markussyrjala/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange hover:-translate-y-1 transition-all">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
