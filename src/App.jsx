import { useState } from 'react'
import './App.css'
import Home from './components/Pages/Home'
import Menu from './components/Pages/Menu'
// import Quiz from './components/Pages/Quiz'
import { Route, Router, Routes } from 'react-router-dom'
import Meal from './components/Pages/Meal-planning'
import Detail from './components/Pages/Detail'
import Profile from './components/Pages/Profile'
import Quiz from './components/Pages/Quiz'
import Login from './components/Pages/Login'
import Register from './components/Pages/Register'
import { QueryClient, QueryClientProvider } from 'react-query'

function App() {
  const [count, setCount] = useState(0)
  const queryClient = new QueryClient()

  return (
    <>
      <div>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/meal" element={<Meal />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registrasi" element={<Register />} />

          </Routes>
        </QueryClientProvider>
      </div>
    </>
  )
}

export default App
