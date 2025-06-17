
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
    <div className="max-w-3xl mx-auto">
      <div className={`
        bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 
        border border-white/20 shadow-2xl
        transition-all duration-600 transform
        ${isAnimating ? 'scale-95 opacity-60' : 'scale-100 opacity-100'}
        ${showFireworks ? 'shadow-cyan-500/20 shadow-2xl' : ''}
      `}>
        {/* Product Image */}
        <div className={`
          relative overflow-hidden rounded-xl mb-8 bg-white/5
          transition-all duration-600
          ${isAnimating ? 'animate-pulse' : ''}
        `}>
          <div className="aspect-square max-w-md mx-auto">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          {isAnimating && (
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 to-pink-400/30 animate-pulse rounded-xl"></div>
          )}
        </div>

        {/* Product Info */}
        <div className="text-center space-y-6">
          <h3 className="text-2xl md:text-3xl font-bold text-white pixel-font leading-relaxed">
            {product.name}
          </h3>
          <p className="text-lg md:text-xl text-slate-200 pixel-font leading-relaxed max-w-2xl mx-auto">
            {product.caption}
          </p>
          <div className="text-4xl md:text-5xl font-bold text-emerald-400 pixel-font">
            ${product.price}
          </div>
        </div>

        {/* Buy Button */}
        <div className="mt-10 flex justify-center">
          <ArcadeButton
            onClick={() => window.open(product.affiliateUrl, '_blank')}
            variant="primary"
            className="text-lg md:text-xl px-10 py-5"
          >
            🛒 BUY ON AMAZON
          </ArcadeButton>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
