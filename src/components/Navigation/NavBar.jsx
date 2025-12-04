import React from 'react'
import Wishlist from '../common/Wishlist'
import Accounticon from '../common/Accounticon'
import { CartIcon } from '../../../../shopEase/UI/src/components/common/CartIcon'

const Navigation = () => {
    return (
        <nav className='flex items-center py-6 px-16 justify-between gap-40'>
            <div className='flex items-center gap-6'>
                {/* {LOGO} */}
                <a className='text-3xl text-black gap-8' href="/">Eshope</a>
            </div>
            <div className='flex flex-wrap items-center gap-10 flex-1 '>
                {/* {NAVIGATION ITEMS} */}
                <ul className='flex gap-14 font-bold'>
                    <li><a className='text-gray-600 hover:text-black ' href="/">Shop</a></li>
                    <li> <a className='text-gray-600 hover:text-black' href="/men">Men</a></li>
                    <li><a className='text-gray-600 hover:text-black' href="/women">Women</a></li>
                    <li><a className='text-gray-600 hover:text-black' href="/kids">Kids</a></li>
                </ul>
            </div>
            <div className='flex justify-center'>
                {/* {Search Bar} */}
                <div className="flex px-4 py-2 rounded-md overflow-hidden max-w-md mx-auto bg-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px"
                        className="fill-gray-600 mr-3 rotate-90">
                        <path
                            d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
                        </path>
                    </svg>
                    <input type="email" placeholder="Search" className="w-full outline-none bg-transparent text-gray-600 text-sm" />
                </div>
            </div>
            <div className='flex flex-wrap items-center gap-4'>
                {/* {Action Items} */}
                <ul className='flex items-center gap-8'>
                    <li><button><Wishlist/></button></li>
                    <li><button><Accounticon/></button></li>
                    <li><a href="/cart-items"><CartIcon/></a></li>
                    
                </ul>
            </div>
        </nav>

    )
}

export default Navigation
