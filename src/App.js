import "./App.css";
import Home from "./component/Home";

function App() {
  return (
    <>
      <select class="form-select" aria-label="Default select example">
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>

      <Home />
    </>
  );
}

export default App;
