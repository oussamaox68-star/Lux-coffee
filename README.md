# LUX Coffee - Premium Luxury Coffee Platform

A modern, premium luxury coffee shop platform built with Next.js 15, React 19, TypeScript, Tailwind CSS, and Prisma.

## Features

- **Luxury Design**: Ultra-modern black and gold theme with glassmorphism effects
- **Responsive**: Mobile-first design that works on all devices
- **Pages**: Home, Menu, Product Details, Reservations, About Us, Gallery, Blog, Contact, FAQ, Privacy Policy, Terms
- **Admin Dashboard**: Complete management system for products, reservations, users, and analytics
- **Animations**: Smooth Framer Motion animations throughout
- **SEO**: Optimized metadata, sitemap, and robots.txt
- **Authentication**: NextAuth.js integration ready
- **Database**: PostgreSQL with Prisma ORM
- **Image Management**: Cloudinary integration ready

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom luxury theme
- **UI Components**: Shadcn/UI (Radix UI primitives)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: NextAuth.js
- **Image Hosting**: Cloudinary
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- PostgreSQL database
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd cafechoup
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` with your configuration:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/luxcoffee"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"
```

4. Set up the database:
```bash
npx prisma generate
npx prisma db push
```

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
cafechoup/
├── prisma/
│   └── schema.prisma          # Database schema
├── public/                     # Static assets
├── src/
│   ├── app/
│   │   ├── admin/             # Admin dashboard
│   │   ├── api/               # API routes
│   │   ├── blog/              # Blog pages
│   │   ├── contact/           # Contact page
│   │   ├── faq/               # FAQ page
│   │   ├── gallery/           # Gallery page
│   │   ├── menu/              # Menu page
│   │   ├── products/          # Product pages
│   │   ├── reservations/     # Reservation page
│   │   ├── about/             # About page
│   │   ├── privacy/           # Privacy policy
│   │   ├── terms/             # Terms of service
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/
│   │   ├── layout/            # Layout components (Header, Footer)
│   │   └── ui/                # Reusable UI components
│   └── lib/
│       ├── prisma.ts          # Prisma client
│       └── utils.ts           # Utility functions
├── .env.example               # Environment variables template
├── next.config.js             # Next.js configuration
├── package.json               # Dependencies
├── tailwind.config.ts         # Tailwind configuration
└── tsconfig.json              # TypeScript configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npx prisma generate` - Generate Prisma client
- `npx prisma db push` - Push schema to database
- `npx prisma studio` - Open Prisma Studio

## Database Models

The application includes the following database models:
- User
- Category
- Product
- Reservation
- ReservationItem
- Testimonial
- GalleryImage
- BlogPost
- ContactMessage
- WebsiteSettings
- FAQ

## Deployment

### Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Environment Variables for Production

Make sure to set these in your hosting platform:
- `DATABASE_URL` - PostgreSQL connection string
- `NEXTAUTH_URL` - Your production URL
- `NEXTAUTH_SECRET` - Random secret for NextAuth
- `CLOUDINARY_CLOUD_NAME` - Cloudinary cloud name
- `CLOUDINARY_API_KEY` - Cloudinary API key
- `CLOUDINARY_API_SECRET` - Cloudinary API secret

## Customization

### Colors and Theme

Edit `tailwind.config.ts` to customize the luxury theme:
```typescript
colors: {
  luxury: {
    black: '#0a0a0a',
    charcoal: '#1a1a1a',
    dark: '#2a2a2a',
  },
  gold: {
    400: '#d4af37',
    500: '#c9a227',
    600: '#b8941f',
  }
}
```

### Fonts

Google Fonts are configured in `src/app/layout.tsx`. Currently using Playfair Display for headings and Inter for body text.

## License

This project is proprietary software. All rights reserved.

## Support

For support, email hello@luxcoffee.com or visit our contact page.
