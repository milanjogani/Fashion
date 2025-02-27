import React from 'react'
import "./navbar.css"
import { IoIosSearch } from "react-icons/io";
// import { FaUserTie } from "react-icons/fa";import { IoIosLogIn } from "react-icons/io";
import { IoIosLogIn } from "react-icons/io";
import { CiLogout } from "react-icons/ci";



import { FaCartPlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { useCart } from '../CartProvider ';
import { useAuth0 } from "@auth0/auth0-react";



const Navbars = () => {
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
    // const { logout } = useAuth0();
    // const { isAuthenticated } = useAuth0();

    // login $$ logout
    const { cartCount } = useCart(true);

    let nav = {
        background: "#E3FC01",
        color: "black"
    };
    let link = {
        color: "white",
        textDecoration: "none",
        padding: "0 10px"
    }
    let btn = {
        border: "none",
        padding: "5px 10px"
    }
    return (
        <>
            <div className="topHeader" > {/* Apply style correctly here */}
                <h3 className='p-2 text-center' style={nav}>WELCOME TO OUR STORE</h3>
                <div className="container">
                    <div className="topheadInner d-flex  align-items-center py-3">

                        <div className="sicon col-lg-4 col-sm-4 col-4 col-md-4">
                            <IoIosSearch className='fs-2' />
                        </div>

                        <div className="logoImage col-lg-4 col-sm-4 col-4 col-md-4 d-flex justify-content-center">
                            <Link to="/">
                                <img width={140} src="images/2.png" alt="" className='d-flex' />
                            </Link>
                        </div>

                        <div className="publicIcon d-flex col-lg-4 col-sm-4 col-4 col-md-4 d-flex justify-content-end align-items-center">
                            {
                                isAuthenticated && (
                                    <div>
                                        <p className='m-0'>{user.name}</p>
                                    </div>
                                )
                            }

                            {
                                isAuthenticated ?
                                    <div>
                                        <div className="logOutBtn">
                                            <button title='Log Out' style={btn} onClick={logout}>
                                                <CiLogout className='fs-4 ' />
                                            </button>
                                        </div>
                                        <div>
                                            {/* Your actual website content here */}
                                            <h1>Welcome to the website!</h1>
                                            {/* Rest of your page content */}
                                        </div>
                                    </div>
                                    :
                                    <div className="logInBtn">
                                        <button title='Log In' style={btn} onClick={loginWithRedirect}>
                                            <IoIosLogIn className='fs-4 ' />
                                        </button>
                                    </div>
                            }


                            <Link to="/cart">
                                <div className="cart px-2">
                                    <FaCartPlus title='Cart' className='fs-4 ' />
                                </div>
                            </Link>
                            {cartCount > 0 && (
                                <span>
                                    {cartCount}
                                </span>

                            )}



                        </div>

                    </div>
                    <div className="menu py-2 text-center d-flex justify-content-center">
                        <ul className='list-unstyled d-flex text-center'>
                            <li>
                                <Link style={link} to="/">Home</Link>
                            </li>
                            <li>
                                <Link style={link} to="/catalog">Catalog</Link>
                            </li>
                            <li>
                                <Link style={link} to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbars