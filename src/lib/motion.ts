/**
 * Motion Utilities
 *
 * Pre-configured motion variants and utilities for consistent animations
 * across the SaaS website starter. All animations respect the design system
 * and use CSS variables for colors.
 */
import { Variants } from 'motion/react';

// Common animation durations (in seconds)
export const DURATION = {
    fast: 0.2,
    normal: 0.3,
    slow: 0.5,
    slower: 0.8
} as const;

// Common easing functions
export const EASING = {
    easeOut: [0.25, 0.46, 0.45, 0.94],
    easeIn: [0.55, 0.06, 0.68, 0.19],
    easeInOut: [0.42, 0, 0.58, 1],
    spring: { type: 'spring', stiffness: 300, damping: 30 }
} as const;

// Fade animations
export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: DURATION.normal, ease: EASING.easeOut }
    },
    exit: {
        opacity: 0,
        transition: { duration: DURATION.fast, ease: EASING.easeIn }
    }
};

// Slide animations
export const slideUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: DURATION.normal, ease: EASING.easeOut }
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: { duration: DURATION.fast, ease: EASING.easeIn }
    }
};

export const slideDown: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: DURATION.normal, ease: EASING.easeOut }
    },
    exit: {
        opacity: 0,
        y: 20,
        transition: { duration: DURATION.fast, ease: EASING.easeIn }
    }
};

export const slideLeft: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: DURATION.normal, ease: EASING.easeOut }
    },
    exit: {
        opacity: 0,
        x: -20,
        transition: { duration: DURATION.fast, ease: EASING.easeIn }
    }
};

export const slideRight: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: DURATION.normal, ease: EASING.easeOut }
    },
    exit: {
        opacity: 0,
        x: 20,
        transition: { duration: DURATION.fast, ease: EASING.easeIn }
    }
};

// Scale animations
export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: DURATION.normal, ease: EASING.easeOut }
    },
    exit: {
        opacity: 0,
        scale: 0.9,
        transition: { duration: DURATION.fast, ease: EASING.easeIn }
    }
};

// Stagger animations for lists
export const staggerContainer: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1
        }
    }
};

export const staggerItem: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: DURATION.normal, ease: EASING.easeOut }
    }
};

// Hover animations
export const hoverScale = {
    scale: 1.05,
    transition: { duration: DURATION.fast, ease: EASING.easeOut }
};

export const hoverLift = {
    y: -4,
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    transition: { duration: DURATION.fast, ease: EASING.easeOut }
};

// Scroll-triggered animations
export const scrollFadeIn: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: DURATION.slow, ease: EASING.easeOut }
    }
};

export const scrollSlideUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: DURATION.slow, ease: EASING.easeOut }
    }
};

// Button animations
export const buttonHover = {
    scale: 1.02,
    transition: { duration: DURATION.fast, ease: EASING.easeOut }
};

export const buttonTap = {
    scale: 0.98,
    transition: { duration: DURATION.fast, ease: EASING.easeIn }
};

// Card animations
export const cardHover = {
    y: -8,
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    transition: { duration: DURATION.normal, ease: EASING.easeOut }
};

// Text animations
export const textReveal: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: DURATION.slow, ease: EASING.easeOut }
    }
};

// Page transition animations
export const pageTransition: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: DURATION.normal, ease: EASING.easeOut }
    },
    exit: {
        opacity: 0,
        x: 20,
        transition: { duration: DURATION.fast, ease: EASING.easeIn }
    }
};
