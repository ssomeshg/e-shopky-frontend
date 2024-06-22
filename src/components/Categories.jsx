import axios from "axios";
import { useEffect, useState } from "react";




export default function Categories(props) {
    const {
        setCartList,
        setProductApi,
        productApi,
    } = props;

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getProduct = async () => {

            try {
                setLoading(true)
                const response = await axios.get("https://fakestoreapi.com/products/");
                setProductApi(response.data);
                console.log(response.data);
                setLoading(false)
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        getProduct();
    }, [setProductApi]);

    const handleAddCart = (addCartId) => {

        const itemToAdd = productApi.find((product) => {
                if (product.id === addCartId) {
                    return product
                }
            }
        )

        console.log(itemToAdd)
        if (itemToAdd) {
            setCartList((prevCartList) => [...prevCartList, itemToAdd]);


        } else {
            console.log('Item not found');
        }

    };

    const Loading = () => {
        return <>
            <p className="text-center primaryTextColor">
               Loading....
            </p>
        </>
    }
    return (
        <div className="container mt-20">
            <div className="category_title mb-4">
                <p className="heading">All Categories</p>
                <p className="sub--heading">Our Collection</p>
            </div>
            {
                loading ? <Loading /> : <div className="category--content xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid gap-3">
                    {productApi.map((item) => (
                        <div key={item.id} className="bg-white border-[var(--primary-color)] border-2 rounded-3xl">
                            <div className="overflow-hidden border-[var(--primary-color)] rounded-3xl relative">
                                <img
                                    src={item.image}
                                    className="h-[24rem] object-cover w-100 scale-100 hover:transform hover:scale-105 hover:transition-all transition-all rounded-md"
                                    alt={item.title}
                                />
                                <div className="wishlist--heart cursor-pointer bg-[var(--secondary-litecolor)] w-10 h-10 rounded-full flex justify-center items-center absolute z-20 top-5 right-5">
                                    <svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.0041 12.3826L1.52973 7.42397C-1.44548 4.44876 2.92807 -1.26363 7.0041 3.35785C11.0801 -1.26363 15.4339 4.4686 12.4785 7.42397L7.0041 12.3826Z" stroke="#D33F00" stroke-linecap="round" stroke-linejoin="round" stroke-width="10%" />
                                    </svg>
                                </div>
                            </div>
                            <div className="category--details mt-3 mx-3">
                                <div className="category--price flex justify-between items-center">
                                    <div>
                                        <p className="item--heading">{item.category}</p>
                                        <p className="item--sub">{item.title}</p>
                                    </div>
                                    <div>
                                        <h1 className="item--price">₹ {item.price} <del className="item-del">₹ {item.price}</del></h1>
                                    </div>
                                </div>
                                <div className="mt-3">
                                    <p className="text-xs">Size by:</p>
                                    <div className="size--variation mt-2">
                                        <ul>
                                            {item.sizeVariation && item.sizeVariation.map((sizeItem, index) => (
                                                <li key={index}>{sizeItem}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="category--btn mt-3 mb-3">
                                    <button>View Product</button>
                                    <button onClick={() => handleAddCart(item.id)}>Add To Cart</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            }

        </div>
    );
}
