import React from 'react'
import '../Css/OnecardCss.css'
export default (props)=>{

    return(
    <div id="alinhar" >
      <div  id="cards">
          <div id="promo" >
              <p id="disconto">-{props.porcentagem}%</p>
          </div>
        <a href=""><img src={props.foto} alt="" id="imagempromo"/> </a>
  </div>
  
  <div  id="borda" id="imagempromo" >
          <h3 >{props.pacote}</h3>
          <p>📆 {props.diaria} diarias</p>
          <p>🥩 Café da manhã incluso</p>
          <p> <del>De R$ {props.promo}</del></p>
          <strong><p id="preco">R$ {props.preco}</p></strong>
      </div>
      </div>
    
      );
}
