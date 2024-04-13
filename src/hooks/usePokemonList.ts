import React, { useCallback, useEffect, useState } from "react";
import { getPokemonList } from "../services/Pokemon";
import { Pokemon } from "../models/pokemon";
const usePokemonList = () => {
    const [page, setPage] = useState<number>(0);
    const [list, setList] = useState<Pokemon[]>();
    useEffect(() => {
        fetchList();
    }, [page]);
    //perché? per memorizzare la funzione in modo da non reindirizzarla ad ogni render+
    const fetchList = useCallback(async () => {
        const pokeList = await getPokemonList(page);
        setList(pokeList);
    }, [page]);
    const setNextPage = () => {
        setPage((page) => page + 1);
        console.log(page);
    };

    const setPrevPage = () => {
        if (page < 1) return;
        setPage((page) => page - 1);
        console.log(page);
    };
    return { list, setNextPage, setPrevPage };
};

export default usePokemonList;
