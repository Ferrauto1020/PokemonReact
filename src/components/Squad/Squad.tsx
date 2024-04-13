import React, { useContext } from "react";
import PokemonSquadContext from "../../context/pokemonContext";
import { Pokemon } from "../../models/pokemon";
import { GetSpriteSRC } from "../../helpers";
const Squad = () => {
    const { squad, removePokemonFromSquad } = useContext(PokemonSquadContext);

    return (
        <div>
            {squad?.map((pokemon: Pokemon, index: number) => (
                <li key={index}>
                    <img
                        src={GetSpriteSRC(pokemon.url)}
                        alt="404 pokemon not found"
                    />
                    {pokemon.name}
                    <button onClick={() => removePokemonFromSquad(index)}>
                        x
                    </button>
                </li>
            ))}
        </div>
    );
};

export default Squad;
