import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactFAB from '@/components/ContactFAB';
import { SITE_URL } from '@/lib/metadata';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/jts3yqi.css" />
      </head>
      <body suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
        <ContactFAB />
      </body>
    </html>
  );
}
