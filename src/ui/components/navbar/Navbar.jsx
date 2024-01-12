import React from 'react'
import style from "@/ui/styles/components/navbar/navbar.module.scss"
import NavItems from './navItems/NavItems'
import Logotype from './logotype/Logotype'

const Navbar = () => {
  return (
    <nav className={style.navbar}>
        <Logotype/>
        <NavItems/>
    </nav>
  )
}
export default Navbar