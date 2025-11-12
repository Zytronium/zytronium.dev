import type { Metadata } from 'next';
import { Quantico } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import BackgroundVenom from '@/components/BackgroundVenom';
import Footer from '@/components/Footer';

const quantico = Quantico({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Zytronium - Developer Portfolio',
  description: "Zytronium's personal developer website showcasing projects, experiments, and developer identity.",
  authors: [{ name: 'Zytronium' }],
  openGraph: {
    title: 'About Zytronium',
    description: "Zytronium's developer website",
    url: 'https://zytronium.dev/',
    siteName: 'Zytronium Portfolio',
    images: [
      {
        url: 'https://zytronium.dev/images/zytronium_dev_logo_wallpaper.png',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Zytronium',
    description: "Zytronium's developer website",
    images: ['https://zytronium.dev/images/zytronium_dev_logo_wallpaper.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <body className={quantico.className}>
    <BackgroundVenom />
    <Navbar />
    <main className="min-h-screen">
      {children}
    </main>
    <Footer />
    </body>
    </html>
  );
}
