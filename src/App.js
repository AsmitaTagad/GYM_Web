import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Home, Contact, About, Login, Register, Product, Nav } from './pages/Main'

function App() {
  // const PathObj = [
  //   { elementName: "Home", elementPath: "/" },
  //   { elementName: "About", elementPath: "/about" },
  //   { elementName: "Contact", elementPath: "/contact" },
  //   { elementName: "Login", elementPath: "/login" },

  // ]
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
