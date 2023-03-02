import React from 'react'
import './reservas.css';

import {MdDelete} from 'react-icons/md';

export default function Reservas() {
  return (
    <div>
      <h1 className='title'>Você solicitou uma reserva</h1>

      <div className='reservas'>
        <img src="https://sujeitoprogramador.com/wp-content/uploads/2019/12/maceio.jpg"
        alt="Maceió" 
        />
        <strong>Viagem MAceió 7 dias</strong>
        <span>Quatidade: 2</span>
        <button
        type="button"
        onClick={() => {}}
        >
          <MdDelete size={20} color="#191919"/>
        </button>
      </div>

      <footer>
        <button
        type='button'
        >
          Solicitar Reservas
        </button>
      </footer>
    </div>
  )
}
