import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Home, Product, Contact, About, Login, Register, Nav } from './pages/Main';



function App() {
  return (
    <div >
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
