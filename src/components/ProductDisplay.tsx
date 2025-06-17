
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
    <div className="max-w-2xl mx-auto">
      {/* Capsule Machine Animation Container */}
      <div className="relative mb-8">
        <div className={`
          bg-gray-900 rounded-3xl p-8 border-4 border-cyan-400 
          transition-all duration-800 transform
          ${isAnimating ? 'scale-95 opacity-70' : 'scale-100 opacity-100'}
          ${showFireworks ? 'animate-pulse' : ''}
        `}>
          {/* Product Image */}
          <div className={`
            relative overflow-hidden rounded-xl mb-6
            transition-all duration-800
            ${isAnimating ? 'animate-bounce' : ''}
          `}>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 md:h-80 object-cover rounded-xl"
            />
            {isAnimating && (
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-pink-400 opacity-50 animate-pulse rounded-xl"></div>
            )}
          </div>

          {/* Product Info */}
          <div className="text-center space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-yellow-300 pixel-shadow">
              {product.name}
            </h3>
            <p className="text-lg md:text-xl text-pink-300 pixel-font leading-relaxed">
              {product.caption}
            </p>
            <div className="text-3xl md:text-4xl font-bold text-green-400 pixel-shadow">
              ${product.price}
            </div>
          </div>

          {/* Buy Button */}
          <div className="mt-8 flex justify-center">
            <ArcadeButton
              onClick={() => window.open(product.affiliateUrl, '_blank')}
              variant="primary"
              className="text-lg md:text-xl px-8 py-4"
            >
              🪙 BUY ON AMAZON 🪙
            </ArcadeButton>
          </div>
        </div>

        {/* Capsule Drop Animation */}
        {isAnimating && (
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-bounce border-4 border-yellow-300"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDisplay;
