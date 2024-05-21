import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import { useSelector } from "react-redux";
import Logo from './logo.png'
import { useState } from 'react';
import HamburgerIcon from './icon.png'
import "./Navbar.css"

const Navbar = () => {
    // get user from localStorage 
    const user = JSON.parse(localStorage.getItem('users'));

    // navigate 
    const navigate = useNavigate();

    // logout function 
    const logout = () => {
        localStorage.clear('users');
        navigate("/login")
    }

    // CartItems
    const cartItems = useSelector((state) => state.cart);

    // State for hamburger menu
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    // navList Data
    const navList = (
        <ul className={`lg:flex space-x-2 text-white font-medium text-md px-5 ${isMenuOpen ? 'flex flex-col' : 'hidden'}`}>
            {/* Home */}
            <li>
                <Link to={'/'}><span className="bg-white py-1 px-2  rounded-md text-black">Home</span></Link>
            </li>

            {/* All Product */}
            <li>
                <Link to={'/allproduct'}><span className="hover:bg-white py-1 px-2  rounded-md hover:text-black">All Product</span></Link>
            </li>

            {/* Signup */}
            {!user && <li>
                <Link to={'/signup'}><span className="hover:bg-white py-1 px-2  rounded-md hover:text-black">Sign Up</span></Link>
            </li>}

            {/* Login */}
            {!user && <li>
                <Link to={'/login'}><span className="mr-4 hover:bg-white py-1 px-2  rounded-md hover:text-black">Log In</span></Link>
            </li>}

            {/* User */}
            {user?.role === "user" && <li>
                <Link to={'/user-dashboard'}><span className="hover:bg-white py-1 px-2  rounded-md hover:text-black">User</span></Link>
            </li>}

            {/* Admin */}
            {user?.role === "admin" && <li>
                <Link to={'/admin-dashboard'}><span className="mr-4 hover:bg-white py-1 px-2  rounded-md hover:text-black">Admin</span></Link>
            </li>}

            {/* Cart */}
            <li>
                <Link to={'/cart'}>
                    <span className="mr-4 hover:bg-white py-1 px-2  rounded-md hover:text-black">Cart [{cartItems.length}]</span>
                </Link>
            </li>
            
            {/* Logout */}
            {user && <li className="cursor-pointer" onClick={logout}>
                <span className="inline-flex items-center rounded-md bg-gray-50 bg-opacity-4 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                    <span className="text-black">Logout</span>
                </span>
            </li>}
        </ul>
    );

    return (
        <nav className="bg-black sticky top-0 z-10 ">
            <div className="lg:flex lg:justify-between items-center py-3 lg:px-3 ">

                {/* Logo */}
                <div className="left sm:flex lg:flex py-3 lg:py-0">

             <div className="sm:flex lg:flex md:flex navimage" >

                <img  src={Logo} alt="E-Bharat" className="h-9 mr-3 " />

                    <Link to={'/'}>
                        <h2 className="font-bold text-white text-2xl text-center inline  "> E-Bharat </h2>
                    </Link>

                    <div className="inline md:-hidden lg:hidden mr-4 absolute right-1 mb-2 ">
                <button onClick={toggleMenu} className="text-white focus:outline-none">
                       <img src={HamburgerIcon} alt="HamburgerIcon" className="h-7 w-7 "/>
                    </button>
                   
  
                </div>
             </div>
                   
                {/* Hamburger Menu */}
                <div className="inline lg:hidden mr-4 absolute right-1 mb-2 hamburgerfirst">
                <button onClick={toggleMenu} className="text-white focus:outline-none hamburgerfirst">
                       <img src={HamburgerIcon} alt="HamburgerIcon" className="h-7 w-7 hamburgerfirst"/>
                    </button>
                   
  
                </div>
                </div>

                {/* Right */}
                <div className="right flex justify-center mb-4 lg:mb-0 font-sans">
                    {navList}
                </div>

                {/* Search Bar */}
                
                    
                <SearchBar />
                
            </div>
        </nav>
    );
}

export default Navbar;
