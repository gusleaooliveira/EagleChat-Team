import React from 'react'

function BarraSuperior(props){
  return  <header className="padding-5 blue-telegram-2">
            <div className="container-logotipo"> 
                <img src={props.imagem} className="item icon-large border-circle" /> 
                <p className="item-center ">{props.nome}</p>
            </div> 
          </header>
}

export default BarraSuperior