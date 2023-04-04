import React from "react";
import BreadCrumbs from "../components/common/BreadCrumbs";
import Meta from "../components/common/Meta";

const Wishlist = () => {
  return (
    <>
      <Meta title={"Wishlist"}></Meta>
      <BreadCrumbs title="Wishlist" />
      <div className="wishlist-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img
                    src="images/watch.jpg"
                    className="img-fluid w-100"
                    alt="wishlist"
                  />
                </div>
                <div className="wishlist-details py-3 px-3">
                  <h5 className="title">Galaxy watch Active 2 144mm</h5>
                  <h6 className="price mb-2">$ 189</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img
                    src="images/watch.jpg"
                    className="img-fluid w-100"
                    alt="wishlist"
                  />
                </div>
                <div className="wishlist-details py-3 px-3">
                  <h5 className="title">Galaxy watch Active 2 144mm</h5>
                  <h6 className="price mb-2">$ 189</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img
                    src="images/watch.jpg"
                    className="img-fluid w-100"
                    alt="wishlist"
                  />
                </div>
                <div className="wishlist-details py-3 px-3">
                  <h5 className="title">Galaxy watch Active 2 144mm</h5>
                  <h6 className="price mb-2">$ 189</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
