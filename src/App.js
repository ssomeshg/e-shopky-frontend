import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {
  const [productList, setProductList] = useState([
    {
      id: 1,
      productImg: "https://imgs.search.brave.com/1ijHRYJj1zU5NYJh6xz1P0JOSxc3CZh6PWDT3ilrxmM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NTE4NTQ4MzgtMjEy/YzUwYjRjMTg0P3E9/ODAmdz0xMDAwJmF1/dG89Zm9ybWF0JmZp/dD1jcm9wJml4bGli/PXJiLTQuMC4zJml4/aWQ9TTN3eE1qQTNm/REI4TUh4elpXRnlZ/Mmg4TVRGOGZIQmhi/blJ6ZkdWdWZEQjhm/REI4Zkh3dw",
      productName: "Cotton Pants XLs",
      productSubName: "Cotton Pants XL",
      productPrice: 899,
      productDelPrice: 999,
      sizeVariation: ["S", "XS", "l"]
    },
    {
      id: 2,
      productImg: "https://imgs.search.brave.com/81QlJChq_GfPxMZBeXxApzX60aWGNIgGd4YBFxXeRso/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMy/Mzc4ODA1Ny9waG90/by9mYXNoaW9uYWJs/ZS13b21hbi1pbi1j/b2xvcmZ1bC1zaGly/dC5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9a0lEU0R4cXJI/bzQ4NWFuTFBRenVB/Qkx5UmpLclhwNERu/MGp3VFRvTC1mND0",
      productName: "Cotton Pants XLs",
      productSubName: "Cotton Pants XL",
      productPrice: 899,
      productDelPrice: 999,
      sizeVariation: ["S", "XS", "l"]
    }
  ])
  const [cartList, setCartList] = useState([{
    id: 2,
    productImg: "https://imgs.search.brave.com/81QlJChq_GfPxMZBeXxApzX60aWGNIgGd4YBFxXeRso/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMy/Mzc4ODA1Ny9waG90/by9mYXNoaW9uYWJs/ZS13b21hbi1pbi1j/b2xvcmZ1bC1zaGly/dC5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9a0lEU0R4cXJI/bzQ4NWFuTFBRenVB/Qkx5UmpLclhwNERu/MGp3VFRvTC1mND0",
    productName: "Cotton Pants XLs",
    productSubName: "Cotton Pants XL",
    productPrice: 899,
    productDelPrice: 999,
    sizeVariation: ["S", "XS", "l"]
  }
    
  ])
  const [cartCount, setCartCount] = useState(0)
  return (
    <>
      <BrowserRouter>
        <Navbar productList={productList} cartCount={cartCount} cartList={cartList} setProductList={setProductList} />
        <Routes>

          <Route path='/' element={<Home setCartList={setCartList} setCartCount={setCartCount} productList={productList} setProductList={setProductList} />}></Route>
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App;
