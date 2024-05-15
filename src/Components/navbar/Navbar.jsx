// import { Link, useNavigate } from "react-router-dom";
// import SearchBar from "../searchBar/SearchBar";
// import { useSelector } from "react-redux";
// import Logo from './logo.png'

// const Navbar = () => {
//     // get user from localStorage 
//     const user = JSON.parse(localStorage.getItem('users'));

//     // navigate 
//     const navigate = useNavigate();

//     // logout function 
//     const logout = () => {
//         localStorage.clear('users');
//         navigate("/login")
//     }

//     // CartItems
//     const cartItems = useSelector((state) => state.cart);

//     // navList Data
//     const navList = (
//         <ul className="flex space-x-2 text-white font-medium text-md px-5 ">
//             {/* Home */}
//             <li>
//                 <Link to={'/'}> <span className="bg-white py-1 px-2  rounded-md text-black">Home</span> </Link>
//             </li>

//             {/* All Product */}
//             <li>
//                 <Link to={'/allproduct'}> <span className=" hover:bg-white py-1 px-2  rounded-md hover:text-black">All Product</span></Link>
//             </li>

//             {/* Signup */}
//             {!user ? <li>
//                 <Link to={'/signup'}> <span className=" hover:bg-white py-1 px-2  rounded-md hover:text-black">Sign Up</span></Link>
//             </li> : ""}

//             {/* Signup */}
//             {!user ? <li>
//                 <Link to={'/login'}> <span className="mr-4 hover:bg-white py-1 px-2  rounded-md hover:text-black">Log In</span></Link>
//             </li> : ""}

//             {/* User */}
//             {user?.role === "user" && <li>
//                 <Link to={'/user-dashboard'}><span className=" hover:bg-white py-1 px-2  rounded-md hover:text-black">User</span></Link>
//             </li>}

//             {/* Admin */}
//             {user?.role === "admin" && <li>
//                 <Link to={'/admin-dashboard'}> <span className="mr-4 hover:bg-white py-1 px-2  rounded-md hover:text-black">Admin </span></Link>
//             </li>}

//             {/* Cart */}
//             <li>
           
//                 <Link to={'/cart'}>
//                     <span className="mr-4 hover:bg-white py-1 px-2  rounded-md hover:text-black">Cart [{cartItems.length}]</span> 
                    
//                 </Link>
            
//             </li>
//             {/* logout */}
//             {user && <li className=" cursor-pointer " onClick={logout}>
//             <span className=" inline-flex items-center rounded-md bg-gray-50 bg-opacity-4 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 ">
        
//                 <span className="text-black ">Logout</span>
//       </span>
//             </li>}

//         </ul>
//     )
//     return (
//         <nav className="bg-black sticky top-0 z-10">
//             {/* main  */}
//             <div className="lg:flex lg:justify-between items-center py-3 lg:px-3 ">
//                 {/* left  */}
//                 <div className="left lg:flex py-3 lg:py-0">
//                         <img src={Logo} alt="E-Bharat" className="h-9 mr-3" />
//                     <Link to={'/'}>
//                         <h2 className=" font-bold text-white text-2xl text-center">E-Bharat</h2>
//                     </Link>
//                 </div>

//                 {/* right  */}
//                 <div className="right flex justify-center mb-4 lg:mb-0 font-sans">
//                     {navList}
//                 </div>

//                 {/* Search Bar  */}
//                 <SearchBar />
//             </div>
//         </nav>
//     );
// }

// export default Navbar;

import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import { useSelector } from "react-redux";
import Logo from './logo.png'
import { useState } from 'react';

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
        <nav className="bg-black sticky top-0 z-10">
            <div className="lg:flex lg:justify-between items-center py-3 lg:px-3 ">
                {/* Hamburger Menu */}
                <div className="block lg:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path className="hidden lg:block" fillRule="evenodd" clipRule="evenodd" d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"/>
                            <path className="lg:hidden" fillRule="evenodd" clipRule="evenodd" d="M4.293 7.293L3.586 8 12 16.414l8.414-8.414-.707-.707L12 14.293 4.707 7l-.414.293zM12 4.828L13.414 6.24 12 7.654l-1.414-1.414L12 4.828z"/>
                        </svg>
                    </button>
                </div>

                {/* Logo */}
                <div className="left lg:flex py-3 lg:py-0">
                    <img src={Logo} alt="E-Bharat" className="h-9 mr-3" />
                    <Link to={'/'}>
                        <h2 className="font-bold text-white text-2xl text-center">E-Bharat</h2>
                    </Link>
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
