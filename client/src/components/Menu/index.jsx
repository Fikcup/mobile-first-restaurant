import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Menu = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function getCategories() {
            await axios.get(`/api/categories`)
                .then(data => {
                    setCategories(data.data);
                });
        }

        getCategories();
    }, [categories.uuid]);
    
    return (
        <div>
            {categories.map((category, index) => {
                return (
                    <NavLink to={category.uuid}>
                        <div key={category.name + index}>
                            <h1>{category.name}</h1>
                        </div>
                    </NavLink>
                );
            })}
        </div>
    );
}

export default Menu;