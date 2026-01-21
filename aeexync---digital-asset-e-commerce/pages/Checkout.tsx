
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, ShieldCheck, CreditCard, ArrowRight, Loader2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Checkout: React.FC = () => {
  const { cart, subtotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  if (cart.length === 0) {
    navigate('/store');
    return null;
  }

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      clearCart();
      navigate('/order-success');
    }, 2000);
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
        
        {/* Left: Forms */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-black text-white">Checkout</h1>
            <p className="text-slate-400">Complete your purchase to receive instant access to your digital downloads.</p>
          </div>

          <form onSubmit={handlePayment} className="space-y-8">
            <div className="glass p-8 rounded-3xl border border-white/10 space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-blue-600/20 text-blue-500 flex items-center justify-center text-sm font-black">1</span>
                Contact Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-slate-500 ml-1">Full Name</label>
                  <input required type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-slate-500 ml-1">Email Address</label>
                  <input required type="email" placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500" />
                </div>
              </div>
            </div>

            <div className="glass p-8 rounded-3xl border border-white/10 space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-blue-600/20 text-blue-500 flex items-center justify-center text-sm font-black">2</span>
                Payment Method
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <button type="button" className="flex flex-col items-center justify-center gap-2 p-6 rounded-2xl border-2 border-blue-600 bg-blue-600/10 text-white">
                  <CreditCard size={24} />
                  <span className="text-sm font-bold">Credit Card</span>
                </button>
                <button type="button" className="flex flex-col items-center justify-center gap-2 p-6 rounded-2xl border border-white/10 bg-white/5 text-slate-500 hover:text-white transition-colors">
                  <div className="font-black italic text-xl">PayPal</div>
                  <span className="text-sm font-bold">Checkout</span>
                </button>
              </div>

              <div className="space-y-4 pt-4">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-slate-500 ml-1">Card Details</label>
                  <div className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-slate-400">
                    Stripe Elements Embedded Component
                  </div>
                </div>
              </div>
            </div>

            <button
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black py-5 rounded-2xl shadow-[0_0_30px_rgba(37,99,235,0.4)] flex items-center justify-center gap-3 transition-transform hover:scale-[1.01]"
            >
              {loading ? (
                <Loader2 className="animate-spin" />
              ) : (
                <>Pay ${subtotal.toFixed(2)} & Download <ArrowRight /></>
              )}
            </button>
          </form>

          <div className="flex items-center justify-center gap-2 text-slate-500 text-sm">
            <ShieldCheck size={18} /> 256-bit Secure Encrypted Payment
          </div>
        </div>

        {/* Right: Summary */}
        <div className="lg:col-span-5">
          <div className="sticky top-32 glass p-8 rounded-3xl border border-white/10 space-y-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <ShoppingBag size={24} className="text-blue-500" />
              Order Summary
            </h2>
            
            <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
              {cart.map(item => (
                <div key={item.id} className="flex justify-between items-center gap-4">
                  <div className="flex items-center gap-3 min-w-0">
                    <img src={item.thumbnail} className="w-12 h-12 rounded-lg object-cover" />
                    <div className="min-w-0">
                      <p className="font-bold text-white text-sm truncate">{item.name}</p>
                      <p className="text-[10px] text-slate-500 uppercase tracking-widest">{item.category}</p>
                    </div>
                  </div>
                  <span className="text-blue-400 font-mono font-bold">${item.price}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-white/10 space-y-3">
              <div className="flex justify-between text-slate-400">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Taxes</span>
                <span>$0.00</span>
              </div>
              <div className="flex justify-between items-center pt-3">
                <span className="text-xl font-bold text-white">Total</span>
                <span className="text-3xl font-black text-blue-500 font-mono">${subtotal.toFixed(2)}</span>
              </div>
            </div>

            <div className="p-4 bg-white/5 rounded-xl border border-white/10">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">License Information</h4>
              <p className="text-xs text-slate-400 leading-relaxed italic">
                By completing this purchase, you agree to our standard digital license. Personal & commercial use permitted. No redistribution allowed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
