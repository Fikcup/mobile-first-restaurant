import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import jwt from 'jsonwebtoken';

const Category = ({ token }) => {
    const navigate = useNavigate();

    const [items, setItems] = useState([]);
    const [cart, setCart] = useState([]);

    async function addToCart(event) {
        event.preventDefault();

        if (!token) {
            navigate('/me');
        }

        event.preventDefault();

        const item = event.target.parentNode.id;

        await axios.post(`/api/carts/${cart}/product/${item}`)
            .then((cartData) => {
                console.log(cartData);
            })
    }

    useEffect(() => {
        async function decodeToken() {
            if (token !== null) {
                const decoded = jwt.verify(token, process.env.REACT_APP_SECRET);
                const user = decoded.id;

                const cartData = await axios.get(`/api/carts/${user}`);

                if (cartData.data !== null) {
                    setCart(cartData.data.uuid);
                }
                console.log(cart);
            }
        }

        async function getAllItemsCategories() {
            let url = window.location.href;
            let categoryId = window.location.href.substr(url.length - 36, url.length);

            await axios.get(`/api/products/category/${categoryId}`)
                .then(data => {
                    setItems(data.data);
                });
        }

        getAllItemsCategories();
        decodeToken();
    }, [token]);

    return(
        <div>
            {items.map((item, index) => {
                let link = `/menu/item/${item.uuid}`;

                return (
                    <NavLink to={link} key={item.name + index}>
                        <div id={item.uuid}>
                            <img src={item.image} alt={item.name} />                            
                            <h1>{item.name}</h1>
                            <h2>{item.price}</h2>
                            <p>{item.description}</p>
                            <button onClick={addToCart}>Add</button>
                        </div>
                    </NavLink>
                );
            })}
        </div>
    );
}

export default Category;