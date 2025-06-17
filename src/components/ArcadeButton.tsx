
import React from 'react';

interface ArcadeButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
  className?: string;
}

const ArcadeButton: React.FC<ArcadeButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  disabled = false,
  className = ''
}) => {
  const baseStyles = `
    relative inline-flex items-center justify-center font-bold rounded-2xl 
    transition-all duration-300 ease-out transform 
    hover:scale-105 active:scale-98 
    disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100
    focus:outline-none focus:ring-4 focus:ring-offset-2
    shadow-lg hover:shadow-xl backdrop-blur-sm
    border-2 overflow-hidden
  `;

  const variantStyles = {
    primary: `
      bg-gradient-to-r from-emerald-500 to-cyan-500 
      border-emerald-400/50 text-white font-black
      hover:from-emerald-400 hover:to-cyan-400
      focus:ring-emerald-500/50
      shadow-emerald-500/25 hover:shadow-emerald-500/40
    `,
    secondary: `
      bg-gradient-to-r from-purple-500 to-pink-500 
      border-purple-400/50 text-white font-black
      hover:from-purple-400 hover:to-pink-400
      focus:ring-purple-500/50
      shadow-purple-500/25 hover:shadow-purple-500/40
    `
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Button content */}
      <span className="relative z-10">
        {children}
      </span>
    </button>
  );
};

export default ArcadeButton;
