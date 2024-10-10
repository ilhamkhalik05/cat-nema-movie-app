import type { Metadata } from 'next';
import { poppins } from '@/lib/font';
import './globals.css';

export const metadata: Metadata = {
  title: 'Cat Nema | Watch any movie freely',
  description: 'Watch free movie in CatNema',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
