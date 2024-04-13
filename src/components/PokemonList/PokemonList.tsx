import React, { useContext } from "react";
import usePokemonList from "../../hooks/usePokemonList";
import "./PokemonList.css";
import PokemonSquadContext from "../../context/pokemonContext";
import { SPRITE_URL } from "../../consts";
import { GetSpriteSRC } from "../../helpers";
export const PokemonList = () => {
    const { list, setNextPage, setPrevPage } = usePokemonList();
    const { addPokemonToSquad } = useContext(PokemonSquadContext);
    return (
        <>
            <ul>
                <button onClick={() => setPrevPage()}>⬅</button>
                <button onClick={() => setNextPage()}>➡</button>

                {list?.map((pokemon, index) => (
                    <li key={pokemon.name}>
                        <img
                            src={GetSpriteSRC(pokemon.url)}
                            alt="404 pokemon not found"
                        />
                        {pokemon.name}
                        <button onClick={() => addPokemonToSquad(pokemon)}>
                            +
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
};
