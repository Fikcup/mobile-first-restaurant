import React, {useState, useEffect} from 'react';
import axios from 'axios';
import jwt from 'jsonwebtoken';

const Cart = ({ token }) => {
    // TODO : send token in all cart header requests to verify with backend middleware
    const [cartProducts, setCartProducts] = useState([]);
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        async function getCartProducts(token) {
            const decoded = jwt.verify(JSON.parse(token).data, process.env.REACT_APP_SECRET);
            const user = decoded.id;

            await axios.get(`/api/carts/${user}`)
                .then((cartData) => {
                    setCart(cartData.data.uuid);
                })
                .catch((err) => {
                    console.log(err);
                });

            await axios.get(`/api/carts/${cart}/product`)
                .then((cartData) => {
                    setCartProducts(cartData.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }

        async function getProductInfo(product) {
            if (product) {
                let temp = [];
                for (let i = 0; i < product.length; i++) {
                    await axios.get(`/api/products/${product[i].productUuid}`)
                        .then((productData) => {
                            temp.push(productData.data);
                            setProducts(temp);
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                }
            }
        }

        getCartProducts(token);
        getProductInfo(cartProducts);
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

            <h2>Order Total: {}</h2>
        </div>
    );
}

export default Cart;