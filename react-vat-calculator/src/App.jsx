import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // State for counter (existing functionality)
  const [count, setCount] = useState(0)

  // State for VAT calculator
  const [price, setPrice] = useState(0)
  const [discount, setDiscount] = useState(0)
  const [vat, setVat] = useState(0)

  // Handle VAT Calculation
  const calculateVat = () => {
    const discountedPrice = price - discount
    const vatAmount = discountedPrice * 0.07
    setVat(vatAmount.toFixed(2)) // round to 2 decimal places
  }

  return (
    <>
      <header>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
      </header>

      <main>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>

        <h2>VAT Calculator</h2>
        <div className="vat-calculator">
          <div className="input-group">
            <label htmlFor="price">Price: </label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(e) => setPrice(parseFloat(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label htmlFor="discount">Discount: </label>
            <input
              type="number"
              id="discount"
              value={discount}
              onChange={(e) => setDiscount(parseFloat(e.target.value))}
            />
          </div>

          <button className="calculate-button" onClick={calculateVat}>
            Calculate VAT
          </button>

          {vat > 0 && (
            <div className="vat-result">
              <p>
                <strong>VAT Amount:</strong> ${vat}
              </p>
            </div>
          )}
        </div>
      </main>

      <footer>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </footer>
    </>
  )
}

export default App
