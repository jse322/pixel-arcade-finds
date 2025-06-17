
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 mt-16 py-8 px-4 border-t-4 border-cyan-400 bg-gray-900 bg-opacity-80">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <p className="text-sm text-gray-300 pixel-font">
          ⚠️ This site contains affiliate links. We may earn a commission when you buy through our links. ⚠️
        </p>
        <p className="text-lg text-pink-300 pixel-font">
          💸 Impulse browsing is self-care 💸
        </p>
        <p className="text-xs text-gray-400 pixel-font">
          🎮 GAME OVER? PRESS F5 TO CONTINUE 🎮
        </p>
      </div>
    </footer>
  );
};

export default Footer;
