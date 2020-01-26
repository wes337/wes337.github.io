import React from 'react'
import './button.scss'

const defaultProps = {
    text: '',
    url: null,
    light: false,
}

function Button({ text, url, light }) {
    if (!url) {
        return (
            <button className="button btn-custom">
                <span className={`circle ${light ? 'light' : ''}`} aria-hidden="true">
                    <span className="icon arrow"></span>
                </span>
                <span className="button-text">{text}</span>
            </button>
        )
    }
    return (
        <a className="button btn-custom" href={url} target="_blank" rel="noopener noreferrer">
            <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
            </span>
            <span className="button-text">{text}</span>
        </a>
    )
}

Button.defaultProps = defaultProps

export default Button
