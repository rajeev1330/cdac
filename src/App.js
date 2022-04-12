import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Footer from './components/Footer';
import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/products' element={<Products />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
