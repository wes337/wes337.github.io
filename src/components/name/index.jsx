import React, { useEffect, useRef } from 'react'
import { useSpring, animated } from 'react-spring'
import Splitting from 'splitting'
import './name.scss'
import './reveal-animation.scss'
  
function Name() {
    const props = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 200 })
    const nameContent = useRef()
    
    useEffect(() => {
        Splitting({ target: nameContent.current })
        const letters = nameContent.current.querySelectorAll('.char')
        for (let i = 0; i < letters.length; i += 1) {
            const element = letters[i]
            setTimeout(() => element.classList.add('init'), 2200 + (i * 100))
            setTimeout(() => element.classList.remove('init'), 2400 + (i * 100))
            setTimeout(() => element.classList.add('init'), 3200)
            setTimeout(() => element.classList.remove('init'), 3400)
        }
    })

    return (
        <animated.div className="name" style={props}>
            <div className="name__text" ref={nameContent}>
                <h1>Wesley</h1>
            </div>
        </animated.div>
    )
}

export default Name