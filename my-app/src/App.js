import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Home from './components/Home';
import Product from './components/Product';
import Contact from './components/Contact';
import { Route , Routes } from 'react-router-dom';


function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />}  />
      <Route path="/product" element={<Product/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/about" element={<About/>} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
