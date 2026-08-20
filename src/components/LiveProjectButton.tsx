/* eslint-disable @shopify/jsx-no-hardcoded-content */
import React from 'react';

interface LiveProjectButtonProps {
  onClick?: () => void;
  className?: string;
  href?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({
  onClick,
  className = '',
  href,
}) => {
  const content = (
    <span className="inline-flex items-center gap-2">
      Live Project
    </span>
  );

  const baseClasses = `rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:bg-[#D7E2EA]/10 transition-all duration-300 cursor-pointer select-none inline-block text-center ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
      >
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {content}
    </button>
  );
};
