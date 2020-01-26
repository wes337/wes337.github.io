import React, { useRef } from 'react'
import Button from '../button'
import './card.scss'

function Card(props) {
    const buttonRef = useRef()
    const { modalName, image, title, info, mobile, toggleModal } = props
    
    const onMouseOver = () => {
        const buttonNode = buttonRef.current.children[0]
        buttonNode.classList.add('--hover')
    }

    const onMouseOut = () => {
        const buttonNode = buttonRef.current.children[0]
        buttonNode.classList.remove('--hover')
    }

    return (
        <div
            className="card"
            onClick={() => toggleModal(modalName)}
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
        >
            <div className="card__content">
                <p className="card__title">{title}</p>
                <div className="card__info">
                    <p className="card__info-text">{info}</p>
                    <div className="card__info-btn" ref={buttonRef}>
                        <Button light />
                    </div>
                </div>
            </div>
            <div className="card__image-container">
                <img src={image} className={`card__image ${mobile ? '--mobile' : ''}`}alt="" />
            </div>
        </div>
    )
}

export default Card
