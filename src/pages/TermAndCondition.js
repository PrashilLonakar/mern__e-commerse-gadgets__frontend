import React from "react";
import BreadCrumbs from "../components/common/BreadCrumbs";
import Meta from "../components/common/Meta";

const TermAndCondition = () => {
  return (
    <>
      <Meta title={"Term and Conditions"}></Meta>
      <BreadCrumbs title="Term and Conditions" />
      <section className="policy-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="policy"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermAndCondition;
