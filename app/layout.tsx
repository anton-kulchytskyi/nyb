import '../styles/globals.scss';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

const NoSSRNavBar = dynamic(() => import('@/components/Navbar/Navbar'), {
  ssr: false,
});

import { CurrencyProvider } from '@/context/CurrencyContext';
import Footer from '@/components/Footer/Footer';

import { roboto, baiJamjuree, beautifulEs } from '@/utils/fonts/fonts';

export const metadata: Metadata = {
  title: 'Norse Yacht Co | Selling yachts from Norway',
  description: 'Business Consulting and Services',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${baiJamjuree.variable} ${beautifulEs.variable} ${roboto.variable} page`}
    >
      <head>
        <link
          rel="icon"
          type="image/x-icon"
          href="/favicon.ico"
          sizes="any"
        />
      </head>
      <body className={`page__body ${baiJamjuree.variable} ${beautifulEs.variable} ${roboto.variable} page`} >
        <CurrencyProvider>
          <NoSSRNavBar />
          {children}
          <Footer />
        </CurrencyProvider>
      </body>
    </html>
  );
};
