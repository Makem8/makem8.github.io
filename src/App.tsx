/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CafeHeritage from './pages/CafeHeritage';
import AIPrototyping from './pages/AIPrototyping';
import QuietStudyFinder from './pages/QuietStudyFinder';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/cafe-heritage" element={<CafeHeritage />} />
            <Route path="/project/ai-ux-design" element={<AIPrototyping />} />
            <Route path="/project/quiet-study-finder" element={<QuietStudyFinder />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
