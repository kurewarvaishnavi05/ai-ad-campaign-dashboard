import { Link } from 'react-router-dom';

export function TopNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 h-20 z-50 transition-all duration-300 bg-white/70 backdrop-blur-md border-b border-cardBorder/50">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <Link to="/" className="text-2xl font-extrabold text-text flex items-center gap-3 group">
          <div className="w-10 h-10 bg-gradient-to-tr from-primary to-accent rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.3)] group-hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] transition-all transform group-hover:scale-105">
            <span className="text-white font-black text-lg">BL</span>
          </div>
          BizLeap
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-textMuted hover:text-primary transition-colors">Features</a>
          <a href="#pricing" className="text-sm font-medium text-textMuted hover:text-primary transition-colors">Pricing</a>
          <a href="#testimonials" className="text-sm font-medium text-textMuted hover:text-primary transition-colors">Testimonials</a>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/login" className="text-sm font-bold text-text hover:text-primary transition-colors hidden sm:block">Log In</Link>
          <Link to="/dashboard" className="btn-primary py-2 px-6 shadow-md hover:shadow-lg">
            Start Free Trial
          </Link>
        </div>
      </div>
    </nav>
  );
}
