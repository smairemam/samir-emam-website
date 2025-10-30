# Technical Documentation - Samir Emam Personal Website

## Table of Contents
1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Project Structure](#project-structure)
4. [Design System](#design-system)
5. [Internationalization (i18n)](#internationalization-i18n)
6. [Component Architecture](#component-architecture)
7. [Development Guide](#development-guide)
8. [Build & Deployment](#build--deployment)
9. [Maintenance & Updates](#maintenance--updates)
10. [Troubleshooting](#troubleshooting)

---

## Project Overview

**Purpose**: Professional personal brand website for Samir Emam, a Social Media Marketing Specialist with 13+ years of experience.

**Key Features**:
- Single-page application (SPA) with smooth scroll navigation
- Bilingual support (English/Arabic) with RTL layout
- Responsive design (mobile-first approach)
- SEO optimized with sitemap and meta tags
- Interactive animations and hover effects
- Contact form with validation
- Professional color scheme (Navy Blue, Black, Red accent)

**Repository**: https://github.com/smairemam/samir-emam-website

---

## Technology Stack

### Core Framework
- **React 19**: Latest React version with improved performance
- **TypeScript**: Type-safe development
- **Vite**: Fast build tool and dev server

### Styling
- **Tailwind CSS 4**: Utility-first CSS framework
- **shadcn/ui**: High-quality React components
- **Custom CSS**: For RTL support and theme customization

### Routing & State
- **Wouter**: Lightweight routing library
- **React Context API**: For language and theme management

### Icons & Assets
- **Lucide React**: Icon library
- **AI-Generated Images**: Professional imagery for profile and projects

### Development Tools
- **ESLint**: Code linting
- **TypeScript Compiler**: Type checking
- **pnpm**: Fast package manager

---

## Project Structure

```
samir-emam-website/
├── client/                          # Frontend application
│   ├── public/                      # Static assets
│   │   ├── assets/
│   │   │   ├── images/              # AI-generated images
│   │   │   │   ├── profile.jpg
│   │   │   │   ├── social-media-campaign.jpg
│   │   │   │   ├── content-creation.jpg
│   │   │   │   └── digital-strategy.jpg
│   │   ├── sitemap.xml              # SEO sitemap
│   │   └── robots.txt               # Search engine directives
│   ├── src/
│   │   ├── components/              # React components
│   │   │   ├── ui/                  # shadcn/ui components
│   │   │   ├── Navbar.tsx           # Sticky navigation
│   │   │   ├── Hero.tsx             # Hero section
│   │   │   ├── About.tsx            # About section with profile image
│   │   │   ├── Skills.tsx           # Skills showcase
│   │   │   ├── Experience.tsx       # Work experience timeline
│   │   │   ├── Projects.tsx         # Featured projects with images
│   │   │   ├── Contact.tsx          # Contact form
│   │   │   ├── Footer.tsx           # Footer with links
│   │   │   ├── LanguageToggle.tsx   # Language switcher
│   │   │   └── ErrorBoundary.tsx    # Error handling
│   │   ├── contexts/                # React contexts
│   │   │   ├── ThemeContext.tsx     # Theme management
│   │   │   └── LanguageContext.tsx  # i18n management
│   │   ├── hooks/                   # Custom React hooks
│   │   │   └── useScrollAnimation.ts # Scroll-triggered animations
│   │   ├── lib/                     # Utility functions
│   │   │   └── utils.ts             # Helper functions
│   │   ├── pages/                   # Page components
│   │   │   ├── Home.tsx             # Main page
│   │   │   └── NotFound.tsx         # 404 page
│   │   ├── App.tsx                  # App root with providers
│   │   ├── main.tsx                 # Entry point
│   │   └── index.css                # Global styles & theme
│   ├── index.html                   # HTML template
│   └── package.json                 # Dependencies
├── vercel.json                      # Vercel configuration
├── README.md                        # User documentation
├── DEPLOYMENT.md                    # Deployment guide
├── TECHNICAL_DOCUMENTATION.md       # This file
└── todo.md                          # Project tasks

```

---

## Design System

### Color Palette

```css
/* Primary - Navy Blue */
--primary: 220 60% 20%;              /* #1E3A5F */
--primary-foreground: 0 0% 100%;     /* White text on navy */

/* Accent - Red */
--accent: 0 84% 60%;                 /* #DC2626 */
--accent-foreground: 0 0% 100%;      /* White text on red */

/* Background - White */
--background: 0 0% 100%;             /* #FFFFFF */

/* Text - Black */
--foreground: 0 0% 0%;               /* #000000 */

/* Muted - Light Gray */
--muted: 220 14% 96%;                /* #F5F6F7 */
--muted-foreground: 0 0% 45%;        /* #737373 */

/* Border - Light Gray */
--border: 0 0% 90%;                  /* #E5E5E5 */
```

### Typography

**Font Family**: Inter (Google Fonts)
- **Headings**: Bold (700 weight)
- **Body**: Regular (400 weight)
- **Small Text**: Regular (400 weight)

**Font Sizes**:
- H1: 2.5rem (40px) on desktop, 2rem (32px) on mobile
- H2: 2rem (32px) on desktop, 1.75rem (28px) on mobile
- H3: 1.5rem (24px)
- Body: 1rem (16px)
- Small: 0.875rem (14px)

### Spacing

Follows Tailwind's spacing scale (0.25rem increments):
- `gap-4`: 1rem (16px)
- `gap-6`: 1.5rem (24px)
- `gap-8`: 2rem (32px)
- `py-20`: 5rem (80px) section padding

### Border Radius

- Cards: `rounded-lg` (0.5rem / 8px)
- Buttons: `rounded-md` (0.375rem / 6px)
- Images: `rounded-2xl` (1rem / 16px)

---

## Internationalization (i18n)

### Language Support

The website supports **English (en)** and **Arabic (ar)** with automatic RTL layout switching.

### Implementation

**Location**: `client/src/contexts/LanguageContext.tsx`

**Features**:
- Translation dictionary for all UI text
- Automatic RTL/LTR layout switching
- Language persistence in localStorage
- URL parameter support (`?lang=ar`)
- Document direction and lang attribute management

### Adding New Translations

1. Open `client/src/contexts/LanguageContext.tsx`
2. Add new keys to both `en` and `ar` objects:

```typescript
const translations = {
  en: {
    'new.key': 'English Text',
  },
  ar: {
    'new.key': 'النص العربي',
  },
};
```

3. Use in components:

```typescript
import { useLanguage } from '@/contexts/LanguageContext';

function MyComponent() {
  const { t } = useLanguage();
  return <h1>{t('new.key')}</h1>;
}
```

### RTL Support

**CSS Location**: `client/src/index.css` (lines 194-237)

**Features**:
- Automatic text direction reversal
- Margin/padding adjustments for RTL
- Flexbox direction reversal
- Text alignment fixes

**Testing RTL**:
1. Click the globe icon (🌐) in navigation
2. Select "العربية"
3. Verify all text aligns to the right
4. Check that spacing and layout are correct

---

## Component Architecture

### Component Hierarchy

```
App.tsx
├── LanguageProvider
│   ├── ThemeProvider
│   │   ├── TooltipProvider
│   │   │   ├── Toaster
│   │   │   └── Router
│   │   │       └── Home.tsx
│   │   │           ├── Navbar
│   │   │           │   └── LanguageToggle
│   │   │           ├── Hero
│   │   │           ├── About
│   │   │           ├── Skills
│   │   │           ├── Experience
│   │   │           ├── Projects
│   │   │           ├── Contact
│   │   │           └── Footer
```

### Key Components

#### Navbar (`client/src/components/Navbar.tsx`)

**Purpose**: Sticky navigation with active section highlighting

**Features**:
- Smooth scroll to sections
- Active section detection via Intersection Observer
- Mobile hamburger menu
- Language toggle button
- Scroll-based background transparency

**Props**: None (self-contained)

**State**:
- `isScrolled`: Boolean for scroll detection
- `activeSection`: Current visible section
- `isMobileMenuOpen`: Mobile menu visibility

**Customization**:
```typescript
// Edit navigation links
const navLinks = [
  { key: 'about', href: '#about' },
  { key: 'skills', href: '#skills' },
  // Add more sections here
];
```

#### Hero (`client/src/components/Hero.tsx`)

**Purpose**: Landing section with name, title, and CTA

**Features**:
- Large typography
- Call-to-action button
- Location information

**Customization**:
```typescript
// Edit hero content directly in JSX
<h1>{t('hero.title')}</h1>
<h2>{t('hero.subtitle')}</h2>
```

#### About (`client/src/components/About.tsx`)

**Purpose**: Professional summary with profile image

**Features**:
- Profile photo (AI-generated)
- Two-column layout (image + text)
- Scroll animation
- Responsive grid

**Image Update**:
Replace `/assets/images/profile.jpg` with your photo

#### Skills (`client/src/components/Skills.tsx`)

**Purpose**: Display core competencies and platforms

**Features**:
- Icon-based skill cards
- Platform badges
- Hover effects
- Scroll animation

**Customization**:
```typescript
// Edit skills array
const skills = [
  { name: 'Social Media Marketing', icon: Share2 },
  { name: 'Digital Marketing', icon: TrendingUp },
  // Add more skills
];

// Edit platforms
const platforms = ['Facebook', 'Instagram', 'Twitter', 'YouTube', 'Google Ads', 'LinkedIn'];
```

#### Experience (`client/src/components/Experience.tsx`)

**Purpose**: Work history timeline

**Features**:
- Chronological cards
- Company logos (icons)
- Date ranges
- Bullet-point descriptions

**Customization**:
```typescript
// Edit experience array
const experiences = [
  {
    title: 'Job Title',
    company: 'Company Name',
    location: 'Location',
    period: 'Start Date - End Date',
    duration: 'X years Y months',
    description: 'Job description...',
  },
  // Add more positions
];
```

#### Projects (`client/src/components/Projects.tsx`)

**Purpose**: Showcase featured work

**Features**:
- Project cards with images
- Objective/Action/Result structure
- Hover elevation effects
- AI-generated project images

**Customization**:
```typescript
// Edit projects array
const projects = [
  {
    title: 'Project Name',
    objective: 'What was the goal?',
    action: 'What did you do?',
    result: 'What was the outcome?',
    icon: Target,
    image: '/assets/images/your-image.jpg',
  },
  // Add more projects
];
```

#### Contact (`client/src/components/Contact.tsx`)

**Purpose**: Contact form and information

**Features**:
- Form validation
- Email, phone, location display
- Formspree integration ready
- Success/error toast notifications

**Form Integration**:
```typescript
// Update form action URL (line ~45)
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});
```

#### Footer (`client/src/components/Footer.tsx`)

**Purpose**: Site footer with links and copyright

**Features**:
- Quick links to sections
- Contact information
- Social media links
- Copyright notice

**Customization**:
```typescript
// Edit contact links
<a href="mailto:your@email.com">
<a href="tel:+1234567890">
<a href="https://linkedin.com/in/yourprofile">
```

---

## Development Guide

### Prerequisites

- **Node.js**: 18.0.0 or higher
- **pnpm**: 8.0.0 or higher (or npm/yarn)
- **Git**: For version control

### Installation

```bash
# Clone the repository
git clone https://github.com/smairemam/samir-emam-website.git
cd samir-emam-website

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The site will be available at `http://localhost:3000`

### Available Scripts

```bash
# Development server with hot reload
pnpm dev

# Type checking
pnpm type-check

# Build for production
pnpm build

# Preview production build
pnpm preview

# Lint code
pnpm lint
```

### Adding New Components

1. **Create component file**:
```bash
touch client/src/components/NewSection.tsx
```

2. **Component template**:
```typescript
import { useLanguage } from '@/contexts/LanguageContext';

export default function NewSection() {
  const { t } = useLanguage();
  
  return (
    <section id="new-section" className="py-20">
      <div className="container">
        <h2 className="text-3xl font-bold text-primary text-center mb-12">
          {t('newSection.title')}
        </h2>
        {/* Your content here */}
      </div>
    </section>
  );
}
```

3. **Add translations** in `LanguageContext.tsx`:
```typescript
'newSection.title': 'New Section',  // English
'newSection.title': 'قسم جديد',      // Arabic
```

4. **Import in Home.tsx**:
```typescript
import NewSection from '@/components/NewSection';

// Add to JSX
<NewSection />
```

5. **Add to navigation** in `Navbar.tsx`:
```typescript
const navLinks = [
  // ...existing links
  { key: 'newSection', href: '#new-section' },
];
```

### Styling Guidelines

**Use Tailwind utility classes**:
```tsx
<div className="bg-background text-foreground p-4 rounded-lg">
```

**For custom styles, use index.css**:
```css
.custom-class {
  /* Custom CSS */
}
```

**Responsive design**:
```tsx
<div className="text-sm md:text-base lg:text-lg">
  {/* Scales with screen size */}
</div>
```

**Dark mode support** (if needed):
```tsx
<div className="bg-white dark:bg-gray-900">
```

### State Management

**Local state** (useState):
```typescript
const [isOpen, setIsOpen] = useState(false);
```

**Global state** (Context):
```typescript
const { language, setLanguage } = useLanguage();
const { theme, setTheme } = useTheme();
```

### Custom Hooks

**useScrollAnimation** (`client/src/hooks/useScrollAnimation.ts`):
```typescript
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

function MyComponent() {
  const { elementRef, isVisible } = useScrollAnimation();
  
  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      Content fades in on scroll
    </div>
  );
}
```

---

## Build & Deployment

### Production Build

```bash
# Build the project
pnpm build

# Output: client/dist/
```

**Build Output**:
- `client/dist/index.html`: Entry HTML
- `client/dist/assets/`: JS, CSS, and images
- Optimized and minified for production

### Deployment to Vercel

See [DEPLOYMENT.md](./DEPLOYMENT.md) for comprehensive deployment instructions.

**Quick Deploy**:
1. Push code to GitHub
2. Visit [vercel.com/new](https://vercel.com/new)
3. Import repository
4. Click "Deploy"

Vercel automatically detects the configuration from `vercel.json`.

### Environment Variables

**Built-in variables** (auto-configured):
- `VITE_APP_TITLE`: Website title
- `VITE_APP_LOGO`: Logo path
- `VITE_ANALYTICS_ENDPOINT`: Analytics endpoint
- `VITE_ANALYTICS_WEBSITE_ID`: Analytics ID

**Custom variables** (add in Vercel dashboard):
- `VITE_GA_MEASUREMENT_ID`: Google Analytics 4 ID
- `VITE_FORMSPREE_ID`: Formspree form ID

### SEO Configuration

**Sitemap**: `client/public/sitemap.xml`
- Update URLs to match your domain
- Add new pages as they're created

**Robots.txt**: `client/public/robots.txt`
- Allows all search engines
- Points to sitemap

**Meta tags**: `client/index.html`
- Title, description, Open Graph, Twitter Cards
- Update for your brand

---

## Maintenance & Updates

### Updating Content

**Text Content**:
1. Edit translations in `client/src/contexts/LanguageContext.tsx`
2. Update both English and Arabic versions
3. Test in both languages

**Images**:
1. Replace files in `client/public/assets/images/`
2. Keep same filenames or update references in components
3. Optimize images (≤200KB recommended)

**Contact Information**:
1. Edit `client/src/components/Contact.tsx`
2. Edit `client/src/components/Footer.tsx`
3. Update email, phone, LinkedIn URLs

### Adding New Sections

1. Create component in `client/src/components/`
2. Add translations to `LanguageContext.tsx`
3. Import in `client/src/pages/Home.tsx`
4. Add navigation link in `Navbar.tsx`
5. Update sitemap.xml

### Updating Dependencies

```bash
# Check for updates
pnpm outdated

# Update all dependencies
pnpm update

# Update specific package
pnpm update react react-dom

# Test after updates
pnpm build
pnpm preview
```

### Version Control

**Branching Strategy**:
- `main`: Production-ready code
- `develop`: Development branch
- `feature/*`: New features
- `fix/*`: Bug fixes

**Commit Messages**:
```bash
git commit -m "feat: Add new testimonials section"
git commit -m "fix: Correct RTL spacing in navbar"
git commit -m "docs: Update deployment guide"
```

---

## Troubleshooting

### Common Issues

#### Build Fails

**Error**: `Module not found`
```bash
# Solution: Reinstall dependencies
rm -rf node_modules
pnpm install
```

**Error**: `TypeScript errors`
```bash
# Solution: Check types
pnpm type-check

# Fix import paths
import { Button } from '@/components/ui/button'; // Correct
import { Button } from '../components/ui/button'; // Wrong
```

#### RTL Not Working

**Issue**: Arabic text not aligning right

**Solution**:
1. Check `document.documentElement.dir` is set to `"rtl"`
2. Verify RTL CSS in `index.css` (lines 194-237)
3. Clear browser cache
4. Check for conflicting CSS

#### Images Not Loading

**Issue**: Images show broken icon

**Solution**:
1. Verify file path: `/assets/images/filename.jpg`
2. Check file exists in `client/public/assets/images/`
3. Ensure correct file extension (jpg, png, etc.)
4. Check file permissions

#### Form Not Submitting

**Issue**: Contact form doesn't send emails

**Solution**:
1. Set up Formspree account
2. Update form action URL in `Contact.tsx`
3. Check network tab for errors
4. Verify CORS settings

#### Deployment Issues

**Issue**: Site not loading on Vercel

**Solution**:
1. Check build logs in Vercel dashboard
2. Verify `vercel.json` configuration
3. Ensure all dependencies are in `package.json`
4. Check for environment variable issues

### Performance Optimization

**Slow Loading**:
1. Optimize images (use WebP format)
2. Enable lazy loading for images
3. Code split large components
4. Use Vercel's CDN

**Large Bundle Size**:
```bash
# Analyze bundle
pnpm build
npx vite-bundle-visualizer

# Remove unused dependencies
pnpm prune
```

### Debugging

**React DevTools**:
- Install browser extension
- Inspect component tree
- Check props and state

**Console Logging**:
```typescript
console.log('Debug:', { language, isVisible, formData });
```

**Network Tab**:
- Check API calls
- Verify asset loading
- Monitor performance

---

## Additional Resources

### Documentation Links

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com/)
- [Vite Guide](https://vitejs.dev/guide/)
- [Vercel Docs](https://vercel.com/docs)

### Support

- **Repository Issues**: https://github.com/smairemam/samir-emam-website/issues
- **Email**: samemam71@gmail.com

---

**Last Updated**: October 30, 2025
**Version**: 2.0.0
**Maintainer**: Samir Emam
