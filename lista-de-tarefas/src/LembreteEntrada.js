function LembreteEntrada() {
  return (
    <div>
      <input
        type="text"
        className="form-control text-center mt-3 shadow-none"
        id="novoLembrete"
        placeholder="Digite seu novo lembrete"
      ></input>
      <button type="button" className="btn btn-outline-success w-100 mt-3">
        OK
      </button>
    </div>
  );
}

export default LembreteEntrada;
