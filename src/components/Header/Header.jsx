import React from 'react';
import PropTypes from 'prop-types';
import "./header.scss";

export const Header = ({text}) => {
    return (
        <header>
            <h1>
                {text}
            </h1>
        </header>
    )
}

Header.propTypes = {
    text: PropTypes.string.isRequired
}
  

