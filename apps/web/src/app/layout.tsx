import type { Metadata, Viewport } from 'next';
import { Fraunces, Manrope } from 'next/font/google';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { MobileStickyBar } from '@/components/layout/mobile-sticky-bar';
import { WhatsappFloatButton } from '@/components/layout/whatsapp-float-button';
import { MotionProvider } from '@/components/ui/motion-provider';
import { ScrollProgress } from '@/components/ui/scroll-progress';
import { PageTransition } from '@/components/ui/page-transition';
import { siteConfig } from '@/data/site';
import './globals.css';

// Fraunces + Manrope, not the Playfair Display + Inter pairing every AI page
// builder defaults to for "elegant/luxury" — a soft, characterful serif reads as
// a considered boutique-brand choice rather than a template default.
const display = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  weight: 'variable',
  style: ['normal', 'italic'],
  axes: ['SOFT', 'opsz'],
});

const body = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600', '700'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#8E4B5C',
};

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.businessName} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.businessName}`,
  },
  description:
    'Premium dermatology, skin, hair, laser, and aesthetic treatments — personalised care from expert dermatologists across our clinics.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="flex min-h-screen flex-col font-body pb-[calc(4rem+env(safe-area-inset-bottom))] lg:pb-0">
        <MotionProvider>
          <ScrollProgress />
          <Header />
          <main className="flex-1">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
          <WhatsappFloatButton />
          <MobileStickyBar />
        </MotionProvider>
      </body>
    </html>
  );
}
