import '../styles/globals.scss';
import type { Metadata } from 'next';

import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

import { roboto, baiJamjuree, beautifulEs } from '../utils/fonts/fonts';
export const metadata: Metadata = {
  title: 'Norse Yacht Co',
  description: 'First try',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang='en'
      className={`${baiJamjuree.variable} ${beautifulEs.variable} ${roboto.variable}`}
    >
      <head>
        <link rel='icon' type='image/x-icon' href='/favicon.ico' sizes='any' />
      </head>
      <body>
        {/* <Header /> */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
