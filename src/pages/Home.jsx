import Categories from "../components/Categories";
import Slider from "../components/Slider";


export default function Home(props) {
  const {
    productList,
    setProductList,
    setCartList,
    cartList,
    setCartCount,
    productApi,
    setProductApi
} = props;


  return <>
    <div>
      <Slider />
      <Categories setProductApi={setProductApi} productApi={productApi} cartList={cartList}  setCartCount={setCartCount} setCartList={setCartList} productList={productList} setProductList={setProductList} />
    </div>
  </>
}
