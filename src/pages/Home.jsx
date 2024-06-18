import Categories from "../components/Categories";
import Slider from "../components/Slider";


export default function Home(props) {
  const productList = props.productList
  const setProductList = props.setProductList
  const setCartList = props.setCartList
  const cartList = props.cartList
  const setCartCount = props.setCartCount
  return <>
    <div>
      <Slider />
      <Categories cartList={cartList} setCartCount={setCartCount} setCartList={setCartList} productList={productList} setProductList={setProductList} />
    </div>
  </>
}
