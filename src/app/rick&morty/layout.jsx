import Footer from "@/ui/components/footer/Footer";
import Header from "@/ui/components/header/Header";

export default function RootLayout({ children }) {
  return (
   <main className="layout">
    <Header/>
    {children}
    <Footer/>
   </main>
  )
}
