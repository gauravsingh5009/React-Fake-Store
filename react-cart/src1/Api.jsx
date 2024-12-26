import"./Api.css"
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Api = ({ cart, setCart }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get("https://fakestoreapi.com/products")
            .then((response) => setProducts(response.data))
            .catch((error) => console.log(error));
    }, []);

    const addToCart = (item) => {
        const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    
        if (existingItem) {
            const updatedCart = cart.map((cartItem) =>
                cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
            );
            setCart(updatedCart);
        } else {
            setCart([...cart, { ...item, quantity: 1 }]);
        }
    
        alert(`${item.title} added to cart!`);
    };
    

    return (
        <>
            <div className="mainbox">
                {products.map((item) => (
                    <div key={item.id} className="box">
                        <p>{item.category}</p>
                        <Link to={"/Desc/" + item.id}>
                            <img src={item.image} alt={item.title} className="img" />
                        </Link>
                        <p>{item.title}</p>
                        <p>${item.price}</p>
                        <button onClick={() => addToCart(item)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Api;
