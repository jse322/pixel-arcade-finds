
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
    pixel-font font-bold rounded-xl transition-all duration-300
    border-2 transform hover:scale-105 active:scale-95 
    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
    shadow-lg hover:shadow-xl backdrop-blur-sm
  `;

  const variantStyles = {
    primary: `
      bg-gradient-to-r from-emerald-500 to-cyan-500 
      border-emerald-400 text-white 
      hover:from-emerald-400 hover:to-cyan-400
      hover:shadow-emerald-500/25
    `,
    secondary: `
      bg-gradient-to-r from-purple-500 to-pink-500 
      border-purple-400 text-white 
      hover:from-purple-400 hover:to-pink-400
      hover:shadow-purple-500/25
    `
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default ArcadeButton;
