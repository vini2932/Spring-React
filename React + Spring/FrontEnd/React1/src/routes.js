import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Paginas/Home'
import Contato from './Paginas/Contato';
import Promoções from './Paginas/Promoções';
import Destinos from './Paginas/Destinos';
import IndexPassageiro from './Paginas/Passageiro/index'
import Index from "./Paginas/Passagem/index"
import CreatePassagem from './Paginas/Passagem/CreatePassagem'; 
import createPassageiro from './Paginas/Passageiro/createPassageiro';
import CreatePassageiro from './Paginas/Passageiro/createPassageiro';
export default function Colocar(){

    return(
<BrowserRouter>
<Routes>

<Route path="/" exact element={<Home/>} />
<Route path="/Contato" element={<Contato/>}></Route>
<Route path="/Promocoes" element={<Promoções/>}></Route>
<Route path="/Destino" element={<Destinos/>}></Route>
<Route path="/Crud" element={<Index></Index>}></Route>
<Route path="/createPassagem" element={<CreatePassagem></CreatePassagem>}></Route>
<Route path="/Crud/updatePassagem/:id" element={<CreatePassagem></CreatePassagem>}></Route>
<Route path="/indexpassageiro" element={<IndexPassageiro></IndexPassageiro>}></Route>
<Route path="/createpassageiro" element={<CreatePassageiro></CreatePassageiro>}></Route>
<Route path="/updatepassageiro/:id" element={<CreatePassageiro></CreatePassageiro>}></Route>
</Routes>
</BrowserRouter>

    );
}