import React, {useState,useEffect, useLayoutEffect} from 'react'
import {Link,Navigate,useNavigate, useParams} from "react-router-dom"
import PassageiroServices from '../../Services/PassageiroServices';
import PassagemServices from '../../Services/PassagemServices';
export default ()=>{
const [nome,setNome]=useState("");
const[sobrenome,setSobrenome]=useState("");
const [idade,setIdade]=useState("");
const [acompanhantes,setAcompanhantes]=useState("");
const [passagem,setPassagem]=useState({id:0, destino:""});
const{id}=useParams();
const navigate=useNavigate();
const [passagens,setPassagens]=useState([])
    const getAllPassagens=()=>{
    PassagemServices.getAllPassagens().then((response) =>{
    setPassagens(response.data)
    console.log(response.data)
    
    }).catch((erro)=>{
    console.log(erro);
    
    })
    
    } 
    useEffect(()=> {
        getAllPassagens();  
    
    },[])
console.log(nome);
console.log(sobrenome);
console.log(idade);
console.log(acompanhantes);
console.log(passagem);
const criaroueditarPassageiro=(e) =>{
    const passageiro={nome,sobrenome,idade,acompanhantes,passagem}
    e.preventDefault();
    console.log(passageiro);
if(id){
PassageiroServices.updatePassageiro(id,passageiro).then(()=>{
    navigate("/indexpassageiro");
})
}else{
    PassageiroServices.createPassageiro(passageiro).then((response)=>{})
   navigate("/indexpassageiro")
}
}
const title=() =>{

    if(id){
        return(<h2 className='text-center'>Editar</h2>)
    }else{
        return(<h2 className='text-center'>Criar</h2>)
    }
}
useEffect (()=>{

    function getPassageiroByid(){
        if(id){
PassageiroServices.getPassageirobyId(id).then((response)=>{
setNome(response.data.nome);
setSobrenome(response.data.sobrenome);
setIdade(response.data.idade);
setPassagem({id:response.data.passagem.id, nome: response.data.passagem.destino});
setAcompanhantes(response.data.acompanhantes);
}).catch((erro)=>{console.log(erro)})

        }
    }
    getPassageiroByid();
},[id])
    return(
  <div className='container py-3'>
<form>
  <fieldset >
    <legend>{title()}</legend>
  
 
    <div className="mb-3">
      <label htmlFor="nome" className="form-label">Nome</label>
      <input type="text" id="nome" className="form-control" placeholder="Digite o nome" onChange={(e)=> setNome(e.target.value)} value={nome}/>
      
    </div>
    <div className="mb-3">
      <label htmlFor="sobrenome" className="form-label">Sobrenome</label>
      <input type="text" id="sobrenome" className="form-control" placeholder="Digite o numero de sobrenome" onChange={(e)=> setSobrenome(e.target.value)} value={sobrenome}/>
    </div>

    <div className="mb-3">
      <label htmlFor="nome" className="form-label">Idade</label>
      <input type="text" id="nome" className="form-control" placeholder="Digite o idade" onChange={(e)=> setIdade(e.target.value)} value={idade}/>
      
    </div>

    <div className="mb-3">
      <label htmlFor="nome" className="form-label">Acompanhantes</label>
      <input type="text" id="nome" className="form-control" placeholder="Digite quantas pessoas irão acompanhar" onChange={(e)=> setAcompanhantes(e.target.value)} value={acompanhantes}/>
      
    </div>

    <div className="mb-3">
      <label htmlFor="nome" className="form-label">Id da Passagem</label>
      <select  value= {passagem.id} onChange={(e)=> setPassagem({id:Number.parseInt(e.target.value)})}className="form-select" aria-label="Default select example">
  <option defaultValue>Open this select menu</option>
  {passagens.map((passagem)=>(  <option key={passagem.id}value={passagem.id}>{passagem.destino}</option>))}
  
</select>
      <button type="submit" className="btn btn-primary" onClick={(e)=> criaroueditarPassageiro(e)}>Submit</button>
    <Link to="/indexpassageiro"className='btn btn-danger' style={{marginLeft:"10px"}}>Cancelar</Link>
    </div>
  </fieldset>

  
</form>

  </div>
);

}