import fplumber from "./images/fplumber.png";
import app from "./images/app.png";
import google from "./images/google.png";
import logo from "./images/logo.png";
import { IoLocationSharp } from "react-icons/io5";
import { MdMail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";



export default function Footer() {
  return (
   <>
   <section className="last-section mar">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-4" data-aos="fade-right">
                            <img src={fplumber} alt="plumber" className="img-fluid" />
                        </div>
                        <div className="col-lg-8 col-md-8" data-aos="fade-down">
                            <div className="text-part text-center">
                                <h1>
                                    <p className="text-white">Plumbing bazaar</p>
                                    <p className="text-primary">Affordable e-commerce platform for your <br></br>all sanitary needs</p>
                                </h1>
                                <p className="text-white fw-bold">Welcome to Plumbing Bazzar, where we redefine cleanliness & <br></br> elegance in every space with a passion for quality, innovation & <br></br> authenticity. We strive to revolutionize sanitaryware <br></br> industry one fixture at a time.</p>
                            </div>
                            <div className="logos d-flex mx-5 justify-content-center" data-aos="fade-up">
                                <div className="app"><img src={app} alt="app" /></div>
                                <div className="google"><img src={google} alt="app" /></div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className="footer-section pt-5 pb-5" id="dark-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="plum-logo"><img src={logo} alt="logo" className="img-fluid logo1"/></div>
                            <div className="logo-content text-white">
                                <p>We are in the business of sanitary providers and all types of plumbing products. Check out our best-selling brands.</p>
                                <div className="news">
                                    <div className="news-head text-white"><h5>Subscribe to NewsLetter</h5></div>
                                    <div className="email d-flex justify-content-between">
                                        <div className="email-text text-black mx-3 py-1">Enter email</div>
                                        <div className="mx-1 py-1"><button  className="email-btn px-3">Send</button></div>
                                    </div>
                                    <div className="news-bottom text-secondary">
                                        <p>We will never share your email with anyone else</p>
                                    </div>
                                </div>
                            </div>
                            <div className="follow">
                                <div className="follow-head">
                                    <h2 className="text-white">Follow us</h2>
                                </div>
                                <div className="follow-logo d-flex text-white fw-bold">
                                    <div className="f"><FaFacebookF /></div>
                                    <div className="i"><FaInstagram /></div>
                                    <div className="y"><FaYoutube /></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 text-white">
                            <div className="link-head"><h2>Useful Links</h2></div>
                            <hr></hr>
                            <ul className="fw-bold">
                               <li><a href="./" className="text-white text-decoration-none">Home</a></li>
                                <li><a href="./About" className="text-white text-decoration-none">About Us</a></li>
                                 <li><a href="./Contact" className="text-white text-decoration-none">Contact</a></li>

                            </ul>
                        </div>
                        <div className="col-lg-3 text-white">
                            <div className="link-head"><h2>Quick Links</h2></div>
                            <hr></hr>
                            <ul className="fw-bold">
                                <li>Login</li>
                                <li>Register</li>
                            </ul>
                        </div>
                        <div className="col-lg-3 text-white">
                            <div className="link-head"><h2>Contact</h2></div>
                            <hr></hr>
                            <div className="add">
                                <div className="address d-flex mt-3">
                                    <div className="address-logo"> <IoLocationSharp /></div>
                                    <div className="address-content px-2">BARGARH , Odisha</div>
                                </div>
                                <div className="address d-flex mt-3">
                                    <div className="address-logo"><FaPhone /></div>
                                    <div className="address-content px-2">1800234567</div>
                                </div>
                                <div className="address d-flex mt-3">
                                    <div className="address-logo"><MdMail /></div>
                                    <div className="address-content px-2">plumbingbazzar@gmail.com</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
   </>
  );
}
