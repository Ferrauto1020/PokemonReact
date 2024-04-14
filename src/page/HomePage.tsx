import React from "react";
import { PokemonList } from "../components/PokemonList/PokemonList";
import Squad from "../components/Squad/Squad";
import "./index.css";

const HomePage = () => {
    return (
        <div className="container">
            <PokemonList />;
            <Squad />
        </div>
    );
};

export default HomePage;
