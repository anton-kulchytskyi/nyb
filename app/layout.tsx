import '../styles/globals.scss';
import type { Metadata } from 'next';

import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

import { roboto, baiJamjuree, beautifulEs } from '@/utils/fonts/fonts';

export const metadata: Metadata = {
  title: 'Norse Yacht Co | Selling yachts from Norway',
  description: 'Business Consulting and Services',
};

type Props = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: Props) => {
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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
