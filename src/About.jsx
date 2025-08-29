import { Link } from 'react-router-dom';


export default function About() {

  return (
    <>
      <section className=" mar">
        <div className="about-top">
          <div className="container about">
            <div className="heading">
              <h1>ABOUT US</h1>
              <div className="about-links mt-2">
                <Link to="/" className="text-black text-decoration-none">Home</Link>
                <Link to="/About" className="text-secondary text-decoration-none"> / About Us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mt-5 py-3">
          <div className="about-text text-center"><h2>About Us</h2></div>
          <div className="text-div-1 mt-5 text-center">
            "Welcome
            to Plumbing Bazzar, having"
            <b>GST NO.
              21AAKCG0445N1ZM(GRIHASTHI PIPE AND SANITARY PVT LTD);</b>
            your premier multi- brand e-commerce platform dedicated to
            all your sanitary ware and faucet needs. We believe that quality plumbing product
            should be accessible to everyone, which is why we’ve curated an extensive
            selection of top brands, ensuring you find exactly what you need for your home
            or project.

          </div>
          <div className="text-div-2 mt-5 text-center">
            At Plumbing Bazzar, we are passionate about providing
exceptional service and expertise. Our team consists of plumbing professionals
who understand the intricacies of our product and are
committed to helping you make informed choices .Whether you are home owner, contractor or designer, our
user friendly platform makes it easy to browse, compare and purchase high
quality sanitary ware and faucet with just a few click.

          </div>
          <div className="text-div-3 mt-5 text-center">
Our mission is simple; to provide our customer with the
best selection of sanitary ware and faucets competitive prices. We understand that
choosing the right product for your home or project.
          </div>
          <div className="text-div-4 mt-5 text-center">
We prioritize customer satisfaction and strive to deliver
not only superior products but also a seamless shopping experience. What sets
Plumbing Bazzar apart is our commitment to quality and customer satisfaction.
We’re passionate about Plumbing and committed to making your experience
seamless and enjoyable.
          </div>
          <div className="text-div-5 mt-5 text-center">
We’re
more than just an online store; we’re your partners in creating beautiful,
functional space. Join us on this journey ,and let PlumbingBazzar help you transform your plumbing projects in to reality.
          </div>
        </div>
      </section>
    </>
  );
}