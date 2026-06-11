import { Bell, Search, Menu } from 'lucide-react';

export function Header() {
  return (
    <header className="h-16 bg-card/80 backdrop-blur-xl border-b border-cardBorder flex items-center justify-between px-6 sticky top-0 z-30">
      <div className="flex items-center gap-4 flex-1">
        <button className="md:hidden text-textMuted hover:text-text transition-colors">
          <Menu size={24} />
        </button>
        <div className="relative w-full max-w-md hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-textMuted" size={18} />
          <input
            type="text"
            placeholder="Search campaigns, analytics..."
            className="input-field pl-10 py-2 text-sm"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="relative p-2 text-textMuted hover:text-primary hover:bg-primaryLight rounded-full transition-all">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-danger rounded-full border-2 border-card shadow-[0_0_8px_rgba(244,63,94,0.6)]"></span>
        </button>
      </div>
    </header>
  );
}
