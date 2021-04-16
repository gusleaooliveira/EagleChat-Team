import React from 'react';
import BarraInferiror from './BarraInferiror'
import BarraSuperior from './BarraSuperior'
import Chat from './Chat'

function BarraLateral(){
  return  <div className="row ">
            <div className="col-4 ">
              <BarraSuperior nome="Gustavo" imagem="https://i.pinimg.com/originals/49/c8/e4/49c8e403cd1929e9e7b02126824ff831.jpg" />
              
              <BarraInferiror />
            </div>

            <div className="col-8">
              <Chat />
            </div>
          </div>
}

export default BarraLateral;