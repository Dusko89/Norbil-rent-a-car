import { useState } from 'react'

import './styles/tokens.css'
import Fleet from "./components/Fleet.jsx";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="shell">
          <Fleet/>
      </div>



    </>
  )
}

export default App
