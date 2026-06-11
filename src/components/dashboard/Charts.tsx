import { useState } from 'react';
import { Card } from '../ui/Card';
import { mockAnalyticsData } from '../../data/mockData';
import { AreaChart, Area, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export function Charts() {
  const [activeTab, setActiveTab] = useState<'reach' | 'roi'>('reach');

  return (
    <Card delay={0.4}>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
        <h2 className="text-lg font-bold text-text flex items-center gap-2">
          Performance Overview
        </h2>
        
        <div className="flex items-center gap-4 w-full sm:w-auto">
          <div className="bg-slate-100 dark:bg-slate-800 p-1 rounded-lg flex gap-1">
            <button 
              onClick={() => setActiveTab('reach')}
              className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${activeTab === 'reach' ? 'bg-white dark:bg-slate-700 text-text shadow-sm' : 'text-textMuted hover:text-text'}`}
            >
              Reach & Engagement
            </button>
            <button 
              onClick={() => setActiveTab('roi')}
              className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${activeTab === 'roi' ? 'bg-white dark:bg-slate-700 text-text shadow-sm' : 'text-textMuted hover:text-text'}`}
            >
              ROI & Sales
            </button>
          </div>
          
          <select className="bg-white dark:bg-slate-800 border border-cardBorder text-text text-sm rounded-lg px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-primary shadow-sm hidden sm:block">
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>This Month</option>
          </select>
        </div>
      </div>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          {activeTab === 'reach' ? (
            <AreaChart data={mockAnalyticsData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorReach" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.4}/>
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
              <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} dy={10} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
              <Tooltip 
                contentStyle={{ borderRadius: '12px', border: '1px solid #e2e8f0', backgroundColor: '#ffffff', color: '#0f172a', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
              />
              <Area type="monotone" dataKey="reach" name="Total Reach" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorReach)" />
            </AreaChart>
          ) : (
            <LineChart data={mockAnalyticsData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
              <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} dy={10} />
              <YAxis yAxisId="left" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
              <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} tickFormatter={(val) => `$${val}`} />
              <Tooltip 
                contentStyle={{ borderRadius: '12px', border: '1px solid #e2e8f0', backgroundColor: '#ffffff', color: '#0f172a', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
              />
              <Legend verticalAlign="top" height={36} />
              <Line yAxisId="left" type="monotone" dataKey="roi" name="ROI (%)" stroke="#f59e0b" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 8 }} />
              <Line yAxisId="right" type="monotone" dataKey="sales" name="Sales ($)" stroke="#0ea5e9" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 8 }} />
            </LineChart>
          )}
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
