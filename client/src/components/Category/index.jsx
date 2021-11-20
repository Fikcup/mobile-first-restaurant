import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Category = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        async function getAllItemsCategories() {
            let url = window.location.href;
            let categoryId = window.location.href.substr(url.length - 36, url.length);

            await axios.get(`/api/products/category/${categoryId}`)
                .then(data => {
                    setItems(data.data);
                    console.log(data.data);
                });
        }

        getAllItemsCategories();
    }, []);

    return(
        <div>
            {items.map((item, index) => {
                let link = `/menu/item/${item.uuid}`;

                return (
                    <NavLink to={link} key={item.name + index}>
                        <div>
                            <img src={item.imgPath} alt={item.name} />                            
                            <h1>{item.name}</h1>
                            <h2>{item.price}</h2>
                            <p>{item.description}</p>
                            <button>Add</button>
                        </div>
                    </NavLink>
                );
            })}
        </div>
    );
}

export default Category;