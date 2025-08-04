# 🚀 Vercel Deployment Guide

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [Git](https://git-scm.com/) installed
- [Vercel account](https://vercel.com/signup)

## Step-by-Step Deployment

### 1. Prepare Your Code

```bash
# Ensure all dependencies are installed
npm install

# Test the build locally
npm run build

# Test the preview
npm run preview
```

### 2. Deploy to Vercel

#### Option A: Vercel CLI (Recommended)

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy (first time)
vercel

# Follow the prompts:
# - Set up and deploy? → Yes
# - Which scope? → Select your account
# - Link to existing project? → No
# - Project name? → a1-stable (or your preferred name)
# - Directory? → ./ (current directory)
# - Override settings? → No

# For production deployment
vercel --prod
```

#### Option B: GitHub Integration

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com/dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your GitHub repository
   - Configure settings:
     - **Framework Preset**: Vite
     - **Root Directory**: `./` (or `a1-stable` if in subdirectory)
     - **Build Command**: `npm run build`
     - **Output Directory**: `dist`
     - **Install Command**: `npm install`

3. **Deploy:**
   - Click "Deploy"
   - Vercel will automatically build and deploy your site

### 3. Configure Custom Domain (Optional)

1. Go to your project dashboard on Vercel
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

### 4. Environment Variables (If Needed)

If you add environment variables later:

1. Go to project dashboard → "Settings" → "Environment Variables"
2. Add variables with prefix `VITE_`
3. Redeploy the project

## Build Configuration

The project is configured with:

- **Framework**: Vite + React
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node Version**: 18.x (auto-detected)

## Performance Optimizations

✅ **Already Implemented:**
- Code splitting with manual chunks
- Optimized images
- Minified CSS and JS
- Gzip compression (Vercel handles)
- CDN distribution (Vercel handles)

## SEO Configuration

✅ **Already Configured:**
- Meta tags for social sharing
- Sitemap.xml
- Robots.txt
- Open Graph tags
- Twitter Card tags

## Troubleshooting

### Common Issues:

1. **Build Fails:**
   ```bash
   # Clear cache and reinstall
   rm -rf node_modules package-lock.json
   npm install
   npm run build
   ```

2. **Routing Issues:**
   - The `vercel.json` file handles React Router
   - All routes redirect to `index.html`

3. **Environment Variables:**
   - Only variables starting with `VITE_` are available in the browser
   - Add them in Vercel dashboard

4. **Image Loading:**
   - Ensure all image URLs are accessible
   - Use relative paths for local images

### Performance Monitoring:

- Check Vercel Analytics in dashboard
- Monitor Core Web Vitals
- Use Lighthouse for performance audits

## Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Verify mobile responsiveness
- [ ] Check language switching works
- [ ] Test contact forms (if any)
- [ ] Verify image loading
- [ ] Test navigation and routing
- [ ] Check console for errors
- [ ] Validate SEO meta tags

## Support

For deployment issues:
1. Check Vercel build logs
2. Review browser console for errors
3. Test locally with `npm run build`
4. Contact Vercel support if needed

---

**Your site will be live at:** `https://your-project-name.vercel.app` 