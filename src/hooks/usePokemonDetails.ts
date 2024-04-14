import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPokemonDetail } from "../services/Pokemon";
import { PokemonDetail } from "../models/pokemon";

export const usePokemonDetails = () => {
    const { id } = useParams();
    const [detailPokemon, SetDetailPokemon] = useState<PokemonDetail | null> (null);

    const getDetail = useCallback(async () => {
        if (!id) return;
        const res = await fetchPokemonDetail(id);
        SetDetailPokemon(res);
    }, [id]);
    useEffect(() => {
        getDetail();
    }, [id]);
    return detailPokemon;
};
