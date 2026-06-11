import { Card } from '../ui/Card';
import { mockAnalyticsData } from '../../data/mockData';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function Charts() {
  return (
    <Card delay={0.4}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-text flex items-center gap-2">
          Performance Overview
        </h2>
        <select className="bg-white border border-cardBorder text-text text-sm rounded-lg px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-primary shadow-sm">
          <option>Last 7 Days</option>
          <option>Last 30 Days</option>
          <option>This Month</option>
        </select>
      </div>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={mockAnalyticsData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorReach" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366f1" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e293b" />
            <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} dy={10} />
            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
            <Tooltip 
              contentStyle={{ borderRadius: '12px', border: '1px solid #e2e8f0', backgroundColor: '#ffffff', color: '#0f172a', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
            />
            <Area type="monotone" dataKey="reach" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorReach)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
