import { Inter } from 'next/font/google'
import '@/ui/styles/globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rick & Morty pedia',
  description: 'Rick & Morty characters',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        {children}
      </body>
    </html>
  )
}
