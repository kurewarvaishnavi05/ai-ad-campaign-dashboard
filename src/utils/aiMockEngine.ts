export type CampaignGoal = 'Brand Awareness' | 'Lead Generation' | 'Website Traffic' | 'Sales';

export interface AIAnalysisResult {
  estimatedROI: string;
  recommendedBudget: string;
  audienceInsights: string[];
  platformFit: { platform: string; score: number }[];
  keyMetrics: { label: string; value: string; trend: string }[];
  aiSuggestions: string[];
}

export function generateMockAnalysis(goal: CampaignGoal): AIAnalysisResult {
  switch (goal) {
    case 'Brand Awareness':
      return {
        estimatedROI: '145%',
        recommendedBudget: '$2,500 - $5,000/mo',
        audienceInsights: [
          'High engagement in the 18-35 age bracket on mobile devices.',
          'Video content outperforms static images by 3x for recall.',
          'Peak activity hours: 6 PM - 10 PM local time.'
        ],
        platformFit: [
          { platform: 'Instagram', score: 95 },
          { platform: 'TikTok', score: 88 },
          { platform: 'Facebook', score: 70 },
          { platform: 'LinkedIn', score: 30 }
        ],
        keyMetrics: [
          { label: 'Est. Reach', value: '250K+', trend: '+15%' },
          { label: 'Est. CPM', value: '$8.50', trend: '-5%' },
          { label: 'Brand Recall', value: '12%', trend: '+2%' }
        ],
        aiSuggestions: [
          'Utilize short-form video (Reels/TikTok) with trending audio.',
          'Partner with micro-influencers in your niche to boost trust.',
          'Focus on visual storytelling rather than direct selling.'
        ]
      };
    case 'Lead Generation':
      return {
        estimatedROI: '210%',
        recommendedBudget: '$3,000 - $8,000/mo',
        audienceInsights: [
          'Professionals aged 28-45 show the highest form completion rate.',
          'Offering a free downloadable resource (eBook/Whitepaper) increases conversion by 40%.',
          'Desktop users convert 2x higher than mobile users for B2B.'
        ],
        platformFit: [
          { platform: 'LinkedIn', score: 92 },
          { platform: 'Google Ads', score: 85 },
          { platform: 'Facebook', score: 65 },
          { platform: 'Instagram', score: 40 }
        ],
        keyMetrics: [
          { label: 'Est. Leads', value: '450 - 600', trend: '+8%' },
          { label: 'Target CPL', value: '$24.00', trend: '-12%' },
          { label: 'Conv. Rate', value: '6.5%', trend: '+1.5%' }
        ],
        aiSuggestions: [
          'Use LinkedIn Lead Gen forms to reduce friction.',
          'Retarget website visitors who abandoned the pricing page.',
          'A/B test your landing page headline focusing on pain points.'
        ]
      };
    case 'Website Traffic':
      return {
        estimatedROI: '180%',
        recommendedBudget: '$1,500 - $4,000/mo',
        audienceInsights: [
          'Search intent is high for your core keywords.',
          'Users look for pricing and feature comparisons immediately.',
          'Click-through rates peak during morning commute hours.'
        ],
        platformFit: [
          { platform: 'Google Ads', score: 98 },
          { platform: 'Facebook', score: 75 },
          { platform: 'LinkedIn', score: 50 },
          { platform: 'TikTok', score: 20 }
        ],
        keyMetrics: [
          { label: 'Est. Clicks', value: '15,000+', trend: '+22%' },
          { label: 'Avg. CPC', value: '$1.25', trend: '-8%' },
          { label: 'Bounce Rate', value: '< 45%', trend: '-5%' }
        ],
        aiSuggestions: [
          'Optimize ad copy with dynamic keyword insertion.',
          'Ensure landing page speed is under 2.5 seconds on mobile.',
          'Add sitelink extensions to take up more search result real estate.'
        ]
      };
    case 'Sales':
      return {
        estimatedROI: '350%',
        recommendedBudget: '$5,000 - $15,000/mo',
        audienceInsights: [
          'Cart abandoners are 60% more likely to buy with a 10% discount code.',
          'Visual product reviews in ads increase trust and ROAS.',
          'Repeat customers have a 3x higher lifetime value.'
        ],
        platformFit: [
          { platform: 'Google Shopping', score: 95 },
          { platform: 'Facebook (Catalog)', score: 90 },
          { platform: 'Instagram', score: 85 },
          { platform: 'LinkedIn', score: 10 }
        ],
        keyMetrics: [
          { label: 'Est. Sales', value: '120 - 200', trend: '+30%' },
          { label: 'Target ROAS', value: '3.5x', trend: '+0.5x' },
          { label: 'Target CPA', value: '$45.00', trend: '-15%' }
        ],
        aiSuggestions: [
          'Implement dynamic retargeting showing the exact products viewed.',
          'Create a lookalike audience based on your top 10% highest-spending customers.',
          'Highlight free shipping or return policies in the ad creative.'
        ]
      };
  }
}
