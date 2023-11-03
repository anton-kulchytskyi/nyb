import Header from '@/components/Header/page'
import './globals.css'
import type { Metadata } from 'next'
import { Bai_Jamjuree, Roboto } from 'next/font/google'
import beautifulEs from 'next/font/local'
import Footer from '@/components/Footer/page'

const roboto = Roboto({
  weight: ['400', '500'],
  variable: '--font-roboto',
  subsets: ['latin']
})

const baiJamjuree = Bai_Jamjuree({
  weight: ['400', '700'],
  variable: '--font-baiJamjuree',
  subsets: ['latin']
})

const bEs = beautifulEs({
  src: '../public/font/Beautiful_ES.ttf',
  variable: '--font-bEs',
})

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
    // <html lang="en" className={`${baiJamjuree.variable} ${bEs.variable} ${roboto.variable}`}>
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
