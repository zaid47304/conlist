
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/login';
import Signup from './components/signup';
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route exact path="/login" element={<Login />}></Route>
    <Route exact path="/signup" element={<Signup />}></Route>
    </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
