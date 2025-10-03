"use client";

import { motion } from "motion/react";
import { cardHover, scaleIn, slideUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface MotionCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "hover" | "scale" | "slide";
  delay?: number;
  whileHover?: boolean;
  whileTap?: boolean;
}

/**
 * MotionCard - Animated card component with hover and entrance effects
 * 
 * Features:
 * - Multiple animation variants
 * - Hover and tap interactions
 * - Respects design system colors
 * - Smooth transitions
 * 
 * Usage:
 * ```tsx
 * <MotionCard variant="hover" whileHover className="bg-card">
 *   <h3>Card Title</h3>
 *   <p>Card content</p>
 * </MotionCard>
 * ```
 */
export function MotionCard({ 
  children, 
  className = "",
  variant = "hover",
  delay = 0,
  whileHover = true,
  whileTap = true
}: MotionCardProps) {
  const getInitialVariants = () => {
    switch (variant) {
      case "scale":
        return scaleIn;
      case "slide":
        return slideUp;
      default:
        return scaleIn;
    }
  };

  const variants = getInitialVariants();

  return (
    <motion.div
      className={cn("bg-card text-card-foreground border border-border rounded-lg", className)}
      variants={variants}
      initial="hidden"
      animate="visible"
      whileHover={whileHover ? cardHover : undefined}
      whileTap={whileTap ? { scale: 0.98 } : undefined}
      transition={{ 
        duration: 0.3,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      style={{
        willChange: "transform, box-shadow"
      }}
    >
      {children}
    </motion.div>
  );
}
