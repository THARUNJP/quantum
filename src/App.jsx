
import './App.css'
import Login from './componenets/Login'
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import Register from './componenets/Register'
import UserData from './componenets/UserData'

function App() {
  

  return (
    <>
    <Router>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/userdata' element={<UserData />} />

    </Routes>
    
    </Router>
  
    </>
  )
}

export default App
