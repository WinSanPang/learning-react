import React from 'react';

const userOutput = (props) => {
    return (
        <div className ="UserOutput">
            <p>Hi, my name is: {props.username}</p>
            <p>It's so nice to meet you! :) </p>
        </div>
    );
};

export default userOutput;