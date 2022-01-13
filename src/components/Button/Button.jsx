import React from 'react'
import PropTypes from 'prop-types';
import "./button.scss"

export const Button = ({text, onClickButton}) => {
    return (
        <div className={`button ${text}Button`}>
            <button onClick={() => onClickButton()}>
                <div className='text'>
                    {text}
                </div>
            </button>
        </div>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClickButton: PropTypes.func.isRequired
}
