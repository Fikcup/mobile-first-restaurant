import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Menu = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get(`/api/categories`)
            .then(data => {
                setCategories(data.data);
            });
    });
    
    return (
        <div>
            {categories.map((category, index) => {
                return (
                    <div key={category.name + index}>
                        <h1>{category.name}</h1>
                    </div>
                );
            })}
        </div>
    );
}

export default Menu;