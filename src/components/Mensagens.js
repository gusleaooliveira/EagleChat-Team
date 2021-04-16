import React from 'react'

function Mensagens(props){
  return  <div className="padding-5 blue-telegram-2">
            {contatos.map((indice, item) =>{
                  return <div>{item}</div>;
              })}
          </div>
}

export default Mensagens