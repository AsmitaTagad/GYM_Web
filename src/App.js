
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './pages/Nav';
import Home from './pages/Home';
import Product from './pages/Product';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register'




function App() {
  return (

    <div className='container'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Product' element={<Product />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/About' element={<About />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
      </Routes>

    </div>
  );
}

export default App;
