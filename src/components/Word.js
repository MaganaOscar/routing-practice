import React from 'react';

const Word = props => {
    if (isNaN(+props.word)) {
        return (
            <p>The word is: {props.word}</p>
        )
    }
    else {
        return (
            <p>The number is: {props.word}</p>
        )
    }
}

export default Word;