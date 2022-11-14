import React from "react";
import { useState, useEffect } from "react"
import './estiloUsuario.css'
import { useNavigate } from "react-router-dom";
import verificaCPF from "../../utils/verificaCpf";
import api from "../../services/usuarioSevice";

export function CadastrarUsuario (){
    const[nome, setNome]= useState("")
    const[email, setEmail]= useState("")
    const[cpf, setCpf]= useState("")
    const[telefone, setTelefone]= useState("")
    const[senha, setSenha]= useState("")
    const[confSenha, setconfSenha]= useState("")

    useEffect(() => {
        
      }, []);
    
    function createUser(){
        api
          .post("",{
            nome: nome ,
            email: email ,
            cpf: cpf ,
            telefone: telefone ,
            senha: senha
     })
          .then((response) => console.log(response.data))
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
    }
    

    const navigate = useNavigate();

    function handleChange(e) {
        setNome(e.target.value);
    }
    const handleEmailChange =(e)=>{
        setEmail(e.target.value);
    }
    const handleCpfChange =(e)=>{
        setCpf(e.target.value);
    }
    const handleTelefoneChange =(e)=>{
        setTelefone(e.target.value);
    }
    const handleSenhaChange =(e)=>{
        setSenha(e.target.value);
    }
    const handleConfSenhaChange =(e)=>{
        setconfSenha(e.target.value);
    }
    const CadastrarUsuario=(e)=>{
        e.preventDefault();

        if(telefone.length > 0 && telefone.length < 15){
        }else{
            alert("Telefone inválido!")
        }

        if(cpf.length > 0 && senha.length > 0){
            if(verificaCPF(cpf)) {
                navigate("");
            } else {
                alert("CPF inválido!")
            }
        }

        if(senha!==confSenha)
        {
          alert("Senhas não corresponde!");
        }
        
        createUser();
    }

    return (
    <div className="box">
        <div className="class-box">
            <header className="form-content">
                <form onSubmit={(e)=>{CadastrarUsuario(e)}}>
                    <h2>Faça seu cadastro</h2>
                        <label >Nome:</label>
                        <br/>
                        <input type="text" value={nome} required onChange={(e)=> {handleChange(e)}} maxLength='30'/>
                        <br/>

                        <label>Email:</label>
                        <br/>
                        <input type="email" value={email} required onChange={(e)=> {handleEmailChange(e)}} />
                        <br/>

                        <label>CPF:</label>
                        <br/>
                        <input type="text" value={cpf} required onChange={(e)=> {handleCpfChange(e)}} maxLength='11'/>
                        <br/>

                        <label>Telefone:</label>
                        <br/>
                        <input type="text" value={telefone} required onChange={(e)=> {handleTelefoneChange(e)}} maxLength='15'/>
                        <br/>
                    
                        <label>Senha:</label>
                        <br/>
                        <input type="password" value={senha} required onChange={(e)=> {handleSenhaChange(e)}} minlength="8"/>
                        <br/>

                        <label>Confirma Senha:</label>
                        <br/>
                        <input type="password" value={confSenha} required onChange={(e)=> {handleConfSenhaChange(e)}} minlength="8"/>
                        <br/>
                        <button type="submit" value="Submit">Finalizar</button>
                    </form>
                </header>
            </div>
        </div>
    );
}




























  