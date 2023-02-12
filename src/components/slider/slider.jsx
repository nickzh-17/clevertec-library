import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Scrollbar, Thumbs, FreeMode, Navigation, Pagination } from "swiper/core";

import { booksData } from '../../resources/books';
import { useWindowWidth } from '../../functions/get-window-width';

import 'swiper/swiper-bundle.css';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';
import './slider.scss';


SwiperCore.use([Scrollbar, Pagination]);


export const Slider = ({book}) => {
    const currentViewWidth = useWindowWidth();
    const [thumbsSwiper, setThumbsSwiper] = useState(null);


    const slidesBig = book.slidesBig.map( (image, index) => 
        <SwiperSlide key={book.id + Math.random().toString()}>
            <img className='slide' src={image} alt={`big slide ${index}`} />
        </SwiperSlide>
    );

    const slidesSmall = book.slidesSmall.map( (image, index) => 
        <SwiperSlide 
            data-test-id='slide-mini' 
            key={book.id + Math.random().toString()}
        >
            <img className='slide' src={image} alt={`small slide ${index}`} />
        </SwiperSlide>
    );

    if( currentViewWidth < 1440 ) {
        return <div className="slider">
                <Swiper 
                    data-test-id='slide-big'
                    className='slider--big'
                    tag='section'


                    slidesPerView={1}
                    spaceBetween={30}
                    modules={Pagination}
                    pagination={true}

                    >
                    {slidesBig}
                </Swiper>
            

        </div>
    }

    return <div className="slider">
        <div className='thumb'>
            <Swiper 
                data-test-id='slide-big'
                className='slider--big'
                tag='section'

                thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                modules={[Thumbs]}
                allowTouchMove={false}
                slidesPerView={1}
                spaceBetween={30}

                >
                {slidesBig}
            </Swiper>
        </div>
        <div className='gallery'>
            <Swiper 
                className='slider--small'
                spaceBetween={0}
                slidesPerView={4}
                // centeredSlidesBounds={true}

                watchSlidesProgress={true}
                onSwiper={setThumbsSwiper}
                modules={[Thumbs, FreeMode, Scrollbar]}
                freeMode={true}
                // scrollbar={{ draggable: true, dragSize: 24 }}
                scrollbar={true}

                >
                    { [...slidesSmall] }
            </Swiper>
        </div>

    </div>

    
};