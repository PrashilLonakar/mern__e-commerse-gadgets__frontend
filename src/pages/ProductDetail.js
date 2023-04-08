import React, { useState } from "react";
import BreadCrumbs from "../components/common/BreadCrumbs";
import Meta from "../components/common/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/common/ProductCard";
import Color from "../components/common/Color";
import ReactImageZoom from "react-image-zoom";
import { BiGitCompare } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import Container from "../components/common/Container";

const ProductDetail = () => {
  const [orderProduct, setOrderProduct] = useState(true);
  console.log(setOrderProduct);
  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };

  const props = {
    width: 500,
    height: 500,
    zoomWidth: 600,
    img: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  };
  return (
    <>
      <Meta title={"Dynamic Product Name"}></Meta>
      <BreadCrumbs title="Dynamic Product Name" />
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <div>
                <ReactImageZoom {...props} />
              </div>
              <div className="other-product-images d-flex flex-wrap gap-10">
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="other"
                    className="img-fluid"
                  />
                </div>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="other"
                    className="img-fluid"
                  />
                </div>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="other"
                    className="img-fluid"
                  />
                </div>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt="other"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3 className="title">
                  Kids Headphones bulk 10 pack multi colored for students.
                </h3>
              </div>
              <div className="border-bottom py-3">
                <div className="price">$ 100</div>
                <div className="d-flex align-items-center gap-10">
                  <ReactStars
                    count={5}
                    value={3}
                    size={20}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p className="mb-0 t-review">(2 Reviews)</p>
                </div>
                <a className="review-btn" href="#review">
                  Write a Review
                </a>
              </div>
              <div className="py-3">
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Type:</h3>
                  <p className="product-data">Watch</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Brand:</h3>
                  <p className="product-data">Havells</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Category:</h3>
                  <p className="product-data">Watch</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">tags:</h3>
                  <p className="product-data">Watch</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Availability:</h3>
                  <p className="product-data">In Stock</p>
                </div>
                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                  <h3 className="product-heading">Size:</h3>
                  <div className="d-flex flex-wrap gap-15">
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      S
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      M
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      L
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      XL
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      XXL
                    </span>
                  </div>
                </div>
                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                  <h3 className="product-heading">Color:</h3>
                  <Color />
                </div>
                <div className="d-flex align-items-center gap-10 flex-row mt-2 mb-3">
                  <h3 className="product-heading">Quantity:</h3>
                  <div>
                    <input
                      type="number"
                      name=""
                      min={1}
                      max={10}
                      style={{ width: "70px" }}
                      className="form-control"
                    />
                  </div>
                  <div>
                    <div className="d-flex justify-content-center gap-15 align-items-center ms-5">
                      <button className="button border-0" type="submit">
                        Add to Cart
                      </button>
                      <button className="button signup">Buy it Now</button>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <div>
                    <a href="/#">
                      <BiGitCompare className="fs-5 me-2" />
                      Add to Compare
                    </a>
                  </div>
                  <div>
                    <a href="/#">
                      <AiOutlineHeart className="fs-5 me-2" />
                      Add to Wishlist
                    </a>
                  </div>
                </div>
                <div className="d-flex gap-10 flex-column my-3">
                  <h3 className="product-heading">Shipping & Returns :</h3>
                  <p className="product-data">
                    The accordion uses collapse internally to make it
                    collapsible. To render an accordion that’s expanded, add the
                    .open class on the .accordion.
                  </p>
                </div>
                <div className="d-flex gap-10 align-items-center my-3">
                  <h3 className="product-heading">Product Link :</h3>
                  <a
                    href="/#"
                    onClick={() => {
                      copyToClipboard(
                        "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                      );
                    }}
                  >
                    Copy Product Link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="description-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h4>Description</h4>
            <div className="bg-white p-3">
              <p>
                A card is a flexible and extensible content container. It
                includes options for headers and footers, a wide variety of
                content, contextual background colors, and powerful display
                options. If you’re familiar with Bootstrap 3, cards replace our
                old panels, wells, and thumbnails. Similar functionality to
                those components is available as modifier classes for cards.
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Container id="r1w" className="review-wrapper pb-5 home-wrapper-2">
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
                      href="/#"
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
                    includes options for headers and footers, a wide variety of
                    content, contextual background colors, and powerful display
                    options.
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
                    includes options for headers and footers, a wide variety of
                    content, contextual background colors, and powerful display
                    options.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="Container-heading">You may also like</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard />
        </div>
      </Container>
    </>
  );
};

export default ProductDetail;
