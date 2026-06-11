import { Card } from '../ui/Card';
import { mockAIRecommendations } from '../../data/mockData';
import { Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function AIRecommendations() {
  return (
    <Card className="h-full" delay={0.5}>
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 bg-primaryLight text-primary rounded-xl border border-primary/20 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
          <Sparkles size={20} />
        </div>
        <h2 className="text-lg font-bold text-text">AI Insights</h2>
      </div>
      
      <div className="space-y-4">
        {mockAIRecommendations.map((rec, idx) => (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 + (idx * 0.1) }}
            key={rec.id} 
            className="p-4 bg-white rounded-xl border border-cardBorder hover:border-primary/50 hover:shadow-md transition-all cursor-pointer group shadow-sm"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-semibold text-text text-sm group-hover:text-primary transition-colors">{rec.title}</h3>
              <span className={`text-[10px] uppercase font-bold px-2.5 py-0.5 rounded-full border ${
                rec.impact === 'High' ? 'bg-accent/10 text-accent border-accent/20' :
                rec.impact === 'Medium' ? 'bg-warning/10 text-warning border-warning/20' :
                'bg-slate-100 text-slate-500 border-slate-200'
              }`}>
                {rec.impact} Impact
              </span>
            </div>
            <p className="text-xs text-textMuted leading-relaxed mb-3">
              {rec.description}
            </p>
            <div className="flex items-center text-xs font-medium text-primary group-hover:text-primaryHover transition-colors">
              Apply Suggestion <ArrowRight size={14} className="ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </div>
          </motion.div>
        ))}
      </div>
    </Card>
  );
}
