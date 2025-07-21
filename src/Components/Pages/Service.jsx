import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import gallery1 from '../../assets/Home/gallery1.png';
import gallery2 from '../../assets/Home/gallery2.png';
import gallery3 from '../../assets/Home/gallery3.png';

const images = [gallery1, gallery2, gallery3];

export default function Service() {
  return (
    <div className="w-[300px] h-[400px]">
      <Swiper
        direction="vertical"
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="w-full h-full"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Slide ${index + 1}`} className="w-full h-full object-cover rounded-lg" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
