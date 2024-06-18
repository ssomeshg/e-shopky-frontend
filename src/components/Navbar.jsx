import { useState } from 'react'
import navLogo from '../assets/image.png'
import { Link } from 'react-router-dom'
import Cart from './Cart'
export default function Navbar(props) {

  
  const cartList = props.cartList
  const cartCount = props.cartCount

  return <>
    <div className="container navbar p-3 sticky top-0 z-50 bg-white">
      <div className="navlogo">
        <img src={navLogo} alt="" />
      </div>
      <div className="navitems">
        <ul className='navList'>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/'}>Collections</Link></li>
          <li><Link to={'/'}>Men's</Link></li>
          <li><Link to={'/'}>Women's</Link></li>
          <li><Link to={'/'}>Cart</Link></li>

        </ul>
      </div>
      <div className="nav--right">
        <div className="cart relative cursor-pointer">
          <div className=''>
            <svg width="24" height="26" viewBox="0 0 24 26" fill="none" strokeWidth={2} xmlns="http://www.w3.org/2000/svg">
              <path d="M22.92 23.01C22.9493 23.2705 22.923 23.5342 22.8429 23.784C22.7629 24.0336 22.631 24.2635 22.4557 24.4585C22.28 24.6532 22.065 24.8086 21.825 24.9141C21.5849 25.0198 21.3251 25.0734 21.0629 25.0714H2.93715C2.67487 25.0734 2.41515 25.0198 2.17508 24.9141C1.935 24.8086 1.72002 24.6532 1.5443 24.4585C1.36904 24.2635 1.23707 24.0336 1.15705 23.784C1.07702 23.5342 1.05076 23.2705 1.08001 23.01L2.7143 8.35712H21.2857L22.92 23.01Z" stroke="#3F3F3F" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M7.35715 8.35713V5.57142C7.35715 4.34006 7.8463 3.15912 8.717 2.28841C9.58771 1.41771 10.7686 0.928558 12 0.928558C13.2314 0.928558 14.4123 1.41771 15.283 2.28841C16.1537 3.15912 16.6429 4.34006 16.6429 5.57142V8.35713" stroke="#3F3F3F" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <div className="badge"><span>{cartCount}</span></div>
          </div>
          <Cart cartList={cartList} cartCount={cartCount}/>
        </div>
        {/* <div className="wishlist">
          <svg width="26" height="22" viewBox="0 0 26 22" fill="none" strokeWidth={2} xmlns="http://www.w3.org/2000/svg">
            <path d="M13.0076 20.9963L2.84095 11.7874C-2.68444 6.26199 5.43787 -4.34673 13.0076 4.23602C20.5774 -4.34673 28.663 6.29884 23.1744 11.7874L13.0076 20.9963Z" stroke="#3F3F3F" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <div className="badge"><span>1</span></div>
        </div> */}
        <div className="profile">
          <div className="profile--detail">
            <p>Hello user</p>
            <p>sign in</p>
          </div>
          <div className="profile--icon">
            <svg width="20" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.1801 13.5C12.7602 12.1908 11.9355 11.0488 10.8249 10.2386C9.71416 9.4284 8.37487 8.99182 7.00007 8.99182C5.62526 8.99182 4.28597 9.4284 3.17528 10.2386C2.0646 11.0488 1.23989 12.1908 0.820068 13.5H13.1801Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M7 9C9.3373 9 11.2321 7.10524 11.2321 4.76794C11.2321 2.43064 9.3373 0.535889 7 0.535889C4.6627 0.535889 2.76794 2.43064 2.76794 4.76794C2.76794 7.10524 4.6627 9 7 9Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M8.38196 6.4054C8.38196 6.4054 8.03081 7.09634 7.00006 7.09634C5.96931 7.09634 5.61816 6.4054 5.61816 6.4054" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M11.1554 3.96219C11.1459 3.96225 11.1365 3.96228 11.1271 3.96228C9.89693 3.96228 8.7925 3.42409 8.03637 2.57033C7.28025 3.42411 6.17581 3.96231 4.94566 3.96231C4.23132 3.96231 3.55936 3.78082 2.97339 3.46144C3.52393 1.76353 5.11856 0.535889 6.99993 0.535889C9.0617 0.535889 10.7791 2.01026 11.1554 3.96219Z" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

          </div>
        </div>
      </div>
    </div>
  </>
}