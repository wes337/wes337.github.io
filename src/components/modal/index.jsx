import React, { useRef } from 'react'
import Button from '../button'
import modalData from './modalData'
import { useSpring, useChain, animated} from 'react-spring'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './modal.scss'

const defaultProps = {
    modalName: false,
    modal: {
        title: 'Tile',
        subtitle: [],
        viewUrl: 'http://www.google.com',
        srcUrl: 'http://www.github.com',
        image: '',
        details: 'This is a piece of the new project, which I have recently started designing. Today, it is an alternative version of the article inner page animation.',
    }
}
  
function Modal({ modalName, toggleModal }) {
    const {
        title, subtitle, viewUrl, srcUrl, image, details, mobile,
    } = modalData[modalName] || defaultProps.modal

    const containerRef = useRef()
    const containerAnimation = useSpring({
        display: modalName ? 'block' : 'none',
        ref: containerRef,
    })

    const contentRef = useRef()
    const contentAnimation = useSpring({
        opacity: modalName ? 1 : 0,
        ref: contentRef,
    })

    useChain([contentRef, containerRef])

    const onToggleModal = (event) => {
        if (event.target.className === 'modal') {
            toggleModal(null)
        }
    }

    return (
        <animated.div className="modal" style={containerAnimation} onClick={(e) => onToggleModal(e)}>
            <animated.div className="modal__content" style={contentAnimation}>
                <button onClick={() => toggleModal(null)} className="modal__close">
                    <FontAwesomeIcon icon="times" />
                </button>
                <div className="modal__header">
                    <h1 className="modal__title">{title}</h1>
                    <h2 className="modal__subtitle">
                        Built with
                        {subtitle.map(icon => (
                            <FontAwesomeIcon
                                key={`icon-key-${icon}`}
                                icon={['fab', icon]}
                                className={`modal__icon icon--${icon}`}
                                size="2x"
                            />
                        ))}
                    </h2>
                </div>
                <div className="modal__actions">
                    <Button text="Demo" url={viewUrl} />
                    <Button text="Source" url={srcUrl} />
                </div>
                <div className="modal__screenshot">
                    <img src={image} alt={`screenshot of ${title}`} className={mobile ? '--mobile' : ''} />
                </div>
                <div className="modal__details">
                    <p>{details}</p>
                </div>
            </animated.div>
        </animated.div>
    )
}

Modal.defaultProps = defaultProps

export default Modal