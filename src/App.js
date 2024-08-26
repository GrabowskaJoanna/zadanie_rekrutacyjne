import './App.css';
import {Route, Router, Routes, HashRouter} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/products:id" element={<ProductDetails/>}/>
            </Routes>
        </HashRouter>
    );
}

export default App;
