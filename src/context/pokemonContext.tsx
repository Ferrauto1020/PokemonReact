import { createContext, ReactNode, useState } from "react";
import { Pokemon } from "../models/pokemon";

const PokemonSquadContext = createContext<any>({});
//ogni componente react ha le sue props, i children sono una props speciale che non si passano normalmente, ma wrappando i vari componenti
//che si chiameranno children
export const PokemonSquadProvider = ({ children }: { children: ReactNode }) => {
    const [squad, setSquad] = useState<Pokemon[]>([]);
    const addPokemonToSquad = (pokemon: Pokemon) => {
        if (squad.length > 5) return;
        setSquad([...squad, pokemon]);
    };
    const removePokemonFromSquad = (indexToDelete: number) => {
        //_ ignora il primo parametro
        setSquad(squad.filter((_, index) => index !== indexToDelete));
    };
    return (
        <PokemonSquadContext.Provider
            value={{ squad, addPokemonToSquad, removePokemonFromSquad }}
        >
            {children}
        </PokemonSquadContext.Provider>
    );
};
export default PokemonSquadContext;
