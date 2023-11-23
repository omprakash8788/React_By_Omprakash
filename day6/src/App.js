import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom"
import Home from './pages/home/Home';
import Product from './pages/product/Product';
import DashBoard from './pages/dashboard/DashBoard';
import Navbar from './components/navbar/Navbar';
import { useState } from 'react';





function App() {

  const [user, setUser] = useState(false)

  // login fn
  const login=()=>{
    setUser(true)
  }

  const logout=()=>{
    setUser(false)
  }

  return (
   <>
    <Router>
      <Navbar user={user} login={login} logout={logout}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={
          <ProtectedRoute user={user}><Product/></ProtectedRoute>
        }/>
        <Route path='/dashboard' element={
          <ProtectedRoute user={user}><DashBoard/></ProtectedRoute>
        }/>
      </Routes>
    </Router>
   </>
  );
}

export default App;


//* Create Protected Route Function 
export const ProtectedRoute = ({ user, children }) => {
  if (user) {
    return children
  }
  else {
    return <Navigate to={'/'} />
  }
}

