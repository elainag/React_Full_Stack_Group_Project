import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useTransition, animated } from 'react-spring'
import NavLinks from './NavLinks'


function Menu() {

  const [show, setShow] = useState(false)


  const Transition = useTransition(show, {
    from: { opacity: 0, transform: 'translateX(-100%)' },
    enter: { opacity: 1, transform: 'translateX(0%)' },
    leave: { opacity: 0, transform: 'translateX(-100%)' },
  })


  return (
    <nav>
      <span className='menu-text'>
        <FontAwesomeIcon
          icon={faBars}
          onClick={() => setShow(!show)} />
      </span>

      <NavLinks closeMenu={() => setShow} />
    </nav>


  )
}

export default Menu;