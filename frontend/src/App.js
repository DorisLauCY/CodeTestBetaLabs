import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Login from './Login';
import Register from './Register';
import UserDetails from './UserDetails';
import Header from './Header';
import Footer from './Footer';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';


function App() {
  return (
    
    <div>
      <BrowserRouter>
    <Header />
      {/* <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/checkout">CheckOut</Link> */}
      
        <Routes>
          <Route path='/' element={<Home />} />
         
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/user-details' element={<UserDetails/>} />
          <Route path="*" element={<p>404</p>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
