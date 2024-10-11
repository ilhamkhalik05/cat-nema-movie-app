import type { Metadata } from 'next';
import { poppins } from '@/lib/font';
import { APP_DESCRIPTION, APP_META_TITLE } from '@/lib/const';
import Navbar from '@/components/navbar';
import './globals.css';

export const metadata: Metadata = {
  title: APP_META_TITLE,
  description: APP_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
