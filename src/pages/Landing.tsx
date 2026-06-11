import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, Target, Zap, Bot, Shield } from 'lucide-react';

export function Landing() {
  return (
    <div className="relative overflow-hidden flex flex-col">
      {/* Background blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-emerald-500/10 rounded-full mix-blend-multiply filter blur-[100px] animate-blob z-0"></div>
      <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-teal-500/10 rounded-full mix-blend-multiply filter blur-[100px] animate-blob z-0" style={{ animationDelay: '2s' }}></div>

      {/* --- HERO SECTION --- */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 text-center min-h-[90vh] flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm mb-8 border border-primary/20">
            <SparklesIcon /> BizLeap Analyzer 2.0 is live
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-text mb-6 tracking-tight leading-tight">
            Optimize your campaigns with <br className="hidden md:block" />
            <span className="text-gradient">Artificial Intelligence</span>
          </h1>
          <p className="text-lg md:text-xl text-textMuted mb-10 max-w-2xl mx-auto leading-relaxed">
            Stop guessing. Start growing. BizLeap analyzes your competitors, optimizes your budgets, and scales your ad campaigns automatically using state-of-the-art AI.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/dashboard" className="btn-primary text-lg px-8 py-4 w-full sm:w-auto flex items-center justify-center gap-2 group">
              Start Your Free Trial
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <button onClick={() => alert("Thanks for your interest! We'll be in touch to schedule your demo.")} className="btn-secondary text-lg px-8 py-4 w-full sm:w-auto bg-white border border-cardBorder">
              Book a Demo
            </button>
          </div>
        </motion.div>

        {/* Hero Dashboard Preview */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-20 w-full max-w-5xl mx-auto relative perspective-1000"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 bottom-0 h-32 top-auto"></div>
          <div className="glass-card p-2 rounded-t-3xl border-b-0 border-x border-t shadow-2xl bg-white/80">
             <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000" alt="Dashboard Preview" className="w-full rounded-t-2xl object-cover opacity-90 h-[400px] object-top" />
          </div>
        </motion.div>
      </section>

      {/* --- BENTO GRID FEATURES --- */}
      <section id="features" className="relative z-10 py-32 bg-slate-50 border-y border-cardBorder">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-text mb-4">Everything you need to <span className="text-primary">win</span></h2>
            <p className="text-textMuted text-lg max-w-2xl mx-auto">Powerful tools designed for modern marketers. All in one beautiful interface.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
             {/* Feature 1 - Large */}
            <motion.div whileHover={{ y: -5 }} className="glass-card md:col-span-2 p-8 flex flex-col justify-end relative bg-white/90 group">
              <div className="absolute top-6 right-6 p-3 bg-primary/10 rounded-xl text-primary"><Bot size={32} /></div>
              <h3 className="text-2xl font-bold text-text mb-2 group-hover:text-primary transition-colors">AI-Powered Insights</h3>
              <p className="text-textMuted max-w-md">Our neural engine analyzes thousands of ad variations to tell you exactly what converts best before you spend a dime.</p>
            </motion.div>
            
            {/* Feature 2 */}
            <motion.div whileHover={{ y: -5 }} className="glass-card p-8 flex flex-col justify-end bg-white/90 group">
              <div className="absolute top-6 right-6 p-3 bg-accent/10 rounded-xl text-accent"><BarChart3 size={32} /></div>
              <h3 className="text-xl font-bold text-text mb-2">Real-time Analytics</h3>
              <p className="text-textMuted text-sm">Track every click, conversion, and penny spent in real time.</p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div whileHover={{ y: -5 }} className="glass-card p-8 flex flex-col justify-end bg-white/90 group">
              <div className="absolute top-6 right-6 p-3 bg-purple-500/10 rounded-xl text-purple-500"><Target size={32} /></div>
              <h3 className="text-xl font-bold text-text mb-2">Smart Targeting</h3>
              <p className="text-textMuted text-sm">Find your perfect audience automatically across all platforms.</p>
            </motion.div>

            {/* Feature 4 - Large */}
            <motion.div whileHover={{ y: -5 }} className="glass-card md:col-span-2 p-8 flex flex-col justify-end bg-white/90 group">
              <div className="absolute top-6 right-6 p-3 bg-warning/10 rounded-xl text-warning"><Zap size={32} /></div>
              <h3 className="text-2xl font-bold text-text mb-2">One-Click Optimization</h3>
              <p className="text-textMuted max-w-md">Pause underperforming ads and scale winners instantly with our intelligent automation rules.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- PRICING SECTION --- */}
      <section id="pricing" className="relative z-10 py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-text mb-4">Simple, transparent pricing</h2>
            <p className="text-textMuted text-lg">No hidden fees. Cancel anytime.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard title="Starter" price="$49" features={['Up to 5 Campaigns', 'Basic AI Insights', 'Email Support']} />
            <PricingCard title="Pro" price="$99" features={['Unlimited Campaigns', 'Advanced AI Optimization', 'Competitor Analysis', 'Priority Support']} isPopular />
            <PricingCard title="Enterprise" price="$299" features={['Everything in Pro', 'Custom AI Models', 'Dedicated Success Manager', 'API Access']} />
          </div>
        </div>
      </section>
    </div>
  );
}

function PricingCard({ title, price, features, isPopular }: { title: string, price: string, features: string[], isPopular?: boolean }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }} 
      className={`glass-card p-8 flex flex-col bg-white ${isPopular ? 'border-primary border-2 shadow-xl relative' : ''}`}
    >
      {isPopular && <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Most Popular</span>}
      <h3 className="text-xl font-bold text-text mb-2">{title}</h3>
      <div className="mb-6"><span className="text-4xl font-extrabold text-text">{price}</span><span className="text-textMuted">/mo</span></div>
      <ul className="space-y-4 mb-8 flex-1">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-3 text-sm text-text">
             <Shield size={16} className="text-primary" /> {f}
          </li>
        ))}
      </ul>
      <Link to="/login" className={`block text-center ${isPopular ? 'btn-primary w-full' : 'btn-secondary w-full'}`}>Get Started</Link>
    </motion.div>
  );
}

function SparklesIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
    </svg>
  );
}
