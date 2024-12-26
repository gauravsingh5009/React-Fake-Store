const Cart = ({ cart, setCart }) => {
    const handleIncrease = (item) => {
        const updatedCart = cart.map((cartItem) =>
            cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
        setCart(updatedCart);
    };

    const handleDecrease = (item) => {
        if (item.quantity === 1) {
            handleDelete(item);
        } else {
            const updatedCart = cart.map((cartItem) =>
                cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
            );
            setCart(updatedCart);
        }
    };

    const handleDelete = (item) => {
        const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
        setCart(updatedCart);
    };

    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="cart">
            <h2>Shopping Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty!</p>
            ) : (
                <>
                    {cart.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.title} className="img" />
                            <p>{item.title}</p>
                            <p>${item.price}</p>
                            <p>Quantity: {item.quantity}</p>
                            <div className="cart-buttons">
                                <button onClick={() => handleIncrease(item)}>+</button>
                                <button onClick={() => handleDecrease(item)}>-</button>
                                <button onClick={() => handleDelete(item)} className="delete-btn">
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                    <h3>Total: ${totalPrice.toFixed(2)}</h3>
                </>
            )}
        </div>
    );
};

export default Cart;
