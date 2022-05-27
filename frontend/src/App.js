
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/login';
import Signup from './components/signup';
import Contest from './components/Contest';
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <h2 className='text-center'>Con<span className="badge bg-secondary">List</span></h2>
    <Routes>
    <Route exact path="/" element={<Contest/>}></Route>
    <Route exact path="/login" element={<Login />}></Route>
    <Route exact path="/signup" element={<Signup />}></Route>
    </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
