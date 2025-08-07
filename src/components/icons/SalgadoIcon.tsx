import React from 'react';

interface IconProps {
  size?: number;
  className?: string;
  color?: string;
}

const SalgadoIcon: React.FC<IconProps> = ({ 
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
      {/* Coxinha/Salgado tradicional */}
      <path
        d="M12 2C10.5 2 9.2 2.8 8.5 4L6 9C5.5 10 5.5 11.2 6.2 12.1L8 14.5C8.5 15.2 9.2 15.7 10 15.9L11 16.5C11.3 16.7 11.7 16.7 12 16.5L13 15.9C13.8 15.7 14.5 15.2 15 14.5L16.8 12.1C17.5 11.2 17.5 10 17 9L14.5 4C13.8 2.8 12.5 2 12 2Z"
        fill={color}
        stroke={color}
        strokeWidth="0.5"
      />
      {/* Textura do salgado */}
      <circle cx="10" cy="8" r="0.5" fill="rgba(255,255,255,0.3)" />
      <circle cx="13" cy="10" r="0.5" fill="rgba(255,255,255,0.3)" />
      <circle cx="11" cy="12" r="0.5" fill="rgba(255,255,255,0.3)" />
      {/* Base/prato */}
      <ellipse
        cx="12"
        cy="20"
        rx="8"
        ry="2"
        fill="rgba(0,0,0,0.1)"
      />
    </svg>
  );
};

export default SalgadoIcon;