import React from 'react';

interface IconProps {
  size?: number;
  className?: string;
  color?: string;
}

const BebidaIcon: React.FC<IconProps> = ({ 
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
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Copo */}
      <path
        d="M7 4H17C17.5 4 18 4.5 18 5V6H6V5C6 4.5 6.5 4 7 4Z"
        fill={color}
        stroke={color}
        strokeWidth="0.5"
      />
      {/* Corpo do copo */}
      <path
        d="M6.5 6L7.5 20C7.6 20.5 8 21 8.5 21H15.5C16 21 16.4 20.5 16.5 20L17.5 6H6.5Z"
        fill={color}
        stroke={color}
        strokeWidth="0.5"
      />
      {/* Líquido */}
      <path
        d="M7 8L7.8 18C7.85 18.3 8.1 18.5 8.4 18.5H15.6C15.9 18.5 16.15 18.3 16.2 18L17 8H7Z"
        fill="rgba(255,255,255,0.3)"
      />
      {/* Canudo */}
      <rect
        x="13"
        y="2"
        width="1.5"
        height="8"
        rx="0.75"
        fill={color}
        opacity="0.8"
      />
      {/* Bolhas */}
      <circle cx="10" cy="12" r="0.8" fill="rgba(255,255,255,0.4)" />
      <circle cx="13" cy="14" r="0.6" fill="rgba(255,255,255,0.3)" />
      <circle cx="11" cy="16" r="0.5" fill="rgba(255,255,255,0.3)" />
      <circle cx="14" cy="10" r="0.4" fill="rgba(255,255,255,0.2)" />
    </svg>
  );
};

export default BebidaIcon;