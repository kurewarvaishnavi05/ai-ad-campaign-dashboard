import { LayoutDashboard, Megaphone, BarChart3, Settings as SettingsIcon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Sidebar() {
  const location = useLocation();
  
  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard', path: '/dashboard' },
    { icon: <Megaphone size={20} />, label: 'Campaigns', path: '#' },
    { icon: <BarChart3 size={20} />, label: 'Analytics', path: '#' },
    { icon: <SettingsIcon size={20} />, label: 'Settings', path: '/settings' },
  ];

  return (
    <aside className="w-64 bg-card/80 backdrop-blur-xl border-r border-cardBorder h-screen hidden md:flex flex-col">
      <div className="p-6">
        <Link to="/" className="text-xl font-bold text-text flex items-center gap-3 group">
          <div className="w-8 h-8 bg-gradient-to-tr from-primary to-accent rounded-lg flex items-center justify-center shadow-[0_0_10px_rgba(99,102,241,0.5)] group-hover:shadow-[0_0_15px_rgba(99,102,241,0.8)] transition-all">
            <span className="text-white font-bold text-sm">BL</span>
          </div>
          BizLeap
        </Link>
      </div>
      
      <nav className="flex-1 px-4 py-4 space-y-1">
        {menuItems.map((item, index) => {
          const isActive = location.pathname === item.path || (item.path === '#' && index === 1); // Mock active state for demo
          return (
            <Link
              key={index}
              to={item.path}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive
                  ? 'bg-primary/10 text-primary border border-primary/20 shadow-[inset_0_0_10px_rgba(16,185,129,0.1)]'
                  : 'text-textMuted hover:bg-slate-50 hover:text-text'
              }`}
            >
              {item.icon}
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-cardBorder">
        <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 cursor-pointer transition-colors border border-transparent hover:border-cardBorder">
          <img
            src="https://ui-avatars.com/api/?name=Admin&background=6366f1&color=fff"
            alt="User"
            className="w-9 h-9 rounded-full ring-2 ring-primary/50"
          />
          <div className="text-sm">
            <p className="font-medium text-text">Admin User</p>
            <p className="text-textMuted text-xs">admin@bizleap.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
