import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

export type MotionTag =
  | 'div'
  | 'section'
  | 'header'
  | 'nav'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'p'
  | 'span'
  | 'button'
  | 'a'
  | 'article';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  as?: MotionTag;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className = '',
  as = 'div',
  style,
  onClick,
}) => {
  const MotionComponent = (motion[as] || motion.div) as React.ComponentType<HTMLMotionProps<any>>;

  return (
    <MotionComponent
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
      style={style}
      onClick={onClick}
    >
      {children}
    </MotionComponent>
  );
};
