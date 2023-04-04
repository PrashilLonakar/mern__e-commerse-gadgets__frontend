import React from "react";
import BreadCrumbs from "../components/common/BreadCrumbs";
import Color from "../components/common/Color";
import Meta from "../components/common/Meta";

const CompareProduct = () => {
  return (
    <>
      <Meta title={"Compare Products"}></Meta>
      <BreadCrumbs title="Compare Products" />
      <div className="compare-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="product-card-image">
                  <img src="images/watch.jpg" alt="product-card-image" />
                </div>
                <div className="compare-product-detail">
                  <h5 className="title">Galaxy watch Active 2 144mm</h5>
                  <h6 className="price mb-2">$ 189</h6>
                  <div>
                    <div className="product-detail">
                      <h5>Brand: </h5>
                      <p className="mb-2">Samsung</p>
                    </div>
                    <div className="product-detail">
                      <h5>type: </h5>
                      <p className="mb-2">Watch</p>
                    </div>
                    <div className="product-detail">
                      <h5>Availability: </h5>
                      <p className="mb-2">In Stocks</p>
                    </div>
                    <div className="product-detail">
                      <h5>Color: </h5>
                      <Color />
                    </div>
                    <div className="product-detail">
                      <h5>Size: </h5>
                      <div className="d-flex gap-10">
                        <p>S</p>
                        <p>M</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="product-card-image">
                  <img src="images/watch.jpg" alt="product-card-image" />
                </div>
                <div className="compare-product-detail">
                  <h5 className="title">Galaxy watch Active 2 144mm</h5>
                  <h6 className="price mb-2">$ 189</h6>
                  <div>
                    <div className="product-detail">
                      <h5>Brand: </h5>
                      <p className="mb-2">Samsung</p>
                    </div>
                    <div className="product-detail">
                      <h5>type: </h5>
                      <p className="mb-2">Watch</p>
                    </div>
                    <div className="product-detail">
                      <h5>Availability: </h5>
                      <p className="mb-2">In Stocks</p>
                    </div>
                    <div className="product-detail">
                      <h5>Color: </h5>
                      <Color />
                    </div>
                    <div className="product-detail">
                      <h5>Size: </h5>
                      <div className="d-flex gap-10">
                        <p>S</p>
                        <p>M</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="product-card-image">
                  <img src="images/watch.jpg" alt="product-card-image" />
                </div>
                <div className="compare-product-detail">
                  <h5 className="title">Galaxy watch Active 2 144mm</h5>
                  <h6 className="price mb-2">$ 189</h6>
                  <div>
                    <div className="product-detail">
                      <h5>Brand: </h5>
                      <p className="mb-2">Samsung</p>
                    </div>
                    <div className="product-detail">
                      <h5>type: </h5>
                      <p className="mb-2">Watch</p>
                    </div>
                    <div className="product-detail">
                      <h5>Availability: </h5>
                      <p className="mb-2">In Stocks</p>
                    </div>
                    <div className="product-detail">
                      <h5>Color: </h5>
                      <Color />
                    </div>
                    <div className="product-detail">
                      <h5>Size: </h5>
                      <div className="d-flex gap-10">
                        <p>S</p>
                        <p>M</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompareProduct;
