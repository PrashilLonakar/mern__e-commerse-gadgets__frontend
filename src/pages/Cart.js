import React from "react";
import BreadCrumbs from "../components/common/BreadCrumbs";
import Meta from "../components/common/Meta";
import watch from "../images/watch.jpg";
import watch2 from "../images/watch2.jpg";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Container from "../components/common/Container";

const Cart = () => {
  return (
    <>
      <Meta title={"Cart"}></Meta>
      <BreadCrumbs title="Cart" />
      <Container class1="cart-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            {/* <div className="cart-header d-flex justify-content-between align-items-center">
                <h4>Product</h4>
                <h4>Price</h4>
                <h4>Quantity</h4>
                <h4>Total</h4>
              </div> */}
            <table className="table table-borderless">
              <thead className="cart-header">
                <tr>
                  <th style={{ width: "40%" }} scope="col">
                    <span>Product</span>
                  </th>
                  <th style={{ width: "15%" }} scope="col">
                    Price
                  </th>
                  <th style={{ width: "30%" }} scope="col">
                    Quantity
                  </th>
                  <th style={{ width: "15%" }} scope="col">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody className="cart-data mb-2">
                <tr>
                  <td style={{ width: "40%" }}>
                    <div className="d-flex align-items-center gap-15">
                      <img width="110px" src={watch} alt="product-image" />
                      <div className="td-product">
                        <h5 className="title">
                          Kids Headphones bulk 10 pack multi colored for
                          students.
                        </h5>
                        <p className="size">
                          Size : <span>S</span>
                        </p>
                        <p className="color">
                          Color : <span>#A85A5A</span>
                        </p>
                      </div>
                    </div>
                  </td>
                  <td style={{ width: "15%" }}>
                    <div className="d-flex align-items-center gap-15 mt-4">
                      $ 100
                    </div>
                  </td>
                  <td style={{ width: "30%" }}>
                    <div className="d-flex align-items-center gap-10 mt-3">
                      <input
                        type="number"
                        name=""
                        min={1}
                        max={10}
                        style={{ width: "70px" }}
                        className="form-control"
                      />
                      <button
                        style={{ padding: "9px 12px" }}
                        className="button border-0"
                        type="button"
                      >
                        <AiFillDelete />
                      </button>
                    </div>
                  </td>
                  <td style={{ width: "15%" }}>
                    <div className="d-flex align-items-center gap-15 mt-4">
                      $ 100
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "40%" }}>
                    <div className="d-flex align-items-center gap-15">
                      <img width="110px" src={watch2} alt="product-image" />
                      <div className="td-product">
                        <h5 className="title">
                          Kids Headphones bulk 10 pack multi colored for
                          students.
                        </h5>
                        <p className="size">
                          Size : <span>S</span>
                        </p>
                        <p className="color">
                          Color : <span>#A85A5A</span>
                        </p>
                      </div>
                    </div>
                  </td>
                  <td style={{ width: "15%" }}>
                    <div className="d-flex align-items-center gap-15 mt-4">
                      $ 120
                    </div>
                  </td>
                  <td style={{ width: "30%" }}>
                    <div className="d-flex align-items-center gap-10 mt-3">
                      <input
                        type="number"
                        name=""
                        min={1}
                        max={10}
                        style={{ width: "70px" }}
                        className="form-control"
                      />
                      <button
                        style={{ padding: "9px 12px" }}
                        className="button border-0"
                        type="button"
                      >
                        <AiFillDelete />
                      </button>
                    </div>
                  </td>
                  <td style={{ width: "15%" }}>
                    <div className="d-flex align-items-center gap-15 mt-4">
                      $ 120
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-12 py-2 mt-3">
            <div className="d-flex justify-content-between align-items-baseline">
              <Link to="/product" className="button">
                Continue Shopping
              </Link>
              <div className="d-flex align-items-end flex-column">
                <h4>SubTotal: $ 1000</h4>
                <p>Taxes and shipping calculated at checkout</p>
                <Link to="/checkout" className="button">
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;
