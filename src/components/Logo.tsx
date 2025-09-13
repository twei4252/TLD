import React from 'react';

const Logo = ({ className = "", size = "large" }: { className?: string; size?: "small" | "medium" | "large" | "xlarge" }) => {
  const sizes = {
    small: "h-8 w-8",
    medium: "h-12 w-12",
    large: "h-16 w-16",
    xlarge: "h-48 w-48"
  };

  return (
    <img 
      src="/ASSETS/Untitleddesign.svg" 
      alt="Two Lazy Dogs Bar & Grill" 
      className={`${sizes[size]} ${className} object-contain`}
    />
  );
};

export default Logo;