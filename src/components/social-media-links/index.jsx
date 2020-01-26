import React from 'react'
import { useSprings, animated } from 'react-spring'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './social-media-links.scss'

function SocialMediaLinks() {
    const icons = [
        <a href="http://github.com/wes337" target="blank"><FontAwesomeIcon icon={['fab', 'github']} size="2x" /></a>,
        <a href="https://www.linkedin.com/in/wesley-moses-7a6213149/" target="blank"><FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" /></a>,
        <a href="https://www.instagram.com/moseswes/" target="blank"><FontAwesomeIcon icon={['fab', 'instagram']} size="2x" /></a>,
        <a href="https://www.facebook.com/wesmoses" target="blank"> <FontAwesomeIcon icon={['fab', 'facebook']} size="2x" /></a>,
        <a href="https://brethrenmetal.bandcamp.com/" target="blank"><FontAwesomeIcon icon={['fab', 'bandcamp']} size="2x" /></a>,
    ]
    const springs = useSprings(icons.length, icons.map((item, index) => (
        { opacity: 1, from: { opacity: 0 }, delay: 3800 + (index * 100) }
    )))

    return (
        <div className="social-media-links">
            {springs.map((props, i) => <animated.div style={props} children={icons[i]} key={`icons--${i}`} />)}
        </div>
    )
}

export default SocialMediaLinks
