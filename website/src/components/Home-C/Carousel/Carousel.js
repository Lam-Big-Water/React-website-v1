import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Link } from 'react-router-dom'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import './Carousel.css'
export default function Carousel() {
    return (
        <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        // navigation
        autoplay={{
            delay: 4000,
            disableOnInteraction: false,
        }}
        >
            <SwiperSlide className='img1 slide'>
                <div className='content'>
                    <span>explore, discover, travel</span>
                    <h3>travel around the world</h3>
                    <Link to='/Product' className='btn'>discover more</Link>
                </div>
            </SwiperSlide>
            <SwiperSlide className='img2 slide'>
                <div className='content'>
                    <span>explore, discover, travel</span>
                    <h3>travel around the world</h3>
                    <Link to='/Product' className='btn'>discover more</Link>
                </div>
            </SwiperSlide>
            <SwiperSlide className='img3 slide'>
                <div className='content'>
                    <span>explore, discover, travel</span>
                    <h3>travel around the world</h3>
                    <Link to='/Product' className='btn'>discover more</Link>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};