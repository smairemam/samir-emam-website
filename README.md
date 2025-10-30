# Samir Emam — Personal Brand Website

A modern, responsive single-page website showcasing Samir Emam's 13+ years of expertise in social media marketing and digital campaign management.

## 🌟 Features

- **Single-Page Design**: Smooth scrolling navigation with sticky header
- **Responsive Layout**: Mobile-first design optimized for all devices
- **Interactive UI**: Scroll-triggered animations, hover effects, and smooth transitions
- **SEO Optimized**: Complete meta tags, Open Graph, and Twitter Card support
- **Performance**: Optimized for fast loading and excellent Lighthouse scores
- **Accessibility**: WCAG AA compliant with proper ARIA roles and keyboard navigation
- **Analytics Ready**: Google Analytics 4 integration placeholder

## 🛠️ Tech Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Routing**: Wouter
- **Deployment**: Vercel

## 📦 Installation

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Setup

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/samir-emam-website.git
cd samir-emam-website
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🚀 Build & Deploy

### Build for Production

```bash
pnpm build
```

The build output will be in the `client/dist` directory.

### Deploy to Vercel

This project is configured for seamless Vercel deployment:

1. **Via Vercel CLI**:
```bash
npm i -g vercel
vercel
```

2. **Via GitHub Integration**:
   - Push your code to GitHub
   - Import the repository in [Vercel Dashboard](https://vercel.com/new)
   - Vercel will automatically detect the configuration from `vercel.json`

### Environment Variables

The following environment variables are automatically configured:

- `VITE_APP_TITLE`: Website title
- `VITE_APP_LOGO`: Logo/favicon path
- `VITE_ANALYTICS_ENDPOINT`: Analytics endpoint
- `VITE_ANALYTICS_WEBSITE_ID`: Analytics website ID

## 📧 Contact Form Integration

The contact form is ready for integration with [Formspree](https://formspree.io/):

1. Create a free account at [formspree.io](https://formspree.io/)
2. Create a new form and get your form endpoint
3. Update `client/src/components/Contact.tsx`:
```typescript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData),
});
```

Alternatively, you can use Netlify Forms if deploying to Netlify.

## 📊 Google Analytics Setup

To enable Google Analytics:

1. Get your GA4 Measurement ID from [Google Analytics](https://analytics.google.com/)
2. Update `client/index.html` and uncomment the GA script
3. Replace `GA_MEASUREMENT_ID` with your actual ID

## 🎨 Customization

### Colors

The design system uses a professional color palette defined in `client/src/index.css`:

- **Primary (Navy)**: `#0B1E3F`
- **Accent (Teal)**: `#1BB3A9`
- **Background**: `#F7F8FA`
- **Text**: `#222222`

### Content

Update content in the component files:
- `client/src/components/Hero.tsx` - Hero section
- `client/src/components/About.tsx` - About section
- `client/src/components/Skills.tsx` - Skills and platforms
- `client/src/components/Experience.tsx` - Work experience
- `client/src/components/Projects.tsx` - Featured projects
- `client/src/components/Education.tsx` - Education and certifications
- `client/src/components/Contact.tsx` - Contact information

### CV/Resume

Replace the CV file at `client/public/assets/SamirProfile.pdf` with your updated resume.

## 📁 Project Structure

```
samir-emam-website/
├── client/
│   ├── public/
│   │   └── assets/
│   │       └── SamirProfile.pdf
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Education.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── Footer.tsx
│   │   ├── hooks/
│   │   │   └── useScrollAnimation.ts
│   │   ├── pages/
│   │   │   └── Home.tsx
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   └── index.html
├── vercel.json
├── package.json
└── README.md
```

## 🎯 Performance Optimization

- Images are lazy-loaded
- Fonts are preloaded
- Assets are cached with aggressive caching headers
- Code splitting for optimal bundle size
- Responsive images for different screen sizes

## 📄 License

© 2025 Samir Emam. All rights reserved.

## 🤝 Contact

**Samir Emam**
- Email: samemam71@gmail.com
- Phone: +971 50 603 4637
- LinkedIn: [linkedin.com/in/samiremam](https://www.linkedin.com/in/samiremam)
- Location: Dubai Silicon Oasis, UAE

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
