
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Filter, Info, X, Play, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import Skeleton from '../components/Skeleton';
import { PAID_PRODUCTS } from '../data/products';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

const Store: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    // Simulate premium loading experience
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 container mx-auto">
      {/* Breadcrumb & Header */}
      <div className="mb-12 space-y-4">
        <nav className="flex items-center text-xs font-bold uppercase tracking-widest text-slate-500">
          <Link to="/" className="hover:text-blue-500 transition-colors">Home</Link>
          <ChevronRight size={14} className="mx-2" />
          <span className="text-white dark:text-white light:text-slate-900">My Store</span>
        </nav>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-white dark:text-white light:text-slate-900">My Store</h1>
            <p className="text-slate-500 mt-2">Premium tools for the modern motion designer.</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-6 py-3 glass rounded-xl text-sm font-bold text-white border-white/5 hover:border-blue-500/50 transition-all">
              <Filter size={16} /> Filter Collections
            </button>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {loading ? (
          Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="aspect-video" />
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
              <Skeleton className="h-10 w-full" />
            </div>
          ))
        ) : (
          PAID_PRODUCTS.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <ProductCard
                product={product}
                onClick={() => setSelectedProduct(product)}
              />
            </motion.div>
          ))
        )}
      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-xl z-[100] p-4 md:p-10 flex items-center justify-center overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 40 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="glass w-full max-w-6xl rounded-[40px] grid grid-cols-1 lg:grid-cols-2 border border-white/10 overflow-hidden shadow-2xl my-auto"
            >
              {/* Preview Area */}
              <div className="relative aspect-square lg:aspect-auto bg-neutral-950 flex items-center justify-center group overflow-hidden">
                <img
                  src={selectedProduct.previews[0]}
                  className="w-full h-full object-cover opacity-40 transition-transform duration-[10s] group-hover:scale-110"
                  alt="Preview"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-24 h-24 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-[0_0_50px_rgba(37,99,235,0.6)]"
                  >
                    <Play fill="currentColor" size={40} className="ml-2" />
                  </motion.button>
                </div>
                <div className="absolute bottom-8 left-8 flex flex-col gap-1">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500">Live Preview</span>
                  <p className="text-xs text-white/50">4K Render Breakdown Available</p>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8 md:p-14 flex flex-col justify-center space-y-10">
                <div className="flex justify-between items-start">
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      {selectedProduct.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-blue-600/10 border border-blue-500/20 text-[10px] font-black uppercase tracking-widest text-blue-400 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">{selectedProduct.name}</h2>
                  </div>
                  <button 
                    onClick={() => setSelectedProduct(null)} 
                    className="p-3 hover:bg-white/10 rounded-full transition-colors text-slate-500 hover:text-white"
                  >
                    <X size={32} />
                  </button>
                </div>

                <p className="text-slate-400 leading-relaxed text-xl font-medium">
                  {selectedProduct.description}
                </p>

                <div className="grid grid-cols-2 gap-10 py-10 border-y border-white/5">
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase font-black tracking-widest text-slate-600">Download Size</span>
                    <p className="text-white font-mono text-xl">{selectedProduct.fileSize}</p>
                  </div>
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase font-black tracking-widest text-slate-600">Product License</span>
                    <p className="text-white text-xl">{selectedProduct.license}</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-8">
                  <div className="text-5xl font-black text-white font-mono">${selectedProduct.price}</div>
                  <div className="flex-1 w-full grid grid-cols-2 gap-4">
                    <button
                      onClick={() => {
                        addToCart(selectedProduct);
                        setSelectedProduct(null);
                      }}
                      className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold py-5 rounded-2xl transition-all"
                    >
                      <ShoppingCart size={20} /> Add to Cart
                    </button>
                    <Link
                      to="/checkout"
                      onClick={() => {
                        addToCart(selectedProduct);
                        setSelectedProduct(null);
                      }}
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black py-5 rounded-2xl text-center shadow-[0_0_40px_rgba(37,99,235,0.4)] transition-transform hover:scale-[1.02]"
                    >
                      Instant Buy
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 bg-blue-500/5 rounded-2xl border border-blue-500/10">
                  <Info size={24} className="text-blue-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-blue-500/70 leading-relaxed font-medium">
                    This is a digital product compatible with After Effects CC 2020 and above. Upon purchase, a secure download link will be delivered instantly to your inbox.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Store;
