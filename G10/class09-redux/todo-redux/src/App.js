import logo from "./logo.svg";
import "./App.css";
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";
import TodoPage from "./Pages/TodoPage/TodoPage";

function App() {
  return (
    <div className="App">
      <Header title="TODO APP" navbarLinkData={["Home", "Todos", "About"]} />
      <TodoPage />
      <Footer>
        <p>This was built with React 17.0.2</p>
      </Footer>
    </div>
  );
}

export default App;
