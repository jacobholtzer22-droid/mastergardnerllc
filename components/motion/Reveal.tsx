'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { ReactNode } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

const OFFSET = 28;

function offsetFor(dir: Direction) {
  switch (dir) {
    case 'up':
      return { y: OFFSET };
    case 'down':
      return { y: -OFFSET };
    case 'left':
      return { x: OFFSET };
    case 'right':
      return { x: -OFFSET };
    default:
      return {};
  }
}

/**
 * Fades + slides its children into view the first time they enter the viewport.
 * Honors prefers-reduced-motion (renders instantly, no transform).
 */
export default function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className = '',
  as = 'div',
  amount = 0.25,
}: {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  as?: 'div' | 'section' | 'li' | 'span';
  amount?: number;
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  const variants: Variants = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, ...offsetFor(direction) },
        show: { opacity: 1, x: 0, y: 0 },
      };

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
