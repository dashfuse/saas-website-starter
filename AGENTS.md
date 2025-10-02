# AGENTS.md

AI Coding Agent Instructions for Next.js 15 + shadcn/ui Marketing Starter

---

## 🎯 Project Overview

This is a **UI-only marketing website starter** built with Next.js 15, React 19, TypeScript, Tailwind CSS 4, and shadcn/ui. It supports **INSTANT live theme customization** through design tokens and is optimized for building beautiful marketing pages WITHOUT backend logic.

**Key Philosophy:** All styling uses CSS variables (design tokens) from `globals.css` to enable magical instant theme switching. **NEVER use hardcoded Tailwind colors.**

---

## 🚀 Setup Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production (MUST pass before finishing any task)
npm run build

# Run linter
npm run lint

# Format code
npm run format
```

---

## 🎨 Design System Rules (CRITICAL - READ FIRST!)

### **THE MOST IMPORTANT RULE: Zero Hardcoded Colors**

**✅ ALWAYS USE:**
* `bg-background` / `text-foreground`
* `bg-primary` / `text-primary-foreground`
* `bg-secondary` / `text-secondary-foreground`
* `bg-muted` / `text-muted-foreground`
* `bg-accent` / `text-accent-foreground`
* `bg-destructive` / `text-destructive-foreground`
* `bg-card` / `text-card-foreground`
* `bg-popover` / `text-popover-foreground`
* `border-border`,   `border-input`,   `focus:ring-ring`
* `rounded-sm`,   `rounded-md`,  `rounded-lg` (based on `--radius`)

**❌ NEVER USE:**
* `bg-blue-500`,   `text-gray-600`,   `bg-slate-100`,   `text-zinc-800`
* `dark:bg-gray-900`,  `dark:text-white` (tokens handle dark mode automatically)
* Any hardcoded color class from Tailwind

**WHY:** Using CSS variables enables users to change colors in real-time via the DesignPanel without regenerating code. One hardcoded color breaks this magic.

### **Contrast Pairing Rules**

ALWAYS pair background + foreground tokens:
* `bg-primary` → `text-primary-foreground`
* `bg-card` → `text-card-foreground`
* `bg-secondary` → `text-secondary-foreground`
* `bg-muted` → `text-muted-foreground`
* `bg-accent` → `text-accent-foreground`
* `bg-destructive` → `text-destructive-foreground`

This ensures WCAG AA compliance (4.5:1 for text, 3:1 for UI) in both light and dark modes.

---

## 📁 File Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout (DO NOT modify fonts or theme setup)
│   ├── page.tsx                # Homepage (PRIMARY entry point - always update this)
│   ├── globals.css             # Design tokens (NEVER modify - managed by DesignPanel)
│   ├── fonts/                  # Local fonts (Geist Sans, Geist Mono)
│   └── (marketing)/            # Marketing pages (pricing, features, about, contact)
├── components/
│   ├── ui/                     # shadcn components (DO NOT edit - regenerate instead)
│   └── [feature]/              # Custom components (hero, pricing-card, etc.)
└── lib/
    └── utils.ts                # Utility functions (cn helper, etc.)
```

---

## 🛠️ Code Style

### TypeScript

* Strict mode enabled
* Explicit return types for exported functions
* Use `type` for object shapes,  `interface` for extendable contracts

### React

* Functional components with TypeScript
* Use `'use client'` directive when needed (forms, interactivity, hooks)
* Server components by default (no `'use client'` unless required)

### Styling

* Tailwind utility classes only
* Use `cn()` helper from `lib/utils.ts` for conditional classes
* Mobile-first responsive design (`sm:`,   `md:`,   `lg:`,   `xl:`,   `2xl:`)

### Imports

* Absolute imports with `@/` alias
* Auto-sorted by Prettier plugin
* Group: React → Next.js → External → Internal

---

## 🧩 Component Patterns

### Hero Section

```tsx
<section className="flex flex-col items-center space-y-4 text-center">
  <h1 className="text-4xl font-bold text-foreground">
    Your Value Proposition
  </h1>
  <p className="text-xl text-muted-foreground max-w-2xl">
    Supporting copy that explains the benefit
  </p>
  <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg">
    Get Started
  </button>
</section>
```

### Feature Card

```tsx
<div className="bg-card text-card-foreground border border-border rounded-lg p-6 space-y-2">
  <h3 className="text-xl font-semibold">Feature Title</h3>
  <p className="text-muted-foreground">Feature description</p>
</div>
```

### Form Input

