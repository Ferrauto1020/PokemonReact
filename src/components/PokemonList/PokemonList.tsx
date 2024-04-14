import React, { useContext } from "react";
import usePokemonList from "../../hooks/usePokemonList";
import "./PokemonList.css";
import PokemonSquadContext from "../../context/pokemonContext";
import { SPRITE_URL } from "../../consts";
import { getPokeomID, GetSpriteSRC } from "../../helpers";
import { link } from "fs";
import { Link } from "react-router-dom";
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
                        <Link to={`/detail/${getPokeomID(pokemon.url)}`}>
                            <img
                                src={GetSpriteSRC(pokemon.url)}
                                alt="404 pokemon not found"
                            />
                            {pokemon.name}
                        </Link>
                        <button onClick={() => addPokemonToSquad(pokemon)}>
                            +
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
};
