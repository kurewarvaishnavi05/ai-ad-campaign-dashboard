import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Bell, Palette, Lock, Shield, Mail, Monitor, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function Settings() {
  const { theme, setTheme } = useTheme();
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', label: 'Profile Settings', icon: <User size={18} /> },
    { id: 'appearance', label: 'Appearance', icon: <Palette size={18} /> },
    { id: 'notifications', label: 'Notifications', icon: <Bell size={18} /> },
    { id: 'security', label: 'Security', icon: <Lock size={18} /> },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-5xl mx-auto space-y-6"
    >
      <div>
        <h1 className="text-2xl font-bold text-text">Settings</h1>
        <p className="text-textMuted text-sm mt-1">Manage your account preferences and settings.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Navigation Sidebar */}
        <div className="w-full md:w-64 space-y-1">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-colors ${
                activeTab === tab.id 
                  ? 'bg-primary/10 text-primary' 
                  : 'text-textMuted hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-text'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-card border border-cardBorder rounded-2xl shadow-sm min-h-[500px]">
          
          {/* PROFILE SETTINGS */}
          {activeTab === 'profile' && (
            <div className="p-8 space-y-8 animate-fade-in">
              <h2 className="text-xl font-bold text-text mb-6">Profile Information</h2>
              
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-primary/20 text-primary rounded-full flex items-center justify-center text-2xl font-bold">
                  BL
                </div>
                <div>
                  <button className="btn-secondary text-sm">Change Avatar</button>
                  <p className="text-xs text-textMuted mt-2">JPG, GIF or PNG. 1MB max.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-textMuted mb-1.5">First Name</label>
                  <input type="text" defaultValue="Admin" className="input-field" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-textMuted mb-1.5">Last Name</label>
                  <input type="text" defaultValue="User" className="input-field" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-textMuted mb-1.5">Email Address</label>
                  <input type="email" defaultValue="admin@bizleap.com" className="input-field" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-textMuted mb-1.5">Company Name</label>
                  <input type="text" defaultValue="BizLeap Inc." className="input-field" />
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button className="btn-primary">Save Changes</button>
              </div>
            </div>
          )}

          {/* APPEARANCE SETTINGS */}
          {activeTab === 'appearance' && (
            <div className="p-8 space-y-8 animate-fade-in">
              <h2 className="text-xl font-bold text-text mb-6">Appearance</h2>
              
              <div className="space-y-4">
                <p className="text-sm text-textMuted">Customize the interface theme.</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <button 
                    onClick={() => setTheme('light')}
                    className={`p-4 rounded-xl border-2 flex flex-col items-center gap-3 transition-colors ${theme === 'light' ? 'border-primary bg-primary/5' : 'border-cardBorder bg-card hover:border-slate-300'}`}
                  >
                    <Sun size={24} className={theme === 'light' ? 'text-primary' : 'text-textMuted'} />
                    <span className={`font-medium ${theme === 'light' ? 'text-primary' : 'text-text'}`}>Light Mode</span>
                  </button>

                  <button 
                    onClick={() => setTheme('dark')}
                    className={`p-4 rounded-xl border-2 flex flex-col items-center gap-3 transition-colors ${theme === 'dark' ? 'border-primary bg-primary/5' : 'border-cardBorder bg-card hover:border-slate-600'}`}
                  >
                    <Moon size={24} className={theme === 'dark' ? 'text-primary' : 'text-textMuted'} />
                    <span className={`font-medium ${theme === 'dark' ? 'text-primary' : 'text-text'}`}>Dark Mode</span>
                  </button>

                  <button 
                    onClick={() => setTheme('system')}
                    className={`p-4 rounded-xl border-2 flex flex-col items-center gap-3 transition-colors ${theme === 'system' ? 'border-primary bg-primary/5' : 'border-cardBorder bg-card hover:border-slate-400'}`}
                  >
                    <Monitor size={24} className={theme === 'system' ? 'text-primary' : 'text-textMuted'} />
                    <span className={`font-medium ${theme === 'system' ? 'text-primary' : 'text-text'}`}>System Auto</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* NOTIFICATIONS SETTINGS */}
          {activeTab === 'notifications' && (
            <div className="p-8 space-y-8 animate-fade-in">
              <h2 className="text-xl font-bold text-text mb-6">Notification Preferences</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1"><Mail className="text-textMuted" size={20} /></div>
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-text">Weekly Performance Report</h3>
                    <p className="text-sm text-textMuted">Receive a summary of your campaign performance every Monday.</p>
                  </div>
                  <input type="checkbox" defaultChecked className="w-5 h-5 accent-primary" />
                </div>
                
                <hr className="border-cardBorder" />

                <div className="flex items-start gap-4">
                  <div className="mt-1"><Shield className="text-textMuted" size={20} /></div>
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-text">Budget Alerts</h3>
                    <p className="text-sm text-textMuted">Get notified when campaigns consume 90% of their total budget.</p>
                  </div>
                  <input type="checkbox" defaultChecked className="w-5 h-5 accent-primary" />
                </div>
              </div>
              
              <div className="pt-4 flex justify-end">
                <button className="btn-primary">Save Preferences</button>
              </div>
            </div>
          )}

          {/* SECURITY SETTINGS */}
          {activeTab === 'security' && (
            <div className="p-8 space-y-8 animate-fade-in">
              <h2 className="text-xl font-bold text-text mb-6">Security</h2>
              
              <div className="space-y-4 max-w-md">
                <div>
                  <label className="block text-sm font-medium text-textMuted mb-1.5">Current Password</label>
                  <input type="password" placeholder="••••••••" className="input-field" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-textMuted mb-1.5">New Password</label>
                  <input type="password" placeholder="••••••••" className="input-field" />
                </div>
              </div>
              
              <div className="pt-4">
                <button className="btn-primary">Update Password</button>
              </div>
            </div>
          )}

        </div>
      </div>
    </motion.div>
  );
}
