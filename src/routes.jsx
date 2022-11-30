import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React from "react";
import { Login } from "./pages/login";
import { CadastrarUsuario } from "./pages/CadastrarUsuario";

export function Rotas () {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element= {<Login/>} />
                <Route path="/CadastrarUsuario" element= {<CadastrarUsuario/>}/>
            </Routes>
        </Router>
    )
}