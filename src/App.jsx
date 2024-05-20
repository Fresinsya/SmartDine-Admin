import { useState } from 'react'
import './App.css'
import Home from './components/Pages/Home'
import Menu from './components/Pages/Menu'
// import Quiz from './components/Pages/Quiz'
import { Route, Router, Routes } from 'react-router-dom'

import Detail from './components/Pages/Detail'
import Profile from './components/Pages/Profile'

import Login from './components/Pages/Login'
import Register from './components/Pages/Register'
import { QueryClient, QueryClientProvider } from 'react-query'
import Meal from './components/Pages/Meal-planning'
import EditMenu from './components/Pages/EditMenu'


function App() {
  const [count, setCount] = useState(0)
  const queryClient = new QueryClient()

  return (
    <>
      <div>
        <QueryClientProvider client={queryClient}>
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/menu" element={<Menu />} />
            <Route path="/" element={<Meal />} />
            {/* <Route path="/detail" element={<Detail />} /> */}
            <Route path="/detail/:idDetail" element={<Detail />} />
            <Route path="/editMenu/:idMenu" element={<EditMenu />} />
            <Route path="/profile" element={<Profile />} />
            
            <Route path="/login" element={<Login />} />
            {/* <Route path="/registrasi" element={<Register />} /> */}
            

          </Routes>
        </QueryClientProvider>
      </div>
    </>
  )
}

export default App
