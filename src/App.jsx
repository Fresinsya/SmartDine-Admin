import { useState } from 'react'
import './App.css'
import Home from './assets/Pages/Home'
import Menu from './assets/Pages/Menu'
// import Quiz from './assets/Pages/Quiz'
import { Route, Router, Routes } from 'react-router-dom'
import Meal from './assets/Pages/Meal-planning'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/meal" element={<Meal />} />
          {/* <Route path="/quiz" element={<Quiz />} /> */}
        </Routes>
      </div>
    </>
  )
}

export default App
