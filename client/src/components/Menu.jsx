import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useTransition, animated, config } from 'react-spring'
import NavLinks from './NavLinks'


function Menu() {

  const [show, setShow] = useState(false)

  const maskTransitions = useTransition(show, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: show,
    delay: 200,
    config: config.molasses,
  })

  const menuTransitions = useTransition(show, {
    from: { opacity: 0, transform: 'translateX(-100%)' },
    enter: { opacity: 1, transform: 'translateX(0%)' },
    leave: { opacity: 0, transform: 'translateX(-100%)' },
  })

  return (
    <nav className='navbar'>
      <span className='text-bold'>
        <FontAwesomeIcon
          icon={faBars}
          onClick={() => setShow(!show)} />
      </span>

      {
        maskTransitions((styles, item) =>
          item &&
          <animated.div
            style={styles}
            className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"
            onClick={() => setShow(false)}
          >
          </animated.div>
        )
      }
      {
        menuTransitions((styles, item) =>
          item &&
          <animated.div
            style={styles}
            className="fixed bg-white top-0 left-0 w-1/5 h-full z-50 shadow p-3"
          >
            <NavLinks
              closeMenu={() => setShow(false)}
            />
          </animated.div>
        )
      }


    </nav>


  )
}

export default Menu;