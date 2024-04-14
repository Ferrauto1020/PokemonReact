import { SPRITE_URL } from "../consts";

export const getPokeomID = (pokemonURL: string) =>
    pokemonURL.split("pokemon/")[1]?.replace("/", "");

export const GetSpriteSRC = (pokemonURL: string) => {
    const id = getPokeomID(pokemonURL);
    return `${SPRITE_URL}/${id}.png`;
};
