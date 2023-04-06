import React from "react";
import ReactStars from "react-rating-stars-component";
import { NavLink, Link, useLocation } from "react-router-dom";
import prodcompare from "../../images/prodcompare.svg";
import wish from "../../images/wish.svg";
import wishlist from "../../images/wishlist.svg";
import watch from "../../images/watch.jpg";
import watch2 from "../../images/watch2.jpg";
import watch3 from "../../images/watch3.jfif";
import addcart from "../../images/add-cart.svg";
import view from "../../images/view.svg";

const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();
  return (
    <>
      <div
        className={`${
          location.pathname === "/product" ? `gr-${grid}` : "col-3 mb-2"
        }`}
      >
        <Link to=":id" className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src={wish} alt="wishlist" />
            </Link>
          </div>
          <div className="product-image">
            <img src={watch} alt="product image" />
            <img src={watch2} alt="product image" />
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
                <img src={prodcompare} alt="addcart" />
              </Link>
              <Link>
                <img src={view} alt="view" />
              </Link>
              <Link>
                <img src={addcart} alt="addcart" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
      <div
        className={`${
          location.pathname === "/product" ? `gr-${grid}` : "col-3 mb-2"
        }`}
      >
        <Link to=":id" className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src={wish} alt="wishlist" />
            </Link>
          </div>
          <div className="product-image">
            <img src={watch} alt="product image" />
            <img src={watch2} alt="product image" />
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
                <img src={prodcompare} alt="addcart" />
              </Link>
              <Link>
                <img src={view} alt="view" />
              </Link>
              <Link>
                <img src={addcart} alt="addcart" />
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
