function LembreteLista(props) {
  return (
    <div className="row">
      <div className="col">
        {props.lista
          ? props.lista.map((lembrete, i) => {
              return (
                <div
                  aria-live="polite"
                  aria-atomic="true"
                  className="d-flex justify-content-center align-items-center w-100"
                >
                  <div
                    className="toast show shadow-none mt-3"
                    role="alert"
                    aria-live="assertive"
                    aria-atomic="true"
                  >
                    <div className="toast-header">
                      <svg
                        className="bd-placeholder-img rounded me-2"
                        width="20"
                        height="20"
                        aria-hidden="true"
                        preserveAspectRatio="xMidYMid slice"
                        focusable="false"
                      >
                        <rect
                          width="100%"
                          height="100%"
                          fill={lembrete.cor}
                        ></rect>
                      </svg>
                      <strong className="me-auto">Lembrete {i + 1}</strong>
                    </div>
                    <div className="toast-body">{lembrete.texto}</div>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default LembreteLista;
