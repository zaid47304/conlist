
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/login';
import Signup from './components/signup';
import Contest from './components/Contest';
import Alert from './components/alert';
import { useState } from 'react';
function App() {
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500)
  }
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Alert alert={alert} />
    <h2 className='text-center'>Con<span className="badge bg-secondary">List</span></h2>
    <Routes>
    <Route exact path="/" element={<Contest showAlert={showAlert}/>}></Route>
    <Route exact path="/login" element={<Login showAlert={showAlert} />}></Route>
    <Route exact path="/signup" element={<Signup showAlert={showAlert} />}></Route>
    </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
