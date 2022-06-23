import "./App.css";
import Header from "./Layout/Header/Header";
import PeoplePage from "./Pages/PeoplePage/PeoplePage";
import Footer from "./Layout/Footer/Footer";

function App() {
  const navbarLinkData = ["Home", "People", "Planets", "Starships"];

  return (
    <div className="App">
      <Header title="STAR WARS WIKI" navbarLinkData={navbarLinkData} />
      <main>
        <PeoplePage />
      </main>
      <Footer>
        <p>This page was built with React 17.0.2</p>
        <a href="https://github.com/borisovski-borche">Link to my github</a>
      </Footer>
    </div>
  );
}

export default App;
