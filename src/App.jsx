import { useState } from 'react'
import LandingScreen from './components/landingScreen'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Display from './components/Display'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Router>
      <UserProvider>
        <Routes>
           <Route path = '/' element = {<LandingScreen />}></Route>
            <Route path = '/signup' element = {<SignUp />}></Route>
            <Route path = '/login' element = {<Login />}></Route>
            <Route path = '/display' element = {<Display/>}></Route>    
          </Routes>
        </UserProvider>
      </Router>
    </div>
  )
}

export default App
