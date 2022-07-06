// React-router-dom V5

// import "./App.css";
// import NavBar from "./layout/NavBar";
// import Catalog from "./pages/Catalog";
// import Contact from "./pages/Contact";
// import Home from "./pages/Home";
// import { Switch, Route, Redirect } from "react-router-dom";
// import NotFound from "./pages/NotFound";
// import Product from "./pages/Product";
// // import RefExample from "./Refs";

// function App() {
//   return (
//     <div className="App">
//       <NavBar />
//       <Switch>
//         <Route path="/" exact>
//           <Home />
//         </Route>
//         <Route path="/catalog" exact>
//           <Catalog />
//         </Route>
//         <Route path="/catalog/:productId">
//           <Product />
//         </Route>
//         <Route path="/contact">
//           <Contact />
//         </Route>
//         <Route path="*">
//           {/* <NotFound /> */}
//           <Redirect to="/" />
//         </Route>
//       </Switch>
//     </div>
//   );
// }

// export default App;

// React-router-dom V6

import "./App.css";
import NavBar from "./layout/NavBar";
import Catalog from "./pages/Catalog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import { ProductProvider } from "./state/ProductContext";
import { UserProvider } from "./state/UserContext";
import Balance from "./pages/Balance";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <ProductProvider>
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
              <Route
                path="/contact/telephone"
                element={<h4>077 777 777 </h4>}
              />
            </Route>
          </Routes>
        </ProductProvider>
      </UserProvider>
    </div>
  );
}

export default App;
