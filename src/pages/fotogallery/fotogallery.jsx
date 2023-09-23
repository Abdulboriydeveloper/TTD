import React from 'react'
import './fotogallery.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/scrollbar';

import GalleryImg from "../../assets/img/galleryImg.png";
import Img1 from "../../assets/img/gallery1.png"
import Img2 from "../../assets/img/gallery2.png"
import Img3 from "../../assets/img/gallery3.png"

function Fotogallery() {
    const data =[
        {
            image : Img1,
        },
        {
            image : Img2,
        },
        {
            image : Img3,
        },
        {
            image : Img1,
        },
        {
            image : Img2,
        },
        {
            image : Img3,
        },
        {
            image : Img1,
        },
        {
            image : Img2,
        },
        {
            image : Img3,
        },
        {
            image : Img1,
        },
        {
            image : Img2,
        },
        {
            image : Img3,
        },
        {
            image : Img1,
        },
        {
            image : Img2,
        },
        {
            image : Img3,
        },
        {
            image : Img1,
        },
        {
            image : Img2,
        },
        {
            image : Img3,
        },
        {
            image : Img1,
        },
        {
            image : Img2,
        },
        {
            image : Img3,
        },
        {
            image : Img1,
        },
        {
            image : Img2,
        },
        {
            image : Img3,
        },
        {
            image : Img1,
        },
        {
            image : Img2,
        },
        {
            image : Img3,
        },
        {
            image : Img1,
        },
        {
            image : Img2,
        },
        {
            image : Img3,
        },
        {
            image : Img1,
        },
        {
            image : Img2,
        },
        {
            image : Img3,
        },
        {
            image : Img1,
        },
        {
            image : Img2,
        },
        {
            image : Img3,
        },
        {
            image : Img1,
        },
        {
            image : Img2,
        },
        {
            image : Img3,
        },
        {
            image : Img1,
        },
        {
            image : Img2,
        },
        {
            image : Img3,
        },
        {
            image : Img1,
        },
        {
            image : Img2,
        },
        {
            image : Img3,
        },
    ]

  return (
    <>
        <div className='galleryPage'>
            <div className="galleryPageTop">
                <div className="container-xl px-0">
                    <div className="galleryRow ">
                        <div className="contentGaller">
                            <h1>Запомним каждый <br /> <b>момент вместе</b></h1>
                            <p>Фотография – это способ чувствовать, прикасаться, любить. То, что вы поймали на пленку фиксируется навсегда... она помнит мелочи долгое время после того как вы все забыли</p>
                        </div>
                        <img src={GalleryImg} alt="" />
                    </div>
                </div>
            </div>
            <div className="gallerySlider">
                <div className="container-xl">
                    <h1>Воспоминания</h1>
                    <p>15.06.2023</p>
                </div>
                <div className="firstSlider">
                        <Swiper
                            effect={'coverflow'}
                            grabCursor={true}
                            // centeredSlides={true}
                            slidesPerView={'auto'}
                            coverflowEffect={{
                              rotate: 0,
                              stretch: 0,
                              depth: 100,
                              modifier: 1,
                              slideShadows: true,
                            }}
                            scrollbar={{
                                // draggable: true ,
                                // el: '.swiper-scrollbar',
                                draggable: true,
                                dragSize: 100,
                            }}
                            modules={[EffectCoverflow, Pagination,Scrollbar]}
                            className="mySwiper"
                        >
                            {data.map((item, i) => {
                                return(
                                    <SwiperSlide> 
                                        <img src={item.image} alt="" />
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                </div>
                <div className="seconSlide">
                    <div className="container-xl">
                        <h1>Воспоминания</h1>
                        <p>25.04.2023</p>
                    </div>
                    <Swiper
                            effect={'coverflow'}
                            grabCursor={true}
                            // centeredSlides={true}
                            slidesPerView={'auto'}
                            coverflowEffect={{
                              rotate: 0,
                              stretch: 0,
                              depth: 100,
                              modifier: 1,
                              slideShadows: true,
                            }}
                            scrollbar={{
                                draggable: true,
                                dragSize: 100,
                            }}
                            modules={[EffectCoverflow, Pagination,Scrollbar]}
                            className="mySwiper"
                        >
                            {data.map((item, i) => {
                                return(
                                    <SwiperSlide> 
                                        <img src={item.image} alt="" />
                                    </SwiperSlide>
                                )
                            })}
                    </Swiper>
                </div>
                <div className="thirdSlide">
                    <div className="container-xl">
                        <h1>Воспоминания</h1>
                        <p>25.04.2023</p>
                    </div>
                    <Swiper
                            effect={'coverflow'}
                            grabCursor={true}
                            // centeredSlides={true}
                            slidesPerView={'auto'}
                            coverflowEffect={{
                              rotate: 0,
                              stretch: 0,
                              depth: 100,
                              modifier: 1,
                              slideShadows: true,
                            }}
                            scrollbar={{
                                draggable: true,
                                dragSize: 100,
                            }}
                            modules={[EffectCoverflow, Pagination,Scrollbar]}
                            className="mySwiper"
                        >
                            {data.map((item, i) => {
                                return(
                                    <SwiperSlide> 
                                        <img src={item.image} alt="" />
                                    </SwiperSlide>
                                )
                            })}
                    </Swiper>
                </div>
            </div>
        </div>
    </>
  );
}

export default Fotogallery;
