import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Addpost from './components/Addpost';
import Viewallpost from './components/Viewallpost';
import Header from './components/Header';

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Login/>}/>
      <Route path="/register"  element={<Register/>}/>
      <Route path="/addpost"  element={<Addpost/>}/>
      <Route path="/viewall"  element={<Viewallpost/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
