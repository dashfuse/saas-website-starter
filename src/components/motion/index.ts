/**
 * Motion Components
 *
 * Pre-built animated components using Motion library for React.
 * All components respect the design system and use CSS variables.
 */

export { MotionSection } from './motion-section';
export { MotionCard } from './motion-card';
export { MotionButton } from './motion-button';
export { MotionText } from './motion-text';

// Re-export motion utilities for advanced usage
export {
    DURATION,
    EASING,
    fadeIn,
    slideUp,
    slideDown,
    slideLeft,
    slideRight,
    scaleIn,
    staggerContainer,
    staggerItem,
    hoverScale,
    hoverLift,
    scrollFadeIn,
    scrollSlideUp,
    buttonHover,
    buttonTap,
    cardHover,
    textReveal,
    pageTransition
} from '@/lib/motion';
