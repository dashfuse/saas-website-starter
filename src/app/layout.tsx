/**
 * Root Layout Component
 *
 * ⚠️ CRITICAL PRESERVATION RULES - DO NOT MODIFY:
 *
 * 1. Font Setup (geistSans, geistMono):
 *    These local fonts define --font-geist-sans and --font-geist-mono variables.
 *    Removing them breaks the font system. NEVER touch this configuration.
 *
 * 2. globals.css Import:
 *    Contains design tokens managed by DesignPanel. NEVER modify globals.css directly.
 *
 * 3. ThemeProvider:
 *    Enables automatic light/dark mode switching via .dark class.
 *    The attribute='class' is essential for theme system. DO NOT REMOVE.
 *
 * 4. Body Classes:
 *    - bg-background / text-foreground: Uses design tokens (NOT hardcoded colors)
 *    - Font variables: Applies Geist fonts throughout the app
 *    - antialiased: Improves text rendering
 *
 * 5. suppressHydrationWarning:
 *    Required for next-themes to prevent hydration mismatches. DO NOT REMOVE.
 */
import type { ReactNode } from 'react';

import type { Metadata } from 'next';
import localFont from 'next/font/local';

import { ThemeProvider } from 'next-themes';

import '@/app/globals.css';

// Design tokens - NEVER modify this file directly

// ⚠️ CRITICAL: Do not modify font configuration
// These define CSS variables used throughout the app
const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900'
});

const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900'
});

// Update these with your project details
export const metadata: Metadata = {
    title: 'Your Project Name',
    description: 'Your project description'
};

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        // suppressHydrationWarning: Required for next-themes (prevents hydration mismatch)
        // Reference: https://github.com/pacocoursey/next-themes#with-app
        <html suppressHydrationWarning lang='en'>
            <body
                // ⚠️ CRITICAL: Use ONLY design token classes (bg-background, text-foreground)
                // NEVER use hardcoded colors (bg-gray-900, text-white, etc.)
                className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground overscroll-none antialiased`}>
                {/* ⚠️ CRITICAL: ThemeProvider enables dark mode - DO NOT REMOVE */}
                {/* attribute='class' adds .dark class to <html> for theme switching */}
                <ThemeProvider attribute='class'>{children}</ThemeProvider>
            </body>
        </html>
    );
};

export default Layout;
