import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import jwt from 'jsonwebtoken';

const Item = ({ token }) => {
    const [items, setItems] = useState([]);
    const [cart, setCart] = useState([]);
    const [quantity, setQuantity] = useState(0);

    async function addToCart(event) {
        event.preventDefault();

        const item = event.target.id;

        await axios.post(`/api/carts/${cart}/product/${item}`)
            .then((cartData) => {
                console.log(cartData);
            })
    }

    useEffect(() => {
        async function decodeToken() {
            const decoded = jwt.verify(JSON.parse(token).data, process.env.REACT_APP_SECRET);
            const user = decoded.id;

            const cartData = await axios.get(`/api/carts/${user}`);

            setCart(cartData.data.uuid);
        }

        async function getAllItemsCategories() {
            let url = window.location.href;
            let itemId = window.location.href.substr(url.length - 36, url.length);

            await axios.get(`/api/products/${itemId}`)
                .then(data => {
                    setItems(data.data);
                    console.log(data.data);
                });
        }

        getAllItemsCategories();
        decodeToken();
    }, []);

    // TODO: add onChange event for quantity

    return (
        <div>
            <img src={items.imgPath} alt={items.name} />
            <div>
                <button>-</button>
                <h2>1</h2>
                <button>+</button>

                <h2>{items.price}</h2>
            </div>
            <h1>{items.name}</h1>
            <p>{items.description}</p>
            <NavLink to="/cart">
                <button id={items.uuid} onClick={addToCart}>Add</button>
            </NavLink>
        </div>
    );
}

export default Item;