
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 mt-20 py-12 px-6 border-t border-white/10 bg-black/20 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <p className="text-sm text-slate-400 pixel-font">
          ⚠️ This site contains affiliate links. We may earn a commission when you buy through our links.
        </p>
        <p className="text-xl text-pink-300 pixel-font">
          💸 Impulse browsing is self-care 💸
        </p>
        <p className="text-xs text-slate-500 pixel-font">
          🎮 Made with love for curious minds 🎮
        </p>
      </div>
    </footer>
  );
};

export default Footer;
