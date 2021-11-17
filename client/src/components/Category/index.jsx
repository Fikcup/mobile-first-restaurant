import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Category = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        let url = window.location.href;
        let categoryId = window.location.href.substr(url.length - 36, url.length);

        axios.get(`/api/products/category/${categoryId}`)
            .then(data => {
                setItems(data.data);
                console.log(data.data);
            });
    })

    return(
        <div>
            {items.map((item, index) => {
                return (
                    <NavLink to={item.uuid}>
                        <div key={item.name + index}>
                            <img src={item.imgPath} alt={item.name} />                            
                            <h1>{item.name}</h1>
                            <h2>{item.price}</h2>
                            <p>{item.description}</p>
                            <button>Add</button>
                        </div>
                    </NavLink>
                )
            })}
        </div>
    );
}

export default Category;