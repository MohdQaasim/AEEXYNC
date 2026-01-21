
import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Star, Plus } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
  onClick?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group glass rounded-[24px] overflow-hidden cursor-pointer border border-white/5 hover:border-blue-500/30 transition-all duration-500"
      onClick={onClick}
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={product.thumbnail}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="absolute top-4 left-4 flex gap-2">
          {product.tags.slice(0, 2).map(tag => (
            <span key={tag} className="px-3 py-1 bg-black/60 backdrop-blur-xl text-[9px] font-black uppercase tracking-widest text-white rounded-full border border-white/10">
              {tag}
            </span>
          ))}
        </div>

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="p-4 bg-blue-600 rounded-full text-white shadow-2xl scale-50 group-hover:scale-100 transition-transform duration-500">
            <Plus size={24} />
          </div>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-lg leading-tight text-white transition-colors group-hover:text-blue-400">
            {product.name}
          </h3>
          <span className="text-xl font-black text-blue-500 font-mono tracking-tighter">${product.price}</span>
        </div>

        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-0.5 text-yellow-500">
            {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="currentColor" />)}
          </div>
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">(4.9/5)</span>
        </div>

        <p className="text-sm text-slate-400 line-clamp-2 leading-relaxed h-10">
          {product.description}
        </p>

        <button
          onClick={(e) => {
            e.stopPropagation();
            addToCart(product);
          }}
          className="flex items-center justify-center gap-2 w-full bg-white/5 border border-white/10 hover:bg-blue-600 hover:border-blue-600 text-white text-xs font-black uppercase tracking-widest py-3.5 rounded-xl transition-all duration-300"
        >
          <ShoppingCart size={14} /> Add to Cart
        </button>
      </div>
      
      {/* Glow Effect Overlay */}
      <div className="absolute -inset-[2px] bg-gradient-to-tr from-blue-500/20 to-indigo-500/20 rounded-[26px] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none" />
    </motion.div>
  );
};

export default ProductCard;
