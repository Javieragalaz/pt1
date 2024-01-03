import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar'
import Home from './views/Home'
import Login from './views/Login'
import Signin from './views/Signin'
import Transaction from './views/Transaction'
import Account from './views/Account'

function App() {


  return (
  
    <BrowserRouter>

      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signin" element={<Signin />} />
          <Route path="transaction" element={<Transaction />} />
          <Route path="account" element={<Account />} />
        </Routes>

  </BrowserRouter>
      
  )
}

export default App;
