import '../styles/globals.scss';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

const NoSSRNavBar = dynamic(() => import('@/components/Navbar/Navbar'), {
  ssr: false,
  // loading: () => <NavBarSkeleton />,
});

import { CurrencyProvider } from '@/context/CurrencyContext';

// import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

import { roboto, baiJamjuree, beautifulEs } from '@/utils/fonts/fonts';
// import NavBarSkeleton from '@/components/Skeletons/NavBarSkeleton/NavBarSkeleton';
export const metadata: Metadata = {
  title: 'Norse Yacht Co',
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
      <body className="page__body">
        <CurrencyProvider>
          <NoSSRNavBar />
          {/* <Navbar /> */}
          {children}
          <Footer />
        </CurrencyProvider>
      </body>
    </html>
  );
}
