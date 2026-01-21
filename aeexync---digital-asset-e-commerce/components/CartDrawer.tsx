
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, ShoppingCart, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer: React.FC = () => {
  const { cart, removeFromCart, isCartOpen, setCartOpen, subtotal } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCartOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-screen w-full max-w-md glass border-l border-white/10 z-[70] shadow-2xl flex flex-col"
          >
            <div className="p-6 flex justify-between items-center border-bottom border-white/10">
              <h2 className="text-xl font-bold flex items-center gap-2 text-white dark:text-white light:text-slate-900">
                <ShoppingCart size={20} /> Your Cart
              </h2>
              <button
                onClick={() => setCartOpen(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={24} className="text-white dark:text-white light:text-slate-900" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-64 opacity-50 space-y-4">
                  <ShoppingCart size={48} className="text-white dark:text-white light:text-slate-900" />
                  <p className="text-white dark:text-white light:text-slate-900">Your cart is empty. Start editing 🔥</p>
                </div>
              ) : (
                cart.map(item => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex items-center gap-4 p-4 glass rounded-xl"
                  >
                    <img
                      src={item.thumbnail}
                      alt={item.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold truncate text-white dark:text-white light:text-slate-900">{item.name}</h4>
                      <p className="text-blue-400 font-mono text-sm">${item.price}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 text-slate-500 hover:text-red-500 transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                  </motion.div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-white/10 space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Subtotal</span>
                  <span className="text-2xl font-black text-white dark:text-white light:text-slate-900">${subtotal}</span>
                </div>
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Discount code"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-blue-500 text-white"
                  />
                  <Link
                    to="/checkout"
                    onClick={() => setCartOpen(false)}
                    className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                  >
                    Checkout <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
