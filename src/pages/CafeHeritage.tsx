import { motion } from "motion/react";
import { ArrowLeft, MapPin, Calendar, Coffee, Users, Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import layoutMapImg from "../assets/Screenshot 2026-04-07 202124.png";

const visitReasons = [
  { name: "Meeting a friend", value: 10 },
  { name: "Good location", value: 8 },
  { name: "Interior design", value: 7 },
  { name: "Good products", value: 6 },
  { name: "Relaxing", value: 6 },
  { name: "Working", value: 4 },
  { name: "Culture", value: 2 },
  { name: "Studying", value: 1 },
  { name: "Coffee", value: 1 },
];

const satisfactionData = [
  { name: "Satisfied", value: 10, color: "#E05D3A" },
  { name: "Neutral/Dissatisfied", value: 5, color: "#FFFFFF" },
];

const returnData = [
  { name: "Likely", value: 12, color: "#E05D3A" },
  { name: "Unlikely", value: 2, color: "#FFFFFF" },
];

const cultureBeforeData = [
  { name: "Influenced", value: 3, color: "#E05D3A" },
  { name: "Not Influenced", value: 4, color: "#FFFFFF" },
  { name: "Neutral", value: 3, color: "#FCA5A5" },
];

const cultureAfterData = [
  { name: "Influenced", value: 5, color: "#E05D3A" },
  { name: "Not Influenced", value: 3, color: "#FFFFFF" },
  { name: "Neutral", value: 5, color: "#FCA5A5" },
];

export default function CafeHeritage() {
  return (
    <div className="pt-24 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-black/50 hover:text-brand-orange transition-colors mb-12">
          <ArrowLeft className="w-4 h-4" /> Back to Work
        </Link>

        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-brand-orange/10 text-brand-orange rounded-full text-xs font-bold tracking-wider uppercase">Case Study</span>
            <span className="text-sm text-black/50 font-medium">Group 7</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 uppercase tracking-tighter">
            Heritage <br/>
            <span className="text-3xl md:text-5xl text-black/40">Customer Scene Investigation</span>
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 bg-white rounded-3xl border border-black/5 mt-12">
            <div>
              <h3 className="text-lg font-bold mb-4">About Cafe Heritage</h3>
              <ul className="space-y-3 text-black/70">
                <li className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <span>Founded in 2024</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <span>Located in Frederikinkatu 61A, Helsinki</span>
                </li>
                <li className="flex items-start gap-3">
                  <Coffee className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <span>Coffeeshop focused on art, exhibition changes every month. Open everyday.</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Research Methods</h3>
              <ul className="space-y-4 text-black/70">
                <li>
                  <strong className="block text-brand-dark mb-1">Semi-structured interviews (10-15min)</strong>
                  Staff & manager interview, 5x customer interviews
                </li>
                <li>
                  <strong className="block text-brand-dark mb-1">Ethnography</strong>
                  Observational research in the cafe environment
                </li>
                <li>
                  <strong className="block text-brand-dark mb-1">QR-code survey (5min)</strong>
                  16x customer surveys collected
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* User Groups & Data */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-8">User Groups & Motivations</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <p className="text-xl leading-relaxed text-black/70 mb-6">
                Cafes user groups differ significantly in terms of <strong className="text-brand-dark">age, gender, internationality,</strong> and <strong className="text-brand-dark">reason for visit.</strong>
              </p>
            </div>
            <div className="lg:col-span-2 bg-white p-6 rounded-3xl border border-black/5">
              <h3 className="text-sm font-bold text-center mb-6 uppercase tracking-wider text-black/50">Why are you visiting Cafe Heritage today?</h3>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={visitReasons} margin={{ top: 0, right: 0, left: -20, bottom: 60 }}>
                    <XAxis dataKey="name" angle={-45} textAnchor="end" interval={0} tick={{ fontSize: 12, fill: '#666' }} axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#666' }} />
                    <Tooltip cursor={{ fill: '#f4f4f5' }} contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                    <Bar dataKey="value" fill="#E05D3A" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </section>

        {/* Pros and Cons */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-8">Pros and Cons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white p-8 rounded-3xl border border-black/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 rounded-bl-full -z-0" />
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center mb-6">
                  <Plus className="w-5 h-5" />
                </div>
                <blockquote className="text-lg italic text-black/80 mb-6">
                  "Customer service is great and a big part of why the cafe is so attractive."
                </blockquote>
                <blockquote className="text-lg italic text-black/80">
                  "Customers appreciate the overall diversity of the place from the variety of people and events to the ever-changing art on display each month."
                </blockquote>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-3xl border border-black/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-black/5 rounded-bl-full -z-0" />
              <div className="relative z-10">
                <div className="w-10 h-10 rounded-full bg-black/5 text-black flex items-center justify-center mb-6">
                  <Minus className="w-5 h-5" />
                </div>
                <blockquote className="text-lg italic text-black/80 mb-6">
                  "Sometimes the place is a bit crowded. There could be more high tables to work, better space allocation for the seats."
                </blockquote>
                <blockquote className="text-lg italic text-black/80">
                  "There could be more events at the cafe."
                </blockquote>
              </div>
            </div>
          </div>

          {/* Satisfaction Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-brand-dark text-white p-10 rounded-3xl">
            <div className="flex flex-col items-center">
              <h3 className="text-center font-medium mb-6 max-w-xs">How satisfied are you with your experience at Heritage Cafe?</h3>
              <div className="w-48 h-48 relative">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={satisfactionData} cx="50%" cy="50%" innerRadius={0} outerRadius={80} dataKey="value" stroke="none">
                      {satisfactionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="text-2xl font-bold text-white drop-shadow-md">10/15</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-center font-medium mb-6 max-w-xs">How likely are you to visit Heritage Cafe again?</h3>
              <div className="w-48 h-48 relative">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={returnData} cx="50%" cy="50%" innerRadius={0} outerRadius={80} dataKey="value" stroke="none">
                      {returnData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="text-2xl font-bold text-white drop-shadow-md">12/14</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Art, Culture and Space */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Art, Culture and Space</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-brand-orange/10 text-brand-orange flex items-center justify-center shrink-0 mt-1">
                  <Plus className="w-4 h-4" />
                </div>
                <div>
                  <blockquote className="text-lg italic text-black/80 mb-4">
                    "The atmosphere feels welcoming. Calm and international space with a good mix of spaces for working or relaxing."
                  </blockquote>
                  <blockquote className="text-lg italic text-black/80">
                    "Only a few people actively engage with the art. However the art is seen as a positive feature, especially downstairs."
                  </blockquote>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-black/5 text-black flex items-center justify-center shrink-0 mt-1">
                  <Minus className="w-4 h-4" />
                </div>
                <blockquote className="text-lg italic text-black/80">
                  "Some visitors found the gallery too dark and suggested integrating the art throughout the café to enhance the experience and highlight local artists."
                </blockquote>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-black/5">
              <h3 className="text-sm font-bold text-center mb-6 uppercase tracking-wider text-black/50">
                How much did cultural aspects influence your decision/experience?
              </h3>
              <div className="flex justify-center gap-8">
                <div className="text-center">
                  <div className="w-32 h-32 mb-2">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie data={cultureBeforeData} cx="50%" cy="50%" innerRadius={0} outerRadius={50} dataKey="value" stroke="none">
                          {cultureBeforeData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider">Before Visiting</span>
                </div>
                <div className="text-center">
                  <div className="w-32 h-32 mb-2">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie data={cultureAfterData} cx="50%" cy="50%" innerRadius={0} outerRadius={50} dataKey="value" stroke="none">
                          {cultureAfterData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider">After Visiting</span>
                </div>
              </div>
            </div>
          </div>

          {/* Layout */}
          <div className="bg-[#F4F1ED] p-8 md:p-12 rounded-3xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6">The Layout</h3>
                <p className="text-lg leading-relaxed text-black/80">
                  The café is divided into two spaces: the upper floor is bright and has a more traditional café atmosphere, while the lower floor is darker and more focused on art.
                </p>
              </div>
              <div className="bg-white p-2 rounded-2xl border border-black/10 shadow-sm overflow-hidden">
                <img 
                  src={layoutMapImg} 
                  alt="Cafe Heritage Layout Map" 
                  className="w-full h-auto rounded-xl"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
