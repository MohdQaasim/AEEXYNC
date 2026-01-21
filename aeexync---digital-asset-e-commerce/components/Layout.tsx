
import React from 'react';
import Navbar from './Navbar';
import CartDrawer from './CartDrawer';
import { useTheme } from '../context/ThemeContext';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-500 ${
      theme === 'dark' ? 'bg-[#0B0F14] text-white' : 'bg-[#F9FAFB] text-slate-900'
    }`}>
      <Navbar />
      <CartDrawer />
      <div className="relative">
        {children}
      </div>
      
      {/* Footer */}
      <footer className="py-20 border-t border-white/10 mt-20">
        <div className="container mx-auto px-6 text-center space-y-8">
          <h2 className="text-2xl font-black tracking-tighter text-white opacity-20">AEEXYNC</h2>
          <div className="flex justify-center gap-8 text-slate-500 text-sm font-medium">
            <a href="#" className="hover:text-blue-500 transition-colors">Terms</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Privacy</a>
            <a href="#" className="hover:text-blue-500 transition-colors">License</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Contact</a>
          </div>
          <p className="text-slate-600 text-xs uppercase tracking-widest font-bold">
            &copy; {new Date().getFullYear()} Aeexync. Built for the creative motion community.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
