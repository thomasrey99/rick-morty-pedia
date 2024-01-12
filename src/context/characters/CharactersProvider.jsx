"use client"
import axios from "axios";
import { useEffect, useState, useCallback} from "react";
import CharactersContext from "./CharactersContext";

const getCharacters=async(page, name, gender, status, species)=>{

    const data=(await axios(`http://localhost:3000/api/characters?page=${page}&name=${name}&gender=${gender}&status=${status}&species=${species}`)).data

    return data

}

const CharactersProvider=({children})=>{
    

    const [characters, setCharacters]=useState([])

    const [search, setSearch]=useState({
        pages:"",
        current_page:1,
        count:"",
        isLoading:false,
        name:"",
        gender:"",
        status:"",
        species:""
    })

    const changePage=(action)=>{

        if(action==="next"&&search.current_page<search.pages){
            setSearch({
                ...search,
                current_page:search.current_page + 1
            })
        }

        if(action==="prev"&&search.current_page>1){
            setSearch({
                ...search,
                current_page:search.current_page - 1
            })
        }

    }

    

    const memoizedGetCharacters = useCallback(async () => {

        setSearch({
            ...search,
            isLoading:true
        })

        const data = await getCharacters(search.current_page, search.name, search.gender, search.status, search.species);
        setCharacters(data.results);
        setSearch({
          ...search,
          count: data.info?.count ? data.info.count:"",
          pages: data.info?.pages ? data.info.pages:"",
          isLoading:false
        });

      }, [search.current_page, search.name, search.gender, search.status, search.species]);
    
      useEffect(() => {
        memoizedGetCharacters();
      }, [memoizedGetCharacters]);

      useEffect(()=>{
        setSearch({
            ...search,
            current_page:1
        })
      },[search.name, search.gender, search.status, search.species])
    return(
        <CharactersContext.Provider value={{
            characters,
            search,
            setSearch,
            changePage
        }}>
            {children}
        </CharactersContext.Provider>
    )
}

export default CharactersProvider