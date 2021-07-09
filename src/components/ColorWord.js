import React from 'react';

const ColorWord = props => {
    return (
        <p style={{backgroundColor: props.bgColor, color: props.textColor}}>The word is: {props.word}</p>
    )
}

export default ColorWord;