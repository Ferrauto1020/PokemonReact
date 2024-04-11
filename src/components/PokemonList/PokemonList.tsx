import React from "react";
import usePokemonList from "../../hooks/usePokemonList";
export const PokemonList = () => {
    const list = usePokemonList();
    return (
        <>
            {list?.map((pokemon) => (
                <li key={pokemon.name}>{pokemon.name}</li>
            ))}
        </>
    );
};
