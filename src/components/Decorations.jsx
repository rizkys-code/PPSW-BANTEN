import React from 'react';

// Single Leaf Illustration
export function Leaf1({ className = "", color = "currentColor" }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`w-12 h-12 select-none pointer-events-none ${className}`}
    >
      <path 
        d="M10 85C25 80 40 60 50 45C60 30 75 15 90 10C80 25 65 40 50 50C35 60 15 75 10 85Z" 
        fill={color} 
        fillOpacity="0.15" 
      />
      <path 
        d="M10 85C25 80 40 60 50 45C60 30 75 15 90 10C80 25 65 40 50 50C35 60 15 75 10 85" 
        stroke={color} 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d="M10 85C20 75 35 60 50 50C60 43 75 25 90 10" 
        stroke={color} 
        strokeWidth="1.5" 
        strokeLinecap="round" 
      />
      <path 
        d="M32 68C38 65 42 66 45 68" 
        stroke={color} 
        strokeWidth="1.5" 
        strokeLinecap="round" 
      />
      <path 
        d="M50 50C58 45 64 47 67 50" 
        stroke={color} 
        strokeWidth="1.5" 
        strokeLinecap="round" 
      />
      <path 
        d="M68 32C74 28 78 29 82 32" 
        stroke={color} 
        strokeWidth="1.5" 
        strokeLinecap="round" 
      />
    </svg>
  );
}

// Leaf Twig / Branch Illustration
export function LeafBranch({ className = "", color = "currentColor" }) {
  return (
    <svg 
      viewBox="0 0 120 150" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`w-16 h-20 select-none pointer-events-none ${className}`}
    >
      {/* Main Stem */}
      <path 
        d="M20 140C40 110 70 60 90 20" 
        stroke={color} 
        strokeWidth="3" 
        strokeLinecap="round" 
      />
      
      {/* Leaf 1 (Top) */}
      <path 
        d="M90 20C88 5 70 8 68 22C66 36 84 33 90 20Z" 
        fill={color} 
        fillOpacity="0.12" 
        stroke={color} 
        strokeWidth="2" 
        strokeLinejoin="round" 
      />
      
      {/* Leaf 2 (Right Upper) */}
      <path 
        d="M75 50C90 45 98 58 88 70C78 82 65 65 75 50Z" 
        fill={color} 
        fillOpacity="0.12" 
        stroke={color} 
        strokeWidth="2" 
        strokeLinejoin="round" 
      />
      
      {/* Leaf 3 (Left Upper) */}
      <path 
        d="M60 70C42 68 38 82 50 90C62 98 72 82 60 70Z" 
        fill={color} 
        fillOpacity="0.12" 
        stroke={color} 
        strokeWidth="2" 
        strokeLinejoin="round" 
      />
      
      {/* Leaf 4 (Right Lower) */}
      <path 
        d="M48 95C64 92 68 108 55 118C42 128 32 110 48 95Z" 
        fill={color} 
        fillOpacity="0.12" 
        stroke={color} 
        strokeWidth="2" 
        strokeLinejoin="round" 
      />

      {/* Leaf 5 (Left Lower) */}
      <path 
        d="M35 112C18 115 16 130 30 135C44 140 50 122 35 112Z" 
        fill={color} 
        fillOpacity="0.12" 
        stroke={color} 
        strokeWidth="2" 
        strokeLinejoin="round" 
      />
    </svg>
  );
}

// Wild Flower Line Art
export function Flower({ className = "", color = "currentColor" }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`w-12 h-12 select-none pointer-events-none ${className}`}
    >
      <circle cx="50" cy="50" r="8" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="2" />
      {/* Petals */}
      <path d="M50 42C50 20 40 25 50 8C60 25 50 20 50 42Z" fill={color} fillOpacity="0.1" stroke={color} strokeWidth="2" strokeLinejoin="round" />
      <path d="M50 58C50 80 60 75 50 92C40 75 50 80 50 58Z" fill={color} fillOpacity="0.1" stroke={color} strokeWidth="2" strokeLinejoin="round" />
      <path d="M42 50C20 50 25 60 8 50C25 40 20 50 42 50Z" fill={color} fillOpacity="0.1" stroke={color} strokeWidth="2" strokeLinejoin="round" />
      <path d="M58 50C80 50 75 40 92 50C75 50 80 60 58 50Z" fill={color} fillOpacity="0.1" stroke={color} strokeWidth="2" strokeLinejoin="round" />
      
      {/* Diagonals */}
      <path d="M44 44C25 25 35 18 20 20C18 35 25 25 44 44Z" fill={color} fillOpacity="0.1" stroke={color} strokeWidth="2" strokeLinejoin="round" />
      <path d="M56 56C75 75 65 82 80 80C82 65 75 75 56 56Z" fill={color} fillOpacity="0.1" stroke={color} strokeWidth="2" strokeLinejoin="round" />
      <path d="M44 56C25 75 18 65 20 80C35 82 25 75 44 56Z" fill={color} fillOpacity="0.1" stroke={color} strokeWidth="2" strokeLinejoin="round" />
      <path d="M56 44C75 25 82 35 80 20C65 18 75 25 56 44Z" fill={color} fillOpacity="0.1" stroke={color} strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

