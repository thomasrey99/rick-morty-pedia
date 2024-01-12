import axios from "axios";


export const getCharacters= async(
page,
name,
status,
gender,
species
)=>
{
   try {

    const data=(await axios(`https://rickandmortyapi.com/api/character/?page=${page}&name=${name}&status=${status}&gender=${gender}&species=${species}`)).data

    console.log("Pagina", page) 

    return data

   } catch (error) {
    
    return {error:error.message}
    
   }

}