"use client"
import { useContext, useState } from "react";
import CharactersContext from "@/context/characters/CharactersContext";
import style from "@/ui/styles/components/filters/filters.module.scss"

const Filters = () => {

  const {setSearch, search}=useContext(CharactersContext)

  const onChangeFilter=(event)=>{

    const {name, value}=event.target

    setSearch({
        ...search,
        [name]:value
    })

  }

  const clearFilters=()=>{
    setSearch({
        ...search,
        name:"",
        gender:"",
        status:"",
        species:""
    })
  }

  const status=[
    "Alive",
    "Dead",
    "Unknown"
  ]
  const gender=[
    "female",
    "male",
    "genderless",
    "unknown"
  ]
  const species=[
    "Human",
    "Alien",
    "Humanoid",
    "unknown",
    "Poopybutthole",
    "Mythological Creature",
    "Robot",
    "Disease",
    "Cronenberg",
    "Animal"
  ]

  return (
    <aside className={style.filtersCont}>

        <div className={style.filters}>
            <select className={style.select} name="status" onChange={onChangeFilter} value={search.status}>
                <option value=""  className={style.option}>Select an status</option>
                {
                    status.map((stat, i)=>(
                        <option key={i} value={stat} className={style.option}>{stat}</option>
                    ))
                }
            </select>

            <select className={style.select} name="gender" onChange={onChangeFilter} value={search.gender}>
                <option value=""  className={style.option}>Select an Gender</option>
                {
                    gender.map((gen, i)=>(
                        <option key={i} value={gen} className={style.option}>{gen}</option>
                    ))
                }
            </select>

            <select className={style.select} name="species" onChange={onChangeFilter} value={search.species}>
                <option value=""  className={style.option}>Select an Specie</option>
                {
                    species.map((spec, i)=>(
                        <option key={i} value={spec} className={style.option}>{spec}</option>
                    ))
                }
            </select>
        </div>
        <button onClick={clearFilters} className={style.clearButton}>Clear</button>
    </aside>
  )
}

export default Filters