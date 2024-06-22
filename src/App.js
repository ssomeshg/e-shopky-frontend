import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { useState } from 'react';
import AdminPanel from './admin/AdminPanel';
import MobileNav from './components/MobileNav';
import CartPage from './pages/CartPage';
import Footer from './components/Footer';


function App() {
  const [productApi, setProductApi] = useState([])
  const [cartList, setCartList] = useState([])
  const [cartCount, setCartCount] = useState(0)


  return (
    <>
      <BrowserRouter>

        <Navbar cartCount={cartCount} setCartList={setCartList} cartList={cartList} />
        <Routes>
          <Route path='/admin' element={<AdminPanel />}></Route>
          <Route path='/' element={<Home setProductApi={setProductApi} productApi={productApi} setCartList={setCartList} setCartCount={setCartCount} />}></Route>
          <Route path='/cartpage' element={<CartPage setCartList={setCartList} cartList={cartList} />}></Route>
        </Routes>
        <Footer/>
        <MobileNav />
      </BrowserRouter>
    </>
  );
}

export default App;