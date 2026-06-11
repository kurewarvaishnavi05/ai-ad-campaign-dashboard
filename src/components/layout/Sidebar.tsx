import { LayoutDashboard, BarChart3, Zap } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

export function Sidebar() {
  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard', path: '/dashboard' },
    { icon: <BarChart3 size={20} />, label: 'Analytics', path: '/dashboard/analytics' },
    { icon: <Zap size={20} />, label: 'Automations', path: '#' },
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
          return (
            <NavLink
              key={index}
              to={item.path}
              end={item.path === '/dashboard'}
              className={({ isActive }) =>
                `w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group relative ${
                  isActive 
                    ? 'bg-primary/10 text-primary font-semibold' 
                    : 'text-textMuted hover:bg-slate-50 hover:text-text'
                }`
              }
            >
              {item.icon}
              {item.label}
            </NavLink>
          );
        })}
      </nav>

    </aside>
  );
}
