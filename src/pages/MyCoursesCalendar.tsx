import { motion } from "motion/react";
import { ArrowLeft, CheckCircle2, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

const issuesByTask = [
  { task: "Event creation", issues: 17, color: "#DC2626" },
  { task: "Locating calendar", issues: 16, color: "#0F766E" },
  { task: "Exporting", issues: 10, color: "#EA580C" },
  { task: "Importing", issues: 5, color: "#2563EB" },
  { task: "Navigation", issues: 2, color: "#64748B" },
  { task: "Deletion", issues: 2, color: "#64748B" },
];

export default function MyCoursesCalendar() {

  return (
    <div className="pt-24 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-bold text-black/50 hover:text-teal-700 transition-colors mb-12"
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
            <span className="text-teal-700">Usability Evaluation & Redesign</span>
            <span aria-hidden="true">·</span>
            <span>CS-E5230</span>
            <span aria-hidden="true">·</span>
            <span>Group 5</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 tracking-tighter text-balance">
            MyCourses Calendar Evaluation
          </h1>
          <p className="text-xl md:text-2xl text-black/60 font-medium leading-relaxed max-w-2xl mb-10">
            Evaluating Aalto University's Moodle-based course calendar through heuristic inspection and think-aloud user testing, followed by targeted wireframe redesigns.
          </p>

          {/* Key Study Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-6 rounded-3xl border border-black/8">
              <div className="text-3xl md:text-4xl font-bold font-display tabular-nums text-teal-700 mb-1">
                57.8
              </div>
              <div className="text-xs font-bold text-black/70">SUS Score / 100</div>
              <div className="text-xs text-black/45 mt-1">Below 68 benchmark</div>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-black/8">
              <div className="text-3xl md:text-4xl font-bold font-display tabular-nums text-brand-dark mb-1">
                52
              </div>
              <div className="text-xs font-bold text-black/70">Unique Issues</div>
              <div className="text-xs text-black/45 mt-1">Merged from 98 findings</div>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-black/8">
              <div className="text-3xl md:text-4xl font-bold font-display tabular-nums text-brand-orange mb-1">
                87%
              </div>
              <div className="text-xs font-bold text-black/70">Task Completion</div>
              <div className="text-xs text-black/45 mt-1">30 attempts (n=6)</div>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-black/8">
              <div className="text-3xl md:text-4xl font-bold font-display tabular-nums text-brand-dark mb-1">
                2.0 / 5
              </div>
              <div className="text-xs font-bold text-black/70">Usage Frequency</div>
              <div className="text-xs text-black/45 mt-1">Lowest SUS item</div>
            </div>
          </div>
        </motion.div>

        {/* Methodology & Data */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
            <div className="lg:col-span-2 bg-[#F4F1ED] p-7 rounded-3xl flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-4">Methods</h2>
                <p className="text-black/70 font-medium leading-relaxed mb-5">
                  We paired two complementary evaluation methods on the desktop web version of MyCourses Calendar:
                </p>
                <ul className="space-y-4 text-sm text-black/75 font-medium">
                  <li>
                    <strong className="block text-brand-dark mb-0.5">Heuristic Inspection (5 evaluators)</strong>
                    Independent review against Nielsen's 10 heuristics on a 0–4 severity scale, followed by joint consolidation (56 issues found).
                  </li>
                  <li>
                    <strong className="block text-brand-dark mb-0.5">Think-Aloud Testing (6 students)</strong>
                    Moderated 30-minute sessions covering 5 core tasks—locating the calendar, exporting, creating a recurring event, viewing details, and deleting—plus a SUS survey (42 issues found).
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-3 bg-white p-7 rounded-3xl border border-black/8 flex flex-col">
              <h3 className="text-lg font-bold mb-1">Usability Issues by Task Area</h3>
              <p className="text-xs text-black/50 font-medium mb-6">
                Most violated heuristics: Recognition Rather Than Recall (9), Aesthetic & Minimalist Design (6), Flexibility & Efficiency (5).
              </p>
              <div className="h-[240px] w-full flex-1">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={issuesByTask} layout="vertical" margin={{ top: 0, right: 20, left: 10, bottom: 0 }}>
                    <XAxis type="number" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#666" }} />
                    <YAxis
                      type="category"
                      dataKey="task"
                      width={120}
                      axisLine={false}
                      tickLine={false}
                      tick={{ fontSize: 12, fill: "#333", fontWeight: 600 }}
                    />
                    <Tooltip
                      cursor={{ fill: "#f4f4f5" }}
                      contentStyle={{ borderRadius: "12px", border: "none", boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}
                    />
                    <Bar dataKey="issues" radius={[0, 6, 6, 0]} barSize={22}>
                      {issuesByTask.map((entry, idx) => (
                        <Cell key={idx} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </section>

        {/* Key Findings & Proposed Redesigns */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Critical Findings & Redesigns</h2>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-3xl border border-black/8">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-5 h-5 text-red-600 shrink-0" />
                <h3 className="text-xl font-bold">1. Event Creation Modal</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6 text-black/75 font-medium leading-relaxed">
                <div>
                  <p className="text-xs font-bold text-black/45 mb-2">Observed Problems</p>
                  <p>
                    Half of participants failed Task 3. Recurring event creation was completely broken on Mac/Safari (severity 4). Elsewhere, key controls were buried behind "Show more...", dates required five dropdown spinners, duration in minutes was mistaken for an end hour, and "Repeat weekly, creating altogether" confused testers.
                  </p>
                </div>
                <div className="bg-teal-50/60 p-5 rounded-2xl">
                  <p className="text-xs font-bold text-teal-800 mb-2">Proposed Redesign</p>
                  <p className="text-black/80">
                    Replaced spinners with a clean start/end date and time grid, surfaced all core controls by default, auto-calculated duration into a read-only chip, and added a plain-language repeat toggle with a live preview (e.g., <em>"Creates 3 events: Jun 25, Jul 2, Jul 9"</em>).
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-black/8">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-5 h-5 text-brand-orange shrink-0" />
                <h3 className="text-xl font-bold">2. Import & Export Workflow</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6 text-black/75 font-medium leading-relaxed">
                <div>
                  <p className="text-xs font-bold text-black/45 mb-2">Observed Problems</p>
                  <p>
                    Almost every student treated MyCourses as a one-time sync tool ("export-and-abandon"), yet the export link was hidden at the bottom of the page, routed through a redundant intermediate page, used jargon ("Export ical"), and gave zero confirmation after exporting.
                  </p>
                </div>
                <div className="bg-teal-50/60 p-5 rounded-2xl">
                  <p className="text-xs font-bold text-teal-800 mb-2">Proposed Redesign</p>
                  <p className="text-black/80">
                    Moved Export/Import to the top toolbar next to "New event", opening a tabbed modal directly in context. Grouped choices into scannable radio cards, clarified live links vs. file snapshots, and renamed actions to "Export calendar file" and "Copy calendar link".
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-black/8">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle2 className="w-5 h-5 text-teal-700 shrink-0" />
                <h3 className="text-xl font-bold">3. Discoverability & What Already Works</h3>
              </div>
              <p className="text-black/75 font-medium leading-relaxed">
                The full calendar is currently tucked under the Profile menu instead of the top navigation bar, and a large decorative banner pushes the month grid below the fold. At the same time, testing confirmed strong foundations worth keeping: color-coded event dots, straightforward event detail popups, and a delete confirmation dialog that students consistently appreciated as a safety net.
              </p>
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section>
          <div className="bg-brand-dark text-white p-8 md:p-12 rounded-[2.5rem]">
            <h2 className="text-3xl font-bold mb-6 text-teal-300">Reflection</h2>
            <div className="space-y-4 text-white/80 font-medium leading-relaxed text-lg">
              <p>
                Running both inspection and user testing side by side showed why neither method is enough on its own. Independent heuristic reviews caught structural flaws and unclear wording that participants rarely articulated aloud, while moderated testing exposed real-world breakdowns—like how disorienting missing export feedback felt and the platform-specific Mac/Safari bug.
              </p>
              <p>
                Pilot testing also paid off immediately: it surfaced a privacy issue in asking students to import their personal calendars during a screen recording, leading us to drop that task from live testing and tighten the remaining instructions. While our small student sample (n=6) limits broad generalization, the strong overlap between expert findings and observed failures gave clear priority to what the development team should fix first.
              </p>
            </div>
            <p className="text-sm text-white/45 mt-8 pt-6 border-t border-white/10 font-medium">
              Group 5: Erik Gelcich, Tiia Mäkinen, Riyasdeen Samsudeen, Markus Syrjälä, Yan Weining · CS-E5230
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
