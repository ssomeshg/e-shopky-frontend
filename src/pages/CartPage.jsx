


export default function CartPage(props) {

    const {
        cartList,
        setCartList
    } = props
       // Calculate the total price of the cart
    //    const cartPrice = cartList.map((item) => {
    //     const itemTotal = item.price.reduce((sum, price) => sum + price, 0);
    //     return itemTotal;
    // }, 0);
    // console.log(cartPrice)
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
    return <>
        <div className="container min-h-[80vh] h-full">
            <div>
                <h1 className="primaryTextColor heading text-center">CART</h1>
            </div>
            <div className="grid grid-cols-1 md:grid md:grid-cols-2">
                <div className="my-3 mx-2 border grid">
                    {cartList.length === 0 ? <p className="primaryTextColor text-center text-lg py-2">Cart is Empty ☹️</p> : ""}
                    {cartList.map((item) => {
                        return <div className="px-2 py-2 bg-white rounded flex justify-between items-center  border-b">
                            <img src={item.image} alt="" className="w-10 h-10" />
                            <div>
                                <p className="text-[var(--primary-color)]">
                                    {item.category}
                                </p>
                                <span>₹ {item.price}</span>
                            </div>
                            <p className="text-red-700 cursor-pointer" onClick={() => { handleRemoveCart(item.id) }}>
                                Remove
                            </p>
                        </div>
                    })}


                </div>
                <div className="my-3 mx-2 border grid">
                    <div className=" m-2">
                        {
                            cartList.length > 0 ? <table className="border border-collapse w-100 p-2">
                                <tr>
                                    <td className="p-2 primaryTextColor text-lg font-bold">Product Count</td>
                                    <td className="p-2">{cartList.length}</td>
                                </tr>

                                <tr>
                                    <td className="p-2">Total Amount</td>
                                    <td className="p-2"></td>
                                </tr>
                            </table> : "Add Items To the Cart"
                        }


                    </div>
                </div>
            </div>

        </div>

    </>
}