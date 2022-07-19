import React from 'react'
import { Link } from "react-router-dom"
import tailwind from '../tailwind.css'

function NavLinks(setShow) {
  return (
    <div>
      <h4>Nav Links</h4>
      <div>
        Menu
      </div>
      <ul>
        <li className='nav-links'>
          <Link to="/" onClick={setShow.closeMenu}>Home2</Link>
        </li>
        <li className='nav-links'>
          <Link to="/quiz" onClick={setShow.closeMenu}>Quiz</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavLinks;