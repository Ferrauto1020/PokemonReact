import axios from "axios";
import { Pokemon } from "../models/pokemon";
const pokemonListUrl = "https://pokeapi.co/api/v2/pokemon/";
export const getPokemonList = async (page: number) => {
    const offset = page * 20;
    const limit = (page + 1) * 20;
    const URL = `${pokemonListUrl}/?offset=${offset}&limit=${limit}`;
    try {
        const res = await axios.get<{ results: Pokemon[] }>(URL);
        return res?.data.results;
    } catch (error) {
        console.log(error);
        return [];
    }
};
