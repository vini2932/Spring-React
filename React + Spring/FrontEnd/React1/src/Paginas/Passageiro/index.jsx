import userEvent from '@testing-library/user-event';
import React,{useState, useEffect} from 'react'
import {Link } from 'react-router-dom'
import PassageiroService from '../../Services/PassageiroServices';
export default ()=>{
const [passageiros,setPassageiro]=useState([])
const getAllPassageiro=()=>{
PassageiroService.getAllPassageiro().then((response) =>{
setPassageiro(response.data)
console.log(response.data)

}).catch((erro)=>{
console.log(erro);

})

} 
useEffect(()=> {
    getAllPassageiro();  

},[])
 const deletePassageiro=(passageiroid)=>{
PassageiroService.deletePassageiro(passageiroid).then((response)=>{
getAllPassageiro();

}).catch((erro)=>{
    console.log(erro);
    
    })
 }
return(

       <div className="container py-3">

<Link to="/createpassageiro">Criar Passageiro</Link>
<br/>
 <Link to={'/Crud'}>Index Passagem</Link>
<table className='table'>
    <thead>
        <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Sobrenome</th>
            <th>Idade</th>
            <th>Acompanhantes</th>
            <th>destino</th>
            <th>diarias</th>
            <th>Preço da passagem sem promoção</th>
            <th>Preço a ser pago</th>
            <th>Desconto</th>
        </tr>
    </thead>
    <tbody>
        {
            passageiros.map((passageiro) =>( <tr key={passageiro.id}>
                <td>{passageiro.id}</td>
                <td>{passageiro.nome}</td>
                <td>{passageiro.sobrenome}</td>
                <td>{passageiro.idade}</td>
                <td>{passageiro.acompanhantes}</td>
                <td>{passageiro.passagem.destino}</td>
                <td>{passageiro.passagem.diarias}</td>
                <td>{passageiro.passagem.semPromo}</td>
                <td>{passageiro.passagem.preço}</td>
                <td>{passageiro.passagem.desconto}</td>
                <td>
    
                    <Link to= {'/updatepassageiro/' +passageiro.id} className='btn btn-info'>Editar</Link>
                    
                    <button className='btn btn-danger'onClick={()=> deletePassageiro(passageiro.id)}>Deletar</button>
                </td>
            </tr>))
       
}
    </tbody>
</table>
       </div>
    );
}