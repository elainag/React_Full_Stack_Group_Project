import React from 'react'
import { Link } from "react-router-dom"
import tailwind from '../tailwind.css'

function NavLinks(props) {
  return (
    <div>
      {/* <h4>Nav Links</h4> */}
      {/* <div>
        Menu
      </div> */}
      <ul>
        <li className='nav-links'>
          <Link to="/" onClick={props.closeMenu}>Home</Link>
        </li>
        <li className='nav-links'>
          <Link to="/quiz" onClick={props.closeMenu}>Quiz</Link>
        </li>
      </ul>
    </div>

  )
}

export default NavLinks;