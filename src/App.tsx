import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { PokemonList } from "./components/PokemonList/PokemonList";
import { PokemonSquadProvider } from "./context/pokemonContext";
import Squad from "./components/Squad/Squad";
import HomePage from "./page/HomePage";
import { Route, Routes } from "react-router-dom";
import { routes } from "./router";
import Navbar from "./components/Navbar/Navbar";

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
        <main>
            <Navbar />
            <Routes>
                {routes.map((route) => (
                    <Route
                        path={route.path}
                        Component={route.component}
                        key={route.path}
                    />
                ))}
            </Routes>
        </main>
    );
}

export default App;
