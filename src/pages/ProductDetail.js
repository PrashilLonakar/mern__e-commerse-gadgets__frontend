import React, { useState } from "react";
import BreadCrumbs from "../components/common/BreadCrumbs";
import Meta from "../components/common/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/common/ProductCard";
import Color from "../components/common/Color";

const ProductDetail = () => {
  const [orderProduct, setOrderProduct] = useState(true);
  return (
    <>
      <Meta title={"Dynamic Product Name"}></Meta>
      <BreadCrumbs title="Dynamic Product Name" />
      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6"></div>
          </div>
        </div>
      </div>
      <section className="description-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4>Description</h4>
              <div className="bg-white p-3">
                <p>
                  A card is a flexible and extensible content container. It
                  includes options for headers and footers, a wide variety of
                  content, contextual background colors, and powerful display
                  options. If you’re familiar with Bootstrap 3, cards replace
                  our old panels, wells, and thumbnails. Similar functionality
                  to those components is available as modifier classes for
                  cards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="review-wrapper pb-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3>Reviews</h3>
              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end">
                  <div>
                    <h4 className="mb-2">Customer Reviews</h4>
                    <div className="d-flex gap-10">
                      <ReactStars
                        count={5}
                        value={3}
                        size={20}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0 mt-1">Based on 2 Reviews</p>
                    </div>
                  </div>
                  {orderProduct && (
                    <div>
                      <a
                        className="text-dark text-decoration-underline"
                        href=""
                      >
                        Write a Review
                      </a>
                    </div>
                  )}
                </div>
                <div className="review-form py-4">
                  <h4 className="mb-2">Write a Review</h4>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <div>
                        <ReactStars
                          count={5}
                          value={3}
                          size={20}
                          edit={true}
                          activeColor="#ffd700"
                        />
                      </div>
                      <textarea
                        name=""
                        id=""
                        className="w-100 form-control"
                        cols="30"
                        rows="4"
                        placeholder="Comments"
                      ></textarea>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="button border-0" type="submit">
                        Submit Review
                      </button>
                    </div>
                  </form>
                </div>

                <div className="reviews mt-3">
                  <div className="review">
                    <div className="d-flex gap-10 align-items-center">
                      <div className="reviewer-name mb-0">dynamic person</div>
                      <ReactStars
                        count={5}
                        value={3}
                        size={20}
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mb-3">
                      A card is a flexible and extensible content container. It
                      includes options for headers and footers, a wide variety
                      of content, contextual background colors, and powerful
                      display options.
                    </p>
                  </div>
                  <div className="review">
                    <div className="d-flex gap-10 align-items-center">
                      <div className="reviewer-name mb-0">dynamic person</div>
                      <ReactStars
                        count={5}
                        value={3}
                        size={20}
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mb-3">
                      A card is a flexible and extensible content container. It
                      includes options for headers and footers, a wide variety
                      of content, contextual background colors, and powerful
                      display options.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">You may also like</h3>
            </div>
          </div>
          <div className="row">
            <ProductCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
