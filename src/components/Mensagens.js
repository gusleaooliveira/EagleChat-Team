import React from 'react'

function Mensagens(props){
  return  <div className="padding-5 blue-telegram-2">
            {props.contatos.map((value, index) =>{
                  console.log(index,value)
                  return  <div className="container-logotipo">
                            <img src={value['imagem']} className="item icon-large border-circle" />
                            <div className="container-logotipo-coluna">
                              <h3 className="item">{value['nome']}</h3>
                              <p className="item">{value['ultima_mensagem']}</p>
                            </div>
                          </div>
              })}
          </div>
}

export default Mensagens