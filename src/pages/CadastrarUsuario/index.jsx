import React from "react";
import { useState, useEffect } from "react"
import './estiloUsuario.css'
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../services/firebaseConfig';


export function CadastrarUsuario (){
    const[email, setEmail]= useState("");
    const[senha, setSenha]= useState("");


    const createUser = async () => {
        try{
            const  user = await createUserWithEmailAndPassword(auth, email, senha);
        } catch (error){
            console.log(error.message);
        }
    };
    

    const navigate = useNavigate();

    const handleEmailChange =(e)=>{
        setEmail(e.target.value);
    }
    const handleSenhaChange =(e)=>{
        setSenha(e.target.value);
    }
    const CadastrarUsuario=(e)=>{
        e.preventDefault();
        createUser();
    }

    return (
    <div className="box">
        <div className="class-box">
            <header className="form-content">
                <form onSubmit={(e)=>{CadastrarUsuario(e)}}>
                    <h2>Faça seu cadastro</h2>
                        <label>Email:</label>
                        <br/>
                        <input type="email" value={email} required onChange={(e)=> {handleEmailChange(e)}} />
                        <br/>
                        <label>Senha:</label>
                        <br/>
                        <input type="password" value={senha} required onChange={(e)=> {handleSenhaChange(e)}} minlength="8"/>
                        <br/>
                        <button type="submit" value="Submit">Finalizar</button>
                    </form>
                </header>
            </div>
        </div>
    );
}




























  
