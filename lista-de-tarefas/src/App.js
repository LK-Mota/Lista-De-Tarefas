import LembreteEntrada from "./LembreteEntrada";
import LembreteLista from "./LembreteLista";
import { useState } from "react";

function App() {
  const [lista, setLista] = useState([]);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-6 col-lg-4">
          <LembreteLista lista={lista} setLista={setLista} />
          <br />
          <LembreteEntrada lista={lista} setLista={setLista} />
        </div>
      </div>
    </div>
  );
}

export default App;
