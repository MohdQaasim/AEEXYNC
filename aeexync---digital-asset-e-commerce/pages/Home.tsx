
import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Youtube, ShoppingBag, Zap, FolderCode, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ActionTile: React.FC<{
  title: string;
  desc: string;
  // Use React.ReactElement instead of React.ReactNode as we need to clone it
  icon: React.ReactElement;
  to: string;
  color: string;
  delay: number;
}> = ({ title, desc, icon, to, color, delay }) => (
  <Link to={to} className="w-full">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      className={`glass group relative p-8 rounded-3xl overflow-hidden border border-white/10 hover:border-${color}-500/50 transition-all duration-500`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className={`absolute -right-4 -bottom-4 opacity-5 text-white transform rotate-12 transition-transform duration-700 group-hover:rotate-0 group-hover:scale-110`}>
        {/* Cast to React.ReactElement<any> to allow the 'size' prop which is common in icon components */}
        {React.cloneElement(icon as React.ReactElement<any>, { size: 140 })}
      </div>
      <div className="relative z-10 space-y-4">
        <div className={`w-14 h-14 flex items-center justify-center rounded-2xl bg-${color}-500/10 text-${color}-500 border border-${color}-500/20`}>
          {icon}
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{title}</h3>
          <p className="text-slate-400 text-sm leading-relaxed max-w-[220px]">{desc}</p>
        </div>
        <div className="flex items-center gap-2 text-[10px] font-black text-blue-500 uppercase tracking-[0.2em] pt-4">
          Explore Section <ArrowUpRight size={14} />
        </div>
      </div>
    </motion.div>
  </Link>
);

const Home: React.FC = () => {
  const brandName = "AEEXYNC";

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Mesh Background */}
      <div className="absolute inset-0 z-0 gradient-mesh opacity-40 pointer-events-none" />
      
      <main className="relative z-10 pt-40 pb-20 px-6 container mx-auto">
        {/* Profile Section */}
        <div className="flex flex-col items-center text-center space-y-10 mb-24">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', damping: 25, stiffness: 120 }}
            className="relative w-32 h-32 md:w-44 md:h-44 rounded-full border-4 border-white/10 p-1 bg-gradient-to-tr from-blue-600 via-indigo-500 to-purple-600"
          >
            <div className="absolute inset-0 rounded-full blur-2xl bg-blue-600/30 animate-pulse" />
            <img
              src="https://picsum.photos/seed/ae-profile/200"
              alt="Aeexync"
              className="relative w-full h-full rounded-full object-cover border-2 border-black/20"
            />
          </motion.div>

          <div className="space-y-4">
            <h1 className="flex text-7xl md:text-9xl font-black tracking-tighter text-white drop-shadow-2xl">
              {brandName.split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ 
                    delay: 0.3 + i * 0.05, 
                    duration: 0.8, 
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-slate-400 text-lg md:text-xl font-medium tracking-wide max-w-xl mx-auto"
            >
              Curated assets for modern video editors. <br className="hidden md:block"/> Elevate your motion workflow.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex gap-6"
          >
            <a href="#" className="p-4 glass rounded-full hover:text-blue-500 hover:scale-110 transition-all text-white border-white/5">
              <Instagram size={24} />
            </a>
            <a href="#" className="p-4 glass rounded-full hover:text-red-500 hover:scale-110 transition-all text-white border-white/5">
              <Youtube size={24} />
            </a>
          </motion.div>
        </div>

        {/* Action Tiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <ActionTile
            title="My Store"
            desc="The full collection of paid CCs, premium effects & presets."
            icon={<ShoppingBag />}
            to="/store"
            color="blue"
            delay={1.2}
          />
          <ActionTile
            title="Free Presets"
            desc="Starter packs including basic CCs & shakes for free."
            icon={<Zap />}
            to="/free-presets"
            color="yellow"
            delay={1.3}
          />
          <ActionTile
            title="Project Files"
            desc="Complete After Effects project files for deep learning."
            icon={<FolderCode />}
            to="/project-files"
            color="purple"
            delay={1.4}
          />
        </div>
      </main>

      {/* Background Ambience */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
    </div>
  );
};

export default Home;
