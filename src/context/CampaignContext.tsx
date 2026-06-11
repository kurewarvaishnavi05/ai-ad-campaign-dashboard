import { createContext, useContext, useState, ReactNode } from 'react';
import { Campaign } from '../types';
import { mockCampaigns } from '../data/mockData';

interface CampaignContextType {
  campaigns: Campaign[];
  addCampaign: (campaign: Omit<Campaign, 'id' | 'spent' | 'roi' | 'conversions' | 'clicks'>) => void;
  deleteCampaign: (id: string) => void;
  toggleCampaignStatus: (id: string) => void;
}

const CampaignContext = createContext<CampaignContextType | undefined>(undefined);

export function CampaignProvider({ children }: { children: ReactNode }) {
  const [campaigns, setCampaigns] = useState<Campaign[]>(mockCampaigns);

  const addCampaign = (newCampaignData: Omit<Campaign, 'id' | 'spent' | 'roi' | 'conversions' | 'clicks'>) => {
    const newCampaign: Campaign = {
      ...newCampaignData,
      id: `cmp-${Math.random().toString(36).substr(2, 9)}`,
      spent: 0,
      roi: 0,
      conversions: 0,
      clicks: 0,
    };
    setCampaigns(prev => [newCampaign, ...prev]);
  };

  const deleteCampaign = (id: string) => {
    setCampaigns(prev => prev.filter(c => c.id !== id));
  };

  const toggleCampaignStatus = (id: string) => {
    setCampaigns(prev => prev.map(c => {
      if (c.id === id) {
        return { ...c, status: c.status === 'Active' ? 'Paused' : 'Active' };
      }
      return c;
    }));
  };

  return (
    <CampaignContext.Provider value={{ campaigns, addCampaign, deleteCampaign, toggleCampaignStatus }}>
      {children}
    </CampaignContext.Provider>
  );
}

export function useCampaigns() {
  const context = useContext(CampaignContext);
  if (context === undefined) {
    throw new Error('useCampaigns must be used within a CampaignProvider');
  }
  return context;
}
