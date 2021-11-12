import React from 'react';

const Item = (props) => {
    return (
        <div>
            <img src={props.imgPath} alt={props.name} />
            <div>
                <h2>{props.quantity}</h2>
                <h2>{props.price}</h2>
                <h1>{props.name}</h1>
            </div>
        </div>
    );
}

export default Item;