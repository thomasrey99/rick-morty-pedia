import Link from "next/link"
import style from "@/ui/styles/components/navbar/navITems/navItems.module.scss"

const NavItems = () => {

  const items=[
    {
        name:"Characters",
        path:"/characters"
    },
    {
        name:"Locations",
        path:"/locations"
    },
    {
        name:"Episodes",
        path:"/episodes"
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