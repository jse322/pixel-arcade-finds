
import React from 'react';
import ArcadeButton from './ArcadeButton';
import { Product } from '../types/Product';

interface ProductDisplayProps {
  product: Product;
  isAnimating: boolean;
  showFireworks: boolean;
}

const ProductDisplay: React.FC<ProductDisplayProps> = ({ 
  product, 
  isAnimating, 
  showFireworks 
}) => {
  return (
    <div className="w-full max-w-xl mx-auto">
      <div className={`
        relative bg-white/70 backdrop-blur-xl rounded-2xl p-6 md:p-8 
        border border-white/50 shadow-2xl shadow-black/5
        transition-all duration-700 ease-out transform
        ${isAnimating ? 'scale-95 opacity-40 rotate-1' : 'scale-100 opacity-100 rotate-0'}
        ${showFireworks ? 'shadow-purple-500/20 shadow-3xl scale-105' : ''}
        hover:shadow-3xl hover:shadow-black/10 hover:-translate-y-1
      `}>
        
        {/* Animated border */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 p-[1px]">
          <div className="w-full h-full bg-white/70 backdrop-blur-xl rounded-2xl"></div>
        </div>

        <div className="relative z-10">
          {/* Product Image Container */}
          <div className={`
            relative overflow-hidden rounded-xl mb-6 bg-gradient-to-br from-gray-50 to-gray-100
            aspect-square max-w-xs mx-auto group
            transition-all duration-700
            ${isAnimating ? 'animate-pulse scale-95' : 'scale-100'}
            ${showFireworks ? 'scale-105' : ''}
          `}>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-110"
            />
            
            {/* Overlay effects */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent rounded-xl"></div>
            
            {isAnimating && (
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/30 via-pink-400/30 to-cyan-400/30 animate-pulse rounded-xl flex items-center justify-center">
                <div className="text-white text-4xl animate-spin">🎲</div>
              </div>
            )}

            {/* Price badge */}
            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg border border-white/50">
              <span className="text-lg font-black text-emerald-600">
                ${product.price}
              </span>
            </div>
          </div>

          {/* Product Info */}
          <div className="text-center space-y-4">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight">
              {product.name}
            </h2>
            
            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-md mx-auto font-medium">
              {product.caption}
            </p>
          </div>

          {/* Buy Button */}
          <div className="mt-6 flex justify-center">
            <ArcadeButton
              onClick={() => window.open(product.affiliateUrl, '_blank')}
              variant="primary"
              className="text-lg px-8 py-3 shadow-2xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105 transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                <span className="text-xl">🛒</span>
                Buy on Amazon
              </span>
            </ArcadeButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
