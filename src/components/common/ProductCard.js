import React from "react";
import ReactStars from "react-rating-stars-component";
import { NavLink, Link, useLocation } from "react-router-dom";

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();
  return (
    <>
      <div
        className={`${
          location.pathname === "/store" ? `gr-${grid}` : "col-3 mb-2"
        }`}
      >
        <div className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="images/wish.svg" alt="wishlist" />
            </Link>
          </div>
          <div className="product-image">
            <img src="images/watch.jpg" alt="product image" />
            <img src="images/watch2.jpg" alt="product image" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havells</h6>
            <h5 className="product-title">
              Kids Headphones bulk 10 pack multi colored for students.
            </h5>
            <ReactStars
              count={5}
              value={3}
              size={20}
              edit={false}
              activeColor="#ffd700"
            />
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="wishlist-icon"></div>
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src="images/prodCompare.svg" alt="addcart" />
              </Link>
              <Link>
                <img src="images/view.svg" alt="view" />
              </Link>
              <Link>
                <img src="images/add-cart.svg" alt="addcart" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          location.pathname === "/store" ? `gr-${grid}` : "col-3 mb-2"
        }`}
      >
        <div className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="images/wish.svg" alt="wishlist" />
            </Link>
          </div>
          <div className="product-image">
            <img src="images/watch.jpg" alt="product image" />
            <img src="images/watch2.jpg" alt="product image" />
          </div>
          <div className="product-details">
            <h6 className="brand">Havells</h6>
            <h5 className="product-title">
              Kids Headphones bulk 10 pack multi colored for students.
            </h5>
            <p
              className={`product-description ${
                grid === 12 ? "d-block" : "d-none"
              }`}
            >
              Some quick example text to build on the card title and make up the
              bulk of the card's content. Some quick example text to build on
              the card title and make up the bulk of the card's content. Some
              quick example text to build on the card title and make up the bulk
              of the card's content.
            </p>
            <ReactStars
              count={5}
              value={3}
              size={20}
              edit={false}
              activeColor="#ffd700"
            />
            <p className="price">$100.00</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="wishlist-icon"></div>
            <div className="d-flex flex-column gap-15">
              <Link>
                <img src="images/prodCompare.svg" alt="addcart" />
              </Link>
              <Link>
                <img src="images/view.svg" alt="view" />
              </Link>
              <Link>
                <img src="images/add-cart.svg" alt="addcart" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
