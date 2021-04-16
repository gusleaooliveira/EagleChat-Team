import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function BarraInferior(){
  return  <footer className="padding-5 blue-telegram-2 grid-botao ">

              <input type="text" placeholder="Pesquisar contato" className="input white border-bottom-blue-twitter-focus input-pesquisar" />
              <a className="btn btn-info btn-pesquisar">
                <FontAwesomeIcon icon={faSearch} />
              </a>
          
          </footer>
}

export default BarraInferior