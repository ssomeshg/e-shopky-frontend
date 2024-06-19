
export default function Cart(props){

     
    const cartList = props.cartList
    const cartCount = props.cartCount
    console.log(cartCount)

    return <div className=' bg-white z-30 min-w-80 w-full -left-2/4 -translate-x-2/4 top-10 rounded-md absolute px-3 py-3 border border-gray-200 shadow-md'>
    <p className='primaryTextColor text-lg font-bold '>Cart</p>
    <ul>{
      cartList.map((item) => {
        return <li className='border-b pb-2 pt-2'>
          <div className='flex gap-2 justify-between items-center'>
            <div>
              <img src={item.productImg} alt="" className='w-12 h-12 object-cover rounded-md' />
            </div>


            <div>
              <p className='primaryTextColor'>{item.productName}</p>
              <p className='primaryTextColor font-semibold'>₹ {item.productPrice}</p>
            </div>

            <div>
              <button className='text-xs text-red-600'>Remove</button>
            </div>

          </div>
        </li>
      })
    }
    </ul>
  </div>
}