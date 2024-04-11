import axios from "axios";
import { Pokemon } from "../models/pokemon";
const pokemonListUrl = 'https://pokeapi.co/api/v2/pokemon/'
export const getPokemonList = async()=>{
try {
 
    const res = await axios.get<{results:Pokemon[]}>(pokemonListUrl)
    return res?.data.results
       
} catch (error) {
    console.log(error)
    return []
}
}