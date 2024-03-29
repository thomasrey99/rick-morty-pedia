"use client"
import style from "@/ui/styles/components/cardsCharacters/cardsCharacters.module.scss"
import { useContext } from 'react'
import CharactersContext from "@/context/characters/CharactersContext"
import Card from "./card/Card"

const CardsCharacters = () => {

  const { characters, state }=useContext(CharactersContext)

  console.log(state)

  return (
    <section className={style.cardsCont}>

      {
        state.characters?.map(({id, name, location, image, gender, status, species})=>(
          <Card key={id} name={name} location={location} image={image} gender={gender} status={status} species={species}/>
        ))
      }

    </section>
  )
}

export default CardsCharacters