import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./collection.css";
import { slider } from "./slider";

const SliderFrame = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Set autoplay speed to 1 second (1000 milliseconds)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  };
  
  return (
    <>
      <div className="client_contact">
        <h2>Client Performance</h2>
        <div className="slider-container">
          <Slider {...settings}>
            {
              slider.map((slider) => {
                return (
                  <>
                    <div key={slider.id}>
                      <div className="image d-flex justify-content-center">
                        <img src={slider.img} alt="" />
                      </div>

                      <div className="textSlider my-4 py-2 px-3 text-center">
                        <h4 className="text-center fs-3">{slider.name}</h4>
                        <p>{slider.detail}</p>
                      </div>
                    </div>
                  </>
                )
              })
            }
          </Slider>
        </div>
      </div>
    </>
  )
}

export default SliderFrame