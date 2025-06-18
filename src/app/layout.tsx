import Navbar from '@/components/Navbar';
import './globals.css';
import { ReactNode } from 'react';
import { Poppins } from 'next/font/google';

// Import the font
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'], 
  variable: '--font-poppins',   
});

export const metadata = {
  title: 'My Portfolio',
  description: 'React Native Developer Portfolio',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${poppins.className} bg-black`}>
      <body>
        <header>
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}
