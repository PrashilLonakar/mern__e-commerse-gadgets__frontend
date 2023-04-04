import React, { useState } from "react";
import BreadCrumbs from "../components/common/BreadCrumbs";
import Meta from "../components/common/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/common/ProductCard";
import Color from "../components/common/Color";

const OurStore = () => {
  const [grid, setGrid] = useState(4);
  return (
    <>
      <Meta title={"Our Store"}></Meta>
      <BreadCrumbs title="Our Store" />
      <div className="store-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <div className="filter-title">Shop by Categories</div>
                <div>
                  <ul className="ps-0">
                    <li>Watch</li>
                    <li>Tv</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
              <div id="filter" className="filter-card mb-3">
                <div className="filter-title">Filter By</div>
                <div id="available">
                  <h5 className="sub-title">Availibility</h5>
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                        In Stock (1)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckChecked"
                      >
                        Out of Stock (0)
                      </label>
                    </div>
                  </div>
                </div>
                <div id="price">
                  <h5 className="sub-title">Price</h5>
                  <div className="d-flex align-items-center gap-10">
                    <form className="form-floating">
                      <input
                        type="number"
                        className="form-control"
                        id="floatingInputValue"
                        placeholder="Form"
                      />
                      <label htmlFor="floatingInputValue">From</label>
                    </form>
                    <form className="form-floating">
                      <input
                        type="number"
                        className="form-control"
                        id="floatingInputValue"
                        placeholder="To"
                      />
                      <label htmlFor="floatingInputValue">To</label>
                    </form>
                  </div>
                </div>
                <div id="color">
                  <h5 className="sub-title">Colors</h5>
                  <div>
                    <div>
                      <Color />
                    </div>
                  </div>
                </div>
                <div id="size">
                  <h5 className="sub-title">Size</h5>
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="color-1"
                      />
                      <label className="form-check-label" htmlFor="color-1">
                        S (1)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="color-2"
                      />
                      <label className="form-check-label" htmlFor="color-2">
                        M (2)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div id="product-tags" className="filter-card mb-3">
                <h3 className="filter-title">Product Tags</h3>
                <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                  <span className="badge bg-f0f1f2 text-secondary rounded-3 py-2 px-3 pointer">
                    Headphones
                  </span>
                  <span className="badge bg-f0f1f2 text-secondary rounded-3 py-2 px-3 pointer">
                    Laptop
                  </span>
                  <span className="badge bg-f0f1f2 text-secondary rounded-3 py-2 px-3 pointer">
                    Mobile
                  </span>
                  <span className="badge bg-f0f1f2 text-secondary rounded-3 py-2 px-3 pointer">
                    Wire
                  </span>
                </div>
              </div>
              <div className="filter-card mb-3">
                <div className="filter-title">Random Products</div>
                <div>
                  <div className="random-products">
                    <div className="d-flex">
                      <div className="w-50">
                        <img
                          src="images/watch.jpg"
                          className="image-fluid"
                          alt="random-product"
                        />
                      </div>
                      <div className="w-50">
                        <h5>Kids Headphone bulk 10 multi color for student</h5>
                        <ReactStars
                          count={5}
                          value={3}
                          size={20}
                          edit={false}
                          activeColor="#ffd700"
                        />
                        <p>$300</p>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div className="w-50">
                        <img
                          src="images/watch.jpg"
                          className="image-fluid"
                          alt="random-product"
                        />
                      </div>
                      <div className="w-50">
                        <h5>Kids Headphone bulk 10 multi color for student</h5>
                        <ReactStars
                          count={5}
                          value={3}
                          size={20}
                          edit={false}
                          activeColor="#ffd700"
                        />
                        <p>$300</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid mb-4">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center gap-10">
                    <p style={{ width: "100px" }} className="mb-0 d-block">
                      Sort By:
                    </p>
                    <select name="" className="form-control form-select" id="">
                      <option value="manual">Featured</option>
                      <option value="best-selling">Best Selling</option>
                      <option value="title-ascending">Alphabetic, A-Z</option>
                      <option value="title-descending">Alphabetic, Z-A</option>
                      <option value="price-ascending">
                        Price, low to high
                      </option>
                      <option value="price-descending">
                        Price, high to low
                      </option>
                      <option value="created-ascending">
                        Date, new to old
                      </option>
                      <option value="created-descending">
                        Date, old to new
                      </option>
                    </select>
                  </div>
                  <div className="d-flex align-items-center gap-10">
                    <p className="total-products mb-0">21 Products</p>
                    <div className="d-flex align-items-center gap-10 grid">
                      <img
                        onClick={() => {
                          setGrid(3);
                        }}
                        src="images/gr4.svg"
                        alt="grid"
                        className="d-block img-fluid pointer"
                      />
                      <img
                        onClick={() => {
                          setGrid(4);
                        }}
                        src="images/gr3.svg"
                        alt="grid"
                        className="d-block img-fluid pointer"
                      />
                      <img
                        onClick={() => {
                          setGrid(6);
                        }}
                        src="images/gr2.svg"
                        alt="grid"
                        className="d-block img-fluid pointer"
                      />
                      <img
                        onClick={() => {
                          setGrid(12);
                        }}
                        src="images/gr.svg"
                        alt="grid"
                        className="d-block img-fluid pointer"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-list pb-5">
                <div className="d-flex gap-10 flex-wrap">
                  <ProductCard grid={grid} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStore;
