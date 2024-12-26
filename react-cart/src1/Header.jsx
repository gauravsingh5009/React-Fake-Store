// import { Link } from "react-router-dom";

// const Header = ({ cart }) => {
//     return (
//         <header style={{ display: "flex", justifyContent: "space-between", padding: "10px", background: "#024950", color: "#fff" }}>
//             <h1>My Shop</h1>
//             <Link to="/cart" style={{ color: "#fff", textDecoration: "none" }}>
//                 Go to Cart ({cart.length})
//             </Link>
//         </header>
//     );
// };

// export default Header;

import { Link } from "react-router-dom";

const Header = ({ cart }) => {
    return (
        <header style={{ display: "flex", justifyContent: "space-between", padding: "10px", background: "#024950", color: "#fff" }}>
            <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
                <h1>My Shop</h1>
            </Link>
            <Link to="/cart" style={{ color: "#fff", textDecoration: "none" }}>
                Go to Cart ({cart.length})
            </Link>
        </header>
    );
};

export default Header;
