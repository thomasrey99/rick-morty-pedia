import axios from "axios"
export const getCharacters=async(page, name, gender, status, species)=>{

    const data=(await axios(`https://rick-morty-pedia-six.vercel.app/api/characters?page=${page}&name=${name}&gender=${gender}&status=${status}&species=${species}`)).data

    return data

}
