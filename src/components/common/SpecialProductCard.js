import React from "react";
import ReactStars from "react-rating-stars-component";
import { NavLink, Link } from "react-router-dom";

const SpecialProductCard = () => {
  return (
    <div className="col-6 mb-3">
      <div className="special-product-card">
        <div className="d-flex justify-content-between">
          <div className="special-product-image">
            <img
              className="image-fluid"
              src="images/watch.jpg"
              alt="special product"
            />
          </div>
          <div className="special-product-content">
            <h5 className="brand">Havells</h5>
            <h6 className="title">Havels bulbs</h6>
            <ReactStars
              count={5}
              value={3}
              size={20}
              edit={false}
              activeColor="#ffd700"
            />
            <p className="price">
              <span className="red-p">$100.00</span>&nbsp;
              <strike>$200.00</strike>
            </p>
            <div className="discount-till d-flex align-items-center gap-10">
              <p>
                <b>5 days</b>
              </p>
              <div className="d-flex align-items-center gap-10">
                <span className="badge rounded-circle p-3 bg-alert bg-danger">
                  1
                </span>
                :
                <span className="badge rounded-circle p-3 bg-alert bg-danger">
                  1
                </span>
                :
                <span className="badge rounded-circle p-3 bg-alert bg-danger">
                  1
                </span>
              </div>
            </div>
            <div className="prod-count my-3">
              <p>Products: 5</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "25%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <Link className="button">Add to Cart</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialProductCard;
