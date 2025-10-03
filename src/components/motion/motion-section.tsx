"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { scrollFadeIn, scrollSlideUp, staggerContainer, staggerItem } from "@/lib/motion";

interface MotionSectionProps {
  children: React.ReactNode;
  className?: string;
  variant?: "fade" | "slideUp" | "stagger";
  delay?: number;
  duration?: number;
}

/**
 * MotionSection - Animated section component with scroll-triggered animations
 * 
 * Features:
 * - Scroll-triggered animations using useInView
 * - Multiple animation variants (fade, slideUp, stagger)
 * - Respects design system colors
 * - Optimized for performance
 * 
 * Usage:
 * ```tsx
 * <MotionSection variant="slideUp" className="py-24">
 *   <h2>Animated Content</h2>
 * </MotionSection>
 * ```
 */
export function MotionSection({ 
  children, 
  className = "", 
  variant = "fade",
  delay = 0,
  duration = 0.6
}: MotionSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-100px 0px",
    amount: 0.1 
  });

  const getVariants = () => {
    switch (variant) {
      case "slideUp":
        return scrollSlideUp;
      case "stagger":
        return staggerContainer;
      default:
        return scrollFadeIn;
    }
  };

  const variants = getVariants();

  return (
    <motion.section
      ref={ref}
      className={className}
      variants={variant === "stagger" ? variants : undefined}
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
      {variant === "stagger" ? (
        <motion.div variants={staggerItem}>
          {children}
        </motion.div>
      ) : (
        children
      )}
    </motion.section>
  );
}
