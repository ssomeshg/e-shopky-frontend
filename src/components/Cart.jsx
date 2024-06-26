import { Link } from "react-router-dom"
export default function Cart(props) {

  const {
    setCartList,
    cartList
  } = props

  const handleRemoveCart = (removeID) => {
    console.log(removeID)
    const tempCart = cartList.filter((item) => {
      console.log(item.id);
      if (item.id === removeID) {
        return false

      } else {
        return true
      }
    })
    setCartList(tempCart)
  }

  return <div className='cartList hidden md:block bg-white z-30 min-w-80 w-full -right-[400%] top-10 rounded-md absolute px-3 py-3 border border-gray-200 shadow-md'>
    <p className='primaryTextColor text-lg font-bold'>Cart</p>
    <ul>
      {cartList.length === 0 ? <p>Cart is Empty</p> : ""}
      {
        cartList.map((item, index) => {
          return <li className='border-b pb-2 pt-2' key={index}>
            <div className='flex gap-2 justify-between items-center'>
              <div>
                <img src={item.image} alt="" className='w-12 h-12 object-cover rounded-md' />
              </div>


              <div>
                <p className='primaryTextColor'>{item.category}</p>
                <p className='primaryTextColor font-semibold'>₹ {item.price}</p>
              </div>

              <div>
                <button className='text-xs text-red-600' onClick={() => { handleRemoveCart(item.id) }}>Remove</button>
              </div>

            </div>
          </li>
        })

      }
      {
        cartList.length > 0 ? <div><Link to={"/cartpage"}><p className="primaryTextColor mt-2 font-bold underline">View Cart</p></Link></div> : ""
      }
    </ul>
  </div>
}