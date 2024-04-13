import { SPRITE_URL } from "../consts";

export const GetSpriteSRC = (pokemonURL: string) => {
    const id = pokemonURL.split("pokemon/")[1]?.replace("/", "");
    return `${SPRITE_URL}/${id}.png`;
};
