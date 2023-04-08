import React from "react";
import BreadCrumbs from "../components/common/BreadCrumbs";
import Container from "../components/common/Container";
import Meta from "../components/common/Meta";

const TermAndCondition = () => {
  return (
    <>
      <Meta title={"Term and Conditions"}></Meta>
      <BreadCrumbs title="Term and Conditions" />
      <Container class1="policy-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="policy"></div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default TermAndCondition;
