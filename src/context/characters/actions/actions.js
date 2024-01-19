import { ActionTypes } from "./types";

const {GET_CHARACTERS, CHANGE_PAGE}=ActionTypes

export const setCharacters=(characters)=>{

    return {
        type:GET_CHARACTERS,
        payload:{
            count:characters?.info?.count,
            pages:characters?.info?.pages,
            characters:characters?.results
        }
    }
    
}