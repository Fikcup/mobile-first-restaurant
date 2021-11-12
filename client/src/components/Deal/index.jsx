import React from 'react';

const Deal = (props) => {
    return (
        <div>
            <h1>{props.deal}</h1>
            <img src={props.dealImg} alt={props.deal} />
        </div>
    )
}

export default Deal;