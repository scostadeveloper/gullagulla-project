import React from 'react';

interface IconProps {
  size?: number;
  className?: string;
  color?: string;
}

const EstrelaIcon: React.FC<IconProps> = ({ 
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
      {/* Estrela principal */}
      <path
        d="M12 2L14.09 8.26L22 9L16 14.74L17.18 22.02L12 18.77L6.82 22.02L8 14.74L2 9L9.91 8.26L12 2Z"
        fill={color}
        stroke={color}
        strokeWidth="0.5"
      />
      {/* Brilho interno */}
      <path
        d="M12 4L13.5 9L18 9.5L14.5 12.5L15.5 17L12 14.5L8.5 17L9.5 12.5L6 9.5L10.5 9L12 4Z"
        fill="rgba(255,255,255,0.3)"
      />
      {/* Pontos de brilho */}
      <circle cx="12" cy="8" r="0.8" fill="rgba(255,255,255,0.6)" />
      <circle cx="10" cy="12" r="0.5" fill="rgba(255,255,255,0.4)" />
      <circle cx="14" cy="12" r="0.5" fill="rgba(255,255,255,0.4)" />
    </svg>
  );
};

export default EstrelaIcon;