
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative border-t border-gray-200/50 bg-white/30 backdrop-blur-xl">
      <div className="max-w-4xl mx-auto py-12 px-6 text-center space-y-6">
        
        {/* Disclaimer */}
        <div className="bg-amber-50/80 border border-amber-200/50 rounded-2xl p-6 backdrop-blur-sm">
          <p className="text-sm text-amber-800 font-medium flex items-center justify-center gap-2">
            <span className="text-lg">⚠️</span>
            This site contains affiliate links. We may earn a commission when you purchase through our links.
          </p>
        </div>

        {/* Fun quote */}
        <div className="space-y-3">
          <p className="text-2xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            💸 Impulse browsing is self-care 💸
          </p>
          <p className="text-sm text-gray-500 font-medium">
            🎮 Made with love for curious minds 🎮
          </p>
        </div>

        {/* Decorative elements */}
        <div className="flex justify-center space-x-8 text-2xl opacity-60">
          <span className="animate-bounce" style={{animationDelay: '0s'}}>✨</span>
          <span className="animate-bounce" style={{animationDelay: '0.2s'}}>🎁</span>
          <span className="animate-bounce" style={{animationDelay: '0.4s'}}>🌟</span>
          <span className="animate-bounce" style={{animationDelay: '0.6s'}}>🎉</span>
          <span className="animate-bounce" style={{animationDelay: '0.8s'}}>💫</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
