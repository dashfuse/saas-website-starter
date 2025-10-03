"use client";

import { motion } from "motion/react";
import { buttonHover, buttonTap, scaleIn } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface MotionButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  whileHover?: boolean;
  whileTap?: boolean;
  delay?: number;
}

/**
 * MotionButton - Animated button component with hover and tap effects
 * 
 * Features:
 * - Multiple button variants matching design system
 * - Hover and tap animations
 * - Respects design system colors
 * - Accessible and keyboard-friendly
 * 
 * Usage:
 * ```tsx
 * <MotionButton variant="primary" size="lg" whileHover>
 *   Get Started
 * </MotionButton>
 * ```
 */
export function MotionButton({ 
  children, 
  className = "",
  variant = "default",
  size = "md",
  disabled = false,
  onClick,
  type = "button",
  whileHover = true,
  whileTap = true,
  delay = 0
}: MotionButtonProps) {
  const getVariantClasses = () => {
    const baseClasses = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
    
    const variants = {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      primary: "bg-primary text-primary-foreground hover:bg-primary/90",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      ghost: "hover:bg-accent hover:text-accent-foreground",
    };

    const sizes = {
      sm: "h-9 px-3 text-sm",
      md: "h-10 px-4 py-2",
      lg: "h-11 px-8 text-lg",
    };

    return cn(
      baseClasses,
      variants[variant],
      sizes[size]
    );
  };

  return (
    <motion.button
      type={type}
      className={cn(getVariantClasses(), className)}
      disabled={disabled}
      onClick={onClick}
      variants={scaleIn}
      initial="hidden"
      animate="visible"
      whileHover={whileHover && !disabled ? buttonHover : undefined}
      whileTap={whileTap && !disabled ? buttonTap : undefined}
      transition={{ 
        duration: 0.2,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      style={{
        willChange: "transform"
      }}
    >
      {children}
    </motion.button>
  );
}
