import React, {useState, useEffect} from 'react';
import axios from 'axios';
import jwt from 'jsonwebtoken';

const Cart = ({ token }) => {
    // TODO : send token in all cart header requests to verify with backend middleware
    const [cartProducts, setCartProducts] = useState([]);
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        (async () => {
            const decoded = jwt.verify(JSON.parse(token).data, process.env.REACT_APP_SECRET);
            const user = decoded.id;

            const cartData = await axios.get(`/api/carts/${user}`);
            setCart(cartData.data.uuid);

            const cartProductsData = await axios.get(`/api/carts/${cart}/product`);
            setCartProducts(cartProductsData.data);

            if (cartProducts) {
                let temp = [];
                let tempTotal = 0;

                for (let i = 0; i < cartProducts.length; i++) {
                    await axios.get(`/api/products/${cartProducts[i].productUuid}`)
                        .then((productData) => {
                            temp.push(productData.data);
                            tempTotal += productData.data.price;
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                }

                setProducts(temp);
                setTotal(tempTotal);
            }
        })();

    }, []);

    return (
        <div>
            <h1>Cart</h1>

            <div>
                {products.map((product, index) => {
                    return (
                        <div key={product.uuid + index}>
                            <h2>{product.name}</h2>
                            <img src={product.imgPath} alt={product.name} />
                            <h3>{product.price}</h3>
                        </div>
                    );
                })}

                {cartProducts.map((cartProduct, index) => {
                    return (
                        <div key={cartProduct + index}>
                            <h3>{cartProduct.quantity}</h3>
                        </div>
                    );
                })}
            </div>

            <h2>Order Total: {total}</h2>
        </div>
    );
}

export default Cart;