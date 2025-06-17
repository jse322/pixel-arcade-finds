
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
      
      setTimeout(() => setShowFireworks(false), 2000);
    }, 800);
  };

  useEffect(() => {
    // Show initial fireworks on first load
    setTimeout(() => setShowFireworks(true), 500);
    setTimeout(() => setShowFireworks(false), 2500);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-pink-900 to-purple-900 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid-pattern"></div>
      </div>
      
      {/* Scanlines effect */}
      <div className="scanlines absolute inset-0 pointer-events-none"></div>
      
      {/* Fireworks effect */}
      {showFireworks && (
        <div className="fireworks absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div key={i} className={`star star-${i + 1}`}>⭐</div>
          ))}
        </div>
      )}

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-cyan-400 mb-4 pixel-shadow animate-pulse">
            ONE FUN THING
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-pink-400 mb-2 pixel-shadow">
            UNDER $10
          </h2>
          <p className="text-yellow-300 text-sm md:text-base pixel-font">
            🎮 PRESS START TO DISCOVER AWESOME STUFF 🎮
          </p>
        </div>

        {/* Product Display */}
        <ProductDisplay 
          product={currentProduct} 
          isAnimating={isAnimating}
          showFireworks={showFireworks}
        />

        {/* Action Buttons */}
        <div className="flex flex-col items-center gap-6 mt-12">
          <ArcadeButton
            onClick={handleShowAnother}
            variant="secondary"
            disabled={isAnimating}
            className="transform hover:scale-105 transition-transform"
          >
            {isAnimating ? "LOADING..." : "🎰 SHOW ME ANOTHER! 🎰"}
          </ArcadeButton>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
