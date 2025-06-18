
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
      bg-gradient-to-r from-gray-900 to-gray-800 
      border-gray-700/50 text-white font-black
      hover:from-gray-800 hover:to-gray-700
      focus:ring-gray-500/50
      shadow-gray-900/25 hover:shadow-gray-900/40
      hover:border-gray-600/50
    `,
    secondary: `
      bg-gradient-to-r from-gray-100 to-gray-50 
      border-gray-300/50 text-gray-900 font-black
      hover:from-white hover:to-gray-100
      focus:ring-gray-400/50
      shadow-gray-500/25 hover:shadow-gray-500/40
      hover:border-gray-400/50
    `
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Button content */}
      <span className="relative z-10">
        {children}
      </span>
    </button>
  );
};

export default ArcadeButton;
