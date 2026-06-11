import { useState } from 'react';
import { X, CheckCircle2, ChevronRight, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CampaignModalProps {
  onClose: () => void;
}

export function CampaignModal({ onClose }: CampaignModalProps) {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(s => Math.min(s + 1, 3));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3 }}
        className="bg-card border border-cardBorder w-full max-w-2xl rounded-2xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden"
      >
        <div className="flex items-center justify-between p-6 border-b border-cardBorder bg-slate-50">
          <div>
            <h2 className="text-xl font-bold text-text flex items-center gap-2">
              Create New Campaign
            </h2>
            <p className="text-sm text-textMuted mt-1">Configure your ad settings and budget.</p>
          </div>
          <button onClick={onClose} className="text-textMuted hover:text-danger p-1 rounded-md hover:bg-danger/10 transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Progress Stepper */}
        <div className="flex items-center justify-between px-8 py-4 bg-white border-b border-cardBorder/50">
          {[1, 2, 3].map((s) => (
             <div key={s} className="flex items-center">
               <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                 step === s ? 'bg-primary text-white shadow-[0_0_10px_rgba(16,185,129,0.3)]' :
                 step > s ? 'bg-primary/20 text-primary' :
                 'bg-slate-100 text-slate-400'
               }`}>
                 {step > s ? <CheckCircle2 size={16} /> : s}
               </div>
               <span className={`ml-3 text-sm font-medium ${step >= s ? 'text-text' : 'text-textMuted'}`}>
                 {s === 1 ? 'Details' : s === 2 ? 'Budget' : 'Creative'}
               </span>
               {s !== 3 && <div className={`w-16 h-px mx-4 ${step > s ? 'bg-primary' : 'bg-slate-200'}`} />}
             </div>
          ))}
        </div>
        
        <div className="p-6 overflow-y-auto flex-1 custom-scrollbar bg-white relative">
          <AnimatePresence mode="wait">
            <motion.form 
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-textMuted mb-1.5">Campaign Name</label>
                    <input type="text" className="input-field" placeholder="e.g. Summer Sale 2026" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-textMuted mb-1.5">Campaign Goal</label>
                      <select className="input-field">
                        <option>Brand Awareness</option>
                        <option>Website Traffic</option>
                        <option>Lead Generation</option>
                        <option>Sales</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-textMuted mb-1.5">Platform</label>
                      <select className="input-field">
                        <option>Google Ads</option>
                        <option>Facebook Ads</option>
                        <option>Instagram Ads</option>
                        <option>LinkedIn Ads</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-textMuted mb-1.5">Daily Budget ($)</label>
                      <input type="number" className="input-field" placeholder="0.00" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-textMuted mb-1.5">Total Budget ($)</label>
                      <input type="number" className="input-field" placeholder="0.00" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-textMuted mb-1.5">Start Date</label>
                      <input type="date" className="input-field text-textMuted" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-textMuted mb-1.5">End Date</label>
                      <input type="date" className="input-field text-textMuted" />
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-textMuted mb-1.5">Ad Headline</label>
                    <input type="text" className="input-field" placeholder="Catchy headline here..." />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-textMuted mb-1.5">Ad Description</label>
                    <textarea className="input-field h-24 resize-none" placeholder="Write a compelling description..."></textarea>
                  </div>
                </div>
              )}
            </motion.form>
          </AnimatePresence>
        </div>
        
        <div className="p-6 border-t border-cardBorder flex justify-between gap-3 bg-slate-50">
          <button 
            onClick={step === 1 ? onClose : prevStep} 
            className="btn-secondary flex items-center gap-2"
          >
            {step > 1 && <ChevronLeft size={16} />}
            {step === 1 ? 'Cancel' : 'Back'}
          </button>
          
          <button 
            onClick={step === 3 ? onClose : nextStep}
            className="btn-primary shadow-[0_0_15px_rgba(16,185,129,0.4)] flex items-center gap-2"
          >
            {step === 3 ? 'Launch Campaign' : 'Continue'}
            {step !== 3 && <ChevronRight size={16} />}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
