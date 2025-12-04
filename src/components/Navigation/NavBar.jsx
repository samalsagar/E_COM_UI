import React, { useState } from "react";
import Wishlist from "../common/Wishlist";
import Accounticon from "../common/Accounticon";
import { CartIcon } from "../common/CartIcon";

const Navigation = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="w-full px-6 md:px-16 py-4 flex items-center justify-between shadow-sm">
            
            {/* Logo */}
            <a className="text-3xl font-bold text-black" href="/">Eshope</a>

            {/* Hamburger Menu (mobile only) */}
            <button 
                className="md:hidden block text-2xl"
                onClick={() => setOpen(!open)}
            >
                {open ? "✕" : "☰"}
            </button>

            {/* Navigation Items (Desktop) */}
            <ul className="hidden md:flex gap-10 font-semibold text-gray-600">
                <li><a className="hover:text-black" href="/">Shop</a></li>
                <li><a className="hover:text-black" href="/men">Men</a></li>
                <li><a className="hover:text-black" href="/women">Women</a></li>
                <li><a className="hover:text-black" href="/kids">Kids</a></li>
            </ul>

            {/* Search (hidden on mobile) */}
            <div className="hidden lg:flex px-4 py-2 rounded-md bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px"
                    className="fill-gray-600 mr-3 rotate-90">
                    <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
                </svg>
                <input type="text" placeholder="Search" className="w-full outline-none bg-transparent text-gray-600 text-sm" />
            </div>

            {/* Icons (always visible) */}
            <div className="flex items-center gap-6">
                <button><Wishlist /></button>
                <button><Accounticon /></button>
                <a href="/cart-items"><CartIcon /></a>
            </div>

            {/* Mobile Dropdown Menu */}
            {open && (
                <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden z-50">
                    <ul className="flex flex-col gap-4 p-6 text-gray-700 font-medium">
                        <li><a className="hover:text-black" href="/">Shop</a></li>
                        <li><a className="hover:text-black" href="/men">Men</a></li>
                        <li><a className="hover:text-black" href="/women">Women</a></li>
                        <li><a className="hover:text-black" href="/kids">Kids</a></li>
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navigation;
