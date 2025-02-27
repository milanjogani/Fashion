import React from 'react'
import { Link } from 'react-router-dom'

const Page = () => {
    let btn = {
        // border: "none",
        border: "1px solid #E3FC01",
        color: "#E3FC01",
        padding: "10px 40px",
        margin: "2vw 0 "
    }
    let h2 = {
        fontSize: "50px"
    }
    return (
        <>
            <div className="pageOne py-5">
                <div className="container">
                    <div className="pageOneInner row align-item-center">
                        <div className="left col-lg-6 col-md-6 col-sm-12 col-12 lh-lg ">
                            <h2 style={h2}>Discover Quality Clothing for Every Occasion.</h2>
                                <Link style={{ color: "#E3FC01" }} className="text-decoration-none  fw-semibold" to="/catalog">
                            <button style={btn} className=' cursor-pointer' >
                                    SHOP
                            </button>
                                </Link>
                        </div>
                        <div className="right col-lg-6 col-md-6 col-sm-12 col-12">
                            <img style={{"width":"100%"}} src="images/pexels-pixabay-325876.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page