import React, {useState,useEffect, useLayoutEffect} from 'react'
import {Link,Navigate,useNavigate, useParams} from "react-router-dom"
import PassagemServices from '../../Services/PassagemServices';
export default ()=>{
const [destino,setDestino]=useState("");
const[diarias,setDiarias]=useState("");
const [desconto,setDesconto]=useState("");
const [semPromo,setSemPromo]=useState("");
const [preço,setPreço]=useState();
const [foto,setFoto]= useState("");
const{id}=useParams();
const navigate=useNavigate();
console.log(destino);
console.log(diarias);
console.log(desconto);
console.log(semPromo);
console.log(preço);
console.log(foto);
const criaroueditarPassagem=(e) =>{
    const passagem={destino,diarias,desconto,semPromo,preço,foto}
    e.preventDefault();
    console.log(passagem);
if(id){
PassagemServices.updatePassagem(id,passagem).then(()=>{
    navigate("/Crud");
})
}else{
    PassagemServices.createPassagem(passagem).then((response)=>{})
    navigate("/Crud")
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

    function getPassagemByid(){
        if(id){
PassagemServices.getPassagembyId(id).then((response)=>{
setDestino(response.data.destino);
setDiarias(response.data.diarias);
setDesconto(response.data.desconto);
setPreço(response.data.preço);
setSemPromo(response.data.semPromo);
setFoto(response.data.foto);
}).catch((erro)=>{console.log(erro)})

        }
    }
    getPassagemByid();
},[id])
    return(
  <div className='container py-3'>
<form>
  <fieldset >
    <legend>{title()}</legend>
    <div className="mb-3">
      <label htmlFor="nome" className="form-label">Foto</label>
      <input type="text" id="nome" className="form-control" placeholder="Digite o endereço da foto" onChange={(e)=> setFoto(e.target.value)} value={foto}/>
      
    </div>
    <div className="mb-3">
      <label htmlFor="nome" className="form-label">Destino</label>
      <input type="text" id="nome" className="form-control" placeholder="Digite o destino" onChange={(e)=> setDestino(e.target.value)} value={destino}/>
      
    </div>
    <div className="mb-3">
      <label htmlFor="sobrenome" className="form-label">Diarias</label>
      <input type="text" id="sobrenome" className="form-control" placeholder="Digite o numero de diarias" onChange={(e)=> setDiarias(e.target.value)} value={diarias}/>
    </div>

    <div className="mb-3">
      <label htmlFor="nome" className="form-label">Desconto</label>
      <input type="text" id="nome" className="form-control" placeholder="Digite o desconto" onChange={(e)=> setDesconto(e.target.value)} value={desconto}/>
      
    </div>

    <div className="mb-3">
      <label htmlFor="nome" className="form-label">Valor sem Promoção</label>
      <input type="text" id="nome" className="form-control" placeholder="Digite o preço sem a promoção" onChange={(e)=> setSemPromo(e.target.value)} value={semPromo}/>
      
    </div>

    <div className="mb-3">
      <label htmlFor="nome" className="form-label">Preço da Passagem</label>
      <input type="text" id="nome" className="form-control" placeholder="Digite o preço da passagem" onChange={(e)=> setPreço(e.target.value)} value={preço}/>
      <button type="submit" className="btn btn-primary" onClick={(e)=> criaroueditarPassagem(e)}>Submit</button>
    <Link to="/Crud"className='btn btn-danger' style={{marginLeft:"10px"}}>Cancelar</Link>
    </div>
  </fieldset>

  
</form>

  </div>
);

}