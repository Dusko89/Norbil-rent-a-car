import { useState } from 'react'

import './styles/tokens.css'
import FleetGrid from "./components/FleetGrid.jsx";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="shell">
          <FleetGrid/>
      </div>



    </>
  )
}

export default App
