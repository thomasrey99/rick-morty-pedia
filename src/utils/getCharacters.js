import axios from "axios"
export const getCharacters=async(page, name, gender, status, species)=>{

    const data=(await axios(`http://localhost:3000/api/characters?page=${page}&name=${name}&gender=${gender}&status=${status}&species=${species}`)).data

    return data

}