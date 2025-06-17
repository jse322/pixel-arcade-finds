
import React, { useState, useEffect } from 'react';
import ProductDisplay from '../components/ProductDisplay';
import ArcadeButton from '../components/ArcadeButton';
import Footer from '../components/Footer';
import { products } from '../data/products';

const Index = () => {
  const [currentProduct, setCurrentProduct] = useState(products[0]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);

  const getRandomProduct = () => {
    const randomIndex = Math.floor(Math.random() * products.length);
    return products[randomIndex];
  };

  const handleShowAnother = () => {
    setIsAnimating(true);
    setShowFireworks(false);
    
    setTimeout(() => {
      setCurrentProduct(getRandomProduct());
      setIsAnimating(false);
      setShowFireworks(true);
      
      setTimeout(() => setShowFireworks(false), 1500);
    }, 600);
  };

  useEffect(() => {
    // Show initial fireworks on first load
    setTimeout(() => setShowFireworks(true), 300);
    setTimeout(() => setShowFireworks(false), 1800);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid-pattern"></div>
      </div>
      
      {/* Fireworks effect */}
      {showFireworks && (
        <div className="fireworks absolute inset-0 pointer-events-none z-20">
          {[...Array(8)].map((_, i) => (
            <div key={i} className={`star star-${i + 1}`}>✨</div>
          ))}
        </div>
      )}

      <div className="relative z-10 container mx-auto px-6 py-12 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 pixel-font leading-tight">
            ONE FUN THING
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-400 mb-4 pixel-font">
            UNDER $10
          </h2>
          <p className="text-slate-300 text-lg pixel-font opacity-80">
            🎮 Discover something amazing 🎮
          </p>
        </div>

        {/* Product Display */}
        <ProductDisplay 
          product={currentProduct} 
          isAnimating={isAnimating}
          showFireworks={showFireworks}
        />

        {/* Action Button */}
        <div className="flex justify-center mt-12">
          <ArcadeButton
            onClick={handleShowAnother}
            variant="secondary"
            disabled={isAnimating}
            className="text-xl px-8 py-4"
          >
            {isAnimating ? "🎲 ROLLING..." : "🎰 SHOW ME ANOTHER!"}
          </ArcadeButton>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
