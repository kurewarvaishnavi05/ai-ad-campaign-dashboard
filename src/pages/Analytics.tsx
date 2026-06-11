import { motion } from 'framer-motion';
import { Charts } from '../components/dashboard/Charts';
import { Card } from '../components/ui/Card';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip, Legend } from 'recharts';
import { mockAudienceData, mockAnalyticsData } from '../data/mockData';
import { Users, MousePointerClick, DollarSign, TrendingUp } from 'lucide-react';

const COLORS = ['#10b981', '#0ea5e9', '#6366f1', '#f59e0b', '#ec4899'];

export function Analytics() {
  // Calculate summary metrics
  const totalReach = mockAnalyticsData.reduce((acc, curr) => acc + curr.reach, 0);
  const totalClicks = mockAnalyticsData.reduce((acc, curr) => acc + curr.clicks, 0);
  const totalSales = mockAnalyticsData.reduce((acc, curr) => acc + curr.sales, 0);
  const avgROI = Math.round(mockAnalyticsData.reduce((acc, curr) => acc + curr.roi, 0) / mockAnalyticsData.length);

  const handleExport = () => {
    const headers = ['Date', 'Budget Spend', 'Reach', 'Clicks', 'Conversions', 'ROI (%)', 'Sales ($)'];
    const csvContent = [
      headers.join(','),
      ...mockAnalyticsData.map(row => 
        [row.date, row.budgetSpend, row.reach, row.clicks, row.conversions, row.roi, row.sales].join(',')
      )
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'analytics_report.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-3xl font-bold text-text">Analytics Overview</h1>
        <button onClick={handleExport} className="btn-secondary">Export Report</button>
      </div>

      <p className="text-textMuted mb-6">Deep dive into your campaign performance across all platforms.</p>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard title="Total Audience Reach" value={(totalReach / 1000).toFixed(1) + 'k'} icon={<Users size={20} />} trend="+12.5%" color="text-primary" bg="bg-primary/10" />
        <StatCard title="Total Clicks" value={totalClicks.toLocaleString()} icon={<MousePointerClick size={20} />} trend="+5.2%" color="text-blue-500" bg="bg-blue-500/10" />
        <StatCard title="Total Sales Revenue" value={'$' + totalSales.toLocaleString()} icon={<DollarSign size={20} />} trend="+18.4%" color="text-emerald-600" bg="bg-emerald-600/10" />
        <StatCard title="Average ROI" value={avgROI + '%'} icon={<TrendingUp size={20} />} trend="+2.1%" color="text-warning" bg="bg-warning/10" />
      </div>

      {/* Main Charts */}
      <div className="mb-8">
        <Charts />
      </div>

      {/* Deep Dive Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Audience Demographics */}
        <Card className="lg:col-span-1">
          <h3 className="text-lg font-bold text-text mb-6">Audience Age Demographics</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={mockAudienceData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {mockAudienceData.map((_entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <RechartsTooltip 
                  contentStyle={{ borderRadius: '12px', border: '1px solid #e2e8f0', backgroundColor: '#ffffff' }}
                  formatter={(value: any) => [`${value}%`, 'Audience Share']}
                />
                <Legend verticalAlign="bottom" height={36} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Top Performing Platforms Table */}
        <Card className="lg:col-span-2">
          <h3 className="text-lg font-bold text-text mb-6">Platform Breakdown</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-cardBorder text-textMuted text-sm">
                  <th className="pb-3 font-medium">Platform</th>
                  <th className="pb-3 font-medium">Spend</th>
                  <th className="pb-3 font-medium">Conversions</th>
                  <th className="pb-3 font-medium">Cost per Conv.</th>
                  <th className="pb-3 font-medium">ROAS</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-cardBorder/50">
                  <td className="py-4 font-medium text-text">Google Ads</td>
                  <td className="py-4">$12,450</td>
                  <td className="py-4 text-primary font-medium">425</td>
                  <td className="py-4">$29.29</td>
                  <td className="py-4 text-primary">4.2x</td>
                </tr>
                <tr className="border-b border-cardBorder/50">
                  <td className="py-4 font-medium text-text">Facebook Ads</td>
                  <td className="py-4">$8,200</td>
                  <td className="py-4 text-primary font-medium">310</td>
                  <td className="py-4">$26.45</td>
                  <td className="py-4 text-primary">3.8x</td>
                </tr>
                <tr className="border-b border-cardBorder/50">
                  <td className="py-4 font-medium text-text">LinkedIn Ads</td>
                  <td className="py-4">$4,800</td>
                  <td className="py-4 text-textMuted">85</td>
                  <td className="py-4 text-warning">$56.47</td>
                  <td className="py-4 text-textMuted">1.5x</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

      </div>
    </motion.div>
  );
}

function StatCard({ title, value, icon, trend, color, bg }: { title: string, value: string | number, icon: React.ReactNode, trend: string, color: string, bg: string }) {
  return (
    <Card className="flex items-center gap-4">
      <div className={`p-4 rounded-xl ${bg} ${color}`}>
        {icon}
      </div>
      <div>
        <p className="text-sm font-medium text-textMuted">{title}</p>
        <div className="flex items-baseline gap-2">
          <h4 className="text-2xl font-extrabold text-text mt-1">{value}</h4>
          <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">{trend}</span>
        </div>
      </div>
    </Card>
  );
}
