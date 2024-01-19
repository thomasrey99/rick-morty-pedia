import { ActionTypes } from "../actions/types"

const {GET_CHARACTERS, CHANGE_PAGE}=ActionTypes

export let initialState={
    pages:1,
    count:0,
    characters:[],
}

export const reducer=(state, {type, payload})=>{
    switch(type){
        
        case GET_CHARACTERS:

            return {
                ...state,
                pages:payload.pages,
                count:payload.count,
                characters:payload.characters
            }

        default:

            return {...state}
    }
}