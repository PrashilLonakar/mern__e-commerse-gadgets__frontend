import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Free Shipping for 100$ & free Returns
              </p>
            </div>
            <div className="col-6">
              <p className="text-end">
                Hotline:{" "}
                <a className="text-white" href="tel: +91 7558615669">
                  (+91) 7558615669
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2 logo-name">
              <h1>
                <Link className="text-white">Digitic.</Link>
              </h1>
            </div>
            <div className="col-5">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search Product here..."
                  aria-label="Search Product here..."
                  aria-describedby="basic-addon2"
                />
                <span class="input-group-text" id="basic-addon2">
                  <BsSearch />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <img src="images/compare.svg" alt="compare" />
                    <p className="mb-0 pb-0">
                      Compare <br /> Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <img src="images/wishlist.svg" alt="wishlist" />
                    <p className="mb-0 pb-0">
                      Favourite <br /> wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <img src="images/user.svg" alt="yser" />
                    <p className="mb-0 pb-0">
                      Log in <br /> My Acount
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center gap-10 text-white">
                    <img src="images/cart.svg" alt="cart" />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">0</span>
                      <p className="pb-0 mb-0">$ 500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
