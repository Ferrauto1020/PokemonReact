import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { PokemonList } from "./components/PokemonList/PokemonList";

/**Cosa fa React (id=root), Virtual DOM ecc)
Definizione e Segnature componente
Drilling props
useRef
useReducer
useContext
memo
State VS LocalStorare
react-router-dom, come si usa e componenti associati (Link, Outlet Provider, SearchParams)
SSR-CSR

Da fare
Redux*/
function App() {
    return <PokemonList />;
}

export default App;
