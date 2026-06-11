import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, Target, Zap, TrendingUp, Users, CheckCircle2, ChevronRight, Activity, ScanSearch } from 'lucide-react';
import type { CampaignGoal, AIAnalysisResult } from '../../utils/aiMockEngine';
import { generateMockAnalysis } from '../../utils/aiMockEngine';

interface AIAnalyzerModalProps {
  onClose: () => void;
}

export function AIAnalyzerModal({ onClose }: AIAnalyzerModalProps) {
  const [selectedGoal, setSelectedGoal] = useState<CampaignGoal | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AIAnalysisResult | null>(null);

  const goals: { id: CampaignGoal; icon: React.ReactNode; desc: string }[] = [
    { id: 'Brand Awareness', icon: <Sparkles size={24} />, desc: 'Maximize impressions and brand recall.' },
    { id: 'Lead Generation', icon: <Users size={24} />, desc: 'Capture high-quality B2B or B2C leads.' },
    { id: 'Website Traffic', icon: <Zap size={24} />, desc: 'Drive volume to your landing pages.' },
    { id: 'Sales', icon: <TrendingUp size={24} />, desc: 'Optimize for conversions and ROAS.' },
  ];

  const handleAnalyze = (goal: CampaignGoal) => {
    setSelectedGoal(goal);
    setIsAnalyzing(true);
    setResult(null);

    // Simulate AI thinking time
    setTimeout(() => {
      setResult(generateMockAnalysis(goal));
      setIsAnalyzing(false);
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-card border border-cardBorder w-full max-w-4xl rounded-2xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden"
      >
        <div className="flex items-center justify-between p-6 border-b border-cardBorder bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 text-primary rounded-xl border border-primary/20 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
              <ScanSearch size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-text">AI Campaign Analyzer</h2>
              <p className="text-sm text-textMuted mt-1">Simulate strategy outcomes based on millions of data points.</p>
            </div>
          </div>
          <button onClick={onClose} className="text-textMuted hover:text-danger p-1 rounded-md hover:bg-danger/10 transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="p-6 overflow-y-auto flex-1 custom-scrollbar bg-slate-50/50">
          <AnimatePresence mode="wait">
            {!selectedGoal && !isAnalyzing && !result && (
              <motion.div 
                key="selection"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="space-y-6 py-8"
              >
                <div className="text-center max-w-lg mx-auto mb-8">
                  <h3 className="text-2xl font-bold text-text mb-2">What is your primary objective?</h3>
                  <p className="text-textMuted">Select a goal below to generate a data-backed campaign strategy and performance estimate.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                  {goals.map((g) => (
                    <button 
                      key={g.id}
                      onClick={() => handleAnalyze(g.id)}
                      className="flex items-start gap-4 p-6 bg-white border border-cardBorder rounded-2xl hover:border-primary hover:shadow-lg transition-all text-left group"
                    >
                      <div className="p-3 bg-slate-50 text-textMuted rounded-xl group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                        {g.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-text text-lg mb-1">{g.id}</h4>
                        <p className="text-sm text-textMuted">{g.desc}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {isAnalyzing && (
              <motion.div 
                key="analyzing"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-20 space-y-8"
              >
                <div className="relative">
                  <div className="w-24 h-24 border-4 border-primary/20 rounded-full border-t-primary animate-spin"></div>
                  <div className="absolute inset-0 flex items-center justify-center text-primary">
                    <Sparkles size={32} className="animate-pulse" />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-text mb-2">Analyzing Historical Data...</h3>
                  <p className="text-sm text-textMuted max-w-xs mx-auto">Cross-referencing `{selectedGoal}` strategies with performance metrics across 50,000+ campaigns.</p>
                </div>
              </motion.div>
            )}

            {result && (
              <motion.div 
                key="result"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                {/* Header Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-5 rounded-2xl border border-cardBorder shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5"><TrendingUp size={64} /></div>
                    <p className="text-sm text-textMuted font-medium mb-1">Estimated ROI</p>
                    <p className="text-3xl font-black text-primary">{result.estimatedROI}</p>
                  </div>
                  <div className="bg-white p-5 rounded-2xl border border-cardBorder shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5"><Target size={64} /></div>
                    <p className="text-sm text-textMuted font-medium mb-1">Recommended Budget</p>
                    <p className="text-2xl font-bold text-text">{result.recommendedBudget}</p>
                  </div>
                  <div className="bg-gradient-to-br from-primary to-emerald-700 p-5 rounded-2xl shadow-lg text-white">
                    <p className="text-sm text-emerald-100 font-medium mb-1">Strategy Goal</p>
                    <p className="text-2xl font-bold flex items-center gap-2">
                      <Sparkles size={20} /> {selectedGoal}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Left Column */}
                  <div className="lg:col-span-2 space-y-6">
                    {/* Key Metrics */}
                    <div className="bg-white p-6 rounded-2xl border border-cardBorder shadow-sm">
                      <h3 className="text-lg font-bold text-text mb-4 flex items-center gap-2">
                        <Activity size={20} className="text-primary" /> Projected Performance
                      </h3>
                      <div className="grid grid-cols-3 gap-4">
                        {result.keyMetrics.map((m, i) => (
                          <div key={i} className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                            <p className="text-xs text-textMuted mb-1">{m.label}</p>
                            <div className="flex items-end gap-2">
                              <p className="text-xl font-bold text-text">{m.value}</p>
                              <span className={`text-xs font-bold mb-1 ${m.trend.startsWith('+') && !m.trend.includes('CPA') && !m.trend.includes('CPC') ? 'text-primary' : 'text-primary'}`}>
                                {m.trend}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Audience Insights */}
                    <div className="bg-white p-6 rounded-2xl border border-cardBorder shadow-sm">
                      <h3 className="text-lg font-bold text-text mb-4 flex items-center gap-2">
                        <Users size={20} className="text-accent" /> Target Audience Insights
                      </h3>
                      <ul className="space-y-3">
                        {result.audienceInsights.map((insight, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-text">
                            <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
                            <span>{insight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6">
                    {/* Platform Fit */}
                    <div className="bg-white p-6 rounded-2xl border border-cardBorder shadow-sm">
                      <h3 className="text-lg font-bold text-text mb-4">Platform Fit</h3>
                      <div className="space-y-4">
                        {result.platformFit.map((plat, i) => (
                          <div key={i}>
                            <div className="flex justify-between text-sm mb-1.5">
                              <span className="font-medium text-text">{plat.platform}</span>
                              <span className="text-textMuted">{plat.score}%</span>
                            </div>
                            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                              <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: `${plat.score}%` }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className={`h-full rounded-full ${plat.score > 80 ? 'bg-primary' : plat.score > 50 ? 'bg-accent' : 'bg-slate-300'}`}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* AI Suggestions */}
                    <div className="bg-slate-900 p-6 rounded-2xl shadow-lg relative overflow-hidden">
                      <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
                      <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2 relative z-10">
                        <Sparkles size={20} className="text-primary" /> AI Action Items
                      </h3>
                      <ul className="space-y-3 relative z-10">
                        {result.aiSuggestions.map((sug, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                            <ChevronRight size={16} className="text-primary shrink-0 mt-0.5" />
                            <span>{sug}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="p-4 border-t border-cardBorder flex justify-between bg-white">
          {result ? (
            <button 
              onClick={() => { setResult(null); setSelectedGoal(null); }}
              className="btn-secondary text-sm px-6"
            >
              Analyze Another Goal
            </button>
          ) : (
            <div></div> // Spacer
          )}
          <button onClick={onClose} className="btn-primary text-sm px-6">
            {result ? 'Done' : 'Cancel'}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
