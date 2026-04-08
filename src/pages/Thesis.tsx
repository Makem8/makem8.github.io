import { motion } from "motion/react";
import { ArrowLeft, BookOpen, ExternalLink, GraduationCap, BrainCircuit, Users } from "lucide-react";
import { Link } from "react-router-dom";

export default function Thesis() {
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
            <span className="px-3 py-1 bg-blue-500/10 text-blue-600 rounded-full text-xs font-bold tracking-wider uppercase">Academic Thesis</span>
            <span className="text-sm text-black/50 font-medium">UX Research & Ethics</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 tracking-tighter">
            The Role of UX Design in Social Media
          </h1>
          <p className="text-2xl text-black/50 font-medium mb-12">
            A Case Study on TikTok's Engagement Strategies
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://jyx.jyu.fi/jyx/Record/jyx_123456789_92809" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-brand-dark text-white px-8 py-4 rounded-full font-bold hover:bg-blue-600 hover:-translate-y-1 transition-all shadow-lg hover:shadow-blue-600/25 flex items-center gap-2"
            >
              Read Full Thesis <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* Abstract Section */}
        <section className="mb-24">
          <div className="bg-white p-8 md:p-12 rounded-[3rem] border border-black/5 shadow-xl shadow-black/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-bl-full -z-0" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 text-blue-600 flex items-center justify-center">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold">Abstract</h2>
              </div>
              
              <div className="prose prose-lg prose-p:text-black/70 prose-p:leading-relaxed max-w-none font-medium">
                <p>
                  The role of user experience (UX) design in social media can be a controversial topic, especially when its purpose is to increase user engagement and engagement with the platform. The purpose of this thesis is to examine the relationship between social media, UX design and engagement, focusing specifically on the TikTok platform as a case study.
                </p>
                <p>
                  The study analyzes how TikTok uses UX design to keep users engaged. To investigate this, the thesis examines the features of the TikTok platform, such as personalized pages, addictive algorithms, and seamless transitions between content. Design principles are examined from the perspective of psychological theory in order to clarify their underlying logic. The research is based on previous studies and news articles on the topic.
                </p>
                <p>
                  The studies used found significant correlations with TikTok's UX design principles and user engagement. The For You page (FYP), as well as deeper online community building experiences had a strong impact on user engagement. TikTok's "For You" page is based on users having very limited options. This eases the user's cognitive effort in using the platform, which thus enables longer use of the platform. The user experience of TikTok is therefore very effortless on a cognitive level.
                </p>
                <p>
                  The thesis is not only limited to technical aspects, but also extensively deals with the ethical dimensions of UX design in social media. Issues such as mental health and digital addiction are raised, explored, and offered solutions. The final section introduces the concept of ethical UX design and offers practical strategies for UX designers to promote more responsible and sustainable social media experiences.
                </p>
                <p>
                  This research not only provides an in-depth understanding of the TikTok platform, but also provides valuable insights for UX designers, social media designers, and policy makers who strive to develop a healthier and more ethical digital ecosystem. The results of the study can serve as a basis for future studies and practical measures that promote a positive user experience and responsible design in the digital environment.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Themes */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Key Themes Explored</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#F4F1ED] p-8 rounded-3xl">
              <BrainCircuit className="w-8 h-8 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold mb-3">Cognitive Effort</h3>
              <p className="text-black/70 font-medium">
                Analyzing how limited options on the "For You" page reduce cognitive load, enabling prolonged, effortless platform usage.
              </p>
            </div>
            <div className="bg-[#F4F1ED] p-8 rounded-3xl">
              <Users className="w-8 h-8 text-brand-orange mb-6" />
              <h3 className="text-xl font-bold mb-3">Engagement & Community</h3>
              <p className="text-black/70 font-medium">
                Examining the strong impact of personalized content and online community building on user retention and engagement.
              </p>
            </div>
            <div className="bg-[#F4F1ED] p-8 rounded-3xl">
              <GraduationCap className="w-8 h-8 text-brand-dark mb-6" />
              <h3 className="text-xl font-bold mb-3">Ethical UX Design</h3>
              <p className="text-black/70 font-medium">
                Addressing mental health and digital addiction, offering practical strategies for designers to promote responsible social media experiences.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
