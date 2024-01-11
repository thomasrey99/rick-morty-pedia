import Login from "@/ui/components/forms/login/Login";
import style from "@/ui/styles/home.module.scss"
import Image from "next/image";
import rk from "@/assets/rk.png"
export default function Home() {
  return (
    <main className={style.home}>
      <Image src={rk} alt="rick and morty" width={250} height={250}/>
      <Login/>
    </main>
  )
}
