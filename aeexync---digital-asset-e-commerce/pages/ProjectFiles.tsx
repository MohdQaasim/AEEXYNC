
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, PlayCircle, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROJECT_SECTIONS } from '../data/products';
import ProductCard from '../components/ProductCard';

const ProjectFiles: React.FC = () => {
  const renderPreview = (url: string, title: string) => {
    const isMp4 = url.toLowerCase().endsWith('.mp4');
    const isYouTube = url.includes('youtube.com') || url.includes('youtu.be');

    if (isYouTube) {
      let videoId = '';
      if (url.includes('youtu.be/')) {
        videoId = url.split('youtu.be/')[1].split('?')[0];
      } else if (url.includes('v=')) {
        videoId = url.split('v=')[1].split('&')[0];
      }
      
      return (
        <div className="w-full h-full relative pointer-events-none">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&enablejsapi=1`}
            className="absolute top-1/2 left-1/2 w-[300%] h-[300%] -translate-x-1/2 -translate-y-1/2"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      );
    }

    if (isMp4) {
      return (
        <video
          src={url}
          autoPlay
          muted
          loop
          playsInline
          controls
          preload="metadata"
          className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-110"
        />
      );
    }

    return (
      <img
        src={url}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-110"
      />
    );
  };

  return (
    <div className="min-h-screen pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <nav className="flex items-center text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">
          <Link to="/" className="hover:text-blue-500 transition-colors">Home</Link>
          <ChevronRight size={14} className="mx-2" />
          <span className="text-white dark:text-white light:text-slate-900">Project Files</span>
        </nav>
        <h1 className="text-5xl font-black tracking-tighter text-white dark:text-white light:text-slate-900">Project Files</h1>
        <p className="text-slate-400 mt-2 max-w-lg">Get the source files for my most popular edits and learn the workflow behind the motion.</p>
      </div>

      <div className="space-y-32">
        {PROJECT_SECTIONS.map((section, idx) => (
          <motion.section
            key={section.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12"
          >
            {/* Cinematic Section Header */}
            <div className="relative w-full h-[300px] md:h-[500px] overflow-hidden group bg-black">
              {renderPreview(section.previewUrl, section.title)}
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14] via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-12 container mx-auto pointer-events-none">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pointer-events-auto">
                  <div className="space-y-2">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500">Project Category</span>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase">{section.title}</h2>
                  </div>
                  <div className="flex items-center gap-4 bg-white/5 backdrop-blur-xl p-4 rounded-2xl border border-white/10">
                    <PlayCircle size={32} className="text-blue-500" />
                    <div>
                      <p className="text-[10px] uppercase font-bold text-slate-500">Preview Available</p>
                      <p className="text-sm font-semibold text-white">Watch Breakdown</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container mx-auto px-6">
              <div className="flex items-center gap-2 mb-8 p-4 glass rounded-xl border-l-4 border-blue-500">
                <Eye size={18} className="text-blue-500" />
                <p className="text-sm text-slate-300">
                  <span className="font-bold text-white">Note:</span> Previews are shown above so you can inspect the quality and composition before buying.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.products.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  );
};

export default ProjectFiles;
