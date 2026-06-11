import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { Campaign } from '../types';
import { mockCampaigns } from '../data/mockData';

interface CampaignContextType {
  campaigns: Campaign[];
  addCampaign: (campaign: Partial<Campaign> & Pick<Campaign, 'name' | 'goal' | 'platform'>) => void;
  deleteCampaign: (id: string) => void;
  toggleCampaignStatus: (id: string) => void;
}

const CampaignContext = createContext<CampaignContextType | undefined>(undefined);

export function CampaignProvider({ children }: { children: ReactNode }) {
  const [campaigns, setCampaigns] = useState<Campaign[]>(mockCampaigns);

  const addCampaign = (newCampaignData: Partial<Campaign> & Pick<Campaign, 'name' | 'goal' | 'platform'>) => {
    const newCampaign: Campaign = {
      status: 'Active',
      budget: 0,
      startDate: new Date().toISOString().split('T')[0],
      endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      ...newCampaignData,
      id: `cmp-${Math.random().toString(36).substr(2, 9)}`,
      spent: 0,
      roi: 0,
      conversions: 0,
      clicks: 0,
      reach: 0,
      ctr: 0,
      targetLocation: 'Global',
      targetAgeGroup: '18-65+',
      targetInterests: [],
      adHeadline: '',
      adDescription: '',
      ctaText: 'Learn More',
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
