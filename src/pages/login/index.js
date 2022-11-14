import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Logo_darm from "./01.png"
import React from "react";
import './estilo.css'
import verificaCPF from "../../utils/verificaCpf";
import api from "../../services/usuarioSevice";

export function Login (){
    const[cpf, setCpf]= useState("")
    const[senha, setSenha]= useState("")

    const navigate = useNavigate();

    function authenticateUser() {
        api
        .get("", {params: {
          cpf: cpf ,
          senha: senha
   }})
        .then((response) => {
            console.log(response.data)
            if(response.data.length == 0)
                alert("Erro")
            else {
                alert("Usuario logado!")
                navigate("");
            }
        }
        )
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });
    }

    function handleLogin(e){
        e.preventDefault()

        if(cpf.length > 0 && senha.length > 0){
            if(!verificaCPF(cpf))                
                alert("CPF inválido!") 
        }else{
            alert("Preencha todos os campos!")
        }

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

                    <label >CPF</label>
                    <input required onChange={(e)=>setCpf(e.target.value)} value={cpf} type="text" maxLength='11' placeholder=" "/>
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