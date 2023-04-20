import { Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from '../src/Components/Nav bar/Nav'
import Home from './pages/Home/Home'
import Product from './pages/Course/Product';
import About from './pages/About/About';
import Contact from './pages/Contact Us/Contact';
import Login from './pages/Join Us/Login';
import Register from './pages/Join Us/Register';
import Footer from './Components/Footer/Footer';



function App() {
  return (
    <div className='main_bgc'>
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
        <Footer/>
      </div>
    </div>
  );
}

export default App;
