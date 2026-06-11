import { useState } from 'react';
import { MetricsCards } from '../components/dashboard/MetricsCards';
import { Charts } from '../components/dashboard/Charts';
import { CampaignTable } from '../components/dashboard/CampaignTable';
import { AIRecommendations } from '../components/dashboard/AIRecommendations';
import { Plus } from 'lucide-react';
import { CampaignModal } from '../components/dashboard/CampaignModal';
import { motion } from 'framer-motion';

export function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-text">Campaign Overview</h1>
          <p className="text-textMuted text-sm mt-1">Manage and monitor your advertising performance.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="btn-primary flex items-center justify-center gap-2"
        >
          <Plus size={18} />
          New Campaign
        </button>
      </div>

      <MetricsCards />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Charts />
        </div>
        <div className="lg:col-span-1">
          <AIRecommendations />
        </div>
      </div>

      <CampaignTable />

      {isModalOpen && (
        <CampaignModal onClose={() => setIsModalOpen(false)} />
      )}
    </motion.div>
  );
}
