import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { BiCurrentLocation } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "./images/logo.png";
import flag from "./images/flag.png"
import Dropdown from 'react-bootstrap/Dropdown';
import { NavLink } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from "react-router-dom";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';






export default function Navbarr() {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const handleModalShow = () => setShowModal(true);
    const handleAdminModalShow = () => setShowAdminModal(true);
    const handleModalClose = () => setShowModal(false);
    const handleAdminModalClose = () => setShowAdminModal(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [activeTab, setActiveTab] = useState("signup");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showAdminModal, setShowAdminModal] = useState(false);
    const [adminEmail, setAdminEmail] = useState("");
    const [adminPassword, setAdminPassword] = useState("");
const [fullName, setFullName] = useState('');
const [phone, setPhone] = useState('');
const [address, setAddress] = useState('');
const [city, setCity] = useState('');
const [stateName, setStateName] = useState(''); 
const [zip, setZip] = useState('');
const [aadhar, setAadhar] = useState('');



const handleSignup = () => {
  if (email && password) {
    const userData = {
      email,
      password,
      fullName,
      phone,
      address,
      city,
      stateName,
      zip,
      aadhar,
    };
    localStorage.setItem("user", JSON.stringify(userData));
    alert("Signup successful! Now login");
    setActiveTab("login");
  } else {
    alert("Please enter all fields");
  }
};


    useEffect(() => {
        const loginStatus = localStorage.getItem('isLoggedIn');
        if (loginStatus === 'true') setIsLoggedIn(true);
    }, []);

// --- Citizen Login ---
const handleLogin = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (storedUser && storedUser.email === email && storedUser.password === password) {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("role", "citizen");  
    setIsLoggedIn(true);
    setShowModal(false);
    alert("Citizen login successful!");
    navigate("/citizen-dashboard"); 
  } else {
    alert("Invalid credentials");
  }
};


const handleAdminLogin = () => {
  if (adminEmail === "admin@example.com" && adminPassword === "admin123") {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("role", "admin");   
    setIsLoggedIn(true);
    setShowAdminModal(false);
    alert("Admin login successful!");
    navigate("/admin-dashboard");
  } else {
    alert("Invalid admin credentials!");
  }
};


<Button
  className="btn btn-danger"
  onClick={() => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("role"); 
    setIsLoggedIn(false);
    navigate("/");
  }}
>
  Logout
</Button>

    return (
        <>
            <div className="Top container-fluid">
                <div className="row m-3">
                    <div className="left col-lg-8 col-sm-6 d-flex justify-content-evenly">
                        <div className=" location mt-3">
                            <IoLocationSharp /></div>
                        <div className="message">
                            <img src={flag} className="img-fluid log" alt="logo" />
                            <span>GOVERNMENT OF INDIA</span>
                        </div>
                        <div className="phone mt-3">
                            <FaPhone />
                            <span className="mt-3">18002023352</span>
                        </div>
                        <div className="zoom mt-3"><BiCurrentLocation /></div>
                    </div>
                    <div className="right col-lg-4 col-sm-6 d-flex justify-content-center mt-3">
                        <div className="facebook"><FaFacebookF /></div>
                        <div className="youtube"><FaYoutube /></div>
                        <div className="instagram"><FaInstagram /></div>
                    </div>
                </div>
            </div>


            <section className="back">
                <div className="container mx-5 my-5  px-5 nav">
                    <Navbar expand="lg">
                        <Container>
                            <Navbar.Brand><img src={logo} className="img-fluid logo" alt="logo" /></Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto navs">
                                    <div className="nav-left d-flex justify-content-between">
                                        <NavLink to="/" className="text-black text-decoration-none align-self-center">Home</NavLink>
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
                                                <>
                                                    <Button className="button btn1 py-2 px-5 mx-3" onClick={handleModalShow}>
                                                        Citizen Login
                                                    </Button>
                                                    <Button className="button btn-warning py-2 px-5 mx-3" onClick={handleAdminModalShow} >
                                                        Admin Login
                                                    </Button>
                                                </>
                                            )}

                                            <Modal
                                                show={showAdminModal}
                                                onHide={handleAdminModalClose}
                                                centered
                                                size="md"
                                            >
                                                <Modal.Header closeButton>
                                                    <Modal.Title>Admin Login</Modal.Title>
                                                </Modal.Header>
                                                <Modal.Body>
                                                    <Form>
                                                        <Form.Group className="mb-3" controlId="adminEmail">
                                                            <Form.Label>Email address</Form.Label>
                                                            <Form.Control
                                                                type="email"
                                                                placeholder="Enter admin email"
                                                                onChange={(e) => setAdminEmail(e.target.value)}
                                                            />
                                                        </Form.Group>
                                                        <Form.Group className="mb-3" controlId="adminPassword">
                                                            <Form.Label>Password</Form.Label>
                                                            <Form.Control
                                                                type="password"
                                                                placeholder="Password"
                                                                onChange={(e) => setAdminPassword(e.target.value)}
                                                            />
                                                        </Form.Group>
                                                        <Button className="btn btn-primary" onClick={handleAdminLogin}>
                                                            Login
                                                        </Button>
                                                    </Form>
                                                </Modal.Body>
                                            </Modal>
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
    {/* Full Name */}
    <Form.Group className="mb-3" controlId="formFullName">
      <Form.Label>Full Name</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter your full name"
        onChange={(e) => setEmail(e.target.value)} // you might want separate state like setFullName
      />
    </Form.Group>

    {/* Email */}
    <Form.Group className="mb-3" controlId="formEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control
        type="email"
        placeholder="Enter email"
        onChange={(e) => setEmail(e.target.value)}
      />
    </Form.Group>

    {/* Password */}
    <Form.Group className="mb-3" controlId="formPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control
        type="password"
        placeholder="Enter password"
        onChange={(e) => setPassword(e.target.value)}
      />
    </Form.Group>

    {/* Phone */}
    <Form.Group className="mb-3" controlId="formPhone">
      <Form.Label>Phone Number</Form.Label>
      <Form.Control type="text" placeholder="Enter phone number" />
    </Form.Group>

    {/* Address */}
    <Form.Group className="mb-3" controlId="formAddress">
      <Form.Label>Address</Form.Label>
      <Form.Control placeholder="Street / Apartment / Area" />
    </Form.Group>

    <Row className="mb-3">
      <Form.Group as={Col} controlId="formCity">
        <Form.Label>City</Form.Label>
        <Form.Control />
      </Form.Group>

      <Form.Group as={Col} controlId="formState">
        <Form.Label>State</Form.Label>
        <Form.Select defaultValue="Choose...">
          <option>Choose...</option>
          <option>Delhi</option>
          <option>Mumbai</option>
          <option>Bangalore</option>
          <option>Kolkata</option>
          <option>Other</option>
        </Form.Select>
      </Form.Group>

      <Form.Group as={Col} controlId="formZip">
        <Form.Label>Zip</Form.Label>
        <Form.Control />
      </Form.Group>
    </Row>

    {/* Aadhar / ID (optional) */}
    <Form.Group className="mb-3" controlId="formAadhar">
      <Form.Label>Aadhar / ID Number</Form.Label>
      <Form.Control type="text" placeholder="Enter ID number" />
    </Form.Group>

    <Button className="btn btn-primary" onClick={handleSignup}>
      Sign Up
    </Button>
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

