import React, { useRef, useState, useEffect } from 'react';

interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const Magnet: React.FC<MagnetProps> = ({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className = '',
  style = {},
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dist = Math.hypot(e.clientX - centerX, e.clientY - centerY);
      const maxDistance = Math.max(rect.width, rect.height) / 2 + padding;

      if (dist < maxDistance) {
        setIsActive(true);
        const offsetX = (e.clientX - centerX) / strength;
        const offsetY = (e.clientY - centerY) / strength;
        setPosition({ x: offsetX, y: offsetY });
      } else {
        if (isActive) {
          setIsActive(false);
          setPosition({ x: 0, y: 0 });
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [padding, strength, isActive]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        transform: `translate3d(${position.x}px, ${position.y}px, 0px)`,
        transition: isActive ? activeTransition : inactiveTransition,
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
};
