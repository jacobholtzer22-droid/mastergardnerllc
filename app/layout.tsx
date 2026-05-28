import type { Metadata } from 'next';
import './globals.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Master Gardner, LLC — A Beautiful Landscape Starts Here',
  description:
    'Master Gardner, LLC provides lawn care, landscaping, snow plowing, and salting services across Kent and Ottawa County, Michigan.',
  metadataBase: new URL('https://mastergardnerllc.com'),
  openGraph: {
    title: 'Master Gardner, LLC — A Beautiful Landscape Starts Here',
    description:
      'Professional lawn care, landscaping, snow plowing, and salting services in West Michigan.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-ink">
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
