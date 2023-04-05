import React from "react";
import { NavLink, Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="blog-card">
      <div className="card-image">
        <img src="images/blog-1.jpg" className="img-fluid" alt="blog" />
      </div>
      <div className="blog-content">
        <p className="date">1 Dec, 2022</p>
        <h5 className="title">
          A beatiful sunday morning renaissance
          {/* <h2 className="article-card__title 123" id="Article-558559887529">

                </h2> */}
        </h5>
        <p className="desc">addfsfefe wefewgew ewgeewgew fewfewfee ewge</p>
        <Link to="/blog/:id" className="button">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
