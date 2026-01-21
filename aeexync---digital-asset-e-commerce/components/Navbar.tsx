
import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ShoppingBag, Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { cart, setCartOpen } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Store', path: '/store' },
    { name: 'Free Presets', path: '/free-presets' },
    { name: 'Project Files', path: '/project-files' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 h-[72px] flex items-center ${
      scrolled ? 'glass shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-black tracking-tighter text-white dark:text-white light:text-slate-900">
          AEEXYNC
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => 
                `relative text-sm font-medium transition-colors hover:text-blue-500 ${
                  isActive ? 'text-blue-500' : 'text-slate-400 dark:text-slate-400 light:text-slate-600'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-500"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full glass transition-transform hover:scale-110"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-slate-700" />}
          </button>
          
          <button
            onClick={() => setCartOpen(true)}
            className="relative p-2 rounded-full glass transition-transform hover:scale-110"
          >
            <ShoppingBag size={20} className="text-white dark:text-white light:text-slate-900" />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-blue-600 text-[10px] font-bold text-white w-5 h-5 rounded-full flex items-center justify-center animate-bounce">
                {cart.length}
              </span>
            )}
          </button>

          <button
            className="md:hidden p-2 text-white dark:text-white light:text-slate-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-[72px] left-0 right-0 glass border-t border-white/10 p-6 md:hidden flex flex-col space-y-4"
          >
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-white dark:text-white light:text-slate-900"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
