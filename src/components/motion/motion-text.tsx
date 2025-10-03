"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { textReveal, staggerContainer, staggerItem } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface MotionTextProps {
  children: React.ReactNode;
  className?: string;
  variant?: "reveal" | "stagger" | "fade";
  delay?: number;
  duration?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
}

/**
 * MotionText - Animated text component with various text animations
 * 
 * Features:
 * - Text reveal animations
 * - Staggered text animations
 * - Scroll-triggered animations
 * - Respects design system typography
 * 
 * Usage:
 * ```tsx
 * <MotionText variant="reveal" as="h1" className="text-4xl font-bold">
 *   Animated Heading
 * </MotionText>
 * ```
 */
export function MotionText({ 
  children, 
  className = "",
  variant = "reveal",
  delay = 0,
  duration = 0.6,
  as: Component = "p"
}: MotionTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-50px 0px",
    amount: 0.1 
  });

  const getVariants = () => {
    switch (variant) {
      case "stagger":
        return staggerContainer;
      case "fade":
        return textReveal;
      default:
        return textReveal;
    }
  };

  const variants = getVariants();

  if (variant === "stagger") {
    return (
      <motion.div
        ref={ref}
        className={cn(className)}
        variants={variants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ 
          duration,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
        style={{
          willChange: "transform, opacity"
        }}
      >
        <motion.div variants={staggerItem}>
          {children}
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      as={Component}
      className={cn(className)}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ 
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      style={{
        willChange: "transform, opacity"
      }}
    >
      {children}
    </motion.div>
  );
}
