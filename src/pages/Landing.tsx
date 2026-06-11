import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, BarChart3, Target } from 'lucide-react';

export function Landing() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex flex-col items-center justify-center">
      {/* Background blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-emerald-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
      <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-teal-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-green-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob" style={{ animationDelay: '4s' }}></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-primary/20 mb-8 text-primary font-medium text-sm">
            <Sparkles size={16} />
            <span>BizLeap Competitor Analyzer</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-text mb-6 tracking-tight">
            The Future of <br className="hidden md:block" />
            <span className="text-gradient">Ad Campaign Management</span>
          </h1>
          
          <p className="text-lg md:text-xl text-textMuted max-w-2xl mx-auto mb-10 leading-relaxed">
            Harness the power of AI to optimize your ad spend, reach the perfect audience, and skyrocket your ROI across all major platforms.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/dashboard" className="btn-primary text-lg px-8 py-4 flex items-center gap-2 group w-full sm:w-auto">
              Open Dashboard
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 text-left"
        >
          {[
            { icon: <Target className="text-accent" size={32} />, title: "Precision Targeting", desc: "AI-driven insights to find the exact audience for your products." },
            { icon: <BarChart3 className="text-primary" size={32} />, title: "Real-time Analytics", desc: "Monitor your spend and ROI with beautiful, lightning-fast charts." },
            { icon: <Sparkles className="text-purple-500" size={32} />, title: "Smart Suggestions", desc: "Get actionable recommendations to improve active campaigns instantly." }
          ].map((feature, idx) => (
            <div key={idx} className="glass-card p-6 hover:border-primary/50 transition-colors">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-text mb-2">{feature.title}</h3>
              <p className="text-textMuted text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
