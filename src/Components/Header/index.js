import React from 'react';
import './header.css';

import { Link } from 'react-router-dom';
import { MdAirplaneTicket } from 'react-icons/md';
import { useSelector } from 'react-redux';

export default function Header() {
  const reserveSize = useSelector(state => state.reserve.length);

  return (
    <header className='container'>
      <Link to='/'>
        <MdAirplaneTicket className='logo' size={60}/>
      </Link>

      <Link className='reserva' to='/reservas'>
        <div>
          <strong>Minhas reservas</strong>
          <span>{reserveSize} reservas</span>
        </div>
      </Link>
    </header>
  )
}
