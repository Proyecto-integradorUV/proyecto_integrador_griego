import React from 'react';
import "./StylePrincipal.css";
import Slider from 'react-slick';
import video1 from "./videos/video1.mp4"
// import video2 from "./videos/slide2.mp4"
// import video3 from "./videos/slide3.mp4"

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const VideoSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Agregar la opción autoplay
        autoplaySpeed: 5000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
              },
            },
          ],
    };

    return (
        <Slider {...settings}>
            <div>
                <div className="video-container">
                    <video src={video1} controls className="video" autoPlay loop/>
                </div>
            </div>
            {/* <div>
                <div className="video-container">
                    <video src={video2} controls className="video" autoPlay/>
                </div>
            </div>
            <div>
                <div className="video-container">
                    <video src={video3} controls className="video" autoPlay/>
                </div>
            </div> */}
        </Slider>
    );
};

export default VideoSlider;