import "./App.css";
import NavBar from "./layout/NavBar";
import Catalog from "./pages/Catalog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Balance from "./pages/Balance";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalog/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/balance" element={<Balance />} />
        <Route path="/contact" element={<Contact />}>
          <Route
            path="/contact/email"
            element={<h4>goce.kabov@yahoo.com</h4>}
          />
          <Route path="/contact/telephone" element={<h4>077 777 777 </h4>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
