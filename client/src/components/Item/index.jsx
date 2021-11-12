import React from 'react';

const Item = (props) => {
    return (
        <div>
            <img src={props.imgPath} alt={props.name} />
            <div>
                <button>-</button>
                <h2>{props.quantity}</h2>
                <button>+</button>

                <h2>{props.price}</h2>
            </div>
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <button>Add</button>
        </div>
    );
}

export default Item;