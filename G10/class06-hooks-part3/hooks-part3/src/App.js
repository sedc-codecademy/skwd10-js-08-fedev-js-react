import "./App.css";
import UseCallbackExample from "./Components/UseCallbackExample/UseCallbackExample";
import UseMemoExample from "./Components/UseMemoExample/UseMemoExample";
import UseRefExample from "./Components/UseRefExample.js/UseRefExample";

function App() {
  return (
    <div className="App">
      <UseMemoExample />
      <UseCallbackExample />
      <UseRefExample />
    </div>
  );
}

export default App;
