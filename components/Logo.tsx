
import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "h-12", showText = true, light = false }) => {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <svg viewBox="0 0 400 300" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Buildings Silhouette */}
        <path d="M210 110h8v40h-8zM220 100h10v50h-10zM232 85h12v65h-12zM248 105h10v45h-10z" fill={light ? "#ffffff" : "#0a3d62"} fillOpacity="0.8" />
        
        {/* Droplet with Bolt */}
        <defs>
          <linearGradient id="dropGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3498db" />
            <stop offset="100%" stopColor="#2980b9" />
          </linearGradient>
        </defs>
        <path d="M185 105c0 10-8 18-18 18s-18-8-18-18c0-15 18-35 18-35s18 20 18 35z" fill="url(#dropGrad)" />
        <path d="M167 90l-4 10h3l-2 8 7-10h-3l2-8z" fill="white" />

        {/* Swooshes */}
        <path d="M100 170c0-30 100-50 200-20" stroke="#f58220" strokeWidth="6" strokeLinecap="round" fill="none" />
        <path d="M320 150c0 40-120 70-240 20" stroke="#4db748" strokeWidth="8" strokeLinecap="round" fill="none" />

        {/* MEP Text */}
        <text x="125" y="195" fontFamily="Arial Black, sans-serif" fontSize="64" fontWeight="900">
          <tspan fill="#0a3d62">M</tspan>
          <tspan fill="#f58220">E</tspan>
          <tspan fill="#4db748">P</tspan>
        </text>

        {/* Bottom Text */}
        {showText && (
          <g>
            <text x="50" y="240" fontFamily="Poppins, sans-serif" fontSize="24" fontWeight="800" fill={light ? "#ffffff" : "#0a3d62"}>
              DREAM OPERATION
            </text>
            <text x="85" y="270" fontFamily="Poppins, sans-serif" fontSize="22" fontWeight="800" fill={light ? "#ffffff" : "#0a3d62"}>
              SOLUTION <tspan fill="#f58220">PVT. LTD.</tspan>
            </text>
          </g>
        )}
      </svg>
    </div>
  );
};

export default Logo;
