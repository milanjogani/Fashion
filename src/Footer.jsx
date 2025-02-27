import React from 'react'
import { Link } from 'react-router-dom'
import { LuInstagram } from "react-icons/lu";
import { FaFacebookF } from "react-icons/fa";
import { PiLinkDuotone } from "react-icons/pi";
import "./index.css"



const Footer = () => {
    return (
        <>
            <div className="FooterOuter py-5 border-top mt-5">
                <div className="container-fluid">
                    <div className="FooterInner row d-flex">
                        <div className="left text-center col-lg-4 col-sm-12 lh-base">
                            <div className="image ">
                                <img width={100} src="images/2.png" alt="" />
                            </div>
                            <p className='fs-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore accusantium nam ab a labore temporibus et quia provident, eaque quam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, neque ad accusantium facere assumenda debitis id iusto repellat reiciendis a.</p>
                        </div>
                        <div className="right d-flex col-lg-8 col-sm-12 row">
                            <div className="manuFooter lh-lg text-center col-lg-4 mt-3">
                                <h3 className='fw-bolder'>Menu</h3>
                                <Link className='d-block text-light text-decoration-none ' to="/">Home</Link>
                                <Link className='d-block text-light text-decoration-none ' to="/catalog">Catalog</Link>
                                <Link className='d-block text-light text-decoration-none ' to="/contact">Contact</Link>
                            </div>

                            <div className="linkPage text-center col-lg-4 lh-lg mt-3">
                                <h3 className='mb-3 fw-bolder'>Link</h3>
                                <div className="footerIcon d-flex text-center justify-content-center">

                                    {/* https://www.instagram.com/michelemorrone/?hl=en */}
                                    <a href="https://www.instagram.com/michelemorrone/?hl=en" > <LuInstagram className='fs-2 mx-2' /></a>
                                    <FaFacebookF className='fs-2 mx-2' />
                                    <PiLinkDuotone className='fs-2 mx-2' />
                                </div>
                            </div>

                            <div className="resource text-center col-lg-4 lh-lg mt-3">
                                <h3 className='fw-bolder'>Resources</h3>
                                <Link className='d-block text-light text-decoration-none '>Sign in</Link>
                                <Link className='d-block text-light text-decoration-none '>Sign up</Link>
                                <Link className='d-block text-light text-decoration-none '>Tags</Link>
                                <Link className='d-block text-light text-decoration-none '>Author</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer