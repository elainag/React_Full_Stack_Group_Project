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
    onRest: () => setShow(!show),
  })



  const menuTransitions = useTransition(show, {
    from: { opacity: 0, transform: 'translateX(-100%)' },
    enter: { opacity: 1, transform: 'translateX(0%)' },
    leave: { opacity: 0, transform: 'translateX(-100%)' },
    onRest: () => setShow(!show),
  })


  return (
    <nav>
      <span className='menu-text'>
        <FontAwesomeIcon
          icon={faBars}
          onClick={() => setShow(!show)} />
      </span>

      {
        maskTransitions((styles, item) =>
          item &&
          <animated.div
            style={styles}
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