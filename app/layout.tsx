import './globals.css'
import type { Metadata } from 'next'

import Header from '@/components/Header/page'
import Footer from '@/components/Footer/page'

import { roboto, baiJamjuree, beautifulEs } from '../utils/fonts/fonts'

export const metadata: Metadata = {
  title: 'Norse Yacht Co',
  description: 'First try',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${baiJamjuree.variable} ${beautifulEs.variable} ${roboto.variable}`}>
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" sizes="any" />
        <title></title>
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
