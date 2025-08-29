# Slyde Landing Page

A modern, responsive landing page for Slyde - a P2P social payments platform. Built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Fully fluid design that works on all screen sizes
- **Modern UI**: Clean, professional design with smooth animations
- **Light Mode Default**: Configured to use light mode by default
- **Performance Optimized**: Built with Next.js 15 and optimized for speed

## Components

- **Navbar**: Fixed navigation with Slyde logo and navigation links
- **Hero Section**: Full-viewport hero with headline, subheadline, and CTA buttons
- **Background Element**: Designated area for Unicorn Studio interactive background

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles and CSS variables
│   ├── layout.tsx       # Root layout with theme configuration
│   └── page.tsx         # Main landing page
├── components/
│   ├── navbar.tsx       # Navigation component
│   └── hero.tsx         # Hero section component
└── lib/
    └── utils.ts         # Utility functions
```

## Design Features

- **Typography**: Uses Geist font family for modern, readable text
- **Color Scheme**: Light mode by default with CSS custom properties
- **Spacing**: Consistent spacing using Tailwind's spacing scale
- **Animations**: Smooth hover effects and transitions
- **Accessibility**: Proper semantic HTML and ARIA labels

## Customization

### Colors
Colors are defined in `src/app/globals.css` using CSS custom properties. The design uses a neutral color palette that can be easily customized.

### Typography
Fonts are configured in `src/app/layout.tsx` using Google Fonts. You can change the font family by updating the font imports.

### Layout
The layout is fully responsive and uses Tailwind CSS classes for consistent spacing and sizing.

## Deployment

This project can be deployed to any platform that supports Next.js:

- **Vercel**: Recommended for Next.js projects
- **Netlify**: Supports Next.js with build plugins
- **AWS Amplify**: Full-stack deployment solution
- **Self-hosted**: Can be built and served from any web server

## Future Enhancements

- Dark mode toggle
- Additional sections (Features, Testimonials, etc.)
- Integration with Unicorn Studio for interactive backgrounds
- Analytics and tracking
- A/B testing capabilities

## License

This project is private and proprietary to Slyde.
