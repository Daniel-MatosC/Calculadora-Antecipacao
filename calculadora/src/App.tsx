import "./App.css";
import Calculator from "./components/BlockMain/indes";
import { Global } from "./styles/global";

function App() {
  return (
    <section className="App">
      <Global />
      <Calculator />
    </section>
  );
}

export default App;
