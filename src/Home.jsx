
import "./index.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import s1 from "./images/s1.png";
import s2 from "./images/s2.png";
import s3 from "./images/s3.png";
import s4 from "./images/s4.png";
import d1 from "./images/d1.png";
import d2 from "./images/d2.png";
import d3 from "./images/d3.png";
import d4 from "./images/d4.png";
import d5 from "./images/d5.png";
import d6 from "./images/d6.png";


export default function Home(props) {



    return (
        <>
                 <Swiper
                modules={[Autoplay]}
                loop={true}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}

                breakpoints={{
                    425: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween:30,
                    }

                }}
                className="mySwiper marginswipe" data-aos="fade-up">
                <SwiperSlide>
                    <div className="swipe-1">
                        <img src={s1} className="imgswiper mx-sm-2" />
                    </div></SwiperSlide>
                <SwiperSlide>
                    <div className="image-brand">
                        <img src={s2} className="imgswiper mx-sm-2" />
                    </div>
                </SwiperSlide>
                <SwiperSlide><div className="image-brand">
                    <img src={s3} className="imgswiper mx-sm-2" />
                </div></SwiperSlide>
                <SwiperSlide><div className="image-brand">
                    <img src={s4} className="imgswiper mx-sm-2" />
                </div></SwiperSlide>
            </Swiper>

            <h1 className="mt-5 text-center">CIVIC ISSUES</h1>

            <div className="swipe-2 container-fluid mt-5">
                <div className="row mx-3">
                    <div className="circles d-flex">
                        <div className="circle-1 col-lg-3 col-sm-6 col-md-4 mx-lg-3 mx-1 mx-md-2 ">
                            <div className="round-1"><h1>25% Off</h1></div>
                        </div>
                        <div className="circle-2 col-lg-9 col-md-8 col-sm-6 mx-md-2 mx-3 ">
                            <Swiper
                                modules={[Autoplay]}
                                loop={true}
                                autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: false,
                                }}
                                  breakpoints={{
                    425: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween:10,
                    }
                }}

                                className="mySwiper">
                            <SwiperSlide > <div className="round-1-swipe"><img src={d6} className="parry" />
                            </div></SwiperSlide>
                            <SwiperSlide > <div className="round-1-swipe"><img src={d5} className="parry" />
                            </div></SwiperSlide>
                            <SwiperSlide > <div className="round-1-swipe"><img src={d4} className="parry" />

                            </div></SwiperSlide>
                            <SwiperSlide > <div className="round-1-swipe"><img src={d3} className="parry" />
                            </div></SwiperSlide>
                            <SwiperSlide > <div className="round-1-swipe"><img src={d2} className="parry" />
                            </div></SwiperSlide>
                            <SwiperSlide > <div className="round-1-swipe"><img src={d1} className="parry" />
                            </div></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div >

        </>
    );
}
