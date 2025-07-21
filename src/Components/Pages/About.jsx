import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../../App.css'
import gallery1 from '../../assets/Home/gallery1.png'
import gallery2 from '../../assets/Home/gallery2.png'
import gallery3 from '../../assets/Home/gallery3.png'
import gallery4 from '../../assets/Home/gallery4.png'

export default function About() {
  const gallery = [gallery1, gallery2, gallery3, gallery4];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // or 4
    slidesToScroll: 1,
    arrows:true,
  };

  return (
    <div className="max-w-screen-xl mx-auto p-5 bg-gray-100">
      <Slider {...settings}>
        {gallery.map((picture, index) => (
          <div key={index} className="p-2">
            <img
              src={picture}
              alt={`slide-${index}`}
              className="rounded-xl w-full h-[250px] object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
