/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CafeHeritage from './pages/CafeHeritage';
import AIPrototyping from './pages/AIPrototyping';
import QuietStudyFinder from './pages/QuietStudyFinder';
import Thesis from './pages/Thesis';
import ViewsOfHarald from './pages/ViewsOfHarald';
import EtoshaApp from './pages/EtoshaApp';
import MyCoursesCalendar from './pages/MyCoursesCalendar';
import AaltoSpaceFlows from './pages/AaltoSpaceFlows';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/cafe-heritage" element={<CafeHeritage />} />
            <Route path="/project/ai-ux-design" element={<AIPrototyping />} />
            <Route path="/project/quiet-study-finder" element={<QuietStudyFinder />} />
            <Route path="/project/aalto-space-flows" element={<AaltoSpaceFlows />} />
            <Route path="/project/views-of-harald" element={<ViewsOfHarald />} />
            <Route path="/project/etosha-app" element={<EtoshaApp />} />
            <Route path="/project/mycourses-calendar" element={<MyCoursesCalendar />} />
            <Route path="/project/thesis" element={<Thesis />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
