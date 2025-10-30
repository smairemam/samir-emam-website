# Deployment Guide

This guide will help you deploy the Samir Emam personal website to Vercel.

## Quick Deploy to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Visit Vercel**: Go to [vercel.com/new](https://vercel.com/new)

2. **Import Git Repository**:
   - Click "Import Git Repository"
   - Select "Import from GitHub"
   - Search for `samir-emam-website`
   - Click "Import"

3. **Configure Project**:
   - **Framework Preset**: Vite (should be auto-detected)
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `pnpm build` (auto-detected from vercel.json)
   - **Output Directory**: `client/dist` (auto-detected from vercel.json)

4. **Environment Variables** (Optional):
   - The project uses default environment variables that are already configured
   - No additional environment variables are required for basic deployment

5. **Deploy**:
   - Click "Deploy"
   - Wait for the build to complete (usually 1-2 minutes)
   - Your site will be live at `https://samir-emam-website.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**:
```bash
npm i -g vercel
```

2. **Login to Vercel**:
```bash
vercel login
```

3. **Deploy**:
```bash
cd /path/to/samir-emam-website
vercel
```

4. **Follow the prompts**:
   - Set up and deploy? Yes
   - Which scope? (Select your account)
   - Link to existing project? No
   - What's your project's name? samir-emam-website
   - In which directory is your code located? ./
   - Want to override the settings? No

5. **Production Deployment**:
```bash
vercel --prod
```

## Custom Domain Setup

After deployment, you can add a custom domain:

1. Go to your project in [Vercel Dashboard](https://vercel.com/dashboard)
2. Click on "Settings" → "Domains"
3. Add your custom domain (e.g., `samiremam.com`)
4. Follow Vercel's instructions to configure DNS records

### DNS Configuration Example

For a custom domain, add these DNS records at your domain registrar:

**For root domain (samiremam.com):**
- Type: `A`
- Name: `@`
- Value: `76.76.21.21`

**For www subdomain:**
- Type: `CNAME`
- Name: `www`
- Value: `cname.vercel-dns.com`

## Post-Deployment Configuration

### 1. Google Analytics Setup

After deployment, enable Google Analytics:

1. Get your GA4 Measurement ID from [Google Analytics](https://analytics.google.com/)
2. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
3. Add a new variable:
   - Name: `VITE_GA_MEASUREMENT_ID`
   - Value: Your GA4 Measurement ID (e.g., `G-XXXXXXXXXX`)
4. Redeploy the project

Then update `client/index.html` to use the environment variable:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=%VITE_GA_MEASUREMENT_ID%"></script>
```

### 2. Contact Form Integration

To enable the contact form:

1. **Using Formspree** (Recommended):
   - Sign up at [formspree.io](https://formspree.io/)
   - Create a new form
   - Copy your form endpoint
   - Update `client/src/components/Contact.tsx`:
   ```typescript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify(formData),
   });
   ```
   - Commit and push changes
   - Vercel will automatically redeploy

2. **Using Netlify Forms** (Alternative):
   - If deploying to Netlify instead, add `data-netlify="true"` to the form element
   - Netlify will automatically handle form submissions

### 3. Update CV/Resume

To update the CV file:

1. Replace `client/public/assets/SamirProfile.pdf` with your new CV
2. Commit and push to GitHub
3. Vercel will automatically redeploy

## Continuous Deployment

Vercel automatically deploys your site when you push to GitHub:

- **Push to `main` branch**: Production deployment
- **Push to other branches**: Preview deployment

Every commit gets a unique preview URL for testing before merging to main.

## Performance Optimization

The site is already optimized for performance:

- ✅ Static site generation
- ✅ Automatic code splitting
- ✅ Image optimization
- ✅ Asset caching
- ✅ Global CDN delivery

Expected Lighthouse scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

## Monitoring & Analytics

### Built-in Vercel Analytics

Vercel provides free analytics:
1. Go to your project dashboard
2. Click "Analytics" tab
3. View real-time traffic, performance metrics, and more

### Google Analytics 4

Once configured (see above), track:
- Page views
- CV downloads (tracked as `cv_download` event)
- Form submissions (tracked as `form_submit` event)
- User demographics and behavior

## Troubleshooting

### Build Fails

If the build fails:
1. Check the build logs in Vercel dashboard
2. Ensure all dependencies are in `package.json`
3. Test the build locally: `pnpm build`

### 404 Errors

If you get 404 errors on refresh:
- The `vercel.json` configuration handles this
- Ensure `vercel.json` is in the root directory

### Slow Loading

If the site loads slowly:
1. Check Vercel Analytics for performance insights
2. Ensure images are optimized (≤200KB)
3. Check your internet connection

## Support

For deployment issues:
- Vercel Documentation: [vercel.com/docs](https://vercel.com/docs)
- Vercel Support: [vercel.com/support](https://vercel.com/support)

---

**Repository**: https://github.com/smairemam/samir-emam-website

**Built with**: React + TypeScript + Vite + Tailwind CSS
