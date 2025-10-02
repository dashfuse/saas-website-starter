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
 * Example Hero Pattern:
 * ```tsx
 * <section className="flex flex-col items-center space-y-6 text-center py-24">
 *   <h1 className="text-5xl font-bold text-foreground">
 *     Your Product Name
 *   </h1>
 *   <p className="text-xl text-muted-foreground max-w-2xl">
 *     Clear value proposition in one sentence
 *   </p>
 *   <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium">
 *     Get Started
 *   </button>
 * </section>
 * ```
 */

const Page = () => {
    return (
        <main className='flex min-h-screen flex-col items-center justify-center p-8'>
            {/* Hero Section - Replace with your content */}
            <section className='flex flex-col items-center space-y-6 text-center'>
                <h1 className='text-foreground text-5xl font-bold'>Welcome to Your Project</h1>

                <p className='text-muted-foreground max-w-2xl text-xl'>
                    Build something amazing with Next.js 15, React 19, and shadcn/ui. This starter is ready for instant
                    theme customization.
                </p>

                <div className='flex gap-4'>
                    <button className='bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-6 py-3 font-medium transition-colors'>
                        Get Started
                    </button>
                    <button className='bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-lg px-6 py-3 font-medium transition-colors'>
                        Learn More
                    </button>
                </div>
            </section>

            {/* Feature Cards - Example pattern */}
            <section className='mt-24 grid max-w-6xl gap-8 md:grid-cols-3'>
                <div className='bg-card text-card-foreground border-border space-y-2 rounded-lg border p-6'>
                    <h3 className='text-xl font-semibold'>Fast & Modern</h3>
                    <p className='text-muted-foreground'>Built with Next.js 15 and React 19 for optimal performance.</p>
                </div>

                <div className='bg-card text-card-foreground border-border space-y-2 rounded-lg border p-6'>
                    <h3 className='text-xl font-semibold'>Beautiful UI</h3>
                    <p className='text-muted-foreground'>
                        Powered by shadcn/ui components with instant theme switching.
                    </p>
                </div>

                <div className='bg-card text-card-foreground border-border space-y-2 rounded-lg border p-6'>
                    <h3 className='text-xl font-semibold'>Type-Safe</h3>
                    <p className='text-muted-foreground'>
                        Fully typed with TypeScript 5 for better developer experience.
                    </p>
                </div>
            </section>
        </main>
    );
};

export default Page;
