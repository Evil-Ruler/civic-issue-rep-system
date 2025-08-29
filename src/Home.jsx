import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { FaQuoteLeft } from "react-icons/fa";
import video from "./video.mp4"
import "./index.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import bathroom from "./images/bathroom.png";
import parryware from "./images/parryware.png";
import johnsons from "./images/johnsons.png";
import kerovit from "./images/kerovit.png";
import kohler from "./images/kohler.png";
import { FaQuoteRight } from "react-icons/fa";
import hindware from "./images/hindware.png";
import bathroom1 from "./images/bathroom1.png";
import bathroom2 from "./images/bathroom2.png";
import bathroom3 from "./images/bathroom3.png";
import bathroom5 from "./images/bathroom5.png";
import ml1 from "./images/ml1.png";
import ml2 from "./images/ml2.png";
import ml3 from "./images/ml3.png";
import card1 from "./images/card1.png"
import card2 from "./images/card2.png"
import card3 from "./images/card3.png"
import card4 from "./images/card4.png"
import card5 from "./images/card5.png"
import kitchen1 from "./kitchen1.png";
import kitchen2 from "./kitchen2.png";
import bowl1 from "./images/bowl1.png";
import bowl2 from "./images/bowl2.png";
import bowl3 from "./images/bowl3.png";
import bowl4 from "./images/bowl4.png";
import full1 from "./images/full1.png"
import full2 from "./images/full2.png"
import test1 from "./images/test1.png";
import test2 from "./images/test2.png";
import test3 from "./images/test3.png";
import test4 from "./images/test4.png";
import test5 from "./images/test5.png";
import mirror1 from "./images/mirror1.png";
import mirror2 from "./images/mirror2.png";
import blog1 from "./images/blog1.png";
import blog2 from "./images/blog2.png";
import blog3 from "./images/blog3.png";
import blog4 from "./images/blog4.png";
import data from './Components/data.json'
import poster from "./images/poster.png";


