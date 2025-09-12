
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
            <section className="footer-section mt-5 pt-5 pb-5" id="dark-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="plum-logo"><img src={logo} alt="logo" className="img-fluid logo1"/></div>
                            <div className="logo-content text-white">
                                <p>This platform is dedicated to bridging the gap between citizens and authorities. By reporting civic issues, you play an active role in creating cleaner streets, safer neighborhoods, and stronger communities. Together, we can transform small complaints into meaningful change</p>
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
                                    <div className="address-logo"><FaPhone /></div>
                                    <div className="address-content px-2">1800234567</div>
                                </div>
                                <div className="address d-flex mt-3">
                                    <div className="address-logo"><MdMail /></div>
                                    <div className="address-content px-2">civicissues@gmail.com</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
   </>
  );
}
