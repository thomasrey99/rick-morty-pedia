import { Poppins } from 'next/font/google'
import '@/ui/styles/globals.scss'

const poppins = Poppins({ subsets: ['latin'], weight:"300" })

export const metadata = {
  title: 'Rick & Morty pedia',
  description: 'Rick & Morty characters',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        {children}
      </body>
    </html>
  )
}
