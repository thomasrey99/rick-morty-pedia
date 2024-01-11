import axios from "axios";


export const getCharacters= async(
name,
status,
gender,
species
)=>
{
   try {

    const data=(await axios(`https://rickandmortyapi.com/api/character?name=${name}&status=${status}&gender=${gender}&species=${species}`)).data

    return data

   } catch (error) {
    
    return {error:error.message}
    
   }

}