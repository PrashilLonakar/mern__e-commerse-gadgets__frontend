import React from "react";
import { Link } from "react-router-dom";
import BreadCrumbs from "../components/common/BreadCrumbs";
import Meta from "../components/common/Meta";
import { AiOutlineArrowLeft } from "react-icons/ai";
const SingleBlog = () => {
  return (
    <>
      <Meta title={"Dynamic Blog Name"}></Meta>
      <BreadCrumbs title="Dynamic Blog Name" />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to="/blogs" className="d-flex align-items-center gap-10">
                  <AiOutlineArrowLeft className="fs-4" />
                  Go back to Blogs
                </Link>
                <h3 className="title">
                  A Beautiful Sunday Morning Renaissance
                </h3>
                <img
                  src="/images/blog-1.jpg"
                  class="img-fluid w-100 my-4"
                  alt="blog"
                />
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
      </div>
    </>
  );
};

export default SingleBlog;
