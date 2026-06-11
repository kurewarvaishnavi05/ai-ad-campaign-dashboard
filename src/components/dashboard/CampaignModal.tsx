import { X } from 'lucide-react';
import { motion } from 'framer-motion';

interface CampaignModalProps {
  onClose: () => void;
}

export function CampaignModal({ onClose }: CampaignModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-md p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3 }}
        className="bg-card border border-cardBorder w-full max-w-2xl rounded-2xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden"
      >
        <div className="flex items-center justify-between p-6 border-b border-cardBorder bg-slate-50">
          <h2 className="text-xl font-bold text-text flex items-center gap-2">
            <div className="w-2 h-6 bg-primary rounded-full"></div>
            Create New Campaign
          </h2>
          <button onClick={onClose} className="text-textMuted hover:text-danger p-1 rounded-md hover:bg-danger/10 transition-colors">
            <X size={20} />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto flex-1 custom-scrollbar">
          <form className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-primary uppercase tracking-wider">General Information</h3>
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

            <hr className="border-cardBorder" />

            <div className="space-y-4">
              <h3 className="text-xs font-bold text-primary uppercase tracking-wider">Budget & Schedule</h3>
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
                  <input type="date" className="input-field [&::-webkit-calendar-picker-indicator]:filter-[invert(1)]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-textMuted mb-1.5">End Date</label>
                  <input type="date" className="input-field [&::-webkit-calendar-picker-indicator]:filter-[invert(1)]" />
                </div>
              </div>
            </div>

            <hr className="border-cardBorder" />

            <div className="space-y-4">
              <h3 className="text-xs font-bold text-primary uppercase tracking-wider">Ad Creative</h3>
              <div>
                <label className="block text-sm font-medium text-textMuted mb-1.5">Ad Headline</label>
                <input type="text" className="input-field" placeholder="Catchy headline here..." />
              </div>
              <div>
                <label className="block text-sm font-medium text-textMuted mb-1.5">Ad Description</label>
                <textarea className="input-field h-24 resize-none" placeholder="Write a compelling description..."></textarea>
              </div>
            </div>
          </form>
        </div>
        
        <div className="p-6 border-t border-cardBorder flex justify-end gap-3 bg-slate-50">
          <button onClick={onClose} className="btn-secondary">Cancel</button>
          <button className="btn-primary shadow-[0_0_15px_rgba(16,185,129,0.4)]">Create Campaign</button>
        </div>
      </motion.div>
    </div>
  );
}
