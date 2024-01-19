"use client"
import React from 'react'
import { useContext } from 'react'
import CharactersContext from '@/context/characters/CharactersContext'
import style from "@/ui/styles/components/paginate/paginate.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const Paginate = () => {
  
  const {state, changePage, filter}=useContext(CharactersContext)

  return (
    <div className={style.paginateCont}>
        <button disabled={filter.isLoading} onClick={()=>changePage("prev")} className={style.button}><FontAwesomeIcon icon={faChevronLeft}/></button>
        <p className={style.page}><span className={style.span}>1 -</span> {filter.current_page} <span className={style.span}>- {state.pages}</span></p>
        <button disabled={filter.isLoading} onClick={()=>changePage("next")} className={style.button}><FontAwesomeIcon icon={faChevronRight}/></button>
    </div>
  )
}
export default Paginate