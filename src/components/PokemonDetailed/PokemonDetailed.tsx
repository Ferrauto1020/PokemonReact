import React from "react";
import { usePokemonDetails } from "../../hooks/usePokemonDetails";
const PokemonDetailed = () => {
    const pokemon = usePokemonDetails();
    if (!pokemon) return <></>;
    return (
        <div>
            <h1>{pokemon.name}</h1>
            <div>
                <img src={pokemon.sprites.front_default} alt="404" />
                <img src={pokemon.sprites.front_shiny} alt="404" />
            </div>
            <ul>
                <h1> type</h1>
                {pokemon.types.map((type) => (
                    <li key={type.type.name}>{type.type.name}</li>
                ))}
            </ul>
            <ul>
                <h1> abilities</h1>
                {pokemon.abilities.map((ability) => (
                    <li key={ability.ability.name}>{ability.ability.name}</li>
                ))}
            </ul>
            <ul>
                <h1> moves</h1>
                {pokemon.moves.map((move) => (
                    <li key={move.move.name}>{move.move.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default PokemonDetailed;
