
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Download, ExternalLink, Mail, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Success: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6 container mx-auto">
      <div className="max-w-2xl mx-auto glass p-12 rounded-[40px] border border-white/10 text-center space-y-12">
        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', damping: 15 }}
          className="w-24 h-24 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto"
        >
          <CheckCircle size={48} />
        </motion.div>

        <div className="space-y-4">
          <h1 className="text-5xl font-black text-white">Payment Received!</h1>
          <p className="text-slate-400 text-lg">Your order was successful. A confirmation email has been sent to your address with your receipt and permanent download links.</p>
        </div>

        <div className="p-8 bg-white/5 rounded-3xl space-y-6 border border-white/10">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500">Available Downloads</h3>
            <span className="px-2 py-1 bg-blue-500/20 text-blue-500 text-[10px] font-black rounded">Expiring in 7 days</span>
          </div>
          
          <div className="space-y-3">
            {[1, 2].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 glass rounded-xl border border-white/5 hover:border-blue-500/50 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-blue-500">
                    <Download size={20} />
                  </div>
                  <div className="text-left">
                    <p className="text-white font-bold text-sm">Asset_Pack_v2_{i}.zip</p>
                    <p className="text-[10px] text-slate-500 font-mono">MD5: e99a18c428... • 12.4 MB</p>
                  </div>
                </div>
                <button className="p-3 bg-blue-600 text-white rounded-xl hover:bg-blue-500 transition-all shadow-lg">
                  <Download size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
          <Link
            to="/store"
            className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors font-bold"
          >
            <ArrowLeft size={18} /> Back to Store
          </Link>
          <span className="hidden sm:inline text-slate-700">|</span>
          <a
            href="#"
            className="flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors font-bold"
          >
            <Mail size={18} /> Support Desk <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Success;
