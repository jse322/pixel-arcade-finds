
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
    pixel-font font-bold py-3 px-6 rounded-lg transition-all duration-200
    border-4 transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed
    shadow-lg hover:shadow-xl
  `;

  const variantStyles = {
    primary: `
      bg-gradient-to-r from-green-400 to-green-500 
      border-green-300 text-gray-900 
      hover:from-green-300 hover:to-green-400
      pixel-shadow-green
    `,
    secondary: `
      bg-gradient-to-r from-pink-500 to-purple-500 
      border-pink-300 text-white 
      hover:from-pink-400 hover:to-purple-400
      pixel-shadow-pink
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
