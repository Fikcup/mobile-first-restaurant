import React, {useState, useEffect} from 'react';
import axios from 'axios';
import jwt from 'jsonwebtoken';

const Cart = ({ token }) => {
    // TODO : send token in all cart header requests to verify with backend middleware
    const [cartProducts, setCartProducts] = useState([]);
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [updated, setUpdated] = useState();

    async function deleteItem(event) {
        const cartProduct = event.target.parentNode.id;

        await axios.delete(`/api/carts/${cart}/product/${cartProduct}`)
            .then((data) => {
                console.log(data);
            });

        let products = cartProducts;

        for (const id of products) {
            if (id.productUuid === cartProduct) {
                let index = products.indexOf(id);
                products.splice(index, 1);
            }
        }
        setCartProducts(products);
        setUpdated(true);
        window.location.reload();
    }

    useEffect(() => {
        (async () => {
            const decoded = jwt.verify(token, process.env.REACT_APP_SECRET);
            const user = decoded.id;

            const cartData = await axios.get(`/api/carts/${user}`);

            if (cartData.data) {
                const cartProductsData = await axios.get(`/api/carts/${cartData.data.uuid}/product`);

                if (cartProductsData?.data?.length > 0) {
                    let temp = [];
                    let tempTotal = 0;

                    for (const data of cartProductsData.data) {
                        await axios.get(`/api/products/${data.productUuid}`)
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
                    setCart(cartData.data.uuid);
                    setCartProducts(cartProductsData.data);
                }
            }
        })();

    }, [token, updated]);

    return (
        <div>
            <h1>Cart</h1>

            <div>
                {products.map((product, index) => {
                    return (
                        <div id={product.uuid} key={product.uuid + index}>
                            <h2>{product.name}</h2>
                            <img src={product.image} alt={product.name} className="product-image" />
                            <h3>{product.price}</h3>
                            <button onClick={deleteItem}>Remove</button>
                        </div>
                    );
                })}

                {cartProducts.map((cartProduct, index) => {
                    return (
                        <div key={cartProduct.uuid + index}>
                            <h3>{cartProduct.quantity}</h3>
                        </div>
                    );
                })}
            </div>

            <h2>Order Total: ${total}</h2>
            <button>Checkout</button>
        </div>
    );
}

export default Cart;