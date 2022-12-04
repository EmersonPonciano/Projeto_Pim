import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Logo_darm from "./01.png"
import React from "react";
import './estilo.css'
import verificaCPF from "../../utils/verificaCpf";
import api from "../../services/usuarioSevice";
import { IMaskInput} from "react-imask"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../services/firebaseConfig';

export function Login (){
    const[email, setEmail]= useState("");
    const[senha, setSenha]= useState("");

    const navigate = useNavigate();

    const authenticateUser = async() => {
        try{
            const  user = await signInWithEmailAndPassword(auth, email, senha);
        } catch (error){
            console.log(error.message);
        }
    }

    function handleLogin(e){
        e.preventDefault();
        authenticateUser();
    }

    return (
        <div className="container">
            <div className="form-content">
                <form onSubmit={handleLogin}>
                    <div className="gfg">
                    <img src={Logo_darm}/>
                    </div>

                    <h1>Faça seu login</h1>

                    <label >Email</label>
                    <input required onChange={(e)=>setEmail(e.target.value)} value={email} type="text" placeholder=" "/>
                    <br></br>

                    <label >Senha</label>
                    <input required onChange={(e)=>setSenha(e.target.value)} value={senha} type="password" minlength="6" placeholder=" "/>
                    <br></br>
                    
                    <button type="submit">Continuar</button>
                    <br></br>
                    <br></br>
                    <div className="cadastro-link">
                    <Link to="./CadastrarUsuario">Não tem uma conta? <span>Cadastre-se.</span></Link>
                    </div>
                </form>
            </div>
        </div>
    )
}