import './styles/styles.sass'

function App() {
  return (
    <div className="app">
      <main className="calculator">
        <div className="calculator__branding">
          <h1 className="calculator__branding__title">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="82"
              height="23"
              viewBox="0 0 82 23"
              className="calculator__branding__icon"
            >
              <text
                id="CASIO"
                transform="translate(1 18)"
                fill="#f1f2f4"
                stroke="#f1f2f4"
                stroke-width="1"
                font-size="20"
                font-family="EurostileExtended-Roman, Eurostile"
              >
                <tspan x="0" y="0">
                  CASIO
                </tspan>
              </text>
            </svg>
          </h1>
          <span className="calculator__branding__subtitle">TS-129C</span>
        </div>

        <section className="calculator__display">
          <div className="calculator__display__indicators">M+</div>
          <div className="calculator__display__io">
            <div className="calculator__display__input">308 &times; 42</div>
            <div className="calculator__display__output">13,936</div>
          </div>
        </section>

        <section className="calculator__keypad">
          {/* Row 1 */}
          <div className="calculator__keypad__row">
            <button className="calculator__keypad__button calculator__keypad__button--memory">
              MRC
            </button>
            <button className="calculator__keypad__button calculator__keypad__button--memory">
              M+
            </button>
            <button className="calculator__keypad__button calculator__keypad__button--memory">
              M-
            </button>
            <button className="calculator__keypad__button calculator__keypad__button--operator">
              +/-
            </button>
            <button className="calculator__keypad__button calculator__keypad__button--operator calculator__keypad__button--operator--alt">
              ÷
            </button>
          </div>

          {/* Row 2 */}
          <div className="calculator__keypad__row">
            <button className="calculator__keypad__button calculator__keypad__button--number">
              7
            </button>
            <button className="calculator__keypad__button calculator__keypad__button--number">
              8
            </button>
            <button className="calculator__keypad__button calculator__keypad__button--number">
              9
            </button>
            <button className="calculator__keypad__button calculator__keypad__button--operator">
              %
            </button>
            <button className="calculator__keypad__button calculator__keypad__button--operator calculator__keypad__button--operator--alt">
              &times;
            </button>
          </div>

          {/* Row 3 */}
          <div className="calculator__keypad__row">
            <button className="calculator__keypad__button calculator__keypad__button--number">
              4
            </button>
            <button className="calculator__keypad__button calculator__keypad__button--number">
              5
            </button>
            <button className="calculator__keypad__button calculator__keypad__button--number">
              6
            </button>
            <button className="calculator__keypad__button calculator__keypad__button--operator">
              &#8730;
            </button>
            <button className="calculator__keypad__button calculator__keypad__button--operator calculator__keypad__button--operator--alt">
              &mdash;
            </button>
          </div>

          {/* Row 4 */}
          <div className="calculator__keypad__row">
            <button className="calculator__keypad__button calculator__keypad__button--number">
              1
            </button>
            <button className="calculator__keypad__button calculator__keypad__button--number">
              2
            </button>
            <button className="calculator__keypad__button calculator__keypad__button--number">
              3
            </button>
            <button className="calculator__keypad__button calculator__keypad__button--clear">
              AC
            </button>
            <button className="calculator__keypad__button calculator__keypad__button--operator calculator__keypad__button--operator--alt">
              +
            </button>
          </div>

          {/* Row 5 */}
          <div className="calculator__keypad__row">
            <button className="calculator__keypad__button calculator__keypad__button--number">
              0
            </button>
            <button className="calculator__keypad__button calculator__keypad__button--number">
              00
            </button>
            <button className="calculator__keypad__button calculator__keypad__button--number">
              .
            </button>
            <button className="calculator__keypad__button calculator__keypad__button--clear">
              C
            </button>
            <button className="calculator__keypad__button calculator__keypad__button--operator calculator__keypad__button--operator--alt">
              =
            </button>
          </div>
        </section>
      </main>

      <footer className="app__footer">
        <p>
          Designed and coded by{' '}
          <a href="https://spaceinva.dev" target="_blank" rel="noreferrer">
            Mauricio Paternina
          </a>
          .
        </p>
      </footer>
    </div>
  )
}

export default App
