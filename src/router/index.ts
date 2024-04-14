import { Component } from "react";
import { PokemonList } from "../components/PokemonList/PokemonList";
import PokemonDetailed from "../components/PokemonDetailed/PokemonDetailed";
import HomePage from "../page/HomePage";

export const routes = [
    {
        path: "/",
        component: HomePage,
    },
    {
        path: "/detail/:id",
        component: PokemonDetailed,
    },
];
