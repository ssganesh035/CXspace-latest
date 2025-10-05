# CXSpace Community Platform

## Overview

CXSpace is a static React application designed to be a premier community platform for customer success professionals, technical support engineers, and B2B SaaS experts. The platform provides a comprehensive community experience with event listings, career resources, FAQ management, and community engagement features. Built for GitHub Pages deployment.

## User Preferences

Preferred communication style: Simple, everyday language.
Design preferences: Cool and quirky design with blue, white, and black color scheme.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized static builds
- **Routing**: Wouter for lightweight client-side routing
- **Data Management**: Static data imports (no backend/database required)
- **Styling**: Tailwind CSS with shadcn/ui component library
- **UI Components**: Radix UI primitives with custom styling via shadcn/ui

### Data Architecture
- **Events**: Static data defined in `client/src/data/events.ts`
- **Jobs**: Static data defined in `client/src/data/jobs.ts`
- **FAQs**: Static data defined in `client/src/data/faqs.ts`
- **No Database**: All content is hardcoded for static deployment

## Key Components

### Core Pages
- **Home**: Hero section with community stats and testimonials
- **About**: Community mission, story, and values
- **Supportathon**: Flagship hackathon-style event promotion
- **Meetups**: Event listings and registration
- **Careers**: Job board and career resources
- **FAQ**: Community frequently asked questions
- **Join**: Community platform links (Discord, WhatsApp)

### Static Data
- **Events**: 3 community meetups and workshops
- **Jobs**: 1 featured career opportunity
- **FAQs**: 5 frequently asked questions

### UI Components
- **Layout**: Responsive header with navigation and footer
- **Forms**: React Hook Form with Zod validation
- **Data Display**: Cards, badges, and tables for content presentation
- **Interactive Elements**: Modals, dropdowns, and accordions

## Data Flow

### Static Data Loading
1. Pages import data directly from `client/src/data/*` files
2. No API calls or backend communication
3. All data is bundled into the JavaScript at build time
4. Client-side routing handles navigation between pages

## External Dependencies

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Component library built on Radix UI
- **Radix UI**: Low-level UI primitives for accessibility
- **Lucide React**: Icon library for consistent iconography

### Development Tools
- **Vite**: Fast build tool with HMR support
- **TypeScript**: Type safety across the entire stack
- **ESLint/Prettier**: Code formatting and linting
- **Drizzle Kit**: Database schema management

### Runtime Dependencies
- **React Hook Form**: Form handling with validation
- **Zod**: Runtime type validation
- **Date-fns**: Date manipulation utilities
- **Wouter**: Client-side routing for single-page application

## Deployment Strategy

### Build Process
1. **Build Command**: `npm run build` creates static files in `dist/public/`
2. **Output**: HTML, CSS, JavaScript, and assets ready for static hosting
3. **404 Handling**: `404.html` redirects to `index.html` for client-side routing

### GitHub Pages Deployment
1. Build the static site: `npm run build`
2. Deploy `dist/public/` folder to GitHub Pages
3. Enable GitHub Pages in repository settings
4. Site is live at `https://username.github.io/repo-name/`

See `DEPLOY.md` for detailed deployment instructions.

### Hosting Requirements
- **Static File Hosting**: Any CDN or static host (GitHub Pages, Netlify, Vercel, etc.)
- **No Backend**: Pure client-side application
- **No Database**: All content is static

### Development Workflow
1. Run `npm run dev` for development server with hot reload
2. Edit static data in `client/src/data/` files
3. TypeScript compilation for type checking
4. Build and deploy to GitHub Pages when ready

## Technical Decisions

### Framework Choices
- **React over Vue/Angular**: Large ecosystem and excellent static build support
- **Vite over Webpack**: Faster development builds and optimized static output
- **Static data over backend**: Simplicity, speed, and easy deployment to GitHub Pages
- **Wouter over React Router**: Lightweight routing library perfect for static sites

## Recent Changes

**October 5, 2025**
- Converted application to static site for GitHub Pages deployment
- Removed backend server and database dependencies
- Created static data files for events, jobs, and FAQs
- Removed React Query, replaced with direct static imports
- Added 404.html for client-side routing on GitHub Pages
- Created DEPLOY.md with GitHub Pages deployment instructions
- All design elements, animations, and visual features preserved

**January 11, 2025**
- Updated hero section with cool blue, black, and white color scheme
- Added modern grid pattern overlay and animated background elements
- Implemented quirky animations throughout the site (bounce, wiggle, float, blob morphing)
- Added gradient text effects and neon borders for interactive elements
- Enhanced all sections with emojis and playful copy
- Updated color variables to use blue-based palette (primary: blue-500, secondary: cyan-500)