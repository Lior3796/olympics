import React from 'react';
import './Button.css'

function Button({text}) {
    return (
    <input value={text} className="genericButton" type="button" />
    );
}

export default Button;