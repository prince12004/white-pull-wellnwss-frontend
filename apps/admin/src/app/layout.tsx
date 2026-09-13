import type { Metadata } from 'next';
import { Toaster } from '@white/ui';
import './globals.css';

export const metadata: Metadata = {
  title: 'White Admin',
  description: 'Admin panel for the White clinic platform',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-body">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
