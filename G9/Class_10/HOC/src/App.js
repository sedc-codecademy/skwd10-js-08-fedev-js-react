import "./App.css";
import Main from "./main";
import Random from "./random";
import Second from "./second";

function App() {
  return (
    <div className="App">
      <Main title="MAIN TITLE" />
      <Second title="SECOND TITLE" />
      <Random theme="red" />
    </div>
  );
}

export default App;
