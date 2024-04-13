function LembreteLista() {
  return (
    <div className="row">
      <div className="col">
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
                <rect width="100%" height="100%" fill="#FFA500"></rect>
              </svg>
              <strong className="me-auto">Lembrete 1</strong>
            </div>
            <div className="toast-body">Preparar aula de programação</div>
          </div>
        </div>

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
                <rect width="100%" height="100%" fill="#21b0fe"></rect>
              </svg>
              <strong className="me-auto">Lembrete 2</strong>
            </div>
            <div className="toast-body">Fazer feira</div>
          </div>
        </div>

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
                <rect width="100%" height="100%" fill="#FFFF00"></rect>
              </svg>
              <strong className="me-auto">Lembrete 3</strong>
            </div>
            <div className="toast-body">Preparar marmitas</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LembreteLista;
