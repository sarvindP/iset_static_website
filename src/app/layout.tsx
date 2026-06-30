import type { ReactNode } from 'react';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactFAB from '@/components/ContactFAB';

export const metadata = {
  title: 'iSET 2026 — International Skill Enhancement Training',
  description:
    'iSET 2026 — Register for the International Skill Enhancement Training conducted by IAME. Open for students LKG to Class XII.',
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
