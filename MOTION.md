# Motion Animation Guide

This starter includes [Motion](https://motion.dev/) - a production-grade animation library for React. 

## 🚀 Quick Start

```tsx
import { MotionSection, MotionText, MotionButton } from "@/components/motion";

export default function Page() {
  return (
    <MotionSection variant="slideUp" className="py-24">
      <MotionText as="h1" variant="reveal" className="text-4xl font-bold">
        Animated Heading
      </MotionText>
      <MotionButton variant="primary" size="lg">
        Animated Button
      </MotionButton>
    </MotionSection>
  );
}
```

## 📦 Available Components

* `MotionSection` - Scroll-triggered sections (variants: fade, slideUp, stagger)
* `MotionCard` - Animated cards (variants: hover, scale, slide)  
* `MotionButton` - Interactive buttons (variants: primary, secondary, outline, ghost)
* `MotionText` - Animated text (variants: reveal, fade, stagger)

## 🎯 Key Principles

1. **Use Motion components** instead of CSS transitions for complex animations
2. **Scroll-triggered animations** for better performance
3. **Respect user preferences** - Motion handles `prefers-reduced-motion` automatically
4. **Keep animations subtle** and purposeful
5. **Use pre-configured variants** from `@/lib/motion`

## 🔗 Resources for AI Agents

* [Motion Documentation](https://motion.dev/docs/react) - Complete API reference
* [Motion Examples](https://motion.dev/examples) - Real-world animation examples  
* [Motion Transitions](https://motion.dev/docs/react-transitions) - Page and layout transitions
* [Motion Scroll](https://motion.dev/docs/react-use-scroll) - Scroll-triggered animations
* [Motion Component](https://motion.dev/docs/react-motion-component) - Core animation component
* [Animation Best Practices](https://motion.dev/docs/guides/accessibility) - Accessibility guidelines
* [Performance Guide](https://motion.dev/docs/guides/performance) - Performance optimization tips

## 💡 For Advanced Animations

When you need more than the basic components, refer to the Motion documentation above. The library provides powerful APIs for:

* Custom animation variants
* Complex scroll animations  
* Layout animations
* Gesture-based interactions
* Page transitions
* And much more!

---

**Remember:** Great animations enhance UX without overwhelming it. Keep them subtle, purposeful, and performant! ✨
