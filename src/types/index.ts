export interface Campaign {
  id: string;
  name: string;
  goal: 'Brand Awareness' | 'Website Traffic' | 'Lead Generation' | 'Sales';
  platform: 'Google Ads' | 'Facebook Ads' | 'Instagram Ads' | 'LinkedIn Ads';
  status: 'Draft' | 'Active' | 'Paused' | 'Completed';
  budget: number;
  spent: number;
  roi: number;
  startDate: string;
  endDate: string;
  reach?: number;
  conversions?: number;
  clicks?: number;
  ctr?: number;
  targetLocation?: string;
  targetAgeGroup?: string;
  targetInterests?: string[];
  adHeadline?: string;
  adDescription?: string;
  ctaText?: string;
}

export interface AnalyticsData {
  date: string;
  budgetSpend: number;
  reach: number;
  clicks: number;
  conversions: number;
  roi: number;
  sales: number;
}

export interface AIRecommendation {
  id: string;
  type: 'audience' | 'budget' | 'platform' | 'improvement';
  title: string;
  description: string;
  impact: 'High' | 'Medium' | 'Low';
}

export interface AudienceInsight {
  category: string;
  value: number;
}
