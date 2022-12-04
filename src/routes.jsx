import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React from "react";
import { Login } from "./pages/login";
import { CadastrarUsuario } from "./pages/CadastrarUsuario";
import { Carros } from "./pages/TabelaCarros"

export function Rotas () {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element= {<Login/>} />
                <Route path="/CadastrarUsuario" element= {<CadastrarUsuario/>}/>
                <Route path="/Carros" element= {<Carros/>}/>
            </Routes>
        </Router>
    )
}