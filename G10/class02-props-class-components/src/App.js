import logo from "./logo.svg";
import "./App.css";
import Header from "./Layout/Header/Header";
import ProductPage from "./Pages/ProductPage/ProductPage";

function App() {
  const headerTitle = "React Start App";
  const navbarLinkData = ["Home", "About", "Contact", "Admin Panel"];

  return (
    <div className="App">
      <Header
        title={headerTitle}
        navbarLinkData={navbarLinkData}
        fontSize="35px"
      />
      <ProductPage />
    </div>
  );
}

export default App;
