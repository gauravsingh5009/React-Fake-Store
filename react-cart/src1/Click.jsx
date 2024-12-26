import { BrowserRouter, Routes, Route } from "react-router-dom";
import Api from "./Api";
import Product from "./Product";
import Cart from "./Cart";
import Header from "./Header";
import { useState, useEffect } from "react";

const Click = () => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    return (
        <BrowserRouter>
            <Header cart={cart} />
            <Routes>
                <Route path="/" element={<Api cart={cart} setCart={setCart} />} />
                <Route path="/Desc/:id" element={<Product cart={cart} setCart={setCart} />} />
                <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Click;

