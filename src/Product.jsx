import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';
import page1 from "./images/page1.png";
import { useCart } from "react-use-cart";
import data from './Components/data.json';
import { useNavigate } from "react-router-dom";


export default function Product() {

  const { addItem } = useCart();
  const list = data.product;
  const navigate = useNavigate();
  return (
    <>
      <section>
        <div className="about-top p-3">
          <div className="container about">
            <div className="heading">
              <h2>COMMODE</h2>
              <div className="about-links mt-2">
                <Link to="/" className="text-black text-decoration-none">Home</Link>
                <Link to="" className="text-secondary text-decoration-none"> / Product</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <img src={page1} alt="commode" className="img-fluid w-100 commode" />
      </section>

      <section className='items d-flex justify-content-between m-2'>
        <div className="filter-card mt-3">
          <div className="filter-container p-2">
            <div className="filter-head mx-3"><h4>FILTER</h4></div>
            <hr className="mx-3"></hr>
            <div className="price-head mx-3"><h6>PRICE</h6>
              <label className="d-flex align-item-center">
                <div className="input"><input type="radio" name="option" value="option1" /></div>
                <div className="input-title">Low to High</div>
              </label>
              <label className=" d-flex align-item-center">
                <div className="input"><input type="radio" name="option" value="option1" /></div>
                <div className="input-title">High To Low</div>
              </label>
            </div>
            <hr className="mx-3"></hr>
          </div>
          <div className="price-head mx-3"><h6>BRAND</h6>
            <label className="d-flex align-item-center">
              <div className="input"><input type="radio" name="option" value="option1" /></div>
              <div className="input-title">HINDWARE SANITARYWARE</div>
            </label>
            <label className=" d-flex align-item-center">
              <div className="input"><input type="radio" name="option" value="option1" /></div>
              <div className="input-title">KOHLER SANITARYWARE</div>
            </label>
            <label className=" d-flex align-item-center">
              <div className="input"><input type="radio" name="option" value="option1" /></div>
              <div className="input-title">CERA SANITARYWARE</div>
            </label>
            <label className="d-flex align-item-center">
              <div className="input"><input type="radio" name="option" value="option1" /></div>
              <div className="input-title">PARRYWARE SANITARYWARE</div>
            </label>
            <label className=" d-flex align-item-center">
              <div className="input"><input type="radio" name="option" value="option1" /></div>
              <div className="input-title">JOHNSON BATHROOMS SANITARYWARE</div>
            </label>
            <label className="d-flex align-item-center">
              <div className="input"><input type="radio" name="option" value="option1" /></div>
              <div className="input-title">KEROVIT SANITARYWARE</div>
            </label>
          </div>
          <hr className="mx-3"></hr>
          <div className="price-head mx-3"><h6>CATEGORIES</h6>
            <label className="d-flex align-item-center">
              <div className="input"><input type="radio" name="option" value="option1" /></div>
              <div className="input-title">KOHLER BATHROOM COMMODE</div>
            </label>
            <label className=" d-flex align-item-center">
              <div className="input"><input type="radio" name="option" value="option1" /></div>
              <div className="input-title">KOHLER BATHROOM COMMODES</div>
            </label>
            <label className=" d-flex align-item-center">
              <div className="input"><input type="radio" name="option" value="option1" /></div>
              <div className="input-title">KOHLER WALL MOUNTED TOILET</div>
            </label>
            <label className="d-flex align-item-center">
              <div className="input"><input type="radio" name="option" value="option1" /></div>
              <div className="input-title">KOHLER WALL MUNTED COMMODE</div>
            </label>
            <hr className="mx-3"></hr>
          </div>
          <div className="price-head mx-3"><h6>COLOUR</h6>
            <label className="d-flex align-item-center">
              <div className="input"><input type="radio" name="option" value="option1" className="square-radio" /></div>
              <div className="input-title px-1">WHITE</div>
            </label>
            <label className="d-flex align-item-center">
              <div className="input"><input type="radio" name="option" value="option1" className="square-radio" /></div>
              <div className="input-title px-1">MATTE WHITE</div>
            </label>
            <label className="d-flex align-item-center">
              <div className="input"><input type="radio" name="option" value="option1" className="square-radio" /></div>
              <div className="input-title px-1">BLACK</div>
            </label>
            <label className="d-flex align-item-center">
              <div className="input"><input type="radio" name="option" value="option1" className="square-radio" /></div>
              <div className="input-title px-1">MATTE BLACK</div>
            </label>
            <label className="d-flex align-item-center">
              <div className="input"><input type="radio" name="option" value="option1" className="square-radio" /></div>
              <div className="input-title px-1">PEACOCK GREEN</div>
            </label>
            <label className="d-flex align-item-center">
              <div className="input"><input type="radio" name="option" value="option1" className="square-radio" /></div>
              <div className="input-title px-1">THUNDER GREY</div>
            </label>
            <label className="d-flex align-item-center">
              <div className="input"><input type="radio" name="option" value="option1" className="square-radio" /></div>
              <div className="input-title px-1">INDIGO</div>
            </label>
            <label className="d-flex align-item-center">
              <div className="input"><input type="radio" name="option" value="option1" className="square-radio" /></div>
              <div className="input-title px-1">CASHMERE</div>
            </label>
            <label className="d-flex align-item-center">
              <div className="input"><input type="radio" name="option" value="option1" className="square-radio" /></div>
              <div className="input-title px-1">SNOW WHITE</div>
            </label>
          </div>
        </div>

        <div className="side-cards mt-3">
          <div className="row grid">
            {list.map((index) => (
              <div className="product-square-page col-lg-2 col-md-4 col-sm-6" key={index.id}>
                <div className="product-img-container-page">
                  <img src={index.img} alt="" className="product-img" />
                </div>
                <div className="product-text d-flex flex-column px-2">
                  <div className="product-head-page">{index.name}</div>
                  <p className='text-secondary'>{index.text}</p>
                  <div className="product-rate">
                    <div className="Rs fw-bold">{index.price}</div>
                    <div className="off">{index.rate}</div>
                  </div>
                </div>
                <div className="product-bottom mx-lg-5 mx-sm-1 mx-md-2">
                  <button
                    className="btn btn-success mt-2"
                    onClick={() => {
                      addItem({
                        id: index.id,
                        name: index.name,
                        img: index.img,
                        price: index.price
                      });
                      Swal.fire({
                        icon: 'success',
                        title: 'Added to Cart',
                        text: `${index.name} has been added!`,
                        timer: 1500,
                        showConfirmButton: false,
                      });

                      navigate("/Cart");
                    }}
                  >
                    + Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>



    </>
  );
}