export default function Home(props) {

    const list = data.data
    const list2 = data.transition
    const list3 = data.kitchen
    const list4 = data.kitchenbowl
    const list5 = data.mirror



    return (
        <>
            {/* video */}
            <div className="container-fluid">
                <video preload="auto" autoPlay loop muted id="my-video">
                    <source src={video} type="video/mp4" />
                </video>
            </div>

            {/* swiper-1 */}
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
                className="mySwiper mt-5" data-aos="fade-up">
                <SwiperSlide>
                    <div className="swipe-1">
                        <img src={bathroom} className="imgswiper mx-sm-2" />
                        <div className="price-off  justify-content-center mt-5 mx-lg-5 mx-md-3 my-3 px lg-5 px-md-1 mx-5 px-3">
                            <p className="px-lg-3 text-center mx-lg-5 mt-lg-2">Bathroom under ₹40000</p>
                        </div>
                    </div></SwiperSlide>
                <SwiperSlide>
                    <div className="image-brand">
                        <img src={bathroom1} className="imgswiper mx-sm-2" />
                        <div className="price-off  justify-content-center  mt-5 mx-lg-5 mx-md-3 my-3 px lg-5 px-md-1 mx-5 px-3">
                            <p className="px-lg-3 text-center mt-lg-2 mx-lg-5">Bathroom under ₹40000</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide><div className="image-brand">
                    <img src={bathroom1} className="imgswiper mx-sm-2" />
                    <div className="price-off mt-5 mx-lg-5 mx-md-3 my-3 px lg-5 px-md-1 mx-5 px-3">
                        <p className="px-lg-3 text-center mt-lg-2 mx-lg-5">Bathroom under ₹40000</p>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className="image-brand">
                    <img src={bathroom2} className="imgswiper mx-sm-2" />
                    <div className="price-off mt-5 mx-lg-5 mx-md-3 my-3 px lg-5 px-md-1 mx-5 px-3">
                        <p className="px-lg-3 text-center mt-lg-2 mx-lg-5">Bathroom under ₹40000</p>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className="image-brand">
                    <img src={bathroom3} className="imgswiper mx-sm-2" />
                    <div className="price-off mt-5 mx-lg-5 mx-md-3 my-3 px lg-5 px-md-1 mx-5 px-3">
                        <p className="px-lg-3 text-center mt-lg-2 mx-lg-5">Bathroom under ₹40000</p>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className="image-brand">
                    <img src={bathroom5} className="imgswiper mx-sm-2" />
                    <div className="price-off mt-5 mx-lg-5 mx-md-3 my-3 px lg-5 px-md-1 mx-5 px-3">
                        <p className="px-lg-3 text-center mt-lg-2 mx-lg-5">Bathroom under ₹40000</p>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className="image-brand">
                    <img src={bathroom3} className="imgswiper mx-sm-2" />
                    <div className="price-off mt-5 mx-lg-5 mx-md-3 my-3 px lg-5 px-md-1 mx-sm-5">
                        <p className="px-lg-3 text-center mt-lg-2 mx-lg-5">Bathroom under ₹40000</p>
                    </div>
                </div></SwiperSlide>
            </Swiper>

            <h1 className="mt-5 text-center">SANITARYWARE</h1>

            {/* swiper-2 */}
            <div className="swipe-2 container-fluid mt-5">
                <div className="row mx-3">
                    <div className="circles d-flex">
                        <div className="circle-1 col-lg-3 col-sm-6 col-md-4 mx-lg-3 mx-1 mx-md-2 ">
                            <div className="round-1"><h1>25% Off</h1></div>
                            <h5 className="mx-lg-5 mx-2 px-3"><br />Offer products</h5>
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
                            <SwiperSlide > <div className="round-1-swipe"><img src={parryware} className="parry" />
                                <div className="upto mt-4">Upto 21% Off</div>
                            </div></SwiperSlide>
                            <SwiperSlide > <div className="round-1-swipe"><img src={johnsons} className="parry" />
                                <div className="upto mt-4">Upto 21% Off</div>
                            </div></SwiperSlide>
                            <SwiperSlide > <div className="round-1-swipe"><img src={hindware} className="parry" />
                                <div className="upto mt-4">Min 21% Off</div>
                            </div></SwiperSlide>
                            <SwiperSlide > <div className="round-1-swipe"><img src={kerovit} className="parry" />
                                <div className="upto mt-4">Upto 25% Off</div>
                            </div></SwiperSlide>
                            <SwiperSlide > <div className="round-1-swipe"><img src={kohler} className="parry" />
                                <div className="upto mt-4">Upto 21% Off</div>
                            </div></SwiperSlide>
                            <SwiperSlide > <div className="round-1-swipe"><img src={hindware} className="parry" />
                                <div className="upto mt-4">Upto 21% Off</div>
                            </div></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div >

            <div className="container mt-5">
                <div className="first-j d-flex ms-2">
                    {list.map((index) => (
                        <div key={index.id}>
                            <Link to={`./Product/${index.id}`}>
                                <img src={index.image} alt="" className="card-img" />
                            </Link>
                            <div className="text-center fw-normal fs-6">{index.name}</div>
                        </div>
                    ))}
                </div>
            </div>

            <section>
                <h2 className="text-center text-secondary fw-normal mt-5">MOST LIKED PRODUCT</h2>
                <div className="container-fluid mt-5" data-aos="zoom-in" data-aos-delay="300">
                    <div className=" row product-grid">
                        <div className="product-square col-lg-3 col-md-6 col-sm-12 ms-2 m1">
                            <div className="product-img-container">
                                <div className="percent flash fw-bold text-dark px-2"><p className="mt-2">27%</p></div>
                                <img src={ml1} alt="" className="product-img" />
                                <div className="heart-icon"><FaRegHeart /></div>
                            </div>
                            <div className="product-text d-flex flex-column px-2 py-2">
                                <div className="product-head">HINDWARE ONE PIECE COMMODE</div>
                                <div className="product-review mt-2">
                                    <FaRegStar />
                                    <FaRegStar />
                                    <FaRegStar />
                                    <FaRegStar />
                                    <FaRegStar />
                                </div>
                                <div className="product-rate mt-2">
                                    <div className="Rs fw-bold">₹12,081.50</div>
                                    <div className="off">16550.00</div>
                                </div>
                            </div>
                            <div className="product-bottom mx-5">
                                <button className="p-btn px-5 py-2">View Details</button>
                            </div>
                        </div>
                        <div className="product-square col-lg-3 col-md-6 col-sm-12 ms-2 m1">
                            <div className="product-img-container">
                                <div className="percent flash fw-bold text-dark px-2"><p className="mt-2">27%</p></div>
                                <img src={ml2} alt="" className="product-img" />
                                <div className="heart-icon"><FaRegHeart /></div>
                            </div>
                            <div className="product-text d-flex flex-column px-2 py-2">
                                <div className="product-head">HINDWARE CISTERN</div>
                                <div className="product-review mt-2">
                                    <FaRegStar />
                                    <FaRegStar />
                                    <FaRegStar />
                                    <FaRegStar />
                                    <FaRegStar />
                                </div>
                                <div className="product-rate mt-2">
                                    <div className="Rs fw-bold">₹1,442.00</div>

                                </div>
                            </div>
                            <div className="product-bottom mx-5">
                                <button className="p-btn px-5 py-2">View Details</button>
                            </div>
                        </div>
                        <div className="product-square col-lg-3 col-md-6 col-sm-12 ms-2 m1">
                            <div className="product-img-container">
                                <div className="percent flash fw-bold text-dark px-2"><p className="mt-2">27%</p></div>
                                <img src={ml3} alt="" className="product-img" />
                                <div className="heart-icon"><FaRegHeart /></div>
                            </div>
                            <div className="product-text d-flex flex-column px-2 py-2">
                                <div className="product-head">HINDWARE CONCEALED CISTERN</div>
                                <div className="product-review mt-2">
                                    <FaRegStar />
                                    <FaRegStar />
                                    <FaRegStar />
                                    <FaRegStar />
                                    <FaRegStar />
                                </div>
                                <div className="product-rate mt-2">
                                    <div className="Rs fw-bold">₹3,731.00</div>

                                </div>
                            </div>
                            <div className="product-bottom mx-5">
                                <button className="p-btn px-5 py-2">View Details</button>
                            </div>
                        </div>
                        <div className="product-square col-lg-3 col-md-6 col-sm-12 ms-2 m1">
                            <div className="product-img-container">
                                <div className="percent flash fw-bold text-dark px-2"><p className="mt-2">27%</p></div>
                                <img src={ml1} alt="" className="product-img" />
                                <div className="heart-icon"><FaRegHeart /></div>
                            </div>
                            <div className="product-text d-flex flex-column px-2 py-2">
                                <div className="product-head">HINDWARE ONE PIECE COMMODE</div>
                                <div className="product-review mt-2">
                                    <FaRegStar />
                                    <FaRegStar />
                                    <FaRegStar />
                                    <FaRegStar />
                                    <FaRegStar />
                                </div>
                                <div className="product-rate mt-2">
                                    <div className="Rs fw-bold">₹12,081.50</div>
                                    <div className="off">16550.00</div>
                                </div>
                            </div>
                            <div className="product-bottom mx-5">
                                <button className="p-btn px-5 py-2">View Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            <section>
                <div className="container-fluid mt-5" data-aos="zoom-in" data-aos-delay="300">
                    <img src={poster} alt="poster" className="img-fluid poster" />
                </div>
            </section>

            <section>
                <h1 className="text-center mt-5">FAUCETS</h1>
                <div className="swipe-2 container-fluid mt-5">
                    <div className="row mx-3">
                        <div className="circles d-flex">
                            <div className="circle-1 col-lg-3 col-sm-6 col-md-4 mx-lg-3 mx-1 mx-md-2">
                                <div className="round-1"><h1>25% Off</h1></div>
                                <h5 className="mx-lg-5 mx-2 px-3"><br />Offer products</h5>
                            </div>
                            <div className="circle-2 col-lg-9 col-md-8 col-sm-6 mx-md-2 mx-3">
                                <Swiper
                                    modules={[Autoplay]}
                                    loop={true}
                                    autoplay={{
                                        delay: 1000,
                                        disableOnInteraction: false,
                                    }}

                                    breakpoints={{
                                    425:{
                                        spaceBetween:40,
                                        slidesPerView:1,
                                    },

                                    768:{
                                         spaceBetween:30,
                                        slidesPerView:2,
                                    },
                                      1024: {
                        slidesPerView: 4,
                        spaceBetween:10,
                    }

                                }}
                                    className="mySwiper" data-aos="flip-up">
                                    <SwiperSlide > <div className="round-1-swipe"><img src={parryware} className="parry" />
                                        <div className="upto mt-4">Upto 21% Off</div>
                                    </div></SwiperSlide>
                                    <SwiperSlide > <div className="round-1-swipe"><img src={johnsons} className="parry" />
                                        <div className="upto mt-4">Upto 21% Off</div>
                                    </div></SwiperSlide>
                                    <SwiperSlide > <div className="round-1-swipe"><img src={hindware} className="parry" />
                                        <div className="upto mt-4">Min 21% Off</div>
                                    </div></SwiperSlide>
                                    <SwiperSlide > <div className="round-1-swipe"><img src={kerovit} className="parry" />
                                        <div className="upto mt-4">Upto 25% Off</div>
                                    </div></SwiperSlide>
                                    <SwiperSlide > <div className="round-1-swipe"><img src={kohler} className="parry" />
                                        <div className="upto mt-4">Upto 21% Off</div>
                                    </div></SwiperSlide>
                                    <SwiperSlide > <div className="round-1-swipe"><img src={hindware} className="parry" />
                                        <div className="upto mt-4">Upto 21% Off</div>
                                    </div></SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container mt-5">
                <div className="first-j d-flex">
                    {list2.map((index) => (
                        <div key={index.id}>
                            <img src={index.image} alt="" className="card-img" />
                            <div className="text-center fw-normal fs-6">{index.name}</div>
                        </div>
                    ))}
                </div>
            </div>

            <Swiper
                modules={[Autoplay, Navigation]}
                navigation={true}
                loop={true}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}

                breakpoints={{
                    425:{
                        slidesPerView:1,
                    },
                    768:{
                        slidesPerView:2,
                    },
                      1024: {
                        slidesPerView: 4,
                        spaceBetween:10,
                    }
                }}
                className="mySwiper mt-5" data-aos="zoom-out">
                <SwiperSlide>
                    <div className="product-square col-lg-4 col-md-6 col-12 m1">
                        <div className="product-img-container">
                            <div className="percent flash fw-bold text-dark px-2"><p className="mt-2">27%</p></div>
                            <img src={card1} alt="" className="product-img" />
                            <div className="heart-icon"><FaRegHeart /></div>
                        </div>
                        <div className="product-text d-flex flex-column px-2 py-2">
                            <div className="product-head">CERA BATH TUB SPOUT</div>
                            <div className="product-review mt-2">
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                            </div>
                            <div className="product-rate mt-2">
                                <div className="Rs fw-bold">₹12,081.50</div>
                                <div className="off">16550.00</div>
                            </div>
                        </div>
                        <div className="product-bottom mx-5">
                            <button className="p-btn px-5 py-2">View Details</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide><div className="product-square col-lg-4 col-md-6 col-12  m1">
                    <div className="product-img-container">
                        <div className="percent flash fw-bold text-dark px-2"><p className="mt-2">27%</p></div>
                        <img src={card2} alt="" className="product-img" />
                        <div className="heart-icon"><FaRegHeart /></div>
                    </div>
                    <div className="product-text d-flex flex-column px-2 py-2">
                        <div className="product-head">CERA 3 IN 1 WALL MIXER</div>
                        <div className="product-review mt-2">
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar />
                        </div>
                        <div className="product-rate mt-2">
                            <div className="Rs fw-bold">₹12,081.50</div>
                            <div className="off">16550.00</div>
                        </div>
                    </div>
                    <div className="product-bottom mx-5">
                        <button className="p-btn px-5 py-2">View Details</button>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className="product-square col-lg-4 col-md-6 col-12  m1">
                    <div className="product-img-container">
                        <div className="percent flash fw-bold text-dark px-2"><p className="mt-2">27%</p></div>
                        <img src={card3} alt="" className="product-img" />
                        <div className="heart-icon"><FaRegHeart /></div>
                    </div>
                    <div className="product-text d-flex flex-column px-2 py-2">
                        <div className="product-head">PARRYWARE HEALTH FAUCET</div>
                        <div className="product-review mt-2">
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar />
                        </div>
                        <div className="product-rate mt-2">
                            <div className="Rs fw-bold">₹12,081.50</div>
                            <div className="off">16550.00</div>
                        </div>
                    </div>
                    <div className="product-bottom mx-5">
                        <button className="p-btn px-5 py-2">View Details</button>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className="product-square col-lg-4 col-md-6 col-12  m1">
                    <div className="product-img-container">
                        <div className="percent flash fw-bold text-dark px-2"><p className="mt-2">27%</p></div>
                        <img src={card4} alt="" className="product-img" />
                        <div className="heart-icon"><FaRegHeart /></div>
                    </div>
                    <div className="product-text d-flex flex-column px-2 py-2">
                        <div className="product-head">JOHNSON BATHROOM BATH SPOUT</div>
                        <div className="product-review mt-2">
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar />
                        </div>
                        <div className="product-rate mt-2">
                            <div className="Rs fw-bold">₹12,081.50</div>
                            <div className="off">16550.00</div>
                        </div>
                    </div>
                    <div className="product-bottom mx-5">
                        <button className="p-btn px-5 py-2">View Details</button>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className="product-square col-lg-4 col-md-6 col-12  m1">
                    <div className="product-img-container">
                        <div className="percent flash fw-bold text-dark px-2"><p className="mt-2">27%</p></div>
                        <img src={card5} alt="" className="product-img" />
                        <div className="heart-icon"><FaRegHeart /></div>
                    </div>
                    <div className="product-text d-flex flex-column px-2 py-2">
                        <div className="product-head">HINDWARE LONG BODY BIB COCK</div>
                        <div className="product-review mt-2">
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar />
                        </div>
                        <div className="product-rate mt-2">
                            <div className="Rs fw-bold">₹12,081.50</div>
                            <div className="off">16550.00</div>
                        </div>
                    </div>
                    <div className="product-bottom mx-5">
                        <button className="p-btn px-5 py-2">View Details</button>
                    </div>
                </div></SwiperSlide>
                <SwiperSlide><div className="product-square col-lg-4 col-md-6 col-12  m1">
                    <div className="product-img-container">
                        <div className="percent flash fw-bold text-dark px-2"><p className="mt-2">27%</p></div>
                        <img src={ml1} alt="" className="product-img" />
                        <div className="heart-icon"><FaRegHeart /></div>
                    </div>
                    <div className="product-text d-flex flex-column px-2 py-2">
                        <div className="product-head">HINDWARE ONE PIECE COMMODE</div>
                        <div className="product-review mt-2">
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar />
                            <FaRegStar />
                        </div>
                        <div className="product-rate mt-2">
                            <div className="Rs fw-bold">₹12,081.50</div>
                            <div className="off">16550.00</div>
                        </div>
                    </div>
                    <div className="product-bottom mx-5">
                        <button className="p-btn px-5 py-2">View Details</button>
                    </div>
                </div></SwiperSlide>
            </Swiper>

            <section>
                <h1 className="text-center mt-5">ACCESSORIES</h1>
                <div className="swipe-2 container-fluid mt-5">
                    <div className="row mx-3">
                        <div className="circles d-flex">
                            <div className="circle-1 col-lg-3 col-sm-6 col-md-4 mx-lg-3 mx-1 mx-md-2">
                                <div className="round-1"><h1>25% Off</h1></div>
                                <h5 className="mx-5 px-3"><br />Offer products</h5>
                            </div>
                            <div className="circle-2 col-lg-9 col-md-8 col-sm-6 mx-md-2 mx-3">
                                <Swiper
                                    modules={[Autoplay]}
                                    loop={true}
                                    autoplay={{
                                        delay: 2000,
                                        disableOnInteraction: false,
                                    }}
                                        breakpoints={{
                                    425:{
                                        spaceBetween:40,
                                        slidesPerView:1,
                                    },

                                    768:{
                                         spaceBetween:30,
                                        slidesPerView:2,
                                    },
                                      1024: {
                        slidesPerView: 4,
                        spaceBetween:10,
                    }

                                }}
                                    
                                    className="mySwiper">
                                    <SwiperSlide > <div className="round-1-swipe" data-aos="zoom-in"><img src={parryware} className="parry" />
                                        <div className="upto mt-4">Upto 21% Off</div>
                                    </div></SwiperSlide>
                                    <SwiperSlide > <div className="round-1-swipe" data-aos="zoom-in"><img src={johnsons} className="parry" />
                                        <div className="upto mt-4">Upto 21% Off</div>
                                    </div></SwiperSlide>
                                    <SwiperSlide > <div className="round-1-swipe" data-aos="zoom-in"><img src={hindware} className="parry" />
                                        <div className="upto mt-4">Min 21% Off</div>
                                    </div></SwiperSlide>
                                    <SwiperSlide > <div className="round-1-swipe" data-aos="zoom-in"><img src={kerovit} className="parry" />
                                        <div className="upto mt-4">Upto 25% Off</div>
                                    </div></SwiperSlide>
                                    <SwiperSlide > <div className="round-1-swipe" data-aos="zoom-in"><img src={kohler} className="parry" />
                                        <div className="upto mt-4">Upto 21% Off</div>
                                    </div></SwiperSlide>
                                    <SwiperSlide > <div className="round-1-swipe" data-aos="zoom-in"><img src={hindware} className="parry" />
                                        <div className="upto mt-4">Upto 21% Off</div>
                                    </div></SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container mt-5">
                <div className="first-j d-flex">
                    {list3.map((index) => (
                        <div key={index.id}>
                            <img src={index.image} alt="" className="card-img" />
                            <div className="text-center fw-normal fs-6">{index.name}</div>
                        </div>
                    ))}
                </div>
            </div>


            <section>
                <h2 className="text-center text-secondary fw-normal">MOST LIKED PRODUCT</h2>
                <Swiper
                    modules={[Autoplay, Navigation]}
                    navigation={true}
                    loop={true}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                           breakpoints={{
                    425:{
                        slidesPerView:1,
                    },
                    768:{
                        slidesPerView:2,
                    },
                    1024:{spaceBetween:30,
                    slidesPerView:4,}
                }}

                    className="mySwiper mt-5" data-aos="zoom-out">
                    <SwiperSlide><div className="product-square col-lg-4 col-md-6 col-sm-12 ms-sm-2 m1">
                        <div className="product-img-container">
                            <div className="percent flash fw-bold text-dark px-2"><p className="mt-2">27%</p></div>
                            <img src={card1} alt="" className="product-img" />
                            <div className="heart-icon"><FaRegHeart /></div>
                        </div>
                        <div className="product-text d-flex flex-column px-2 py-2">
                            <div className="product-head">CERA BATH TUB SPOUT</div>
                            <div className="product-review mt-2">
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                            </div>
                            <div className="product-rate mt-2">
                                <div className="Rs fw-bold">₹12,081.50</div>
                                <div className="off">16550.00</div>
                            </div>
                        </div>
                        <div className="product-bottom mx-5">
                            <button className="p-btn px-5 py-2">View Details</button>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide><div className="product-square col-lg-4 col-md-6 col-sm-12 ms-sm-2 m1">
                        <div className="product-img-container">
                            <div className="percent flash fw-bold text-dark px-2"><p className="mt-2">27%</p></div>
                            <img src={card2} alt="" className="product-img" />
                            <div className="heart-icon"><FaRegHeart /></div>
                        </div>
                        <div className="product-text d-flex flex-column px-2 py-2">
                            <div className="product-head">CERA 3 IN 1 WALL MIXER</div>
                            <div className="product-review mt-2">
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                            </div>
                            <div className="product-rate mt-2">
                                <div className="Rs fw-bold">₹12,081.50</div>
                                <div className="off">16550.00</div>
                            </div>
                        </div>
                        <div className="product-bottom mx-5">
                            <button className="p-btn px-5 py-2">View Details</button>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide><div className="product-square col-lg-4 col-md-6 col-sm-12 ms-sm-2 m1">
                        <div className="product-img-container">
                            <div className="percent flash fw-bold text-dark px-2"><p className="mt-2">27%</p></div>
                            <img src={card3} alt="" className="product-img" />
                            <div className="heart-icon"><FaRegHeart /></div>
                        </div>
                        <div className="product-text d-flex flex-column px-2 py-2">
                            <div className="product-head">PARRYWARE HEALTH FAUCET</div>
                            <div className="product-review mt-2">
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                            </div>
                            <div className="product-rate mt-2">
                                <div className="Rs fw-bold">₹12,081.50</div>
                                <div className="off">16550.00</div>
                            </div>
                        </div>
                        <div className="product-bottom mx-5">
                            <button className="p-btn px-5 py-2">View Details</button>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide><div className="product-square col-lg-4 col-md-6 col-sm-12 ms-sm-2 m1">
                        <div className="product-img-container">
                            <div className="percent flash fw-bold text-dark px-2"><p className="mt-2">27%</p></div>
                            <img src={card4} alt="" className="product-img" />
                            <div className="heart-icon"><FaRegHeart /></div>
                        </div>
                        <div className="product-text d-flex flex-column px-2 py-2">
                            <div className="product-head">JOHNSON BATHROOM BATH SPOUT</div>
                            <div className="product-review mt-2">
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                            </div>
                            <div className="product-rate mt-2">
                                <div className="Rs fw-bold">₹12,081.50</div>
                                <div className="off">16550.00</div>
                            </div>
                        </div>
                        <div className="product-bottom mx-5">
                            <button className="p-btn px-5 py-2">View Details</button>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide><div className="product-square col-lg-4 col-md-6 col-sm-12 ms-sm-2 m1">
                        <div className="product-img-container">
                            <div className="percent flash fw-bold text-dark px-2"><p className="mt-2">27%</p></div>
                            <img src={card5} alt="" className="product-img" />
                            <div className="heart-icon"><FaRegHeart /></div>
                        </div>
                        <div className="product-text d-flex flex-column px-2 py-2">
                            <div className="product-head">HINDWARE LONG BODY BIB COCK</div>
                            <div className="product-review mt-2">
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                            </div>
                            <div className="product-rate mt-2">
                                <div className="Rs fw-bold">₹12,081.50</div>
                                <div className="off">16550.00</div>
                            </div>
                        </div>
                        <div className="product-bottom mx-5">
                            <button className="p-btn px-5 py-2">View Details</button>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide><div className="product-square col-lg-4 col-md-6 col-sm-12 ms-sm-2 m1">
                        <div className="product-img-container">
                            <div className="percent flash fw-bold text-dark px-2"><p className="mt-2">27%</p></div>
                            <img src={ml1} alt="" className="product-img" />
                            <div className="heart-icon"><FaRegHeart /></div>
                        </div>
                        <div className="product-text d-flex flex-column px-2 py-2">
                            <div className="product-head">HINDWARE ONE PIECE COMMODE</div>
                            <div className="product-review mt-2">
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                            </div>
                            <div className="product-rate mt-2">
                                <div className="Rs fw-bold">₹12,081.50</div>
                                <div className="off">16550.00</div>
                            </div>
                        </div>
                        <div className="product-bottom mx-5">
                            <button className="p-btn px-5 py-2">View Details</button>
                        </div>
                    </div></SwiperSlide>
                </Swiper>
            </section>

            <section>
                <h1 className="text-center mt-5">KITCHEN-SINKS</h1>
                <div className="swipe-2 container-fluid mt-5">
                    <div className="row mx-3">
                        <div className="circles d-flex">
                            <div className="circle-1 col-lg-3 col-sm-6 col-md-4 mx-lg-3 mx-1 mx-md-2 ">
                                <div className="round-1"><h1>25% Off</h1></div>
                                <h5 className="mx-5 px-3"><br />Offer products</h5>
                            </div>
                            <div className="circle-2 col-lg-9 col-md-8 col-sm-6 mx-md-2 mx-3">
                                <Swiper
                                    modules={[Autoplay]}
                                    loop={true}
                                    autoplay={{
                                        delay: 2000,
                                        disableOnInteraction: false,
                                    }}
    
                                       breakpoints={{
                                    425:{
                                        spaceBetween:40,
                                        slidesPerView:1,
                                    },

                                    768:{
                                         spaceBetween:30,
                                        slidesPerView:2,
                                    },
                                      1024:{spaceBetween:10,
                    slidesPerView:4,}


                                }}
                                    className="mySwiper">
                                    <SwiperSlide > <div className="round-1-swipe" data-aos="zoom-in"><img src={parryware} className="parry" />
                                        <div className="upto mt-4">Upto 21% Off</div>
                                    </div></SwiperSlide>
                                    <SwiperSlide > <div className="round-1-swipe" data-aos="zoom-in"><img src={johnsons} className="parry" />
                                        <div className="upto mt-4">Upto 21% Off</div>
                                    </div></SwiperSlide>
                                    <SwiperSlide > <div className="round-1-swipe" data-aos="zoom-in"><img src={hindware} className="parry" />
                                        <div className="upto mt-4">Min 21% Off</div>
                                    </div></SwiperSlide>
                                    <SwiperSlide > <div className="round-1-swipe" data-aos="zoom-in"><img src={kerovit} className="parry" />
                                        <div className="upto mt-4">Upto 25% Off</div>
                                    </div></SwiperSlide>
                                    <SwiperSlide > <div className="round-1-swipe" data-aos="zoom-in"><img src={kohler} className="parry" />
                                        <div className="upto mt-4">Upto 21% Off</div>
                                    </div></SwiperSlide>
                                    <SwiperSlide > <div className="round-1-swipe" data-aos="zoom-in"><img src={hindware} className="parry" />
                                        <div className="upto mt-4">Upto 21% Off</div>
                                    </div></SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container mt-5">
                <div className="first-j d-flex">
                    {list4.map((index) => (
                        <div key={index.id}>
                            <img src={index.image} alt="" className="card-img" />
                            <div className="text-center fw-normal fs-6">{index.name}</div>
                        </div>
                    ))}
                </div>
            </div>


            <section>
                <h2 className="text-center text-secondary fw-normal mt-5">MOST LIKED PRODUCT</h2>
                <Swiper
                    modules={[Autoplay, Navigation]}
                    navigation={true}
                    loop={true}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={30}
                    slidesPerView={4}
                     breakpoints={{
                    425:{
                        slidesPerView:1,
                    },
                    768:{
                        slidesPerView:2,
                    },
                      1024:{spaceBetween:30,
                    slidesPerView:4,}
                }}
                    className="mySwiper mt-5" data-aos="zoom-out">
                    <SwiperSlide>
                        <div className="product-square col-lg-4 col-md-6 col-12  m1">
                            <div className="product-img-container">
                                <div className="percent flash fw-bold text-dark px-2"><p className="mt-2">15%</p></div>
                                <img src={kitchen2} alt="" className="product-img" />
                                <div className="heart-icon"><FaRegHeart /></div>
                            </div>
                            <div className="product-text d-flex flex-column px-2 py-2">
                                <div className="product-head">FUTURA RAINFALL KITCHEN SINK</div>
                                <div className="product-review mt-2">
                                    <FaRegStar />
                                    <FaRegStar />
                                    <FaRegStar />
                                    <FaRegStar />
                                    <FaRegStar />
                                </div>
                                <div className="product-rate mt-2">
                                    <div className="Rs fw-bold">₹12,081.50</div>
                                    <div className="off">16550.00</div>
                                </div>
                            </div>
                            <div className="product-bottom mx-5">
                                <button className="p-btn px-5 py-2">View Details</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide><div className="product-square col-lg-4 col-md-6 col-12  m1">
                        <div className="product-img-container">
                            <div className="percent flash fw-bold text-dark px-2"><p className="mt-2">37%</p></div>
                            <img src={kitchen2} alt="" className="product-img" />
                            <div className="heart-icon"><FaRegHeart /></div>
                        </div>
                        <div className="product-text d-flex flex-column px-2 py-2">
                            <div className="product-head">HINDWARE DRAINBOARD SINK</div>
                            <div className="product-review mt-2">
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                            </div>
                            <div className="product-rate mt-2">
                                <div className="Rs fw-bold">₹12,081.50</div>
                                <div className="off">16550.00</div>
                            </div>
                        </div>
                        <div className="product-bottom mx-5">
                            <button className="p-btn px-5 py-2">View Details</button>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide><div className="product-square col-lg-4 col-md-6 col-12  m1">
                        <div className="product-img-container">
                            <div className="percent flash fw-bold text-dark px-2"><p className="mt-2">15%</p></div>
                            <img src={kitchen1} alt="" className="product-img" />
                            <div className="heart-icon"><FaRegHeart /></div>
                        </div>
                        <div className="product-text d-flex flex-column px-2 py-2">
                            <div className="product-head">FUTURA RAINFALL KITCHEN SINK</div>
                            <div className="product-review mt-2">
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                            </div>
                            <div className="product-rate mt-2">
                                <div className="Rs fw-bold">₹12,081.50</div>
                                <div className="off">16550.00</div>
                            </div>
                        </div>
                        <div className="product-bottom mx-5">
                            <button className="p-btn px-5 py-2">View Details</button>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide><div className="product-square col-lg-4 col-md-6 col-12  m1">
                        <div className="product-img-container">
                            <div className="percent flash fw-bold text-dark px-2"><p className="mt-2">37%</p></div>
                            <img src={kitchen2} alt="" className="product-img" />
                            <div className="heart-icon"><FaRegHeart /></div>
                        </div>
                        <div className="product-text d-flex flex-column px-2 py-2">
                            <div className="product-head">FUTURA RAINFALL KITCHEN SINK</div>
                            <div className="product-review mt-2">
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                            </div>
                            <div className="product-rate mt-2">
                                <div className="Rs fw-bold">₹12,081.50</div>
                                <div className="off">16550.00</div>
                            </div>
                        </div>
                        <div className="product-bottom mx-5">
                            <button className="p-btn px-5 py-2">View Details</button>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide><div className="product-square col-lg-4 col-md-6 col-12  m1">
                        <div className="product-img-container">
                            <div className="percent flash fw-bold text-dark px-2"><p className="mt-2">15%</p></div>
                            <img src={kitchen1} alt="" className="product-img" />
                            <div className="heart-icon"><FaRegHeart /></div>
                        </div>
                        <div className="product-text d-flex flex-column px-2 py-2">
                            <div className="product-head">FUTURA RAINFALL KITCHEN SINK</div>
                            <div className="product-review mt-2">
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                            </div>
                            <div className="product-square col-lg-4 col-md-6 col-12  m1">
                                <div className="Rs fw-bold">₹12,081.50</div>
                                <div className="off">16550.00</div>
                            </div>
                        </div>
                        <div className="product-bottom mx-5">
                            <button className="p-btn px-5 py-2">View Details</button>
                        </div>
                    </div></SwiperSlide>
                </Swiper>
            </section>

            <div className="container-fluid">
                <Swiper
                    modules={[Autoplay]}
                    loop={true}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    className="mySwiper mt-5" data-aos="fade-up">
                    <SwiperSlide >
                        <img src={full1} alt="full" className="full" />
                    </SwiperSlide>
                    <SwiperSlide >
                        <img src={full2} alt="full" className="full" />
                    </SwiperSlide>
                </Swiper>
            </div>


            <section>
                <h1 className="text-center mt-5">DESIGNER BASIN AND MIRROR</h1>
                <div className="swipe-2 container-fluid mt-5">
                    <div className="row mx-3">
                        <div className="circles d-flex">
                            <div className="circle-1 col-lg-3 col-sm-6 col-md-4 mx-lg-3 mx-1 mx-md-2 ">
                                <div className="round-1"><h1>25% Off</h1></div>
                                <h5 className="mx-5 px-3"><br />Offer products</h5>
                            </div>
                            <div className="circle-2 col-lg-9 col-md-8 col-sm-6 mx-md-2 mx-3 d-flex">
                                <div className="round-1-swipe mx-lg-3" data-aos="fade-right"><img src={mirror1} className="parry" />
                                    <div className="upto mt-4">Upto 30% Off</div>
                                </div>
                                <div className="round-1-swipe mx-lg-3" data-aos="fade-right"><img src={mirror2} className="parry" />
                                    <div className="upto mt-4">Upto 15% Off</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container mt-5">
                <div className="first-j d-flex">
                    {list5.map((index) => (
                        <div key={index.id}>
                            <img src={index.image} alt="" className="card-img" />
                            <div className="text-center fw-normal fs-6">{index.name}</div>
                        </div>
                    ))}
                </div>
            </div>

            <section>
                <h2 className="text-center text-secondary fw-normal mt-5">MOST LIKED PRODUCT</h2>
                <Swiper
                    modules={[Autoplay, Navigation]}
                    navigation={true}
                    loop={true}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                    425:{
                        slidesPerView:1,
                    },
                    768:{
                        slidesPerView:2,
                    },
                    1024:{
                        spaceBetween:30,
                        slidesPerView:4,
                    }
                }}
                    className="mySwiper mt-5" data-aos="zoom-out">
                    <SwiperSlide><div className="product-square col-lg-4 col-md-6 col-12  m1">
                        <div className="product-img-container">
                            <div className="percent flash fw-bold text-dark px-2"><p className="mt-2">27%</p></div>
                            <img src={bowl1} alt="" className="product-img" />
                            <div className="heart-icon"><FaRegHeart /></div>
                        </div>
                        <div className="product-text d-flex flex-column px-2 py-2">
                            <div className="product-head">MEDEFF ROUND DESIGNER BASIN</div>
                            <div className="product-review mt-2">
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                            </div>
                            <div className="product-rate mt-2">
                                <div className="Rs fw-bold">₹12,081.50</div>
                            </div>
                        </div>
                        <div className="product-bottom mx-5">
                            <button className="p-btn px-5 py-2">View Details</button>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide><div className="product-square col-lg-4 col-md-6 col-12  m1">
                        <div className="product-img-container">
                            <div className="percent flash fw-bold text-dark px-2"><p className="mt-2">27%</p></div>
                            <img src={bowl2} alt="" className="product-img" />
                            <div className="heart-icon"><FaRegHeart /></div>
                        </div>
                        <div className="product-text d-flex flex-column px-2 py-2">
                            <div className="product-head">MEDEFF DESIGNER BASIN</div>
                            <div className="product-review mt-2">
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                            </div>
                            <div className="product-rate mt-2">
                                <div className="Rs fw-bold">₹15,130.00</div>
                            </div>
                        </div>
                        <div className="product-bottom mx-5">
                            <button className="p-btn px-5 py-2">View Details</button>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide><div className="product-square col-lg-4 col-md-6 col-12  m1">
                        <div className="product-img-container">
                            <div className="percent flash fw-bold text-dark px-2"><p className="mt-2">27%</p></div>
                            <img src={bowl4} alt="" className="product-img" />
                            <div className="heart-icon"><FaRegHeart /></div>
                        </div>
                        <div className="product-text d-flex flex-column px-2 py-2">
                            <div className="product-head">CLM-13 | RECTANGULAR</div>
                            <div className="product-review mt-2">
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                            </div>
                            <div className="product-rate mt-2">
                                <div className="Rs fw-bold">₹9,152.00</div>
                                <div className="off">11440.00</div>
                            </div>
                        </div>
                        <div className="product-bottom mx-5">
                            <button className="p-btn px-5 py-2">View Details</button>
                        </div>
                    </div></SwiperSlide>
                    <SwiperSlide><div className="product-square col-lg-4 col-md-6 col-12  m1">
                        <div className="product-img-container">
                            <div className="percent flash fw-bold text-dark px-2"><p className="mt-2">27%</p></div>
                            <img src={bowl4} alt="" className="product-img" />
                            <div className="heart-icon"><FaRegHeart /></div>
                        </div>
                        <div className="product-text d-flex flex-column px-2 py-2">
                            <div className="product-head">CGLED-010</div>
                            <div className="product-review mt-2">
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                            </div>
                            <div className="product-rate mt-2">
                                <div className="Rs fw-bold">₹8,047.20</div>
                                <div className="off">11496.00</div>
                            </div>
                        </div>
                        <div className="product-bottom mx-5">
                            <button className="p-btn px-5 py-2">View Details</button>
                        </div>
                    </div></SwiperSlide>
                </Swiper>
            </section>


            <section>
                <div className="container">
                    <h1 className="text-center text-dark fw-bold mt-5">Our Testimonial</h1>
                    <div className="row mx-5">
                        <Swiper
                            modules={[Autoplay]}
                            loop={true}
                            autoplay={{
                                delay: 1500,
                                disableOnInteraction: false,
                            }}

                             breakpoints={{
                    425:{
                        slidesPerView:1,
                    },
                    768:{
                        slidesPerView:2,
                    },
                    1024:{
                        spaceBetween:20,
                        slidesPerView:3,
                    }

                }}
                            className="mySwiper mt-5" data-aos="fade-up">
                            <SwiperSlide >
                                <div className="product-square col-lg-4 col-md-6 col-sm-12 m2">
                                    <div className="product-img-containernew pt-2 fw-bold px-3 text-center">
                                        <FaQuoteLeft />
                                        <p>ordered kohler modernlife edge wall hung toilet and thr product comes in very good condition.</p>
                                        <FaQuoteRight />

                                    </div>
                                    <div className="img-round"><img src={test1} alt="img" className="imgg" /></div>
                                    <div className="product-text d-flex flex-column mt-5">
                                        <div className="product-review text-center mt-3 mx-5 d-flex justify-content-center">
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                        </div>
                                        <div className="name mt-2 text-center fw-bold">Bijaya Mohanty</div>
                                        <div className="quality mt-2 text-center fw-bold">Good Quality Product</div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide >
                                <div className="product-square col-lg-4 col-md-6 col-sm-12 m2">
                                    <div className="product-img-containernew pt-2 fw-bold px-3 text-center">
                                        <FaQuoteLeft />
                                        <p>ordered kohler modernlife edge wall hung toilet and thr product comes in very good condition.</p>
                                        <FaQuoteRight />

                                    </div>
                                    <div className="img-round"><img src={test2} alt="img" className="imgg" /></div>
                                    <div className="product-text d-flex flex-column mt-5">
                                        <div className="product-review text-center mt-3 mx-5 d-flex justify-content-center">
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                        </div>
                                        <div className="name mt-2 text-center fw-bold">Bijaya Mohanty</div>
                                        <div className="quality mt-2 text-center fw-bold">Good Quality Product</div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide >
                                <div className="product-square col-lg-4 col-md-6 col-sm-12 m2">
                                    <div className="product-img-containernew pt-2 fw-bold px-3 text-center">
                                        <FaQuoteLeft />
                                        <p>ordered kohler modernlife edge wall hung toilet and thr product comes in very good condition.</p>
                                        <FaQuoteRight />

                                    </div>
                                    <div className="img-round"><img src={test3} alt="img" className="imgg" /></div>
                                    <div className="product-text d-flex flex-column mt-5">
                                        <div className="product-review text-center mt-3 mx-5 d-flex justify-content-center">
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                        </div>
                                        <div className="name mt-2 text-center fw-bold">Bijaya Mohanty</div>
                                        <div className="quality mt-2 text-center fw-bold">Good Quality Product</div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide >
                                <div className="product-square col-lg-4 col-md-6 col-sm-12 m2">
                                    <div className="product-img-containernew pt-2 fw-bold px-3 text-center">
                                        <FaQuoteLeft />
                                        <p>ordered kohler modernlife edge wall hung toilet and thr product comes in very good condition.</p>
                                        <FaQuoteRight />

                                    </div>
                                    <div className="img-round"><img src={test4} alt="img" className="imgg" /></div>
                                    <div className="product-text d-flex flex-column mt-5">
                                        <div className="product-review text-center mt-3 mx-5 d-flex justify-content-center">
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                        </div>
                                        <div className="name mt-2 text-center fw-bold">Bijaya Mohanty</div>
                                        <div className="quality mt-2 text-center fw-bold">Good Quality Product</div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide >
                                <div className="product-square col-lg-4 col-md-6 col-sm-12 m2">
                                    <div className="product-img-containernew pt-2 fw-bold px-3 text-center">
                                        <FaQuoteLeft />
                                        <p>ordered kohler modernlife edge wall hung toilet and thr product comes in very good condition.</p>
                                        <FaQuoteRight />

                                    </div>
                                    <div className="img-round"><img src={test5} alt="img" className="imgg" /></div>
                                    <div className="product-text d-flex flex-column mt-5">
                                        <div className="product-review text-center mt-3 mx-5 d-flex justify-content-center">
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                        </div>
                                        <div className="name mt-2 text-center fw-bold">Bijaya Mohanty</div>
                                        <div className="quality mt-2 text-center fw-bold">Good Quality Product</div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <h1 className="text-center text-dark fw-bold mt-5">Our Blogs</h1>
                    <div className="row mx-5">
                        <Swiper
                            modules={[Autoplay]}
                            loop={true}
                            autoplay={{
                                delay: 1500,
                                disableOnInteraction: false,
                            }}
                                        breakpoints={{
                    425:{
                        slidesPerView:1,
                    },
                    768:{
                        slidesPerView:2,
                    },
                    1024:{
                        spaceBetween:20,
                        slidesPerView:3,
                    }
                }}
                            className="mySwiper mt-5" data-aos="fade-up">
                            <SwiperSlide><div className="product-square-last col-lg-4 col-md-6 col-sm-12 m2">
                                <div className="product-img-containerlast">
                                    <img src={blog1} alt="" className="product-img px-4 py-1" />
                                </div>
                                <div className="product-text d-flex flex-column px-2 text-primary fw-bold">
                                    <p>Understanding the difference between P-Trap and S-Trap</p>
                                </div>
                                <div className="product-bottom px-2 fw-bold">
                                    <p>P-traps and S-traps are plumbing devices that create a water seal to prevent sewer gases </p>
                                </div>
                            </div></SwiperSlide>
                            <SwiperSlide><div className="product-square-last col-lg-4 col-md-6 col-sm-12 m2 ">
                                <div className="product-img-containerlast">
                                    <img src={blog1} alt="" className="product-img px-4 py-1" />
                                </div>
                                <div className="product-text d-flex flex-column px-2 text-primary fw-bold">
                                    <p>Understanding the difference between P-Trap and S-Trap</p>
                                </div>
                                <div className="product-bottom px-2 fw-bold">
                                    <p>P-traps and S-traps are plumbing devices that create a water seal to prevent sewer gases </p>
                                </div>
                            </div></SwiperSlide>
                            <SwiperSlide><div className="product-square-last col-lg-4 col-md-6 col-sm-12  m2">
                                <div className="product-img-containerlast">
                                    <img src={blog1} alt="" className="product-img px-4 py-1" />
                                </div>
                                <div className="product-text d-flex flex-column px-2 text-primary fw-bold">
                                    <p>Understanding the difference between P-Trap and S-Trap</p>
                                </div>
                                <div className="product-bottom px-2 fw-bold">
                                    <p>P-traps and S-traps are plumbing devices that create a water seal to prevent sewer gases </p>
                                </div>
                            </div></SwiperSlide>
                            <SwiperSlide><div className="product-square-last col-lg-4 col-md-6 col-sm-12 m2">
                                <div className="product-img-containerlast">
                                    <img src={blog1} alt="" className="product-img px-4 py-1" />
                                </div>
                                <div className="product-text d-flex flex-column px-2 text-primary fw-bold">
                                    <p>Understanding the difference between P-Trap and S-Trap</p>
                                </div>
                                <div className="product-bottom px-2 fw-bold">
                                    <p>P-traps and S-traps are plumbing devices that create a water seal to prevent sewer gases </p>
                                </div>
                            </div></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    );
}
