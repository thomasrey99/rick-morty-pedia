
export const metadata = {
  title: 'Rick & Morty pedia',
  description: 'Rick & Morty characters',
}

export default function RootLayout({ children }) {
  return (
   <main className="layout">
    {children}
   </main>
  )
}
