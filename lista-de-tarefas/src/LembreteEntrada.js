import { useState } from "react";

function LembreteEntrada(props) {
  const [lembrete, setLembrete] = useState("");

  return (
    <div>
      <input
        type="text"
        className="form-control text-center mt-3 shadow-none"
        id="novoLembrete"
        placeholder="Digite seu novo lembrete"
        onChange={(e) => setLembrete(e.target.value)}
        value={lembrete}
      ></input>
      <button
        type="button"
        className="btn btn-outline-success w-100 mt-3"
        onClick={() => {
          if (!lembrete) {
            return;
          }
          const cores = [
            "#f27b7b",
            "#f2997b",
            "#f2b77b",
            "#f2d47b",
            "#f2f27b",
            "#d4f27b",
            "#b7f27b",
            "#99f27b",
            "#7bf27b",
            "#7bf299",
            "#7bf2b7",
            "#7bf2d4",
            "#7bf2f2",
            "#7bd4f2",
            "#7bb7f2",
            "#7b99f2",
            "#7b7bf2",
            "#997bf2",
            "#b77bf2",
            "#d47bf2",
            "#f27bf2",
            "#f27bd4",
            "#f27bb7",
            "#f27b99",
            "#f27b7b",
          ];
          const cor = cores[Math.floor(Math.random() * cores.length)];
          props.setLista([...props.lista, { texto: lembrete, cor: cor }]);
          setLembrete("");
        }}
      >
        OK
      </button>
    </div>
  );
}

export default LembreteEntrada;
