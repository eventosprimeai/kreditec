"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';

export function AnimatedSection({ 
  children, 
  className = '', 
  delay = 0 
}: { 
  children: React.ReactNode, 
  className?: string, 
  delay?: number 
}) {
  const variants: Variants = {
    hidden: { opacity: 0, y: 16, scale: 0.98 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { duration: 0.6, ease: "easeOut", delay } 
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
