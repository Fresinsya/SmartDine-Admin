import { useState } from 'react'
import './App.css'
import Home from './assets/Pages/Home'
import Menu from './assets/Pages/Menu'
import { Route, Router, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </div>
    </>
  )
}

export default App
