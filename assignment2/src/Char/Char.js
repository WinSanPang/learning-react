import React from 'react';

const style = {
    color: 'red',
    display: 'inline-block',
    padding: '16px',
    textAlign: 'center',
    margin: '16px',
    border: '1px solid white'
}

const char = (props) => {
    return (
        <div 
        style={style}
        onClick={props.click}>
            {props.character}
        </div>
    )
};

export default char;