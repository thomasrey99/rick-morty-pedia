import CharactersProvider from "@/context/characters/CharactersProvider"
import style from "@/ui/styles/base/layouts/characters/layoutCharacters.module.scss"
export default function RootLayout({ children }) {
  return (
   <>
    <CharactersProvider>
      {children}
    </CharactersProvider>
   </>
  )
}
