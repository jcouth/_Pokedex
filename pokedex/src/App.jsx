import "./App.css";
import { GlobalStyle } from "./Components/GlobalStyle";
import PokedexBody from "./Components/PokedexBody";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <PokedexBody />
    </div>
  );
}

export default App;
