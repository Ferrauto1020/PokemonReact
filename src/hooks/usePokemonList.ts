import React, { useCallback, useEffect, useState } from "react";
import { getPokemonList } from "../services/Pokemon";
import { Pokemon } from "../models/pokemon";
const usePokemonList = () => {
    const [list, setList] = useState<Pokemon[]>();

    useEffect(() => {
        fetchList();
    }, []);
    //perché? per memorizzare la funzione in modo da non reindirizzarla ad ogni render+
    const fetchList = useCallback(async () => {
        const pokeList = await getPokemonList();
        setList(pokeList);
    }, []);
    return list;
};

export default usePokemonList;
