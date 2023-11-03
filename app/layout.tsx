import './globals.css'
import type { Metadata } from 'next'
import { Inter, Roboto, Bai_Jamjuree } from 'next/font/google'
import beautifulEs from 'next/font/local'

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({ weight: '400', subsets: ['latin'] })
const baiJamjuree = Bai_Jamjuree({ weight: '400', subsets: ['latin'] })
const bEs = beautifulEs({ src: '../public/font/Beautiful_ES.ttf' })

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
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
