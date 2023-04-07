import React from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import watch from "../images/watch.jpg";
import watch2 from "../images/watch2.jpg";
import Container from "../components/common/Container";

const Checkout = () => {
  return (
    <>
      <Container class1="checkout-wrapper py-3 home-wrapper-2">
        <div className="row">
          <div className="col-7">
            <div className="checkout-left-data">
              <h3 className="website-name">Dev Corner</h3>
              <nav
                style={{ "--bs-breadcrumb-divider": ">" }}
                aria-label="breadcrumb"
              >
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/cart" className="text-dark total-price">
                      Home
                    </Link>
                  </li>
                  &nbsp; / &nbsp;
                  <li
                    className="breadcrumb-item total-price active"
                    aria-current="page"
                  >
                    Information
                  </li>
                  &nbsp; / &nbsp;
                  <li className="breadcrumb-item total-price active">
                    Shipping
                  </li>
                  &nbsp; / &nbsp;
                  <li
                    className="breadcrumb-item total-price active"
                    aria-current="page"
                  >
                    Payment
                  </li>
                </ol>
              </nav>
              <h4 className="title total">Contact Information</h4>
              <p className="user-details total">
                Dummy DummySurname (dummy@gmail.com)
              </p>
              <h4 className="mb-3">Shipping Address </h4>
              <form
                action=""
                className="d-flex gap-15 flex-wrap justify-content-between"
              >
                <div className="w-100">
                  <select
                    className="form-control form-select"
                    name=""
                    id=""
                    defaultValue={"DEFAULT"}
                  >
                    <option value="DEFAULT" disabled>
                      Select Country
                    </option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Address"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Apartment, Suite ,etc"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="City"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <select
                    className="form-control form-select"
                    name=""
                    id=""
                    defaultValue={"0"}
                  >
                    <option value="0" disabled>
                      Select State
                    </option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Zipcode"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to="/cart" className="text-dark">
                      <BiArrowBack /> &nbsp; Return to Cart
                    </Link>
                    <Link to="/cart" className="button">
                      Continue to Shipping
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-5">
            <div className="border-bottom py-4">
              <div className="d-flex gap-10 mb-3 align-items-center">
                <div className="w-75 d-flex gap-10 ">
                  <div className="w-25 position-relative">
                    <span className="badge bg-secondary text-white rounded-circle position-absolute">
                      2
                    </span>
                    <img className="image-fluid" src={watch2} alt="product" />
                  </div>
                  <div>
                    <h5 className="total" style={{ "font-size": "16px" }}>
                      Galaxy watch Active-2 (2022 edition)
                    </h5>
                    <p className="total-price">S / #2313122</p>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h5 className="total">$100</h5>
                </div>
              </div>

              <div className="d-flex gap-10 mb-3 align-items-center">
                <div className="w-75 d-flex gap-10 ">
                  <div className="w-25 position-relative">
                    <span className="badge bg-secondary text-white rounded-circle position-absolute">
                      1
                    </span>
                    <img className="image-fluid" src={watch} alt="product" />
                  </div>
                  <div>
                    <h5 className="total" style={{ "font-size": "16px" }}>
                      Galaxy watch Active (2020 edition)
                    </h5>
                    <p className="total-price">S / #2313122</p>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h5 className="total">$100</h5>
                </div>
              </div>
            </div>
            <div className="border-bottom py-4">
              <div className="d-flex justify-content-between align-items-center">
                <p className="total">Subtotal</p>
                <p className="total-price">$ 990</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0 total">Shipping</p>
                <p className="mb-0 total-price">$ 10</p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center border-bottom py-4">
              <h4 className="total">Total</h4>
              <h5 className="total-price">$ 1000</h5>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
