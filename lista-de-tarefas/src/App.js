import LembreteEntrada from "./LembreteEntrada";
import LembreteLista from "./LembreteLista";

function App() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-6 col-lg-4">
          <LembreteLista/>
          <br />
          <LembreteEntrada/>
        </div>
      </div>
    </div>
  );
}

export default App;
