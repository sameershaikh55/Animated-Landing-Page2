import React from 'react'
// import Slider from "react-slick";


const Delivery = () => {
    
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1360,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
            },
          },
        ],
      };

    return (
        <div className="deliverySlider_conatiner">
        <div className="innerDeliverySlider_conatiner">
            <h1><span className="heading_underline">Livra</span>ison</h1>
            {/* <div className="main_slider_container">
                <Slider {...settings}>
                    <div>lol</div>
                    <div>lol</div>
                    <div>lol</div>
                    <div>lol</div>
                </Slider>
            </div> */}
        </div>
        </div>
    )
}

export default Delivery
