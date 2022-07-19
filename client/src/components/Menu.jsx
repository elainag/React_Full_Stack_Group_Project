import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useTransition, animated } from 'react-spring'
import NavLinks from './NavLinks'


function Menu() {

  const [show, setShow] = useState(false)


  return (
    <nav>
      <span className='text-xl'>
        <FontAwesomeIcon
          icon={faBars}
          onClick={() => setShow(!show)} />
      </span>

      <NavLinks closeMenu={() => setShow} />
    </nav>


  )
}

export default Menu;