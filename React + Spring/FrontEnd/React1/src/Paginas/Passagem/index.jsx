import React from 'react'
import PassagemServices from '../../Services/PassagemServices'
import OneCard from '../../Componentes/OneCard'
import {useState, useEffect} from 'react'
import {Link } from 'react-router-dom'
export default ()=>{
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
     const deletePassagem=(passagemid)=>{
    PassagemServices.deletePassagem(passagemid).then((response)=>{
    getAllPassagens();
    
    }).catch((erro)=>{
        console.log(erro);
        
        })
     }
     const numero=0;
const rendif= ()=>{if(numero===3)
    {
return(<div style={{display: "inline"}}></div>)

     }else{
         return(<div style={{display: "flex"}}></div>)
     }
    }
    return(<>
<Link to="/createPassagem">Criar Passagem</Link>
<br/>
<Link to="/indexpassageiro" >Index Passageiro</Link>
<div style={{display: "flex"}}>
{
passagens.map((passagem) =>(<>
<OneCard pacote={passagem.destino} diaria={passagem.diarias} promo={passagem.semPromo} preco={passagem.preço} porcentagem={passagem.desconto} foto={passagem.foto} ></OneCard>

    <div style={{position: "relative" , bottom:"-540px" ,left:"-300px"}}>
    <Link to= {'updatePassagem/' +passagem.id} className='btn btn-info'>Editar</Link>
    <button className='btn btn-danger'onClick={()=> deletePassagem(passagem.id)} style={{marginLeft:"0"}}>Deletar</button>
</div>

 </>
)
 
)
  
       
}
</div>


                </>
    );
}