import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

export default function Contact() {
    return (
        <>
            <section className="mar">
                <div className="about-top">
                    <div className="container about">
                        <div className="heading">
                            <h1>CONTACT US</h1>
                            <div className="about-links mt-2">
                                <Link to="/" className="text-black text-decoration-none">Home</Link>
                                <Link to="/Contact" className="text-secondary text-decoration-none"> / Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-5">
                <div className="container">
                    <Form>
                    <Row className="mb-3">
                        <Form.Group as={Col } controlId="formGridEmail">
                            <Form.Label>Your Name*</Form.Label>
                            <Form.Control type="email" placeholder="Your Name" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Your Email*</Form.Label>
                            <Form.Control type="password" placeholder="Your Email" />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Your Number*</Form.Label>
                            <Form.Control type="email" placeholder="Your Number" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Your Website URL*</Form.Label>
                            <Form.Control type="password" placeholder="Your Website URL" />
                        </Form.Group>
                    </Row>

                      <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Your Message*</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Form.Group>
                    </Row>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                </div>
            </section>
        </>
    );
}