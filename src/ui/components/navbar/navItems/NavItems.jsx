import Link from "next/link"
import style from "@/ui/styles/components/navbar/navITems/navItems.module.scss"

const NavItems = () => {

  const items=[
    {
        name:"Characters",
        path:"/rick&morty/characters"
    },
    {
      name:"Episodes",
      path:"/rick&morty/episodes"
    },
    {
      name:"Locations",
      path:"/rick&morty/locations"
    }
  ]

  return (
    <div className={style.itemsCont}>
        {
            items.map(({name, path}, i)=>(
                <Link key={i} href={`${path}`} className={style.item}>{name}</Link>
            ))
        }
        <button className={style.logOut}>Log out</button>
    </div>
  )
}
export  default NavItems