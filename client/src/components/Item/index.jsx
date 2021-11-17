import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const Item = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
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
    }, [items.uuid]);

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
                <button>Add</button>
            </NavLink>
        </div>
    );
}

export default Item;