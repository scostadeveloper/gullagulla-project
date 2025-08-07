import React from 'react';

interface IconProps {
  size?: number;
  className?: string;
  color?: string;
}

const DoceIcon: React.FC<IconProps> = ({ 
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
      {/* Base do bolo */}
      <ellipse
        cx="12"
        cy="19"
        rx="9"
        ry="3"
        fill={color}
      />
      {/* Primeira camada */}
      <path
        d="M3 16C3 17.5 7 19 12 19C17 19 21 17.5 21 16V13C21 14.5 17 16 12 16C7 16 3 14.5 3 13V16Z"
        fill={color}
      />
      {/* Segunda camada */}
      <path
        d="M5 13C5 14.2 8 15.5 12 15.5C16 15.5 19 14.2 19 13V10C19 11.2 16 12.5 12 12.5C8 12.5 5 11.2 5 10V13Z"
        fill={color}
      />
      {/* Terceira camada (topo) */}
      <ellipse
        cx="12"
        cy="10"
        rx="7"
        ry="2.5"
        fill={color}
      />
      {/* Cobertura/glacê */}
      <ellipse
        cx="12"
        cy="9.5"
        rx="6.5"
        ry="2"
        fill="rgba(255,255,255,0.3)"
      />
      {/* Vela */}
      <rect
        x="11.5"
        y="4"
        width="1"
        height="6"
        fill={color}
        opacity="0.8"
      />
      {/* Chama da vela */}
      <ellipse
        cx="12"
        cy="3.5"
        rx="0.8"
        ry="1.2"
        fill="#ff6b35"
      />
      {/* Decorações */}
      <circle cx="9" cy="11" r="0.5" fill="rgba(255,255,255,0.6)" />
      <circle cx="15" cy="11" r="0.5" fill="rgba(255,255,255,0.6)" />
      <circle cx="12" cy="12" r="0.4" fill="rgba(255,255,255,0.5)" />
    </svg>
  );
};

export default DoceIcon;