
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Mail, CheckCircle2, Loader2, X } from 'lucide-react';
import { FREE_PRESETS } from '../data/products';
import { Product } from '../types';

const FreePresets: React.FC = () => {
  const [selectedFreebie, setSelectedFreebie] = useState<Product | null>(null);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <div className="pt-[72px] min-h-screen bg-[#0b0b0b]">
      <section className="free-presets-section">
        <h2 className="free-presets-title">Free Presets</h2>

        <div className="free-presets-grid">
          {FREE_PRESETS.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="free-preset-card"
            >
              <img 
                src={product.thumbnail} 
                alt={product.name} 
                className="free-preset-image" 
              />
              <div className="flex flex-col items-center">
                <h3 className="free-preset-name">{product.name}</h3>
                <button
                  onClick={() => setSelectedFreebie(product)}
                  className="free-preset-btn cursor-pointer"
                >
                  Download
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Email Gate Modal */}
      <AnimatePresence>
        {selectedFreebie && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[100] flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="glass max-w-md w-full p-10 rounded-[40px] space-y-8 relative border border-white/10 shadow-2xl"
            >
              <button
                onClick={() => {
                  setSelectedFreebie(null);
                  setStatus('idle');
                  setEmail('');
                }}
                className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/10 text-slate-500 hover:text-white transition-all cursor-pointer"
              >
                <X size={24} />
              </button>

              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-blue-600/10 text-blue-500 rounded-3xl flex items-center justify-center mx-auto border border-blue-500/20 shadow-[0_0_30px_rgba(37,99,235,0.2)]">
                  <Mail size={40} />
                </div>
                <div className="space-y-2">
                  <h2 className="text-3xl font-black text-white">Unlock Download</h2>
                  <p className="text-slate-400 text-sm">We'll send the direct link for <span className="text-white font-bold">{selectedFreebie.name}</span> to your inbox instantly.</p>
                </div>
              </div>

              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-500/10 border border-green-500/20 p-8 rounded-3xl text-center space-y-4"
                >
                  <CheckCircle2 size={48} className="text-green-500 mx-auto" />
                  <div className="space-y-1">
                    <p className="text-white font-black text-xl">Success!</p>
                    <p className="text-green-500/70 text-sm leading-relaxed">Check your inbox. The link is valid for 24 hours.</p>
                  </div>
                  <button
                    onClick={() => setSelectedFreebie(null)}
                    className="w-full bg-white/5 border border-white/10 text-white text-xs font-black uppercase tracking-widest py-3 rounded-xl hover:bg-white/10 cursor-pointer"
                  >
                    Back to Library
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 transition-all text-lg font-medium"
                    />
                  </div>
                  <button
                    disabled={status === 'loading'}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)] disabled:opacity-50 cursor-pointer"
                  >
                    {status === 'loading' ? (
                      <Loader2 className="animate-spin" size={24} />
                    ) : (
                      <>Send Download Link</>
                    )}
                  </button>
                  <p className="text-center text-[10px] text-slate-600 uppercase tracking-[0.2em] font-bold">Privacy Guaranteed • No Spam</p>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FreePresets;
