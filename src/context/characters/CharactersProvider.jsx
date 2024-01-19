"use client"
import { useEffect, useState, useCallback, useReducer} from "react";
import CharactersContext from "./CharactersContext";
import { initialState, reducer } from "./reducer/reducer";
import { setCharacters } from "./actions/actions";
import { getCharacters } from "@/utils/getCharacters";


const CharactersProvider=({children})=>{
    
    const [state, dispatch]=useReducer(reducer, initialState)

    const [filter, setFilter]=useState({
        current_page:1,
        name:"",
        gender:"",
        status:"",
        species:""
    })

    const changePage=(action)=>{

        if(action==="next"&&filter.current_page<state.pages){
            setFilter({
                ...filter,
                current_page:filter.current_page + 1
            })
        }

        if(action==="prev"&&filter.current_page>1){
            setFilter({
                ...filter,
                current_page:filter.current_page - 1
            })
        }

    }

    

    const memoizedGetCharacters = useCallback(async () => {
        const data = await getCharacters(filter.current_page, filter.name, filter.gender, filter.status, filter.species);
        dispatch(setCharacters(data))
      }, [filter]);

      useEffect(()=>{

        memoizedGetCharacters()
        
      }, [memoizedGetCharacters])

    return(
        <CharactersContext.Provider value={{
            state,
            filter,
            setFilter,
            changePage
        }}>
            {children}
        </CharactersContext.Provider>
    )
}

export default CharactersProvider