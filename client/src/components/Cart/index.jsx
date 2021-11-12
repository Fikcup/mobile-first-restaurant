import React from 'react';

const Cart = (props) => {
    return (
        <div>
            <h1>Cart</h1>
            
            {props.children}

            <h2>Order Total: {props.total}</h2>
        </div>
    );
}

export default Cart;