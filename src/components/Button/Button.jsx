import React from 'react'
import PropTypes from 'prop-types';
import "./button.scss"

export const Button = ({text, onClick}) => {
    return (
        <div className={`button ${text}Button`}>
            <button onClick={() => onClick()}>
                <div className='text'>
                    {text}
                </div>
            </button>
        </div>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}
