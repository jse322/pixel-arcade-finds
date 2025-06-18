
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
    setTimeout(() => setShowFireworks(true), 500);
    setTimeout(() => setShowFireworks(false), 2500);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Dynamic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-50">
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-50/50 via-transparent to-pink-50/50"></div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-emerald-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Floating particles */}
      {showFireworks && (
        <div className="fixed inset-0 pointer-events-none z-30">
          {[...Array(12)].map((_, i) => (
            <div 
              key={i} 
              className="absolute animate-bounce"
              style={{
                left: `${10 + (i * 7)}%`,
                top: `${20 + (i % 3) * 20}%`,
                animationDelay: `${i * 0.1}s`,
                animationDuration: '2s'
              }}
            >
              <div className="text-2xl">
                {['✨', '🎉', '⭐', '💫', '🌟'][i % 5]}
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header Section */}
        <header className="text-center pt-8 pb-4 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block mb-4">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-200/50 rounded-full text-sm font-medium text-purple-700 backdrop-blur-sm">
                ✨ Curated Daily Discoveries
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black mb-4 leading-none">
              <span className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 bg-clip-text text-transparent">
                ONE FUN
              </span>
              <br />
              <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
                THING
              </span>
            </h1>
            
            <div className="text-xl md:text-2xl font-bold text-gray-600 mb-3">
              UNDER <span className="text-emerald-500">$10</span>
            </div>
            
            <p className="text-base text-gray-500 max-w-md mx-auto leading-relaxed">
              Discover something delightfully unexpected every day
            </p>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center px-6 py-4">
          <ProductDisplay 
            product={currentProduct} 
            isAnimating={isAnimating}
            showFireworks={showFireworks}
          />
        </main>

        {/* Action Section */}
        <section className="text-center pb-8 px-6">
          <ArcadeButton
            onClick={handleShowAnother}
            variant="secondary"
            disabled={isAnimating}
            className="text-lg px-8 py-4 mx-auto"
          >
            {isAnimating ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900 mr-2"></div>
                Finding magic...
              </>
            ) : (
              <>🎲 Surprise me again!</>
            )}
          </ArcadeButton>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Index;
