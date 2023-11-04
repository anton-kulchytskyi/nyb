import type { Metadata } from 'next'

import Footer from '@/components/Footer/page'
import Navbar from '@/components/Navbar/page'

import { roboto, baiJamjuree, beautifulEs } from '../../utils/fonts/fonts'

export const metadata: Metadata = {
  title: 'Catalog | Norse Yacht Co',
  description: 'First try',
}

export default function CatalogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${baiJamjuree.variable} ${beautifulEs.variable} ${roboto.variable}`}>
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
