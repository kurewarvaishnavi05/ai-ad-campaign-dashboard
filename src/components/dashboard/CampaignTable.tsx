import { useState } from 'react';
import { Card } from '../ui/Card';
import { mockCampaigns } from '../../data/mockData';
import { MoreVertical, Play, Pause, Edit3, Trash2, Search } from 'lucide-react';

export function CampaignTable() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCampaigns = mockCampaigns.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.platform.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card className="overflow-hidden" delay={0.6}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <h2 className="text-lg font-bold text-text">Campaigns</h2>
        <div className="flex gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-textMuted" size={16} />
            <input 
              type="text" 
              placeholder="Search campaigns..." 
              className="input-field pl-9 max-w-xs text-sm py-1.5"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select className="bg-white border border-cardBorder text-text text-sm rounded-lg px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-primary shadow-sm">
            <option value="All">All Status</option>
            <option value="Active">Active</option>
            <option value="Paused">Paused</option>
            <option value="Draft">Draft</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-cardBorder text-sm text-textMuted">
              <th className="pb-4 font-medium px-4 whitespace-nowrap">Campaign Name</th>
              <th className="pb-4 font-medium px-4 whitespace-nowrap">Platform</th>
              <th className="pb-4 font-medium px-4 whitespace-nowrap">Status</th>
              <th className="pb-4 font-medium px-4 text-right whitespace-nowrap">Budget</th>
              <th className="pb-4 font-medium px-4 text-right whitespace-nowrap">Spent</th>
              <th className="pb-4 font-medium px-4 text-right whitespace-nowrap">ROI</th>
              <th className="pb-4 font-medium px-4 text-center whitespace-nowrap">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {filteredCampaigns.map((campaign) => (
              <tr key={campaign.id} className="border-b border-cardBorder/50 last:border-0 hover:bg-slate-50 transition-colors group">
                <td className="py-4 px-4">
                  <p className="font-bold text-text group-hover:text-primary transition-colors">{campaign.name}</p>
                  <p className="text-xs text-textMuted mt-1">{campaign.startDate} - {campaign.endDate}</p>
                </td>
                <td className="py-4 px-4 text-textMuted">{campaign.platform}</td>
                <td className="py-4 px-4">
                  <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold border ${
                    campaign.status === 'Active' ? 'bg-accent/10 text-accent border-accent/20' :
                    campaign.status === 'Paused' ? 'bg-warning/10 text-warning border-warning/20' :
                    campaign.status === 'Completed' ? 'bg-primary/10 text-primary border-primary/20' :
                    'bg-slate-100 text-slate-500 border-slate-200'
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${
                      campaign.status === 'Active' ? 'bg-accent' :
                      campaign.status === 'Paused' ? 'bg-warning' :
                      campaign.status === 'Completed' ? 'bg-primary' :
                      'bg-slate-400'
                    }`}></span>
                    {campaign.status}
                  </span>
                </td>
                <td className="py-4 px-4 text-right font-medium text-text">${campaign.budget.toLocaleString()}</td>
                <td className="py-4 px-4 text-right text-textMuted">${campaign.spent.toLocaleString()}</td>
                <td className="py-4 px-4 text-right font-bold text-accent">
                  {campaign.roi > 0 ? `+${campaign.roi}%` : '-'}
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center justify-center gap-3 text-textMuted opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-1 hover:text-primary transition-colors" title={campaign.status === 'Active' ? 'Pause' : 'Resume'}>
                      {campaign.status === 'Active' ? <Pause size={16} /> : <Play size={16} />}
                    </button>
                    <button className="p-1 hover:text-primary transition-colors" title="Edit">
                      <Edit3 size={16} />
                    </button>
                    <button className="p-1 hover:text-danger transition-colors" title="Delete">
                      <Trash2 size={16} />
                    </button>
                    <button className="p-1 hover:text-text transition-colors">
                      <MoreVertical size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {filteredCampaigns.length === 0 && (
          <div className="text-center py-12">
            <p className="text-textMuted text-sm">No campaigns found matching your search.</p>
          </div>
        )}
      </div>
    </Card>
  );
}
