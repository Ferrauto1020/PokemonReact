import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { PokemonList } from "./components/PokemonList/PokemonList";
import { PokemonSquadProvider } from "./context/pokemonContext";
import Squad from "./components/Squad/Squad";

/**Cosa fa React (id=root), Virtual DOM ecc)
Definizione e Segnature componente
Drilling props
useRef
useReducer
memo
State VS LocalStorare
react-router-dom, come si usa e componenti associati (Link, Outlet Provider, SearchParams)
SSR-CSR

Da fare
Redux*/
function App() {
    return (
        <PokemonSquadProvider>
            <div className="container">
                <PokemonList />;
                <Squad />
            </div>
        </PokemonSquadProvider>
    );
}

export default App;