```tsx
<div className="space-y-2">
  <label className="text-sm font-medium text-foreground">Email</label>
  <input 
    type="email"
    className="bg-background border-input focus:ring-ring w-full px-3 py-2 rounded-md"
  />
</div>
```

---

## 🚫 Strict Scope: UI-Only Starter

**DO NOT implement:**
* Authentication (login, register, sessions)
* Protected routes or middleware auth
* Databases or server actions
* API routes or endpoints
* Email verification or password reset
* Payments (Stripe, PayPal, etc.)
* Admin dashboards with real data

**IF REQUESTED:** Politely inform user to switch to a full-stack starter. You can create static/mock UI to illustrate the concept, but NO server handlers.

---

## 🎭 shadcn/ui Component Usage

### Installing Components

```bash
npx shadcn@latest add [component-name] --yes --overwrite
```

### Available Components

Check [shadcn/ui docs](https://ui.shadcn.com/docs/components) for full list. Common ones:
* `button`,   `card`,   `input`,   `label`,   `form`
* `dialog`,   `dropdown-menu`,   `popover`,   `sheet`
* `accordion`,   `tabs`,   `toast`,   `tooltip`

### NEVER Edit components/ui/

These are generated files. If you need customization:
1. Create a new component in `components/` that wraps the shadcn component
2. Or reinstall with `npx shadcn@latest add [component] --overwrite`

---

## ♿ Accessibility Requirements

* All interactive elements: proper ARIA labels
* Color contrast: WCAG AA minimum (4.5:1 text, 3:1 UI)
* Forms: labels + error states
* Keyboard navigation: all interactive elements
* Focus indicators: automatic via `ring-ring`

---

## 📱 Responsive Design

* Mobile-first approach
* Breakpoints: `sm:640px`,   `md:768px`,   `lg:1024px`,   `xl:1280px`,   `2xl:1536px`
* Touch targets: minimum 44x44px on mobile
* Test across all breakpoints

---

## 🔍 Testing & Validation

### Before Completing Any Task

1. **Run Build:**
   

```bash
   npm run build
   ```

   Must pass with zero errors. If it fails, fix ALL errors and rebuild.

2. **Run Linter:**
   

```bash
   npm run lint
   ```

   Fix any warnings or errors.

3. **Visual Check:**
   - Open `http://localhost:3000` in browser
   - Test light/dark mode toggle
   - Verify no hardcoded colors (change theme to check)
   - Test responsive breakpoints

---

## 🏗️ Homepage Policy

** `app/page.tsx` is the PRIMARY entry point.**

After ANY UI work:
1. Ensure `app/page.tsx` renders the main user-facing experience
2. Include: Hero section, value proposition, prominent CTA
3. Users should immediately understand what the product does

---

## 🚨 Critical Preservation Rules

### 1. DO NOT Modify `globals.css`

Design tokens are managed by the DesignPanel. Editing them breaks live theming.

### 2. DO NOT Edit `layout.tsx` Font Setup

The `geistSans` and `geistMono` font configuration must stay intact.

### 3. DO NOT Remove Theme Provider

The `<ThemeProvider attribute='class'>` wrapper enables dark mode.

### 4. DO NOT Use Dark Mode Prefixes

NEVER use `dark:bg-gray-900` or similar. CSS variables handle this automatically.

---

## 📚 Additional Resources

* [Next.js 15 Docs](https://nextjs.org/docs)
* [shadcn/ui Components](https://ui.shadcn.com/docs/components)
* [Tailwind CSS](https://tailwindcss.com/docs)
* [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

## 💡 Common Tasks

### Add a New Page

```bash
# Create file: src/app/(marketing)/about/page.tsx
# Use marketing group for marketing pages
```

### Add a New Component

```bash
# Create file: src/components/pricing-card.tsx
# Import shadcn components from @/components/ui/
```

### Install shadcn Component

```bash
npx shadcn@latest add dialog --yes
```

---

## ✨ Success Criteria

A task is complete when:
1. ✅ `npm run build` passes with zero errors
2. ✅ No hardcoded Tailwind colors used
3. ✅ All `bg-{token}` paired with `text-{token}-foreground`
4. ✅ Mobile-responsive (tested at all breakpoints)
5. ✅ WCAG AA accessible (contrast, labels, keyboard nav)
6. ✅ `app/page.tsx` renders compelling homepage

---

**Remember:** This starter enables MAGICAL instant theme customization. Every color choice you make using design tokens allows users to personalize their site without touching code. That's the magic! ✨
