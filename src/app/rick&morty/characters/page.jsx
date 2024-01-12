import CardsCharacters from "@/ui/components/cardsCharacters/CardsCharacters"
import Filters from "@/ui/components/filters/Filters"
import Paginate from "@/ui/components/paginate/Paginate"
import Searchbar from "@/ui/components/searchbar/Searchbar"
import style from "@/ui/styles/components/sections/characters/characters.module.scss"
const Characters=()=>{
    return (
        <main className={style.mainCharacters}>
            <Searchbar/>
            <Filters/>
            <Paginate/>
            <CardsCharacters/>
            <Paginate/>
        </main>
    )
}

export default Characters