import { IoLocationSharp } from "react-icons/io5";
import { MdMail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { BiCurrentLocation } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { HiOutlineBell } from "react-icons/hi2";
import { IoPersonOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "./images/logo.png";
import Dropdown from 'react-bootstrap/Dropdown';
import { FaRegHeart } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import { useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useNavigate } from "react-router-dom";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';






export default function Navbarr() {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const handleModalShow = () => setShowModal(true);
    const handleModalClose = () => setShowModal(false);
    const handleOffcanvasShow = () => setShowOffcanvas(true);
    const handleOffcanvasClose = () => setShowOffcanvas(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [activeTab, setActiveTab] = useState("signup");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSignup = () => {
        if (email && password) {
            localStorage.setItem('user', JSON.stringify({ email, password }));
            alert('Signup successful! Now login');
            setActiveTab("login");
        } else {
            alert('Please enter all fields');
        }
    };

    useEffect(() => {
        const loginStatus = localStorage.getItem('isLoggedIn');
        if (loginStatus === 'true') setIsLoggedIn(true);
    }, []);


    const handleLogin = () => {
        const storedUser = JSON.parse(localStorage.getItem('user'));

        if (storedUser && storedUser.email === email && storedUser.password === password) {
            localStorage.setItem('isLoggedIn', true);
            setShowModal(false);
            alert('Login successful!');
            navigate('/')
        } else {
            alert('Invalid credentials');
        }
    };
    return (
        <>
            <div className="Top container-fluid p-4">
                <div className="row m-3">
                    <div className="left col-lg-8 col-sm-6 d-flex justify-content-evenly ">
                        <div className=" location">
                            <IoLocationSharp /></div>
                        <div className="message">
                            <MdMail />
                            <span>plumbingbazzar@gmail.com</span>
                        </div>
                        <div className="phone">
                            <FaPhone />
                            <span>18002023352</span>
                        </div>
                        <div className="zoom"><BiCurrentLocation /></div>
                    </div>
                    <div className="right col-lg-4 col-sm-6 d-flex justify-content-center">
                        <div className="facebook"><FaFacebookF /></div>
                        <div className="youtube"><FaYoutube /></div>
                        <div className="instagram"><FaInstagram /></div>
                    </div>
                </div>
            </div>


            <section className="back">
                <div className="container mx-5  px-5 nav">
                    <Navbar expand="lg">
                        <Container>
                            <Navbar.Brand><img src={logo} className="img-fluid logo" alt="logo" /></Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto navs">
                                    <div className="nav-left d-flex justify-content-between">
                                        <NavLink to="/" className="text-black text-decoration-none align-self-center">Home</NavLink>
                                        <NavLink to="/About" className="text-black text-decoration-none align-self-center">About Us</NavLink>
                                        <NavDropdown title="Products" id="basic-nav-dropdown" className="align-self-center">
                                            {['end'].map(
                                                (direction) => (

                                                    <NavDropdown title=" SANITARYWARE" id="basic-nav-dropdown"
                                                        key={direction}
                                                        drop={direction}
                                                    >
                                                        <Dropdown.Item eventKey="1">COMMODE</Dropdown.Item>
                                                        <Dropdown.Item eventKey="2">WASH BASIN</Dropdown.Item>
                                                        <Dropdown.Item eventKey="3">URINAL AND DIVISON PLATE</Dropdown.Item>
                                                        <Dropdown.Item eventKey="4">CONCEALED CISTERN AND FLUSHPLATE</Dropdown.Item>
                                                        <Dropdown.Item eventKey="4">CISTERNS</Dropdown.Item>
                                                        <Dropdown.Item eventKey="4">SOFT PRESS VALUE</Dropdown.Item>
                                                    </NavDropdown>
                                                ),)}
                                            {['end'].map(
                                                (direction) => (
                                                    <NavDropdown title=" FAUCETS" id="basic-nav-dropdown" className=""
                                                        key={direction}
                                                        drop={direction}
                                                    >
                                                        <Dropdown.Item eventKey="1">KITCHEN FAUCET</Dropdown.Item>
                                                        <Dropdown.Item eventKey="2">SENSOR FAUCET</Dropdown.Item>
                                                        <Dropdown.Item eventKey="3">DIVERTER/PLATE/SPOUT</Dropdown.Item>
                                                        <Dropdown.Item eventKey="4">BASIN FAUCET</Dropdown.Item>
                                                        <Dropdown.Item eventKey="4">SHOWER AND SHOWER ARM</Dropdown.Item>
                                                        <Dropdown.Item eventKey="4">HEALTH FAUCET / JET SPRAY</Dropdown.Item>
                                                        <Dropdown.Item eventKey="4">CONCEAT VALVE AND KIT</Dropdown.Item>
                                                        <Dropdown.Item eventKey="4">BIB COCK</Dropdown.Item>
                                                        <Dropdown.Item eventKey="4">ANGEL VALVE</Dropdown.Item>
                                                        <Dropdown.Item eventKey="4">FITTINGS</Dropdown.Item>
                                                        <Dropdown.Item eventKey="4">BATHTUB FAUCET</Dropdown.Item>
                                                        <Dropdown.Item eventKey="4">WALL MIXER</Dropdown.Item>
                                                        <Dropdown.Item eventKey="4">WASHING MACHINE/GARDEN TAP</Dropdown.Item>
                                                        <Dropdown.Item eventKey="4">TWO WAY BIB COCK</Dropdown.Item>
                                                    </NavDropdown>
                                                ),)}
                                            {['end'].map(
                                                (direction) => (

                                                    <NavDropdown title=" ACCESSORIES" id="basic-nav-dropdown" className=""
                                                        key={direction}
                                                        drop={direction}
                                                    >
                                                        <Dropdown.Item eventKey="1">TOWEL RING / ROD / RACK</Dropdown.Item>
                                                        <Dropdown.Item eventKey="2">SOAP DISH</Dropdown.Item>
                                                        <Dropdown.Item eventKey="3">TUMBLER HOLDER</Dropdown.Item>
                                                        <Dropdown.Item eventKey="4">ROBE HOOK</Dropdown.Item>
                                                        <Dropdown.Item eventKey="4">SHELF</Dropdown.Item>
                                                        <Dropdown.Item eventKey="4">PAPER HOLDER</Dropdown.Item>
                                                        <Dropdown.Item eventKey="4">SOAP DISPENSER</Dropdown.Item>
                                                        <Dropdown.Item eventKey="4">OTHERS</Dropdown.Item>
                                                    </NavDropdown>
                                                ),)}
                                            {['end'].map(
                                                (direction) => (
                                                    <NavDropdown title=" KITCHEN SINKS" id="basic-nav-dropdown" className=""
                                                        key={direction}
                                                        drop={direction}
                                                    >
                                                        <Dropdown.Item eventKey="1">SINGLE BOWL </Dropdown.Item>
                                                        <Dropdown.Item eventKey="2">MULTIPLE BOWL</Dropdown.Item>
                                                        <Dropdown.Item eventKey="3">DRAINBOARD SINK</Dropdown.Item>
                                                        <Dropdown.Item eventKey="4">MODULAR SINK</Dropdown.Item>
                                                    </NavDropdown>
                                                ),)}

                                            <NavDropdown title=" VALVES" id="basic-nav-dropdown" className=""
                                            >
                                            </NavDropdown>
                                            {['end'].map(
                                                (direction) => (

                                                    <NavDropdown title=" DESIGN BASINS AND MIRRORS" id="basic-nav-dropdown" className=""
                                                        key={direction}
                                                        drop={direction}
                                                    >
                                                        <Dropdown.Item eventKey="1">PREMIUM LED MIRROR</Dropdown.Item>
                                                        <Dropdown.Item eventKey="2">LUXURY LED MIRROR</Dropdown.Item>
                                                        <Dropdown.Item eventKey="3">ROUND BASIN</Dropdown.Item>
                                                        <Dropdown.Item eventKey="4">RECTANGLE BASIN</Dropdown.Item>
                                                        <Dropdown.Item eventKey="4">OVAL BASIN</Dropdown.Item>
                                                        <Dropdown.Item eventKey="4">BOWL BASIN</Dropdown.Item>
                                                        <Dropdown.Item eventKey="4">TEXTURE BASIN</Dropdown.Item>
                                                        <Dropdown.Item eventKey="4">FREE STANDING BASIN</Dropdown.Item>
                                                    </NavDropdown>
                                                ),)}
                                        </NavDropdown>
                                        <NavLink to="/Contact" className="text-black text-decoration-none align-self-center">Contact</NavLink>
                                    </div>
                                    <div className="nav-right d-flex justify-content-end">
                                        <div >

                                            {isLoggedIn ? (
                                                <Button className="btn btn-danger" onClick={() => {
                                                    localStorage.removeItem('isLoggedIn');
                                                    setIsLoggedIn(false);
                                                    navigate('/');
                                                }}>
                                                    Logout
                                                </Button>
                                            ) : (
                                                <Button className="button btn1 py-2 px-2" onClick={handleModalShow}>
                                                    Join Us/Log In
                                                </Button>
                                            )}
                                            <Modal show={showModal} onHide={handleModalClose} centered size="lg">
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Credentials</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <div className="loginbtns d-flex align-items-center justify-content-center">
                                                        <Button
                                                            className={`btn-1 ${activeTab === "signup" ? "btn-success" : "btn-outline-primary"}`}
                                                            onClick={() => setActiveTab("signup")}
                                                        >
                                                            SignUp</Button>
                                                        <Button
                                                            className={`btn-2 ${activeTab === "login" ? "btn-success" : "btn-outline-primary"}`}
                                                            onClick={() => setActiveTab("login")}
                                                        >
                                                            Login
                                                        </Button>
                                                    </div>
                                                    <Tabs activeKey={activeTab} onSelect={(k) => setActiveTab(k)} className="d-none">
                                                        <Tab eventKey="signup" title="Login">

                                                            {activeTab === "signup" && (
                                                                <Form>
                                                                    <Row className="mb-3 mt-5">
                                                                        <Form.Group as={Col} controlId="formGridEmail">
                                                                            <Form.Label>Email</Form.Label>
                                                                            <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                                                                        </Form.Group>
                                                                        <Form.Group as={Col} controlId="formGridPassword">
                                                                            <Form.Label>Password</Form.Label>
                                                                            <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                                                                        </Form.Group>
                                                                    </Row>
                                                                    <Form.Group className="mb-3" controlId="formGridAddress1">
                                                                        <Form.Label>Full Name</Form.Label>
                                                                        <Form.Control placeholder="Full Name" />
                                                                    </Form.Group>
                                                                    <Form.Group className="mb-3" controlId="formGridAddress2">
                                                                        <Form.Label>Address</Form.Label>
                                                                        <Form.Control placeholder="Apartment, studio, or floor" />
                                                                    </Form.Group>
                                                                    <Row className="mb-3">
                                                                        <Form.Group as={Col} controlId="formGridCity">
                                                                            <Form.Label>City</Form.Label>
                                                                            <Form.Control />
                                                                        </Form.Group>
                                                                        <Form.Group as={Col} controlId="formGridState">
                                                                            <Form.Label>State</Form.Label>
                                                                            <Form.Select defaultValue="Choose...">
                                                                                <option>Choose...</option>
                                                                                <option>...</option>
                                                                            </Form.Select>
                                                                        </Form.Group>
                                                                        <Form.Group as={Col} controlId="formGridZip">
                                                                            <Form.Label>Zip</Form.Label>
                                                                            <Form.Control />
                                                                        </Form.Group>
                                                                    </Row>
                                                                    <Form.Group className="mb-3" id="formGridCheckbox">
                                                                        <Form.Check type="checkbox" label="Check me out" />
                                                                    </Form.Group>
                                                                    <Button className="btn btn-primary" onClick={handleSignup}>Sign Up</Button>
                                                                </Form>
                                                            )}
                                                        </Tab>
                                                        <Tab eventKey="login" title="Login">
                                                            {activeTab === "login" && (
                                                                <Form>
                                                                    <Form.Group className="mb-3" controlId="formGroupEmail">
                                                                        <Form.Label>Email address</Form.Label>
                                                                        <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                                                                    </Form.Group>
                                                                    <Form.Group className="mb-3" controlId="formGroupPassword">
                                                                        <Form.Label>Password</Form.Label>
                                                                        <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                                                                    </Form.Group>
                                                                    <Button className="btn btn-success" onClick={handleLogin}>Login</Button>
                                                                </Form>
                                                            )}
                                                        </Tab>
                                                    </Tabs>
                                                </Modal.Body>
                                            </Modal>
                                        </div>
                                        <div className="search icon"><IoSearchOutline /></div>
                                        <div className="wishlist icon "><FaRegHeart /></div>
                                        <div className="notification icon "><HiOutlineBell /></div>
                                        <div className="profile icon "><IoPersonOutline /></div>
                                        <div className="cart icon"><FiShoppingCart onClick={handleOffcanvasShow} className="me-2" />
                                            {['end'].map((placement, idx) => (
                                                <Offcanvas key={idx} placement={placement} name={placement} show={showOffcanvas} onHide={handleOffcanvasClose}>
                                                    <Offcanvas.Header closeButton>
                                                        <Offcanvas.Title>Cart</Offcanvas.Title>
                                                    </Offcanvas.Header>
                                                    <Offcanvas.Body>
                                                        <Button className="btn btn-success" onClick={() =>
                                                            navigate('/')}
                                                        >Checkout
                                                        </Button>
                                                    </Offcanvas.Body>
                                                </Offcanvas>
                                            ))}
                                        </div>
                                    </div>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
            </section>
        </>
    );
}

