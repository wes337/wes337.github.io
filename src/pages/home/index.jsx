import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSpring, animated } from 'react-spring'
import SocialMediaLinks from '../../components/social-media-links'
import Waves from '../../components/waves'
import Name from '../../components/name'
import Subtitles from '../../components/subtitles'
import './home.scss'

function Home() {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 6000,
  })
  
  return (
    <div id="home">
      <section className="home">
        <SocialMediaLinks />
        <Name />
        <Subtitles />
        <animated.div style={props}>
          <FontAwesomeIcon icon="hand-point-down" size="2x" className="home__scroll--icon" />
        </animated.div>
        <Waves />
      </section>
    </div>
  )
}

export default Home
