import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';

const geist = Geist({ variable: '--font-geist', subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'CoHaven — Property Management & Co-Hosting',
    template: '%s | CoHaven',
  },
  description:
    'Premium short-term rental management and co-hosting for property owners who want stronger performance and effortless hospitality.',
  openGraph: {
    type: 'website',
    siteName: 'CoHaven',
    title: 'CoHaven — Property Management & Co-Hosting',
    description: 'Elevated co-hosting for effortless, profitable stays.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CoHaven — Property Management & Co-Hosting',
    description: 'Elevated co-hosting for effortless, profitable stays.',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} antialiased`}>{children}</body>
    </html>
  );
}
