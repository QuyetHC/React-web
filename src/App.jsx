import { Routes, Route } from 'react-router-dom'
import HomePage from "./pages/Home";
import CartPage from "./pages/Cart";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import ProductListPage from "./pages/ProductList";
import ProductPage from "./pages/Product";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/productlist" element={<ProductListPage />} />
                <Route path="/product" element={<ProductPage />} />
            </Routes>
        </div>
    );
};

export default App;