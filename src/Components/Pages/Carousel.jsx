import React, { useState } from 'react'
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";
import gallery1 from '../../assets/Home/gallery1.png';
import gallery2 from '../../assets/Home/gallery2.png';
import gallery3 from '../../assets/Home/gallery3.png';
import gallery4 from '../../assets/Home/gallery4.png';
import { FaRegArrowAltCircleRight, FaRegArrowAltCircleLeft } from "react-icons/fa";

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function Carousel() {
  // const slides = [gallery1, gallery2, gallery3, gallery4];
  // const [curr, setCurr] = useState(0);

  // const prev = () => setCurr(curr === 0 ? slides.length - 1 : curr - 1);
  // const next = () => setCurr(curr === slides.length - 1 ? 0 : curr + 1);

  // useEffect(()=>{
  //   const interval = setInterval(() => {
  //     setPicture(picture === gallery.length - 1 ? 0 : picture + 1);
  
      
  //   }, 3000);
  //   return ()=>clearInterval(interval)
  // },[gallery.length])
  




  //   const images = [gallery1,gallery2,gallery3,gallery4]
   
  //     const settings = {
  //      dots: true,
  //      infinite: true,
  //      speed: 500,
  //      slidesToShow: 1,
  //      slidesToScroll: 1,
  //      autoplay:true,
  //      arrows:true,
  //    };


     function NextArrow(props) {
       const { className, onClick } = props;
       return (
         <div
           className={`${className} right-3 z-10 text-black text-2xl`}
           onClick={onClick}
         >
           <FaArrowRight className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100" />
         </div>
       );
     }
     
     function PrevArrow(props) {
       const { className, onClick } = props;
       return (
         <div
           className={`${className} left-3 z-10 text-black text-2xl`}
           onClick={onClick}
         >
           <FaArrowLeft className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100" />
         </div>
       );
     }
     
    const cards = [
       {
         img: gallery1,
         title: 'Beautiful Beach',
         desc: 'Enjoy the scenic view of the sunny beach.',
       },
       {
         img: gallery2,
         title: 'Mountain Adventure',
         desc: 'Experience thrilling mountain hikes.',
       },
       {
         img: gallery3,
         title: 'City Lights',
         desc: 'Explore the vibrant life of the city.',
       },
       {
         img: gallery4,
         title: 'Nature Walk',
         desc: 'Peaceful stroll through green forests.',
       },
     ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };


 
  return (
   <>
     {/* <div className='flex justify-center items-center h-screen bg-black overflow-hidden relative'>
      
      <div
        className='flex transition-transform ease-out duration-500'
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((s, index) => (
          <div key={index} className='min-w-full flex-shrink-0 object-contain'>
            <img src={s} alt={`slide-${index}`} className='w-full h-full object-cover' />
          </div>
        ))}
      </div>

      <div className='absolute inset-0 flex items-center justify-between px-4'>
        <button onClick={prev} className='p-2 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
          <FaRegArrowAltCircleLeft size={30} />
        </button>
        <button onClick={next} className='p-2 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
          <FaRegArrowAltCircleRight size={30} />
        </button>
      </div>
    </div> */}




    {/* react slick method */}

    {/* <h1 className='m-20'>slick method</h1>

     <Slider {...settings}>
      {images.map((img, index) => (
        <div key={index}>
          <img src={img} alt={`Gallery image number ${index + 1}`}className="w-full h-auto" />
        </div>
      ))}
    </Slider> */}


  {/* slick se hi btn click on cards*/}

 <div className="w-full max-w-md mx-auto p-4 my-20">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index}>
            <div className="bg-white rounded-xl overflow-hidden shadow-md">
              <img src={card.img} alt={card.title} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800">{card.title}</h2>
                <p className="text-gray-600 mt-2">{card.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
   </>
  );
}











// 