import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Product = ({ cart, setCart }) => {
    const param = useParams();
    const [product, setProduct] = useState({});

    const handleClick = () => {
        axios
            .get(`https://fakestoreapi.com/products/${param.id}`)
            .then((response) => {
                setProduct(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const addToCart = (item) => {
        setCart([...cart, item]);
        alert(`${item.title} added to cart!`);
    };

    useEffect(() => {
        handleClick();
    }, []);

    return (
        <>
            <h1 className="heading">Product Component</h1>
            <div className="mainbox">
                <div key={product.id} className="box">
                    <img src={product.image} alt={product.title} className="img" />
                    <p>{product.description}</p>
                    <p>{product.category}</p>
                    <p>{product.title}</p>
                    <p>${product.price}</p>
                    <button onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
            </div>
        </>
    );
};

export default Product;
