import { useState } from 'react'
import './App.css'
import Home from './assets/Pages/Home'
import Chart from './assets/Pages/chart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Home /> */}
      <Chart />
    </>
  )
}

export default App
