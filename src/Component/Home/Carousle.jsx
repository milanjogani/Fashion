import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./collection.css"
import { Link } from 'react-router-dom';

const Carousle = () => {
    return (
        <>
            <div className="carouselOuter">
                <div className="container">
                    <div className="carousleInner d-flex row">
                        <div className="carousleText col-lg-4 col-md-4 col-sm-2 col-12">
                            <h2 className='bg-transparent'>Not just another clothing brand for men</h2>
                            <p className='bg-transparent'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, dicta!</p>
                            <Link to="/catalog">
                                <button type='button' className='btn btn-primary'>Shop now</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Carousle