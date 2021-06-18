import "./App.css";
import { GlobalStyle } from "./Components/GlobalStyle";
import PokedexBody from "./Components/Pokedex/Body";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <PokedexBody />
    </div>
  );
}

export default App;
