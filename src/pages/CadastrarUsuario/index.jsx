import React from "react";
import { useState, useEffect } from "react"
import './estiloUsuario.css'
import { useNavigate } from "react-router-dom";
import verificaCPF from "../../utils/verificaCpf";
import api from "../../services/usuarioSevice";
import { IMaskInput} from "react-imask"
import { initializeApp } from "firebase/app";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";

const projetoPim = initializeApp( {
    apiKey: "AIzaSyCwRJNwsRz1uaq8sbcB7vBJ8xb0dRPGWVU",
    authDomain: "projetopim-1e4de.firebaseapp.com",
    projectId: "projetopim-1e4de",
  });

export function CadastrarUsuario (){
    const[nome, setNome]= useState("");
    const[email, setEmail]= useState("");
    const[cpf, setCpf]= useState("");
    const[telefone, setTelefone]= useState("");
    const[senha, setSenha]= useState("");
    const[confSenha, setconfSenha]= useState("");
    const [users, setUsers] = useState([]);

    const db = getFirestore(projetoPim);
    const userCollectionRef = collection(db, "users")

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(userCollectionRef)
            
        }
        getUsers();
      }, []);
    
    async function createUser(){
        const user = await addDoc(userCollectionRef,{
            nome,
            email,
            cpf,
            telefone,
            senha,
            confSenha,
        });
        console.log(user);
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
                        <IMaskInput 
                        mask = "000.000.000-00"
                        required onChange={(e)=>setCpf(e.target.value)} value={cpf} type="text" maxLength='14' placeholder=" "/>
                        <br/>

                        <label>Telefone:</label>
                        <br/>
                        <input type="text" value={telefone} required onChange={(e)=> {handleTelefoneChange(e)}} maxLength='15'/>
                        <br/>
                    
                        <label>Senha:</label>
                        <br/>
                        <input type="password" value={senha} required onChange={(e)=> {handleSenhaChange(e)}} minlength="8"/>
                        <br/>

                        <label>Confirmar Senha:</label>
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




























  
