import React from 'react'
import style from "@/ui/styles/components/title/title.module.scss"

export const Title = () => {
  return (
    <div className={style.titleCont}>
        <h1 className={style.title}>Rick & Morty Pedia</h1>
    </div>
  )
}

export default Title