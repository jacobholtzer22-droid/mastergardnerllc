'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { ReactNode } from 'react';

/**
 * Container that staggers the entrance of its <StaggerItem> children as the
 * group scrolls into view. Pair with StaggerItem.
 */
export function Stagger({
  children,
  className = '',
  stagger = 0.1,
  delay = 0,
  amount = 0.2,
  as = 'div',
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  amount?: number;
  as?: 'div' | 'ul' | 'section';
}) {
  const MotionTag = motion[as] as typeof motion.div;
  const variants: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
    >
      {children}
    </MotionTag>
  );
}

export function StaggerItem({
  children,
  className = '',
  direction = 'up',
  as = 'div',
}: {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'left' | 'right';
  as?: 'div' | 'li';
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  const offset =
    direction === 'left' ? { x: 24 } : direction === 'right' ? { x: -24 } : { y: 24 };

  const variants: Variants = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, ...offset },
        show: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
        },
      };

  return (
    <MotionTag className={className} variants={variants}>
      {children}
    </MotionTag>
  );
}
