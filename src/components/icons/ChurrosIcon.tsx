import React from 'react';

interface ChurrosIconProps {
  size?: number;
  className?: string;
  color?: string;
}

const ChurrosIcon: React.FC<ChurrosIconProps> = ({ 
  size = 24, 
  className = '', 
  color = 'currentColor' 
}) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      className={className}
    >
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        fill={color} 
        fillOpacity="0.1" 
        stroke={color} 
        strokeWidth="2"
      />
      <path 
        d="M8 12L16 12" 
        stroke={color} 
        strokeWidth="2" 
        strokeLinecap="round"
      />
      <path 
        d="M12 8L12 16" 
        stroke={color} 
        strokeWidth="2" 
        strokeLinecap="round"
      />
    </svg>
  );
};

export default ChurrosIcon;