// Handdrawn Style Curly Underline
export function ScribbleUnderline({ className = "", color = "currentColor" }) {
  return (
    <svg 
      viewBox="0 0 300 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-auto select-none pointer-events-none ${className}`}
      preserveAspectRatio="none"
    >
      <path 
        d="M5 12C45 4.5 110 3 150 7.5C190 12 250 20 295 12.5C230 19 140 18 95 13.5C50 9 15 15 5 12Z" 
        fill={color} 
      />
    </svg>
  );
}

// Handdrawn Highlighter Circle/Oval
export function ScribbleCircle({ className = "", color = "currentColor" }) {
  return (
    <svg 
      viewBox="0 0 110 60" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute select-none pointer-events-none ${className}`}
    >
      <path 
        d="M10 30C10 15 45 8 75 10C105 12 102 38 80 48C58 58 15 55 8 35C2 15 50 5 95 8C101 8 103 14 102 20" 
        stroke={color} 
        strokeWidth="3.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </svg>
  );
}

// Handdrawn Curved Arrow pointing down/left or up/right
export function ScribbleArrow({ className = "", color = "currentColor" }) {
  return (
    <svg 
      viewBox="0 0 100 80" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`w-16 h-12 select-none pointer-events-none ${className}`}
    >
      <path 
        d="M10 65C30 55 50 30 75 10C65 18 45 28 35 32M75 10C70 18 68 28 65 35" 
        stroke={color} 
        strokeWidth="3.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
    </svg>
  );
}

// Organic Blob Backdrops
export function BlobBackdrop({ className = "", colorClass = "from-primary/10 to-accent/5", seed = 1 }) {
  const path = seed === 1 
    ? "M130,85 C145,100 160,120 150,140 C140,160 110,180 85,170 C60,160 40,120 35,95 C30,70 50,45 75,35 C100,25 115,70 130,85 Z"
    : seed === 2
    ? "M125,75 C140,95 170,85 175,110 C180,135 150,175 125,170 C100,165 95,120 70,110 C45,100 25,115 25,90 C25,65 75,35 95,45 C115,55 110,55 125,75 Z"
    : "M115,80 C130,90 145,75 155,95 C165,115 150,150 130,160 C110,170 85,155 65,145 C45,135 25,120 30,95 C35,70 70,45 85,50 C100,55 100,70 115,80 Z";

  return (
    <svg 
      viewBox="0 0 200 200" 
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute w-full h-full select-none pointer-events-none -z-10 ${className}`}
    >
      <defs>
        <linearGradient id={`blob-grad-${seed}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" className="stop-color-1" />
          <stop offset="100%" className="stop-color-2" />
        </linearGradient>
      </defs>
      <path d={path} fill={`url(#blob-grad-${seed})`} />
      <style>{`
        #blob-grad-${seed} .stop-color-1 { stop-color: var(--color-primary, #F58A07); stop-opacity: 0.25; }
        #blob-grad-${seed} .stop-color-2 { stop-color: var(--color-accent, #FFB347); stop-opacity: 0.05; }
        .dark #blob-grad-${seed} .stop-color-1 { stop-color: var(--color-primary, #F58A07); stop-opacity: 0.15; }
        .dark #blob-grad-${seed} .stop-color-2 { stop-color: var(--color-secondary, #4A2E16); stop-opacity: 0.02; }
      `}</style>
    </svg>
  );
}

// Watercolor / Powder Blob shapes with low opacity using the requested warm color palette
export function WatercolorBlob({ className = "", seed = 1, opacity = 0.15 }) {
  const paths = [
    "M 70 20 C 120 10, 160 30, 180 80 C 200 130, 170 180, 120 190 C 70 200, 30 160, 20 110 C 10 60, 30 30, 70 20 Z",
    "M 50 40 C 90 20, 150 10, 180 50 C 210 90, 190 150, 150 180 C 110 210, 50 190, 30 140 C 10 90, 20 50, 50 40 Z",
    "M 80 30 C 130 20, 180 40, 190 90 C 200 140, 160 180, 110 190 C 60 200, 20 150, 30 100 C 40 50, 40 30, 80 30 Z"
  ];
  
  const colors = [
    ["#FFE4D6", "#FFEDD5"],
    ["#FFF1E6", "#FCD9B6"],
    ["#FFEDD5", "#FFF1E6"]
  ];

  const path = paths[(seed - 1) % paths.length];
  const colorGrad = colors[(seed - 1) % colors.length];

  return (
    <svg 
      viewBox="0 0 200 200" 
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute select-none pointer-events-none -z-10 ${className}`}
    >
      <defs>
        <linearGradient id={`water-grad-${seed}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={colorGrad[0]} stopOpacity={opacity} />
          <stop offset="100%" stopColor={colorGrad[1]} stopOpacity={opacity * 0.4} />
        </linearGradient>
      </defs>
      <path d={path} fill={`url(#water-grad-${seed})`} />
    </svg>
  );
}

// Subtle Organic Section Divider Wave
export function SectionDivider({ className = "", flip = false }) {
  return (
    <div className={`w-full overflow-hidden leading-[0] ${flip ? 'rotate-180' : ''} ${className}`}>
      <svg 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none" 
        className="relative block w-full h-12 text-[#FFFDF9] dark:text-[#1A110B] fill-current"
      >
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35C120.73,62.77,222.18,74.8,321.39,56.44Z" />
      </svg>
    </div>
  );
}

