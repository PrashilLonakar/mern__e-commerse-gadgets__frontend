import React from "react";
import BreadCrumbs from "../components/common/BreadCrumbs";
import { Helmet } from "react-helmet";
import Meta from "../components/common/Meta";

const OurStore = () => {
  return (
    <>
      <Meta title={"Our Store"}></Meta>
      <BreadCrumbs title="Our Store" />
    </>
  );
};

export default OurStore;
