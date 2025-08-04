# A1 Stable - Horse Endurance & Training

A comprehensive website for A1 Stable, featuring professional endurance riding team information and Zallaq Riding School services.

## 🚀 Features

- **Multi-language Support**: English and Arabic
- **Responsive Design**: Works on all devices
- **Interactive Components**: Image sliders, carousels, weather dashboard
- **Contact Integration**: WhatsApp, registration forms, social media links
- **Modern UI**: Glass morphism, animations, and smooth transitions

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool
- **React Router** - Client-side routing
- **React i18next** - Internationalization
- **React Icons** - Icon library
- **CSS3** - Custom styling with animations

## 📦 Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd a1-stable

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🚀 Deployment to Vercel

### Option 1: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# For production
vercel --prod
```

### Option 2: Deploy via GitHub

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically deploy on every push

### Option 3: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Configure build settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

## ⚙️ Environment Variables

Create a `.env.local` file in the root directory:

```env
VITE_APP_NAME=A1 Stable
VITE_APP_VERSION=1.0.0
```

## 📁 Project Structure

```
a1-stable/
├── public/                 # Static assets
├── src/
│   ├── components/        # React components
│   ├── pages/            # Page components
│   ├── styles/           # CSS files
│   ├── locales/          # Translation files
│   └── main.jsx          # App entry point
├── vercel.json           # Vercel configuration
└── package.json          # Dependencies
```

## 🌐 Pages

- **Home** (`/`) - Landing page with hero section
- **A1** (`/a1`) - Endurance team information
- **Zallaq School** (`/zallaq-school`) - Riding school services
- **Contact** (`/contact`) - Contact information

## 🎨 Customization

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add route in `src/App.jsx`
3. Add translations in `src/locales/`

### Styling

- Main styles: `src/styles/App.css`
- Page-specific styles: `src/styles/[PageName].css`
- Follow BEM methodology for class naming

## 🔧 Build Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: ≤480px
- **Tablet**: 481px-768px  
- **Desktop**: 769px-1024px
- **Large**: ≥1025px

## 🌍 Internationalization

Supports English and Arabic with RTL layout support.

## 📞 Contact

For questions about deployment or customization, contact the development team.

---

**A1 Stable** - Excellence in Horse Endurance and Training 🐎
