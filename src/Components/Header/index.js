import React from 'react';
import './header.css';

import { Link } from 'react-router-dom';
import { MdAirplaneTicket } from 'react-icons/md';

export default function index() {
  return (
    <header className='container'>
      <Link to='/'>
        <MdAirplaneTicket className='logo'/>
      </Link>

      <Link className='reserva' to='/reservas'>
        <div>
          <strong>Minhas reservas</strong>
          <span>7 reservas</span>
        </div>
      </Link>
    </header>
  )
}
