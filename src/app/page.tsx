/**
 * Homepage - Primary Entry Point
 *
 * This is the MAIN landing page that users see when they visit your site.
 * Always ensure this page provides a clear value proposition and prominent CTA.
 *
 * DESIGN SYSTEM RULES:
 * - Use ONLY CSS variable classes (bg-background, text-foreground, bg-primary, etc.)
 * - NEVER use hardcoded colors (bg-blue-500, text-gray-600, etc.)
 * - Always pair bg-{token} with text-{token}-foreground for proper contrast
 *
 * MOTION RULES:
 * - Use Motion components for smooth animations
 * - Respect user's motion preferences (respects prefers-reduced-motion)
 * - Keep animations subtle and purposeful
 * - Use scroll-triggered animations for better performance
 *
 * Example Hero Pattern:
 * ```tsx
 * <MotionSection variant="slideUp" className="py-24">
 *   <MotionText as="h1" variant="reveal" className="text-5xl font-bold text-foreground">
 *     Your Product Name
 *   </MotionText>
 *   <MotionText as="p" variant="fade" className="text-xl text-muted-foreground max-w-2xl">
 *     Clear value proposition in one sentence
 *   </MotionText>
 *   <MotionButton variant="primary" size="lg">
 *     Get Started
 *   </MotionButton>
 * </MotionSection>
 * ```
 */

import { 
  MotionSection, 
  MotionCard, 
  MotionButton, 
  MotionText
} from "@/components/motion";

const Page = () => {
    return (
        <main className='min-h-screen'>
            {/* Hero Section with Motion */}
            <MotionSection variant="slideUp" className="flex min-h-screen flex-col items-center justify-center p-8">
                <MotionText 
                  as="h1" 
                  variant="reveal" 
                  className="text-foreground text-5xl font-bold mb-6"
                  delay={0.2}
                >
                  Welcome to Your Project
                </MotionText>

                <MotionText 
                  as="p" 
                  variant="fade" 
                  className="text-muted-foreground max-w-2xl text-xl mb-8"
                  delay={0.4}
                >
                  Build something amazing with Next.js 15, React 19, shadcn/ui, and Motion animations. 
                  This starter is ready for instant theme customization and smooth animations.
                </MotionText>

                <div className='flex gap-4'>
                  <MotionButton 
                    variant="primary" 
                    size="lg"
                    delay={0.6}
                  >
                    Get Started
                  </MotionButton>
                  <MotionButton 
                    variant="secondary" 
                    size="lg"
                    delay={0.8}
                  >
                    Learn More
                  </MotionButton>
                </div>
            </MotionSection>

            {/* Feature Cards with Stagger Animation */}
            <MotionSection variant="stagger" className="py-24 px-8">
              <div className="max-w-6xl mx-auto">
                <MotionText 
                  as="h2" 
                  variant="reveal" 
                  className="text-3xl font-bold text-foreground text-center mb-12"
                >
                  Why Choose This Starter?
                </MotionText>
                
                <div className="grid gap-8 md:grid-cols-3">
                  <MotionCard variant="hover" delay={0.1} className="p-6">
                    <h3 className='text-xl font-semibold mb-2'>Fast & Modern</h3>
                    <p className='text-muted-foreground'>
                      Built with Next.js 15 and React 19 for optimal performance and developer experience.
                    </p>
                  </MotionCard>

                  <MotionCard variant="hover" delay={0.2} className="p-6">
                    <h3 className='text-xl font-semibold mb-2'>Beautiful UI</h3>
                    <p className='text-muted-foreground'>
                      Powered by shadcn/ui components with instant theme switching and smooth animations.
                    </p>
                  </MotionCard>

                  <MotionCard variant="hover" delay={0.3} className="p-6">
                    <h3 className='text-xl font-semibold mb-2'>Motion Ready</h3>
                    <p className='text-muted-foreground'>
                      Pre-configured Motion library with scroll animations, parallax effects, and smooth transitions.
                    </p>
                  </MotionCard>
                </div>
              </div>
            </MotionSection>

            {/* Additional Features Section */}
            <MotionSection variant="slideUp" className="py-24 px-8 bg-muted/30">
              <div className="max-w-4xl mx-auto text-center">
                <MotionText 
                  as="h2" 
                  variant="reveal" 
                  className="text-3xl font-bold text-foreground mb-8"
                >
                  Built for Performance
                </MotionText>
                
                <MotionText 
                  as="p" 
                  variant="fade" 
                  className="text-muted-foreground max-w-2xl mx-auto"
                  delay={0.2}
                >
                  All animations are optimized for performance and respect user preferences. 
                  The Motion library provides smooth, hardware-accelerated animations.
                </MotionText>
              </div>
            </MotionSection>

            {/* Call to Action Section */}
            <MotionSection variant="slideUp" className="py-24 px-8 text-center">
              <MotionText 
                as="h2" 
                variant="reveal" 
                className="text-3xl font-bold text-foreground mb-4"
              >
                Ready to Build Something Amazing?
              </MotionText>
              
              <MotionText 
                as="p" 
                variant="fade" 
                className="text-muted-foreground max-w-2xl mx-auto mb-8"
                delay={0.2}
              >
                Start building your next project with this powerful starter template. 
                Everything is pre-configured and ready to go.
              </MotionText>

              <MotionButton 
                variant="primary" 
                size="lg"
                delay={0.4}
              >
                Start Building Now
              </MotionButton>
            </MotionSection>
        </main>
    );
};

export default Page;
