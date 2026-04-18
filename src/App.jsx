import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import SingleProduct from './components/SingleProduct';
import CategoryProduct from './components/CategoryProduct';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Footer from './components/Footer';


const App = () => {

  useEffect(() => {
    AOS.init({
  duration: 1200,
  easing: "ease-out-cubic",
  once: true,
});
  }, []);
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<SingleProduct/>} />
        <Route path='/category/:category' element={<CategoryProduct/>}></Route>
        <Route path="/product" element={<Product />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
