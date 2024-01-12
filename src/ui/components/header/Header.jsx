import React from 'react'
import style from "@/ui/styles/components/header/Header.module.scss"
import Navbar from '../navbar/Navbar'
import Title from '../title/Title'

const Header = () => {
  return (
    <header className={style.header}>
        <Navbar/>
        <Title/>
    </header>
  )
}
export default Header