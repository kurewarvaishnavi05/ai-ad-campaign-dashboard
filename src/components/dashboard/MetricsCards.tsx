import { Card } from '../ui/Card';
import { mockCampaigns } from '../../data/mockData';
import { TrendingUp, Users, MousePointerClick, DollarSign, Activity } from 'lucide-react';

export function MetricsCards() {
  const totalSpent = mockCampaigns.reduce((acc, curr) => acc + curr.spent, 0);
  const totalReach = mockCampaigns.reduce((acc, curr) => acc + curr.reach, 0);
  const totalClicks = mockCampaigns.reduce((acc, curr) => acc + curr.clicks, 0);
  const activeCount = mockCampaigns.filter(c => c.status === 'Active').length;

  const metrics = [
    { label: 'Total Spent', value: `$${totalSpent.toLocaleString()}`, icon: <DollarSign size={20} />, trend: '+12%', isPositive: true },
    { label: 'Total Reach', value: (totalReach / 1000000).toFixed(1) + 'M', icon: <Users size={20} />, trend: '+5.2%', isPositive: true },
    { label: 'Total Clicks', value: (totalClicks / 1000).toFixed(1) + 'K', icon: <MousePointerClick size={20} />, trend: '-1.1%', isPositive: false },
    { label: 'Active Campaigns', value: activeCount.toString(), icon: <Activity size={20} />, trend: 'Stable', isPositive: true },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, idx) => (
        <Card key={idx} delay={idx * 0.1} className="group hover:border-primary/50 transition-all duration-300">
          <div className="flex items-center justify-between">
            <span className="text-textMuted text-sm font-medium">{metric.label}</span>
            <div className="p-2.5 bg-primary/10 text-primary rounded-xl border border-primary/20 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.3)] transition-all">
              {metric.icon}
            </div>
          </div>
          <div className="mt-4 flex items-end justify-between">
            <span className="text-3xl font-bold text-text tracking-tight">{metric.value}</span>
            <span className={`text-sm font-medium flex items-center gap-1 px-2 py-0.5 rounded-full ${
              metric.isPositive ? 'bg-accent/10 text-accent border border-accent/20' : 'bg-danger/10 text-danger border border-danger/20'
            }`}>
              <TrendingUp size={14} className={metric.isPositive ? '' : 'rotate-180'} />
              {metric.trend}
            </span>
          </div>
        </Card>
      ))}
    </div>
  );
}
