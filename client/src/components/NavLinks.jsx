import React from 'react'
import { Link } from "react-router-dom"

function NavLinks(setShow) {
  return (
    <div>
      <div>
        Menu
      </div>
      <ul>
        <li>
          <Link to="/" onClick={setShow.closeMenu}>Home</Link>
        </li>
        <li>
          <Link to="/quiz" onClick={setShow.closeMenu}>Quiz</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavLinks;