import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="header">
      <div>
        <span>
          <Link to="/">Home</Link>
        </span>
        /
        <span>
          <Link to="/reserve">Reserva</Link>
        </span>
        /
        <span>
          <Link to="/sorpresa">Otra</Link>
        </span>
      </div>
    </nav>
  )
}

export default Header